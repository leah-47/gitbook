---
title: "Common issues | D5 LiveSync for Sketch up"
source_url: https://docs.d5render.com/workflow/sketchup/common-issues-or-d5-livesync-for-sketch-up
fetched: 2026-06-07
---

# Common issues | D5 LiveSync for Sketch up

## Why does the terrain grass not show up when a group/component is imported into D5 after mirrored in SU and given terrain grass?

If you sync the model via D5 direct reading/SU-D5 live sync plugin in the current 2.5 version, and mirror the model after creating the group/component, the mirrored model will not show the terrain grass. This is a known issue in the current version and we will fix it in future versions.

The current recommendation is to explode the mirrored part of the component and then sync it through the plugin or read it directly into D5 to get the correct effect.

<div align="left"><figure><img src="/files/2LFqVLiLuYiH8WrVGm5g" alt=""><figcaption></figcaption></figure></div>

<div align="left"><figure><img src="/files/4Fp7oFD8VCd4iNMnh3Yl" alt=""><figcaption></figcaption></figure></div>

## Why the model is misaligned when using 'replace and link' the model via plugin connection after SU crashed?&#x20;

This is a known issue with the version 2.7, and we will modify it in subsequent versions.

The current temporary solution:

1. Users manually open the corresponding D5 scene file.
2. Select the corresponding SU model in D5, perform the ‘Sync Pivot’ command, and manually change the model coordinates to 0,0,0.
3. Click to connect again in the SU plugin, then select the replace and link.

## How to switch graphics engines in SketchUp 2024?

The new graphics engine function of SketchUp 2024 can be switched in **Preferences** window.

> **Info:** Note:

Relatively speaking, the new graphics engine is not stable.&#x20;

<mark style="background-color:green;">If you are prone to crashes of SU2024 during use, it is recommended to Use a classic graphics engine.</mark>


<figure><img src="/files/DIFeVsdqC3tulm1lRxlV" alt=""><figcaption></figcaption></figure>

## Why prompt ‘The following issues have been detected, which may cause data errors’ when connecting?

> Newly added function **since SU LiveSync 1.3.0.0035**: Popup window on first time connection to indicate abnormal texture information.

If it prompts ↓ image content when syncing for the first time, i.e. ‘Material "Material" - Unsupported texture formats: xxx (currently in .psd format)’.

<figure><img src="/files/2xlLDp9Bdi37fGigNfCx" alt=""><figcaption></figcaption></figure>


---
