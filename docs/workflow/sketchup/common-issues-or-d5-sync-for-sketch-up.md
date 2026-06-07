---
title: "Common issues | D5 Sync for Sketch up"
source_url: https://docs.d5render.com/workflow/sketchup/common-issues-or-d5-sync-for-sketch-up
fetched: 2026-06-07
---

# Common issues | D5 Sync for Sketch up

1\. Why doesn't the model appear in the D5 render after clicking the D5 Converter - SketchUp sync button?\
There are two possible reasons:
-------------------------------

1. The version of your graphics card driver is too old, it is recommended to update to the latest version of the graphics card driver.\
   Reference: How to check and update the graphics card driver?
2. There is encryption software on the computer, D5 does not have the permission to read the files.\
   Different encryption software may have different handling policies, you may need to contact the corresponding IT department of the company for assistance.

## 2. Why doesn't the D5 converter - SketchUp show in the toolbar of SketchUp after installation?

1. Please select "Window" - "Extension Manager" from the menu bar in SketchUp. Enable D5 Converter in the pop-up window.
2. If it still doesn't show up, use the rbz installer to cover the installation.

Reference: rbz installation method

## 3. Why the D5 converter - SketchUp indicates "load error su_to_d5render"?

Since the SketchUp installer used is missing the D5 Converter runtime dependency profile, it is recommended to reinstall SketchUp using an installer from another source, and then reinstall D5 Converter - SketchUp.

## 4. D5 Converter - SketchUp indicates "Please install the latest version of D5 Render, if you have already installed the latest version, please manually select the installation path".

1. The D5 Render must be installed before running the D5 Converter.
2. If D5 has already been installed, please manually select the installation path of the D5 Render when this pop-up appears (right-click on the D5 Render icon on the desktop - open the file location, the folder that opens is the installation path of the D5 Render).
3. If there is still error reported, it may be affected by third-party software and D5 installation is incomplete. It is recommended to close and exit all antivirus software and then re-download and install D5 renderer on the official website.

## 5. Why the lights become solid model after importing .skp file into D5 render?

**Solution:** Open this skp file in SketchUp, hide all the light source by D5 Converter - SketchUp with one click, save the skp file, and then import it into D5 render directly.

<div align="left"></div>

### **The light source tool of D5 Converter - SketchUp is only applicable to the workflow of plugin synchronization.**

**Under the direct read workflow, the D5 light source added through the plugin will become an entity model and the light source be read directly. Under the workflow of plugin synchronization, the D5 light source added in SketchUp is hidden by default, and the light source is displayed in the scene of the D5 Render.**

## 6. Why are some models not displayed when imported into D5 directly or linked through the D5 Converter - SketchUp?

**Solution:** Explode and scale define the model in SketchUp, then import or link to D5.


---
