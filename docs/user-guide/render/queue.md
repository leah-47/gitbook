---
title: "Why are plant shadows discontinuous in specific resolutions' outputs while preview is normal?"
source_url: https://docs.d5render.com/user-guide/render/queue
fetched: 2026-06-07
---

# Why are plant shadows discontinuous in specific resolutions' outputs while preview is normal?

If the ↓ output effect occurs, use the D5 client version after 2.5.2 and modify the relevant parameters to solve this phenomenon. (If you are not sure whether you can use this solution, please contact us for specific confirmation or operation.)

## Phenomenon

Preview is normal, but output of a specific resolution image or a specific video clip appears to have plant shadows truncated.

<div align="left"><figure><img src="/files/MVLC2mshMS0lqw41zycN" alt=""><figcaption><p>Output specific (resolution) clips, plant shadows not linked</p></figcaption></figure></div>

<div align="left"><figure><img src="/files/TqAsg7Ph68l8c8idcqYz" alt=""><figcaption><p>2k resolution image preview/output is normal, 4k/8k resolution image output, tree shadow is cut off.</p></figcaption></figure></div>

## Situation 1: After update to version 2.11, shadows of plants or buildings in output images are cut off at specific resolutions and angles.

> **Warning:** **Note**

1. This modification applies only to clients in versions 2.11.1 and above.
2. This modification only affects image output but not video output.
3. After modifying this configuration and saving it, no restart is required; the changes will take effect the next time rendering images.


#### 1.  Find the `config.ini` file located in the corresponding D5Config directory. <a href="#header-2" id="header-2"></a>

<figure><img src="/files/i9emNF6Vw3wd3uSnxmVi" alt=""><figcaption></figcaption></figure>

#### 2. Add the following configuration fields to the `config.ini` file: <a href="#header-3" id="header-3"></a>

```
[Render]
ViewCache=1
```

<figure><img src="/files/Abdwf2TqW7Sc5bDPhpkV" alt=""><figcaption></figcaption></figure>

## Situation 2:  When outputting images at specific resolutions or specific video clips, plant shadows are cut off.

> **Warning:** **Note**

1. This modification applies to both image and video output. If the problem occurs only with image output, it is recommended to use the first solution mentioned above, as it's more accurate.


#### 1. Save a backup of the current abnormal scene and exit D5.

#### 2. Find the Engine.ini file under the corresponding Config path.

> Config path: <mark style="color:red;">`%localappdata%/d5_immerse/Saved/Config/`</mark>

* The "Administrator" in the screenshot is the window system user name, which may be different for each user;
* AppData is a hidden folder, you need to tick the hidden items in \[View/Hide].
* The Config path generally shows only the folder named Windows (but may show both Windows & WindowsNoEditor folders).

> Note: If only the folder named `Windows` is displayed, only the `Engine.ini` file under the Windows folder needs to be modified; if both `Windows` & `WindowsNoEditor` folders are displayed, the `Engine.ini` file under both folders need to be modified.

<div align="left"><figure><img src="/files/Vvrf3Wch2u48YwSdHS8T" alt=""><figcaption></figcaption></figure></div>

<div align="left"><figure><img src="/files/0Cu1T0y0m1wIbdEFVcU1" alt=""><figcaption><p>If only the folder named Windows is displayed, only the Engine.ini file under the Windows folder needs to be modified; if both Windows &#x26; WindowsNoEditor folders are displayed, the Engine.ini file under both folders need to be modified.</p></figcaption></figure></div>

#### 3. Add the corresponding fields in the Engine.ini file, modify the parameters and save the changes.

Field：\
`[/Script/Engine.RendererSettings] r.RayTracing.Geometry.InstancedStaticMeshes.LowScaleCullRadius=15000.0f`

* The default initial value of the parameter is 15000.0f
* When modifying this parameter, you need to close D5. After modifying the parameter, reopen D5 and test the output with a specific resolution to see if the output is normal, in order to verify whether the modified parameter is sufficient.
* If the output with the specific resolution is still abnormal, modify the parameter to a higher volume.

> For example: \
> If the parameter is 20000, and the output of a specific resolution image/specific clip is still abnormal, then modify the parameter to a higher value (20000→30000) and save the Engine.ini file. Then restart D5 and render the specific resolution image/clip again for verification.

<figure><img src="/files/jvo78ygEw8WtjmTrD4Jh" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/ML8sZprLnz6kKFIwPmhe" alt=""><figcaption></figcaption></figure>


---
