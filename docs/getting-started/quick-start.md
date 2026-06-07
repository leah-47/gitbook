---
title: "Quick Start"
source_url: https://docs.d5render.com/getting-started/quick-start
fetched: 2026-06-07
---

# Quick Start

Hi! :wave:

Welcome to D5 Render. Here you can find help documentation and instructions for using D5 Render and the various workflow plugins.

If you are just getting started, you can take a look at the brief introduction below, or use "Search" to find the content you are looking for.

## System Requirement

The minimum GPU that can run D5 Render is NVIDIA GeForce GTX 1060 6GB.&#x20;

Recommended configurations are NVIDIA GeForce RTX 2060 or higher, or Quadro RTX series graphics cards.

Also, D5 rendering pipeline is based on DX12 and DXR. Therefore, your computer system needs to be Windows 10 and version 1809 or higher, and a graphics driver of Nvidia 471.68 or higher is recommended.

> **Warning:** It is recommended that you upgrade your graphics card driver to the latest version.


A configuration check is performed at the first launch of the software to ensure that the hardware and system configuration is up to standard for a smooth rendering experience.



***

## Download & Installation

Download directly from the official site <https://www.d5render.com/?_sasdk=fZ2xvYmFsXzExMDM4Nw>

Versions prior to 2.5: Unzip the installation package after downloading, and follow the prompts to install D5 Renderer. The default installation path of D5 Renderer is in C drive, user-defined installation path is supported.

The software downloads assets in the installation path by default, and after the installation is complete, it supports the migration of assets to a custom path in the "Preferences". If you don't want to migrate the assets temporarily, it is recommended to reserve a larger installation space.

### - Version 2.5 (Simplified installation process)：

After downloading the installation package, the download and installation process will be executed automatically. Support selecting the path of the workspace in the installation interface, selecting in advance the location for storing assets, local resources and temporary files. In the permission settings, you can choose to install only for the current user or use administrator privileges to install for all users.

### - Versions after 2.11 (welcome page upgraded to D5 launcher)

#### Download and Install

**D5 Launcher:**

* Versions after 2.11 require the installation of D5 launcher before downloading.
* After downloading the installation package, the download and installation process will run automatically.
* Changing the installation directory is not supported.
* You can select the workspace directory in the installation interface to choose the location for storing assets, local resources, and temporary files in advance.
* In the permissions settings, you can choose to install for the current user only or use administrator permissions to install for all users.



**D5 Render:**

* Open D5 Launcher.
* Click the download button on D5 launcher homepage, select the download location, download and install.





#### What is D5 Launcher?

In version 2.11, we introduced the all-new **D5 Launcher**. After upgrading, the original welcome page will be replaced by this independent launcher. When you open a D5 scene, the launcher will automatically minimize to your system tray. This ensures it won't interfere with your workflow, but it can be called up for use at any time.



**Home**

● You can choose to create a **new project** or **open an existing one**.

● In **Recent**, you can view the projects you've saved. You can also download and install plugins on the workflow page for seamless integration with your familiar modeling software.

● You can stay informed with **D5's updates and announcements** directly on the homepage, where you can also explore **case studies (Demo Scene Files)** created with D5 Render.

● You can also view the current renderer version on the homepage.

**Workflow**

● The **D5 Launcher** now integrates D5 Render, D5 Lite, and the D5 Sync plugin, with plans to gradually incorporate even more D5 tools and resources in the future.

● Through the D5 Launcher, you can now **log in, download, install, and update services.** It also lets you quickly **start new rendering projects**, access your **recent or all projects**, and get the latest **tutorials, demo scenes, news, and event information.**



***

**Works**

D5 Works is a 3D platform for architecture, landscape and interior design professionals, designed to help creators efficiently access and manage high-quality resources.



**Online Library:**

* You can directly browse and download 3D models, materials, and other assets in Works. Click on the asset to start downloading. The asset card will display download progress, providing an interactive experience consistent with the online assets library in the current renderer.
* Download Location: The default path is`D5 WorkSpace\content\OtherAssets`; The Asset details page supports customizing the download location of a single asset.
* Right mouse button material thumbnail, call out menu options:
  * Download (when not downloaded)
  * Show in folder (when downloaded)
  * Favorite
  * View Details
  * Report a problem
* Click on downloaded footage to move it into the Lite or D5 Render and add it to the current scene with one click.
  * The mouse moves into the Lite or D5 Render viewport, and the mouse cursor style becomes the asset thumbnail style.
  * After confirming the placement position, click the left mouse button, and the asset import progress bar will appear in the middle of the interface. After the import is completed, the placement will end.

**My List:**

* Focus on viewing the list of favorite and purchased assets (including free assets) for convenient calling.



> 💡Tip:
>
> The "combined model" is placed into the scene in Render from the Launcher. You need to manually click to \[Update] assets (when the dependent model is not downloaded)

***

**Projects**

* From the **Projects menu**, you can **open an existing project** or **create a new one**.
* You can **view and access all your projects** within the project interface.
* The **Project menu** also offers a **project merge function** (this is a Professional access feature).



**Setting**

In the settings menu, you can set parameters related to D5 launcher.



> Note: Renderer-related parameters need to be set in the renderer.

**Help**

The **Help menu** provides links to D5 Render's official accounts, the Help Center, and the official forum. From here, you can also collect logs and view system information.



**Account**

**Log in to your D5 account** via the bottom-left of the window; once logged in, you'll be able to **view your account status.**



***

## D5 Render Interface Overview

D5 Render is comprised of several different parts: the **main interface, material library window**, and **rendering mode**.

**Main interface:** This is the primary area for creating scenes, adjusting models, and editing materials.

**Rendering mode:** Added rendering settings and editing panels to the main interface.

**Assets library:** Accessible once you've entered the main interface, this library is displayed independently.

## Supported formats

D5 Render can load these file formats directly:

* .d5a (D5 render): D5 Render model format
* .skp (SketchUp): **SketchUp 2017 and higher**
* .3dm (Rhino): **Rhino 6.5 and higher**
* .fbx: supports reading model data, does not include material information.
* .abc: only supports importing .abc files into the project scene.

If you use other modeling software, you can use the workflow plugins to import models into D5 Render.

## Preparation

* Check the model surface orientation, make sure the model face normals are oriented correctly, surface rendering with reversed normals may be incorrect.
* Please make sure the model is complete, try not to have broken or overlapping surfaces in the camera to avoid rendering problems.
* The UV coordinates of the model are important, try to organize them well before importing them into D5. After importing into D5, you can also do stretching, offsetting, rotating, tri-planar mapping, etc. on the textures' UVs.


---
