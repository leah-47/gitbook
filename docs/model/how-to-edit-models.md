---
title: "How to edit models?"
source_url: https://docs.d5render.com/model/how-to-edit-models
fetched: 2026-06-07
---

# How to edit models?

<mark style="background-color:purple;">D5 Render primarily supports two methods to move, rotate and scale objects.</mark>

### 1. Scene Tools

You can use the "Move & Rotate" Tool to change the coordinates and rotation angle of object such as model or light in the scene by selecting it directly with the mouse in the non-locked state. Use "Scale" to adjust the size of the object.

The default position of the center of the coordinate axis is the center of the bottom of the model.

### 2. Basic Parameter

The "Basic" parameter in the right sidebar also supports adjusting the "Location", "Rotation" and "Size".

## Tools and Parameters

### Move Models

1. **Scene Tools** : In the scene, drag the arrow on the axis with the mouse to move the model in a single X / Y / Z direction.

* Drag between any two arrows to move the model in the XY / YZ / ZX plane.
* Click the square in the center of the axis and drag it to move the model freely to any position in the scene.

2. **Basic Parameter** : In the "basic" of the right sidebar, you can view the coordinate information of the current object.

For multi-selected objects, you can enter values to unify the coordinates. Or hover and drag the mouse over the input box to move the model uniformly to a certain direction.

![](/d5-edit-model-1.gif)

### Rotate Models

You can rotate the model by clicking on the upper semicircle on the coordinate axis.

1. **Scene Tools** : Perform the rotation operation on the Preview:
   * The position of the mouse click on the rotation axis and the center of the three axes will be used as the starting point of the reference line.
   * The rotation automatically adsorbs 0°, 90°, 180°; when the rotation axis is activated and the shortcut key Shift is pressed, it will no longer be automatically adsorbed for precise rotation operation.
   * A line from the gizmo center to the mouse position will appear on the screen. The greater the distance between the mouse and the gizmo center, the more precise the rotation adjustment becomes.
2. **Basic Parameter** : The information of the model will be displayed in the "Basic" column of the right sidebar, and you can adjust the value of "Rotation".


### Scale Models

1. **Scene Tools** : Select the "Scale" tool (shortcut \* V toggle) and drag any of the axes to change the size of the model.
2. **Basic Parameter** : The "Size" parameter in the right sidebar shows the actual size of the current object in millimeters (mm).

> <mark style="background-color:purple;">In combination with the locking function of the "Size" parameter, adjustments can be made simultaneously or in one direction only:</mark>

* When locked, the model is scaled up and down proportionally.
* When unlocked, the model is scaled in each individual direction.

***

## FAQ

### Q : Why some models have incomplete size parameters or cannot use the scaling tool?

Some models do not support scaling, such as particle models, path models, etc;

Some models only support scaling of flat surfaces, such as surface light models, decal materials, etc.

### Q : Why can't 2D characters rotate?

The 2D character is a plane model material that always faces the currently viewed camera viewport and does not support rotation.

<br>

---
