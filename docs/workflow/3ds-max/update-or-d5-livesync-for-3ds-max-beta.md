---
title: "Update | D5 LiveSync for 3ds Max beta"
source_url: https://docs.d5render.com/workflow/3ds-max/update-or-d5-livesync-for-3ds-max-beta
fetched: 2026-06-07
---

# Update | D5 LiveSync for 3ds Max beta

## Ver: 1.3.2.0053

`Release date: 20250812`

#### New and Optimization (Requires D5 Render version 2.11) <a href="#new-and-optimization-requires-d5-render-version-211-2" id="new-and-optimization-requires-d5-render-version-211-2"></a>

1. Supports syncing orthographic views.
2. Optimized light mapping with support for disc light and temperature/brightness sync.
3. Supports syncing IES profiles from Corona lights and Photometric lights.
4. Supports syncing built-in environments, dome lights of Corona and V-Ray, and HDRI.
5. Supports 3ds Max 2026 OpenPBR materials.
6. Supports V-Ray versions up to 7 and Corona versions up to 12.
7. Supports more material/texture nodes of V-Ray and Corona.
8. Optimized material template mapping with support for Foliage/Car Paint/Displacement/Fabric/Subsurface Scattering templates.

#### Fixes: <a href="#fixes-3" id="fixes-3"></a>

1. Fixed the material ID distribution logic for Corona floorgenerator.
2. FIxed crash caused by sync of Substance nodes.
3. Fixed the rotation of X-axis when importing camera tracks and views from Max.
4. Fixed the material panel did not appear after syncing of Max 2014 & Default highlight and normal values.

***

## Ver: 1.3.1.0003 <a href="#ver-1310003-4" id="ver-1310003-4"></a>

`Release date: 20250422`

#### New and Optimization <a href="#new-and-optimization-5" id="new-and-optimization-5"></a>

1. Supports 3dsMax 2026
2. Changed ‘Sync/Unsync structure of light component’ to global setting

#### Fixes <a href="#fixes-6" id="fixes-6"></a>

1. Fixed abnormality that D5 plug-ins are not recognized when installed in Chinese paths
2. Fixed the abnormality of exporting .d5a named in Chinese by machines in non-Chinese environments

***

## Ver: 1.3.0.0002

`Release date: 20241217`

### New and Optimization <a href="#new-and-optimization-2" id="new-and-optimization-2"></a>

1. Added single send option.
2. Optimized memory usage during the initial linkage.
3. During real-time linkage, the plugin will pause when D5 enters rendering mode but remain connected. It will resume functionality once rendering is stopped.
4. Recorded user preferences for single send or real-time sync, defaulting to the last selection for the next linkage.

### Fixes <a href="#fixes-3" id="fixes-3"></a>

1. Fixed data anomalies related to instance duplication and group editing.
2. Fixed occasional model position errors.
3. Fixed an issue where .d5a models exported as groups had a default 90° rotation on the Z-axis and sync coordinate errors when imported into D5 (this fix requires D5 version 2.9).

***

## Ver: 1.2.0.0007

`Release date: 20241028`

### New <a href="#new-2" id="new-2"></a>

1. Supports exporting with a 2-layer group structure

### Optimization <a href="#optimization-3" id="optimization-3"></a>

1. Optimized the layout of settings and export pages

### Fixes <a href="#fixes-4" id="fixes-4"></a>

1. Fixed the resetting issue of the cone angle and visible in reflections parameters for the VRay IES light(this fix requires D5 2.9 Version)

***

## Ver：1.1.0.0083

Release date: 20240425

### New

1. Supports 3ds Max 2025.
2. Supports livesync of light sources.
3. Added version update prompt in the Settings.
4. Added custom texture resolutions in the Settings.

### Optimization <a href="#optimization-3" id="optimization-3"></a>

1. Enhanced the efficiency of material updates when livesync is enabled.
2. Optimized lighting synchronization logic: Grouping and renaming lights in D5 are now unaffected by subsequent updates (requires D5 2.7).

### Fixes <a href="#fixes-4" id="fixes-4"></a>

1. Fixed the occasional crashes occurring during scene synchronization.

***

## Ver：1.0.1.0064

Release date: 20240109

### **Fixes**

1. Occasional crashes for 3ds Max during sync
2. Occasional failure to pick up materials for some models sync
3. Inconsistency between coordinate system conversion method and UI display in some cases
4. Error popup when exporting .d5a thumbnail
5. Too light text for light mode UI

<https://forum.d5render.com/t/d5-livesync-for-3ds-max-beta/25499>


---
