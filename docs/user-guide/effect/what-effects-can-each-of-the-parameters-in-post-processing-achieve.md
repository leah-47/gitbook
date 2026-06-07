---
title: "What effects can each of the parameters in post-processing achieve?"
source_url: https://docs.d5render.com/user-guide/effect/what-effects-can-each-of-the-parameters-in-post-processing-achieve
fetched: 2026-06-07
---

# What effects can each of the parameters in post-processing achieve?

### Exposure

This function simulates the exposure function of a real camera and is used to adjust the overall brightness of the image.

#### Manual Exposure

Turn off the "Auto Exposure" switch, that is, enter the "Manual Exposure" mode, the mouse drags the exposure control can control the overall brightness of the screen changes, and you can also enter specific values.



The higher the exposure value, the brighter the image, and the lower the exposure value, the darker the image. When adjusting the exposure manually, pay attention to the amount of information in the scene and try to avoid large areas of "overexposure" or "dead black" in the image.



#### Auto Exposure

Auto Exposure in D5 Render automatically analyzes image brightness and adjusts it to a balanced level. This mimics the human eye's natural adaptation to changes in lighting (e.g., moving from a bright to a dark environment, or vice versa) or the functionality of a “dumb camera", which can quickly find a suitable exposure level for the individual using it to base on.

* **Exposure Compensation:** allows users to manually fine-tune the overall brightness while Auto Exposure is active. This enables users to brighten or darken the picture as needed, making it easier to achieve the desired visual result with automatic exposure engaged.



### Highlight Local Exposure

Suppress the highlights in the scene to reduce the loss of detail caused by overly bright areas.

### Shadow Local Exposure

Brighten dark areas to reveal sharper details.

### Contrast

Adjust the difference in brightness between the light and dark areas of the image.&#x20;

Lowering the contrast will brighten the dark areas and darken the bright areas. As the contrast is lowered, the light and dark colour values of the pixels gradually converge to medium grey, creating a greyish, faded effect, and in the extreme case, the picture becomes completely medium grey. Increasing the contrast will enhance the brightness contrast between the light and dark areas, the sketch relationship of the picture will be enhanced, and the sense of three-dimensionality will be increased, too high a contrast value will bring about overexposure of the highlight areas and dead black in the dark areas:



### Tone Mapping Curve

The Highlight, Shadow, and Contrast parameters together control the "Tone mapping curve", which determines how the high dynamic range information computed by the renderer is mapped to the low dynamic range screen, and the basic shape of the curve is as follows:



The horizontal axis represents the information calculated by the renderer and the vertical axis represents the information mapped onto the screen.&#x20;

The upper right-hand side of the curve flattens out and converges to a value slightly greater than 1, meaning that "the pixels converge to pure white as the brightness rises". Since the highlights are slowly converging to pure white, it is possible to see some more detail in the highlights on the screen with the help of this curve. The shape of the curve in the lower left corner means that the dark areas are slowly converging to dead black, and the gradual flattening of the curve mapping helps us retain more detail in the dark areas.&#x20;

The area in the upper right corner of the tone mapping curve is called "shoulder" and the area in the lower left corner is called "toe".&#x20;

The effects of the three control parameters are explained in detail below.

#### Highlight

The "shoulder" pattern at the top right of the control curve affects the highlight areas of the image:



The highlight parameter is useful in two main ways:

1. When the screen is overexposed, pull the highlight control to the left to retrieve the overexposed highlight details. As shown in the figure, the original overexposed white area and the details of the content are pulled back into the screen.



2. Depressing the highlight value to the left will make the highlight area detail itself weaker, and vice versa to increase the contrast of the highlight area detail. As shown in the figure, pulling the control to the left contrasts with the highlight area details weaker and vice versa enhanced:



#### Shadow

The "toe" pattern in the lower left of the control curve will affect the darker parts of the image:



In practice, lowering the value will result in more detail in the dark areas, while the overall contrast in the dark areas is reduced and greyish. Raising the value, more dark details will be pressed into "dead black", which correspondingly improves the contrast of the dark content:



### White Balance

The white balance parameter serves two functions.

1. Post-calibration of the white balance of the picture, offsetting the effect of different colour temperatures of the light source in the space brought about by the warmer or cooler, the image of the "white" back to "white" (more precisely, the grey objects back to grey.)
2. Artistic processing, according to the needs of the image, posts for the picture to add warmer or cooler colour tendency.&#x20;

This is actually a control related to the colour temperature, the default value is 6500 in Kelvin (K).



### Tint

In conjunction with the colour temperature parameter, the white balance tint of the scene is adjusted by adjusting the cyan and magenta ranges.



### Bloom

Make the scene appear to have a glowing effect. The image will be blurred and vignetted, especially for bright objects on darker backgrounds, and a more pronounced flooding phenomenon can be seen, the higher the value of the control, the more obvious the bloom effect will be:



### Rainbow Flare

Simulates the colorful glow around the sun when shot by a camera.

Note: This effect **is only supported for Geo and Sky** and is disabled in HDRI.



### Lens flare

Simulates the halo effect (also translated as "lens flare") produced by a real camera lens when backlighting a bright light source, in which a series of halo effects are distributed along an axis through the centre of the frame, with the larger the value of the controls, the more pronounced the effect:



### Vignette

Simulates a real-world gradient effect of gently decreasing brightness at the corners of a camera lens.



### Chromatic Aberration

Simulates the Chromatic Aberration phenomenon of colour shifts in real-world camera lenses.



### Saturation

To control the vividness and purity of the colours in the picture.&#x20;

The higher the saturation, the closer the colours are to pure colours, i.e. the difference between the values of the three RGB colour components becomes larger; the lower the saturation, the closer the colours are to grey, i.e. the values of the three RGB colour components tend to be equal. The saturation value is pulled to the lowest, the pixel RGB value is completely equal to the loss of colour tendency, only dark and light changes, the picture becomes a "black and white picture":




---
