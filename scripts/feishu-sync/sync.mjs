#!/usr/bin/env node
import { parseArgs } from 'node:util'
import { getTenantAccessToken, syncOne } from './lib.mjs'

const { values: args, positionals } = parseArgs({
  options: {
    doc: { type: 'string', short: 'd' },
    wiki: { type: 'string', short: 'w' },
    url: { type: 'string', short: 'u' },
    path: { type: 'string', short: 'p' },
    map: { type: 'string', default: '.feishu-map.yml' },
    help: { type: 'boolean', short: 'h' },
  },
  allowPositionals: true,
})

if (args.help) {
  console.log(`Feishu → Markdown sync

Environment:
  FEISHU_APP_ID       飞书自建应用 App ID
  FEISHU_APP_SECRET   飞书自建应用 App Secret

Options:
  --doc, -d    docx token
  --wiki, -w   知识库 wiki token
  --url, -u    飞书链接（自动识别 docx / wiki）
  --path, -p   GitHub 文件路径
  --map        映射表，默认 .feishu-map.yml

Examples:
  node scripts/feishu-sync/sync.mjs -w C1snwEs4hiVZtNk1fZlcCfTEnRe -p docs/feishu-sync-test.md
  node scripts/feishu-sync/sync.mjs -w C1snwEs4hiVZtNk1fZlcCfTEnRe
  node scripts/feishu-sync/sync-all.mjs
`)
  process.exit(0)
}

const appId = process.env.FEISHU_APP_ID
const appSecret = process.env.FEISHU_APP_SECRET

if (!appId || !appSecret) {
  console.error('缺少 FEISHU_APP_ID 或 FEISHU_APP_SECRET 环境变量')
  process.exit(1)
}

async function main() {
  const rawInput = args.url ?? args.wiki ?? args.doc ?? positionals[0]
  if (!rawInput && !args.path) {
    console.error('请提供飞书链接/token，或运行 sync-all.mjs 同步映射表内全部文档')
    process.exit(1)
  }

  const accessToken = await getTenantAccessToken(appId, appSecret)
  await syncOne({
    accessToken,
    url: args.url,
    wiki: args.wiki ?? (!args.url && !args.doc ? rawInput : undefined),
    doc: args.doc,
    path: args.path,
    map: args.map,
  })
}

main().catch((err) => {
  console.error(err.message)
  process.exit(1)
})
