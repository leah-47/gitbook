---
title: "Widget"
source_url: https://docs.d5render.com/user-guide/widget
fetched: 2026-06-07
---

# Widget

D5 Widget is a customized extension module of D5 Render, aiming to provide advanced features while keeping the simplicity. (learn more about [D5 Widget](https://www.d5render.com/post/d5-render-widget)) It contains 6 major functions: advanced video rendering, VR (virtual reality) beta, stage lighting, projector, color correction, and merge projects.

Go to ****Menu > Preference > Widget**** , and you can check what you installed, switch on/off with one click to manage your widgets.



### Advanced Image Rendering

* Select .png .jpg .tga .tif .exr when rendering images, with channel selection enabled.



### Advanced Video Rendering 

* Select .mp4 or .avi when rendering videos.



* Sequence of frames supports .png and .exr with channel selection enabled.



### VR beta

Explore the scene with Virtual Reality, available for SteamVR-ready devices. (e.g. HTC Vive, Oculus Rift...)

### Stage Light

Navigation Bar > Add Lights > Stage Light.

<div align="center"></div>

The stage lighting is designed to simulate professional dynamic lighting effects.



* **Pattern :**&#x73;elect a preset pattern or upload a custom pattern&#x20;
* **Brightness**：The luminous intensity of the light source in cd (candela, candela), the maximum brightness can be entered 8000000.&#x20;
* **Aperture:**&#x43;ontrol the size of the radius of the stage light cone, the larger the aperture, the larger the radius of light.
* **Decay Radius**:Limit the range of influence of the light source.Within this range, the light decays according to the normal inverse square law, beyond which the light calculation stops.&#x20;
* **Prism:**&#x4F;ne-touch switch to split the light into multiple beams.
* **Quantity**：Control the amount of beam splitting.&#x20;
* **Rotation parameter** ：a new Rotation parameter is added to control the rotation of images, with no need to turn on Prism. When the Rotation parameter is negative, the gobo rotates clockwise. The smaller the value, the faster the rotation speed. When the rotation parameter is positive, the gobo rotates counterclockwise. The larger the value, the faster the rotation speed. When the parameter is set to 0, the stage light stays static.
* **Smoke** :Control the effect of smoke in the simulated stage lights and adjust the smoke concentration by adjusting the value.
* **Colors**：Control the light color.
* **Pattern**：select a preset pattern or upload a custom pattern .

The stage lighting is designed to simulate professional dynamic lighting effects.![](https://dimension5.feishu.cn/space/api/box/stream/download/asynccode/?code=ZjQ5YTdhODBmYWY0YjllYjNmZmU0MjcyNjE3ZjBkMTFfMWhnZEkyYkQ5Sk83VUl5bHlmaHFWcENtclVWempvZEdfVG9rZW46Ym94Y25vWmc0a2MyM2VibUtKYjVoZ0xBQ3pjXzE2NTA0MzM2MzA6MTY1MDQzNzIzMF9WNA)

### Projector



Go to Menu > Preference > Widget to activate Projector, then it can be inserted into scenes from the Navigation bar > Add lights. Projector is a new type of light source, which has a rectangular projection effect. It supports image formats including jpg/png/bmp and video formats including mp4/avi/wmv.



* **Video**：select a preset pattern or upload a custom pattern to determine the projection screen.
* **Brightness**：The luminous intensity of the light source in cd (candela, candela), the maximum brightness can be entered 8000000.&#x20;
* **Cone Angle and Attenuation Radius:** control the projected range.
* **Decay Radius**:Limit the range of influence of the light source.Within this range, the light decays according to the normal inverse square law, beyond which the light calculation stops.&#x20;
* **UV :** control the position and size of the picture or video.
* **Haze Effect :**&#x54;o create a haze effect, we need to turn on the "Volume Light" in "Environment" - > "Weather" - > "Fog" in advance.

### Color Grading



Precisely control the tonal values of Midtones, Shadows, Highlights, Global in the scene with Effect panel.

### **Merge Projects**

Go to Menu > Preference > Widget, and activate Merge Projects (beta) there. You can merge up to 10 files into one at one time, which can boost teamwork productivity on big projects.We have three ways to open Merge Projects (beta) widget:

1. Go to the Welcome page > Recent, click on the button in the upper-right corner

 

2\. Right click on a project in the Recent page, select Merge Project&#x20;



3\. While editing files, go to Menu > File > Merge project



#### **Conditions of Merge project**

**The following prerequisites must be met while merging project:**

* Project documents must be kept intact.
* Consistent project file versions
* Archived file versions support merge project functionality
* The remaining free space on the disk where the merged archive is located must be greater than the total of all the archives to be merged.

**If a project merger fails, the following reasons may exist:**

* Project files are corrupted
* The currently selected file version is lower or higher than the added version
* This feature is not supported in the project file version
* Insufficient disk space
* File copy failure
* Merge project locations contain files with the same name.
* Merge project location is not available.

#### **Merging Order**

Project merging will be carried out in the order of adding projects: the first added project is the main project. If we start merging files while editing, it will directly add the currently edited project as the main project to the first position of the project list

#### **Merger Logic**

To merge projects, we need to select at least 2 files, then choose whether to combine their models, light objects, scenes, etc. The checked items will be retained in the merged result; while unchecked ones will be removed.If we check the same option for multiple projects at the same time, only one copy of the identical parts of the scene will be retained; different parts will be added automatically. For example, the same light exists in both projects. If the light is checked in the merge option, adding the parameters of the light in the project will overwrite the light parameters in the previous project.If we check the same option for multiple projects at the same time, different parts will be added automatically.


---
