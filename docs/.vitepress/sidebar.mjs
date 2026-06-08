import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const SECTION_PREFIX = {
  'Getting Started': '/getting-started/',
  'User Guide': '/user-guide/',
  'Model FAQ': '/model/',
  Workflow: '/workflow/',
  'D5 Account & Purchase': '/d5-account-and-purchase/',
  'D5 for Teams': '/instruction-for-d5-for-teams/',
  'D5 Lab Version': '/instruction-for-d5-labversion-lab/',
  'D5 Lite': '/d5-lite/',
  'Learn More': '/learn-more/',
}

export function buildSidebar() {
  const summaryPath = path.join(__dirname, '../SUMMARY.md')
  const summary = fs.readFileSync(summaryPath, 'utf-8')
  const sidebar = {}

  let currentPrefix = null

  for (const line of summary.split('\n')) {
    const section = line.match(/^## (.+)$/)
    if (section) {
      const title = section[1].trim()
      currentPrefix = SECTION_PREFIX[title] ?? null
      if (currentPrefix && !sidebar[currentPrefix]) {
        sidebar[currentPrefix] = [{ text: title, items: [] }]
      }
      continue
    }

    const item = line.match(/^- \[(.+?)\]\((.+?)\)$/)
    if (item && currentPrefix) {
      const text = item[1]
      const link = item[2].replace(/\.md$/, '')
      sidebar[currentPrefix][0].items.push({ text, link })
    }
  }

  return sidebar
}
