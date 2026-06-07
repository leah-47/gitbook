---
title: "Common issues | D5 Sync for C4D"
source_url: https://docs.d5render.com/workflow/cinema-4d/common-issues-or-d5-sync-for-c4d
fetched: 2026-06-07
---

# Common issues | D5 Sync for C4D

## 1. Why do materials synced to D5 appear differently than in C4D?

**Reason:** The current plugin version does not support syncing \[Material UV] parameters. It currently only supports \[UVW Map] projection types; we will implement this functionality in future releases.\
**Temporary workaround:**\
Set the material ball's projection type to \[UVW Map] and retain all UV parameters at their default values;\
If you need to use a specific texture, please re-adjust the UVs within \[UVEdit] before syncing it to D5 via the plugin.

## 2. Why did the base colour values set in C4D deviate after syncing to D5?

In **Scene > Colour Management**, if the render space is set to **anything other than ‘Traditional (sRGB linear workflow)’**, operations involving **colour values** within the C4D file may exhibit **inconsistency in values** after syncing to D5 Render.

> e.g.: When the render space is set to **ACEScg**, the base color values defined in C4D cannot **maintain a 1:1 correspondence** with the base color values in the renderer, potentially causing colour difference.



Notes:

● **C4D 2025 and earlier versions** use **sRGB** as the default render space

● **C4D 2026** uses **ACEScg** as the default render space, making it more likely to encounter the differences mentioned above


---
