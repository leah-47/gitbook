---
title: "How to use City Generator?"
source_url: https://docs.d5render.com/user-guide/tool/how-to-use-city-generator
fetched: 2026-06-07
---

# How to use City Generator?

The entry of City Generator feature is integrated in the drop-down menu of the ‘Terrain’ button in the navigation bar. It supports two ways to fetch city data information.

<figure><img src="/files/XZjbBXL4OymS5p8S5r4X" alt=""><figcaption></figcaption></figure>

## 1. D5 Render 3.0-City Feature Overview

The city module in D5 Render 3.0 is designed to quickly and efficiently generate buildings and roads around your site, helping you plot swiftly during the analysis and effect drawing stages of the project. This includes two main modes: White mode and Architectural Style mode.

<table><thead><tr><th width="376.22222900390625">White Mode</th><th>Architectural Style Mode</th></tr></thead><tbody><tr><td><div><figure><img src="/files/atVxhw9Fn9XzitTFfuSn" alt=""><figcaption></figcaption></figure></div></td><td><div><figure><img src="/files/rKmtBamJYn0Ko8ALkwNq" alt=""><figcaption></figcaption></figure></div></td></tr></tbody></table>

* Whether it is in the white model mode or architectural style mode, we support the following operations.
  * **Proportional adjustment** of the overall height of the building group
  * Adjustment of individual building height
  * **Proportional adjustment** of the overall width of the road group
  * Adjustment of single road width
* In the white model mode, we also support the following operations.
  * Adjustment of the overall color, map, and opacity of the building group
  * Adjustments to the overall color, map, and opacity of the road Group
* In the architectural style mode, we have three preset styles: **General, European,** and **Transparent Block.** To ensure your customization requirements are met, we have set adjustable parameters for building groups and individual buildings.
  * In General and European style
    * For the building group, you can randomly generate a new map for the whole building group by adjusting the random map. The Random Texture option enables the generation of new textures for the entire building group. Additionally, the commercial slider adjusts the degree of modernity of the external facades.
    * For a single building, you can adjust the elevation map and roof style of that building, and you can copy the elevation map you like to another building.
  * In Transparent Block Style
    * For building groups, you can adjust the color and opacity of transparent blocks.
    * For a single building, you can adjust the first floor height and the standard floor height to control the vertical positioning of floors within the transparent block.

***

## 2. D5 Render 3.0-Detailed Description of City Feature

### 2.1 Select the city area you want to generate

#### 2.1.1 Select the city area you want to generate in two ways.

> **Info:** You can enlarge the window by dragging the right and lower sides of the window. In subsequent updates, we will also support the dragging method to enlarge the window.


<table><thead><tr><th width="376.22222900390625">Use default map controls</th><th>Use your own shp file</th></tr></thead><tbody><tr><td><div><figure><img src="/files/3OVgHeJvnwsKZtFKVMrf" alt=""><figcaption></figcaption></figure></div></td><td><div><figure><img src="/files/s1LxPcM5TOKxhcExbQjA" alt=""><figcaption></figcaption></figure></div></td></tr></tbody></table>

#### 2.1.2 Enter a city name to lock the city area you want to generate.

Using the following image as an example, we will provide locations based on the name you entered. **Click the location in the drop-down menu** to jump to this area.

<figure><img src="/files/bwF9mXMIusSeOIreakMV" alt=""><figcaption></figcaption></figure>

#### 2.1.3 Select the generated content of the selection area.

By default, building, road, greenery, and water will be downloaded. To include satellite maps, please select the satellite option.

<figure><img src="/files/Shz1LUNpTEXCYiEK47dW" alt=""><figcaption></figcaption></figure>

#### 2.1.4 Generation Time

The generation speed depends on the size of the selected area. For example, processing a 4 km by 4 km area typically requires up to five minutes. Please wait patiently.

### 2.2 City Level

The imported cities are organized into three hierarchical levels: City, Buildings/Roads/Greenery/Water/Satellite/Ground, and individual buildings or roads. Each level allows for the adjustment of specific parameters. The following sections provide a detailed introduction to the two modes: the white model mode and architectural style mode.

| City                                                                                                                                                         | Buildings/Roads                                                                                                                                                                                                                      | Individual building/road                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <p></p><ul><li>By default, the city import selects the entire city.</li><li>To select the entire city, click on the city name in the left sidebar.</li></ul> | <p></p><ul><li>Click on any building to select the entire building group.</li><li>Click on any road to select the entire road group.</li><li>You can also select building and road groups by clicking on the left sidebar.</li></ul> | <p></p><ul><li>Double-click a building to select it individually.</li><li>Double-click a road to select it individually.</li><li>You can also select individual buildings or roads from the left sidebar.</li></ul> |
| <div><figure><img src="/files/DUCQMnPJLOc2W6F5BawM" alt=""><figcaption></figcaption></figure></div>                                                          | <div><figure><img src="/files/GW6ey0UAyJoM88xgw7Xc" alt=""><figcaption></figcaption></figure></div>                                                                                                                                  | <div><figure><img src="/files/qgDJuLK5qtWmKmaDxTWI" alt=""><figcaption></figcaption></figure></div>                                                                                                                 |
|                                                                                                                                                              | <div><figure><img src="/files/Ns7fQ8zIB0KytNxEbZFk" alt=""><figcaption></figcaption></figure></div>                                                                                                                                  | <div><figure><img src="/files/lpNNAs3IeBSZzad1aqNE" alt=""><figcaption></figcaption></figure></div>                                                                                                                 |

### 2.3 White Model Mode

> **Warning:** Note: When you select the entire building group, the height value in the right-hand sidebar is a proportional value. For example, if you set it to 50, the height of all buildings in the group will become 50% of their default height. The same applies to roads.


<figure><img src="/files/nk9HBsjheWUD9q6f7jk4" alt=""><figcaption></figcaption></figure>

#### 2.3.1 Switch Between White Model Mode and Architectural Style Mode

The **Style** switch in the right sidebar can be activated when a building group is selected to apply style materials to the entire group. Alternatively, style materials can be assigned to individual buildings when a single building is selected.

| Apply materials to the building group as a whole                                                    | Apply materials to a single building                                                                |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <div><figure><img src="/files/qJzXQUamV295VREs2CB3" alt=""><figcaption></figcaption></figure></div> | <div><figure><img src="/files/DBnsn9730de1oDfMGlXv" alt=""><figcaption></figcaption></figure></div> |
| <div><figure><img src="/files/1VwX38eQqF4mEP8LiOSA" alt=""><figcaption></figcaption></figure></div> | <div><figure><img src="/files/9ovCMAEhhhgKNumrWBFH" alt=""><figcaption></figcaption></figure></div> |

### 2.4 Architectural Style Mode

#### 2.4.1 Select the button located at the edge of the style list for additional adjustable parameters.

When you select an entire building group, you can apply random textures to change the texture style throughout the city on a large scale.

<figure><img src="/files/y7kFTWaY5EKzXwzasVl8" alt=""><figcaption></figcaption></figure>

#### 2.4.2 Control of individual architectural styles

When you select an individual building, you retain control over its style.

> **Warning:** Note: All buildings with office properties will not change significantly when switching between General and European.


| General                                                                                             | European                                                                                            | Transparent Block                                                                                   |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <div><figure><img src="/files/uneX71CUSKO9GBnx6BDL" alt=""><figcaption></figcaption></figure></div> | <div><figure><img src="/files/nCDKHuZYYbEG14JGwbKT" alt=""><figcaption></figcaption></figure></div> | <div><figure><img src="/files/rm7fw7r6TJKLp8SA9POL" alt=""><figcaption></figcaption></figure></div> |

#### 2.4.3 Adjustment to the material of individual building facades

You can adjust the building facade both **randomly** and by **adjusting the current building properties**.

| Random                                                                                                                   | Adjust the current building properties                                                                                |
| ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| <div><figure><img src="/files/cgcbr4GSFVj7owrIpyFA" alt=""><figcaption><p>Random Style 1</p></figcaption></figure></div> | <div><figure><img src="/files/poXAVoggKhMp8j18SRTA" alt=""><figcaption><p>Residential</p></figcaption></figure></div> |
| <div><figure><img src="/files/n8pKqYTVOLoPEF82queG" alt=""><figcaption><p>Random Style 2</p></figcaption></figure></div> | <div><figure><img src="/files/oT0FtIwjeaV9pgpau97X" alt=""><figcaption><p>Residential</p></figcaption></figure></div> |

You can copy the material of the current building to another building.

| Before copying                                                                                      | After copying                                                                                       |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <div><figure><img src="/files/BTjL1RPowFLe1DJCE1et" alt=""><figcaption></figcaption></figure></div> | <div><figure><img src="/files/sUmJh6OOFDbCZleHZIdm" alt=""><figcaption></figcaption></figure></div> |

#### 2.4.4 Adjustments to the roof material of individual buildings

Click this button in the image below to adjust the roof style of the building

<figure><img src="/files/UQqW4caI2eo3kgTcLQYX" alt=""><figcaption></figcaption></figure>

We provide you with three default roof styles, namely: flat roof, green roof and stairwell. Take the building below as an example to see the effect of different styles.

> **Warning:** Please note the two points below:

1\. If the roof generated by default is already a stairwell roof, selecting the stairwell option again will not alter the visual display in any way. The same applies to flat roofs.

2\. Whenever you depart from the default roof and select any of the aforementioned roof types, the flat roof option will be automatically selected.


<figure><img src="/files/I08exmQ8sGPDJtpybYv3" alt=""><figcaption></figcaption></figure>

| Flat Roof                                                                                           | Green Roof                                                                                          | Roof with Stairwell                                                                                 | Mix                                                                                                 |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <div><figure><img src="/files/4WXd1bRX3uuJcqQWe9xO" alt=""><figcaption></figcaption></figure></div> | <div><figure><img src="/files/1yAMR6oUSd1iGF1JK27Q" alt=""><figcaption></figcaption></figure></div> | <div><figure><img src="/files/BfnWAXGSj1z0VX1uf751" alt=""><figcaption></figcaption></figure></div> | <div><figure><img src="/files/crMQiBssdNwDbxEhOfEF" alt=""><figcaption></figcaption></figure></div> |

***

## City Feature Guide I

### OSM Integration

Integrates the open source data from OpenStreetMap to automatically analyze and generate roads, buildings, terrain, and other topography features, enabling effortless site context creation.

> *Note:*&#x20;
>
> *\*OSM (OpenStreetMap) file is a map data file based on the OpenStreetMap data. These files contain the topography information of roads, buildings, terrain, etc., and are widely used in map drawing and urban planning.*

#### 1. OSM import

* Click Terrain-City, then zoom in and out in the pop-up window to the desired range using the '+' & '-' controls or the mouse wheel.
* Supports quick location of the target area by entering its name or moving the selection box. The area is restricted to **4km\*4km**.
* Supports filtering and importing certain topography features such as buildings, roads, greenland, water, or satellite images.

> **Warning:** **Note:**

1. For better performance and efficiency, it is recommended to choose a moderate area to prevent excessive processing time due to large areas.
2. This feature requires online access to OSM data. Please ensure a stable Internet connection for smooth download and analysis of OSM data.
3. Please enable the "FPS Booster for Complex Geometry" when flickers appear after importing the city model.


<figure><img src="/files/NqOHL33e34wEFu7t3pYz" alt=""><figcaption></figcaption></figure>

#### 2. Parameter Editing

After the import is complete, the map model will appear in the viewport, with its topography elements as a group within the object list.

<figure><img src="/files/L2uBC9I4jKeeopdMOzG2" alt=""><figcaption></figcaption></figure>

**Building Group Settings**

* Elevation (based on original heights)\&Random elevation
* Base color\&Base color map
* Opacity option
* UV parameters(including Triplanar and UV Randomizer)
* (Single building within group) Height

**Road Group Settings**

* Width
* Base color\&Base color map
* UV parameters(including Triplanar and UV Randomizer)

**Water, Greenland Groups**

* Base color\&Base color map
* UV parameters(including Triplanar and UV Randomizer)

**Satellite, Ground Groups**

* Base color\&Base color map

<figure><img src="/files/v4HWlOI1AF4GhcUuq6qy" alt=""><figcaption></figcaption></figure>

#### 3. Delete/replace City group

* Right-click it from the object list to delete the whole city group
* Select the city group from the object list, and click 'Reselect' icon in the right sidebar. Select area in the pop-up window to **recreate**.

<figure><img src="/files/nFVe6TCCtq2k7vYrnTK7" alt=""><figcaption></figcaption></figure>

### Shapefile(.shp) Import

Supports Shapefile import for effortless site context creation.

> *\*.shp file is ESRI Shapefile data format widely used in geographic information systems (GIS). It typically contains vector data, such as points, lines, and polygons to represent geographic features including buildings, roads, rivers, and administrative divisions.*

#### 1. .Shp Import

* Click Terrain-City, and import .shp file in the pop-up window. Supports multi-selection and uploading single file up to **10 MB**. If the size is exceeded, a pop-up error will be reported.
* D5 automatically analyzes the geographic information in the .shp file and generates corresponding 3D models.
* Each imported file is stored as a group in the object list, containing three types of objects: "Buildings," "Roads," and "Undefined." Supports repositioning or rotating the entire group.

> **Warning:** **Note:**

1. Shapefile usually contains several related files (e.g. .shp, .shx, .dbf, etc.), please select the main file (.shp) to import.
2. After selecting .shp file, the system will automatically identify and load other related files (such as .shx and .dbf) with the same base name in the same directory. Please ensure that all related files are complete and stored in the same directory for correct reading.
3. Currently supports parsing **polygon** and **polyline** data types, other data types may cause parsing failure.


<figure><img src="/files/lDw1Qea2gSg9QV0Tcfo3" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/XQ4S6Q8xSlQABwTnZXtQ" alt=""><figcaption></figcaption></figure>

#### 2. Parameter Editing

**Building and Undefined Group:**

* Elevation (based on original heights)\&Random elevation
* Base color\&Base color map
* Opacity option
* UV parameters(including Triplanar and UV Randomizer)
* (Single building within group) Height

**Road Group:**

* Width
* Base color\&Base color map
* UV parameters(including Triplanar and UV Randomizer)

> **Info:** **FAQs**

1. Hover over ‘’Fail’ to display the reason for the failure.

<img src="/files/SM1yOknkxyz2ZLNmdOzc" alt="" data-size="original">

2. Possible causes and solutions for parsing failure:

\- **Unsupported data type:** D5 currently supports polygon and polyline data. Other data formats might fail to be analyzed.

\- **Shapefile content:** Ensure that all related files (such as .shx and .dbf) are complete and placed in the same directory.

\- **Read\&Write permissions:** Ensure that the current Windows account has permissions to access, read, and write the current Shapefile file and its related files, especially if the file is stored on a network drive or shared folder.



---
