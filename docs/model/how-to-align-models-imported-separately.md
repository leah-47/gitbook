---
title: "How to align models imported separately?"
source_url: https://docs.d5render.com/model/how-to-align-models-imported-separately
fetched: 2026-06-07
---

# How to align models imported separately?

Similar question:

\- How to align the axes of a model?

\- How to use the align function?

\- How to align the coordinates of different models?

## Overview

When the model is large and has lots of faces, using the D5 converter to export d5a may take up a lot of resources, and the process may be less efficient or even fail. You can first split the model according to the scene, and then export it separately. For example, split the building, plot, and environment, and then import them into D5 for alignment.

Similarly, modeling formats that support direct import can also be imported in chunks for alignment.

## Operation

#### Align

If the models are from the same model file, you can multi-select the models and select the "Align Coordinates" in the right sidebar. Then the selected models will be grouped into alignment according to the original modeling axes, keeping the relative position of the coordinates in the modeling software unchanged.

The rule of alignment is that the model selected later will move to the first selected model. That is, the position of the first selected model is fixed and the coordinates of other models will move.

<div align="left"></div>

#### Sync Coordinates

If the models are from different model files or even different modeling softwares, you can use the "Sync Coordinates" feature to restore the model directly to the absolute modeling coordinates. This function is in the resource list menu on the left side.



When you click on "Sync Coordinates", the view will move to the model's position at the same time.


---
