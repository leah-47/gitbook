---
title: "Workflow | D5 Sync for Revit"
source_url: https://docs.d5render.com/workflow/revit/workflow-or-d5-sync-for-revit
fetched: 2026-06-07
---

# Workflow | D5 Sync for Revit


Sync Revit with D5


[*Download the demo scene for free*](https://forum.d5render.com/t/scene-express-vol-141-revit-d5-workflow-tutorial-demo-scene/12005)

## Download & Installation 

Double click on the .exe file after the download, and follow the notifications to install [D5 Sync for Revit](https://d5converter.d5cdn.com/installer/revit/latest/D5_Sync_Revit_usa_latest.exe)

Learn more about [D5 Render for Revit](https://www.d5render.com/post/d5-render-for-revit-best-real-time-3d-rendering-workflow-for-bim-professionals)

Download [D5 Render](https://www.d5render.com/download)

#### Supported versions 

Revit 2018.3 - Revit 2026

## Functional Description

#### One-click to Launch D5 Render in Revit

* Import the new models into D5 Render to start real-time rendering.
* When a model file needs to be modified during rendering, start Sync to create a connection with the original model or replace it with the new model.
* Import Revit models into D5 Render by Sync feature without exporting d5a.

#### Model/Material/Scene/Light Sync



* After being modified in Revit, use the Sync button to quickly synchronize the modified model and materials to D5 Render, and keep the materials, scenes and other parameters that have already been adjusted in D5 Render.
* Support one-click synchronization of Revit scenes to the D5 Render scene list.
* Support to exclude the categories that don't need to be synchronized by categories. You can also think of separating categories such as Furniture, Furniture System, and Generic Models through the settings menu, that will make it also easier for you to control the visibility of those categories when you are rendering exteriors or interiors.



* Support Sync family lights to D5 light.

**Sync Linked Model**

* Synchronizing linked models in Revit to D5.
* In huge projects with many links, each link is automatically separated in D5, making it easy to control what’s visible or what’s not, it also gives flexibility to move around the model while turning off some unneeded links.



#### **View Sync**

* Keep Revit horizontally aligned with the view of the D5.
* Support one click to turn view sync on or off.

#### **Use Survey Point**

* The exported model will use Survey Point as Origin (0,0,0) instead of Project Base Point

> Tip: Useful for aligning multiple Revit models with same shared coordinates

#### **Use Consistent Colors**&#x20;

The material is exported with Revit mapping before it is turned on, and it is colored after it is turned on.

* Use materials’ RGB graphics colors instead of asset texture and/or color.

> Tip: Useful to start creating your scenes from colored materials only.

#### **Group Materials by Assets**

* Use asset names as a way to separate elements in D5, instead of material names.

> Tip: Useful for handling professionally organized materials in Revit projects, or with Dynamo scripts that overrides material assets

#### **Export Smoothness**

* Change model smoothness in D5.

> Tip: Default value is good enough

#### **Select Categories to Be Separated**

* Synchronized by detached categories, it helps to directly control the visibility of Revit categories inside D5 and control whether these categories are hidden separately in D5.

> Tip: Useful for more control over Revit categories visibility inside D5 directly.

#### **Export .d5a file**



* D5 cannot read .rvt files directly, you can use D5 Converter-Revit to convert **.**&#x64;5a files, and then the files can be imported directly into D5.
* Support export of family lights, automatically synchronized to D5 light sources.

#### Group export

* Export the selected instance
* Export the selected family type
* Export the selected category


---
