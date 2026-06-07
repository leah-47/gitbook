---
title: "What is 'Real-time Path Tracing'?"
source_url: https://docs.d5render.com/user-guide/render/what-is-real-time-path-tracing
fetched: 2026-06-07
---

# What is 'Real-time Path Tracing'?

> Real-time Path Tracing is D5's self-developed Global Illumination (GI) technology scheme to optimize real-time rendering + image outputs + video outputs.

## 1. Preference - Legacy D5 GI Compatible Mode

In Preference > Rendering, users can enable ''Legacy D5 GI Compatible Mode''.

* Enabling this option activates the ReSTIR Surfel GI from D5 2.9 version to maintain visual consistency across legacy scenes.
* This option solely works for better compatibility. It will be removed in future releases.

> **Please note:**&#x20;
>
> 1. After comprehensive evaluation, due to performance issues, AMD graphics cards are currently not supported for real-time ray tracing in the current version. This option is invisible.
> 2. The GI scheme selection follows the client settings. If you enabled the "Real-Time Path Tracing (Experimental)" option in the previous version, updating to the new version through the client will result in the "Legacy D5 GI Compatible Mode" option remaining disabled by default in Preference.

<figure><img src="/files/AritQAgbpbECRaKA5FLh" alt=""><figcaption></figcaption></figure>

## 2. Display - Accumulation\&Custom Settings

The upper right scene control ‘Display - Precise Realtime Quality’, provides an ‘Accumulate’ button and custom settings.

> **Info:** **Note:**

Custom parameters do not affect the preview, only the quality of the accumulation mode, the rendered images and the rendered videos.

(After adjusting custom parameters, it is necessary to click ‘Accumulate F4’ to see the corresponding effect in the preview interface.)


### 2.1 Accumulate (shortcut F4)

When enabled, pixel samples will be accumulated until the real-time preview quality reaches the final output. Moving the camera or pressing the ESC button will terminate the process.

### 2.2 Custom parameters

> **Note:**
>
> When custom settings are enabled, they will be applied to the accumulation.&#x20;
>
> Otherwise, it's set by default to GI Precision at 1, Reflection Depth at 2, and SPP at 64.

* **GI Precision:** This parameter affects the number of GI bounces and includes 3 levels. The lower the level, the faster the accumulation converges; the higher the level, the more accurate the GI quality of the image.

> **Note:** The quality of GI in reflections is also affected by the ‘GI Precision’.

* **Refl. Depth:** Controls the number of times rays bounce between highly reflective material surfaces.
* **SPP:** Determines the number of times each pixel is sampled. Increasing the value helps optimize artifacts in challenging areas and enhance details but will also increase the rendering time.
* **Roughness limit:** The roughness of the material used in the calculation has an upper limit that can be adjusted. The default value is 0.5. Setting a higher value for this limit will result in more accurate accumulation and rendering, ensuring consistency between the preview and the final output.

<figure><img src="/files/HzBe4LL1Z9fEU6g6gDnv" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/fRUOLqixpbUv0z7jEtSA" alt=""><figcaption></figcaption></figure>

## 3. Major changes in the new GI

### 3.1 Improved GI Caching

The new GI solution has improved both quality and precision. It utilizes path tracing to calculate and cache ray bounces before rendering begins, thereby improving caching quality.

> For example: Below is a relatively special high-reflection floor scene.
>
> &#x20;In version 2.9 of the preview viewport, the floor did not accurately render highly reflective objects, appearing inaccurate and blackish. In version 2.10, the metal floor appears correct reflection effects.

<figure><img src="/files/nNMgFdckHutGLCUgq3yP" alt=""><figcaption></figcaption></figure>

### 3.2 Optimized GI bouncing details

GI bouncing details are more accurate in areas like the joint where the wall meets the floor.

### 3.3 Unbiased sampling and visibility detection

The sampling logic has been optimized to sample more important pixels in a more efficient way. This makes indirect lighting details closer to the Ground Truth.

> Especially in the corner parts of some indoor and outdoor scenes, the change is more obvious.

### 3.4 Optimized plant and fabric materials

Improved the color shading model for plant and fabric materials, fixing the color attenuation issue in light transmission, resulting in more physically accurate transmission effects. As a result of these improvements, the color of vegetation and their reflections may change if they were created using previous versions.

> **Info:** **Note**

Due to these improvements, the color of plants and their reflections in old archives may change.



---
