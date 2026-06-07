---
title: "How to use Cesium?"
source_url: https://docs.d5render.com/user-guide/tool/how-to-use-cesium
fetched: 2026-06-07
---

# How to use Cesium?

> **Warning:** **Note:**&#x20;

* **Professional** users need to use D5 Render client version 3.0 or above to use Cesium function. Team users are not affected.
* Users with **Community** versions and **Education** licences are currently unable to use Cesium.


## Cesium Service Integration

## 1. Function Introduction

Cesium is an open 3D geospatial platform with massive global terrain, 3D architecture and image data.

D5 Render integrates Cesium services to allow users to load real geographic information data (such as city models, Terrain elevations, satellite images) directly into D5 scenes. This provides a real "Digital Foundation" for your design, which is very suitable for urban planning, landscape design, traffic simulation and other projects that need to be integrated with the surrounding real environment.

<figure><img src="/files/hJyi28gWzEqpLrhQUoWr" alt=""><figcaption></figcaption></figure>

#### Core features and considerations

Before using cesium in D5, please understand how it works:

* **Cloud data streaming:** Cesium data needs to be used online throughout the process. D5 only reads the data stream and does not save the large GIS data download to your local archive.
* **Real-time and caching:** Because the data is not stored locally, it needs to be reloaded from the server every time the project is opened. As a result, the terrain and buildings may take a short time to refresh.
* **Layer overlay logic:** Cesium data is composed of multiple "layers" (for example: a layer of satellite image + a layer of terrain + a layer of 3D buildings). In D5, these data are superimposed using the same coordinate system and together constitute the background environment.

## 2. Preparation: Obtain Cesium Authorization

Whether it is an individual user or a team user, you first need to have a Cesium account and obtain an Access Token (Access Token).

1. **Register an account:** Visit the [Cesium official website](https://cesium.com/) and create an account.
2. **Manage assets:** After logging in, the Cesium ion platform opens automatically. Go to `My Assets` page, where all geographic data assets associated with your account are displayed.

&#x20;     a. You can upload your own mapping data (users in Mainland China are not permitted to upload data).

&#x20;     b. You can also add the official free global base data from the `Asset Depot`.

> **Warning:** Note: To use these assets for commercial purposes, be sure to check the official Cesium authorization subscription instructions.


<figure><img src="/files/idcBsEaaUCeFRIlA7OTx" alt=""><figcaption><p>You can manage geographic information data assets on the Cesium ion platform.</p></figcaption></figure>

3. **Create a token:**

&#x20;     a. Enter`Access Tokens`page.

&#x20;     b. Click`Create token`to create a new token (you cannot use the `Default`token, because it does not have sufficient permissions)

&#x20;     c. Enable all the data permissions in Public scopes and the asset permissions that need to be opened.

&#x20;     d. Click`Create`and copy the newly generated token string.

<figure><img src="/files/o7qM4jIul3A7SXU5pc33" alt=""><figcaption><p>Create a new token and set up permissions correctly</p></figcaption></figure>

## 3. Configure Cesium Token

> **Warning:** Select the corresponding configuration method according to your D5 account type.


### 3.1 Individual User

1. In D5 Render client, select `Terrain - Cesium` and click `Add Token` in the top menu, or open [D5 My Space](https://myspace.d5render.com/login) and log in directly with your D5 account, navigate to `Settings - Workspace`, and locate the Cesium settings section.
2. Click the `Add` button.
3. In the pop-up window, paste the token you copied in the previous step, then save it.\
   After completing the configuration, you can return to D5 Render client and start using the Cesium feature.

<figure><img src="/files/ktZZsicRtpO1bFTb2jXY" alt=""><figcaption><p>Go to D5 MySpace to deploy Cesium token</p></figcaption></figure>

### 3.2 Team User

For team users, a team administrator must log in to [D5 My Space](https://myspace.d5render.com/login) to configure the token. The configuration process is the same as for individual users. Once the setup is complete, all team members can use the Cesium feature in D5 Render client.

## 4. Using Cesium in D5 Render

### 4.1 Getting Started

Open D5 Render and click on the top menu bar  `Terrain` Tools, selecting Cesium The Cesium operation panel opens.

*If you do not configure the Token, you will be prompted to go to the configuration (refer to section 3).*

<figure><img src="/files/gsXR7APh7P0Jvnf5YuvP" alt=""><figcaption><p>Open the Cesium operation panel at the top of D5 Render client</p></figcaption></figure>

As shown in the following figure, the Cesium operation panel is mainly divided into three functional areas:

1\. **Map Preview** This is the window for you to make a preliminary point selection.

* **Search & Locate:** Enter a city or landmark name in the top search bar to quickly jump to the target area.
* **Interactive map:** Zoom and PAN support to help you visually find the specific parcels you need to import. The center point of the map is the origin of the coordinates to be imported.

2\. **Parameter panel** Controls the specific parameters of the imported resources precisely here:

* **Longitude and Latitude:** displays the precise coordinates of the center point of the current map. You can also manually enter values for fine adjustment.
* **Scale:** Sets the scale of the imported model in the scene.

3\. **Data Source:** Select the map data resources you want to import into the scene.

The data sources available here depend on the resources added to My Assets in Cesium and the authorization status of the selected access token.

<figure><img src="/files/S8gRNKG5Aa2zI740A53C" alt=""><figcaption><p>Import geographic information data into D5 scenes via the Cesium operation panel</p></figcaption></figure>

### 4.2 Add Cesium resources to the scene

1. **Location:** Search for the target location in the map, or directly enter the longitude and latitude coordinates of the project location.
2. **Select Data source:** select the type of data you want to add to the D5 scene (for example, Google Photorealistic 3D Tiles building model or Cesium OSM Buildings building model).
3. **Add to scene:** Click Add button to add the selected geographic data resource to the D5 scene
   * D5 will load Cesium data from the network, so it may take some time to complete. At this point, you can hide or delete the default terrain that comes with the D5 scene, and raise the camera angle of view to observe the data loading.
   * A Cesium resource tree is added to the D5 resource list.

<figure><img src="/files/WUTpYj2HhyBTjnWTnuqv" alt=""><figcaption><p>The effect after importing the Cesium OSM Buildings and Google Photorealistic 3D Tiles data sources</p></figcaption></figure>

### 4.3 Effect adjustment

After the Cesium data is loaded, you can superimpose your own design scheme onto this base to integrate it with the real‑world geographical environment. In addition, you can adjust the imported Cesium data as needed.

#### Overall adjustment

1. In the scene resource list on the left, click CesiumGeoreference.
2. In the parameter panel on the right, click the `Reselect` button to open the Cesium operation panel. Here, you can readjust the geographic location, data source, and other import settings, then click `Update` to apply the changes.
3. In the Position parameters of the right-side panel, you can set the position and rotation of the entire Cesium dataset to better align it with your design.

<figure><img src="/files/RPNpM8Kr9Qx9kwTCvMrK" alt=""><figcaption></figcaption></figure>

#### Detail adjustment

You can adjust some details for each data resource.

1. Click a specific data resource in the scene resource list on the left side panel
2. Adjust the corresponding attribute parameters in the right parameter panel

<figure><img src="/files/2a3AcsHdaCGIC7OfwCZ6" alt=""><figcaption></figcaption></figure>

**Maximum Screen Space Error**

The smaller the value, the finer the model, but the higher the scene source consumption.

<figure><img src="/files/1QQJ9VDdbTeyGi2nUlBj" alt=""><figcaption><p>The effect of the Cesium OSM Buildings data source when the maximum screen error is set to 1, 5, and 50 respectively</p></figcaption></figure>

**Range Limit**

When range restriction is turned off, all data source contents in the field of view will be displayed by default; When range restriction is turned on, only the data source contents in the entered range will be displayed.

**LOD Transition**

Controls whether the Cesium has a gradient animation when it loads data.

<figure><img src="/files/jweF4G6vCB2ixPgfsnW0" alt=""><figcaption><p>Enable LOD Transition</p></figcaption></figure>


---
