---
title: "3ds Max"
source_url: https://docs.d5render.com/workflow/3ds-max
fetched: 2026-06-07
---

# 3ds Max

## Download and Installation

Supported Versions: 3ds Max 2014 - 3ds Max 2026 versions (2020 and above versions are highly recommended)

V-Ray 3.6 for 3ds Max or higher must be installed.

You can download the latest version on the official website, or download from the Welcome Page > Workflow.

After the download is complete double-click the .exe file and follow the steps to install D5 Converter - 3ds Max

## Start D5 Render

Launch the D5 renderer with a single click of <img src="/files/-MkYRSrPIkTgciLY51cP" alt="" data-size="line"> button and establish a connection with the current model in 3ds Max.

Use<img src="/files/-MkYRwsw3sj31PMpBolk" alt="" data-size="line"> button to turn off sync and disconnect D5 Render from the current model.

* **OK:** Create a new empty .drs scene and import the current .max file to establish a connection with D5 Render.
* **Select file:** associate the current .max file in 3ds Max with the model file in the existing .drs scene.

When a model file already exists in D5 Render, the first time you synchronize it, you need to connect the synchronized model to an existing model in the resource list or create a new model.

## Sync

Use <img src="/files/-MkYT1emzDsDMVcxxVaV" alt="" data-size="line"> button to Sync. Laod model files faster by syncing the current model and corresponding materials with incremental updates. Suitable for changing materials and models with the synchronization function when adjusting details.

### Viewport Sync

Use <img src="/files/-MkYTsdr8HTi0icyuKQ7" alt="" data-size="line"> to turn on viewport sync to synchronize the current viewport of 3ds Max with the view of D5 Render

Use <img src="/files/-MkYV9uzrzwHIK9X90DO" alt="" data-size="line"> to turn off viewport sync and disconnect viewpoint sync between 3ds Max and D5 Render.

### Camera Sync

<img src="/files/-MkYVQUG_mUxWmcIjnk2" alt="" data-size="line"> One-click synchronization of 3ds Max standard camera and V-Ray camera to D5 Render scene list.

### Light Sync

Click the Sync Light <img src="/files/-MkYVomZfEy7Y3svtOAu" alt="" data-size="line"> button to sync the light type (point, spot, strip, area), light position, and area/strip size parameters of the current V-Ray or Corona lights in 3ds Max to D5 Render.

| **D5 Lights**     | **V-Ray Lights**   | **Corona Lights** |
| ----------------- | ------------------ | ----------------- |
| Point Light       | V-Ray Sphere light | Sphere            |
| Spotlight         | V-Ray IES          | Disk              |
| Rectangular Light | V-Ray Plane light  | Rectangle         |

## Exporting d5a/skp files

* D5 Render can not directly load the .max file. You can use the D5 converter - 3ds Max to convert max file into .d5a file which can be directly imported into D5 Render.
* Support exporting model files in .skp format for importing into SketchUp and D5 Render.
* Support fast optimization of surface

## Mapping resolution settings

Support setting mapping resolution up to 4K when syncing and exporting d5a format files.


---
