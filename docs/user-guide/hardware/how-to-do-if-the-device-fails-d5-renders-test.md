---
title: "How to do if the device fails D5 Render's test?"
source_url: https://docs.d5render.com/user-guide/hardware/how-to-do-if-the-device-fails-d5-renders-test
fetched: 2026-06-07
---

# How to do if the device fails D5 Render's test?

## Quick Guide (Click to quickly jump)

[**Hardware and Solution** (prompts 'Unknown Graphics Card')](#hardware-and-solution)

<figure><img src="/files/yhWIYHa38kmsvpXdl4l9" alt="" width="563"><figcaption></figcaption></figure>

[**Software and Solution** ('Driver Version' or 'System' column is greyed out)](#software-and-solution)

<figure><img src="/files/MBLBMCHQLwjHCcngYp2M" alt="" width="563"><figcaption></figcaption></figure>

[**Checklist Overview**](#checklist)

***

## Hardware and Solution

*<mark style="color:orange;">Prompt: You did not meet the minimum requirements, please upgrade your current hardware.</mark>*

<figure><img src="/files/1Mnl3Mn5rNZmeypsYl8Z" alt="" width="563"><figcaption></figcaption></figure>

### 1. The graphics card does not meet the requirements to run D5.

**Description:**

In the System Info, the 'Graphics Card' and 'Driver Version' columns are showing as 'Unknown'. This typically indicates that your current graphics card may not be fully compatible with D5 Render.

D5 Render is based on real-time raytracing technology, so the current graphics cards must support real-time raytracing. Minimum requirement↓

| Brand  | Type                           |
| ------ | ------------------------------ |
| NVIDIA | GeForce GTX 1060 6GB and above |
| AMD    | RX 6400 and above              |
| Intel  | Arc A3 and above               |

<mark style="background-color:red;">For specific system requirements and</mark> <mark style="background-color:red;"></mark><mark style="background-color:red;">**supported GPU types**</mark><mark style="background-color:red;">, please refer to:</mark> [<mark style="background-color:red;">System Requirements for D5 Render | User Manual</mark>](./system-requirements-for-d5-render.md)

**Solution:**

* Go to the official website to check compatibility: current graphics cards that support DXR can be checked on [NVIDIA](https://www.nvidia.com/en-us/geforce/news/geforce-gtx-dxr-ray-tracing-available-now/), [AMD](https://www.amd.com/en/technologies/directx12), [Intel](https://www.intel.com/content/www/us/en/homepage.html).
* Upgrading to a supported graphics card is recommended for optimal performance.

> **Note:** Underperforming graphics cards cannot pass the test, please understand.

**FAQs:**

* **Why my GTX 1650 graphics card cannot run D5?**

RTX Series 60 cards generally provide better performance than Series 50 cards; for instance, **GTX 1060** outperforms **GTX 1650**.\
As GTX 1060 is the minimum requirement for running D5 Render, GTX 1650 cards are not supported and will fail the hardware test.

### 2. Detect a wrong graphics card (multiple graphics cards on the device)

**Description:**

D5 only supports Discrete Graphics Card (GPU), not integrated graphics Card (GPU). A double graphics card device will also fail the test if it defaults to using the integrated graphics card.

**Solution:**

* Please disable the other integrated graphics card in ‘Device Manager’.
* Specify 'Discrete' GPU (High-performance) option as the default in the system settings.
* Restart the device to retest.

> **Note:** Please ensure that the GPU used by D5 Render is a discrete graphics card.

***

## Software and Solution

*<mark style="color:orange;">Prompt: The current graphics card driver cannot support D5 Render due to compatibility issues. Please upgrade the driver to the latest version.</mark>*

<figure><img src="/files/YyUqI8gzduzy0rqn4GTF" alt="" width="563"><figcaption></figcaption></figure>

### 1. The driver version is too low/out-of-date

**Description:**

In your System Info interface, the Driver Version column not having a grey fill suggests a problem with your current driver. Updating your graphics card driver to version 531.14 is necessary for D5 Render to function normally.

**Solution:**

Visit the graphics card's official website, download and install the most recent driver version.

Please refer to: [How to view and upgrade graphics card driver? | User Manual](./how-to-view-and-upgrade-graphics-card-driver#header-1.md)

### 2. The Windows version is too low/out-of-date

**Description:**

* The minimum Windows version is 10.0.19044 (Win10 21H2).
* NVIDIA 531.14 and above graphics card drivers are not compatible with Windows 10 v1909 and below.

**Solution:**

Open Settings → Windows Update → Check for updates or use the [Update Assistant](https://www.microsoft.com/en-us/software-download/windows10) to update it to Windows 10 21H2 and above.

> **Note:** It is recommended to update the driver and system simultaneously to a higher version to avoid some errors caused by the incompatibility.

***

## Checklist Overview

* Hardware meets the minimum requirements (must support ray tracing),
* The 'Discrete' GPU has been configured as the default properly.
* Graphics card driver has been updated to an appropriate version,
* Windows system version is 21H2 or higher.


---
