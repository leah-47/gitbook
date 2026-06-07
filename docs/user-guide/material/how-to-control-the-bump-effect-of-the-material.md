---
title: "How to control the bump effect of the material?"
source_url: https://docs.d5render.com/user-guide/material/how-to-control-the-bump-effect-of-the-material
fetched: 2026-06-07
---

# How to control the bump effect of the material?

Using normal maps can create a bumpy visual effect on the material surface without the need for additional modeling work. Normal maps usually look like this:

<figure><img src="/files/a0Dp5yXGrH4rHqS3plys" alt=""><figcaption><p>Normal map</p></figcaption></figure>

When using PBR texture mapping resources, the blue-purple images with "Normal" in the filename are normal maps, which need to be linked to the "Normal" map column.

#### Generating Normals

In the D5 renderer, even if the user does not have a normal map, D5 will automatically generate normal information based on the base color map, allowing the material to reflect bumps and dents. As shown in the figure below, the normal field is empty, D5 automatically generates normal information based on the base color map, and you can adjust the strength of the bump effect through the control. (For demonstration purposes, the base color map has been temporarily adjusted to gray.)

<figure><img src="/files/Ppg8Zds0Pbg5uZjHm0U2" alt=""><figcaption></figcaption></figure>

Adjusting the Normal Intensity Control Widget can enhance or weaken the normal bump effect, you can even drag it to the left to input a negative value, reversing the bump effect.

<figure><img src="/files/sLTeeTzepVnp1KvCWXRr" alt=""><figcaption></figcaption></figure>

## Detailed parameters of normal mapping

<figure><img src="/files/k5LlJLq54G0styzw2BXm" alt=""><figcaption></figcaption></figure>

* Inverted: This flips the direction of the normal bumps.
* Individual UV: This parameter has the same function as the detailed parameters of the base color.
* Triplanar: his parameter is the same as the detailed parameters of the base color map.  It should be noted that if the base color has enabled Individual UV and Triplanar, the normal field also needs to enable Individual UV and triplanar mapping, and input the same parameters to match the base color. If you want the normal bumps to align with the base color texture, the correct Triplanar mapping process is: do not enable Individual UV for each channel, use the Triplanar mapping repair in the global UV control of the material.


---
