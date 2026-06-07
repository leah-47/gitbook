---
title: "What is the correct naming convention when importing PBR maps with one click?"
source_url: https://docs.d5render.com/user-guide/material/what-is-the-correct-naming-convention-when-importing-pbr-maps-with-one-click
fetched: 2026-06-07
---

# What is the correct naming convention when importing PBR maps with one click?

The PBR material system contains two sets of workflows, the metallic/roughness system and the specularity/glossiness system, which D5 supports belongs to the metallic/roughness workflow. The texture imported by the user should conform to the suffix naming rules of this workflow in order to correctly identify the material effect.

The Metallic/Roughness workflow mapping suffix naming and mapping slot corresponding rules are as follows:

* \[ Base color ] slot：_color（_col） /_base color /_basecolor /_albedo
* \[ Specular ] slot：_specularLevel
* \[ Metallic ] slot：_metallic / _ metalness
* \[ Normal ] slot：_normal（_nrm） /_bump
* \[ roughness ] slot：_roughness(_rough)
* \[ AO ] slot: _ambient occlusion(_ao)
* \[ Opacity] slot：_opacity
* \[ Height ] slot：_displacement(_disp)/_height

Other mapping suffixes may cause incorrect effects or failure to import, so please correct them yourself. Among them, the normal mapping format used by D5 is Direct X.


---
