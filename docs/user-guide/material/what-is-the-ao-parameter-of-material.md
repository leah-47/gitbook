---
title: "What is the AO parameter of material?"
source_url: https://docs.d5render.com/user-guide/material/what-is-the-ao-parameter-of-material
fetched: 2026-06-07
---

# What is the AO parameter of material?

"AO" is the abbreviation for Ambient Occlusion.

In reality, light scatters in all directions, and its intensity constantly changes, so the part of the scene that is indirectly illuminated should also have varying intensities, not just a constant ambient light. One simulation of indirect lighting is called Ambient Occlusion. Its principle is to approximate the simulation of indirect lighting by darkening the folds, holes, and very close walls. These areas are largely obscured by surrounding geometries, making it difficult for light to escape, so these places will appear darker.

<figure><img src="/files/g6vdKsmaxu3IykHj4OtI" alt=""><figcaption></figcaption></figure>

AO is used to depict the effect of objects blocking the surrounding diffuse light when they intersect or are close to each other. It can comprehensively improve details, especially the shadows in the dark parts, enhance the sense of space, realism, and at the same time, strengthen and improve the contrast of light and dark in the picture, enhancing the artistic quality of the image.

The visual effects of AO are mainly reflected in the brightness of the picture. The lighting of the picture without AO effects is slightly brighter; while after turning on the AO effects, the details of the picture, especially the shadows in the dark, will be more obvious. It achieves better visual effects by improving shadows, enhances the depth and sense of layers in the scene, greatly enriches the details of the image, and these small shadow details bring a stronger sense of depth to the entire scene.

## AO Intensity Control

The AO Intensity Control controls the degree to which the AO texture affects the base color texture. The value range is 0-1. When the value is 1, the AO effect is the strongest, and when the value is 0, the AO map has no effect on the material.


---
