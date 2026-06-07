---
title: "What materials are the Transparent templates suitable for? What are the special parameters?"
source_url: https://docs.d5render.com/user-guide/material/transparent
fetched: 2026-06-07
---

# What materials are the Transparent templates suitable for? What are the special parameters?

Transparent material templates are suitable for making transparent materials such as glass.



The transparent material template parameters are as follows:

### **1. Base color/Base Color Map:**&#x20;

Used to control the color of the stained glass.



### **2. Specular:**&#x20;

Used to control the Reflectance of the material.

### **3. Refraction:**&#x20;

Used to control the Index of Refraction (IOR) of the material. The IOR of glass is generally around 1.5-1.6, the IOR of water is 1.33, and the IOR of diamond is 2.4. When the IOR is 1, there is no refractive effect.

> **Warning:** Due to the refraction effect, the flat glass must **thickness**.


### **4. Roughness:**&#x20;

Defines the roughness of the material surface, which macroscopically affects whether the reflection is blurred or not.

> **Warning:** Please note that Roughness only affects whether the reflection is blurred or not, not the refraction, so if you want to make frosted glass, you need to use normal noise map. We recommend using the preset frosted glass from the Asset Library, located at Assets>Material>Glass>Frosted Glass


### 5. Opacity:

#### Affected by Light

* Enables direct\&indirect lighting for transparent materials with the new 'Affected by Light' option, to achieve effects such as colored gradient glass easily.&#x20;
* Check 'Affected by Light', keep the Opacity value less than 1, and the material will be illuminated. You can use black-and-white maps to control the opacity pattern.



* The library provides several basic semi-transparent materials, located in the \[Glass] category, including Frosted acrylic, Semi-transparent gradient glass, Polycarbonate sheet, as well as Basic semi-transparent materials suitable for a bird's eye view of architectural buildings.




---
