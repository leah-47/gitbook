---
title: "What materials are the Subsurface scattering templates suitable for? What are the special parameters"
source_url: https://docs.d5render.com/user-guide/material/what-materials-are-the-subsurface-scattering-templates-suitable-for-what-are-the-special-parameters
fetched: 2026-06-07
---

# What materials are the Subsurface scattering templates suitable for? What are the special parameters

After switching to the Subsurface scattering template, most of the parameters are exactly the same as the custom template. The definition of normal, specular, roughness, AO and other parameters refer to the custom template, **matallic parameter adjustment and emissive feature are not supported**.

## Base color/ Base coler map

Control the colour of the light on the surface of the material.

<div align="center"></div>

## Scattering color

Controls the color of light being scattered inside the material. The brighter the color, the more translucent the material appears.

<div align="center" data-full-width="false"></div>

## Scattering intensity

The multiplier value of the subsurface color. The larger the value, the more transparent the material appears.

<div align="center" data-full-width="true"></div>

## Sky light

Allow environmental light (sky light and HDRI in the GeoSky) to influence the subsurface scattering effect.

> Note: This option increases the rendering overhead.

<div align="center" data-full-width="true"></div>


---
