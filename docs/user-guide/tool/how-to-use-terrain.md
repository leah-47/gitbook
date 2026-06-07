---
title: "How to use Terrain?"
source_url: https://docs.d5render.com/user-guide/tool/how-to-use-terrain
fetched: 2026-06-07
---

# How to use Terrain?

Directly create terrain in D5, using brush tool for sculpting and texture painting. Easily apply a variety of preset heightmap resources and material templates with just one click, and combine with D5 Scatter to effortlessly craft diverse natural landscapes.

* Added Terrain tool in the top menu bar. Upon clicking, the default terrain will appear in the viewport, featuring an endless plane and an editable area within the white wireframe. The editable terrain spans 4000m x 4000m.
* Terrain can be selected, hidden, or deleted from the resource list on the left via right-click. After selecting the terrain in the object list, terrain sculpting, texture painting and heightmap management can be enabled in the right sidebar.





## Sculpt:

### **Terrain sculpting modes**

* **Upward:** Increase the height of selected areas.
* **Downward:** Reduce the height of selected areas.
* **Erase:** Erase sculpted shapes to restore the terrain to its previous or flat state.
* **Smooth:** Smoothen the terrain surface, remove sharp edges or unnatural bumps.
* **Flatten:** Level the selected area, typically used to create plains or platforms.

> Note:&#x20;
>
> Users can use **the shortcut key Alt** to switch Sculpt-Upward/Downward.



### **Sculpt brush settings**

* **Size:** Control the size of the area affected by the Sculpt tool.
* **Strength:** Control the intensity of the tool's effect on the terrain.
* **Edge Falloff:** Control the effect that decreases from the center to the edge.
* **Angle:** Controls the angle of the brush texture map.
* **Brush texture:** Control the shape drawn by the Sculpt tool using the preset maps in the brush library.



### **Heightmap Resources**

Added 'Terrain' library into D5 Asset Library, providing preset terrain templates for easy access.

* Currently, a maximum of 10 height map resources can be added simultaneously.
* After placement, height map can be replaced (supporting formats include .png, .r16, and .raw), along with height settings, edge falloff, and other parameters.



* Supports to bake all height maps to total height

Added Apply to terrain option in Height maps column, which applies all height map results to the total height and inherits its blend mode relationship with the overall height map before application.

> Supports Undo



### **Reset Height**

Click the 'More' button on the right side of the Landscape panel to reset the terrain height. All terrain effects created with the Sculpt brush will revert to the initial flat state



***

## Terrain texture editing:

Enables assigning different textures to different parts of the terrain (ground, slope, peak).

### **Ground**

Ground texture mainly appears in flatter areas of the model.

* Supports up to 6 materials. Click on the "+" icon to open the asset library and add the required material.&#x20;
* The first material serves as the primary texture covering the ground surface. The other five materials can be added onto the primary texture using the Paint tool.

The Paint tool provides several parameters available for blending materials:

* **Size:** Adjust the size of the brush's influence area.
* **Strength:** Control the extent to which the new material covers the original material.
* **Edge Falloff:** Control the transition between different materials for an organic appearance along edges.
* **Brush texture:** Support using preset maps from the brush library to control the shape of the brush tool.



### **Slope**

Slope texture mainly appears in steeper areas of the model and allows adjustments for **slope range** and **weathering levels** to help create natural slope effects.

### **Peak**

Peak texture appears in the higher elevation areas of the model and supports maintaining peak altitude, as well as adjusting edge blending, erosion, and UV stretching to better simulate realistic peak environments.

> * All the **material channels** support custom maps, base color, normal, roughness, and random UV.
> * Right-click or hover over the material channel and click the **'More'** button to replace or delete the current material. This allows you to replace/delete the current material, enable/disable template override, add the current texture to local, and create a scatter area on the current material.



### **Material Template**

Available in Assets > Terrain and can be applied with one click.



***

## Surface Texture:

Added Erosion Mask to Paint > Surface Texture for accurate control over the erosion effect and area. Supports automatically adapting the erosion layer to changed terrain heights.

> **Warning:** **Note:**

* The erosion layer effect **will be refreshed automatically** and calculated according to the current terrain height. This process will take a small amount of time to complete.
* Supports Undo




***

## Height map import:

Supports importing custom height maps to generate corresponding 3D terrain models based on the topographic relief presented by the image.

* It is recommended to import height maps with a minimum bit depth of 16-bit and a resolution of at least 2K.
* Supports to reset height via the **'more'** option.

> \*Heightmap can represent terrain height with grayscale values. Typically, black (value 0) indicates the lowest point, while white (value 255) indicates the highest point.



***

## Terrain Area Setting:

Supports setting terrain range and Z-axis position. Added Terrain Range Settings to Terrain > Manage.

* Position: Determines the position of the boundless plane along the Z axis.
* Size: Determines the size of the editable terrain range. Smaller terrains take up less ram and vram.

> **Warning:** **Note:**&#x20;

Changing the terrain size will affect the painted materials and heights. Please operate with caution.




***

## Creating Scatter on Terrain:

* Supports creating Scatter on the terrain using the **"Select Material"** method. When selecting materials, it automatically picks up the textures from peaks, slopes, and the ground.
* To select a specific material for Scatter, right-click the corresponding material channel in the terrain texture editor and choose "Create Scatter Area."

> **Info:** **Note:**&#x20;

The **"Select Model"** method is not supported for creating Scatter on the terrain.





---
