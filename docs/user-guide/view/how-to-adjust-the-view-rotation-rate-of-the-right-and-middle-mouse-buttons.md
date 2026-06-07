---
title: "How to adjust the view rotation rate of the right and middle mouse buttons？"
source_url: https://docs.d5render.com/user-guide/view/how-to-adjust-the-view-rotation-rate-of-the-right-and-middle-mouse-buttons
fetched: 2026-06-07
---

# How to adjust the view rotation rate of the right and middle mouse buttons？

In D5 versions up to 2.6, mouse sensitivity was slower than in other 3D software, requiring repetitive drags to adjust the view, hindered further by the mouse hitting the screen edge. D5 2.7 improved sensitivity and added a feature for users to customize it for comfort. The upcoming version 2.8 will introduce a sensitivity slider in the UI for easier adjustments.

Mouse sensitivity determines how the distance the user drags the mouse influences the camera's movement. Within D5 Render, mouse sensitivity impacts three features:

1. The rotation speed of the camera around an object in orbit mode.
2. The turning speed of the camera in all directions in fly mode.
3. The turning speed of the camera in all directions in walk mode.

### How to Adjust It？

#### Step One:

Right-click on the D5 Render icon and select 'Open File Location'. Use the Notepad to open the config.ini file in the file location and check the Config Path value:

<div align="left"></div>

<div align="left"></div>

#### Step Two:

Navigate to C:\Users\Your User Account\AppData\Roaming>D5Config and find the file named with the ConfigPath value.

If you can't find it, please go to File > View and check 'Hidden Items'.

#### Step Three:

After opening the correct file, click the usr file and open its usr.ini file with Notepad.

<div align="left"></div>

<div align="left"></div>

#### tep Four:

Navigate to the bottom of the usr.ini file and paste the following parameters:

\[viewspeed]

Orbit=1

Fly=1

Walk=1

These parameters support customization. When their values are set to 1, the camera rotation speed will be the same as in D5 2.6.  We recommend setting Orbit as 4 and Fly & Walk as 2.4. You can adjust their values as you need. Please note that the value supports one decimal place.

Save the file and the mouse sensitivity will be modified.


---
