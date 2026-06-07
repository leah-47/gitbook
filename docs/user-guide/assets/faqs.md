---
title: "FAQs"
source_url: https://docs.d5render.com/user-guide/assets/faqs
fetched: 2026-06-07
---

# FAQs

## Why is the button for the Assets grey and unclickable?

It is not supported to add models to the scene in render (image/video) mode. Just exit the rendering mode.

<figure><img src="/files/zoyf3uLluJl8mZhGvR7I" alt="" width="563"><figcaption></figcaption></figure>

## Why are there watermarks/does it display D5 PRO ONLY on assets in the scene?

The watermarked assets are for D5 Pro version only.&#x20;

Just log in to your Pro/Edu/Teams account to hide the watermarks on assets.

<figure><img src="/files/5xLX5JBcAjHZfrPcceBc" alt="" width="563"><figcaption></figcaption></figure>

## How to edit the material of a model in Assets Library? How to modify the color of a plant in Assets Library?

> Models from Assets Library are unlocked by default when placed in the scene.&#x20;

* When the model is unlocked, the selected model will be defaulted to editing status.
* If you need to adjust the material, you need to lock the model, or use the Material Picker (default shortcut is i) to pick up the material directly.

> Specifically, please refer to: [How to select material in the scene?](../material/how-to-select-material-in-the-scene.md)

## Why doesn't the plant in the scene move with the wind?

#### <mark style="background-color:purple;">1. Use plants not supporting wind movement</mark>

All dynamic models in the assets library will have an individual icon on their thumbnails.

* This icon in the plant categories means that it supports wind movement or you can also filter the dynamic models in the assets library.

<div align="left"><figure><img src="/files/236st5hRgglgDCN8Tt32" alt="" width="563"><figcaption></figcaption></figure></div>

2\. The dynamic mode may not be enabled.&#x20;

3\. The wind option may not be enabled.&#x20;

## Why doesn't the particle effect move?

#### The dynamic switch in the Display-Mode is not turned on.

The "Dynamic" button is mainly used to control whether or not to preview the movement of dynamic elements in the scene. For example: cloud movement, plant wind movement, character animation, etc. To preview the wind effect, this switch needs to be turned on.

<div align="left"><figure><img src="/files/3UKVRC2sfjdnobW98cEA" alt="" width="563"><figcaption></figcaption></figure></div>

## Why is the dynamic character static in the output animation?

It is needed to add keyframes to the **dynamic characters** before outputting them in animation mode.

&#x20;You can refer to the keyframe tutorial:



## Why does the plant gradually revert to its original value after adjusting the base color or base color map, as the distance between the plant and the camera increases?&#x20;

This is within expectation if the plants showing this effect are low poly plants.&#x20;

Due to the LOD (Level of Detail) processing of the asset, when the camera is farther away from the plant model, it will use a lower complexity model (i.e., fewer polygons and details), which reduces the rendering burden and improves the rendering efficiency.&#x20;

Suggestion: Users can turn off LOD in Preference to get normal output (but the preview will still restore the original value).

<figure><img src="/files/FrpNx6TqnmjQdSZWCBdW" alt=""><figcaption></figcaption></figure>


---
