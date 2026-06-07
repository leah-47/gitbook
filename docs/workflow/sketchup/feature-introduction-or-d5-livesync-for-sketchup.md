---
title: "Feature Introduction | D5 LiveSync for SketchUp"
source_url: https://docs.d5render.com/workflow/sketchup/feature-introduction-or-d5-livesync-for-sketchup
fetched: 2026-06-07
---

# Feature Introduction | D5 LiveSync for SketchUp

## Download and install

### Installation environment and version support

* D5 Render **version 2.5 and above**
* SketchUp **2020.1 - 2025**

> Note: The detailed version number of SU can be found in the SketchUp menu bar by clicking “Help - About SketchUp” in SketchUp.

### Download exe

**Download URL :** [**Download | D5 Render**](https://www.d5render.com/download)

You can download the latest version of the plugin at the above URL.&#x20;

> The downloaded file format is exe.&#x20;
>
> Double-click the exe file and follow the prompts to complete the installation.

## Feature Introduction

<div align="left"></div>

### Connect to D5 Render

One-click to launch the D5 renderer to establish the connection and sync the current SketchUp project to D5.

### Sync Once

Click to apply incremental updates of model and material from SketchUp to D5 Render.

### Live sync/ Stop

Stop/ continue live sync. Click the Live sync/ pause button and then the modifications of models and materials in SketchUp will not be real-time synced to D5. Click the button again, the live sync will continue.

### Sync Viewpoint

After clicking "Connect to D5 Render", sync view will be performed by default. By clicking the "Sync view" button, you can interrupt the sync view during the real-time sync process.

### Send Scenes

You can sync scenes from SketchUp to D5's scene list with one click.

### Light Toolbar

Click the "Light toolbar" button will call out the D5 Light panel of the plugin. You can add point light, spot light, strip light and rect light in SketchUp, and support to hide/show all D5 light in SketchUp.

### Settings

<div align="left"></div>

* ****Texture Folder****\
  Customise the storage location of all texture resources used by the current SketchUp file.
* ****Sync structure of light component****

|                   | **No Sync**                                                                                               | **Sync**                                                                                                              |
| ----------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Applicable Scenes | Users with a small number of lights who are used to grouping lights in D5                                 | Large number of lights, modelling software projects with large number of lights duplicated by light groups/instances. |
| Differences       | Lights are synced to the D5 and **exist individually** in the D5 scene list, with **no group structure**. | When lights are synced to D5, **lights of the same property will automatically be grouped**.                          |

> **Commonality:**\
> 1\)  Modify the position, rotation, and size of the lights in D5, resync will reset these parameters to keep them consistent with the modelling software.
>
> 2\)  Other parameters, such as changing light names or grouping these lights, it only remains the same as in the modelling software when sync is first initiated, resyncing does not reset these parameters.
>
> 3\)  In the current version, if you delete synced lights in D5, subsequent updates/re-linking/clicking 'Send Lights' again will not resync the previously deleted lights to D5. Please note: If you **re-start the D5 file**, subsequent updates/re-linking/clicking 'Send Lights' again will resync the previously deleted lights to D5.

### Export

**Supports exporting grouped models from .skp files as .d5a models.**

> Note: The efficiency of the exported file is affected by the file size, components and number of faces.

* The export supports exporting **all or only selected** objects.
* The **default** export is one layer of group structure, and **the maximum of two layers** is supported.

<div align="left"></div>

## FAQ

### Q1 : Does the (non-real-time) Sync plugin work with version 2.5?

The original (non-real-time) sync plugin is not restricted in any way and can continue to be used with D5 2.5. The SketchUp-D5 real-time sync plugin is only supported in D5 2.5 and subsequent versions, with no support for D5 2.4.

### Q2 : Is it possible to continue to sync a scene created with D5 2.4 using the (non-real-time) sync plugin with the 2.5 version?

This is possible. Just open the scene directly in D5 2.5 and click the plugin's start button in SketchUp.

### Q3 : Is it possible to continue to sync a scene created in D5 2.4 with a real-time plugin and D5 2.5?

Yes, just open the scene in D5, click the "Connect to D5 Render" button of the plugin in SketchUp, select the model in D5 and replace it to continue the connection.

### Q4 : Could a scene created using the Live Sync plugin with D5 2.5 be opened in D5 2.4?

This is possible.&#x20;

If you want to use D5 2.4 to open the scene created by real-time sync plugin and D5 2.5 version, you need to open the scene in D5 2.5. **Select the live sync skp model in the resource list, right click, select "Non-Live sync mode"**, save the D5 scene and open it with D5 2.4.



### Q5 : Is it possible to use the (non-real-time) sync plugin to continue to link a scene created with D5 2.5 with the real-time sync plugin?

Yes. You can use real-time sync plugin with D5 2.5 to create the scene, if you need to use (non-real time) sync plugin with D5 2.4/2.5 to open and continue the linkage, you need to open the scene in D5 2.5. In the resource list, select the real-time synchronised skp model, right-click and select **"Non-Live sync mode"**. Save the D5 scene and open it in D5 2.4/2.5. Click the plugin start button in SU, select the model in D5 and replace it to continue the linkage.

### Q6 : During the process of using the real-time sync plugin, could the materials modified in D5 be reverted to the materials in SketchUp?

During the process of using the real-time sync plugin, could the materials modified in D5 be reverted to the materials in SketchUp?\
You need to select the material in SketchUp and click create material, rename the material name and apply the material. Then the material in D5 will revert to the material in SketchUp.

<div align="left"></div>


---
