---
title: "How to view and optimize graphics card usage?"
source_url: https://docs.d5render.com/user-guide/hardware/how-to-view-and-optimize-graphics-card-usage
fetched: 2026-06-07
---

# How to view and optimize graphics card usage?

### View graphics card usage <a href="#header-0" id="header-0"></a>

* Open Task Manager - Performance - GPU - View Dedicated GPU Memory Usage

<figure><img src="/files/4ICgfXYu2pMbRgosKs9E" alt=""><figcaption><p>GPU</p></figcaption></figure>

* Windows' own video memory detection data may not be accurate, we recommend using [GPU-Z](https://www.techpowerup.com/gpuz/).

> Detecting the sensor - memory used parameter can help with better video memory management.

> **Warning:** If your dedicated GPU memory usage has reached 80% and above, the core advantage of the graphics card has decreased and will be in an unstable state; at this time, D5 may lag or render slower, and there may be pop-ups reporting errors or flashbacks.


***

### Optimize graphics memory usage <a href="#header-1" id="header-1"></a>

The following settings are available for optimization：

* Start D5 Render with administrator privileges and restart your computer. The program will automatically modify the TDR values, which can improve the stability to a great extent.
* Turn on DLSS.
* Depth of field, Tyndall effect, and other settings can take up a lot of video memory, so use your discretion.
* Higher resolution mapping will also take up video memory, you can replace the mapping of materials farther away from the camera with a lower resolution mapping and try to avoid using replacement.
* More reflective scenes will reduce efficiency, you can turn the specular of materials far from the camera to 0 to cancel the reflection.
* Windows' own GPU usage data may not be accurate, we recommend using [GPU-Z](https://www.techpowerup.com/gpuz/). Check the sensor-memory used parameter for better memory management.


---
