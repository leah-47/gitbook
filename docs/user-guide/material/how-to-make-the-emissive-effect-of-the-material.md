---
title: "How to make the emissive effect of the material?"
source_url: https://docs.d5render.com/user-guide/material/how-to-make-the-emissive-effect-of-the-material
fetched: 2026-06-07
---

# How to make the emissive effect of the material?

In the custom material template, turning on the emissive switch will make the material produce a glowing effect.



## Intensity

Pull the widget to control the intensity. You can also use a texture map to define the brightness.



## Emissive colour

The specific emissive color can be any RGB color, or a specified color temperature.

## Cast Shadow

"Cast Shadow" controls whether the emissive effect participates in the calculation of illumination (specifically, diffuse light). After choosing this option, the emissive material will be visible in the reflection of the camera and other materials, but it will no longer produce shadows and light bounces.



## FAQs

### 1. Why do the self-emissive materials flicker when rendering animations?

Possible causes:

* **Surfaces of self-emissive objects overlapped or interspersed with other models.**
* There are large self-emissive planes in the scene that cause abnormal accuracy and thus flicker, try turning off the “Emissive - Cast Shadow”.
* Self-emissive objects are thin, try turning off “Menu-Super Resolution” and re-outputting.




---
