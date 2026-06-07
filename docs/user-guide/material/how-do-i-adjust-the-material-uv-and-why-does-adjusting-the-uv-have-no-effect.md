---
title: "How do I adjust the material UV and why does adjusting the UV have no effect?"
source_url: https://docs.d5render.com/user-guide/material/how-do-i-adjust-the-material-uv-and-why-does-adjusting-the-uv-have-no-effect
fetched: 2026-06-07
---

# How do I adjust the material UV and why does adjusting the UV have no effect?

The UVs of the material are currently divided into two parts: the individual UVs of the parameter maps and the overall UVs of the material.

<div align="left"><figure><img src="/files/8IePbItushJPnhTcbjaF" alt=""><figcaption></figcaption></figure> <figure><img src="/files/nVqbrQE2uJoo1bYgSI3V" alt=""><figcaption></figcaption></figure></div>

Individual UVs for each parameter enable the mapping in this field to have separate UVs, independent of the overall UVs. can be further stretched, offset, rotated, and can also be repaired using triplanar.

If adjusting the overall UV has no effect, it is probable that the individual UV switch has been turned on in a parameter.

## Stretch

Stretch the texture map along the UV direction, the larger the value, the more the texture repeats per unit area, which looks like a "shrinking" texture effect. The map aspect ratio is locked by default, and can be unlocked to stretch in a certain direction.&#x20;

## Offset

UV axis direction panning texture mapping.

## Rotate

Rotate the texture map on a plane with controls ranging from 0-360°.

## Keep texture shape

Enable this option to keep the texture shape of the material map from deformation after non-isometric scaling and rotating UVs.

<div align="left"><figure><img src="/files/rRGeL6BxyW8JjN4JEsiB" alt=""><figcaption></figcaption></figure></div>

<div align="left"><figure><img src="/files/H4c1og7kj6amgIl71tgY" alt=""><figcaption></figcaption></figure></div>

## Triplanar

For models with complex morphology and UV clutter, this option can be turned on to quickly obtain a uniform and continuous texture mapping.

> Water, Flowing Water, Displacement, Multimedia, Foliage, and Grass material templates do not support this feature.

<figure><img src="/files/ajlJJ8WoUj3Td4Wum3FN" alt=""><figcaption></figcaption></figure>

## Blend Amount

Let the textured seams created by Triplanar blend together.

## UV Randomizer

Used to rotate and blend edge textures to avoid a repetitive feel to the texture, for use in scenarios with **natural ground surfaces such as water and grass**.

> Currently, this feature <mark style="background-color:purple;">**is not supported for Transparent, Flowing Water, Displacement, Multimedia, and Foliage material templates**</mark>.

<figure><img src="/files/yaeoZBgE3mP2airEXFCe" alt=""><figcaption></figcaption></figure>

## Common issue

How can I do it if the texture stretches when rotating the UVs?

Open the Keep texture shape and rotate again.


---
