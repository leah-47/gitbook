---
title: "Why do models become displaced after replacement/update?"
source_url: https://docs.d5render.com/model/why-do-models-become-displaced-after-replacement-update
fetched: 2026-06-07
---

# Why do models become displaced after replacement/update?

> Similar question:
>
> \- Why does the brush plant produce an offset after updating/replacing the model?

## Solution:

1. **Import the model directly in D5** : **After importing the model, click the "Sync Coordinates" immediately.** Then, if you update the model, even the overall range (bounding box) of the model changes, the model will remain in place.&#x20;
2. **Use D5 Workflow Plugin** : If the D5 converter is used in the sync workflow, there will be no displacement issues.

<div align="left"></div>

## The reason for the issue:

The coordinates of the model that is imported directly into D5 is set to the default point A at the bottom center of the model.&#x20;

If the overall range(bounding box) of the model is changed after replacement, the position of the coordinate axis will be recalculated and changed to point B, which can cause displacement issues.

**By clicking the "Sync Coordinates" after selecting the model, the model will be restored to its absolute modeling coordinate position.**

> **Info:** **Note:**

**If the imported model is a .d5a file with group structures**, please **perform the ‘Sync Coordinates’ after the first import and after replacing the model, respectively**.




***

**e.g.**

(As shown in the figure below) if you have three models, a square, a circle, and a rectangle, and the coordinate origin of the models is at point A (D5's coordinate axis is set to the bottom center of the model by default).





***

This is why the model stays in place even if the bounding box changes.

<div align="center"></div>

<div align="center"></div>


---
