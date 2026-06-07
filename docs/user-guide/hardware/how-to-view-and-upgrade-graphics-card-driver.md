---
title: "How to view and upgrade graphics card driver?"
source_url: https://docs.d5render.com/user-guide/hardware/how-to-view-and-upgrade-graphics-card-driver
fetched: 2026-06-07
---

# How to view and upgrade graphics card driver?

> Graphics card driver updates usually fix certain bugs or optimize certain algorithms for the hardware. Keeping your graphics card drivers up to date to ensure maximum performance can prevent D5 Renderer from flashing, crashing, etc. due to low driver versions.

### View Graphics Card Driver 

1\. Click on the 'Help > System Info' in the lower left corner of D5 Launcher.



2\. Type `dxdiag` in the search bar at the bottom of your computer desktop, select 'Run as an administrator'.And then switch to the 'Display' column, your current graphics card driver will be displayed.





### Upgrade the Graphics Card Driver  

* Update the driver through NV’s official software [GeForce Experience](https://www.nvidia.com/en-us/geforce/geforce-experience/), or download and install the driver by manually selecting the appropriate graphics card from [NVIDIA’s official website](https://www.nvidia.com/download/index.aspx)
* Update the driver at AMD’s official website [AMD Drivers and Support](https://www.amd.com/en/support)
* Update the driver at Intel’s official website [Intel® Driver & Support Assistant](https://www.intel.com/content/www/us/en/support/detect.html)
* Use third-party software.

**Manually search for drivers:**

1. According to your specific hardware configuration, please select the appropriate graphics card driver. You can find multiple versions of the graphics card driver on the official NVIDIA website, allowing you to download the corresponding version.
2. Double-click the downloaded driver to install it.
3. Retain the default directory, click ok, and wait until the decompression is complete.
4. Select Install "NVIDIA Graphics Driver ", click “Agree and continue”
5. Select ‘‘Custom’’, click ‘‘Next’’
6. Click ‘‘Perform Clean Installation’’, click Next
7. After the installation is complete, restart the PC

> Note: During the installation process, it is normal that the monitor may uninterruptedly experience several black screens or changes in display size.



***

### Graphics card driver with known issues:

#### NVIDIA：

1. **526.47:** can **cause your D5 file to fail to open or your computer to crash when placing lights**; recommend replacing with another normal driver version.
2. **Driver version is incompatible with the system version:** ***Graphics card drivers version 531 and above*** are not compatible with *system **versions 1909 and below***, which **may cause system instability, crashes, or other performance issues**. Recommend updating your system minor version to 21H2 and above.
3. **572.16:** **FPS decreases and output time increases significantly longer during D5 scene preview**; (Nvidia has not yet been fully launched for repair versions) It is recommended to fall back to the 560 or above version.

#### AMD：

1. **Adrenalin 22.10.3:** will cause D5 to flash/not run properly.

***

### FAQs 

#### 1. Why does it say "known problem with graphics driver"? 

Recommendation: Update the driver to a newer version.


---
