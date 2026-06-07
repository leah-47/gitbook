---
title: "Draw Path"
source_url: https://docs.d5render.com/user-guide/animation-path/draw-path
fetched: 2026-06-07
---

# Draw Path

The Animation Path tools in the navigation bar are divided into Character Path and Vehicle Path, which are used to create large scale character and vehicle animation scenes.

Similar tools are available in vegetation tools for making street trees or hedges, etc.

## Model Selection

Select the corresponding path tool, click it and select the model in the library. You can add up to 18 models for character and vehicle paths and up to 6 models for vegetation path.

When drawing a path for the first time, select a model directly from the Asset library and draw it. Click the checkbox or use the `Ctrl` key to multi-select the model. Different paths cannot select assets across categories, but only under the category corresponding to that path.

In the sidebar of the existing path, you can see the vegetation model on the current path.

Select an existing model and you can delete, replace, or add new model in the empty slot.

* **Replace:** Hover over the model slot, click the Replace button, and select a new model to replace the current model. The replacment affects only the selected model and does not affect the distribution of other models.
* **Delete:** Hover over the model slot and click the "minus" button to delete the current model. After deletion, the other models on the path will be redistributed.
* **Add:** When a model slot is available, a "plus" sign will be displayed. Click "plus" and select a model from the pop-up Asset library to add it to the current slot. You can only add one model at a time, and multiple clicks will replace the current slot. In the vegetation path, you can add up to 6 types of vegetation assets.

## Drawing paths in the scene

For the first drawing, place control points in the scene with successive clicks. Use the right mouse button to cancel the drawing state.

To continue drawing, first choose whether you want to continue drawing from the beginning or the end. Click on the endpoints and a new line segment will be automatically connected, just continue drawing lines in the scene.

To add a new point in the middle of a path, you can click directly in the path to add a new control point.

Press and hold the control point to drag the control point to any position.



## Path Editing

You can click the " Done" button on the right sidebar or right click the mouse to finish drawing.

To edit the path again, double-click on the surface segment of the path, or click the "Edit" button in the right sidebar.

The path base parameters include position and rotation, which can also be adjusted with the scene tool. Paths do not support rescaling.

The basic drawing and editing methods for Character Path, Vehicle Path, and Vegetation path are the same, with different specific parameter settings:

[Character Path](./character-path.md)

[Vehicle Path](./vehicle-path.md)

[Vegetation Path](../vegetation-tool/vegetation-path.md)


---
