---
title: "Feature Introduction | D5 LiveSync for 3ds Max beta"
source_url: https://docs.d5render.com/workflow/3ds-max/feature-introduction-or-d5-livesync-for-3ds-max-beta
fetched: 2026-06-07
---

# Feature Introduction | D5 LiveSync for 3ds Max beta

## Download and Installation 

[https://www.d5render.com/workflow/3ds-max](https://www.d5render.com/workflow/3ds-max?_sasdk=fZ2xvYmFsXzQ5NjYy)

### Supported Versions 

* 3ds Max 2014-2016, 2018-2026
* VRay 3.6 and above, Corona 6.0\~13.0
* D5 Render 2.6 and later versions

## Feature introduction 

### Connect to D5 Render 

* Click ‘Connect to D5 Render’ to start livesync between 3ds Max and D5 Render. The current Max project will be imported in D5 as well. Models and materials edited in 3ds Max will be instantly updated in D5 with no need to manually click the update button.

### LiveSync /Pause 

* Click ‘LiveSync/Pause’ to pause or continue the livesync. When livesync is paused, adjustments of models and materials will not be synced into D5 in real time. Click the button again to resume the livesync process.

### View Switch 

* After enabling livesync between 3ds Max and D5, the viewports of Max and D5 will keep consistent.
* Click “View Switch” to break the connection.

### Send Scenes 

* Click the ‘Send Scenes’ button to send the standard/Vary/Arnold cameras to D5 Render scene list.

### Send Current Camera Motion Track 

* Send **the selected camera animations** from 3ds Max to D5.
* Supports batch sending of multi-selected cameras from 3ds Max into D5.

### Send Lights 

**Click ‘Send Lights’ to sync Standard/Corona/VRay/Arnold light sources into D5, reserving their type and position info. Supports adjusting the imported light sources in D5 Render.**

> Note: Vray Light Dome, Mesh and Ambient Light are not supported for now.

| 3ds Max Lights                         | 3ds Max Light Parameters                                                   | D5 Light Sources |
| -------------------------------------- | -------------------------------------------------------------------------- | ---------------- |
| Standard-Target/Free Spotlight         | Position, Attenuation on/off, Spotlight Cone - Hotspot, Orientation, Color | Spotlight        |
| Standard-Target/Free Directional Light | Cone - Hotspot, Color                                                      | Rect Light       |
| Standard-Omni Light                    | Color                                                                      | Point Light      |
| VRayLight                              | Plane - Position, Length and Width, Directional, Color and Temperature     | Rect Light       |
|                                        | Sphere - Position, Color                                                   | Point Light      |
|                                        | Disc - Position, Radius, Color and Temperature                             | Spot Light       |
| VRayIES                                | IES file, Rotation                                                         | Spot Light       |
| VRay Sun                               | Position, Direction                                                        | Spot Light       |
| Corona Light                           | IES file, color temperature/color                                          | Spot Light       |
|                                        | Rectangle - Position, Width, Color/Temperature                             | Rect Light       |
|                                        | Disk - Position, Color/Temperature                                         | Spot Light       |
|                                        | Sphere - Position, Color/Temperature                                       | Point Light      |
|                                        | Cylinder - Color/Temperature                                               | Rect Light       |
| Corona Sun                             | Position                                                                   | Spot Light       |
| Arnold Light                           | -                                                                          | Point Light      |
| Photometric light                      | -                                                                          | Point Light      |

### Export .d5a 

* Files of .max format can not be read by D5 Render, but can be converted into .d5a files through the LiveSync plugin for direct import into D5.
* When exporting files of .d5a format, the map resolution won’t be compressed. You can choose to export only selected objects or all of them as a single file.

<div align="left"></div>

* When “keep group hierarchy” is enabled, the exported .d5a files will reserve their group structure when importing in D5.
* The auto collapse feature is used to solve export problems with model positioning, normal map UV, and sealing lines. The latest settings are reserved.



### Export .skp 

* Supports converting model files into the .skp format to import into SketchUp and D5 Render.
* Supports two resolution options for Resize Bitmap: 512 \* 512 and 1024 \* 1024.
* Supports advanced options including Hide All Edges, Origin to Center, Merge Coplanar Faces and Including Hidden Objects.

<div align="left"></div>

### Settings 

#### 1. Check the version number and global settings

* Offers “Display choose sync method dialog” and “Automatically save scenes afer sync” options and auto retains your lastest settings.
* Automatically save scenes after sync: D5 Render will automatically alters the repetitive material names into different ones after the first sync with 3ds Max, preventing the set materials in D5 from being overwritten.

<div align="left"></div>

#### 2. Select coordinate switch method

* **X/Y Switch** is both the recommended and default switch method.

> Please stop the sync process if you find models are rotated or mispositioned.&#x20;
>
> * Change the coordinate switch method to the other one and try again.

#### 3. Sync structure of light component

> Commonalities：
>
> * Changes made to light position, orientation, and size in D5 Render will be reset when syncing light sources from Max to ensure consistency.
> * Other parameters, such as changing light names or grouping these lights, it only remains the same as in the modelling software when sync is first initiated, resyncing does not reset these parameters.
> * In the current version, if you delete synced lights in D5, subsequent updates/re-linking/clicking 'Send Lights' again will not resync the previously deleted lights to D5. Please note: If you **re-start the D5 file**, subsequent updates/re-linking/clicking 'Send Lights' again will resync the previously deleted lights to D5.

|              | Unsync                                                                                                        | Sync                                                                                                 |
| ------------ | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Where to Use | Users who are used to grouping lights in D5 can select ‘Unsync’ if there are not so many lights in the scene. | Users who get a lot of light groups/instances in the modeling software can select the ‘Sync’ option. |
| Differences  | Lights will be imported into D5 individually without group structure.                                         | Lights with the same attribute will be auto grouped after importing into D5.                         |

### Quick ProOptimize

* The Quick ProOptimize feature, located in the top menu bar, can reduce the number of faces and intersections to quickly simplify the model.

<div align="left"></div>

<div align="left"></div>

***

### Uninstallation 

* Method 1：\
  Go to Window System > Start Menu, right click on D5 LiveSync for 3ds Max and click ‘Uninstall’.
* Method 2：\
  Go to My Computer > Control Panel > Programs and Features to uninstall the program.

## FAQ 

### Q1 : **Can the previous D5 Sync for 3ds Max plugin work with D5 2.6?**

The previous D5 Sync plugin is compatible with D5 2.6.\
D5 LiveSync for 3ds Max only supports D5 2.6 and later versions, excluding D5 2.5.

### Q2 : **If I have created a scene in D5 2.5 using the D5 Sync plugin, can it be updated with the D5 Sync plugin in D5 2.6?**

Yes. You can open the scene in D5 2.6 and click the start button of the D5 Sync plugin in 3ds Max to start synchronization.

### Q3 : **If I have a scene created with D5 2.5, can it be updated with the D5 LiveSync plugin in D5 2.6?**

Yes. You can open the scene in D5 2.6, click ‘Connect to D5 Render’ in 3ds Max, and select the model to update in D5 Render. Then, livesync will begin.

### Q4 : **If I have a scene created with D5 2.6 using the D5 LiveSync plugin, can it be opened in D5 2.5?**

Yes. But please note that D5 LiveSync for 3ds Max only supports D5 2.6 and later versions. If the file is saved when File Compression is enabled in D5 2.6, it can not be opened in D5’s previous versions.

### Q5 : **If I have a scene created with D5 2.6 using the D5 LiveSync plugin, can it to be updated using the D5 Sync plugin?**

Yes. In this case, please first open the scene in D5 2.5/2.6 and find the model for livesync in the resource list. Right click on the model and change it to a non-livesync one. Open the scene again after saving it and click the ‘Start’ button of the D5 Sync plugin in 3ds Max to update the model and start synchronization again.


---
