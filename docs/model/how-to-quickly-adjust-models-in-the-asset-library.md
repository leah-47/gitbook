---
title: "How to quickly adjust models in the asset library?"
source_url: https://docs.d5render.com/model/how-to-quickly-adjust-models-in-the-asset-library
fetched: 2026-06-07
---

# How to quickly adjust models in the asset library?

## Feature Overview

<mark style="background-color:purple;">When you use in the D5 Asset Library, or import your own models, you can use shortcut keys to adjust the direction and size of the model before you place them.</mark>

Supported model types:

1. Most Asset Library models (online library + local library)
2. Imported models

Not supported types:

1. Decal models
2. Particles
3. Lights
4. Brushes and Path Tool

***

## Quick placement

When you add a model from the material library to the scene, or directly place a model in the scene, the model will follow the mouse before you place it in the scene. You can use the shortcut key to adjust the rotation direction and size of the object before you place it.

You can also do this when you duplicate a model.

### Rotating before placing

Rotation: click <mark style="background-color:purple;">the shortcut key R</mark> to adjust the orientation around the Z axis of the object. Press each point once, and the object rotates 90 degrees. Press and hold the R key and drag the mouse to circle around the object at the same time to control the rotation direction of the object.

### Zooming before placing

Zoom: <mark style="background-color:purple;">The shortcut key C</mark> adjusts the size of an object. Press the C key once at each point, and the object will be enlarged 1.1 times by default. Press and hold the C key and drag the mouse left and right at the same time to reduce the size of the object to the left and increase the size of the object to the right.

***

## Random Placement <a href="#random-placement" id="random-placement"></a>

> Note:
>
> * **Random Location does not support the 'Reset' feature.**
> * The Random feature **is not applicable to special scene resources such as procedurally-generated Vines, Path, Scatter, Light, Camera, and Section.** When you select these unsupported resources or include them in the selection, the 'Random' feature button will turn grey, indicating it's unavailable.

### Random before placement <a href="#random-before-placement" id="random-before-placement"></a>

<mark style="background-color:purple;">After 2.9 version, it supports random size and random rotation effects when continuously adding assets from the Asset Library-Nature category.</mark>

> Use the **shortcut 'U'** to switch random placement on/off.

### Random after placement <a href="#random-after-placement" id="random-after-placement"></a>

<mark style="background-color:purple;">Added Random Size, Rotation, and Location buttons to the right sidebar.</mark>&#x20;

* Supports single or multi-selection. Keep clicking to generate new random effect until you are satisfied. Custom shortcuts can be set in Preferences.
* Use the ‘Reset’ feature to restore size and rotation parameters to their original settings.

<figure><img src="/files/eSRs1L9glfV3loS3M0lR" alt=""><figcaption></figcaption></figure>

***

## Other FAQs

### Q: Is the material size restored to the default value every time you use it?

It inherits the last adjustment by category. If you use the amplification (2 times) before placing plant A, and then choose Plant B to place, Plant B will follow the amplification notes of Plant A, which will be amplified by 2 times by default.

### Q: How do I cancel the last adjustment to restore the default size of the material?

Switching between different categories can interrupt inherited adjustment parameters. If plant A has been placed, then Vehicle B is placed. When returning to plant classification, plant A becomes the default size.

### Q: Why do plant models sometimes become big and small?

When placing the plant model, the parameters "size" and "random size" in the lower left corner of the material library still affect the size of the material.


---
