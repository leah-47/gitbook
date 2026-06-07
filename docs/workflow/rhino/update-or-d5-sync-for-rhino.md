---
title: "Update | D5 Sync for Rhino"
source_url: https://docs.d5render.com/workflow/rhino/update-or-d5-sync-for-rhino
fetched: 2026-06-07
---

# Update | D5 Sync for Rhino

## Ver. 0.12.0.0028 

`Release date: 2024.1.4`

#### New and Improvement

* Support Rhino 8
* Optimized texture UV mapping

#### Fixes 

* Fixed some known bugs

***

## Ver. 0.10.0 

`Release date: 2022.10.25`

#### **New and Improvement**

* New UI and interactive experience
* Automatic update optimization — click any button of D5 Converter to trigger the update pop-up
* Support Custom mapping, as well as world coordinate system (WCS) mapping method for textures.
* Improved material mapping logic
* Add \[Sync/Update] progress bar data display
* Add an uninstall program on the system start menu
* Support AMD graphics card

#### **Fixes**

* Program crashes when synchronizing a very large scene
* Installation failure in some special situations

***

## Ver. 0.9.0 

`Release date: 2022.4.26`

#### **New and Improvement**

* Add version information to the command line

#### **Fixes**

* Emission parameters of custom materials fail to sync
* When the base color of the custom material is black, it appears white in D5
* When the emission multiplier of PBR is greater than 1, the color difference is large after synchronization to D5
* The hidden state of layer is not synchronized to D5
* Now D5 converter can sync every curve from different materials correctly.

***

## Ver. 0.8.0 

`Release date: 2022. 2. 28`

#### **Fixes**

* Fix the issue that sync hangs due to importing model operations.
* Fix the issue that textures get lost when a model goes through multiple hide/sync operations
* Fix the camera view sync instability under the two-point perspective view

#### **Improvement**

* The imported lights in D5 Render will not be removed after they are hided in Rhino and synchronized again.
* The emission of PBR materials in Rhino can be synchronized to D5 Render as the intensity of emissive materials, and the value is fixed to 10
* The converter will not create light groups in D5 until a light object is inserted in Rhino.

***

## Ver. 0.7.0 

`Release date: 2021. 11. 10`

#### Features 

#### One-click to launch D5 Render in Rhino 

* Import the new models into D5 Render to start real-time rendering
* When a model file needs to be modified during rendering, start sync to create a connection with the original model or replace it with the new model

#### Model/Material/Scene Sync 

* After the current model has been edited in Rhino, quickly sync the new model and materials to D5 Render by the Sync button, while keeping the materials and scene parameters that had been adjusted in D5 Render
  * Support the mapping of PBR materials for Rhino 7
  * Support the mapping of basic materials for Rhino 6
  * Support the sync of VisualARQ data
* Support the sync of all scenes from NamedView

#### View Sync 

* Keep the views of Rhino and D5 Render consistent when syncing
* Support one-click to turn view sync on or off

#### Light Sync 

* Support the sync of Spotlight, Point light, Rectangular light, and Linear light.

#### AutoUpdate Notification 

## Known Issues & Solutions 

1. It is not supported to directly sync the world coordinate data for textures’ UV, so we need to turn on \[Triplanar] for materials in D5 Render manually.
2. Texture offset is not supported for now.
3. The orientation of Rectangular lights in D5 Render may not match their source Linear lights in Rhino, which needs to be modified manually.

***

## Supported versions 

Rhino 6.1 and above


---
