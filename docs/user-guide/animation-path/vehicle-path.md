---
title: "Vehicle Path"
source_url: https://docs.d5render.com/user-guide/animation-path/vehicle-path
fetched: 2026-06-07
---

# Vehicle Path

## Draw Path <a href="#draw" id="draw"></a>

Select the Vehicle Path tool, click it and select a model from the library. Up to 18 models can be added to the Vehicle Path.

Please refer to:point_down:

[Draw Path](./draw-path.md)

## Path Parameters

### Density

"Density" controls the total number of models on the currently selected path. The exact number depends on the length of the path. When the density is minimal, the path will have at least one Vehicle model.

### Lane

The "lane" parameter allows you to select whether the lane is a "Single Direction" or a "Dual Directions" lane.

In "Single" lanes, all vehicles travel in the same direction, the minimum number of lanes is "1" and the maximum number of lanes is "5". In "Dual" lanes, vehicles travel in opposite directions with a minimum number of "2" lanes and a maximum of "10" lanes.

### Direction

Depending on the traffic rules, you can set "Left hand" or "Right hand".

### Width

The "Lane Width" corresponds to the real-world data in "meters". Default width is 3.5 m, adjustable range is 3m to 5m.

### Speed

The "Speed" value is in "kilometers per hour (km/h)" and the default speed is 40 km/h. The speed can also be set in the video rendering mode.

### On the Ground

When the model surface is curved and uneven, the path does not fit the model surface completely, and the model on the path will float in mid-air. When you use the "On the Ground" function, the model will be automatically attached to the nearest model surface.


---
