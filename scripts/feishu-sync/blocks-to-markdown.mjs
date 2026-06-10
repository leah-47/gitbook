import fs from 'node:fs'
import path from 'node:path'
import { FEISHU_HOST } from './constants.mjs'

const BLOCK = {
  PAGE: 1,
  TEXT: 2,
  H1: 3,
  H2: 4,
  H3: 5,
  H4: 6,
  H5: 7,
  H6: 8,
  H7: 9,
  H8: 10,
  H9: 11,
  BULLET: 12,
  ORDERED: 13,
  CODE: 14,
  QUOTE: 15,
  TODO: 17,
  DIVIDER: 22,
  FILE: 23,
  GRID: 24,
  GRID_COLUMN: 25,
  IMAGE: 27,
  QUOTE_CONTAINER: 34,
}

const EXT_BY_MIME = {
  'image/png': '.png',
  'image/jpeg': '.jpg',
  'image/jpg': '.jpg',
  'image/gif': '.gif',
  'image/webp': '.webp',
  'image/bmp': '.bmp',
  'image/svg+xml': '.svg',
}

export async function fetchAllBlocks(accessToken, documentId) {
  const blocks = []
  let pageToken

  do {
    const url = new URL(`${FEISHU_HOST}/open-apis/docx/v1/documents/${documentId}/blocks`)
    url.searchParams.set('page_size', '500')
    if (pageToken) url.searchParams.set('page_token', pageToken)

    const res = await fetch(url, { headers: { Authorization: `Bearer ${accessToken}` } })
    const json = await res.json()
    if (json.code !== 0) {
      throw new Error(`读取文档 blocks 失败: ${json.code} ${json.msg}`)
    }

    blocks.push(...(json.data?.items ?? []))
    pageToken = json.data?.has_more ? json.data?.page_token : undefined
  } while (pageToken)

  const imageCount = blocks.filter((b) => b.block_type === BLOCK.IMAGE).length
  console.log(`  blocks 共 ${blocks.length} 个，其中图片块 ${imageCount} 个`)

  return blocks
}

function blockTextKey(blockType) {
  if (blockType >= BLOCK.H1 && blockType <= BLOCK.H9) {
    return `heading${blockType - BLOCK.H1 + 1}`
  }
  const map = {
    [BLOCK.TEXT]: 'text',
    [BLOCK.BULLET]: 'bullet',
    [BLOCK.ORDERED]: 'ordered',
    [BLOCK.CODE]: 'code',
    [BLOCK.QUOTE]: 'quote',
    [BLOCK.TODO]: 'todo',
    [BLOCK.PAGE]: 'page',
  }
  return map[blockType]
}

function parseTextElements(elements = []) {
  let out = ''
  for (const el of elements) {
    const run = el.text_run
    if (!run?.content) continue

    let text = run.content
    const style = run.text_element_style
    if (style?.link?.url) {
      const href = decodeURIComponent(style.link.url)
      text = `[${text}](${href})`
    } else if (style?.inline_code) {
      text = `\`${text}\``
    } else if (style?.bold) {
      text = `**${text}**`
    } else if (style?.italic) {
      text = `*${text}*`
    } else if (style?.strikethrough) {
      text = `~~${text}~~`
    }
    out += text
  }
  return out
}

function parseBlockText(block, blockType) {
  const key = blockTextKey(blockType)
  const payload = key ? block[key] : null
  if (!payload) return ''
  return parseTextElements(payload.elements ?? [])
}

async function downloadImage(accessToken, fileToken, destDir) {
  fs.mkdirSync(destDir, { recursive: true })

  const res = await fetch(`${FEISHU_HOST}/open-apis/drive/v1/medias/${fileToken}/download`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    redirect: 'follow',
  })

  const contentType = res.headers.get('content-type') ?? ''

  if (contentType.includes('application/json')) {
    const json = await res.json()
    throw new Error(`${json.code} ${json.msg}`)
  }

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`)
  }

  const mime = contentType.split(';')[0]?.trim() || 'image/png'
  const ext = EXT_BY_MIME[mime] ?? '.png'
  const filename = `${fileToken}${ext}`
  const destPath = path.join(destDir, filename)

  fs.writeFileSync(destPath, Buffer.from(await res.arrayBuffer()))
  return { filename, mime, destPath }
}

function createConverter(accessToken, assetsDir, assetUrlPrefix) {
  const blockMap = new Map()
  const downloaded = new Map()

  async function imageMarkdown(token, caption = '') {
    if (!token) return ''

    try {
      if (!downloaded.has(token)) {
        const info = await downloadImage(accessToken, token, assetsDir)
        downloaded.set(token, info.filename)
        console.log(`  图片已下载: ${info.filename}`)
      }

      const filename = downloaded.get(token)
      const alt = caption || 'image'
      return `![${alt}](${assetUrlPrefix}/${filename})\n\n`
    } catch (err) {
      console.warn(`  图片下载失败 (${token}): ${err.message}`)
      const label = caption || token
      return `![${label}](${assetUrlPrefix}/${token}.png)\n\n`
    }
  }

  async function renderBlock(block, indent = 0) {
    if (!block) return ''

    const type = block.block_type
    let out = ''

    switch (type) {
      case BLOCK.PAGE: {
        const title = parseBlockText(block, type)
        if (title.trim()) out += `# ${title.trim()}\n\n`
        break
      }
      case BLOCK.TEXT:
        out += `${parseBlockText(block, type)}\n\n`
        break
      case BLOCK.H1:
      case BLOCK.H2:
      case BLOCK.H3:
      case BLOCK.H4:
      case BLOCK.H5:
      case BLOCK.H6:
      case BLOCK.H7:
      case BLOCK.H8:
      case BLOCK.H9: {
        const level = type - BLOCK.H1 + 1
        out += `${'#'.repeat(level)} ${parseBlockText(block, type).trim()}\n\n`
        break
      }
      case BLOCK.BULLET:
        out += `${'  '.repeat(indent)}- ${parseBlockText(block, type).trim()}\n`
        break
      case BLOCK.ORDERED:
        out += `${'  '.repeat(indent)}1. ${parseBlockText(block, type).trim()}\n`
        break
      case BLOCK.CODE:
        out += `\`\`\`\n${parseBlockText(block, type).trim()}\n\`\`\`\n\n`
        break
      case BLOCK.QUOTE:
        out += `> ${parseBlockText(block, type).trim()}\n\n`
        break
      case BLOCK.TODO: {
        const done = block.todo?.style?.done
        out += `- [${done ? 'x' : ' '}] ${parseBlockText(block, type).trim()}\n`
        break
      }
      case BLOCK.DIVIDER:
        out += `---\n\n`
        break
      case BLOCK.IMAGE:
        out += await imageMarkdown(
          block.image?.token,
          block.image?.caption?.content?.trim() ?? '',
        )
        break
      case BLOCK.FILE: {
        const name = block.file?.name ?? 'file'
        out += await imageMarkdown(block.file?.token, name)
        break
      }
      case BLOCK.GRID:
      case BLOCK.GRID_COLUMN:
      case BLOCK.QUOTE_CONTAINER:
        break
      default:
        break
    }

    if (type !== BLOCK.QUOTE_CONTAINER) {
      for (const childId of block.children ?? []) {
        const child = blockMap.get(childId)
        if (!child) continue
        if (child.block_type === BLOCK.BULLET || child.block_type === BLOCK.ORDERED) {
          out += await renderBlock(child, indent + 1)
        } else if (type !== BLOCK.IMAGE && type !== BLOCK.FILE) {
          out += await renderBlock(child, indent)
        }
      }
    } else {
      for (const childId of block.children ?? []) {
        out += `> ${(await renderBlock(blockMap.get(childId), indent)).replace(/\n/g, '\n> ')}\n`
      }
    }

    return out
  }

  return { blockMap, renderBlock }
}

export async function convertDocumentToMarkdown(accessToken, documentId, options) {
  const { assetsDir, assetUrlPrefix } = options
  const blocks = await fetchAllBlocks(accessToken, documentId)

  if (!blocks.length) {
    throw new Error('blocks 列表为空')
  }

  const { blockMap, renderBlock } = createConverter(accessToken, assetsDir, assetUrlPrefix)

  for (const block of blocks) {
    blockMap.set(block.block_id, block)
  }

  const root = blockMap.get(documentId) ?? blocks.find((b) => b.block_type === BLOCK.PAGE)
  if (!root) {
    throw new Error('找不到文档根 block')
  }

  const markdown = await renderBlock(root)
  if (!markdown.trim()) {
    throw new Error('blocks 转换结果为空')
  }

  return markdown.replace(/\n{3,}/g, '\n\n').trim()
}
