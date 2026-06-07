---
title: "Brush and Scatter"
source_url: https://docs.d5render.com/user-guide/vegetation-tool/brush-and-scatter
fetched: 2026-06-07
---

# Brush and Scatter

## Brush

Select the vegetation model and choose the brush tool to use the current model to draw in the scene.

* **Radius:** Control the radius size of the drawing brush
* **Density:** Control the density of vegetation
* **Size:** Controls the size of the selected vegetation when it is drawn in the scene
* **Random size:** Control the degree of randomness in the size of the selected vegetation
* **Aligned to Terrain:** When checked, the plants will be generated along the model surface normal, and when closed, the vegetation will grow in vertical direction

> **Success:** Hold down Shift to lock the selected face and draw only within the selected face.


## Scatter

When the Radius parameter of the Brush tool is set to the maximum, the Scatter tool is activated and the vegetation is filled within the selected face.

## **Brush Records**

After painting or scattering objects onto a model, select the model, then we can see the Brush records on the right sidebar.The records include information about painted objects/plants, and each of them can be hidden or deleted. What's more, the combination of plants in the record can be reused as brush or eraser. Right click the brush record to delete or rename it, which makes it easier to manage the assets in the scene.



### **Multiple Brush Records**

If multiple brush records have the same vegetation combination, they will be merged into one automatically. For example, the first time we use 3 plants A/B/C, the second time we use 3 plants B/C/D, and the third time we use 3 plants A/B/C again, then there will be only two brush records on the model: A/B/C and B/C/D.




---
