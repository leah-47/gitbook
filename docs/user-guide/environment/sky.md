---
title: "How to adjust parameters of Sky Light?"
source_url: https://docs.d5render.com/user-guide/environment/sky
fetched: 2026-06-07
---

# How to adjust parameters of Sky Light?

## Geo Sky

**Geographic sky can quickly provide natural lighting for interior and exterior scenes.**

### Simple adjustment

Drag the sun angle control lever to change the time period and the corresponding sun angle.&#x20;

* As the sun angle changes, the color of the sky will dynamically change accordingly, showing the light color in the early morning, noon, dusk and other time periods.



### Precise Simulation

The Geo and Sky system can accurately simulate the real sunlight angle, which is great for project preview and visualization.

* Click the `⋮` button to the right of the **North Offset** to expand the detailed parameter panel.

> - The default parameter of the geographic sky is the sun angle at 16:00 PM on January 1 in Nanjing, Jiangsu Province (D5 headquarters, 118.8°E, 32°N).&#x20;
>
> Please modify the parameters according to the actual geographic data of your own project in order to get accurate simulation results.

#### **1.North offset**

**This parameter is used to correct the direction of "north compass".**&#x20;

Drag the control and the sun's orientation will rotate horizontally. The default value of the control is in the middle, meaning no offset. In the top view, dragging to the right or entering a positive value will rotate the north direction clockwise.&#x20;

D5 Render will set one of the main axis direction of the model as north. e.g. The positive direction of green axis in SketchUp scene will be recognized as north.

> 1. In practical design process, it is usually preferred that the modeling software's axes coincide with the design axes of the building, rather than modeling according to the geographic direction.&#x20;
>
> This means that the axes of most scene files deviate from the geographic north direction, which can be corrected by using the "North Offset" parameter.
>
> 2. If you are not sure where the north direction of the D5 Render is, you can find it according to geographical knowledge.&#x20;
>
> For example, if you set the time to 12:00 noon, the shadow of an object north of the Tropic of Cancer (23.5°N) will then point due north.

#### **2.Time**

Enter parameter as needed.

#### **3.Date**

Enter parameter as needed.

#### **4.Latitude and longitude**

Please enter the real latitude and longitude coordinates of the project.

* The positive value of the longitude parameter indicates the E longitude, and the negative value indicates the W longitude (parameter range 180°\~-180°).&#x20;
* The positive value of the latitude parameter indicates N latitude, and the negative value indicates S latitude (parameter range 90°\~-90°).

Note that here is Decimal Degree (DD), different from Degree Minute Second (DMS), accurate to one decimal point. Pay attention to the conversion in actual use.&#x20;

> For example: 35°30'E should be converted to 35.5°E.

#### **5.Custom sun/moon/starlight parameters**

Supports to custom adjust relevant parameters to meet specific scene requirements.

* Sunlight Intensity: Controls the brightness of the Sunlight source.
* Sun Disk Radius: Controls the diameter of the sun in the sky also affects the softening of the shadows to some extent, but the scene brightness stays the same.
* Moonlight Intensity: Controls the brightness of the moonlight source.
* Moon Disk Radius: Controls the diameter of the moon in the sky, but the scene brightness stays the same.
* Starlight Intensity: Controls the brightness of stars.

> Note: *Sun Disk Radius & Moon Disk Radius* are artistic effect options, not physically accurate.

#### **6.Caustics**

Supports Sun Caustics to better simulate the visual effects of refraction and reflection of sunlight in the real world.

* **Caustics Intensity:** The multiplier value of the Caustics effect, the higher the value, the brighter the caustics.
* **Softness:** The degree of Caustics softening which takes effect at the Light Source Radius greater than 0.

> Note:&#x20;
>
> To achieve the caustic effect, the ‘Caustics’ option must be enabled simultaneously for both the material and the light source. Among the materials, only the "Custom", "Transparent" and "Water" material templates currently support caustics.
>
> The Custom material supports reflective caustics,
>
> the Transparent and Water materials support both reflective and refractive caustics;
>
> For more details, please refer to: [How to achieve caustics effect](../material/how-to-achieve-caustics-effect.md)



## Custom

Click the ‘Custom’ panel to expand the detailed parameter panel and adjust the daytime and night parameters.

### Custom Daytime

#### 1. Sunlight Intensity

Controls the brightness of the Sunlight source.

#### 2. Sun Disk Radius

Controls the diameter of the sun in the sky also affects the softening of the shadows to some extent, but the scene brightness stays the same.

> Note: This option is an artistic effect, not physically accurate.

#### 3. Altitude

Adjusts the height of the sun in the sky by the altitude.

#### 4. Azimuth

Adjusts the direction of the sun in the sky by the azimuth.

#### 5. Caustics

Enable the caustics calculation of the sun.

> To achieve the caustic effect, the ‘Caustics’ option must be enabled simultaneously for both the material and the light source.
>
> For more details, please refer to: [How to achieve caustics effect](../material/how-to-achieve-caustics-effect.md)



### Custom Night

#### 1. Moon Intensity

Support to adjust moon brightness as needed.

#### 2. Moon Disk Radius

Supports to customize the size of moon, the diameter of the moon in the sky will change significantly when adjusting the parameter, but the brightness of the scene stays the same.

> Note: This option is an artistic effect, not physically accurate.

#### 3. Moon Phases

Customize the moon's waxing and waning by adjusting the moon phase.

#### 4. Moon Phase Direction

Customize the direction of the moon's waxing and waning by adjusting the moon phase direction.

5\. Altitude&#x20;

Adjusts the height of the moon in the sky by altitud.

#### 6. Azimuth

Adjusts the orientation of the moon in the sky by azimuth.

#### 7. Starlight Intensity

Adjust the brightness of the stars in the sky.



## HDRI

### Background Knowledge

#### What is HDRI?

****HDRI is the abbreviation of High Dynamic Range Image.**** ******Common image formats are hdr, exr, etc.**&#x20;

> * The opposite concept is called **"LDRI (Low Dynamic Range Image)"**. Images in jpeg and png formats are all LDRI.

How can we create an HDRI?&#x20;

Usually, using a camera to capture the same scene at different exposure levels, resulting in several LDR images. Then using specific software, combine LDR information into a single image to obtain an HDR image. Ideally, the pixel values in an HDR image are proportional to the true intensity of light in nature. It records both very bright and very dark information, the so-called "dynamic range" is very high.

> **Success:** **HDRI is not only the background, but also illuminates the whole scene.**


#### Why use HDRI?

Here's an example to demonstrate the benefits of HDRI.&#x20;

Open the low and high dynamic versions of the same image in Photoshop and place them together.&#x20;

(HDR image credit: [Sunflowers HDRI • Poly Haven](https://polyhaven.com/a/sunflowers)).

* The upper image is in jpeg format, bit depth: 8 bits/channel.&#x20;
* The lower image is in hdr format, bit depth: 32 bits/channel.



By default, both images look the same on the screen, because the bit depth of the screen display is also 8 bits/channel.

Information outside of this range will appear on the screen as "overexposed" pure white, or severely underexposed pure black.

Let's add \[Exposure] adjustment layers to both images and lower the exposure level by 3 stops:&#x20;



The difference is apparent:&#x20;

* in the lower HDR image, the areas that were overexposed and turned white show more content: cloud detail, blue sky, sun, etc.&#x20;
* The overexposed areas of the LDR image above, on the other hand, simply change from pure white to a dull gray, because no detail was recorded in these overexposed areas in the first place.

We use these two images, as the sky environment background, to render the model, and the difference is also significant:





Most importantly, the sun in HDRI can cast shadows:



#### What should I look for when selecting HDRI?

**The HDRI environment used in D5 Render are "spherical projection" panoramas.** In addition, there are other common panorama projection methods such as cubic and mirror ball.

The spherical projection panorama is characterized by:

* **Image aspect ratio is 2:1**
* The horizon line is usually at the middle height of the frame.
* The content of the picture can completely cover all angles around the camera.

Here is what a typical HDRI image suitable for D5 Render would look like (compressed to a low dynamic image for web display purposes), and we are going to use this type of image for Sky Light.

(HDR image credit: [Sunflowers HDRI • Poly Haven](https://polyhaven.com/a/sunflowers))



### Detailed explanation of parameters

#### 1. Light

Overall control of the brightness of the HDRI image, which affects the lighting of the scene.

Note: If Auto Exposure is turned on, it will always compensate for changes in overall brightness, making the adjustment of this parameter less effective:

* Skylight: Adjusts the effects of light and material diffuse reflections individually. Does not affect material reflections.



* Background: Adjust the brightness and darkness of the background individually. Affect the material reflection.



#### 2. Rotate

Rotates the HDRI sky environment map horizontally, this affects the content of the background, the material reflection environment, and the sun's azimuth.

#### 3. Flip Horizontal

Supports flipping the current HDRI.

<div align="left"></div>

#### 4. Sky Temperature and Sky Color adjustment option

Sky Temperature: Affects the colour tendency of the sky lighting, which will affect the diffuse lighting effect, not the background image or reflections. The default value is 6500K, the lower the temperature, the more yellowish the diffuse reflection, the higher the temperature, the more bluish the diffuse reflection.

Sky Color:  Supports Hue and Saturation adjustments.

* Hue: The default value does not affect the original hue. Adjust parameters to change the degree of hue shift.
* Saturation: The intensity or purity of colors, with the parameter ranging from -100 (grey) to 100 (fully saturated).&#x20;

Adjustments to Temperature and Sky Color only work on Skylight (i.e., sky light color) by default. Supports setting the 'Area of Effect' to 'Background Only' or 'All'.

Note:&#x20;

1. Right click to reset the parameters after adjusting Temperature/Sky Color.
2. The white color has no Hue, so a white HDRI is not affected by the Hue parameter.

<div align="left"></div>

#### 5. HDRI Resolution Control



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
