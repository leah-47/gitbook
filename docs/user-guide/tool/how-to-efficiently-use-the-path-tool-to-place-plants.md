---
title: "How to efficiently use the path tool to place plants?"
source_url: https://docs.d5render.com/user-guide/tool/how-to-efficiently-use-the-path-tool-to-place-plants
fetched: 2026-06-07
---

# How to efficiently use the path tool to place plants?

## Custom paths

Supports adding models to the Path from:

* Models from the online Asset Library: including ''All Model'', ''Recent'', and ''Favorite''.
* Models from the Local library.
* Models from the Team library.

**Supports saving path combinations:** Users can save the whole path + model combination to the Local library or Team library, and enable as the preset in Studio to improve reuse efficiency.



**Types which are unsupported:**

Procedurally-generated Vine, Decal, Scattered Object, HDRI, Terrain (including height and material assets), City (OSM), GIS sub-level content, Section Plane& Cube, Camera, Material, Light.

> **Note:** ''Top Navigation Bar'' is the only portal for creating paths. The Path tool icon that was located in the bottom left corner of '' Asset Library - Online - Models'' has been hidden. To restore it, please go to Menu Bar > Preference > Shortcuts > Compatibility , and enable ''Path tool available in Asset Library''.

## Edit path

Select the "Tools" -> "Paths" function from the navigation bar, click on it and select a model from the library.&#x20;

1. **You can add up to 6 models to the plant path.**&#x20;
2. **When drawing with the Path tool, you can set the type of control points to \[Curve] or \[Linear].**

* In \[Linear] mode, users can adjust the smoothness of polyline corners when drawing control points.
* In \[Curve] mode, users can adjust the handle length of polyline corners when drawing control points. As in previous versions, Bézier curves are utilized.

3. **Each control point can set the type individually.** The control points support multiple selection Ctrl box selection and full selection Ctrl+A adjustment.

|  |  |
| :------------------------------: | :------------------------------: |

## Basic edit

1. The path supports the basic features as duplicate, focus on, and reset.
2. Click the "Edit" button to enter the path control point editing mode.&#x20;

* In this mode, you can only add, move and delete the control points of the path.&#x20;
* After editing, right click on the mouse or click "Finish" to exit the editing.&#x20;

3. The basic parameters include position and rotation, which can also be adjusted with the scene tools. Paths do not support resizing.

<div align="center"></div>

## Parameter adjustment

Used to adjust the distribution of plant models on the path.

### Model

* Once a model is selected and the drawing is complete, the models along the path appear as a list in the right-hand sidebar. Users can add, delete, or replace items, allowing design changes at any stage.
* Scale, rotation, and zoom parameters for these objects can be adjusted independently, providing precise control over each element in the path.



### Alignment

Support selecting \[Auto] or \[Fixed] mode to choose different plant path arrangement.

1. **When "Auto" mode is selected**, the total number of models on the current selected path is controlled according to the parameter "Number".

The minimum number is 2, distributed at both ends of the path.&#x20;

The maximum number is 100. Depending on the number, the models are distributed in equal order along the path.

2. **When "Fixed" mode is selected**, the fixed spacing between plants on the path is adjusted according to the setting "spacing".

In this case, a corresponding number of models will be generated within the path length, based on a fixed spacing between the two plant models. The maximum value of the spacing will not exceed the path length in metres (m).

### Direction and Random direction

**The " Direction " parameter** controls the direction of the model's planar rotation, which is a uniform direction for all models on the path.

**The "Random Direction"** is based on the existing rotational position, and then the rotational direction of each model is randomly varied.

<div align="left"></div>

### Random spacing and Random Offsets

"Random Offset" is where the models move perpendicular to the centreline of the path, randomly increasing the distance from the centreline and increasing the width of the path at the same time.

The offset distance is the actual offset value, known as the "random maximum offset", in metres (m), and the maximum value must not exceed the path length.

<div align="left"></div>

### Size and random size

The "Size" parameter controls the uniform size of all models on the path. The default standard size of the model is "1" and can be adjusted by a factor of "0.1 to 2".

"Random Size" sets the size of the models randomly based on the existing size of the models.

### Random Seed

* The random seed controls the randomisation effect applied to objects on the path.
* When any of the random spacing, random rotation, or random scaling parameters are set to a value other than zero, adjusting the random seed generates different object distribution patterns, resulting in more natural and varied path effects.

### Drop

When the surface of a model is curved and uneven, the path does not fit the surface of the model perfectly, and the model on the path floats in mid-air. After using the "Drop" feature, the model will be automatically attached to the surface of the model closest to it.

## FAQs

1. When using the path tool to place characters/vehicles/animals etc., does the effect change every time opening the archive?&#x20;

This is the current effect in expectation.&#x20;

Due to the use of the path tool, the scene is regenerated every time you open it, and it is not currently supported to save relevant parameters ( to make subsequent openings of the scene show the exact same effect as in the previous archive).


---
