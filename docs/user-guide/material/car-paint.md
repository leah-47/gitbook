---
title: "What materials are the Car Paint templates suitable for? What are the special parameters?"
source_url: https://docs.d5render.com/user-guide/material/car-paint
fetched: 2026-06-07
---

# What materials are the Car Paint templates suitable for? What are the special parameters?

The basic principle of the Car Paint material is to add a new layer of reflection calculation on top of the standard custom material template to simulate the effect of a clear coat layer. In short, this material has two reflection layers, and the roughness can be defined separately.

> After switching to the Car Paint template, most of the parameters are exactly the same as the Custom template. Please refer to the Custom template for the definition of the Base color, Normal, Specular, Metallic, AO, etc.&#x20;
>
> * These parameters can be considered as controlling the Base Paint.

The following two parameters control the properties of the Clear Coat layer:

* **Clear Coat:** Controls the Reflectance of the Clear Coat layer. A value of 0 means no Clear Coat. A value of 1 maximizes the Reflectance of the Clear Coat.
* **Clear Coat Roughness:** Defines the Roughness of the Clear Coat layer, which affects whether the reflection of the clear coat is blurred or not.

> **Info:** For common Car Paints, the Roughness of the base paint is generally higher, and the Roughness of the Clear Coat layer is close to 0.


In the following figure, keeping the value of Clear Coat layer 0.85 and the Clear Coat Roughness 0, adjusting the Roughness of base paint, you can see the effect of two reflections in the highlight area.




---
