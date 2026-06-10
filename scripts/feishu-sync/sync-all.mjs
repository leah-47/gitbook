#!/usr/bin/env node
import { parseArgs } from 'node:util'
import { getTenantAccessToken, loadAllMappings, syncOne } from './lib.mjs'

const { values: args } = parseArgs({
  options: {
    map: { type: 'string', default: '.feishu-map.yml' },
    help: { type: 'boolean', short: 'h' },
  },
})

if (args.help) {
  console.log(`按 .feishu-map.yml 批量同步全部映射文档

Environment:
  FEISHU_APP_ID
  FEISHU_APP_SECRET

Example:
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
  const mappings = loadAllMappings(args.map)
  if (!mappings.length) {
    console.error(`映射表 ${args.map} 中没有有效条目`)
    process.exit(1)
  }

  console.log(`共 ${mappings.length} 篇文档待同步`)
  const accessToken = await getTenantAccessToken(appId, appSecret)

  const updated = []
  const failed = []

  for (const entry of mappings) {
    try {
      const path = await syncOne({
        accessToken,
        wiki: entry.wiki_token ?? undefined,
        doc: entry.doc_token ?? undefined,
        path: entry.githubPath,
        title: entry.title ?? undefined,
        map: args.map,
      })
      updated.push(path)
    } catch (err) {
      failed.push({ path: entry.githubPath, error: err.message })
      console.error(`[失败] ${entry.githubPath}: ${err.message}`)
    }
  }

  console.log(`\n完成: 成功 ${updated.length}，失败 ${failed.length}`)
  if (failed.length) process.exit(1)
}

main().catch((err) => {
  console.error(err.message)
  process.exit(1)
})
