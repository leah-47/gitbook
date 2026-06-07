---
title: "What are the meanings of each parameter in the light panel?"
source_url: https://docs.d5render.com/user-guide/lights/what-are-the-meanings-of-each-parameter-in-the-light-panel
fetched: 2026-06-07
---

# What are the meanings of each parameter in the light panel?

When we select a light, the corresponding light parameter panel will appear on the right sidebar.

<figure><img src="/files/1uPiPzBBF1jcFwZwricu" alt=""><figcaption></figcaption></figure>

### Duplicate

Select a light and click the ''Duplicate'' button will make a copy of the light with the same parameters as the selected one at the mouse position, and can be placed in the scene by clicking. Drag the red-green-blue axes with Shift held down to duplicate along the axes.

### Focus on

Click the ''Focus on'' button, and the camera will move in front of the selection.

### Reset

The position of the light in space remains unchanged, while all other parameters will reset to the default parameters of the light, including the rotation angle.

***

### Light Type Switch

Supports directly switching a light type into another one, retaining the parameters and keyframe information, without having to select or adjust the position and parameters again. Undo supported.

> *Note: The light name remains the same even after the light type is switched.*

<div align="left"><figure><img src="/files/9k2RldijNFeUDEW7P3NY" alt=""><figcaption></figcaption></figure></div>

### Intensity

The luminous intensity of the light, the larger the value, the stronger the brightness. For Rect Light and Strip Light, the brightness of the light is related to the size of their area with the unit of cd/㎡, which Indicates the intensity of light per unit area in a particular direction.

Two units support luminous intensity and luminous flux:

* Luminous Intensity: Light strength in a direction from a source, measured in candela (cd).
* Luminous flux: Total light emitted from a source over time, measured in lumens (lm).

### Attenuation Radius

Limits the impact range of the light. Within this range, the light decays according to normal inverse square law, outside of which the light calculation will stop. The size of the spherical calculation range can be visualized in the wireframe illustration.

<figure><img src="/files/j7hWdNaEsW96InEALGr1" alt="" width="563"><figcaption></figcaption></figure>

### Attenuation Intensity

Used to control the light attenuation distance and adjust the illumination range of rectangular lights. The smaller the parameter, the less the brightness is attenuated. It is mainly used to control the attenuation effect at the end of the light. A larger value will result in a closer approximation to rectangular attenuation.

> Note: Attenuation intensity is only supported by Strip Light and Rect Light.&#x20;

### Show Light Shape

When this option is enabled, you can not only observe the lighting effect, but also view the concrete shape and size of the light within the scene.

### Visible in Reflection

It's used to control if the light appears in the reflection of the material. The "Intensity" parameter can be used to adjust the influence of the light on reflections.&#x20;

<figure><img src="/files/0X02MEtWBaviMesZKEWM" alt="" width="563"><figcaption></figcaption></figure>

### Temperature

To scientifically specify the color of light, the unit of color temperature is K, Kelvin. A light with a low color temperature, e.g. 3000K, is yellowish, a light with a color temperature of 5500-6500K is considered to be close to "white", and a light with a high color temperature, e.g. 8000K, is bluish.

### Color

Specify the color of light freely.

### Caustics

When this option is switched on, the light can perform a caustic projection.

***

## Point Light

### Light Source Radius

To control the radius size of the imaginary point light source, the radius size of the light source will affect the degree of vignetting of the shadow edges of the illuminated objects, the larger the radius of the light source, the softer the shadow edges will be.

<figure><img src="/files/d6puDSQrGLppE6SmZ7gN" alt="" width="563"><figcaption></figcaption></figure>

***

## Spotlight

### IES

Use the D5's six built-in **IES**, or choose a custom IES file to control the light distribution of the spotlight. The light source placed close to a wall will illuminate a specific shape on the wall. Click here to add a custom IES file:

<figure><img src="/files/9dIkxhQ9Q5F0okaBohz4" alt=""><figcaption></figcaption></figure>

### Cone Angle

To control the cone angle of the spotlight cone, note that if an IES file is used and the cone angle parameter is also adjusted, IES illumination outside the cone angle range will be truncated.

### Light Source Radius

The principle is the same as the radius of a point light source. The radius size of the light source affects how much the shadow edges of the illuminated object are defocused.

***

## Strip Light and Rect Light

Both are essentially rectangular light sources, the only distinction is that the initial parameters are set differently. Strip Light is a rectangular light with a large initial aspect ratio ( long strip ) and a certain barn door length ( meaning that the light emitted has a certain directionality ). Rect Light is a rectangular light with an equal initial aspect ratio and zero barn door length. The peculiar parameter of these two light sources is the "barn door" parameter.

### Barn Door Angle

The angle between the surface of the hypothetical "barn door" and the light's normal direction, the value range is 0 ° - 90 °, the smaller the angle, the more concentrated the light; in the value of 90 °, the barn door will be completely open, the wireframe in the viewport can be visualised to represent the shape of the "barn door" and its effect on the light source.

<figure><img src="/files/rAkUru1tL5xmtt7TsdSM" alt="" width="563"><figcaption></figcaption></figure>

### Barn Door Length

To control the length of the imaginary "barn door", the value ranges from 0 to 100, the higher the value, the more concentrated the light will be, the wireframe in the viewport can be visualised to represent the shape of the "barn door" and its effect on the light source.

<figure><img src="/files/C0hlBC41kLV4WMTmhjGV" alt="" width="563"><figcaption></figcaption></figure>

***

## Disc Light

Strip Light, Rect Light and Disc Light provide Directionality parameter.

### Directionality

<figure><img src="/files/jlQ2DNaunw79WIaHZu1y" alt=""><figcaption></figcaption></figure>

Directionality can be adjusted by checking the **Apply Directionality** parameter in the Light Property. A smaller value creates a more diffuse light edge, resulting in a soft, broad lighting effect, while a larger value concentrates the light edge, forming a more obvious light boundary.

***

## Visible in Reflection

Use the shortcut key L or the "Light Source" button in the "Display" in the upper right corner of the viewport to switch the light source icons to show/hide, so that we can easily see the spatial location of the light source, source switching does not affect the lighting effect.

<figure><img src="/files/eudhFANI3a92k55p1M9p" alt="" width="563"><figcaption></figcaption></figure>

If you want to turn off a light source temporarily, turn off the visibility of that light source in the scene resource list on the left (click on the eye icon).

<figure><img src="/files/vRXYJwE2nb65SQsealkc" alt="" width="563"><figcaption></figcaption></figure>


---
