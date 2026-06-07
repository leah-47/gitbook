---
title: "Spatial Tour"
source_url: https://docs.d5render.com/user-guide/d5-virtual-tour/spatial-tour
fetched: 2026-06-07
---

# Spatial Tour

## **Introduction** <a href="#header-0" id="header-0"></a>

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

<figure><img src="/files/1GKMV8dUVyMY9FlfvCSq" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/xzabCiZK8NWizGGWcVm4" alt=""><figcaption></figcaption></figure>

### Edit the spatial tour <a href="#header-3" id="header-3"></a>

* Entering the tour editing environment is an independent editing state. After entering the editing state
  * The preview will automatically switch to perspective projection
  * Seleting models is not supported
  * The Free mode will be auto-activated. You can navigate the scene using the shortcut keys AWSDQE.
  * Effects including Auto Exposure, Depth of Field, Bloom, Vignetting, and Chromatic Aberration will be switched off.
* Select the appropriate starting position and click the button to add a position.

<figure><img src="/files/dQUiVh8TDBy4WRreY96K" alt=""><figcaption></figcaption></figure>

* After successful addition, the first position will be added in the gallery below. The first added camera position defaults to be set as the "starting point".

<figure><img src="/files/kNh3aFUGoE3sJCStjrFb" alt=""><figcaption><p>Starting Viewpoint</p></figcaption></figure>

* Since each camera has a point on the ground that's vertically aligned with it as its counterpart, you can switch between the physical position and the ground position as you like.&#x20;
  * **Ground position** (Default)
  * **Physical position**

> Right-click to switch between the physical position and the ground position

<figure><img src="/files/HVV4F4VcIb6Wf6Xi64Um" alt=""><figcaption><p>Two displays for one touring point location</p></figcaption></figure>

<figure><img src="/files/3DYEJ5jFnVTB2f3APM53" alt=""><figcaption><p>Right-click menu to change the Display</p></figcaption></figure>

While editing, you can click scenes from the scene list on the left to apply to the viewpoint.

<figure><img src="/files/nzbhZhfsUTOeuXL5teQu" alt=""><figcaption></figcaption></figure>

You can also copy and paste the environment effect parameters and layer visibility parameters from the scene list to the created tour positions.

| <div><figure><img src="/files/R9OvwBNIo9wVEgPPiHSK" alt=""><figcaption></figcaption></figure></div> | <div><figure><img src="/files/0FV0gb915JskZfWCMeza" alt=""><figcaption></figcaption></figure></div> |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |

Click the \[Update Environment Settings] button to update all the parameters of a tour position to the parameters in the current scene viewport.

* Once you've established all the viewpoints, select 'Done' to transition into preview mode, where the camera automatically reverts to the starting viewpoint.

<figure><img src="/files/GZSBgazAfo9YGuL3byHV" alt=""><figcaption></figcaption></figure>

* When the preview mode is activated, you can click in the scene to navigate through the different tour positions. Please note that only set tour positions are accessible in a tour project.

<figure><img src="/files/V2Il582RvLxZRYSqtnwL" alt=""><figcaption></figcaption></figure>

***

### Render the spatial tour <a href="#header-4" id="header-4"></a>

1\. With all steps completed, you can export your virtual tour by clicking on the ''Render'' icon.

2\. Specify the storage path, select your desired resolution, and click ''Render''.

<figure><img src="/files/LhFyYmTyHGZOeTyyj4gd" alt=""><figcaption></figcaption></figure>

3\. When the rendering is completed, you will get a local web folder containing panoramas, JS files and other resources.

You can preview the virtual tour on a web page by choosing 'Preview'.

<figure><img src="/files/rzctRGjDGqLLDgvjvQf8" alt=""><figcaption></figcaption></figure>

***

#### **3D Dollhouse**

After client-side rendering of the \[Spatial Tour], a 3D Dollhouse is automatically generated.

In the panorama gallery, users can switch to the 3D panorama view via a button.&#x20;

> Demo: [DEMO_3D Dollhouse](https://cn-share.d5render.com/team-api/shortLink/452)

<figure><img src="/files/K87guzfyYsoUEUyea0tL" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/D1FgO5cfFXEtO8sn5HlK" alt=""><figcaption></figcaption></figure>

**-How to use Dollhouse Pinpointing:**

1.Using **a sphere** as an example, to ensure complete reconstruction of the sphere, all the geometric information of the sphere must be captured in the panorama. The minimum number of required points is 2:

1 at the front of the sphere

1 at the back of the sphere

When creating the Dollhouse, all the geometric information of the points is consolidated. With the two points mentioned above, the complete sphere can be reconstructed.

2.Using **a top-down view of a single floor plan** with 3 rooms as an example:

<div align="left"><figure><img src="/files/YFBDF7jBXu7CE445LJ1I" alt="" width="317"><figcaption></figcaption></figure></div>

By placing a single point in the left room, the visibility and coverage captured would be:

<div align="left"><figure><img src="/files/P1eRbtw2gcJGAlDPrlI8" alt="" width="317"><figcaption></figcaption></figure></div>

By placing a single point in the upper room, the visibility and coverage captured would be:

<div align="left"><figure><img src="/files/oSAk3Vz60GkFceeiuWdY" alt="" width="311"><figcaption></figcaption></figure></div>

With only these two points, a portion of the bottom-right room remains uncovered:

<div align="left"><figure><img src="/files/VTmhxzLPi5sqC8S4i3qv" alt="" width="312"><figcaption></figcaption></figure></div>

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

<figure><img src="/files/XnegxdIyBsGwvPKSqtEX" alt=""><figcaption></figcaption></figure>

3. After uploading is completed, you can open the cloud project in showreel.

<figure><img src="/files/6dpVzd06jaT3JyABBsgN" alt=""><figcaption></figcaption></figure>

4. In the **D5 Showreel on MySpace**, you can find the uploaded virtual tour in the corresponding cloud project.

* A cloud project could contain multiple virtual tours.
* You can share virtual tours by link or QR code.

> Each upload to a D5 cloud project creates a new tour file, preserving your past work.

<figure><img src="/files/ZeIs44PPnEhc8gImn8pg" alt="" width="399"><figcaption><p>Share in Myspace</p></figcaption></figure>

> **Info:** **Sharing options：**

A tour file presents two types of links: long links & short links


* **Long link:** the url of the panorama itself when opened in the browser.&#x20;

<figure><img src="/files/BF4Qp24AhnydRzE9rG8j" alt=""><figcaption></figcaption></figure>

* **Short link:** In the share button of the panorama, click \[ Share Link ], it will support to generate a short link. If you use this short link to share with others, you can still open the panorama. However, since the shortchain is configured with the Open Graph parameter, it can show a preview image and project profile when sharing on social media (Facebook, Twitter, Linkedin, WeChat, etc.).

| Share in D5 Render tour editor                                                                                                                  | Share in the preview webpage                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| <p></p><div><figure><img src="/files/kUBQLL5Nt7lGgJ6iPwYO" alt=""><figcaption><p>Share in D5 Render tour editor</p></figcaption></figure></div> | <p></p><div><figure><img src="/files/Wj0nwXXxFz6bNv4RKQqc" alt=""><figcaption><p>Share in the preview webpage</p></figcaption></figure></div> |

<figure><img src="/files/fnxyQl7uVioHXTLVRNFB" alt=""><figcaption><p>share on Facebook</p></figcaption></figure>

**Share Local Files**

* After the rendering is completed, you can double-click the storage path, select the D5VirtualTour, then click "Open resource folder" and choose the"_Resource" directory to launch the local browser automatically to open it. The entire tour can also be transmitted locally to each other.

<figure><img src="/files/CZ1fZceH0VY7FTZKLyLu" alt=""><figcaption></figcaption></figure>


---
