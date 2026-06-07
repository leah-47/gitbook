---
title: "What is \"Invisible in Raytracing\"?"
source_url: https://docs.d5render.com/user-guide/material/what-is-invisible-in-raytracing
fetched: 2026-06-07
---

# What is "Invisible in Raytracing"?

Click on the locked model surface in the scene, or use the "Select Material" tool (shortcut key: I) to pick up the model surface, you can select the material. At this time, the corresponding material parameter panel will appear in the right column.



The "Invisible in Raytracing" option controls whether the material participates in lighting (specifically, diffuse light) calculations. When this option is checked, the material will be visible in the camera and in the reflections of other materials, but it will no longer produce shadows or light bounces.



## Why does the "Invisible in Raytracing"  material appears in the reflection?

Considering that the "Invisible in raytracing" material is generally used for sky exteriors, but in actual rendering, it is still necessary to display the sky exteriors in the reflection. Therefore, the "Invisible in raytracing" material will appear in the reflection.


---
