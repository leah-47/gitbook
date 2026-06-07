---
title: "How to add a custom outro in D5?"
source_url: https://docs.d5render.com/user-guide/environment/how-to-add-a-custom-outro-in-d5
fetched: 2026-06-07
---

# How to add a custom outro in D5?

You can add an exterior scene in D5 in the following way:

## Internal HDRI

The D5 render has a number of different HDR panoramic environment maps built in for different atmospheres.

Note: The "Pure White" HDRI background will be adjusted to grey by auto exposure when the auto exposure option is turned on. If you want a "Pure White" background, you will need to control the exposure manually.

<div align="left"></div>

## Customize HDRI&#x20;

Click "+Customize HDR" in the drop-down menu to load hdr files (currently hdr and exr formats are supported).

Note: Currently D5 also supports loading low dynamic range jpg files. LDR images can also provide a background reflective environment and some lighting, just not as realistic as HDR.

<div align="left"></div>

Custom imported HDR files are saved by default to the "customhdr" folder in the D5 Render installation path. Click on the folder icon to quickly access this path and manage your custom HDR files:

<div align="left"></div>

You can switch between "Defult" and "Custom" categories in the drop-down menu.

<div align="left"></div>

## Parameter adjustment

### 1. Light

Overall control of the brightness of the HDRI image, which affects the lighting of the scene.

Note: If Auto Exposure is turned on, it will always compensate for changes in overall brightness, making the adjustment of this parameter less effective:

* Skylight: Adjusts the effects of light and material diffuse reflections individually. Does not affect material reflections.



* Background: Adjust the brightness and darkness of the background individually. Affect the material reflection.



### 2. Rotate

Rotates the HDRI sky environment map horizontally, this affects the content of the background, the material reflection environment, and the sun's azimuth.

### 3. Flip Horizontal

Supports flipping the current HDRI.

<div align="left"></div>

### 4. Sky Temperature and Sky Color adjustment option

Sky Temperature: Affects the colour tendency of the sky lighting, which will affect the diffuse lighting effect, not the background image or reflections. The default value is 6500K, the lower the temperature, the more yellowish the diffuse reflection, the higher the temperature, the more bluish the diffuse reflection.

Sky Color:  Supports Hue and Saturation adjustments.

* Hue: The default value does not affect the original hue. Adjust parameters to change the degree of hue shift.
* Saturation: The intensity or purity of colors, with the parameter ranging from -100 (grey) to 100 (fully saturated).&#x20;

Adjustments to Temperature and Sky Color only work on Skylight (i.e., sky light color) by default. Supports setting the 'Area of Effect' to 'Background Only' or 'All'.

Note:&#x20;

1. Right click to reset the parameters after adjusting Temperature/Sky Color.
2. The white color has no Hue, so a white HDRI is not affected by the Hue parameter.

<div align="left"></div>

### 5. HDRI Resolution Control



* Added HDRI Resolution to **Preference > Rendering** with 2K, 4K, 8K, and Actual Resolution options. The resolution setting affects both real-time viewport and image/video output.
* The Default setting, Adaptive (recommended), inherits the logic of previous versions, which compresses HDRI to 2K resolution for viewport to boost FPS and reduce VRAM consumption, while supporting a panoramic background up to 8K resolution for image/video renders.

> **Warning:** **Note:**&#x20;

Higher resolutions consume more graphics memory. Please set the resolution appropriately based on hardware capabilities to avoid lag or crash.


***

## FAQs

### How to reuse HDRI images in archives?

There are two ways to achieve this in the current version:

1. Only need HDRI images

The HDRI images used in the archive are saved in the corresponding asset path, which allows you to find the HDRI images you need directly.



2. Save environment and effect presets&#x20;

Through Studio-save preset feature, you can add the environment/effect parameters of the current scene to My Space/Team Space. (If you only tick Effect when adding environment and effect preset, the preset parameters added successfully will only contain effect information, without environment information such as HDRI).




---
