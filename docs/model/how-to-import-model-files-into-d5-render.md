---
title: "How to import model files into D5 Render?"
source_url: https://docs.d5render.com/model/how-to-import-model-files-into-d5-render
fetched: 2026-06-07
---

# How to import model files into D5 Render?

## Overview

<mark style="background-color:purple;">D5 Render primarily supports two methods for importing external model data files</mark> <mark style="background-color:purple;">:</mark>

1. **Directly open or import model files** on the welcome page or when editing the scen&#x65;**.**
2. **Through livesync plugin D5 Converters**, establish a connection between modeling software and D5 Render.

In addition, D5 Assets Library contains various high-quality models such as vegetation, characters, indoor furniture, and commercial backgrounds that can be directly used in projects.

|                                 | **Direct import** | **D5 Converter** |
| ------------------------------- | ----------------- | ---------------- |
| **SketchUp（.skp）**              | ✅                 | ✅                |
| **Autodesk FBX （.fbx）**         | ✅                 |                  |
| **D5 model（.d5a）**              | ✅                 |                  |
| **Rhino（.3dm）**                 | ✅                 | ✅                |
| **Alembic animated file（.abc）** | ✅                 |                  |
| **Wavefront OBJ (.obj)**        | ✅                 |                  |
| **Collada (.dae)**              | ✅                 |                  |
| **3D Studio (.3ds)**            | ✅                 |                  |
| **Aseprite/3ds Max ASE (.ase)** | ✅                 |                  |
| **Assimp Binary (.assbin)**     | ✅                 |                  |
| **AutoCAD DXF (.dxf)**          | ✅                 |                  |
| **Stereolithography (.stl)**    | ✅                 |                  |
| **gITF (.gltf/.glb)**           | ✅                 |                  |
| **MikuMikuDance (.pmx)**        | ✅                 |                  |
| **Revit**                       |                   | ✅                |
| **3ds Max**                     |                   | ✅                |
| **Cinema 4D**                   |                   | ✅                |
| **Blender**                     |                   | ✅                |
| **Archicad**                    |                   | ✅                |
| **Vectorworks**                 |                   | ✅                |

## Import models

### 1. Open files from D5 Launcher to start a new scene

![](/files/GFa0t77WkGrwMMHemZsi)

From D5 Launcher, you can select "Open" to select a model file directly to create a D5 scene file. If the model contains cameras or scene data, they will be imported into D5's scene list as well.

Models imported in this way default to coordinates of 0,0,0 and are locked by default after import.

### 2. Use the Import button when editing scenes

<div align="left"><figure><img src="/files/uPvzYjPjs9iTAjpoRwZ3" alt=""><figcaption></figcaption></figure></div>

When editing scene files, we can also use the Import button at the top left corner then select files needed to be imported.

Through this method, the imported models will be displayed in the Imported list on left sidebar. Click on the file name, load it, and the model will be placed in the scene. The model is unlocked by default.&#x20;

This method supports importing multiple model files at once.

### 3. Add models from D5 Assets Library

Go to D5 Assets Library (online) > Model to select models for downloading. After the download is complete (only necessary for the first time use), you can place the model in the scene, and the model will be unlocked by default.

### 4. Use D5 Converters to sync models or export .d5a files

After installing D5 Converter add-on for modeling software, we can start live sync to send models to D5 or export the model files in .d5a format.&#x20;

<mark style="background-color:purple;">Currently supported workflow for D5 Converters :</mark>

1. SketchUp&#x20;
2. Rhino
3. Revit
4. 3ds Max
5. Cinema 4D
6. Blender
7. Archicad
8. Vectorworks

## FAQ

### Q: Why imported .fbx models do not animate, move, or have materials?

1. Currently, FBX import with bone animation is not supported. It is suggested to convert bone animation to abc animation before exporting and then importing .abc files into D5 render.
2. D5 2.6 version began to support FBX import with materials, but does not support complicated material nodes. In this case, it is recommended to import directly or use converters to import the model into D5.

### Q: Why imported .abc models do not have materials?

Currently, import of .abc files with textures is not supported in D5. You will need to separate the textures in modeling software and then re-apply them in D5. We will consider adding support for this in future iterations.

### Q: Why I can not select materials of imported models by clicking?

Models opened from the welcome page are in a locked state by default in the scene, and you can directly click to select the material.&#x20;

Models imported when editing scenes are unlocked by default, and clicking on them will select the models instead of materials. We can use the material selection tool at the top left corner (material picker) to select the materials. Alternatively, we can lock the model and then click to select the material.

<div align="left"><figure><img src="/files/2ZGRkb80qJLhphXlsbxj" alt=""><figcaption></figcaption></figure></div>


---
