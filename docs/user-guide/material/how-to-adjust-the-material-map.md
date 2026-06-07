---
title: "How to adjust the material map?"
source_url: https://docs.d5render.com/user-guide/material/how-to-adjust-the-material-map
fetched: 2026-06-07
---

# How to adjust the material map?

● Map Formats: Currently supported formats: .png / .jpg / .bmp / .tif / .tiff / .tga

● Map Location: In the map editor, right-clicking on the map slot and clicking "File Location" will directly open the file directory where the map is located, making it easy to find and edit the map.

## Base Color/Base Color Map

Base Color controls the color properties of the material itself.

* When the material is metallic (Metallic=1), it is the reflection color of the metal.



* When the material is non-metallic (Metallic=0), it is the diffuse color of the non-metallic material.



The base color palette can only define a single color for the material. If you want more complex variations, you need to use maps to control the color of the material. Click on the "Base Color Map" tab, and then click on the map slot to read the map file.

> **Info:** If using PBR texture mapping resources, ****images with keywords such as "Color," "Base Color," "Albedo," and "Diffuse" in the file name**** are all considered as the base color of the material, and are generally linked to the "**Base Color Map**" slot.


In D5 Render, when there is a map in the "Base Color Map" slot, the color in the "Base Color" palette will be superimposed with the map color, resulting in a coloring effect. The blend mode is "Multiply."

> If you need to **use the original color of the "Base Color Map"**, make sure that ****the "Base Color" palette is pure white****.



## Map Editing

Clicking on the "Detailed Parameters" button on the right side of the "Base Color Map" will expand the base color map editing panel.



## Color Space Transfer Function

color space of the map. There are two options available: "Linear" and "sRGB".

In the PBR workflow, the base color map, the back map of the leaf template, and the AO channel should be imported in sRGB mode. Other maps can be set with no data processing.

Currently, correct presets have been made for new imported maps by default. For existing old projects, to ensure that the effect remains unchanged, all channels are set to sRGB mode.



## **Inverted**

"Inverted" refers to the inverse color of the map, where the hue becomes the complementary color, and the brightness and darkness are reversed.

## **Contrast**

Increasing or decreasing the contrast of an image. Decreasing the contrast will make the image tend towards gray.

## **Hue**

Translating the hue parameter of a map on the hue circle. The control range is -180° to +180°, covering the entire hue circle.

## **Saturation**

Adjusting the saturation of the base color map. If the control is pulled to the minimum, the map will become "black and white." If the control is pulled to the maximum, the map will be very "vibrant."

## **Brightness**

Adjusting the brightness of the base color map. If the control is pulled to the minimum, the map will become black. If the control is pulled to the maximum, the map will become white.

## **Individual UV**

After enabling this option, the map in this field has an independent UV, which can be further stretched, offset, and rotated, and Triplanar UV can also be used. This feature is useful when you want to adjust a specific map channel separately. For example, when you want to translate the base color map without changing the normal position.

## FAQ

#### Why is the "File Location" option disabled?

In the current version, the "File Location" function only works for locally imported maps and does not support opening models/materials in the asset library or materials that are synced from modeling software to D5.


---
