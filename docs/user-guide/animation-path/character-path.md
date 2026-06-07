---
title: "Character Path"
source_url: https://docs.d5render.com/user-guide/animation-path/character-path
fetched: 2026-06-07
---

# Character Path

## Draw Path <a href="#draw" id="draw"></a>

Select the Character Path tool, click it and select a model from the library. Up to 18 models can be added to the Character Path.

Please refer to:point_down:

[Draw Path](./draw-path.md)

## Path Parameters

Path-related parameters to adjust the movement and distribution of the path character model.

D5 has automatically set the spacing, position and speed randomness of the character, no need to adjust again.

### Density

"Density" controls the total number of models on the currently selected path. The exact number depends on the length of the path. When the density is minimal, the path will have at least one character model.

### Width

"Width" is used to control the side-by-side distribution of the character models. The larger the path width, the more characters can walk side by side.

### Direction

There are only two directions of character path movement, and the direction drawn along the initial path is specified as "forward". The forward and reverse movement of the path is toggled by a switch.

### On the ground

When the model surface is curved and uneven, the path does not fit the model surface completely, and the model on the path will float in mid-air. When you use the "On the Ground" function, the model will be automatically attached to the nearest model surface.


---
