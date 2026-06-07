---
title: "D5 XR Open Workflow"
source_url: https://docs.d5render.com/user-guide/d5-virtual-tour/xr-tour/d5-xr-open-workflow
fetched: 2026-06-07
---

# D5 XR Open Workflow

The D5's built-in online XR tour browsing service facilitates project sharing and collaborative communication. Beyond this, it offers more extensive scenarios for integration with other software. Within the user project list↓, users can download .ply source files for import into other software applications.

## D5 XR PLY File Export Workflow

1. Create an XR project in D5 Render, add camera templates (Sandwich Shooting Method).

Please refer to this guidance:&#x20;

[XR Tour](../xr-tour.md)

<figure><img src="/files/fBfIyWacHTvmfGBPEoiY" alt=""><figcaption></figcaption></figure>

After rendering is completed, upload the project to the **MySpace Cloud Project Management Platform** and submit it for **3D Gaussian Splatting (3D GS) training**.

2. After the training is completed, open the editor to adjust the PLY orientation.You can use the **Crop Editor** to trim the edges of the PLY file into a rectangular or circular shape.Once adjustments are complete, click **Save** and exit.

<figure><img src="/files/y9wKvsDBxgjAAbyymfIF" alt=""><figcaption></figcaption></figure>

3. Return to the **MySpace Cloud Project Management Platform**, go to **Project → Download PLY File**, and download the PLY file to your local machine.

<figure><img src="/files/jL2DoiLePiNBzbF9Nkbg" alt=""><figcaption></figcaption></figure>

***

## Cesium & D5 XR

**Online Demo:**

<https://ion.cesium.com/stories/viewer/?id=62bb85cd-893c-46dd-b760-f81e14d5419f>

1. Open the [Cesium Ion](https://cesium.com/) platform and create a **Cesium Story** project.

<figure><img src="/files/ffK1f4ufa5pgajHwKSVo" alt=""><figcaption></figcaption></figure>

2. Locate the project’s real-world geographic position and enable the data layers required for display.

<figure><img src="/files/XSyLbBDc1bq1bJiOQZrz" alt=""><figcaption></figcaption></figure>

3. Click **Upload**, select the D5 XR PLY file from your local machine, and upload it to Cesium Ion as a data source.

<figure><img src="/files/uRwLvVkiyV5tIpeR6RhP" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/Vdi3n3l4UZKaeB5aMArX" alt=""><figcaption></figcaption></figure>

4. After the upload is completed, click **“Adjust Tileset Location”**, then click **“Click position”**.Click in the browser’s 3D viewport to place the PLY model at the current geographic location.

<figure><img src="/files/VOTkPiZnV0CFYlRaQKjS" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/hvlV5drGEyRWH4JAnPjT" alt=""><figcaption></figcaption></figure>

5. The added PLY file can be adjusted using **Gizmos** to fine-tune position and rotation so it matches the terrain.

<figure><img src="/files/Y5JC7I4ZxkmPahhm3RSv" alt=""><figcaption></figcaption></figure>

6. Add multiple **slides** to showcase different viewing angles of the project, and share the completed Cesium Story with clients via a link.

<figure><img src="/files/jTGxlhikKOq0UELRRYOB" alt=""><figcaption></figcaption></figure>

***

## Spline & D5 XR & Webflow

**Online Demo:**

<https://architectural-design-3d-art.webflow.io/>

1. Open the [Spline](https://spline.design/) platform and create a new Spline project.

<figure><img src="/files/HXBgZKM50Xo5BYrnyLDB" alt=""><figcaption></figcaption></figure>

2. Upload the D5 XR PLY file from your local machine into the Spline project. Wait for the file to finish loading (large files may take some time).

<figure><img src="/files/T0fu8nOrwt3J6P5Mzjgo" alt=""><figcaption></figcaption></figure>

3. After loading is complete, switch the view mode from **Orthographic** to **Perspective**.

<figure><img src="/files/5OEci23sn8X0lgdKrSGV" alt=""><figcaption></figcaption></figure>

4. Adjust the viewing angle as needed.You may refer to official [Spline tutorials](https://spline.design/tutorials) to add interactive events.

<figure><img src="/files/XbxxLZqTfFJ6ABycP4QE" alt=""><figcaption></figcaption></figure>

5. After editing is complete, you can either:

* Share the project directly via URL
* Embed it into your personal website using embed code.

<figure><img src="/files/bBmnwZW0Lp2gZPXujO1C" alt=""><figcaption></figcaption></figure>

6. If the website is built with **Webflow**, select the **Spline Scene** component in Elements, and paste the Spline scene’s **viewer link** into the component settings.

| ![](/files/w3ahWQin9HCjKuc8xr7W) | ![](/files/whJI558LELyQ7dfAYZQ4) |
| -------------------------------- | -------------------------------- |

***

## Gemini & D5 XR

**Online Demo:**

<https://aistudio.google.com/apps/drive/1WPe-6MIuGFlhEbGKo7RqRAizpKCqzL21?fullscreenApplet=true&showPreview=true&showAssistant=true>

1. Open [**Google AI St**udio](https://aistudio.google.com/apps). You can use a D5 XR online link or a locally exported PLY file to create a custom **3D digital twin** presentation application.

<figure><img src="/files/ogTgE5o9Uvt7Z6xEc09i" alt=""><figcaption></figcaption></figure>

2. You may refer to the following **initial prompt example:**

> **Warning:** I want to create a web-based 3D architectural digital twin dashboard.\
The overall interface layout should match the reference image “D5 Render XR Studio INTERFACE.png”.\
The dashboard consists of three core modules:

1. Top Navigation Bar\
   The top bar includes:\
   Left side: Company or product logo, Project name

   Right side:A set of tab buttons; A drawer menu (expandable); The tab buttons contain three options:3D, Tour, Geo. When switching between tabs, the embedded iframe content inside the canvas must update synchronously according to the selected tab.
2. Sidebar (Project Information Panel)\
   The sidebar displays project introduction content for the current project. The text content comes from a file named “Project.txt.”

   The layout and typography should be generated based on the structure and meaning of the text. The UI style has a technological feel.

   Numerical or data-driven sections may be visualized using charts or infographics

   Under the heading “Project Overview”, add a carousel (slideshow) component:\
   The carousel displays images from my upload files “1.jpg” to “4.jpg.”Images should support click-to-view in full-screen mode. Smooth transitions and modern interaction behavior are preferred
3. Iframe Canvas (Main Viewport)\
   The main canvas area contains an embedded iframe.The iframe source should change dynamically based on the selected tab:

3D → [https://share.d5render.com/team-api/shortLink/SAKZC5](https://www.google.com/url?sa=E\&q=https%3A%2F%2Fshare.d5render.com%2Fteam-api%2FshortLink%2FSAKZC5)

Tour →[https://share.d5render.com/team-api/shortLink/C6TE3Q](https://www.google.com/url?sa=E\&q=https%3A%2F%2Fshare.d5render.com%2Fteam-api%2FshortLink%2FC6TE3Q)

Geo → [https://ion.cesium.com/stories/viewer/?id=6f16027d-ca89-491a-891c-8628002cc00c](https://www.google.com/url?sa=E\&q=https%3A%2F%2Fion.cesium.com%2Fstories%2Fviewer%2F%3Fid%3D6f16027d-ca89-491a-891c-8628002cc00c)

Only one iframe is visible at a time, and switching tabs updates the iframe source accordingly.

4. UI / Visual Style Requirements\
   The UI design should follow current modern design trends. Clean layout, high readability, and user-friendly interactions

Appropriate use of: Subtle animations, CSS visual effects, Smooth transitions. The interface should feel professional, polished, and suitable for architectural visualization and digital twin presentation


3. After refining the UI through multiple conversation iterations and achieving a satisfactory result, deploy your project using **Google AI Studio**.

<figure><img src="/files/1ahvZQ5wX4VWGXVwpYdZ" alt=""><figcaption></figcaption></figure>


---
