---
title: "XR Tour"
source_url: https://docs.d5render.com/user-guide/d5-virtual-tour/xr-tour
fetched: 2026-06-07
---

# XR Tour

### What's D5 RENDER XR？

D5 RENDER XR is a new way of displaying rendering results that combines 3d rendering technology and 3d guassian splatting technology, allowing users to use renderers to render images of multiple angles of an object (or scene) in batches, and then publish these training data to the cloud,Through the AI training of the 3d guassian splatting training service deployed on the server, a 3d web link (file format is. ply or. splat) that can be shared online is finally obtained.

<figure><img src="/files/CDTlTcB9RnVBFU1giYRA" alt=""><figcaption></figcaption></figure>

### What's 3d Guassian Splatting?

Imagine recording a video of a room with your phone. Traditional methods might produce a basic 3D model, but it would lack detail and render slowly. In contrast, 3DGS represents each point in the scene as a "fuzzy ball" defined by its color, position, size, and transparency (using Gaussian functions). These fuzzy balls are then projected onto 2D images for rendering, enabling fast and high-quality 3D reconstruction.

This approach resembles treating each point in the scene as a light spot and reconstructing the entire scene by overlaying these spots. Leveraging the characteristics of Gaussian functions, the rendered images exhibit smooth edges, intricate details, and realistic visual effects.

<figure><img src="/files/kqkZVKcKz6PzEKwgB1Un" alt=""><figcaption><p>Display 3d Guassian Splatting information by storing numerous ellipsoid functions in the ply file</p></figcaption></figure>

**Advantages of 3d Guassian Splatting technology:**

* **High quality:** Compared to traditional methods, 3DGS can more realistically reproduce scene details and lighting effects.
* **Real-time rendering:** Using GPU acceleration, 3DGS can achieve real-time rendering at over 30 frames per second, making it suitable for applications such as virtual reality (VR) and augmented reality (AR) that require instant feedback.
* **Low cost:** Using ordinary photos or videos, without the need for expensive equipment or complex modeling processes, ordinary users can easily generate high-quality 3D content.

### D5 RENDER XR Workflow

#### **Step1: Create XR Tour projects, use templates to quickly shoot scenes**

1. Select TOUR/XR TOUR in the upper right corner to create an XR TOUR project file. The XR TOUR project file will store the settings of the shooting template and the storage location information.

<figure><img src="/files/hLI9I0FNBqTAl7anVAh1" alt=""><figcaption></figcaption></figure>

2. In the XR project, click the upper right corner of the left panel to select a template, and then click a shooting position in the scene to initialize the template.

<figure><img src="/files/YVBmhynbb2rptoOE24Pt" alt=""><figcaption></figcaption></figure>

3. After initializing the template position, you can use gizmos to adjust the position and angle of the template, use the "parameter panel" to adjust the size, use the "preview" to view the final shooting effect, and make secondary adjustments. The final rendered result is consistent with the "preview".

<figure><img src="/files/G1fZW3rQMJP0p5262AUj" alt=""><figcaption></figcaption></figure>



4. There are some limitations to using only one template. For example, a single template cannot capture both close-up and distant views of an object at the same time. Therefore, multiple templates can be added to improve coverage and capture more detail in the shooting scene.



5. After editing the shooting template, tick the template to be rendered in the render window, click Render and wait for the rendering to end.

<figure><img src="/files/rv1KZM31ol3wnsipcxtr" alt=""><figcaption></figcaption></figure>



6. Upon completion of rendering, all local files will be stored at the user-specified path, and a local HTML file will be generated for result viewing. For enterprises or devices with strict data security restrictions that prohibit data uploads, the entire set of local files can be copied offline to facilitate multi-angle presentation of the design.

<figure><img src="/files/FrvDXBUNI84ONoMi7W0W" alt=""><figcaption></figcaption></figure>



**Template Types and Applicable Scenarios**

1. Hemisphere Template

Hemisphere templates represent the most widely applicable template type, suitable for rapidly capturing a comprehensive bird's-eye view of an entire building.

<figure><img src="/files/3BxzaqF8ermRuKNyWjIB" alt=""><figcaption></figcaption></figure>

2. Cube Template

Cube templates comprise six faces and two camera orientations. Users may also choose to exclude models contained within certain faces, thereby enabling enhanced photographic detail for specific angles of the building.

<figure><img src="/files/ARQqYGZcFzXw9w3PqwGU" alt=""><figcaption></figcaption></figure>

3. Sphere Template

Sphere templates are suitable for 3D objects requiring a 720-degree display of every detail, such as product photography.

<figure><img src="/files/MZFS2xA062OATDX7Fbft" alt=""><figcaption></figcaption></figure>

#### **Step2: Publish to the MySpace cloud project and wait for the training to be completed.**

1. After completing the rendering, open the “Render Tour” window, select “Share”, and you can upload the local image to the cloud-based “Personal Projects”.

<figure><img src="/files/xue7xztoX8k5rK8iqa88" alt=""><figcaption></figcaption></figure>

2. Upon completion of the upload, a task with the status “Queued” will be automatically created in the web backend. Please be patient until the completion of training.

<figure><img src="/files/KBT3yiuVMaD0x7idZze2" alt=""><figcaption></figcaption></figure>

3. Upon completion of training, the status will update automatically (with users notified via email). Users may then click “Edit” to access the online editor, review the training results, and share the link.

<figure><img src="/files/mA78gh1r3fSWmxgxKlB0" alt=""><figcaption></figcaption></figure>

#### **Step3：Edit & Publish Share in Web Editor**

1. Upon completion of training, click Edit to access the online editor.



2. The online interactive editor supports adding hotspots (web or media content), allowing users to add further details to their 3D projects.



<figure><img src="/files/kuBOSIJ2iKRLJSkMaQy0" alt=""><figcaption></figcaption></figure>

**Media Hotspot**

Video: Require an iframe link for the video to be added

Images: Up to 20 photos may be added, each with a maximum size of 100MB. Supported formats: JPG, JPEG, GIF, PNG, WebP, BMP

Hyperlinks: Supports valid URLs beginning with http/https

Text: Supports free input of plain text (Chinese/English characters, numbers, symbols, etc.), including pasted text. Maximum text length: 1000 characters.

Supports adding URLs and iframe links. Click the preview button in the bottom-right corner of the editor to open a pop-up window. Clicking the icon within the scene will open the corresponding webpage pop-up.

<figure><img src="/files/yjVQERNihqiJicUSLmGr" alt=""><figcaption></figcaption></figure>

**Web Hotspot**

Hotspot Style

Hotspot Colour: Select colour from the colour picker

Hotspot Size: Adjust dimensions by dragging the slider

Display Hotspot Name: Enable/disable hotspot name display in the scene

Hotspot Name: Customisable text input

Hotspot Name Position: Position relative to the icon

Text Size: Adjust hotspot name size by dragging the slider

<figure><img src="/files/5mm8iTquYpBCPIMdXLQD" alt=""><figcaption></figcaption></figure>

3\. Upon completing all edits, click ‘Share’ to generate a shareable link for online display of your 3D project. You may communicate with team members or external collaborators via comments.



### External Export & Workflow with Other Software

The D5's built-in online XR tour browsing service facilitates project sharing and collaborative communication. Beyond this, it offers more extensive scenarios for integration with other software. Within the user project list↓, users can download .ply source files for import into other software applications.

<figure><img src="/files/On7c5OgW4BpDLpp0yWUb" alt=""><figcaption></figcaption></figure>

### Import [CESIUM](https://cesium.com/) to make 3d project presentation PPT

After downloading the PLY file locally, upload it to Cesium to create an interactive 3D presentation for the proposal.



### Import [Spline](https://app.spline.design/) for Website Development

After downloading ply locally, utilise Spline's APK export service to develop your own 3D app or web application.



### D5 RENDER XR Best Practices

Below, a typical villa residential design project (see the figure below) is used as an example to illustrate how to select appropriate camera templates and configure shooting parameters.

First, we analyze the composition of the project. There is a single main building at the center, with three areas of “negative space” between the building and the background (surrounding trees). Based on this composition, five camera templates are created for the project: two hemisphere templates to cover the main structure, and three cube templates to capture details within the surrounding development spaces.

<figure><img src="/files/OURWAF098wrpxCGdjdeM" alt=""><figcaption></figcaption></figure>

Using the sandwich technique to capture the building's main structure:

1. Employ a hemisphere template with a larger radius whilst simultaneously zooming in on the lens focal length within the \[Preview]. Adjust the viewpoint to ensure the majority of the building's main structure occupies the centre of the frame. This template captures the overall detail of the building's main structure.

<figure><img src="/files/tNXKF3JLg0IClvSX4Nvq" alt=""><figcaption></figcaption></figure>

2. The previous template lacked information regarding the surrounding context (vegetation), so you may wish to add a hemisphere template. There is no need to pull the camera too close; instead, capture the entire scene's outline.

<figure><img src="/files/1fbe5OywbLodsLnjcumx" alt=""><figcaption></figcaption></figure>

Use the cube template to add details to the scene:

For the three void spaces at the front elevation, rear courtyard, and garage of the main building structure, create three cube templates respectively.

<figure><img src="/files/m7xxzUX811bh2dfztxI3" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/DtubTJTy4VnV9TDPriYC" alt=""><figcaption></figcaption></figure>

When capturing the building’s principal elevation, retain only four faces of the cube template. This allows the cube template to be positioned more flexibly within the interstitial spaces between buildings.

<figure><img src="/files/yr2seSNojfPPPQqAiLMJ" alt=""><figcaption></figcaption></figure>

Upon completion of the final capture and rendering, the results of the trained model published on the webpage are as follows:

<https://share.d5render.cn/team-api/shortLink/BHNNP8>

### Notes

1. Adjust the appropriate \[viewpoint offset value] according to your project's dimensions, particularly within the box model. As illustrated below, without adjusting the viewpoint offset value, the camera positioned towards the lower section of the box model will capture an upward-facing perspective. Such angles are of little benefit for enhancing detail.

<figure><img src="/files/XjdnUWPZrEvaOIpI4ywQ" alt=""><figcaption></figcaption></figure>

2. Examine your camera template for a significant number of invalid shots, either within objects or below the horizon. If such invalid shots occur in large quantities, it will severely compromise the training results.

<figure><img src="/files/yoUZK2ebWhDXEAobexRq" alt=""><figcaption></figcaption></figure>

3. For large projects, you may utilise multiple templates to capture different areas separately before submitting them together for training.

<figure><img src="/files/GUcu30ZSJNjODkc3Oo9e" alt=""><figcaption></figcaption></figure>

### XR Tour comment function

You can add or view comments on the XR tour's viewing page.

<figure><img src="/files/fcJ1O8KaczHpxnY5Ya4U" alt=""><figcaption></figcaption></figure>

The comment function is enabled by default and can be disabled in the list on the right in the editor. Users must log in to the D5 account to comment, and anonymous comments from tourists are not supported.

Comments support adding the following type information:

* Text: Up to 500 characters, supports @ team members (only for use between team members)
* Image: up to 20MB. Support screenshot paste
* Camera angle of view: Comments can be added for each camera angle. Clicking a comment will automatically switch the view to the corresponding camera angle.


---
