---
title: "Action"
source_url: https://docs.d5render.com/user-guide/model/action
fetched: 2026-06-07
---

# Action

When an unlocked model is selected, the relevant parameters are displayed on the right for adjustment.



## Duplicate

When you click "Duplicate", an identical model will be created at the cursor and will follow the mouse movement.



When using the shortcut `Ctrl+D` to duplicate, materials are associated with each other by default. That is, if you adjust the material on any model, the other model will follow the change. If you want to duplicate without association, you can use `Alt+D` to duplicate.

## Make Unique

If you need to unassociate a material from a model that was created by a duplicate operation, click on "Make Unique" to unassociate it.



## Flip

The "Flip" function mirrors the model along the red axis (X axis).



## Focus on

Select the object and move the camera to the front of the object so that the object is fully displayed in the main view.



## Align

For model files imported in parts, after multi-selecting models (hold `Ctrl` to multi-select), using the "Align" function, the selected models will be aligned according to the original modeling axes, keeping the relative position of the coordinates in the modeling software unchanged.

When aligning, the first selected model is used as the reference and its position remains unchanged, and the other models are aligned to the first model.

> **Success:** For example, if there are three models A, B and C, and the selected order is B, C and A, then B remains in the same position when aligning, and C and A models are aligned to B with the original modeling coordinates.




## **Sync coordinates**

For imported models, when clicked "Sync Coordinates", the model will move to the location of the coordinates from modeling software. The Align button is to multi-select models then align them according to their relative position, while the "Sync Coordinates" function is to recover their absolute positions( X, Y, Z).

After clicking the "Replace from Assets" button, select a model from the Asset library to replace the selected model in the current scene.



## Replace from Local Folder

After clicking the "Replace from Local Folder" button, select a model file from the local folder to replace the model in the current scene.

## Reload

After the model source file is modified and saved, click Reload and D5 will automatically synchronize the model to the latest, consistent with the source file.

You can continue to operate in the scene while the model is reloading. The progress of the update is displayed in the resource list on the left; when reload is complete, a finish mark will displayed in the list.

> **Warning:** 1. Changes in the model file name or location will cause the reload to fail, try to re-import or replace the model;
2. Reloaded and replaced models **do not support Undo/Redo**, please confirm before proceeding.


## Export and Add to local

For models that have been imported into D5, click "Add to Local" to save the adjusted model to "Assets" -> "Local" for easy reuse in other projects. You can also choose to export the model as .d5a format and save it locally.

Export and Add to Local functions are also supported for grouped models.


---
