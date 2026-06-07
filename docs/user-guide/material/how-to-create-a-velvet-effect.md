---
title: "How to create a velvet effect？"
source_url: https://docs.d5render.com/user-guide/material/how-to-create-a-velvet-effect
fetched: 2026-06-07
---

# How to create a velvet effect？

Important material parameters related to velvet are:

* Normal: Used to simulate the bumpiness of the velvet fabric itself.
* Specular: Used to simulate the sheen of a velvet surface.

<div align="left"></div>

* Attenuation: The use of attenuation simulates the effect of a dense, flat, glossy pile on velvet. The whitening effect is more pronounced where the surface of the material is tangent to the camera's line of sight. The higher the Attenuation parameter, the more pronounced the whitening.
* AO: Ambient Occlusion channel, through the AO map and the base colour mapping positive slicing (multiplication), to enhance the corners and seams of the shadows, to enhance the role of the details of the three-dimensional sense of the role, used to simulate the surface of the velvet unique traces of kneading.



The "Velvet 01" and "Velvet 02" in the Material Library - Cloth - Velvet are the new velvet materials using this set of maps. You can combine more velvet materials based on the above principle by replacing the base colorr maps and adjusting the UV parameters according to the current usage scenario.


---
