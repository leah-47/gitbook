---
title: "What materials are the Water templates suitable for? What are the special parameters?"
source_url: https://docs.d5render.com/user-guide/material/water
fetched: 2026-06-07
---

# What materials are the Water templates suitable for? What are the special parameters?

The Water material template has animated effects and is used to create flowing water.

<img src="/files/-MkekNbWDwVEw4GJp3pN" alt="" width="563">

* **Base color/Base Color Map:** Used to control the color of the water.
* **Normal:** Controls the size of the wave.

<img src="/files/-MkeknNouH9HihumqXlo" alt="" width="563">

* **Specular:** Control the Reflectance of the water surface, the specular value of water is 0.25.&#x20;
* **Refraction:** Control the IOR of the water surface. The IOR of water is 1.33.&#x20;
* **Flow Velocity:** Adjust the rate of the water animation, turn on "Realtime" to preview the water animation in "Display" option.&#x20;
* **Depth:** Control the absorption of the water to the incident light, make clear shallow water or more turbid and deep water, need to model the part below the water surface to see the effect.

<img src="/files/-Mkel9soNT2NzsuWxUD5" alt="" width="563">

## FAQ

### Q1: How to achieve the correct water effect?&#x20;

To be able to fully display the effect of water, the following should be taken into consideration:&#x20;

* When modeling, **the water material itself is a single-sided model**.&#x20;
* When modeling, **there should be a plane below the water material model** (i.e., the bottom of the water) .
* When rendering a video, appropriately adjusting the "**Flow Velocity**" can better depict the fluctuation of the water surface.
* Control the ripple of water by **adjusting the normal intensity and custom normal maps**.
* The color of the water can be accurately controlled by the **"Base Color-Hue, Saturation, Luminance"& "Depth"** parameter of the Water Material Template in the Material panel.

The depth parameters in D5 make the water material more realistic, closely resembling physical phenomena in real life, and this is related to the depth of the container.&#x20;

> As can be clearly seen from the diagram, under the same material parameters, the effect of container depth on the water material representation:

The color of water also changes with the depth of the container, equivalent to automatically attenuating the intensity of light below the surface according to depth.

<figure><img src="/files/ITtXUP4DiSpe45IRXWU2" alt=""><figcaption><p>under the same material parameters, the effect of container depth on the water material representation</p></figcaption></figure>


---
