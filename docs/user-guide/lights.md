---
title: "Lights"
source_url: https://docs.d5render.com/user-guide/lights
fetched: 2026-06-07
---

# Lights

<mark style="background-color:purple;">D5 Render provides seven types of light sources:</mark> <mark style="background-color:purple;"></mark><mark style="background-color:purple;">**Point Light**</mark><mark style="background-color:purple;">,</mark> <mark style="background-color:purple;"></mark><mark style="background-color:purple;">**Spotlight**</mark><mark style="background-color:purple;">,</mark> <mark style="background-color:purple;"></mark><mark style="background-color:purple;">**Strip Light**</mark><mark style="background-color:purple;">,</mark> <mark style="background-color:purple;"></mark><mark style="background-color:purple;">**Rect Light, Disc Light, Stage Light**</mark> <mark style="background-color:purple;"></mark><mark style="background-color:purple;">and</mark> <mark style="background-color:purple;"></mark><mark style="background-color:purple;">**Projector.**</mark>（The first four are basic light sources.）

1. Click the corresponding icon button in the navigation bar to place it in the scene, or use the shortcut keys `1`, `2`, `3`, `4`,`5` to quickly place **Point Light**, **Spotlight**, **Strip Light**, **Rect Light** and <mark style="background-color:purple;">**Disc Light**</mark>, respectively.
2. Meanwhile, **Stage Light** and **Projector** are advanced light source functions, which need to be added to the widget before they can be used.&#x20;

> Go to **"Menu > Preference > Widget"** to activate Projector, then it can be inserted into scenes from "the Navigation bar > Add Lights".

<figure><img src="/files/WRGKRlwVqhfHEdQzPXqN" alt=""><figcaption></figcaption></figure>

## Overview of light types

### **Point Light**

A Point Light emits light in a similar manner to a real-world light bulb, from a point in space, emitting light uniformly in all directions.

### **Spotlight**

The Spotlight emits light from a point in space, within a specific cone angle.

* By default, spotlights are emitting light uniformly in the cone.&#x20;
* You can also control the distribution of light using **IES files**. D5 Render comes with 6 IES files, or you can import custom IES files.

### **Strip Light**

A strip of rectangular light that can be further adjusted in length and width, using Barn Door parameters to control the directionality of the light.

### **Rect Light**

A rectangular planar light source of specified width and height dimensions, used to complement or simulate any rectangular area of luminous objects, such as top lighting fixtures, etc.

### Disc Light

A Disc Light simulates the light emitted from a circular plane and is a type of light source used to create a soft, even lighting effect.

***

## Light source parameters

<mark style="background-color:purple;">When we select the light source, the corresponding inspector will appear on the right side.</mark>&#x20;

First, let's introduce the parameters that are available for all four light sources:

### Common parameters

#### **1.Duplicate**

Select a light and click the "Duplicate" button, a copy of the light with the same parameters will appear at the mouse cursor, click to place it into the scene. Hold Shift and drag the red, green or blue axis to copy along the axial direction.

**2.Focus on**

Click the Focus on button and the camera will move in front of the selected light source.

#### **3.Reset**

The position of the light source in space remains unchanged, and all others are restored to the default parameters, including the rotation angle.

***

<mark style="background-color:purple;">The following five parameters are also common to all four light sources:</mark>

#### **1.Intensity**

the luminous intensity of the light source, in cd (candela), the maximum intensity can be 8000000.

Two units support luminous intensity and luminous flux:

* **Luminous Intensity**: Light strength in a direction from a source, measured in candela (cd).
* **Luminous flux**: Total light emitted from a source over time, measured in lumens (lm).

#### **2.Attenuation Radius**

Limit the influence range of the light.&#x20;

Within this range, the light decays according to the inverse square law, beyond which the light calculation stops. The size of the spherical range can be visualized by the wireframe.

<figure><img src="/files/0lXKgFhX5P7lPMd3jK3w" alt="" width="563"><figcaption></figcaption></figure>

#### **3.Visible in Reflection**

Controls whether the light source appears in the material reflection, and the "Blend Amount" control allows you to adjust how much the light source affects the reflection.

<figure><img src="/files/2NRQG3eKPYUQxqeRdPUh" alt="" width="563"><figcaption></figcaption></figure>

#### **4.Temperature**

Scientifically set the color of the light.&#x20;

The unit of color temperature is K, Kelvin. Low color temperature such as: 3000K light source appears yellow.&#x20;

> * Light color temperature is 5500-6500K, is considered to be the "white" light.&#x20;
> * High color temperature such as: 8000K light source appears blue.

#### **5.Color**

freely specify the color of the light.

***

### Special parameters

<mark style="background-color:purple;">Next, we explain the parameters specific to each light source:</mark>

#### 1.Point Light

* **Light source radius:** Control the radius of the imaginary point light. The radius of the light affects the softness of the shadow edges, the larger the light source, the softer the shadow edges.

<figure><img src="/files/d6puDSQrGLppE6SmZ7gN" alt="" width="563"><figcaption></figcaption></figure>

#### 2.Spotlight

* **IES:** Use the 6 IES built into D5, or choose a custom IES file to control the light distribution of the spotlight. A light source placed close to a wall will shine a specific shape on the wall. Click + Customize IES to add a custom IES file.
* **Cone Angle:** Controls the cone angle range of the spotlight's light-emitting cone.&#x20;

> Note that if an IES file is used while adjusting the cone angle parameter, IES lighting outside the cone angle range will be clamped.

* **Light Source Radius:** Same as point light source radius. The radius of the light affects the softness of the shadow edges.

#### 3.Strip Light and Rect Light

The reason for putting these two together is that they are both essentially rectangular lights, the only difference is that the initial parameters are set differently.

* **Strip Light** is a rectangular light with a large initial aspect ratio (long strip) and a certain Barn Door Length (Means that it will emit light in a specific direction).
* **Rect Light** is a planar light source with equal initial length and width, and a Barn Door Length of 0.

The parameters unique to these two light sources are the "Barn Door" parameters.

* **Barn Door Angle:** The angle between the imaginary "Barn Door" plate and the direction of the light's normal, the value range is 0 ° - 90 °.&#x20;

> - Smaller values focus the light;&#x20;
> - at 90°, the Barn Door is wide open and the wireframe in the viewport provides a visual representation of the "Barn Door".

<figure><img src="/files/rAkUru1tL5xmtt7TsdSM" alt="" width="563"><figcaption></figcaption></figure>

* **Barn Door Length:** Controls the length of the imaginary "Barn Door", ranging from 0-100.&#x20;

> Larger values focus the light, and the wireframe in the viewport provides a visual representation of the "Barn Door".

<figure><img src="/files/C0hlBC41kLV4WMTmhjGV" alt="" width="563"><figcaption></figcaption></figure>

***

## Light source visibility control

* Use the shortcut `L` or the "Light Source" button in the upper right "Display Mode" to toggle light carrier icon. Toggling carrier icons does not affect light rendering.
* To temporarily turn off a light source, turn off the visibility of that light source in the scene resources list on the left (click on the eye icon) :

> **Warning:** Note: All light sources themselves are not visible to the camera. The lighting of the light source can only be seen when there is a model near the light or when the fog effects are turned on.



---
