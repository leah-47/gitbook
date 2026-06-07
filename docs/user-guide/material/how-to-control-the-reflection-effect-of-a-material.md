---
title: "How to control the reflection effect of a material?"
source_url: https://docs.d5render.com/user-guide/material/how-to-control-the-reflection-effect-of-a-material
fetched: 2026-06-07
---

# How to control the reflection effect of a material?

## Specular

<mark style="background-color:purple;">The Specular is specifically used to describe</mark> <mark style="background-color:purple;"></mark><mark style="background-color:purple;">**the refraction of the non-metallic materials.**</mark>

* **Metallic=1**: specular parameters have no effect on the material
* **Metallic=0**: specular parameters affect the refraction of the material

<mark style="color:blue;">Due to the Fresnel phenomenon, the refraction of light striking a material vertically is the weakest and is called Fresnel Reflectance at 0 Degrees (F0). Due to the reversibility of the light path, you can also interpret it as the camera or the observer looks at the surface of the material vertically, they will see the weakest reflection effect.</mark>

* When **Specular=0**, the F0 intensity of the material is also 0%, the material has no specular reflection phenomenon, only diffuse reflection phenomenon.&#x20;
* When **Specular=1**, the F0 intensity of the material is 8%, which is the highest refraction of non-metallic materials.

> Generally, gemstones, jade and other materials will reach this value.

<figure><img src="/files/MFPpWIDcx0tRrj4JmwNB" alt=""><figcaption></figcaption></figure>

The Specular value of 0-1 linearly corresponds to the F0 reflectance of non-linear materials from 0% to 8%.&#x20;

> For example, a highlight value of 0.5 represents a 4% reflectance when facing directly towards the material.

<mark style="color:blue;">Most non-metallic materials have an F0 between 2% and 5%, which translates into a specular value of 0.25\~0.625. In other words, when making non-metallic materials, the minimum specular parameter should not be lower than 0.25. The specular parameter for water materials is 0.25, and most non-metallic materials (glass, plastic, etc.) have a specular value of about 0.5. The specular factor for gemstones and jade can be set to 1.0.</mark>

<mark style="color:blue;">In the process of using, in order to achieve a better reflection effect, some users will adjust the metallic parameter, but in fact, this is wrong. If a non-metallic material, set the metallic parameter, such as marble/wall, etc., it will make the material look very reflective and the material in the screen will look too greasy.</mark>

## Roughness

<mark style="background-color:purple;">The roughness parameter describes the microscopic roughness of the material surface, which affects whether the reflection effect is blurred or not.</mark>

* **The lower the roughness**, the flatter the surface of the material, the closer the reflected light path will be to the ideal specular reflection, and the clearer the image reflected from the surface of the material will be.
* **Roughness increases**, representing the material surface gradually becomes rugged, the reflected light path in a certain range of irregular jitter, the macroscopic reflection will become blurred.

<mark style="color:blue;">"Roughness" and "glossiness" are antonyms, and theoretically, if you do the inverse color processing to "glossiness map", you will get "roughness map".</mark>

<figure><img src="/files/uGw696GnqWSIi11bog6A" alt=""><figcaption></figcaption></figure>


---
