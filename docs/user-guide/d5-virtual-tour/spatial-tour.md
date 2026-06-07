---
title: "Spatial Tour"
source_url: https://docs.d5render.com/user-guide/d5-virtual-tour/spatial-tour
fetched: 2026-06-07
---

# Spatial Tour

## **Introduction** 

**What is Virtual Tour?**

Virtual Tour can offer an immersive experience of your design. Clients can conveniently visit the virtual space on a PC/mobile device through the D5 Showreel link you share, thus gaining an immersive view of your architectural/interior designs.

**Two types of projects for \[Virtual Tour]**

D5 supports two types of Virtual Tour:

1. Panorama Tour: composited directly by the browser, not containing spatial information, only supporting basic panorama browsing and location switching
2. Spacial Tour: must be uploaded after creating the project in the client, containing spatial information and supporting advanced features such as 3D displacement, spatial hotspot, measurement, etc.

***

## Spatial Tour Guidance

### **Create a spatial tour**

1. Open the render project that you want to create tours in D5 Render. Click on the 'Tour' icon at the top right corner to access the project list on the right sidebar. Hit '+' at the top right to initiate a new project.
2. Then, click 'Edit' to start editing the virtual tour from the current environment.





### Edit the spatial tour 

* Entering the tour editing environment is an independent editing state. After entering the editing state
  * The preview will automatically switch to perspective projection
  * Seleting models is not supported
  * The Free mode will be auto-activated. You can navigate the scene using the shortcut keys AWSDQE.
  * Effects including Auto Exposure, Depth of Field, Bloom, Vignetting, and Chromatic Aberration will be switched off.
* Select the appropriate starting position and click the button to add a position.



* After successful addition, the first position will be added in the gallery below. The first added camera position defaults to be set as the "starting point".



* Since each camera has a point on the ground that's vertically aligned with it as its counterpart, you can switch between the physical position and the ground position as you like.&#x20;
  * **Ground position** (Default)
  * **Physical position**

> Right-click to switch between the physical position and the ground position





While editing, you can click scenes from the scene list on the left to apply to the viewpoint.



You can also copy and paste the environment effect parameters and layer visibility parameters from the scene list to the created tour positions.

| <div></div> | <div></div> |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |

Click the \[Update Environment Settings] button to update all the parameters of a tour position to the parameters in the current scene viewport.

* Once you've established all the viewpoints, select 'Done' to transition into preview mode, where the camera automatically reverts to the starting viewpoint.



* When the preview mode is activated, you can click in the scene to navigate through the different tour positions. Please note that only set tour positions are accessible in a tour project.



***

### Render the spatial tour 

1\. With all steps completed, you can export your virtual tour by clicking on the ''Render'' icon.

2\. Specify the storage path, select your desired resolution, and click ''Render''.



3\. When the rendering is completed, you will get a local web folder containing panoramas, JS files and other resources.

You can preview the virtual tour on a web page by choosing 'Preview'.



***

#### **3D Dollhouse**

After client-side rendering of the \[Spatial Tour], a 3D Dollhouse is automatically generated.

In the panorama gallery, users can switch to the 3D panorama view via a button.&#x20;

> Demo: [DEMO_3D Dollhouse](https://cn-share.d5render.com/team-api/shortLink/452)





**-How to use Dollhouse Pinpointing:**

1.Using **a sphere** as an example, to ensure complete reconstruction of the sphere, all the geometric information of the sphere must be captured in the panorama. The minimum number of required points is 2:

1 at the front of the sphere

1 at the back of the sphere

When creating the Dollhouse, all the geometric information of the points is consolidated. With the two points mentioned above, the complete sphere can be reconstructed.

2.Using **a top-down view of a single floor plan** with 3 rooms as an example:

<div align="left"></div>

By placing a single point in the left room, the visibility and coverage captured would be:

<div align="left"></div>

By placing a single point in the upper room, the visibility and coverage captured would be:

<div align="left"></div>

With only these two points, a portion of the bottom-right room remains uncovered:

<div align="left"></div>

For a full coverage, an additional point is required within the bottom-right room.

One point in per room is often sufficient to adequately capture a room's geometry. However, in scenarios with more complex room layouts or objects, additional points may be necessary, to ensure a higher fidelity and completeness in the final result.

***

### **Share the spatial tour**

D5 offers two ways to share virtual tours:

* Share Online
* Share Local Files

**Share Online---via D5 Showreel**

1. After rendering, you can click '**Share**' to publish it to D5 Cloud.
2. You'll be guided to name your virtual tour and associate it with a cloud project. At this juncture, you can either link it to a new project or integrate it with one that's already in progress.



3. After uploading is completed, you can open the cloud project in showreel.



4. In the **D5 Showreel on MySpace**, you can find the uploaded virtual tour in the corresponding cloud project.

* A cloud project could contain multiple virtual tours.
* You can share virtual tours by link or QR code.

> Each upload to a D5 cloud project creates a new tour file, preserving your past work.



> **Info:** **Sharing options：**

A tour file presents two types of links: long links & short links


* **Long link:** the url of the panorama itself when opened in the browser.&#x20;



* **Short link:** In the share button of the panorama, click \[ Share Link ], it will support to generate a short link. If you use this short link to share with others, you can still open the panorama. However, since the shortchain is configured with the Open Graph parameter, it can show a preview image and project profile when sharing on social media (Facebook, Twitter, Linkedin, WeChat, etc.).

| Share in D5 Render tour editor                                                                                                                  | Share in the preview webpage                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| <p></p><div></div> | <p></p><div></div> |



**Share Local Files**

* After the rendering is completed, you can double-click the storage path, select the D5VirtualTour, then click "Open resource folder" and choose the"_Resource" directory to launch the local browser automatically to open it. The entire tour can also be transmitted locally to each other.




---
