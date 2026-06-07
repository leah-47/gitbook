# D5 Render Documentation

Official documentation for [D5 Render](https://www.d5render.com/), powered by **[VitePress](https://vitepress.dev/)**.

> Source: https://docs.d5render.com/

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run docs:dev

# Build for production
npm run docs:build
```

## Directory Structure

```
docs/                           # VitePress documentation root
├── .vitepress/                 # VitePress configuration & theme
│   └── config.mjs              # Site config, sidebar, nav
├── public/                     # Static assets (images, etc.)
├── SUMMARY.md                  # Full documentation index (370 pages)
│
├── getting-started/            # Quick start & D5 workflow
├── user-guide/                 # Comprehensive user manual
├── workflow/                   # Plugin integrations
│   ├── sketchup/               #   SketchUp
│   ├── revit/                  #   Revit
│   ├── 3ds-max/                #   3ds Max
│   ├── blender/                #   Blender
│   ├── archicad/               #   Archicad
│   ├── cinema-4d/              #   Cinema 4D
│   ├── rhino/                  #   Rhino
│   ├── vectorworks/            #   Vectorworks
│   └── general-questions/      #   General workflow FAQ
├── d5-account-and-purchase/    # Account, license, invoice
├── d5-lite/                    # D5 Lite documentation
├── instruction-for-d5-for-teams/ # D5 for Teams
├── instruction-for-d5-labversion-lab/
└── learn-more/                 # Additional resources
```

## How It Works

Content updates are pushed to this repository via automated workflows:

1. **Feishu Agent** → Format & translate content
2. **Git Sync** → Push to this repo via GitBook Git Sync
3. **VitePress** → Build & deploy the static documentation site

## Online Preview

- **Live site**: [docs.d5render.com](https://docs.d5render.com/)
- **VitePress dev**: Run `npm run docs:dev` locally

## Contributing

This is a managed documentation repository. For content changes, please contact the documentation team.
