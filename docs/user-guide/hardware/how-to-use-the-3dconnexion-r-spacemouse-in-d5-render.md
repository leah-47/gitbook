---
title: "How to Use the 3Dconnexion® SpaceMouse in D5 Render?"
source_url: https://docs.d5render.com/user-guide/hardware/how-to-use-the-3dconnexion-r-spacemouse-in-d5-render
fetched: 2026-06-07
---

# How to Use the 3Dconnexion® SpaceMouse in D5 Render?

D5 Render 2.7 introduces support for the 3Dconnexion® SpaceMouse.

> **Warning:** Note: This feature is currently in beta testing. If you encounter problems or have suggestions, please contact us at <support@d5techs.com>.




## Background Information

If you are new to using the SpaceMouse, it is important to briefly introduce its purpose: It is a professional 3D navigation device that provides an intuitive and smooth experience for moving the camera in a three-dimensional space.

The SpaceMouse is not meant to replace a traditional mouse; instead, it is often used in conjunction with a keyboard and a traditional mouse. Typically, the 3Dconnexion SpaceMouse and the 2D mouse are placed on opposite sides of the keyboard. You can operate the 3Dconnexion SpaceMouse to navigate within the 3D space, while selecting, editing, and dragging the model with 2D mouse.

## QuickStart Guide

### Driver Installation

You need to download the latest driver software (3DxWare) from the 3Dconnexion official website. The download link is <https://3dconnexion.com/drivers/>.

After installing the "3DxWare" driver software, you can refer to the [Product Manuals](https://3dconnexion.com/us/manuals/) in the 3Dconnexion documentation to learn the basics of using the SpaceMouse.

Simply connect the SpaceMouse to your computer's USB port using the USB cable, and it will be ready to control compatible software.

For first-time users, it is highly recommended to use the Trainer feature in the 3Dconnexion Home software to get accustomed to operating the SpaceMouse.



## Using the SpaceMouse in D5 Render

Starting from D5 Render 2.7 and later versions, the SpaceMouse support is enabled by default.

### Orbit and Fly Mode in D5 Render

First, check the current navigation mode in D5 Render:



When D5 Render is in "Orbit" or "Fly" mode, it supports four SpaceMouse navigation modes:

* Object Mode
* Fly Mode
* Target Camera Mode
* Drone Mode

You can switch the SpaceMouse navigation mode in the "Advanced Settings" panel of the 3Dconnexion Settings program.





In most cases, it is recommended to enable "Lock Horizon".

### Walk Mode in D5 Render

If you want to use the SpaceMouse to control the walk mode in D5 Render, set the SpaceMouse navigation mode to "Fly" or "Drone" mode and enable "Lock Horizon".



Then, in D5 Render, switch to Walk Mode using the shortcut Alt+W.



The camera will descend to the nearest ground level, and you can use the SpaceMouse to control the camera's movement in all directions and rotate it.

Note: In Walk Mode, the Eye Level needs to be adjusted within D5 Render using the shortcuts Q/E.



The walking Movement Speed is determined by the Speed of the SpaceMouse, which can be modified in the 3Dconnexion settings program.

### Rotation Center

The "Object Mode" and "Target Camera Mode" in the SpaceMouse involve the rotation center setting.

You can modify the display rules for the rotation center in the "Advanced Settings" of the 3Dconnexion settings program.



It is recommended to enable "Automatic" and "Use Selected Item" so that the camera automatically finds the rotation center and rotates around the selected model.

If you prefer not to see the rotation center icon in the D5 Render viewport, you can choose the "Hide" option.

### SpaceMouse Button Settings

D5 Render provides nearly 50 commonly used shortcuts for the SpaceMouse. You can customize these shortcuts in the "Buttons" section of the 3Dconnexion Settings program.



#### Assigning Commands

All D5 Render commands can be found in the "D5 Render" folder:



#### Importing Preset Commands

You can import preset shortcuts in the "More" options of the 3Dconnexion Settings program.



If you are using the 3Dconnexion® SpaceMouse Enterprise, you can load the following D5 shortcut preset file:



This will provide you with the following shortcut layout:



## Known Issues

Currently, D5 Render only supports SpaceMouse navigation in Perspective View. In future versions of D5 Render, we will add support for Two-Point Perspective and Parallel Projection Modes.


---
