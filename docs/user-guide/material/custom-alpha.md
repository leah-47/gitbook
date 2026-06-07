---
title: "What materials are the Custom Alpha templates suitable for? What are the special parameters?"
source_url: https://docs.d5render.com/user-guide/material/custom-alpha
fetched: 2026-06-07
---

# What materials are the Custom Alpha templates suitable for? What are the special parameters?

The only special parameter of this template is the "Opacity Map" parameter. But there is a slight difference with the "Opacity Map" in the Cloth material template. There is no semi-transparent effect here, the material is either **completely preserved or completely hollow**.&#x20;

Therefore, here it is recommended to use only black and white map to control the hollow effect.&#x20;

* White is the material that is preserved, and black corresponds to the hollow position.

![](/files/-Mker6UJPFSjcsgLKwHY)

> **Info:** In the range of 0\~255, Opacity Map gray value greater than 157, the corresponding material will be retained, and gray value less than 156, the corresponding material will be hollowed out.



---
