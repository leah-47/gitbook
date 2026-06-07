---
title: "What materials are the Displacement templates suitable for? What are the special parameters?"
source_url: https://docs.d5render.com/user-guide/material/displacement
fetched: 2026-06-07
---

# What materials are the Displacement templates suitable for? What are the special parameters?

Displacement is a feature used to represent the true bump detail of a material. Previously, only parallax replacement was supported. The new version adds a true replacement option to achieve a more realistic surface effect by modifying the geometric structure of the model.

### **Opacity Map**&#x20;

Added Opacity Map to Displacement Material Template to enable precise control over the cutting of materials. It achieves uneven and hollow effects on hedges, fences, bamboo weaving surfaces, and other materials.

<figure><img src="/files/MdjBoCS46PwVW3POcRe7" alt=""><figcaption></figcaption></figure>

### **Height**

The only special parameter of the Displacement material template is the Height, which is usually defined by a height map that defines the bumpiness of the model.

![example](../../files/-MkX6xoZzaiFm2uJYWIH.md)

The white color is the convex part and the black color is the concave part.

In the case of the figure below, the height map is pre-imported and used to define the terrain.

#### **True Displacement**

Expand and enable the true displacement switch in \[More Settings].

> ***Tip:** If no mapping is added to the height channel, the "More" button does not appear in the interface.*

| ![](/files/oZW1bgBWOjHioHPeNAPD) | ![](/files/QxIAl9IpCZcCZT9PRmXc) |
| -------------------------------- | -------------------------------- |

**True displacement parameters:**

* **Subdivision Level:** Controls the number of mesh subdivisions.

> ***Tip:** A higher subdivision level value can achieve a finer replacement effect, but it will increase the number of model faces, memory usage and rendering time. Excessive use may lead to unexpected flashback. Please set it reasonably according to the hardware performance.*

* **Vertical Offset:** The current displacement algorithm does not move at the current model position and rises along the positive normal direction. If the model is on the ground, it will appear raised. To avoid this problem, the vertical offset parameter can be used to compensate for the model's overall position, and the model can be remain in contact with the original ground by adjusting the offset value, without suspension or interpenetration.
* **Maintain Continuity:** Ensure that the model's solid structure is closed and complete, avoiding cracks or voids.
* **Remesh:** For models with poor original topology (e.g., triangle sizes and topological confusion), mesh reconstruction can be performed first to improve the replacement quality.
  * Off: The tessellation is based on the original topology.
  * On: Tessellation is based on the reconstructed mesh.

> **Info:** **Note:** \
Mesh reconstruction aims to fix the defects of the original mesh without modifying the structure of the model itself. Please try to ensure the simplicity and accuracy of modeling.


<figure><img src="/files/QuNuPI1qjJrPj1dGmnXN" alt=""><figcaption><p>True displacement</p></figcaption></figure>

> **Warning:** **Note:**

* The **LiveSync model** does not support true replacement (the UI interface switch is disabled).
* If you want to use real replacement, you can convert the model to a non-real-time synchronization model (scene resource list-selected model-right-click to convert to a non-real-time synchronization model).



---
