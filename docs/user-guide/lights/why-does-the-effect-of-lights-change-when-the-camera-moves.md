---
title: "Why does the effect of lights change when the camera moves?"
source_url: https://docs.d5render.com/user-guide/lights/why-does-the-effect-of-lights-change-when-the-camera-moves
fetched: 2026-06-07
---

# Why does the effect of lights change when the camera moves?

When there are **fewer than 40** lights in the operating viewport, real-time lighting effects are displayed according to a precise ray tracing algorithm.

When there are **more than 40** lights in the viewport, the lighting optimization algorithm will be utilized in the real-time preview to enhance the efficiency of real-time rendering. The effect of lights is approximated to improve the efficiency of lighting in the real-time preview.

When the camera moves, the number of lights in the viewport changes, causing a switch in the algorithm for the light preview, which may result in a change in the lighting effect.

**The lights are calculated according to the accurate algorithm when outputting images, ensuring the details of images.**


---
