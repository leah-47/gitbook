---
title: "Why prompt 'The number of Vegetation in the scene has reached its limit'?"
source_url: https://docs.d5render.com/user-guide/common-pop-up-windows/why-prompt-the-number-of-vegetation-in-the-scene-has-reached-its-limit
fetched: 2026-06-07
---

# Why prompt 'The number of Vegetation in the scene has reached its limit'?



D5 has a plant carrying limit currently at 30 million. This number is mainly composed of: brush/scatter/path or drawn plants, plants placed in the scene and terrain grass.

Generally, the capacity of these plants is enough for large scenes; however, if the scene uses terrain grass in a large area, and the density of terrain grass is relatively high, it will be easier to trigger the "plant limit" limit. After triggering this limit, you can delete some brush plants/terrain grasses first.

Therefore, if you only need grass in distant view, you can use grass mapping; if you need to use grass in close view, you can try to use brush to draw some grass, which can alleviate the problem of plant limit.


---
