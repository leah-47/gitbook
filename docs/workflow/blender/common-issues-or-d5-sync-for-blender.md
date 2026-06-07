---
title: "Common issues | D5 Sync for Blender"
source_url: https://docs.d5render.com/workflow/blender/common-issues-or-d5-sync-for-blender
fetched: 2026-06-07
---

# Common issues | D5 Sync for Blender

## 1. Why does the blender preferences not show D5 related content after installing the plugin?

<mark style="color:orange;">Note: Please refer to Workflow | D5 Sync for Blender first to make sure the version of blender you are currently using is the version supported by the D5 plugin.</mark>

The current blender plugin exists in two folders:

1. C:\Users\Administrator\AppData\Roaming\Blender Foundation\Blender\3.5（Blender version）\scripts\addons\d5_export

<figure><img src="/files/PtXjqNFaqmkdDLX9J1MY" alt=""><figcaption></figcaption></figure>

2. C:\Users\Administrator\AppData\Roaming\d5_blender

<figure><img src="/files/oAUcVK020j7SWBUV7KTI" alt=""><figcaption></figcaption></figure>

Some users can't recognise the plugin after installation because they have changed the first path of the default installation of the blender plugin.

In this case, after installing the plugin, you need to copy the entire d5_export file from the C:\Users\Administrator\AppData\Roaming\Blender Foundation\Blender\3.5(Blender version)\scripts\addons directory to the path (the actual path modified by the user) that is recognised by Blender. directory, and then open Blender to display it in the preference settings.


---
