---
title: "Workflow | D5 Sync for Blender"
source_url: https://docs.d5render.com/workflow/blender/workflow-or-d5-sync-for-blender
fetched: 2026-06-07
---

# Workflow | D5 Sync for Blender

<https://www.youtube.com/watch?v=Cv5wi5P5d7M>

## Supported versions

Support for Blender 2.93LTS / 3.0/ 3.1 / 3.2 / 3.3LTS/3.4/3.5/3.6/4.0/4.1/4.2/4.3/4.4/4.5/5.0/5.1.&#x20;

***

## Download & Installation

Download and install the plug-in ([click to download](https://www.d5render.com/download)), after successful installation, the right arrow of the Blender view window will be expanded to see the D5 Sync interface.

> Note:
>
> * D5 Renderer interface language follows Blender language by default.&#x20;
> * If the D5 Render path is not selected in the plugin panel when enabled, the last launched D5 renderer will be opened automatically during sync

<div align="left"></div>

### 1. Default Installation

1. Download the installation package: D5_Sync_Blender_xxxx.exe
2. Close Blender and double-click the installation package D5_Sync_Blender_xxxx.exe to install it.
3. After successful installation, you need to open Blender-Edit-Preference-plug-in (Add-ons)
4. Enter D5 in the search box, find the D5 Sync synchronization plug-in, confirm whether the version is correct, and then check Enable.



### 2. Custom Installation Path Rules

1. In blender, Edit-preferences-File Paths-Script Directories, select add Paths, such as: D:\4.2\scripts **(must have scritps**)



2. The addons folder is created under the scripts folder in the file management of windows, as shown in the figure:



3. Close Blender and double-click the plug-in installation package to install it. During installation, select the path to addons, as shown in the figure:



4. The installation is complete and ready for use. If it is installed for the first time, please refer to steps 3 and 4 of the first and default installation to enable D5 Sync.

### 3. Blender 4.2 New Mode-Portable Mode Installation

> **Info:** Note:

Portable mode is more complicated, with \[Default Installation] & \[Custom Installation Path] preferred.


1. There is a portable folder in the Blender installation directory.
2. Create scripts under the portable folder and addons folder under scripts, as shown in the figure:



3. Close Blender and double-click the plug-in installation package to install it. During installation, select the path to addons, as shown in the figure:



4. After the installation is completed, **please refer to steps 3 and 4 of the first and default installation to enable D5 Sync.**
5. In the portable mode, Blender can recognize the plug-ins installed in this directory without configuring File Paths-Script Directories in Blender.

***

## Feature Introduction

### Model/Material Sync

<div align="left"></div>

* Click " Sync " to start D5 Reder in Blender with one click and sync the current Blender model and materials to D5 Reder to start real-time rendering.
* When a model file needs to be changed in the middle of a rendering project, sync can be turned on to create a link to the original model or to replace it with a new one.
* Current material support: Principled BSDF, Glass BSDF, Self-illuminated, Diffused BSDF

### Incremental sync

<div align="left"></div>

* Once the model/material has been changed in Blender, use the Sync button to quickly sync the changed model and material to the D5 render, while preserving other parameters such as material and scene that have already been adjusted in the D5.

### Cameras sync

* Click "Send Camera" to sync the camera list in Blender to the scene list in D5 render with one click.&#x20;
* Sync camera with names and groups is not supported yet.

### Light sync

* Click the "Send Lights" button after starting sync to sync point light, daylight, spot light and area lights from Blender to the D5 render.
* The corresponding light types and the synced light parameters:

| Blender     | D5          | Supported light parameters                                   |
| ----------- | ----------- | ------------------------------------------------------------ |
| Point light | Point light | name, location, illumination                                 |
| Sunlight    | Spot light  | name, location, illumination                                 |
| Spot light  | Spot light  | name, location, illumination                                 |
| Area light  | Rect light  | name, location, illumination, size, shape（Square; Rectangle） |

Note:&#x20;

* Light groups and spot radius are not supported now.

### View sync

* Click " View Sync " to keep the same viewport of Blender and D5 render in any viewpoint, so as to achieve the real-time sync between D5 viewpoint and Blender.&#x20;
* Support one-click to enable or disable view sync.

### Export d5a&#x20;

<div align="left"></div>

* D5 renderer doesn't support direct reading .blend files, you can use D5 Converter-Blender to convert to .d5a file and then import it directly.
* Supports exporting only selected objects or the whole file.

### Material bake

<div align="left"></div>

* For complex material nodes or Blender's procedural textures, you can use the bake function to bake them into simple maps and then sync them to D5 or export a .d5a file.
* Support baking all materials, or select some materials for baking, and sync the full/incremental baking result to D5 or export .d5a file.
* Supports selection of material map resolution (256, 512, 1k, 2k, 4k) for baking.
* Auto uv: Intelligent UV projection during baking, it is recommended to tick this option.
* Supports selection of two bake configurations by default: D5 converter's built-in bake configuration current; Blender's current Cycles configuration.
* Default: D5 converter's built-in baking configuration
* Current: Blender's current Cycles configuration
* Support for selecting the material output directory for baked files (Edit - Preferences - Plugins - D5 Converter - Baking - Global Settings)

### Uninstall 

* Open Blender - Edit - Preferences - Plugins - enter D5 in the search field, find D5 Converter, select it and click Remove.
* Choose Uninstall Program - Uninstall D5 Converter for Blender from the Start menu.


---
