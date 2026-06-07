---
title: "Why there are white grids when outputting specific resolution images, but the preview is normal?"
source_url: https://docs.d5render.com/user-guide/render/why-there-are-white-grids-when-outputting-specific-resolution-images-but-the-preview-is-normal
fetched: 2026-06-07
---

# Why there are white grids when outputting specific resolution images, but the preview is normal?

If you have **semi-transparent curtains/custom blinds** in your scene, some of the scenes may have white grids in the ↓ image when outputting at certain resolutions (the preview is normal).&#x20;

This is a known issue with the current version and can be fixed by adjusting the material of the curtain/blinds model to 100% opacity (adjusting the material to a transparent material template & opacity parameter to 100%), then you can get the normal output effect. We will fix it in subsequent releases.




---
