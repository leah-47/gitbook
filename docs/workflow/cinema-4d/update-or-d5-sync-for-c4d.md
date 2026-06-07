---
title: "Update | D5 Sync for C4D"
source_url: https://docs.d5render.com/workflow/cinema-4d/update-or-d5-sync-for-c4d
fetched: 2026-06-07
---

# Update | D5 Sync for C4D

### What's new

#### Ver. 3.0.0.0020

`Release date: 2026.01.28`

**New:**

* Added support for **Cinema 4D 2026**

**Fixed:**

* Occasional incremental sync issues after hiding or unhiding models
* Some models could not be synced after enabling Render Instances
* Abnormal face incremental sync when performing specific operations in Polygon Mode
* Incorrect number of lights synced when using multiple Cloner light groups
* Incremental sync issues after using Connect Objects and performing delete or boolean operations
* Textures were intercepted and not sent when normal maps were in EXR format

***

#### Ver. 2.10.0.0010 

`Release date: 2025.03.19`

**New**

* Supports Cinema 4D 2025
* Optimized syncing of lights, supporting keeping group structures etc. created in D5

**Fix**

* .D5a files exported from some models misplaced after being imported into D5

**Known Issues**

* Supports keeping light parameters modified in D5, light groups created, etc., except for the size and position of the lights.
* The compatibility of materials in Redshift 3.6 & Redshift 2025 versions is incomplete. Too complex materials may not be synced to D5, and will just display white.

***

#### **Ver. 2.6.6.0029**

`Release date: 2024.12.14`

* Supports Cinema 4D 2024
* Supports sync camera animations into D5 Render (Supports Octane/Corona/Redshift/Standard cameras)
* Supports Redshift 3.5 (Supports the new node editor of Cinema 4D 2024/2023/R25 + Redshift 3.5.x and the node editor of Cinema 4D S24/R23/S22/R21 + Redshift 3.5.x)
* Supports thumbnails for the exported .d5a files
* Added compatibility with various units for the project files.

**Optimizations**

* Supports more material nodes when syncing or exporting .d5a files.
* Auto Update Notification.

**Known Issues**

* Camera animation sync is only available with D5 Render 2.6 and later versions.
* Currently, the combo of Cinema 4D S26 and Redshift 3.5.x is not supported.
* To properly sync the normal maps to D5 Render, it is necessary to establish a connection between the Redshift Normal Map and the primary material node via the RS Bump Map node.
* Materials created using the node editor in Cinema 4D version 25 or later can not be synced into D5 when they are opened in those previous Cinema 4D versions.

***

#### Ver. 0.5.0 

`Release date: 2022.11.16`

**New**

* New UI and interactive experience
* Support Cinema 4D S26 and 2023
* Display the sync state
* Optimize material mapping and map baking
* Add an uninstall program on the system start menu
* Support AMD graphics cards
* Support incremental synchronization
* Add a setting to control texture baking resolution

**Fix**

* Some scenes with unsupported components failed to sync
* Some materials went missing after sync

***

#### Ver. 0.4.0 

`Release date: 2022.2.28`

**New**

* Support the sync of Redshift materials. (linked textures and basic parameters)
* Support the sync of Corona materials. (Corona6, some of Corona8)

**Improvement**

* Optimize the export of .d5a files.

***

#### Ver. 0.3.0 

`Release date: 2022. 1. 19`

#### **Ver. 2.6.6.0029**

`Release date: 2023.12.14`

**New**

* Supports Cinema 4D 2024
* Supports sync camera animations into D5 Render (Supports Octane/Corona/Redshift/Standard cameras)
* Supports Redshift 3.5 (Supports the new node editor of Cinema 4D 2024/2023/R25 + Redshift 3.5.x and the node editor of Cinema 4D S24/R23/S22/R21 + Redshift 3.5.x)
* Supports thumbnails for the exported .d5a files
* Added compatibility with various units for the project files.

**Optimizations**

* Supports more material nodes when syncing or exporting .d5a files.
* Auto Update Notification.

**Known Issues**

* Camera animation sync is only available with D5 Render 2.6 and later versions.
* Currently, the combo of Cinema 4D S26 and Redshift 3.5.x is not supported.
* To properly sync the normal maps to D5 Render, it is necessary to establish a connection between the Redshift Normal Map and the primary material node via the RS Bump Map node.
* Materials created using the node editor in Cinema 4D version 25 or later can not be synced into D5 when they are opened in those previous Cinema 4D versions.

***

#### Ver. 0.5.0 

`Release date: 2022.11.16`

**New**

* New UI and interactive experience
* Support Cinema 4D S26 and 2023
* Display the sync state
* Optimize material mapping and map baking
* Add an uninstall program on the system start menu
* Support AMD graphics cards
* Support incremental synchronization
* Add a setting to control texture baking resolution

**Fix**

* Some scenes with unsupported components failed to sync
* Some materials went missing after sync

***

#### Ver. 0.4.0 

`Release date: 2022.2.28`

**New**

* Support the sync of Redshift materials. (linked textures and basic parameters)
* Support the sync of Corona materials. (Corona6, some of Corona8)

**Improvement**

* Optimize the export of .d5a files.

***

#### Ver. 0.3.0 

`Release date: 2022. 1. 19`

#### Ver. 2.6.6.0029

`Release date: 2023.12.14`

**New**

* Supports Cinema 4D 2024
* Supports sync camera animations into D5 Render (Supports Octane/Corona/Redshift/Standard cameras)
* Supports Redshift 3.5 (Supports the new node editor of Cinema 4D 2024/2023/R25 + Redshift 3.5.x and the node editor of Cinema 4D S24/R23/S22/R21 + Redshift 3.5.x)
* Supports thumbnails for the exported .d5a files
* Added compatibility with various units for the project files.

**Optimizations**

* Supports more material nodes when syncing or exporting .d5a files.
* Auto Update Notification.

**Known Issues**

* Camera animation sync is only available with D5 Render 2.6 and later versions.
* Currently, the combo of Cinema 4D S26 and Redshift 3.5.x is not supported.
* To properly sync the normal maps to D5 Render, it is necessary to establish a connection between the Redshift Normal Map and the primary material node via the RS Bump Map node.
* Materials created using the node editor in Cinema 4D version 25 or later can not be synced into D5 when they are opened in those previous Cinema 4D versions.

***

#### Ver. 0.5.0 

`Release date: 2022.11.16`

**New**

* New UI and interactive experience
* Support Cinema 4D S26 and 2023
* Display the sync state
* Optimize material mapping and map baking
* Add an uninstall program on the system start menu
* Support AMD graphics cards
* Support incremental synchronization
* Add a setting to control texture baking resolution

**Fix**

* Some scenes with unsupported components failed to sync
* Some materials went missing after sync

***

#### Ver. 0.4.0 

`Release date: 2022.2.28`

**New**

* Support the sync of Redshift materials. (linked textures and basic parameters)
* Support the sync of Corona materials. (Corona6, some of Corona8)

**Improvement**

* Optimize the export of .d5a files.

***

#### Ver. 0.3.0 

`Release date: 2022. 1. 19`

<br>


---
