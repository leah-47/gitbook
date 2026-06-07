---
title: "Update | D5 Sync for 3ds Max"
source_url: https://docs.d5render.com/workflow/3ds-max/update-or-d5-sync-for-3ds-max
fetched: 2026-06-07
---

# Update | D5 Sync for 3ds Max

## Ver. 3.4.1.0030 <a href="#toc-h3-ver-3410030" id="toc-h3-ver-3410030"></a>

Release Date 20230824

### **New and improvements**

1. Compatible with D5 Render version 2.5
2. Optimized synchronization pop-up method and description.

### Ver. 3.3.1.0049 <a href="#toc-h3-ver-3310049" id="toc-h3-ver-3310049"></a>

Release Date 20230320

### **New and improvements**

1. Support mapping more parameters for light sync
2. Support mapping PBR material parameters
3. Optimized file path of temporary texture folder when exporting model data
4. Optimized dialog box for choosing sync methods

### **Fixes**

1. Some crash issues due to incompatible materials
2. Incorrect mapping of some light parameters
3. Scaling light objects in 3ds Max not compatible with light sync
4. Light scale error due to switching units in 3ds Max

For details, please read this topic: [Light group changes and different versions for downloading](https://forum.d5render.com/t/light-group-changes-and-different-versions-for-downloading-d5-converter-for-3ds-max-and-sketchup/15616)

### **Known issues:**

1. In D5 Render 2.4, if we align grouped objects with ungrouped individual objects (they are all from 3ds Max). the model will rotate 90°.\
   Workaround: in a D5 scene, keep all objects from 3ds max as either grouped objects or ungrouped objects, and they can be aligned correctly.
2. For imported .d5a models saved in D5 Render 2.3, if we open them in 2.4, import models again and sync coordinate, the model will rotate 90°.\
   Workaround: swap the X and Y values in the model position and add “-”(minus) to the Y value. Then it will be aligned correctly with the .d5a file imported in D5 Render 2.3.

## Ver. 3.2.0.0001 <a href="#toc-h3-ver-3200001" id="toc-h3-ver-3200001"></a>

Release Date 20220901

### **New and improvements**

1. Keep group hierarchy: export a 3ds Max project and keep its group hierarchy (one tier). This feature needs D5 Render 2.3 and higher versions.

<div align="left"><figure><img src="/files/6DjAcGNbTOxYckKBtZMH" alt=""><figcaption></figcaption></figure></div>

2. Export selected group hierarchy
3. Quick ProOptimize (reduce faces)

### **Fixes**

1. Wrong installation path error
2. Error message “Exception catched D5start”
3. Some exported models with grass materials caused D5 to crash
4. VRay Disc light duplicates in D5
5. VRay material’s Normal parameter became 6.49 in D5
6. CRraySwitch material mapping
7. Blended material mapping
8. Other general fixes to improve the stability

### **Known issue:**

1. When importing .d5a models with hierarchy into D5, it is suggested to open a scene then click Import button, instead of opening them directly.
2. Exported .d5a models cannot use the sync coordinates/reload features in D5.

## Ver. 3.1.0.0010&#x20;

Release Date 20220725

### New and improvements&#x20;

1. Support 3ds Max 2014/2015/2016

### **Fixes**

1. For 3ds Max2018, the first time of launching the plugin may cause crash issue.
2. The shortcuts cannot work when sync for the first time.
3. Normal panel disappeared in D5 for some models exported from 3ds Max.
4. The “can not call proc” error appears when installing and selecting the file path.

## Ver. 3.0.1.0394 <a href="#toc-h3-ver-3010394" id="toc-h3-ver-3010394"></a>

Release Date 20220704

### **New and improvements**

1. Supported versions: 3ds Max 2018 - 3ds Max 2023; Vray 3.6 and higher; Corona 6.0 / 7.0 / 8.0.
2. Live sync is faster and more stable: modify the model in 3ds Max and click Update to sync it to D5 ( to add or delete models, or modify the size and shape, including Subdivide Modifier and other modifiers).
3. Fully compatible with the old version (material / coordinate system). You can select sync method when start live sync for the first time, or adjust it in the settings page.
4. Auto Collapse (It is recommended to turn it on by default. If the model is found to be misaligned, please turn it off manually).
5. Material mapping supports Corona material, Vray blend/custom alpha/glass/transparent/multi sub material/special map format/bitmap, Vray bitmap, Corona bitmap image cutting/Quixel scanned map/ Corona Renderer-Select, Mix, RaySwitch and other mixed nodes.
6. Emissive material mapping supports standard/VRay Light/Corona Render Light.
7. Support Standard/Corona/Vray/Arnold light type and location.
8. Support sending cameras to D5 scene list.

### **Fixes**

1. Improve the logic of Vray material mapping for more accurate parameters.
2. Some materials get lost after synchronization or export.
3. Various error pop ups of MAXscript during export or synchronization.
4. Switching workspace causes plug-in exceptions.
5. Other known bugs


---
