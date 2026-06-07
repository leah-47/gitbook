---
title: "Workflow | D5 Sync for 3ds Max"
source_url: https://docs.d5render.com/workflow/3ds-max/workflow-or-d5-sync-for-3ds-max
fetched: 2026-06-07
---

# Workflow | D5 Sync for 3ds Max

D5 Converter-3Ds MAX helps you to link 3Ds MAX smoothly.

<div align="left"><figure><img src="/files/ThTYhDPFsNP5svTTmWBq" alt=""><figcaption></figcaption></figure></div>

<https://www.youtube.com/watch?v=xrXakSqLt0Y>

## Installation environment and version support

* 3ds Max 2014-2016, 2018-2026
* VRay 3.6 and above, Corona 6.0\~13.0
* D5 Render 2.6 and later versions

## Download and Installation

<https://www.d5render.com/download>

After downloading, unzip the file, double-click on the .exe file, and follow the prompts to install the D5-3ds Max converter.&#x20;

## Feature Introduction

<div align="left"><figure><img src="/files/UF1NAT3A2gYi2Q7Rq7Aq" alt=""><figcaption></figcaption></figure></div>

### Start Sync

* Launch the D5 render with one click inside 3ds Max and sync the viewport inside 3ds Max to D5.&#x20;

You need to save the max file before you can perform the "launch sync" operation.

### Data Sync

* After adding, deleting, changing the structure of a model or modifying the name of a material in 3ds Max, click Data sync can quickly synchronise the changed model and materials to the D5 Render, while retaining other parameters such as materials and scenes that have already been adjusted in the D5 Render.

### View Sync

* Keep the viewport of 3ds Max and D5 render consistent from any perspective, achieving real-time sync between the D5 perspective and 3Ds Max.

### Scene Sync

* Supports one-click sync of the Standard/Vray/Arnold cameras in 3ds Max to the scene list of the D5 render.

### Lights Sync

* Click the Lights Sync button to sync the type and position of the current Standard / Corona / Vray / Arnold lights in 3ds Max to the D5 render.

The specific parameters of the lights need to be adjusted in the D5 render.

| 3ds Max Lights type                 | 3ds Max Lights parameters                                                  | D5 Lights   |
| ----------------------------------- | -------------------------------------------------------------------------- | ----------- |
| Standard-Target/Free Spotlight      | location, attenuation-use-end, light cone-aspect, orientation, light color | Spotlight   |
| Standard-Target/Free Parallel Light | light cone-aspect, light color                                             | Strip light |
| Standard - Floodlight               | colour                                                                     | Point light |
| VRay Plane                          | location, size (light length and width), orientation, temperature/colour   | Strip light |
| VRay Sphere                         | location, colour                                                           | Point light |
| VRay IES                            | ies files, rotation                                                        | Spotlight   |
| Corona Light                        | ies file, temperature/colour                                               | Spotlight   |
| Corona Rect                         | location, size (light length and width), orientation, temperature/colour   | Rect light  |
| Corona Disk                         | location, temperature/colour                                               | Spotlight   |
| Corona Sphere                       | location, temperature/colour                                               | Point light |
| Corona Cylinder                     | location, temperature/colour                                               | Rect light  |
| Corona Sun                          | location                                                                   | Strip light |
| Arnold Light                        |                                                                            | Point light |
| Photometric light                   |                                                                            | Point light |

### Export .d5a files <a href="#toc-h3-export-d5a-files" id="toc-h3-export-d5a-files"></a>

<div align="left"><figure><img src="/files/imfmgKsw2wRoHTN4NyCq" alt=""><figcaption></figcaption></figure></div>

* Export 3ds Max models in .d5a format to directly open them in D5 Render.
* Export .d5a files without compressing texture resolution.
* Export the whole project or selected part only.
* The Auto Collapse feature is added and the last setting will be saved (to solve most problems of model dislocation, normal UV and closed line export).
* Select keep group hierarchy and import the exported .d5a file into D5, which will be displayed as a group structure.

### Export .skp files <a href="#toc-h3-export-skp-files" id="toc-h3-export-skp-files"></a>

<div align="left"><figure><img src="/files/w6MM6MyaB7wTO8FbnBLL" alt=""><figcaption></figcaption></figure></div>

* Support model export in .skp format to import into SketchUp and D5 Render
* Resize Bitmap: 512 \* 512, 1024 \* 1024
* In addition, some other features are added: hide all edges, origin to center, merge coplanar faces, and more.

### Setting

* Check the version number, global settings and current sync solution
* “Automatically save scenes after sync” and “Choose Sync Solution” options are provided, and the last setting will be saved.
* Automatically save scenes after sync: when there are materials with the same name in the 3ds max file, after synchronization of first time, the converter will automatically change the material name to a unique one to prevent the material assigned in D5 from getting overwritten next time.
* Sync Method

<div align="left"><figure><img src="/files/c6zPl5CydHpwj88OhwQq" alt=""><figcaption></figcaption></figure></div>

New method (recommended): It is for all new projects that did not use previous versions of 3ds Max plugin (2.98 and older), which can synchronize the model coordinates and align them automatically.

Compatible method: It is only for projects that once have been linked to D5 scene files through old versions of 3ds Max plugin (2.98 and older).

### Quick ProOptimize

Features can be found in the menu bar

<div align="left"><figure><img src="/files/mGBQIRheqyKx5DcYFB5n" alt=""><figcaption></figcaption></figure></div>

### Uninstall <a href="#toc-h2-uninstall" id="toc-h2-uninstall"></a>

Method 1: Click "window System Start Menu - Plugin Uninstaller - Uninstall D5 Converter for 3ds Max".

<div align="left"><figure><img src="/files/e0gQ2gz6mS6KkDU3n4eW" alt=""><figcaption></figcaption></figure></div>

Method 2: Uninstall in "Computer Control Panel - Programs - Uninstall a programme".

<div align="left"><figure><img src="/files/JiW61AoyeBcMEMww3ciI" alt=""><figcaption></figcaption></figure></div>


---
