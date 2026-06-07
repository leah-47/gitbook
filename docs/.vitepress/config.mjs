import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'D5 Render',
  description: 'Official documentation for D5 Render',
  base: '/gitbook/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
  ],

  themeConfig: {
    logo: '/logo-dark.svg',

    nav: [
      { text: 'Getting Started', link: '/getting-started/quick-start' },
      { text: 'User Guide', link: '/user-guide/ai/ai-generation' },
      { text: 'Workflow Plugins', link: '/workflow/sketchup/sketchup-plugin' },
      { text: 'D5 Lite', link: '/d5-lite/lite-user-manual/overview' },
      { text: 'D5 for Teams', link: '/instruction-for-d5-for-teams/how-to-create-and-manage-team-accounts' },
      { text: 'Account & Purchase', link: '/d5-account-and-purchase/version-comparison' },
      { text: 'GitHub', link: 'https://github.com/leah-47/gitbook' },
      { text: 'Download D5', link: 'https://www.d5render.com' },
    ],

    sidebar: {
      '/getting-started/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Quick Start', link: '/getting-started/quick-start' },
            { text: 'D5 Workflow', link: '/getting-started/d5-workflow' },
          ],
        },
        {
          text: 'Workflow Details',
          items: [
            { text: 'Interface Shortcuts Camera', link: '/getting-started/d5-workflow/interface-shortcuts-camera' },
            { text: 'AI', link: '/getting-started/d5-workflow/ai-features' },
            { text: 'Material', link: '/getting-started/d5-workflow/material' },
            { text: 'Environment Effects', link: '/getting-started/d5-workflow/environment-effects' },
            { text: 'Landscape', link: '/getting-started/d5-workflow/landscape' },
            { text: 'Model Connection', link: '/getting-started/d5-workflow/model-connection' },
            { text: 'Image Animation Output', link: '/getting-started/d5-workflow/image-animation-output' },
          ],
        },
      ],

      '/user-guide/': [
        {
          text: 'User Guide',
          items: [
            { text: 'AI', link: '/user-guide/ai/ai-generation' },
            { text: 'Model', link: '/user-guide/model/model-import' },
            { text: 'Material', link: '/user-guide/material/material-editor' },
            { text: 'Environment', link: '/user-guide/environment/sun-and-sky' },
            { text: 'Lights', link: '/user-guide/lights/light-sources' },
            { text: 'Effect', link: '/user-guide/effect/post-effects' },
            { text: 'Render', link: '/user-guide/render/render-settings' },
            { text: 'Animation & Path', link: '/user-guide/animation-path/animation' },
            { text: 'D5 Virtual Tour', link: '/user-guide/d5-virtual-tour/overview' },
            { text: 'Vegetation', link: '/user-guide/vegetation-tool/vegetation' },
            { text: 'Widget', link: '/user-guide/widget/widgets' },
            { text: 'View', link: '/user-guide/view/view-management' },
            { text: 'Tools', link: '/user-guide/tool/tools' },
            { text: 'Assets', link: '/user-guide/assets/asset-library' },
            { text: 'Studio', link: '/user-guide/studio/studio' },
            { text: 'Resource', link: '/user-guide/resource/resource-management' },
            { text: 'Preference', link: '/user-guide/preference/preferences' },
            { text: 'Hardware', link: '/user-guide/hardware/hardware-info' },
            { text: 'Common Pop-ups', link: '/user-guide/common-pop-up-windows/dialogs' },
          ],
        },
      ],

      '/workflow/': [
        {
          text: 'Workflow Plugins',
          items: [
            { text: 'SketchUp Plugin', link: '/workflow/sketchup/sketchup-plugin' },
            { text: 'Revit Plugin', link: '/workflow/revit/revit-plugin' },
            { text: '3ds Max Plugin', link: '/workflow/3ds-max/3dsmax-plugin' },
            { text: 'Rhino Plugin', link: '/workflow/rhino/rhino-plugin' },
            { text: 'Blender Plugin', link: '/workflow/blender/blender-plugin' },
            { text: 'Cinema 4D Plugin', link: '/workflow/cinema-4d/cinema4d-plugin' },
            { text: 'ArchiCAD Plugin', link: '/workflow/archicad/archicad-plugin' },
            { text: 'Vectorworks Plugin', link: '/workflow/vectorworks/vectorworks-plugin' },
            { text: 'Abnormal Situations', link: '/workflow/abnormal-situations/abnormal-situations-when-using-livesync-real-time-plugin' },
            { text: 'General Questions', link: '/workflow/general-questions/general-questions' },
          ],
        },
      ],

      '/d5-lite/': [
        {
          text: 'D5 Lite',
          items: [
            { text: 'Overview', link: '/d5-lite/lite-user-manual/overview' },
            { text: 'Installation and Setup', link: '/d5-lite/lite-user-manual/installation-and-setup' },
            { text: 'Features', link: '/d5-lite/lite-user-manual/features' },
            { text: 'Real-time Rendering', link: '/d5-lite/lite-user-manual/real-time-rendering' },
            { text: 'AI', link: '/d5-lite/lite-user-manual/ai-generation' },
            { text: 'D5 Render Sync', link: '/d5-lite/lite-user-manual/d5-render-sync' },
            { text: 'Scene List', link: '/d5-lite/lite-user-manual/scene-list' },
            { text: 'Other Features', link: '/d5-lite/lite-user-manual/other-features' },
          ],
        },
      ],

      '/instruction-for-d5-for-teams/': [
        {
          text: 'D5 for Teams',
          items: [
            { text: 'Create & Manage Team Accounts', link: '/instruction-for-d5-for-teams/how-to-create-and-manage-team-accounts' },
            { text: 'Deploy Team Library', link: '/instruction-for-d5-for-teams/how-to-deploy-team-library-and-manage-team-assets' },
            { text: 'Application Integration', link: '/instruction-for-d5-for-teams/application-integration' },
            { text: 'Comments', link: '/instruction-for-d5-for-teams/how-to-use-comments' },
            { text: 'D5 Studio', link: '/instruction-for-d5-for-teams/how-to-use-d5-studio' },
            { text: 'Multi-editing', link: '/instruction-for-d5-for-teams/how-to-use-multi-editing' },
            { text: 'Showreel Platform', link: '/instruction-for-d5-for-teams/how-to-use-showreel-platform' },
            { text: 'Single Sign-On (SSO)', link: '/instruction-for-d5-for-teams/single-sign-on-sso' },
          ],
        },
      ],

      '/d5-account-and-purchase/': [
        {
          text: 'Account & Purchase',
          items: [
            { text: 'Version Comparison', link: '/d5-account-and-purchase/version-comparison' },
            { text: 'Register & Login', link: '/d5-account-and-purchase/how-to-register-and-login-d5-account' },
            { text: 'Subscription', link: '/d5-account-and-purchase/subscription-and-unsubscription' },
            { text: 'Education Version FAQs', link: '/d5-account-and-purchase/education-version-faqs' },
            { text: 'Download & Installation', link: '/d5-account-and-purchase/download-and-installation' },
            { text: 'Change Account Email', link: '/d5-account-and-purchase/how-to-change-your-d5-account-email' },
            { text: 'Technical Support', link: '/d5-account-and-purchase/how-to-get-technical-support' },
            { text: 'Secondary Verification', link: '/d5-account-and-purchase/secondary-verification-instruction-guide-for-edu-license' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/leah-47/gitbook' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 D5 Render'
    },

    search: {
      provider: 'local'
    },
  },

  ignoreDeadLinks: true,

  srcDir: '.',
  outDir: '../dist',

  // Vite config: ignore /files/xxx imports from Mintlify MDX
  vite: {
    build: {
      rollupOptions: {
        external: [/^\/files\/.*/],
      },
    },
    ssr: {
      external: [/^\/files\/.*/],
    },
  },
})
