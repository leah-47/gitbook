---
title: "What is the object list? How to manage the resources in a scene?"
source_url: https://docs.d5render.com/user-guide/resource/what-is-the-object-list-how-to-manage-the-resources-in-a-scene
fetched: 2026-06-07
---

# What is the object list? How to manage the resources in a scene?

Resources added to the project will be displayed here in a list.&#x20;

Models, lights, particles, and other resources placed in the scene will be displayed in the list and support for shortcuts.&#x20;

Resource information entries in the list can be set using the right-click menu options.

<figure><img src="/files/Z36Ygne2fKu5W5gRTCwd" alt="" width="270"><figcaption></figcaption></figure>

## Lock and Unlock

Locked and unlocked are the two most commonly used states in the list. For models, it is not possible to directly select the model in the scene, but the functions of the list menu and the parameters in the right sidebar remain available and disconnect from the "Locked" behaviour.&#x20;

When the model is locked, you can select the material with the mouse to edit it, instead of using the "Select Material Tool".&#x20;

Once the model is unlocked, you can make adjustments to the model in the scene. If you want to select the material of the model, you can use the "Select Material Tool".

<figure><img src="/files/MbwOIb39WMybPKarMPUj" alt="" width="358"><figcaption></figcaption></figure>

## Sync pivot

After selecting the model in the scene and clicking the "Sync pivot" button on the right menu bar, it supports to synchronize the modelling coordinates to be displayed in D5. It is convenient to create door opening and closing animation.

> In video mode, models that have had keyframes added will be cleared of keyframe data after switching axis positions.

<figure><img src="/files/iMTgOn4RyhQyk6l3ArGZ" alt="" width="224"><figcaption></figcaption></figure>

## Multi-select and Group

> In the list, use the **Ctrl** or **Shift** keys to multi-select entries.&#x20;
>
> When performing a multi-select operation, the independence of each object is preserved and the operation after multi-selection is considered as a batch operation.

1. In the scene, use **Ctrl** to click on different models or light sources to multi-select them, or hold down Ctrl and drag the mouse to box them. Use **Ctrl + G** to group them.&#x20;
2. The elements in the list can be sorted by free dragging. You can create groups according to certain rules and then drag models into the groups.
3. When multiple selections or groups are of different species, they can be moved and rotated in unison. When multiple selections or groups are of the same type (e.g. 5 spotlights selected at the same time) the parameters can be adjusted uniformly.&#x20;
4. **Double-click** in the scene to directly select elements in the group for editing operations.
5. A new group can be created by right-clicking on the blank space of the list. The group structure supports **up to 3 levels** of nesting.&#x20;

<figure><img src="/files/pDzRbYeCnvaHvnvShmne" alt=""><figcaption></figcaption></figure>

> The difference between the behaviour of multi-selection and grouping is that, e.g., for rotational behaviour, the group rotates as a whole when rotating, revolving around the group's axis point; for multi-selection, each object rotates along its own axis.

<figure><img src="/files/YFccwvAMzFSO6vicz0x4" alt="" width="563"><figcaption></figcaption></figure>

## Filter and Search

By using the filter function below the list, models of different categories in the scene, such as plants, people, vehicles or imported models are displayed by categories. After filtering, only the filtered categories can be selected in the main scene, other categories of models cannot be selected.

<figure><img src="/files/YL0D3faOJzVETU2vXi0Z" alt="" width="324"><figcaption></figcaption></figure>

The entries in the list are searched based on keywords, and the search results are highlighted.

## Object list sorting&#x20;

When objects are added or grouped, the entries will be arranged below the selected entries. When ungrouping, the top element in the list will be the top element, and the elements in the group will be sorted downwards accordingly.

## FAQ

### Q : Why does hiding or showing a model in the object list not show up in the preview interface?

The model is hidden in the layer settings, thus hiding or showing the model in the object list will always not be shown in the preview interface.

<figure><img src="/files/osIz9J6NgBrSMJgspH4v" alt="" width="563"><figcaption></figcaption></figure>

### Q : Why doesn't the model show up when imported directly into D5?

There may be the following reasons and solutions:

* Imported models will exist in the Resource list - Imported list. You need to manually click the models to place them in the scene.

<div align="center"><figure><img src="/files/HyEZPXfIZe1Wi3G2bt15" alt="" width="174"><figcaption></figcaption></figure></div>

* Please check if the device you are using has installed encryption software. D5 may not be able to read models, or model material data, due to encryption software. It is recommended to add the D5 renderer to the whitelist of the encryption software, or decrypt the file before importing it into D5.


---
