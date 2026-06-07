---
title: "How to install plugins?"
source_url: https://docs.d5render.com/d5-account-and-purchase/download-and-installation/how-to-install-plugins
fetched: 2026-06-07
---

# How to install plugins?

> It is currently supported for users to install the online version of **D5 LiveSync plugins** using silent installation mode through the command line.

## Method 1: Install using installation packages

### 1. Download the plugin <a href="#header-1" id="header-1"></a>

<figure><img src="/files/wqdEJceGN8dVfFykm1BM" alt=""><figcaption></figcaption></figure>

### 2. Launch the file

<figure><img src="/files/VRwK4hAo5GrAoZChm9P6" alt=""><figcaption></figcaption></figure>

### 3. Tick the corresponding DCC version

<figure><img src="/files/RZcq4ib784pEOJFZy29g" alt="" width="447"><figcaption></figcaption></figure>

### 4. Start the installation

<figure><img src="/files/BU5QYmDAJpnMTuPbwkUM" alt="" width="446"><figcaption></figcaption></figure>

### 5. Complete the installation

<figure><img src="/files/8v6uyV1ZESo826P82bOr" alt=""><figcaption></figcaption></figure>

## Method 2: Silent Installation (command line) <a href="#header-0" id="header-0"></a>

### 1. Download the plugin <a href="#header-1" id="header-1"></a>

### 2. Open Windows Command Prompt <a href="#header-2" id="header-2"></a>

Enter CMD in the Windows search bar and select ‘Run as administrator’ to open the Command Prompt.

### 3. Utilize the "cd" command in the command line to navigate the directory containing the plugin installation package (.exe file). <a href="#header-3" id="header-3"></a>

> E.g. If the plugin installation package is located under the path **C:\Users\User\Desktop**, we can type <mark style="color:red;">`cd C:\Users\User\Desktop`</mark> and then Enter.

### 4. Enter the name of the plugin installation package (.exe file) and add the extension <a href="#header-4" id="header-4"></a>

> E.g. <mark style="color:red;">`D5_LiveSync_Sketchup_usa_latest.exe`</mark>

### 5. Enter the installation instructions on the command line <a href="#header-5" id="header-5"></a>

Paste the command <mark style="color:red;">`/sp- /silent /allusers /norestart`</mark> OR <mark style="color:red;">`/sp- /silent /currentuser /norestart`</mark> after the plugin extension.

> E.g.\
> In the image below, use the command line to install the D5 LiveSync for SketchUp, the download location of the plugin is at **C:\Users\Administrator\Downloads**

### 6. Click Enter to start the silent installation <a href="#header-6" id="header-6"></a>

<figure><img src="/files/50eMeTsocTroCm5i2AaI" alt=""><figcaption></figcaption></figure>

## FAQs

### Q1. Why does it prompt 'please install the latest version of D5 Render, if you have already installed the latest version'?

If you encounter this error, please check if you have installed only D5 Converter but have not installed D5 Render.

The D5 Converter is a bridge plugin between the modeling software and the D5 Render.  If you want the run the plugin, please install D5 Render first.

If you want to download D5 Render, please go to the official website. <https://www.d5render.com/?_sasdk=fZ2xvYmFsXzExMDM4Nw>


---
