---
title: "How to achieve caustics effect"
source_url: https://docs.d5render.com/user-guide/material/how-to-achieve-caustics-effect
fetched: 2026-06-07
---

# How to achieve caustics effect



<mark style="background-color:purple;">To achieve the caustic effect, the ‘Caustics’ option must be enabled simultaneously for</mark> <mark style="background-color:purple;"></mark><mark style="background-color:purple;">**both the material and the light source**</mark><mark style="background-color:purple;">.</mark>

* Among the materials, only the **"Custom", "Transparent" and "Water" material templates** currently support caustics.

> The Custom material supports reflective caustics;&#x20;
>
> the Transparent and Water materials support both reflective and refractive caustics;

* <mark style="background-color:purple;">**Four types of light sources**</mark>**&#x20;and&#x20;**<mark style="background-color:purple;">**the sun(Geo Sky, and HDRI-Sun)**</mark> support the caustic effect.

<figure><img src="/files/8YPdtX0R1n75lhhtL5Qx" alt="" width="563"><figcaption></figcaption></figure>

1. The morphology of the caustics spot is affected by the model's bump variations as well as the normal texture map, which can be adjusted with the intensity and softness parameters.
2. The parameters supported for adjustment in Light Sources (<mark style="background-color:purple;">4 Basic Light</mark>, <mark style="background-color:purple;">Geo Sky and HDRI-Sun</mark>) when caustics is turned on:&#x20;

* **Caustics Intensity:** The multiplier value of the Caustics effect, the higher the value, the brighter the caustics.
* **Softness:** The degree of Caustics softening which takes effect at the Light Source Radius greater than 0.

> Note:
>
> 1. The caustics effect on transparent materials is not compatible with their individual UV and triplanar effects.
> 2. Currently supports **up to 64 light sources** at the same time with the caustics effect on.
> 3. The caustics effect increases the rendering performance overhead, so please choose and adjust it according to the actual need when using it.

<div><figure><img src="/files/ILITQGmrusb0wxa38F3y" alt=""><figcaption><p>light caustics</p></figcaption></figure> <figure><img src="/files/lL9VUngPBBd6Pa6OjXIx" alt=""><figcaption><p>material caustics</p></figcaption></figure></div>

## FAQ

### Why do the sunlight caustics flicker?&#x20;

Sunlight caustics consume huge computation resources. To reduce the consumption, Sunlight Caustics may slightly flicker in preview, but will appear static in rendered images.

<figure><img src="/files/pE3j1e5im1PpYe2ww9Dv" alt=""><figcaption><p>Sunlight Caustics slightly flickers in preview, but will appear static in rendered images.</p></figcaption></figure>


---
