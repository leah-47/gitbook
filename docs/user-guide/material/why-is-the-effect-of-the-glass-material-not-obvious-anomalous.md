---
title: "Why is the effect of the glass material not obvious/anomalous?"
source_url: https://docs.d5render.com/user-guide/material/why-is-the-effect-of-the-glass-material-not-obvious-anomalous
fetched: 2026-06-07
---

# Why is the effect of the glass material not obvious/anomalous?



## Why doesn't the effect of glass look obvious?

There may be the following reasons:

1. **Previewing in Smooth mode**, the glass is displayed incorrectly;
2. You can try to **increase the specular value to improve the reflection of the glass**, the glass effect will be more obvious;
3. If **the glass is currently multi-layered**, remove the multi-layer structure and leave only one layer (currently D5 does not support rendering reflections on the glass surface behind the glass);
4. You can **reduce the transparency of the glass a bit and make the glass create a shadow**;
5. **Glass-to-glass reflections are not shown in the preview** and are only calculated when out of the picture/video;
6. **If the current glass has no thickness**, you need to give the glass model a certain thickness in the modelling software or turn on the thickness switch in the transparent material template of D5.

<div align="center"></div>

***

## Why is the glass flickering/effect unusual?

1. **Streaks of flickering**

**The coordinates of the glass model are too far away from the world coordinate origin (0,0,0)** to cause this anomaly.

Solution: Select the model in the scene resource list and zero the model coordinates in the right sidebar.

<div align="center"></div>

2. **There is a difference in the effect of the glass when it is moving and when it is stationary**

* The effect of multiple reflections between glass is not displayed when the camera is moving.
* Multiple reflections between transparent objects are automatically calculated when the screen is stationary, as well as the colour and transparency of the glass material will be involved in the calculation of the reflection effect.

Therefore, the preview is closer to the actual image when the FPS is stable.

3. **Refraction/ Reflection effect is not correct**

**Single sided models** imported into D5 and given a transparent material will have incorrect refraction and reflection effects.&#x20;

Solution:&#x20;

* It is recommended to regulate **double-sided modelling** to avoid such problems.&#x20;
* Or turn on the **"Thickness"** parameter in the glass material template parameter, which can simulate the plate glass with thickness, and the single-sided glass can get the correct refraction effect.



***

## Why don't distant plants appear in the reflection of glass?

Considering the performance in preview/output, there are certain restrictions on the display range in glass reflections of **not separately placed plants from D5 Assets Library (e.g., brushes, paths):**

The following reference values are the distances from **the camera position** to **the plants** ↓

* Models behind the current scene camera:

  * **Grass category:**&#x20;

  &#x20;      \- Less than 15,000: Preview/Output are both 50m

  &#x20;      \- More than 15,000: Preview is 0m, with no grass reflection visible; Output is 50m

  * **Tree category:** Preview/output are both 150m
* Models in front of the camera and not shown in the camera's viewport are **150m** in preview and **900m** in output.

This issue can be solved by increasing the **Cull Distance of Outside the Viewport** since version 3.0.



**Please note, Cull Distance of Outside the Viewport now only works for trees.** If you want it to also work for grass, you can set it to treat grass as trees by adjusting the **`Engine.ini`** file, adding the following fields to it.↓

```
[/Script/Engine.RendererSettings]
r.RayTracing.Geometry.InstancedStaticMeshes.LowScaleRadiusThreshold=1
```

Steps:

1. ( No need to open D5 ) Find the file **`C:\Users\XXXX\AppData\Local\d5_immerse\Saved\Config\Windows\Engine.ini`**
2. Add the appropriate fields in the **`Engine.ini`** file, modify the parameters and save.
3. Restart D5, the relevant configuration changes will take effect.

Refer to the illustration below ↓




---
