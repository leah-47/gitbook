---
title: "Why can't the model in the scene be selected?"
source_url: https://docs.d5render.com/model/why-cant-the-model-in-the-scene-be-selected
fetched: 2026-06-07
---

# Why can't the model in the scene be selected?

<mark style="background-color:purple;">It may be caused by the following reasons:</mark>

**1. The object is locked in the "Object" list (as shown below).**&#x20;

The locked model cannot be directly selected in the scene, but can be selected in the "Object" list. After unlocking, it can be selected in the scene.

<div align="left"><figure><img src="/files/tdKYL7YtOcBCZQWPh1h3" alt=""><figcaption></figcaption></figure></div>

**2. The layer where the object is located is locked.**

If the layer where the path is located is locked or hidden, the name of the object in the scene list will be grayed out.

<div align="left"><figure><img src="/files/FX9pxs0pfWKkBUBTVPYA" alt=""><figcaption></figcaption></figure></div>

**3. If the object is far away from the origin point** , due to precision limitations in calculations, it may be difficult to select the object. You can move the object back to the origin point to select it. Alternatively, you can select the object in the "Object" list and use the shortcut key "Z" to quickly focus on the selected model.

**4. The model is in a group (as shown below).**&#x20;

When the model is in a group, clicking once will select the entire group where the model is located, while double-clicking on the model will select the elements within the group.

<div align="left"><figure><img src="/files/bHsi7MYkJwXcV2Q8h1K2" alt=""><figcaption></figcaption></figure></div>

**5. Category filtering is enabled in the "Object" list.**&#x20;

When filtering resources of a specific category, only the filtered category can be selected in the scene.

> e.g.
>
> If light sources are filtered in the scene, only the light sources will be displayed in the "Object" list, and only the light sources can be selected in the scene.

<div align="left" data-full-width="false"><figure><img src="/files/C21O3wSKqYhigGepVMDS" alt=""><figcaption><p>Before</p></figcaption></figure> <figure><img src="/files/EUDdBzRWOq08wuBEkaTY" alt=""><figcaption><p>After</p></figcaption></figure></div>


---
