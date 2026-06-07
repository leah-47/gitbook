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
| <div><figure><img src="/files/LBQwXbiyKaQpwkvIW87s" alt=""><figcaption></figcaption></figure></div> | Diffuse                                                                      | Yes     |
|                                                                                                     | Diffuse Texture                                                              | Yes     |
|                                                                                                     | Roughness                                                                    | Yes     |
|                                                                                                     | Roughness Texture                                                            | Yes     |
|                                                                                                     | Preset                                                                       | Yes     |
|                                                                                                     | Enable Bump map                                                              | Yes     |
|                                                                                                     | Bump amount                                                                  | Yes     |
|                                                                                                     | Bump Texture                                                                 | Yes     |
| <div><figure><img src="/files/Z1xDnI5y7et7ecLtruzC" alt=""><figcaption></figcaption></figure></div> | Reflect                                                                      | Yes     |
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
| <div><figure><img src="/files/yBFMNb1Ywfd2JHQx93LA" alt=""><figcaption></figcaption></figure></div> | Refract                                                                      | Yes     |
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
| <div><figure><img src="/files/T4d0uNglRJCPfuCSedjC" alt=""><figcaption></figcaption></figure></div> | Translucency:None                                                            | Yes     |
|                                                                                                     | Translucency:Volume                                                          | No      |
|                                                                                                     | Translucency:SSS                                                             | No      |
|                                                                                                     | Fog color / Scatter radius                                                   | No      |
|                                                                                                     | Fog color Texture / Scatter radius Texture                                   | No      |
|                                                                                                     | Depth (cm) / Scale (cm)                                                      | No      |
|                                                                                                     | <p>Illumination:</p><p>Uniform</p><p>Directional</p>                         | No      |
|                                                                                                     | Scatter color                                                                | No      |
|                                                                                                     | Scatter color Texture                                                        | No      |
|                                                                                                     | SSS amount                                                                   | No      |
| <div><figure><img src="/files/z8Cyo9fhPgSRpcibjEse" alt=""><figcaption></figcaption></figure></div> | Self-Illumination                                                            | No      |
|                                                                                                     | Self-Illumination Texture                                                    | No      |
|                                                                                                     | GI                                                                           | No      |
|                                                                                                     | Mult                                                                         | No      |
|                                                                                                     | Compensate camera exposure                                                   | No      |
| <div><figure><img src="/files/oqa7eLtQvYDx4FirowNb" alt=""><figcaption></figcaption></figure></div> | Coat amount                                                                  | Yes     |
|                                                                                                     | Coat amount Texture                                                          | Yes     |
|                                                                                                     | Coat glossiness                                                              | Yes     |
|                                                                                                     | Coat glossiness Texture                                                      | No      |
|                                                                                                     | Coat IOR                                                                     | No      |
|                                                                                                     | Coat IOR Texture                                                             | No      |
|                                                                                                     | Coat color                                                                   | No      |
|                                                                                                     | Coat color Texture                                                           | No      |
|                                                                                                     | Lock coat bump to base bump                                                  | No      |
| <div><figure><img src="/files/7TH7UoV986HNYCwO9IUL" alt=""><figcaption></figcaption></figure></div> | Enable Coat bump                                                             | No      |
|                                                                                                     | Coat bump amount                                                             | No      |
|                                                                                                     | Coat bump Texture                                                            | No      |
|                                                                                                     | Enable thin film                                                             | No      |
|                                                                                                     | IOR                                                                          | No      |
|                                                                                                     | Min thickness (nm)                                                           | No      |
|                                                                                                     | Max thickness (nm)                                                           | No      |
| <div><figure><img src="/files/glqWNprg97k64O8332uy" alt=""><figcaption></figcaption></figure></div> | Sheen color                                                                  | Yes     |
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
| **General Maps** | <div><figure><img src="/files/z7h02n6HDmYXGdCLB7YB" alt=""><figcaption></figcaption></figure></div> | Advanced Wood                                                                                                     | Partial Support |
|                  | <div><figure><img src="/files/SiTjNBkoYrepnvu4aKrN" alt=""><figcaption></figcaption></figure></div> | Bitmap                                                                                                            | Yes             |
|                  | <div><figure><img src="/files/wknwKbHrUPy16jdStqXe" alt=""><figcaption></figcaption></figure></div> | BlendedBoxMap                                                                                                     | No              |
|                  | <div><figure><img src="/files/kE7WoCVJpMFPBv7YHLrF" alt=""><figcaption></figcaption></figure></div> | Camera Map Per Pixel                                                                                              | No              |
|                  | <div><figure><img src="/files/0BWAA8xySNBYNrt4C7oz" alt=""><figcaption></figcaption></figure></div> | Cellular                                                                                                          | Yes             |
|                  | <div><figure><img src="/files/oqFULYDJ2sTfGAGAfJS6" alt=""><figcaption></figcaption></figure></div> | Checker                                                                                                           | Yes             |
|                  | <div><figure><img src="/files/zwMiKX6E3ajnfKQsZMKb" alt=""><figcaption></figcaption></figure></div> | ColorCorrection                                                                                                   | Yes             |
|                  | <div><figure><img src="/files/DObCkiu0nd8idmTrHGId" alt=""><figcaption></figcaption></figure></div> | ColorCorrect [1](https://docs.chaos.com/display/LAV/V-Ray+for+3ds+Max+Features#VRayfor3dsMaxFeatures-notes)       | Yes             |
|                  | <div><figure><img src="/files/iq8K7fw1hLAt0K6E4Fyx" alt=""><figcaption></figcaption></figure></div> | ColorMap                                                                                                          | Yes             |
|                  | <div><figure><img src="/files/bd2Rjh9fDaiyJKS3rN76" alt=""><figcaption></figcaption></figure></div> | Compound                                                                                                          | No              |
|                  | <div><figure><img src="/files/vQo0bPkzJVjYrU89J5ts" alt=""><figcaption></figcaption></figure></div> | Combustion [1](https://docs.chaos.com/display/LAV/V-Ray+for+3ds+Max+Features#VRayfor3dsMaxFeatures-notes)         | No              |
|                  | ![](/files/t2NfAkpSPKjekRSdyDb6)                                                                    | Composite                                                                                                         | Partial Support |
|                  | <div><figure><img src="/files/hoUV1OrNWf7M9EHUwELD" alt=""><figcaption></figcaption></figure></div> | Dent                                                                                                              | Partial Support |
|                  | <div><figure><img src="/files/Wm2hopaceIK3jnbW2Bzl" alt=""><figcaption></figcaption></figure></div> | Falloff                                                                                                           | Partial Support |
|                  | <div><figure><img src="/files/ROWAZRgU2c2O8rO1oJN5" alt=""><figcaption></figcaption></figure></div> | Gradient                                                                                                          | Yes             |
|                  | <div><figure><img src="/files/JekXjTXQnzuGBz4wKCiq" alt=""><figcaption></figcaption></figure></div> | Gradient Ramp                                                                                                     | Yes             |
|                  | <div><figure><img src="/files/GcDneGqfKNWgIlBz3SGA" alt=""><figcaption></figcaption></figure></div> | Map Output Selector                                                                                               | Yes             |
|                  | <div><figure><img src="/files/xw59ypHEsdMtGJjfbuc3" alt=""><figcaption></figcaption></figure></div> | Marble                                                                                                            | Yes             |
|                  | <div><figure><img src="/files/98GZfQQx6zgHS0Ijp9dl" alt=""><figcaption></figcaption></figure></div> | Mask                                                                                                              | Yes             |
|                  | <div><figure><img src="/files/iqwmoIBX2svO5BLaTRUJ" alt=""><figcaption></figcaption></figure></div> | Mix                                                                                                               | Yes             |
|                  | <div><figure><img src="/files/hTaRuzgjlHh2gtsYn68X" alt=""><figcaption></figcaption></figure></div> | MultiTitle                                                                                                        | No              |
|                  | <div><figure><img src="/files/Jc8F5NBcl185GEx2v443" alt=""><figcaption></figcaption></figure></div> | Noise                                                                                                             | Yes             |
|                  | <div><figure><img src="/files/zPvyfQQVwexQXDLm1YGh" alt=""><figcaption></figcaption></figure></div> | OSL Map                                                                                                           | Partial Support |
|                  | <div><figure><img src="/files/EcvHgSTg09wx3AWT2sfG" alt=""><figcaption></figcaption></figure></div> | Output                                                                                                            | Partial Support |
|                  | <div><figure><img src="/files/dgj2XlYsUAKmdu4J60nG" alt=""><figcaption></figcaption></figure></div> | Particle Age                                                                                                      | No              |
|                  | ![](/files/WgRivoSwUFmXs8fISYRa)                                                                    | Particle MBlur                                                                                                    | No              |
|                  | <div><figure><img src="/files/hs9v4F1kEbtBV4un0uP7" alt=""><figcaption></figcaption></figure></div> | Perlin Marble                                                                                                     | Yes             |
|                  | <div><figure><img src="/files/oFS1PkbFPJefYVwzOeTM" alt=""><figcaption></figcaption></figure></div> | RGB Multiply                                                                                                      | Yes             |
|                  | <div><figure><img src="/files/5Ek1BOtQEKQ5pCCRsbQr" alt=""><figcaption></figcaption></figure></div> | RGB Tint                                                                                                          | Yes             |
|                  | ![](/files/9ixFIWlpfQIiyHpeJnph)                                                                    | ShapeMap                                                                                                          | Yes             |
|                  | <div><figure><img src="/files/FN1ZLoGlf3Le6fDMEuEa" alt=""><figcaption></figcaption></figure></div> | Smoke                                                                                                             | Yes             |
|                  | <div><figure><img src="/files/hpc3jlZ2pH9nGjDslO0N" alt=""><figcaption></figcaption></figure></div> | Speckle                                                                                                           | Yes             |
|                  | <div><figure><img src="/files/nr7QgxYd8itjaERQRYo0" alt=""><figcaption></figcaption></figure></div> | Splat                                                                                                             | Yes             |
|                  | <div><figure><img src="/files/uAw9rBplZtiBPjIhni9D" alt=""><figcaption></figcaption></figure></div> | Stucco                                                                                                            | Yes             |
|                  | <div><figure><img src="/files/R8JOZSaEOMXV7pF7YUsk" alt=""><figcaption></figcaption></figure></div> | Substance                                                                                                         | Yes             |
|                  | <div><figure><img src="/files/9chtdlhR4KhRYy5b9R7d" alt=""><figcaption></figcaption></figure></div> | Substance2                                                                                                        | Yes             |
|                  | <div><figure><img src="/files/cN81Y0QDC4re4gvgLcsN" alt=""><figcaption></figcaption></figure></div> | Swirl                                                                                                             | Yes             |
|                  | <div><figure><img src="/files/yqHsQyf4guzQqJspdvrb" alt=""><figcaption></figcaption></figure></div> | TexMap                                                                                                            | Yes             |
|                  | <div><figure><img src="/files/BkrqWk3KYkFJdUOgKAjG" alt=""><figcaption></figcaption></figure></div> | TextureObjMask                                                                                                    | Partial Support |
|                  | <div><figure><img src="/files/kpVWj3Jbxl6vkiDfb9XF" alt=""><figcaption></figcaption></figure></div> | Tiles                                                                                                             | Yes             |
|                  | <div><figure><img src="/files/1Hrx1yLkLBY0Ea13XSfN" alt=""><figcaption></figcaption></figure></div> | Vector Displacement                                                                                               | No              |
|                  | <div><figure><img src="/files/u7b3rvTYAboJf3hQ8mHf" alt=""><figcaption></figcaption></figure></div> | Vector Map                                                                                                        | Yes             |
|                  | <div><figure><img src="/files/qR2PldXP9kdJiTNWQrdH" alt=""><figcaption></figcaption></figure></div> | VertexColor                                                                                                       | Yes             |
|                  | <div><figure><img src="/files/uUhslAiuXLM6GiSRkJiY" alt=""><figcaption></figcaption></figure></div> | Waves                                                                                                             | Yes             |
| **V-Ray Maps**   | <div><figure><img src="/files/X1vXmalPp6Mxln9s3wag" alt=""><figcaption></figcaption></figure></div> | VRayBitmap (VRayHDRI)                                                                                             | Yes             |
|                  | <div><figure><img src="/files/SNs89EH5ePEPRNWVG9hJ" alt=""><figcaption></figcaption></figure></div> | VRayBump2Normal                                                                                                   | Yes             |
|                  | <div><figure><img src="/files/AkZL8ec48tLwUKltl6Zf" alt=""><figcaption></figcaption></figure></div> | VRayColor                                                                                                         | Yes             |
|                  | <div><figure><img src="/files/GQ2qw9Vp8msdwtSKqEFn" alt=""><figcaption></figcaption></figure></div> | VRayColor2Bump                                                                                                    | Yes             |
|                  | <div><figure><img src="/files/67ZmQtKAwFSv1UBDNREJ" alt=""><figcaption></figcaption></figure></div> | VRayCompTex                                                                                                       | Yes             |
|                  | <div><figure><img src="/files/41VPxYSz2lnEVUzWVxXK" alt=""><figcaption></figcaption></figure></div> | VRayCurvature                                                                                                     | No              |
|                  | <div><figure><img src="/files/okkWsO2CtY13Tciu4uJE" alt=""><figcaption></figcaption></figure></div> | VRayDirt                                                                                                          | Partial Support |
|                  | <div><figure><img src="/files/sQr7rC2Cg4SHixq1vUmN" alt=""><figcaption></figcaption></figure></div> | VRayDistanceTex                                                                                                   | No              |
|                  | <div><figure><img src="/files/Ajfwz0HcAF1fQJXit7dE" alt=""><figcaption></figcaption></figure></div> | VRayEdgesTex                                                                                                      | Yes             |
|                  | <div><figure><img src="/files/q2LEEaNW8ygL6bxt3CQf" alt=""><figcaption></figcaption></figure></div> | VRayFakeFresnelTex [2](https://docs.chaos.com/display/LAV/V-Ray+for+3ds+Max+Features#VRayfor3dsMaxFeatures-notes) | –               |
|                  | <div><figure><img src="/files/ksLTc0CB8iLLIT5rMRT0" alt=""><figcaption></figcaption></figure></div> | VRayGLSLTex                                                                                                       | No              |
|                  | <div><figure><img src="/files/4KGlw3oNGcpyBxQcDpZG" alt=""><figcaption></figcaption></figure></div> | VRayHairInfoTex                                                                                                   | No              |
|                  | <div><figure><img src="/files/ViWoiE5OzMRGuVIsVoWu" alt=""><figcaption></figcaption></figure></div> | VRayHDRI(VRayBitmap)                                                                                              | No              |
|                  | <div><figure><img src="/files/auUyZmcJHu8TIlQ9gBfe" alt=""><figcaption></figcaption></figure></div> | VRayICC                                                                                                           | No              |
|                  | <div><figure><img src="/files/lPai23g0pbeedR4gxNYY" alt=""><figcaption></figcaption></figure></div> | VRayLut                                                                                                           | No              |
|                  | <div><figure><img src="/files/yFf4efeJbRiUdjQvv6cm" alt=""><figcaption></figcaption></figure></div> | VRayMultiSubTex                                                                                                   | Yes             |
|                  | <div><figure><img src="/files/3wLukhfy65N4DdVZJQaN" alt=""><figcaption></figcaption></figure></div> | VRayNoiseTex                                                                                                      | Yes             |
|                  | <div><figure><img src="/files/A0UgyUkNUOuZUa67Cul0" alt=""><figcaption></figcaption></figure></div> | VRayNormalMap                                                                                                     | Yes             |
|                  | <div><figure><img src="/files/RY9VNKoXNEkQk21kJC1T" alt=""><figcaption></figcaption></figure></div> | VRayOCIO                                                                                                          | No              |
|                  | <div><figure><img src="/files/YJljupJrmfWHSUhWusSo" alt=""><figcaption></figcaption></figure></div> | VRayOSLOutputSelector                                                                                             | No              |
|                  | <div><figure><img src="/files/Bhz6AhCa4xKje6wgRQKN" alt=""><figcaption></figcaption></figure></div> | VRayOSLTex                                                                                                        | No              |
|                  | <div><figure><img src="/files/rIZ6ERDScdsH3y3FVAcQ" alt=""><figcaption></figcaption></figure></div> | VRayParticleTex                                                                                                   | No              |
|                  | <div><figure><img src="/files/hhAg9fSlTqNAn4ZVWJkj" alt=""><figcaption></figcaption></figure></div> | VRayPointCloudColor                                                                                               | No              |
|                  | <div><figure><img src="/files/urljYwXn4eyazqjjT0r6" alt=""><figcaption></figcaption></figure></div> | VRayPluginNodeTex                                                                                                 | No              |
|                  | <div><figure><img src="/files/EH0u1XoPDdyMxlh2A6fV" alt=""><figcaption></figcaption></figure></div> | VRayPtex                                                                                                          | No              |
|                  | <div><figure><img src="/files/qsW0R6fnPtr4IleGUgCn" alt=""><figcaption></figcaption></figure></div> | VRaySamplerInfoTex                                                                                                | No              |
|                  | <div><figure><img src="/files/AdZnZ4gApVcH2KgbTR4D" alt=""><figcaption></figcaption></figure></div> | VRaySky                                                                                                           | No              |
|                  | <div><figure><img src="/files/NaArI04d9hjGTiU0wGLI" alt=""><figcaption></figcaption></figure></div> | VRaySoftbox                                                                                                       | No              |
|                  | <div><figure><img src="/files/KxffcdnaEWm5jHgT0WL9" alt=""><figcaption></figcaption></figure></div> | VRayTriplanarTex                                                                                                  | Partial Support |
|                  | <div><figure><img src="/files/PSJxw9mR0HKjgUyUhcfO" alt=""><figcaption></figcaption></figure></div> | VRayUserColor                                                                                                     | Yes             |
|                  | <div><figure><img src="/files/fI1nagvNOb3EjITs7yep" alt=""><figcaption></figcaption></figure></div> | VRayUserScalar                                                                                                    | Yes             |
|                  | <div><figure><img src="/files/GCvNnNeIh7uCXEMjlbd2" alt=""><figcaption></figcaption></figure></div> | VRayUVWRandomizer                                                                                                 | Yes             |
| **Chaos Maps**   | <div><figure><img src="/files/9krQibnOiYnKEpNxMOLo" alt=""><figcaption></figcaption></figure></div> | ChaosScatterSurfaceColor                                                                                          | No              |

### Lights

<table><thead><tr><th width="125.66665649414062">Light Category</th><th></th><th></th><th>Light Type and Parameter</th></tr></thead><tbody><tr><td><strong>Vray</strong></td><td><p>Vray Light</p><div><figure><img src="/files/7K16oUlmjpyuLf2MuxK1" alt=""><figcaption></figcaption></figure></div></td><td>Plane</td><td><p>Yes</p><ul><li><p>Plane Light</p><ul><li>Postion</li><li>Scale(Length&#x26;Width)</li><li>Color/Color Temperature</li><li>Units</li></ul></li></ul></td></tr><tr><td></td><td></td><td>Dome</td><td>Yes, supports HDRI</td></tr><tr><td></td><td></td><td>Sphere</td><td>Yes</td></tr><tr><td></td><td></td><td>Mesh</td><td>Yes</td></tr><tr><td></td><td></td><td>Disc</td><td><p>Yes</p><ul><li><p>Disc Light</p><ul><li>Postion</li><li>Scale(Length&#x26;Width)</li><li>Color/Color Temperature</li></ul></li></ul></td></tr><tr><td></td><td>Vray IES</td><td>/</td><td>Yes. Transfer IES file and Rotation parameters if there's IES file</td></tr><tr><td></td><td>Vray AmbientLight</td><td>/</td><td>/</td></tr><tr><td></td><td>Vray Luminaire</td><td>/</td><td>/</td></tr><tr><td></td><td>Vray SUN</td><td>/</td><td>/</td></tr></tbody></table>

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
| Method 1 | <div><figure><img src="/files/KI3Yq9rnfJeua9ffFERY" alt=""><figcaption></figcaption></figure></div> | From Rendering - Environment                               |
| Method 2 | <div><figure><img src="/files/mtyNZBttbKK0hI52Utgn" alt=""><figcaption></figcaption></figure></div> | Add VRayLight from the Lights menu and select Type as Dome |


---
