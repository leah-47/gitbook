---
title: "Vray Function Support Table"
source_url: https://docs.d5render.com/workflow/3ds-max/vray-function-support-table
fetched: 2026-06-07
---

# Vray Function Support Table

### Material

| Native Name             | Support         |
| ----------------------- | --------------- |
| VRMtl                   | Yes             |
| VRay 2SidedMtl          | Yes             |
| VRayCarPaintMtl         | Yes             |
| VRayCarPaintMtl2        | Yes             |
| VRayLightMtl            | Yes             |
| VRaySwitchedMtl         | Yes             |
| VRayALSurfaceMtl        | Partial Support |
| VRayBlendMtl            | Partial Support |
| VRayBumpMtl             | Partial Support |
| VRayFastSSS2            | Partial Support |
| VRayFlakesMtl           | No              |
| VRayFlakesMtl2          | No              |
| VRayGLSLMt              | Partial Support |
| VRayScatterVolume       | Partial Support |
| VRayStochasticFlakesMtl | No              |
| VRayToonMtl             | Partial Support |
| VRayPointParticleMtl    | Partial Support |
| VRayMDLMtl              | Partial Support |
| VRayHairNextMtl         | Partial Support |
| VRayMtlWrapper          | Partial Support |
| VRayOSLMtl              | No              |
| VRayOverrideMtl         | Partial Support |
| VRayPluginNodeMtl       | No              |
| VRayScannedMtl          | No              |
| VRayVectorDisplBake     | No              |
| VRayVRmatMtl            | No              |

### VRayMtl

| UI                                                                                                  | Native name                                                                  | Support |
| --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------- |
| <div></div> | Diffuse                                                                      | Yes     |
|                                                                                                     | Diffuse Texture                                                              | Yes     |
|                                                                                                     | Roughness                                                                    | Yes     |
|                                                                                                     | Roughness Texture                                                            | Yes     |
|                                                                                                     | Preset                                                                       | Yes     |
|                                                                                                     | Enable Bump map                                                              | Yes     |
|                                                                                                     | Bump amount                                                                  | Yes     |
|                                                                                                     | Bump Texture                                                                 | Yes     |
| <div></div> | Reflect                                                                      | Yes     |
|                                                                                                     | Reflect Texture                                                              | Yes     |
|                                                                                                     | Reflect Glossiness                                                           | Yes     |
|                                                                                                     | Reflect Glossiness Texture                                                   | Yes     |
|                                                                                                     | Fresnel reflections                                                          | Yes     |
|                                                                                                     | Fresnel IOR                                                                  | Yes     |
|                                                                                                     | Fresnel IOR Lock                                                             | No      |
|                                                                                                     | Fresnel IOR Texture                                                          | Yes     |
|                                                                                                     | Metalness                                                                    | Yes     |
|                                                                                                     | Metalness Texture                                                            | Yes     |
|                                                                                                     | Max depth                                                                    | No      |
|                                                                                                     | Reflect on back side                                                         | No      |
|                                                                                                     | Dim distance                                                                 | No      |
|                                                                                                     | Dim fall off                                                                 | No      |
|                                                                                                     | <p>Affect channel:</p><p>Color only</p><p>Color+alpha</p><p>All Channels</p> | No      |
| <div></div> | Refract                                                                      | Yes     |
|                                                                                                     | Refract Texture                                                              | Yes     |
|                                                                                                     | Refract Glossiness                                                           | Yes     |
|                                                                                                     | Refract Glossiness Texture                                                   | Yes     |
|                                                                                                     | IOR                                                                          | Yes     |
|                                                                                                     | IOR Texture                                                                  | No      |
|                                                                                                     | Abbe number                                                                  | No      |
|                                                                                                     | Max depth                                                                    | No      |
|                                                                                                     | Affect shadows                                                               | No      |
|                                                                                                     | <p>Affect channel:</p><p>Color only</p><p>Color+alpha</p><p>All Channels</p> | No      |
|                                                                                                     | Thin-walled                                                                  | No      |
| <div></div> | Translucency:None                                                            | Yes     |
|                                                                                                     | Translucency:Volume                                                          | No      |
|                                                                                                     | Translucency:SSS                                                             | No      |
|                                                                                                     | Fog color / Scatter radius                                                   | No      |
|                                                                                                     | Fog color Texture / Scatter radius Texture                                   | No      |
|                                                                                                     | Depth (cm) / Scale (cm)                                                      | No      |
|                                                                                                     | <p>Illumination:</p><p>Uniform</p><p>Directional</p>                         | No      |
|                                                                                                     | Scatter color                                                                | No      |
|                                                                                                     | Scatter color Texture                                                        | No      |
|                                                                                                     | SSS amount                                                                   | No      |
| <div></div> | Self-Illumination                                                            | No      |
|                                                                                                     | Self-Illumination Texture                                                    | No      |
|                                                                                                     | GI                                                                           | No      |
|                                                                                                     | Mult                                                                         | No      |
|                                                                                                     | Compensate camera exposure                                                   | No      |
| <div></div> | Coat amount                                                                  | Yes     |
|                                                                                                     | Coat amount Texture                                                          | Yes     |
|                                                                                                     | Coat glossiness                                                              | Yes     |
|                                                                                                     | Coat glossiness Texture                                                      | No      |
|                                                                                                     | Coat IOR                                                                     | No      |
|                                                                                                     | Coat IOR Texture                                                             | No      |
|                                                                                                     | Coat color                                                                   | No      |
|                                                                                                     | Coat color Texture                                                           | No      |
|                                                                                                     | Lock coat bump to base bump                                                  | No      |
| <div></div> | Enable Coat bump                                                             | No      |
|                                                                                                     | Coat bump amount                                                             | No      |
|                                                                                                     | Coat bump Texture                                                            | No      |
|                                                                                                     | Enable thin film                                                             | No      |
|                                                                                                     | IOR                                                                          | No      |
|                                                                                                     | Min thickness (nm)                                                           | No      |
|                                                                                                     | Max thickness (nm)                                                           | No      |
| <div></div> | Sheen color                                                                  | Yes     |
|                                                                                                     | Sheen color Textures                                                         | Yes     |
|                                                                                                     | Sheen glossiness                                                             | Yes     |
|                                                                                                     | Sheen glossiness Texture                                                     | No      |
|                                                                                                     | <p>BRDF:</p><p>Phong</p><p>Blinn</p><p>Ward</p><p>Microfacet GTR (GGX)</p>   | No      |
|                                                                                                     | Use glossiness / Use roughness                                               | No      |
|                                                                                                     | GTR tail falloff                                                             | No      |
|                                                                                                     | GTR tail falloff Texture                                                     | No      |
|                                                                                                     | Anisotropy                                                                   | No      |
|                                                                                                     | Anisotropy Texture                                                           | No      |
|                                                                                                     | Rotation                                                                     | No      |
|                                                                                                     | Rotation Texture                                                             | No      |
|                                                                                                     | Local axis                                                                   | No      |
|                                                                                                     | Map channel                                                                  | No      |

### Maps

|                  | Native Name                                                                                         | V-Ray plugin Name                                                                                                 | Support         |
| ---------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------- |
| **General Maps** | <div></div> | Advanced Wood                                                                                                     | Partial Support |
|                  | <div></div> | Bitmap                                                                                                            | Yes             |
|                  | <div></div> | BlendedBoxMap                                                                                                     | No              |
|                  | <div></div> | Camera Map Per Pixel                                                                                              | No              |
|                  | <div></div> | Cellular                                                                                                          | Yes             |
|                  | <div></div> | Checker                                                                                                           | Yes             |
|                  | <div></div> | ColorCorrection                                                                                                   | Yes             |
|                  | <div></div> | ColorCorrect [1](https://docs.chaos.com/display/LAV/V-Ray+for+3ds+Max+Features#VRayfor3dsMaxFeatures-notes)       | Yes             |
|                  | <div></div> | ColorMap                                                                                                          | Yes             |
|                  | <div></div> | Compound                                                                                                          | No              |
|                  | <div></div> | Combustion [1](https://docs.chaos.com/display/LAV/V-Ray+for+3ds+Max+Features#VRayfor3dsMaxFeatures-notes)         | No              |
|                  |                                                                     | Composite                                                                                                         | Partial Support |
|                  | <div></div> | Dent                                                                                                              | Partial Support |
|                  | <div></div> | Falloff                                                                                                           | Partial Support |
|                  | <div></div> | Gradient                                                                                                          | Yes             |
|                  | <div></div> | Gradient Ramp                                                                                                     | Yes             |
|                  | <div></div> | Map Output Selector                                                                                               | Yes             |
|                  | <div></div> | Marble                                                                                                            | Yes             |
|                  | <div></div> | Mask                                                                                                              | Yes             |
|                  | <div></div> | Mix                                                                                                               | Yes             |
|                  | <div></div> | MultiTitle                                                                                                        | No              |
|                  | <div></div> | Noise                                                                                                             | Yes             |
|                  | <div></div> | OSL Map                                                                                                           | Partial Support |
|                  | <div></div> | Output                                                                                                            | Partial Support |
|                  | <div></div> | Particle Age                                                                                                      | No              |
|                  |                                                                     | Particle MBlur                                                                                                    | No              |
|                  | <div></div> | Perlin Marble                                                                                                     | Yes             |
|                  | <div></div> | RGB Multiply                                                                                                      | Yes             |
|                  | <div></div> | RGB Tint                                                                                                          | Yes             |
|                  |                                                                     | ShapeMap                                                                                                          | Yes             |
|                  | <div></div> | Smoke                                                                                                             | Yes             |
|                  | <div></div> | Speckle                                                                                                           | Yes             |
|                  | <div></div> | Splat                                                                                                             | Yes             |
|                  | <div></div> | Stucco                                                                                                            | Yes             |
|                  | <div></div> | Substance                                                                                                         | Yes             |
|                  | <div></div> | Substance2                                                                                                        | Yes             |
|                  | <div></div> | Swirl                                                                                                             | Yes             |
|                  | <div></div> | TexMap                                                                                                            | Yes             |
|                  | <div></div> | TextureObjMask                                                                                                    | Partial Support |
|                  | <div></div> | Tiles                                                                                                             | Yes             |
|                  | <div></div> | Vector Displacement                                                                                               | No              |
|                  | <div></div> | Vector Map                                                                                                        | Yes             |
|                  | <div></div> | VertexColor                                                                                                       | Yes             |
|                  | <div></div> | Waves                                                                                                             | Yes             |
| **V-Ray Maps**   | <div></div> | VRayBitmap (VRayHDRI)                                                                                             | Yes             |
|                  | <div></div> | VRayBump2Normal                                                                                                   | Yes             |
|                  | <div></div> | VRayColor                                                                                                         | Yes             |
|                  | <div></div> | VRayColor2Bump                                                                                                    | Yes             |
|                  | <div></div> | VRayCompTex                                                                                                       | Yes             |
|                  | <div></div> | VRayCurvature                                                                                                     | No              |
|                  | <div></div> | VRayDirt                                                                                                          | Partial Support |
|                  | <div></div> | VRayDistanceTex                                                                                                   | No              |
|                  | <div></div> | VRayEdgesTex                                                                                                      | Yes             |
|                  | <div></div> | VRayFakeFresnelTex [2](https://docs.chaos.com/display/LAV/V-Ray+for+3ds+Max+Features#VRayfor3dsMaxFeatures-notes) | –               |
|                  | <div></div> | VRayGLSLTex                                                                                                       | No              |
|                  | <div></div> | VRayHairInfoTex                                                                                                   | No              |
|                  | <div></div> | VRayHDRI(VRayBitmap)                                                                                              | No              |
|                  | <div></div> | VRayICC                                                                                                           | No              |
|                  | <div></div> | VRayLut                                                                                                           | No              |
|                  | <div></div> | VRayMultiSubTex                                                                                                   | Yes             |
|                  | <div></div> | VRayNoiseTex                                                                                                      | Yes             |
|                  | <div></div> | VRayNormalMap                                                                                                     | Yes             |
|                  | <div></div> | VRayOCIO                                                                                                          | No              |
|                  | <div></div> | VRayOSLOutputSelector                                                                                             | No              |
|                  | <div></div> | VRayOSLTex                                                                                                        | No              |
|                  | <div></div> | VRayParticleTex                                                                                                   | No              |
|                  | <div></div> | VRayPointCloudColor                                                                                               | No              |
|                  | <div></div> | VRayPluginNodeTex                                                                                                 | No              |
|                  | <div></div> | VRayPtex                                                                                                          | No              |
|                  | <div></div> | VRaySamplerInfoTex                                                                                                | No              |
|                  | <div></div> | VRaySky                                                                                                           | No              |
|                  | <div></div> | VRaySoftbox                                                                                                       | No              |
|                  | <div></div> | VRayTriplanarTex                                                                                                  | Partial Support |
|                  | <div></div> | VRayUserColor                                                                                                     | Yes             |
|                  | <div></div> | VRayUserScalar                                                                                                    | Yes             |
|                  | <div></div> | VRayUVWRandomizer                                                                                                 | Yes             |
| **Chaos Maps**   | <div></div> | ChaosScatterSurfaceColor                                                                                          | No              |

### Lights

<table><thead><tr><th width="125.66665649414062">Light Category</th><th></th><th></th><th>Light Type and Parameter</th></tr></thead><tbody><tr><td><strong>Vray</strong></td><td><p>Vray Light</p><div></div></td><td>Plane</td><td><p>Yes</p><ul><li><p>Plane Light</p><ul><li>Postion</li><li>Scale(Length&#x26;Width)</li><li>Color/Color Temperature</li><li>Units</li></ul></li></ul></td></tr><tr><td></td><td></td><td>Dome</td><td>Yes, supports HDRI</td></tr><tr><td></td><td></td><td>Sphere</td><td>Yes</td></tr><tr><td></td><td></td><td>Mesh</td><td>Yes</td></tr><tr><td></td><td></td><td>Disc</td><td><p>Yes</p><ul><li><p>Disc Light</p><ul><li>Postion</li><li>Scale(Length&#x26;Width)</li><li>Color/Color Temperature</li></ul></li></ul></td></tr><tr><td></td><td>Vray IES</td><td>/</td><td>Yes. Transfer IES file and Rotation parameters if there's IES file</td></tr><tr><td></td><td>Vray AmbientLight</td><td>/</td><td>/</td></tr><tr><td></td><td>Vray Luminaire</td><td>/</td><td>/</td></tr><tr><td></td><td>Vray SUN</td><td>/</td><td>/</td></tr></tbody></table>

### Camera

| Name                                   | Support         |
| -------------------------------------- | --------------- |
| Perspective Camera                     | Yes             |
| Orthographic Camera                    | Yes             |
| Perspective Camera                     | No              |
| Spherical, Fisheye, Cylindrical Camera | No              |
| Depth of Field                         | No              |
| Resolution, Aspect Ratio               | Yes             |
| Far/Near Clip                          | Partial Support |
| Multiple Camera Export                 | No              |

### Environment

*Supports the following two methods to add HDRI*

| Method   | UI                                                                                                  | Description                                                |
| -------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Method 1 | <div></div> | From Rendering - Environment                               |
| Method 2 | <div></div> | Add VRayLight from the Lights menu and select Type as Dome |


---
