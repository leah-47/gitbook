import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export const FEISHU_HOST = 'https://open.feishu.cn'

const libDir = path.dirname(fileURLToPath(import.meta.url))

export function repoRoot() {
  return path.resolve(libDir, '../..')
}

export function parseMapBlocks(content) {
  return content.split(/\n\s*-\s*feishu:/).slice(1).map((block) => {
    const wiki = block.match(/wiki_token:\s*["']?([^\s"']+)["']?/)
    const doc = block.match(/doc_token:\s*["']?([^\s"']+)["']?/)
    const pathMatch = block.match(/path:\s*["']?([^\s"']+)["']?/)
    const titleMatch = block.match(/title:\s*["'](.+?)["']/)
    return {
      wiki_token: wiki?.[1] ?? null,
      doc_token: doc?.[1] ?? null,
      githubPath: pathMatch?.[1]?.replace(/^\//, '') ?? null,
      title: titleMatch?.[1] ?? null,
    }
  })
}

export function loadAllMappings(mapPath = '.feishu-map.yml') {
  const full = path.isAbsolute(mapPath) ? mapPath : path.join(repoRoot(), mapPath)
  if (!fs.existsSync(full)) {
    throw new Error(`映射表不存在: ${full}`)
  }

  return parseMapBlocks(fs.readFileSync(full, 'utf8')).filter(
    (entry) => entry.githubPath && (entry.wiki_token || entry.doc_token),
  )
}

export function findInMap(mapPath, { docToken, wikiToken }) {
  for (const entry of loadAllMappings(mapPath)) {
    if (docToken && entry.doc_token === docToken) return entry
    if (wikiToken && entry.wiki_token === wikiToken) return entry
  }
  return null
}

export async function getTenantAccessToken(appId, appSecret) {
  const res = await fetch(`${FEISHU_HOST}/open-apis/auth/v3/tenant_access_token/internal`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ app_id: appId, app_secret: appSecret }),
  })
  const json = await res.json()
  if (json.code !== 0) {
    throw new Error(`获取 tenant_access_token 失败: ${json.code} ${json.msg}`)
  }
  return json.tenant_access_token
}

export function parseFeishuLink(input) {
  const trimmed = input.trim()

  const docxFromUrl = trimmed.match(/\/docx\/([A-Za-z0-9]+)/)
  if (docxFromUrl) return { kind: 'docx', token: docxFromUrl[1] }

  const wikiFromUrl = trimmed.match(/\/wiki\/([A-Za-z0-9]+)/)
  if (wikiFromUrl) return { kind: 'wiki', token: wikiFromUrl[1] }

  if (/^doxcn/i.test(trimmed)) return { kind: 'docx', token: trimmed }

  return { kind: 'wiki', token: trimmed }
}

export async function resolveDocToken(accessToken, source) {
  if (source.kind === 'docx') {
    return { docToken: source.token, wikiNodeToken: null }
  }

  const res = await fetch(
    `${FEISHU_HOST}/open-apis/wiki/v2/spaces/get_node?token=${encodeURIComponent(source.token)}`,
    { headers: { Authorization: `Bearer ${accessToken}` } },
  )
  const json = await res.json()
  if (json.code !== 0) {
    const hint =
      json.code === 99991672 || json.code === 91403
        ? '\n提示: 知识库页面需在「… → 添加文档应用」授权，或在知识库设置里把应用加为成员。'
        : '\n提示: 若使用知识库链接，请在应用权限里开通 wiki:wiki:readonly。'
    throw new Error(`读取知识库节点失败 (${source.token}): ${json.code} ${json.msg}${hint}`)
  }

  const node = json.data?.node
  const objType = node?.obj_type
  const objToken = node?.obj_token

  if (!objToken) {
    throw new Error(`知识库节点 ${source.token} 没有 obj_token，可能不是文档页面`)
  }

  if (objType !== 'docx') {
    throw new Error(
      `知识库节点类型是 "${objType}"，当前 PoC 仅支持新版文档 docx。`,
    )
  }

  console.log(`知识库节点 ${source.token} → docx ${objToken}`)
  return { docToken: objToken, wikiNodeToken: source.token }
}

export async function fetchDocumentRawContent(token, documentId) {
  const res = await fetch(
    `${FEISHU_HOST}/open-apis/docx/v1/documents/${documentId}/raw_content`,
    { headers: { Authorization: `Bearer ${token}` } },
  )
  const json = await res.json()
  if (json.code !== 0) {
    const hint =
      json.code === 99991672 || json.code === 91403
        ? '\n提示: 请在飞书文档右上角「… → 添加文档应用」里，把自建应用加为协作者。'
        : ''
    throw new Error(`读取飞书文档失败 (${documentId}): ${json.code} ${json.msg}${hint}`)
  }
  return json.data?.content ?? ''
}

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { meta: {}, body: content }
  const meta = {}
  for (const line of match[1].split('\n')) {
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
    if (m) meta[m[1]] = m[2].replace(/^["']|["']$/g, '')
  }
  return { meta, body: match[2] }
}

function buildMarkdown({ meta, docToken, wikiNodeToken, title, rawContent }) {
  const nextMeta = {
    ...meta,
    feishu_doc_token: docToken,
    feishu_synced_at: new Date().toISOString(),
  }
  if (wikiNodeToken) nextMeta.feishu_wiki_token = wikiNodeToken
  if (title && !nextMeta.title) nextMeta.title = JSON.stringify(title)

  const lines = ['---']
  for (const [key, value] of Object.entries(nextMeta)) {
    const needsQuote = /[:#\[\]{}|>&*!]/.test(String(value))
    lines.push(`${key}: ${needsQuote ? JSON.stringify(String(value)) : value}`)
  }
  lines.push('---', '')

  const normalizedBody = rawContent.trim()
  if (!normalizedBody) {
    lines.push('> 飞书文档正文为空，或当前 PoC 仅拉取 raw_content。')
  } else {
    lines.push(normalizedBody)
  }
  lines.push('')
  return lines.join('\n')
}

/**
 * @param {object} options
 * @param {string} options.accessToken
 * @param {string} [options.wiki]
 * @param {string} [options.doc]
 * @param {string} [options.url]
 * @param {string} [options.path]
 * @param {string} [options.title]
 * @param {string} [options.map]
 */
export async function syncOne({
  accessToken,
  wiki,
  doc,
  url,
  path: githubPath,
  title,
  map = '.feishu-map.yml',
}) {
  let source
  if (url) {
    source = parseFeishuLink(url)
  } else if (wiki) {
    source = { kind: 'wiki', token: wiki }
  } else if (doc) {
    source = parseFeishuLink(doc)
  } else {
    throw new Error('syncOne 需要 url、wiki 或 doc 参数之一')
  }

  const { docToken, wikiNodeToken } = await resolveDocToken(accessToken, source)

  let targetPath = githubPath?.replace(/^\//, '')
  let targetTitle = title

  if (!targetPath) {
    const hit = findInMap(map, { docToken, wikiToken: wikiNodeToken ?? wiki ?? null })
    if (!hit) {
      throw new Error(`未指定 path，且映射表中没有 doc=${docToken} / wiki=${wikiNodeToken ?? wiki}`)
    }
    targetPath = hit.githubPath
    targetTitle ??= hit.title
  }

  const outputPath = path.join(repoRoot(), targetPath)
  console.log(`同步: ${docToken} → ${targetPath}`)

  const rawContent = await fetchDocumentRawContent(accessToken, docToken)

  let existing = { meta: {}, body: '' }
  if (fs.existsSync(outputPath)) {
    existing = parseFrontmatter(fs.readFileSync(outputPath, 'utf8'))
  }

  const firstHeading = rawContent.split('\n').find((line) => line.trim())
  const derivedTitle =
    targetTitle ??
    existing.meta.title?.replace(/^["']|["']$/g, '') ??
    firstHeading?.replace(/^#+\s*/, '')

  const markdown = buildMarkdown({
    meta: existing.meta,
    docToken,
    wikiNodeToken,
    title: derivedTitle,
    rawContent,
  })

  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, markdown, 'utf8')

  console.log(`已写入 ${targetPath}（${markdown.length} 字符）`)
  return targetPath
}
