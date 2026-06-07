---
title: "Update | D5 LiveSync for SketchUp"
source_url: https://docs.d5render.com/workflow/sketchup/update-or-d5-livesync-for-sketchup
fetched: 2026-06-07
---

# Update | D5 LiveSync for SketchUp

## Ver.1.7.0.0001

`Release date: 20260106`

#### New and Optimizations 

1. Added compatibility and interchangeability between models imported via D5 LiveSync and directly imported .skp files to D5 3.0.
2. Supports parallel projection and two-point perspective for scene synchronization.
3. Supports synchronizing proxy assets from D5 Lite.
4. Supports installing D5 LiveSync for SketchUp for all users.
5. Enhanced sync efficiency and stability for live sync.
6. Optimized material display logic which first reads parent component materials when a SketchUp model face has no material applied.

#### Fixes 

1. Slow/stuck progress and crashes when exporting .d5a models.
2. Sync time build-up when linking with the same scene after synchronization breaks for multiple times.

#### Other Notes 

1. Sync with D5 version 2.9 and earlier is no longer supported.

***

## Ver.1.6.1.0020

`Release date: 20251016`

#### New 

1. Supports SU2026

***

## Ver.1.6.0.0015

`Release date: 20250715`

#### New (Requires D5 Render version 2.11) 

1. Supports syncing orthographic views.
2. Supports syncing disc lights.
3. Supports syncing HDRI files.
4. Added quick access to Help Center.

#### Optimization (Requires D5 Render version 2.11) 

1. Optimized sync of top/front/right/left/back/bottom views.

#### Fixes 

1. Fixed the issue where models would disappear or jump to a distant location, previously requiring users to explode or scale them in SketchUp as a workaround.

***

## Ver.1.5.0.0017 

`Release date: 20250319`

#### New 

1. Supports SU2025
2. Supports 2025 PBR Parameter Mapping
3. Supports syncing geo and sky from SketchUp

#### Fixes 

1. Occasional abnormal crashes of SU2024
2. Abnormalities in model coordinates and dimensions may occur when connecting for the first time.
3. Fredo’s morphing frame stretching feature leads to slower push/pull syncing of basic blocks.
4. Under some non-Chinese systems, if the installation path of D5 contains Chinese characters, the connection may fail.
5. Some particular scenes-abnormal hide/show status of tags during real-time synchronisation.
6. D5 crashes due to abnormal surfaces within the scene.

***

## Ver.1.4.0.0017 

`Release date: 20241120`

#### Fixes 

1. Fixed occasional SketchUp crashes caused by pushing and pulling models during linkage
2. Plugin loading failure caused by configuration file issue (manual deletion of D5LiveSync.conf file required)
3. SketchUp 2024 crashes when loading plugins on some Windows 11 systems
4. In some cases, materials modified in D5 for non-group models are lost
5. Fixed occasional SketchUp freezing caused by deleting models after disconnecting linkage
6. Fixed occasional plugin errors caused by grouping components with images during linkage

***

## Ver. 1.3.0.0035 

`Release date: 20240808`

#### New 

1. “Single Sync” incremental update button
2. Supports synchronizing model show/hide status when switching scenes
3. Supports synchronizing model show/hide status when tag visibility changes
4. Pop-up notification for abnormal texture information during the first linkage

#### Optimization 

1. Significant linkage performance improvements
2. Remember the toggle states of Live Update and View Sync buttons
3. Monitor the abnormal state of D5 and take action to either wait or disconnect in real-time synchronization

#### Fixes 

1. Slow disconnection from linkage
2. SU2024 crashes from sync plugin
3. D5 crashes after syncing from excessive SU components
4. Slow loading or errors when opening scenes with many lights in SU2024
5. Occasional linkage timeout errors with ‘connection abnormal’ messages
6. Material loss during initial file synchronization
7. Occasional abnormalities in other components caused by component updates
8. Occasional mesh or material modifications fail during linkage
9. Occasional model loss when entering or exiting a component during data transmission
10. Continuous light data sends occasionally trigger default light selection in D5
11. Incorrect display of exterior facade of the attached model when moving surfaces of this component in real-time
12. Errors in linkage and export caused by hiding the default layer “unlabeled”
13. Loss of material names when exporting .d5a models

***

## Ver. 1.2.0.0006

`Release date: 20240419`

#### **New**

1. Supports SketchUp 2024

#### **Fixes**

1. Fixed the issue of imported grouped SketchUp models getting stuck due to incorrect root group information
2. Fixed the issue of missing materials after synchronization caused by the non-existent drive where the Workspace is located.

## Ver：1.1.0.0033

`Release date: 20231214`

#### **New**

1. Supports export .d5a

## Ver：1.0.3.0001

`Release date: 20231020`

#### **New**

Supports SketchUp 2023.1.340

1. Open files from the welcome page to start a new scene

## Ver：1.0.1.0011

Release date: 20230907

#### **New**

1. Supports SketchUp 2020.1 and higher versions.
2. Added progress bar prompt for initial sync.

#### **Optimization**

1. Improved stability of live sync.

#### **Fixes**

1. Fixed the failure of the plugin loading for the first time in some environments.
2. Fixed the loss of models within D5 due to rapidly clicking to start sync multiple times.
3. Fixed the model misalignment after sync in some scenes.
4. Fixed the abnormal model coordinate positions after sync in some scenes.
5. Fixed the inability to sync images imported from SketchUp in real time.
6. Fixed the loss of models caused by disconnecting and re-linking during modifications within components.
7. Fixed the issue where real-time changes to material within components do not take effect.
8. Fixed the UV anomaly caused by modifying material within components.
9. Fixed the loss of material caused by showing components after disconnecting and re-linking during sync.
10. Fixed an error of abnormal connection that occurs when synchronizing scenes containing a large amount of grass material.

#### **Known issues**

1. Live sync delay when synchronizing scenes containing a large amount of grass material.
2. Use tags to hide items is not yet supported for live sync, disconnection and re-synchronization is required.
3. Switching scenes to hide items is not yet supported for live sync, and disconnection and re-synchronization is required.


---
