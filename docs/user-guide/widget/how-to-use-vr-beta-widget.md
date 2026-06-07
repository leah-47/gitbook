---
title: "How to use VR (beta) Widget?"
source_url: https://docs.d5render.com/user-guide/widget/how-to-use-vr-beta-widget
fetched: 2026-06-07
---

# How to use VR (beta) Widget?

D5 Widget is a customized extension module of D5 Render, aiming to provide advanced features while keeping the simplicity. Go to Menu > Preference > Widget, and you can check what you installed, switch on/off with one click to manage your widgets.



Users can explore the scene with Virtual Reality, available for SteamVR-ready devices. (e.g. HTC Vive, Oculus Rift…)

### Supported devices 

* HTC VIVE, HTC VIVE PRO, PicoNeo and all devices that can connect to SteamVR program.
* Oculus Go, Oculus Rift, Oculus Quest and all devices that can connect to Oculus program.

### Steps 

#### 1. Enable the VR beta widget in D5. 

Open a D5 scene file, go to Menu > Preference > Widget, find VR beta then turn it on. This feature will take effect after rebooting D5 Render.<br>



#### 2. **When D5 Render is closed**, connect the VR device to your computer. 

a. For Oculus devices, please connect to Oculus program for PC. For reference,

[Use Oculus Link with Meta Quest 2 or Meta Quest | Meta Store (facebook.com)](https://www.meta.com/help/quest/509273027107091/?utm_source=docs.d5render.cn\&utm_medium=oculusredirect)

[Connecting your Meta Quest 2 to your PC with Oculus Air Link | Meta Store (facebook.com) ](https://store.facebook.com/help/quest/articles/headsets-and-accessories/oculus-link/connect-with-air-link/)

b. For other devices, please connect to Steam VR

[SteamVR on Steam (steampowered.com) ](https://store.steampowered.com/app/250820/SteamVR/)

> Note: some devices have their own programs to connect to SteamVR. For example, Pico devices need Pico game streaming assistant to connect to SteamVR
>
> It is recommended to use efficient connection methods such as 5G WiFi to ensure data transmission speed

#### 3. Open D5 Render, turn on VR beta 

After successful connection to Oculus or SteamVR, launch D5 Render and turn on VR.



In VR mode, your views will move with the device. At the same time, you can move the “footprint” by pressing the trigger of your controller to move to the target position. The default height is 1.6m, which can be adjusted in the VR device program. After use, press ESC on the keyboard to exit VR mode.

It is also suggested to disable VR beta widget after use, and do not render photos/videos when there is a VR device connected.

## FAQs 

**1. Why it is laggy in VR mode?**

In VR mode, D5 will render two cameras in real time (corresponding to the left eye and the right eye), so it has higher requirements on the graphics card.

Some VR devices have the function of detecting whether the VR glasses are normally worn. When the VR glasses are not normally worn (placed upside down on the table, kept picking up and putting down, and so on), the frame rate will automatically drop, resulting in laggy performance. In addition, if the number of lights in a scene is very large, it may also cause lagging issue.

Finally, please ensure that the driver version of the graphics card is updated, and do not turn on the high-resolution or high frame rate function of the VR device.

**2. Why cannot connect to the Oculus program?**

Oculus is not officially in the Chinese mainland market, and mainland servers may not be able to connect to its servers. Try using a third-party streaming tool to connect to SteamVR to be recognized by the D5 Render VR.

**3. With the VR widget enabled, why does SteamVR automatically opens every time when opening D5 Render, and why does the D5 program also exit when closing SteamVR?**

SteamVR starts every time when opening D5 Render after enabling the VR beta: This is a known issue and is being fixed. It is recommended to turn off the VR beta on the widget page after not using VR.

After closing Steam VR, the D5 program will also exit: due to the fact that the termination of the StreamVR program will shut down all processes using VR, and thus the D5 program will be closed. It is recommended to save the scene before closing the VR program.

**4. The image quality of VR mode is not the same as the high-quality preview mode?**

Considering performance, effect, user experience and other aspects, we have designed the current VR preview image quality, which is between high and medium image quality. It has customized GI and shadow effects, but no reflection. We will continue to optimize to bring better experience.

**5. Why are glass reflections very blurry in VR mode?**&#x20;

Glass reflections appear blurry in VR scenes. It is recommended to increase the glass transparency. Indoor reflections are better than outdoor ones.

**6. Why do VR controller displays differ from actual heights?**

The VR controller appears lower in D5 than its actual height, with a height difference of approximately 80cm.

**7. Why aren't clouds visible in the Geo and Sky? Why isn't grass visible?**

Due to performance considerations, clouds in the Geo and Sky and grass are not displayed in VR mode. However, plants generated by the scattering feature can be displayed.


---
