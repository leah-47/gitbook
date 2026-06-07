---
title: "What are the different display modes for?"
source_url: https://docs.d5render.com/user-guide/view/display
fetched: 2026-06-07
---

# What are the different display modes for?

## Mode

**The Display Modes are divided into Lit, Wireframe and Clay Model.**

* **Lit :** default mode, with a real-time preview of all materials and lights.
* **Wireframe :** shows only edge lines in the scene, and this mode does **not support rendering**.
* **Clay Model :** overrides the material with white material, which makes it easier to emphasize the volume of the model and observe the lighting.
* **Still/Dynamic :** controls whether to preview the motion of dynamic elements in the scene.&#x20;

  e.g. cloud movement, vegetation wind movement, character animation, etc.







## Preview Quality

**The Preview Quality is the quality of the preview image in the current window. The different preview qualities only represent the results of the current temporary rendering, not the quality of the final rendering. The final rendering quality is always the best result, independent of the quality of this preview.**

* When the preview quality is "**Precise**", the real-time preview is automatically enabled.
* When the preview quality is "**Smooth**" , clicking "Render Preview" or pressing F12 will temporarily render the current image to get close to the final rendering quality.

> **Success:** For computers with RTX graphics cards, you can select **"Precise"** for a better experience.


| Preview Quality | Preview Results                                                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Precise         | All ray tracing features are turned on in real time, and after a short automatic convergence, physically realistic results are obtained.(Shortcut key F1)  |
| Smooth          | Turn off reflections, shadows and other ray tracing features, and click on the Render Preview button to get physically realistic results.(Shortcut key F2) |


---
