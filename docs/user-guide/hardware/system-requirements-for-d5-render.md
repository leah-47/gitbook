---
title: "System Requirements for D5 Render"
source_url: https://docs.d5render.com/user-guide/hardware/system-requirements-for-d5-render
fetched: 2026-06-07
---

# System Requirements for D5 Render

D5 Render adopts real-time ray tracing technology, which has minimum requirements for graphics cards and system configuration. When D5 Render is launched for the first time, it will automatically check whether your computer meets the minimum requirements.

#### Minimum requirement: Nvidia GTX 1060, Intel Arc 3, AMD RX 6400

D5 Render’s real-time raytracing technology is built on DXR of Windows systems, and the current graphics cards that support DXR can be checked on [NVIDIA](https://www.nvidia.com/en-us/geforce/news/geforce-gtx-dxr-ray-tracing-available-now/), [AMD](https://www.amd.com/en/technologies/directx12), [Intel](https://www.intel.com/content/www/us/en/homepage.html).

| **Series**             | **Type**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NVIDIA GTX             | <p>GTX 1060 6GB<br>GTX 1660 6 GB、GTX 1660 TI 6 GB、GTX 1660 SUPER 6 GB<br>GTX 1070 8GB、GTX 1070 TI 8GB<br>GTX 1080 8GB、GTX 1080 TI 11 GB</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| NVIDIA RTX             | <p>RTX 5090 D 32GB、RTX 5090 32GB<br>RTX 5080 16GB<br>RTX 5070 Ti 16GB、RTX 5070 12GB<br>RTX 5060 Ti 16GB、RTX 5060 8GB</p><p>RTX 4090 24 GB、RTX 4080 16 GB / 12 GB、RTX 4070 Ti 12 GB、RTX 4070 12 GB / 8 GB、RTX 4060 Ti 16 GB/8GB、RTX 4060 8 GB、RTX 4050 6 GB<br>RTX 3090 Ti 24 GB、RTX 3090 24 GB<br>RTX 3080 Ti 16 GB / 12 GB、RTX 3080 16 GB / 12 GB / 10 GB / 8 GB<br>RTX 3070 Ti 8 GB、RTX 3070 8 GB<br>RTX 3060 Ti 8 GB、RTX 3060 12 GB / 6 GB<br>RTX 3050 8 GB / 4 GB、RTX 3050 Ti 4 GB<br>RTX 2080 Ti 11 GB、RTX 2080 SUPER 8 GB、RTX 2080 8 GB<br>RTX 2070 SUPER 8 GB、RTX 2070 8 GB<br>RTX 2060 SUPER 8 GB、RTX 2060 12 GB / 6 GB</p> |
| NVIDIA Quadro          | RTX A6000、RTX A5500、RTX A5000、RTX A4500、RTX A4000、RTX A3000、RTX A2000                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| AMD Radeon™            | RX 7900 XTX、RX 6950 XT、RX 6900 XT、RX 6800 XT、RX 6800、RX 6750 XT、RX 6700 XT、RX 6650 XT、RX 6600 XT、RX 6600、RX 6600M、RX 6500 XT、RX 6400、 PRO W6800、PRO W6600                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Intel(R) Arc™ A3/A5/A7 | A770 (16 GB)、A770 (8 GB)、A750、A380、A310、A550M、A770M、A730M 、A370M、A350M                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

### Please upgrade the graphics card driver to the latest version 

Graphics driver updates usually fix certain bugs, or optimize certain algorithms for the hardware.

D5 team works with the NVIDIA technical team to maximize the potential of RTX. Timely driver updates to ensure maximum performance can prevent D5 Render from crashing due to low driver versions.

* It is recommended to use the official NVIDIA software GeForce Experience to update the driver. [Download link](https://www.nvidia.com/en-us/geforce/geforce-experience/)
* Or you can download and install the driver by manually selecting the appropriate graphics card from NVIDIA’s official website. [Official GeForce Drivers | NVIDIA](https://www.nvidia.com/en-us/geforce/drivers/)
* AMD driver download website: [AMD Drivers and Support | AMD ](https://www.amd.com/en/support)
* Other GPU providers

### Please upgrade your system to Windows 10 v1809 or higher 

D5 Render’s real-time raytracing technology is built on DXR of Windows systems, and Windows systems have supported DX12 since Windows 10 v1809.

* For system upgrade you can refer to [Download Windows 10](https://www.microsoft.com/en-us/software-download/windows10)
  * If it’s already Windows 10, you can click “Update Now”.
  * If it’s not Windows 10 system, upgrading to Windows 10 is recommended.

> **NOTE：**\
> NVIDIA 531.14 and above graphics drivers are not compatible with Windows 10 v1909 and below, which will cause D5 to crash.&#x20;
>
> Recommendation: Update the system version to 21H2 and above. Click to download the update tool to update.

***

### FAQs 

#### 1. Why can not pass the hardware detection after updating to 2.5? 

1. Graphics Card Driver:

Please refer to the specifics: [How to view and upgrade graphics card driver?](./how-to-view-and-upgrade-graphics-card-driver.md)<br>

2. Windows version:

Due to the situation that "NVIDIA 531.14 and above graphics card drivers are not compatible with Windows 10 v1909 and below, which will cause D5 to get stuck", D5 version 2.5 optimizes the limitation of hardware detection and restricts the system version of devices using 531 and later versions of drivers. D5 version 2.5 optimizes the limitations of hardware detection and restricts the system version of devices using driver versions after 531.

In this case, the minimum Windows version is 10.0.19044 (win10 21H2).

In case of failed detection, you can use the update tool below.



#### 2. Why does D5 2.7 stuck at the loading window?

D5 2.7 requires the NVIDIA driver above 527.27 to open scene files.

[How to view and upgrade graphics card driver?](./how-to-view-and-upgrade-graphics-card-driver.md)

> Windows 10 1090 and lower systems with the latest driver will cause D5 to crash. Please upgrade the system to 21H2 or above versions.

#### 3. Does D5 support the cooperation of multiple graphics cards?

Currently, D5 primarily utilizes Dedicated GPU memory and does not support multi-graphics card parallel/interconnected operation.

**Therefore, it is advisable to keep one graphics card which is at a high level of performance.**


---
