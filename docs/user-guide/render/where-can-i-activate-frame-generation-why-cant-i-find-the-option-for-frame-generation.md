---
title: "Where can I activate Frame Generation? Why can't I find the option for Frame Generation?"
source_url: https://docs.d5render.com/user-guide/render/where-can-i-activate-frame-generation-why-cant-i-find-the-option-for-frame-generation
fetched: 2026-06-07
---

# Where can I activate Frame Generation? Why can't I find the option for Frame Generation?

> **Frame Generation:** Use AI technology to generate additional frames to improve performance, particularly when paired with NVIDIA Reflex to maintain excellent response.&#x20;

* Added DLSS Frame Generation in Menu > Frame Generation.



* Only GeForce RTX 40 series GPUs support DLSS Frame Generation. You can switch on the "Hardware-accelerated GPU scheduling" in "System > Settings > Display > Graphics settings".



* 2.10 Version supports **DLSS 4** Frame Generation to enhance FPS by utilizing AI to generate extra frames.

> **Info:** **Note:**

To enhance the real-time FPS by three or four times with DLSS 4, please prepare a GeForce RTX 50 series GPU and follow the steps as below:

* Close D5 Render: Ensure D5 Render is totally closed.
* Open installation directory: Right click on the D5 icon and select "Open File Location" to enter the installation directory.
* Locate to the DLSS 4 file: Navigate to D5 Render\Engine\Plugins\Runtime\Nvidia\Streamline\Binaries\ThirdParty\Win64\DLSS 4
* Duplicate all the files within the DLSS 4 file: Select all the files using shortcut keys Ctrl + A and copy them by pressing Ctrl + C.
* Paste files to target directory: Return to the parent folder D5 Render\Engine\Plugins\Runtime\Nvidia\Streamline\Binaries\ThirdParty\Win64, right click on a blank space to select "Paste," and replace the existing files.
* Restart D5 Render: Start D5 Render and check if the 3x or 4x options can be enabled.


## FAQ

### 1. When “Frame Generation” is enabled, why do some scenes have a tearing sensation in the preview (output is normal)?

Situation 1: Scenes with especially regular meshes/textures have a shaking preview interface (output is normal)

Situation 2: Partial scenes occasionally have stuck/shaking preview interface

Situation 3: Partial scenes have blurry/shaking at the edges of the preview interface.

Suggestion: This is a known issue with the current version of NV GPUs. If you encounter this kind of scene, it is recommended that you turn off the ‘Frame Generation’ when previewing/outputting.






---
