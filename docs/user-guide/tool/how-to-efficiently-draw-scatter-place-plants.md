---
title: "How to efficiently draw/scatter/place plants?"
source_url: https://docs.d5render.com/user-guide/tool/how-to-efficiently-draw-scatter-place-plants
fetched: 2026-06-07
---

# How to efficiently draw/scatter/place plants?

## Brush

<div align="center"></div>

1. Select the plant models and choose the Brush tool to use the currently selected plant models to paint in the scene.

* **Radius**: The brush radius scales according to the screen scale.&#x20;
* **Density**: Control the density of plants at the time of drawing.
* **Size**: Controls the size of the selected plants as they are drawn in the scene.
* **Random Size**: Controls the extent to which the size of each model size varies randomly as the selected plants are drawn in the scene.
* **Align to Terrain**: Plants will be generated in the normal direction of the model surface when this feature selected, and will grow in the vertical direction when closed.

> **Dynamic plants** do not support the \[Align to Terrain] feature for this time being.

<div align="center"></div>

2. The brush radius scales according to the screen scale.&#x20;

* For small areas, you can move the viewpoint to a closer distance and use a smaller scale brush.&#x20;
* For scenes that require wider coverage, such as a bird's-eye view of a city, you can use a farther view and adjust the brush to a large scale.

> TIPS:
>
> 1. Press **Shift** to lock the selected faces and allow you to draw only within the selected faces.
> 2. **If you use the Scatter tool, the material will be highlighted when the mouse hovers over the material to be scattered, and you can click to scatter it within the selected faces**.

> **Info:** Hint:

For the reason of efficiency, we still limit the maximum range of brushes, the maximum adjustable brush radius is 100m.


***

## Scatter

When the Radius parameter of the Brush tool is set to Maximum, you can enable the Scatter tool, and fill the selected face with plants.

<div align="center"></div>

***

## Quick Placement

**When adding a model to the scene from the library, or placing a model directly in the scene, use the shortcut keys to adjust the direction of rotation and size of the object when the model follows the mouse.**

**Rotation**:&#x20;

* **Tap the shortcut key R to adjust the rotation direction of the object's Z-axis**, each tap will rotate the object by 90 degrees.&#x20;
* Hold the R key and drag the mouse to draw circles around the object, you can control the rotation direction of the object.

**Scale**:&#x20;

* **The shortcut key C allows you to adjust the size of the objects.** Every time you press the C key, the object will be enlarged by 1.1 times by default.
* Hold the C key and drag the mouse left and right. Left to reduce the size of the object, right to increase the size of the object.

***

## Random Placement

> Note:
>
> * **Random Location does not support the 'Reset' feature.**
> * The Random feature **is not applicable to special scene resources such as procedurally-generated Vines, Path, Scatter, Light, Camera, and Section.** When you select these unsupported resources or include them in the selection, the 'Random' feature button will turn grey, indicating it's unavailable.

### Random before placement

After 2.9 version, it supports random size and random rotation effects when continuously adding assets from the Asset Library-Nature category.

> Use the **shortcut 'U'** to switch random placement on/off.

### Random after placement

* Added Random Size, Rotation, and Location buttons to the right sidebar. Supports single or multi-selection. Keep clicking to generate new random effect until you are satisfied. Custom shortcuts can be set in Preferences.
* Use the ‘Reset’ feature to restore size and rotation parameters to their original settings.




---
