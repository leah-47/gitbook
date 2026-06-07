---
title: "Corona Function Support Table"
source_url: https://docs.d5render.com/workflow/3ds-max/corona-function-support-table
fetched: 2026-06-07
---

# Corona Function Support Table

### CoronaPhysicalMtl

| UI                                                                                                  | Name                  | Support         | Note                                                                                               |
| --------------------------------------------------------------------------------------------------- | --------------------- | --------------- | -------------------------------------------------------------------------------------------------- |
| <div></div> | Metalness             | Yes             |                                                                                                    |
|                                                                                                     | Base Color            | Yes             |                                                                                                    |
|                                                                                                     | Roughness             | Yes             |                                                                                                    |
|                                                                                                     | IOR                   | No              | This parameter is not supported, but can be converted into an equivalent highlight intensity value |
|                                                                                                     | edge color            | No              |                                                                                                    |
|                                                                                                     | Bump                  | Partial Support | Supports bump mapping, but does not support procedurally generated bumps.                          |
|                                                                                                     | Anisotropy            | No              |                                                                                                    |
|                                                                                                     | Translucency          | No              |                                                                                                    |
|                                                                                                     | Refraction            | Partial Support |                                                                                                    |
|                                                                                                     | Caustics              | No              |                                                                                                    |
|                                                                                                     | Thin absorption       | No              |                                                                                                    |
|                                                                                                     | Opacity               | Partial Support |                                                                                                    |
|                                                                                                     | Displacement          | Partial Support |                                                                                                    |
|                                                                                                     | Clearcoat Layer       | Yes             |                                                                                                    |
|                                                                                                     | Sheen Layer           | Yes             |                                                                                                    |
| <div></div> | Volumetric Absorption | No              |                                                                                                    |
|                                                                                                     | Volumetric Scattering | No              |                                                                                                    |
|                                                                                                     | SSS                   | Partial Support |                                                                                                    |
| <div></div> | Self-illumination     | Yes             |                                                                                                    |
|                                                                                                     | Override              | No              |                                                                                                    |

### CoronaLegacyMtl

| UI                                                                                                  | Name                  | Support         | Note                                                                                               |
| --------------------------------------------------------------------------------------------------- | --------------------- | --------------- | -------------------------------------------------------------------------------------------------- |
| <div></div> | Diffuse               | Yes             |                                                                                                    |
|                                                                                                     | Translucency          | No              |                                                                                                    |
|                                                                                                     | Reflection Color      | Yes             |                                                                                                    |
|                                                                                                     | IOR                   | No              | This parameter is not supported, but can be converted into an equivalent highlight intensity value |
|                                                                                                     | Reflection Glossiness | Yes             |                                                                                                    |
|                                                                                                     | Reflection Anisotropy | No              |                                                                                                    |
|                                                                                                     | Refraction Color      | Yes             |                                                                                                    |
|                                                                                                     | Refraction IOR        | Yes             |                                                                                                    |
|                                                                                                     | Refraction Glossiness | No              |                                                                                                    |
|                                                                                                     | Dispersion            | No              |                                                                                                    |
|                                                                                                     | Opacity               | Partial Support |                                                                                                    |
|                                                                                                     | Bump                  | Partial Support |                                                                                                    |
|                                                                                                     | Displacement          | Partial Support |                                                                                                    |
| <div></div> | Volumetric Absorption | No              |                                                                                                    |
|                                                                                                     | Volumetric Scattering | No              |                                                                                                    |
|                                                                                                     | SSS                   | Partial Support |                                                                                                    |
| <div></div> | Self-illumination     | Yes             |                                                                                                    |
|                                                                                                     | Override              | No              |                                                                                                    |

### Other Materials

| Name                   | Support | Note                                                                      |
| ---------------------- | ------- | ------------------------------------------------------------------------- |
| CoronaLayeredMtl       | Yes     |                                                                           |
| CoronaRaySwitchMtl     | Yes     |                                                                           |
| CoronaShadowCatcherMtl | No      |                                                                           |
| CoronaSkinMtl          | No      | will enable Subsurface template and sync the SkinColor and SkinColor maps |
| CoronaHairMtl          | No      |                                                                           |
| CoronaSlicerMtl        | No      |                                                                           |
| CoronaScannedMtl       | No      |                                                                           |
| CoronaUnsupportedMtl   | No      |                                                                           |
| CoronaSelect Material  | Yes     |                                                                           |
| CoronaLightMtl         | Yes     |                                                                           |

### Bump

| Name   | Support         | Note                                                                              |
| ------ | --------------- | --------------------------------------------------------------------------------- |
| Bump   | Partial Support | Procedurally generated bump maps are not supported, intensity needs to be aligned |
| Normal | Partial Support | Procedurally generated bump maps are not supported, intensity needs to be aligned |

### Displacement

| Name                  | Support         | Note                                                                                                  |
| --------------------- | --------------- | ----------------------------------------------------------------------------------------------------- |
| Normal Displacement   | Partial Support | Currently D5 does not support displacement of model deformation, only displacement of visual effects. |
| Vector Displacement   | No              |                                                                                                       |
| Per-face normal       | No              |                                                                                                       |
| Per-face vector/mixed | No              |                                                                                                       |
| Water level           | No              |                                                                                                       |

### Geometry

| Name                    | Support | Note |
| ----------------------- | ------- | ---- |
| mesh                    | Yes     |      |
| Hair and Fur            | No      |      |
| Proxy Object            | No      |      |
| Decal                   | No      |      |
| bend                    | No      |      |
| Include/exclude         | No      |      |
| Corona Pattern modifier | No      |      |
| Chaos Scatter           | No      |      |
| VolumeGrid              | No      |      |

### Light

| Name           | Support         | Note                               |
| -------------- | --------------- | ---------------------------------- |
| Sphere Light   | Yes             |                                    |
| Rect Light     | Yes             |                                    |
| Point Light    | Yes             |                                    |
| Disc Light     | Yes             |                                    |
| Light material | Partial Support | transfer to D5's emissive material |
| Mesh Light     | Partial Support | transfer to D5's emissive material |
| Spotlight      | Yes             |                                    |
| ies            | Yes             |                                    |

### Camera

| Name                                   | Support         | Note                    |
| -------------------------------------- | --------------- | ----------------------- |
| Perspective Camera                     | Yes             |                         |
| Orthographic Camera                    | Yes             |                         |
| Perspective Camera                     | No              |                         |
| Spherical, Fisheye, Cylindrical Camera | No              |                         |
| Depth of Field                         | Partial Support |                         |
| Resolution, Aspect Ratio               | Yes             |                         |
| Far/Near Clip                          | No              | Only supports Near Clip |
| Multiple Camera Export                 | No              |                         |

### Environment

| Name                      | Support         | Note                  |
| ------------------------- | --------------- | --------------------- |
| Monochromatic environment | No              |                       |
| Environment Map           | Partial Support | Supports HDRI, Bitmap |
| corona geo sky            | No              |                       |
| Clouds                    | No              |                       |
| Airplane Contrail         | No              |                       |
| Volume Effect             | No              |                       |
| Multiple Ambient Lights   | No              |                       |
| Corona Sun                | No              |                       |
| Global volume             | No              |                       |

### Map

| Name                    | Support         | Note |
| ----------------------- | --------------- | ---- |
| Bitmap                  | Partial Support |      |
| Color                   | Yes             |      |
| Color Correction        | Yes             |      |
| CoronaData              | Partial Support |      |
| CheckerMap              | Yes             |      |
| CoronaFrontBack         | Yes             |      |
| Gradient                | Yes             |      |
| MaxFalloffMap           | Partial Support |      |
| CoronaMix               | Yes             |      |
| CoronaMultiMap          | Yes             |      |
| CoronaMappingRandomizer | Yes             |      |
| CoronaTriplanar         | Yes             |      |
| CoronaSelect            | Yes             |      |
| CoronaNormal            | Yes             |      |
| Bitmap                  | Yes             |      |
| Checker                 | Yes             |      |
| ColorCorrection         | Yes             |      |
| Falloff                 | Partial Support |      |
| Gradient                | Yes             |      |
| Mix                     | Yes             |      |
| Normal Bump             | Yes             |      |
| Output                  | Partial Support |      |
| Noise                   | Yes             |      |
| RgbMultiply             | Yes             |      |
| Curvature               | No              |      |
| Chamfer                 | Yes             |      |


---
