---
title: "Effect"
source_url: https://docs.d5render.com/user-guide/effect
fetched: 2026-06-07
---

# Effect

## LUT‌

Use the LUT (Look-Up-Table) to do color correction.

The LUT is disabled by default, turning on the switch will enable D5 default LUTs:

There are five D5 default LUTs, which can be switched in the drop-down menu, corresponding to different color representations:

**Intensity:** This parameter controls how much the LUT affects the original image. The default value is 1, and the LUT is at its strongest. Pull the control to the left to weaken the LUT color correction strength. The intensity value of 0 means that the original image is displayed.

Click "+Customize LUT" in the drop-down menu to import a 3D LUT file in .cube format.

Custom imported LUT files are saved to the "customlut" folder under D5 Render installation path, which can be quickly accessed by clicking on the folder icon to manage custom LUT files:

In the drop-down menu you can switch between "default" and "Custom" categories:

## Post-processing

### Exposure

This simulates the exposure function of a real camera and is used to adjust the overall brightness of the image.

#### Manual Exposure

Turn off the "Auto" switch to switch to "manual exposure" mode.You can drag the exposure controls to control the overall light and darkness of the picture, or you can enter a specific value.&#x20;

![](/files/-MkextMyoMjz0440dJm3)

The higher the exposure value, the brighter the picture, the lower the exposure value, the darker the picture.Manually adjust the exposure value, you need to pay attention to the amount of information in the picture when adjusting, and try to avoid large areas of "overexposure" or "pure black" in the picture.

![Left: Under Exposure | Middle: Moderate Exposure | Right: Over Exposure](../files/-Mkey-Icn6afUD4aWub7.md)

#### Automatic Exposure

Turn on the "Auto" switch, the renderer will automatically analyze the brightness of the screen and adjust to a proper value, similar to the effect of automatic adaptation of the human eye from a bright environment into a dark environment (or from a dark environment to a bright environment), or similar to the automatic exposure of a "Point and shoot camera", which can quickly find a suitable exposure base value for you.

![](/files/-MkeyVDGfdtxEYhl7Sgn)

### Contrast

Adjusts the brightness difference between the bright and dark areas of the image.

Decreasing the contrast will brighten the dark areas and darken the light areas. As the contrast decreases, the light and dark pixels gradually tend to medium gray, creating a grayish, faded effect, and in the extreme case, the picture becomes completely medium gray. Increasing the contrast will enhance the contrast between the brightness of the light and dark areas, the three-dimensional sense of the image will increase. Too much contrast will make the highlight area overexposed and dark areas pure black.

![](/files/-Mkeya3Lejk-S_JxWFV7)

### Tone mapping curve

The **Highlight**, **Shadow**, and **Slope** parameters together control the "Tone mapping curve", which determines how the high dynamic range information calculated by the renderer is mapped to the low dynamic range screen. The basic shape of the curve is as follows:

![](/files/-MkeyfcGDMPCw5MiHSug)

The horizontal axis of the coordinates represents the information calculated by the renderer, and the vertical axis represents the information mapped to the screen.&#x20;

As you can see, the upper right side of the curve flattens out and converges to a value slightly greater than 1, meaning that "as the brightness rises, the pixels gradually converge to pure white". Since the highlight areas are slowly converging to pure white, we can see more detail in the highlight areas on the screen with the help of this curve. The curved shape in the lower left corner means that the dark areas are slowly converging to pure black, and the gradual flattening of the curve mapping helps us to retain more detail in the dark areas.

The area in the upper right corner of the tone mapping curve is called the "shoulder" and the area in the lower left corner is called the "toe".

The impact of the 3 control parameters is explained in detail below.

* **Highlight:** Control the "shoulder" shape at the top right of the curve, which affects the highlight area of the image.

![](/files/-MkXNrrUvvGUmG-3JjpX)

The role of highlight parameters in practice is mainly reflected in two aspects：

1. When the picture is overexposed, pull the highlight control to the left to retrieve the overexposed highlight detail.
2. Depressing the highlight value reduces the contrast of the highlight area detail itself, and vice versa increases the contrast of the highlight area detail. As shown in the image below, pulling the control to the left makes the highlight area detail contrast weaker, and vice versa enhances.

* **Shadows:** Control the "toe" shape at the bottom left of the curve, which affects the darker parts of the image:

![](/files/-MkXO0l91d1_TYvLUOH9)

In practice, the effect of the shadows parameter is obvious, lower the value, you will see more dark details, while the overall contrast of the dark areas decreased, turning gray. Pulling up the value will press more dark details into "pure black", correspondingly increasing the contrast of the dark content.

* **Slope:** Control the slope of the diagonal part of the curve, which will affect the contrast between the highlights and the dark areas of the picture:

![](/files/-MkXO8K03bprJzVqy7Gh)

In practice, the effect of Slope parameters is easy to grasp. Pulling down the parameters to the left will make the picture grayish and eventually black, pulling to the right will make the gap bigger between light and dark. Extreme values tend to make the picture appear pure black and overexposed, try to find the right value.

### White Balance

The white balance parameter has two roles:

1. post-calibration of the white balance of the picture, to cancel out the warm or cold effect of different color temperature light sources in the space. Make white objects appear white (more precisely, gray objects to gray.)
2. Artistic processing, making the picture as warm or as cool as the artist needs.

This is actually a control related to color temperature, with a default value of 6500 in Kelvin (K).

![](/files/-MkeyuWXepfcL_-n0uYw)

It is worth noting the color of the white balance control and the effect of the parameter on the image: White Balance is a post-processing parameter, and the color of the control is the **opposite** of the color of the physical color temperature.&#x20;

The reason is: first of all, we need to know that light with low color temperature is yellowish (e.g. 3000K) and light with high color temperature is blueish (e.g. 8000K), while the white balance parameter in post-processing requires the user to specify the color temperature of the scene light source in order to cancel out its color tendency.

For example, if a scene is illuminated by a warm 3000K main light source, then theoretically you only need to enter 3000K in the post-processing white balance parameter, and the camera will be able to cancel out the warming tendency and shoot white objects as white.&#x20;

Therefore, the lower the color temperature value in the post white balance control, the more blue tendency will be added to the picture; the higher the color temperature value, the more yellow tendency will be added to the picture.

### **Tint**

By adjusting the green and magenta range, it can cooperate with the color temperature parameter to adjust the white balance tone of the scene.

![Tint +0.5 | normal | Tint -0.5](../files/1EY2EaHPUbtWuO2nnYIB.md)

### Bloom

Gives the picture a halo effect. The image will be blurred and haloed, especially with bright objects on darker backgrounds. The higher the value, the more pronounced the Bloom effect.

![](/files/-Mkez-TGKwQpGYl1CA5x)

### Lens flare

Simulates the flare produced by a real camera lens when shooting a bright light source. On the screen, a series of flare effects are distributed along an axis through the center of the screen. Larger values will make the effect stronger:

![](/files/-Mkez3R_FaAL3uiLEyDp)

### **Vignette**

An artistic darkening of a photo's corners compared to its center, which simulates the gradient effect of gently decreasing the brightness of the corners of the camera lens in the real world

![Vignette 0.5 | normal | Vignette1.0](../files/TcdcaaG3tD1Uymfz7x9K.md)

### **Chromatic Aberration**

Also known as “color fringing”, it simulates the dispersion phenomenon of real-world camera lens color transformation.

![Chromatic Aberration 2.5 | normal | Chromatic Aberration 5.0](../files/kb18yADc2bqQtcSGM9BO.md)

### Saturation

Control the vibrancy and purity of the colors in the picture.

The higher the saturation, the purer the color. This means that the values of the three RGB color components become more different from each other. The lower the saturation, the more the color tends to be gray, i.e., the values of the three RGB color components tend to be equal. When the saturation value is pulled down to the lowest value, the pixel's RGB values are completely equal and lose their color tendency, only light and dark changes, and the picture becomes a "black and white picture":

![](/files/-MkezCdHpLImHE4-e1if)


---
