---
title: "How to use D5 Scatter?"
source_url: https://docs.d5render.com/user-guide/tool/how-to-use-d5-scatter
fetched: 2026-06-07
---

# How to use D5 Scatter?

Added D5 Scatter, a procedural content generation (PCG) scatter tool, to quickly generate and scatter a large amount of plants in the scene, bringing greater efficiency and creativity to scene enrichment with ease.



## Usage Steps 

**Added Scatter** in the Top Menu Bar (Shortcut Key: X)：



### 1. Click 'Add Scatter' button or 'X' shortcut key to create Scatter

* The right sidebar guides the subsequent operations
* Supports selecting materials or models to create scatter areas. Press the shortcut key 'X' to switch between 'Select Model' and 'Select Material', with 'Select Material' being the starting default.

> Note: Press the shortcut key 'Ctrl' to reduce/add and multi-select scatter areas. Click 'Create' to confirm scatter areas.

### 2. Add content to scatter with different methods

* Use scatter presets or custom divide: Open presets from Scatter library/Studio or the custom scatter editing panel.
* Or add models from the Library: Open Nature Category



### 3. Reference points would display after creating a scatter

* Added reference points into scatter areas to control the vegetation generation and scattering within their radius. Vegetation won't grow in areas without reference points. You can switch on/off the visibility of reference points by clicking the  icon.
* The amount of reference points is automatically calculated based on the size of the selected object and has a limit, thus affecting the interval between sparse points. The larger the model, the greater the interval between sparse points.
* Supports separate management of scattered assets, including Focus, Lock, Hide, Rename, and Delete, in the scene list.



## Scatter Area Management

Divide the scatter area, generate and manage sub areas



> **Info:** A scatter area is created as a whole by default. You can further divide it into multiple sub areas to scatter different models within different areas. Each area supports individual custom parameters for better vegetation effect.


### Divide Method

#### The scatter area drawn with Advanced Brush supports three types of division methods.



**Image Divide:**

Users can use preset images or upload custom images, and divide the scatter area based on the value set in the "Number of Areas" parameter

**Edge Divide:**

Automatically identify scattered edge areas, and support adjustment of parameters such as edge width, erosion range, and blurring degree.

**Brush Divide:**

Use the Brush again to subdivide the already drawn areas.

> After division, several sub-areas will also be created in the right sidebar. You can right-click on a Sub Area to rename it. The selected sub area will be highlighted in the viewport.



### Add Assets

Scatter Custom Models or Use Templates

* Supports scattering assets from D5 Asset Library/Studio or using scatter presets.
* Click "Assets" to scatter models from the Nature category, supporting up to 15 varieties in each scatter area.



* Added a Scatter library into D5 Asset Library with two types of scatter templates: **'Global Preset'** that includes both the asset and area info and **'content preset'** with only the asset info. Click the 'Scatter Presets' to apply these templates.



### Edit Scatter

| <div></div> | <div></div> |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |

Supports editing scattered surfaces using Brush and Eraser tools adjust. When performing these operations, the current brush settings will be inherited.

Supports directly selecting material surfaces or models to quickly create new scattered areas based on the current brush settings.

## Scatter Content

Supports Customizable Post Editing Parameters: Density, Size, Type, and More

Every asset added into the scatter area will be listed in the Content column with its thumbnail, name, and proportion. Each asset can be replaced, hidden, or deleted, and also supports the following four parameters:

* **Scale**: The size of the model.
* **Rate**: The number of objects per unit in the designated area. This parameter determines the appearance frequency of a model. The higher the value, the more densely the model will appear.
* **Up Direction** : The growth orientation of individual plants.
* **Collision Volume**: The ratio between the collision radius and the radius of the model itself.

> Note: The Collision Volume changes with the Scale parameter. When the plant is scaled up or down, the Collision Volume will change accordingly while its ratio remains the same. At this time, adjusting the Collision Volume parameter will change the collision radius. The Collision Volume and the Density are interrelated. If increasing Density doesn't densify the cluster, please check the Collision Volume setting.



## Global Scatter Adjustments

### **1. Distribution**

* **Preset/Custom Distribution Mapping**: Supports controlling the distribution density of plants with black-and-white maps. The darker the area, the lower the density. Supports importing custom maps or using built-in maps to quickly achieve natural distribution effects.

Note: Supports drag-and-drop for adding a custom map and access to more functions in the right-click menu including Import, File Location, Copy, Paste, and Delete.

* **Density**: Number of plant models scattered per hundred square meters.
* **Cluster Size**: The size of the groups or clusters formed when scattering models. The larger the Cluster Size, the bigger the cluster will be. This parameter can be used to simulate, for example, the clustering of trees in a forest or the distribution of grass in a lawn.
* **Cluster Noise**: The randomness when forming clusters. Increasing the value will make the edges of the clusters look more natural and random.
* **Cluster Blur**: The merging of the edges of the clusters. Increasing the value will promote the convergence of cluster boundaries, which reduces the delineation between the clusters and creates a more organic transition.



### **2. Transformations**

* **Random Scale**: Randomly scales the plant to different sizes within the set range.
* **Random Rotation**: Randomly rotates the plant to different directions within the set range.
* **Random Offset**: Randomly moves the plant within the set range in the X, Y, and Z axis directions to make the distribution of plants more natural.

### **3. Seed**

* Randomly arrange the overall global growth effect. You can manually enter the value or click the icon to randomize a value. The same effect is maintained when the value is fixed on the same bearing surface.



## Other Parameters 

* Optimized interface for Scatter control panel, making it easier to use. Added Simplified Mode to the "More" menu.
* Added Scatter Quality to the "More" menu to help remove obvious jaggy edges of the scatter surface.



## Cull Effect 

Effect helps define areas free of scattering plants/objects.

* Select a Scatter from the resource list, and add the Cull Effect in the right sidebar setting.&#x20;
* The default cull is by material, use the X shortcut key to switch to selecting by model.
* Use the brush to freely draw cull areas on the scatter area. Areas that have been drawn will no longer grow plants.
* After creating the cull, open the menu bar and set the Cull Range.
* Turn on the Falloff Area to set the Distance, Density, Scale, and Noise's parameters.



***

## Associated actions：

### **1. Adjustments to a Single Model**

* Double-click on a model in the scatter area, and click on the ‘Detach Object’ button that appears above to separate it from the batch-generated models, thus supporting individual adjustment.
* Double-click the scatter content to enter independent mode, use the shortcut key N to call up the brush tool. Select the target plant you want to isolate, click “Done”. The selected plants will automatically appear grouped together in the scene resource list.
* Supports multi-selection of detached models: Double-click to activate the 'Detach Object' mode and press Ctrl to multi-select or drag-select objects for detaching.
* After the model is detached, it will appear in the scene resource list simultaneously.

> Note: detaching models does not support Undo.



### 2. Scattered models responsive with updated areas：

> **Info:** Note:

**When creating Scatter Scatter, pick Scatter object and** ********create Scatter area in "Select Material" mode, and change the material name of this part of the model**** ******in subsequent use**, it will cause prompt "Cannot be parameterized now"/cannot update properly/Scatter parameter bar displays abnormality.


* After the model is updated and replaced, you can click the "Edit Scatter Surface" button on the right sidebar to select the scatter object and reactivate the scatter area.
* Scatter assets will adapt to model updates while retaining the original effect.

> Note:&#x20;
>
> * Scattering on the back side of the model will result in incorrect effects.
> * Scattering on a model surface with a steep slope leads to low density.
> * Scattering on the XY projection plane is now supported, and we will support scattering on vertical planes in the future.
> * Only plant models are supported for scattering currently, and more categories will be included in the future.

### &#x20; 

## FAQs

### Q: Why doesn't Up Direction work when it's adjusted?

A: The current default setting has the vertical direction as 1 and the normal direction as 0. The up direction for both global and individual assets is determined by multiplying them together. Therefore, if one side is adjusted to the normal direction, the adjustment on the other side becomes ineffective.





### Q: Why can't we place a scatter in some areas of a multi-layer model?&#x20;

"The overlapping portion of the orthographic projection of the multi-layer model cannot be scattered to" is the expected effect of the current version of Scatter.&#x20;

**Current solution:** Distinguish the material name and place Scatter separately on the model of the overlapping part of the orthographic projection surface.

We will optimize such multi-layer problems in the future.




---
