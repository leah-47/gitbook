import { defineConfig } from 'vitepress'
import { buildSidebar } from './sidebar.mjs'

export default defineConfig({
  title: 'D5 Render',
  description: 'Official documentation for D5 Render',
  base: '/gitbook/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
  ],

  srcExclude: ['**/SUMMARY.md'],

  themeConfig: {
    logo: '/logo-dark.svg',

    search: {
      provider: 'local',
    },

    nav: [
      { text: 'Getting Started', link: '/getting-started/d5-workflow' },
      { text: 'User Guide', link: '/user-guide' },
      { text: 'Workflow', link: '/workflow' },
      { text: 'D5 Account & Purchase', link: '/d5-account-and-purchase' },
      { text: 'D5 for Teams', link: '/instruction-for-d5-for-teams/application-integration' },
      { text: 'D5 Lite', link: '/d5-lite/lite-user-manual' },
      { text: 'GitHub', link: 'https://github.com/leah-47/gitbook' },
      { text: 'Download D5', link: 'https://www.d5render.com' },
    ],

    sidebar: buildSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/leah-47/gitbook' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 D5 Render',
    },

  },

  ignoreDeadLinks: true,

  srcDir: '.',
  outDir: '../dist',

  vite: {
    build: {
      rollupOptions: {
        external: [
          /^\/files\/.*/,
          /^\/[0-9a-f]{40}\.(png|jpe?g|gif|webp|svg)$/i,
        ],
      },
    },
    ssr: {
      external: [
        /^\/files\/.*/,
        /^\/[0-9a-f]{40}\.(png|jpe?g|gif|webp|svg)$/i,
      ],
    },
  },
})
