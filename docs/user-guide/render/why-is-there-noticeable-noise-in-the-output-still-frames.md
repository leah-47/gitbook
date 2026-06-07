---
title: "Why is there noticeable noise in the output still frames?"
source_url: https://docs.d5render.com/user-guide/render/why-is-there-noticeable-noise-in-the-output-still-frames
fetched: 2026-06-07
---

# Why is there noticeable noise in the output still frames?

<mark style="background-color:purple;">The following reasons can result in this effect:</mark>&#x20;

1. **The driver version is too low.**&#x20;

It is recommended to update the driver to a later version: [How to view and upgrade graphics card driver?](../hardware/how-to-view-and-upgrade-graphics-card-driver.md)

2. **Noise is relatively obvious in certain materials.**&#x20;

You can check the parameters of the abnormal material, if the normal/roughness/specular parameter is very high, or if there is a light source near the current material or the ambient light is relatively strong, noise may appear; it is recommended to reduce the normal/roughness/specular parameter a little.

3. **Noise caused by insufficient light in the scene.**&#x20;

This is more likely to occur in indoor scenes, especially in models with small windows/rooms with large depths. Using the default sky parameters may result in noise due to insufficient light to illuminate the scene; it is recommended to switch off the dynamic option or reduce the exposure and add other light sources to bring light into the scene.


---
