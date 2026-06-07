---
title: "How to install plugins?"
source_url: https://docs.d5render.com/workflow/general-questions/how-to-install-plugins
fetched: 2026-06-07
---

# How to install plugins?

It is currently supported for users to install the online version of **D5 LiveSync plugins** using silent installation mode through the command line.

## Method 1: Install using installation packages

### 1. Download the plugin 



### 2. Launch the file



### 3. Tick the corresponding DCC version



### 4. Start the installation



### 5. Complete the installation

<div data-full-width="false"></div>

## Method 2: Silent Installation (command line) 

### 1. Download the plugin 

### 2. Open Windows Command Prompt 

Enter CMD in the Windows search bar and select ‘Run as administrator’ to open the Command Prompt.

### 3. Utilize the "cd" command in the command line to navigate the directory containing the plugin installation package (.exe file). 

> E.g. If the plugin installation package is located under the path **C:\Users\User\Desktop**, we can type **`cd C:\Users\User\Desktop`** and then Enter.

### 4. Enter the name of the plugin installation package (.exe file) and add the extension 

> E.g. **`D5_LiveSync_Sketchup_usa_latest.exe`**

### 5. Enter the installation instructions on the command line 

Paste the command **`/sp- /silent /allusers /norestart`** OR **`/sp- /silent /currentuser /norestart`** after the plugin extension.

> E.g.\
> In the image below, use the command line to install the D5 LiveSync for SketchUp, the download location of the plugin is at **C:\Users\Administrator\Downloads**

### 6. Click Enter to start the silent installation 



## FAQs

### Q1. Why does it prompt 'please install the latest version of D5 Render, if you have already installed the latest version'?

If you encounter this error, please check if you have installed only D5 Converter but have not installed D5 Render.

The D5 Converter is a bridge plugin between the modeling software and the D5 Render.  If you want the run the plugin, please install D5 Render first.

If you want to download D5 Render, please go to the official website. <https://www.d5render.com/?_sasdk=fZ2xvYmFsXzExMDM4Nw>


---
