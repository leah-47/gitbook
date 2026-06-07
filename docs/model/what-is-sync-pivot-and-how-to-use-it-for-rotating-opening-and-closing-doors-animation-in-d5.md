---
title: "What is \"Sync Pivot\" and how to use it for rotating/opening and closing doors animation in D5?"
source_url: https://docs.d5render.com/model/what-is-sync-pivot-and-how-to-use-it-for-rotating-opening-and-closing-doors-animation-in-d5
fetched: 2026-06-07
---

# What is "Sync Pivot" and how to use it for rotating/opening and closing doors animation in D5?

> Similar question:
>
> \- How to modify the axis position/pivoting point of a model?



## Overview

In D5 render, the axis of the model will be placed at the bottom center of the model by default.&#x20;

<mark style="background-color:purple;">You can't modify the axis position directly, but you can combine the</mark> <mark style="background-color:purple;"></mark><mark style="background-color:purple;">**"Sync Pivot"**</mark> <mark style="background-color:purple;"></mark><mark style="background-color:purple;">and keyframe function to create the door opening/closing animation.</mark>&#x20;

Please refer to the following method:

1. Select a separate door model, and move the axis of the model in the modeling software to the door axis.
2. Place the door axis to the world coordinate origin (0, 0, 0) of the modeling software.
3. Import the model into D5 and select "Sync Pivot" .
4. Use keyframes in D5 to realize the door opening and closing animation.

## FAQ

### What is the difference between Sync Pivot and Sync Coordinates?

1. **Sync Pivot**: Synchronizes the world coordinate origin in the modeling software to the origin of the axes of your entire model.
2. **Sync Coordinates**: Synchronize the world coordinates position of the model in the original modeling software with D5.&#x20;

* **Sync Pivot** is to synchronize axes, the axes' position will change, not the model.
* **Sync Coordinates** is to synchronize model position, the coordinate axis will remain at the bottom center of the model.


---
