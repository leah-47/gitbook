---
title: "How to move the viewpoint freely?"
source_url: https://docs.d5render.com/user-guide/view/navigation
fetched: 2026-06-07
---

# How to move the viewpoint freely?

## Navigation Mode 

New Navigation Mode: **Free**\
Integrated **Orbit** and **Fly** into Free mode for flexible and friendly navigation control.

**Now, the Navigation mode in the upper right corner is divided into two types:** ********Free**** ******and** ********Walk******.**



### **Orbit**

**The viewpoint moves around the object in the center of the screen, using a combination of the mouse wheel, the right mouse button, and the Shift key.**

* In the Orbit mode, when you press the right mouse button or the scroll wheel to click on the model, the intersection point of the mouse and the model will be regarded as the orbit point, and the object will rotate around this point.
* In the Orbit mode, when you press the right mouse button or the scroll wheel to click on the background, the gizmo of the selected object or the object closest to the center of the screen in the current viewport will be regarded as the orbit point.
* Orbit view supports visual icon to help users identify the center point of the current rotation, improving operational feedback and sense of control.



### **Fly**

Use the **right mouse button** with the **WASD** on the keyboard to Use the center of the screen as a moving target.

### Walk

Walk and view the scene in the first person, **right mouse button** with **WASD** on the keyboard to move around.

> * After switching to Walk Mode by clicking on the upper right corner of the interface, the viewpoint will drop down to the object below according to the set height.&#x20;
> * When using WASD to walk, always keep the camera height to move, such as encountering a wall will cause collision and can not pass through.

<table><thead><tr><th width="154">Operation</th><th width="180">Orbit</th><th>Fly</th><th>Walk</th></tr></thead><tbody><tr><td>Hold the scroll wheel</td><td>Free movement according to the center of the screen</td><td>Free movement</td><td>Free movement</td></tr><tr><td>Scroll wheel</td><td>Move the camera according to the position of the mouse</td><td>Move the camera back and forth to the center of the screen</td><td>Move the camera back and forth to the center of the screen</td></tr><tr><td>Right mouse button</td><td>Camera moves around the center of the screen</td><td>Fixed camera position, change the direction of view</td><td>Fixed camera position, change the direction of view</td></tr><tr><td>Hold down the left and right mouse button</td><td>-</td><td>Move the camera up and down</td><td>Move the camera up and down</td></tr><tr><td>WASD</td><td>-</td><td>Move the camera back and forth and left and right</td><td>Move the camera back and forth and left and right</td></tr><tr><td>QE</td><td>-</td><td>Move the camera up and down</td><td>Move the camera up and down</td></tr><tr><td>Shift + Right mouse button</td><td>Panning camera</td><td>-</td><td>-</td></tr></tbody></table>

## Comparison between old and new navigation modes: 

|                                                  | Orbit                                                                 | Pan                                                                           | Look around                                                                                                                                                                            | Move forward/backward/left/right in Fly mode | Up in Fly mode | Down in Fly mode | Custom speed                                                                                                                         | Accelerate/Decelerate                                            | Dolly in/out                                                                                                                    | Zoom(FOV only)       | Deselect                                                                                    | Box Select                                  |
| ------------------------------------------------ | --------------------------------------------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------- |
| D5 2.11                                          | <p>In Oribt Mode:</p><p>Right mouse button or Middle mouse button</p> | <p>In Orbit Mode:</p><p>Shift + Right Mouse Button or Middle Mouse Button</p> | <p>In Fly Mode: Hold the right mouse button and drag to look left/right/up/down</p><p>Hold down the middle mouse button and drag to look left and right, move forward and backward</p> | WSAD                                         | Q              | E                | <p>Hold the right mouse button and then scroll wheel.</p><p>Value range: 1-200. This action is distinct from single right-click.</p> | In Fly/ Walk mode: Hold Shift to speed up and Space to slow down | Scroll the mouse wheel. In Orbit mode, the dolly distance adjusts proportionally; In Fly mode, it adapts to the movement speed. | Shift + Scroll Wheel | Press the left or right mouse button without moving the cursor, equivalent to pressing Esc. | Hold Ctrl and the left mouse button to drag |
| <p>D5 3.0</p><p>(Temporary default settings)</p> | Left mouse button                                                     | Hold the middle mouse button and drag                                         | Right mouse button                                                                                                                                                                     | WSAD ↑↓←→                                    | Q              | E                | <p>Hold the right mouse button and then scroll wheel.</p><p>Value range: 1-200. This action is distinct from single right-click.</p> | Hold Shift to speed up and Space to slow down                    | Scroll the mouse wheel to move proportionally, which follows the dolly logic of the Orbit mode.                                 | Alt + Scroll Wheel   | Press the left mouse button without moving the cursor, equivalent to pressing Esc.          | Hold Ctrl and the left mouse button to drag |

## Navigation Presets:   

* Added navigation presets matching SketchUp, Rhino, 3ds Max, and Revit, along with default D5 presets, under Navigation > Settings. Changes take effect immediately upon switching presets.
* Compatibility with old navigation modes:
  * D5 Preset 1 (Default) for Fly mode
  * D5 Preset 2 for Orbit mode



* Customizable Shortcuts
  * Supports setting custom shortcuts for navigation presets.

|                                  |                                  |
| :------------------------------: | :------------------------------: |
|  |  |

## Parameter Adjustment 

### **1. Movement speed:**&#x20;

* Orbit Mode

**In 'Orbit'Mode ,The speed is not adjustable.**&#x20;

The movement speed is related to the distance of the lens from the objects in the scene, moving slower when the distance is close and faster when the distance is farther away.

* Fly and Walk Mode
  * In 'Fly' and 'Walk' modes, when pressing the **Shift key**, the speed will become 4 times faster than the original speed. Press the **Space key** to decelerate the speed. Press the **Shift+Space keys** to accelerate by 2 times. When the speed is set at 1, pressing the **Space key** will lower the speed to 0.2 for tweaks.
  * You can press the right mouse button and scroll the wheel in Fly Mode and Walk Mode to modify the movement speed, scrolling the wheel fast to change the speed quickly, scrolling slow to fine-tune the speed.

### **2. Eye level:**

Adjust the vertical height of the actual viewpoint of the lens from the horizontal plane of the scene origin coordinates, the range of the slider value of the lens height in the Walk mode is 0.8m-2.5m, and it **does not support manually inputting a larger value**.

### **3. Altitude**

Adjust the vertical height of the actual point of view of the lens from the horizontal plane of the scene origin coordinates, the range of the slider value of the flight height in the Fly mode is 0m-50m, and it **supports manually inputting a larger value**.

### **4. Roll**

Control the rotation angle of the camera in the horizontal direction.

### **5. Mouse Speed**

Adjust freely the speed at which the camera rotates around the object in Orbit mode, and the speed at which the camera turns its head up, down, left, right, and center in both Fly & Walk modes.



***

## FAQs

### Q: Why does moving the viewpoint with WASD not work?

A: **WASD shortcuts only work when the movement mode is fly and walk.**

* In orbit mode, you need to use the mouse and scroll wheel to adjust.

### Q: Why can't I use walk mode?

A: If **the landing site is not captured in the current view**, it will automatically switch from walk mode to fly mode or fail to switch to walk mode and display the ↓ prompt.

<div align="center"></div>


---
