---
title: "Camera and Views"
source_url: https://docs.d5render.com/user-guide/view/camera
fetched: 2026-06-07
---

# Camera and Views



## Options

### **Exposure**

**Adjust the overall brightness of the image.**

* **With Auto Exposure switch on**, the renderer automatically analyzes the scene brightness and adjusts it to a moderate value.&#x20;
* **With Auto Exposure off**, you can manually adjust the Exposure parameter values.

The lower the Exposure value, the darker the image, and the higher the Exposure value, the brighter the image.

> **Warning:** * **Auto Exposure** is turned on by default in newly created projects.
* **The "Exposure" settings** here are linked to the exposure settings in "Effect panel--Post-processing".


### **FOV(Field of View)**

**Adjusts the Field of View (FOV) angle. The default field of view is 90°.**

* **The smaller the "Field of View"**, the smaller the area displayed on the screen, and **the subject in the original image will be "enlarged"** accordingly.
* **The larger "Field of View"**, the larger the area displayed on the screen, and **the subject in the original image will be "shrink"** accordingly.

> **Info:** In fact, the effect of reducing the FOV is also called Zoom-in, and the effect of increasing the FOV is also called Zoom-out.


### **Camera Clipping Plane**

**The clipping plane in D5 is the near clipping plane, which is arranged perpendicular to the camera.** After setting the distance between the camera and the plane, the scene between them will not be visible.



### **Depth of Field**

**Similar to real-world cameras, depth of field is based on the Focal Distance, blurring the scene in front of and behind the focal point.**&#x20;

* Turn on the Depth-of-Field switch, click **"Set Focus"**, click the object you want to focus on in the scene, and determine the focus position.&#x20;
* Also,when clicks **"Follow Focus"**,it can support the function of auto follow focus.&#x20;
* Adjust the value of the **"Blur"** parameter to change the strength of the depth-of-field effect.



## View

### **Perspective and Two-point Perspective**

* The **"Perspective"** is the default 3D space display mode.
* When **"Two-point Perspective"** is turned on, the vertical perspective lines in space are parallel to the vertical borders of the screen.

### **Orthogonal view**

**Orthogonal is a 2D planar display that contains six common view styles.**

> For more information on shortcuts, please refer to:<https://docs.d5render.com/user-guide/preference/how-to-view-and-change-the-default-shortcuts#common-shortcuts-for-d5-render>

| Modes                 | Shotcut |
| --------------------- | ------- |
| Perspective           | P       |
| Two-point Perspective | F8      |
| Top                   | T       |
| Bottom                | Alt + T |
| Front                 | F       |
| Back                  | Alt + F |
| Left                  | -       |
| Right                 | -       |


---
