---
title: "Workflow | D5 Sync for SketchUp"
source_url: https://docs.d5render.com/workflow/sketchup/workflow-or-d5-sync-for-sketchup
fetched: 2026-06-07
---

# Workflow | D5 Sync for SketchUp

Currently, the D5 renderer supports direct reading of .skp format model files. The D5 Converter - SketchUp can help you seamlessly link SketchUp.



Download Demo Case：<https://forum.d5render.com/t/scene-express-vol-110-sketchup-d5-workflow-tutorial-demo-scene-living-room-by-qu-c-vi-phan/11025>

## Download and Install

### Installation environment and version support

SketchUp 2017 - SketchUp 2023.

### Download exe



After the download is complete, double-click the .exe file and follow the prompts to install D5 Converter-SketchUp.

### Download rbz



1. Download and unzip the .zip file
2. Click on "Window" - "System Settings" in the menu bar
3. In the pop-up system settings dialog box, click on the "Extensions" option, then click on "Install Extension"
4. In the pop-up file window, select the D5_Converter_SketchUp_cn_X.X.X.rbz you want to install, then click "Open", click "Yes" in the pop-up dialog box to complete the installation

### <mark style="color:orange;">The difference between version 0.8.5.0001 and 0.8.4.0004</mark>

<mark style="color:orange;">The two versions refer to different ways of grouping lights. For details, please refer to this post:</mark> [<mark style="color:orange;">https://forum.d5render.com/t/light-group-changes-and-different-versions-for-downloading-d5-converter-for-3ds-max-and-sketchup/15616</mark>](https://forum.d5render.com/t/light-group-changes-and-different-versions-for-downloading-d5-converter-for-3ds-max-and-sketchup/15616)

## Feature Introduction

### Launch D5 render with one-click in SketchUp

* Import the currently edited new model into the D5 render, and start real-time rendering work.
* Please sync in perspective view for the best viewpoint sync experience.
* When the model file of the ongoing rendering project needs to be modified, you can start a linkage to establish a connection with the original model or replace it with a new model.

### Model/Material/Scene Sync

* After making changes to the current model in SketchUp, use the Sync button to quickly sync the changed model and materials to D5, while preserving other parameters such as materials and scene that have already been adjusted in the D5 render.
* Supports one-click synchronization of the scene list in SketchUp to the D5 render.

### Viewpoint Switch

* Keep the viewpoint consistent in the horizontal direction between SketchUp and D5 renderer.
* Supports one-click to turn on or off viewpoint linkage.

### Light Sync

<div align="left"><figure><img src="/files/mJ4TonRsNPsvmEKC9zDU" alt=""><figcaption></figcaption></figure></div>

* Click the "Add Light Source" button, you can select the D5 light source (point light, spotlight, strip light, rect light) in a new window and add it to the scene.&#x20;
* The position and related parameters of the added light source will be synchronized to the D5 render in real time.

### Uninstall

<div align="left"><figure><img src="/files/r7CATZitSdFSBklBRw7o" alt=""><figcaption></figcaption></figure></div>

* Select "Extensions Manager" in the SketchUp menu bar, select "su_to_d5render" and choose Uninstall.
* Find the file "su_to_d5render.rb"  in the directory C:\Users\Administrator\AppData\Roaming\SketchUp\current SketchUp version\SketchUp\Plugins, and delete it.


---
