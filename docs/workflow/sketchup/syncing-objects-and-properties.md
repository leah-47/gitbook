---
title: "Syncing Objects and Properties"
source_url: https://docs.d5render.com/workflow/sketchup/syncing-objects-and-properties
fetched: 2026-06-07
---

# Syncing Objects and Properties

This plugin supports synchronisation of objects and attributes between Sketchup and D5 Render for collaborative work across software. Below is a description of syncing objects and attributes:



## Details of Syncing Objects and Properties

### Syncing Model

#### Supported properties:

* 3D Transformations (Pan/Rotate/Scale)
* Component
* Material Assignment
* Outliner (show/hide)
* Tag (show/hide)

#### Not supported yet:

* Tag/Layer

#### Notes:

* SU has double-sided materials, while D5 only supports single-sided materials (front materials). If there are double-sided materials in the scene, it may lead to rendering errors.









### Syncing Material

#### Version Compatibility:

* SU version 2024 and earlier: Supports Basic Color / Opacity / Texture / UV.
* SU version 2025: Added PBR material support.

#### Syncing Rule:

* Material priority：Front Material > Parent Component Material > Reversed Material&#x20;
* How to revert back to material in SU after modification within D5:
  * Method 1: Modifying material names in Sketchup to trigger synchronisation
  * Method 2: After clicking ‘Reset’ parameters in D5, then re-adjust parameters in SU.

### Syncing Light



#### Supported types:

* Point Light / Spot Light / Strip Light/ Rect Light/ Disc Light
* 3D transformation properties
* Outliner (show/hide)

#### Note:

* Light intensity to be calibrated at SU en

### Scene and Viewpoint

#### Supported:

* 3D transformation properties
* Perspective/Two-Point Perspective

### Geo and Sky

#### Supported:

* 'North Angle' parameter
* Sync 'time/date' parameters from 'Shade' panel in SU automatically

#### Not supported yet:

* HDRI Sky




---
