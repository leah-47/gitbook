---
title: "D5 Lab Version (LAB) Installation Guide"
source_url: https://docs.d5render.com/instruction-for-d5-labversion-lab/download-and-installation
fetched: 2026-06-07
---

# D5 Lab Version (LAB) Installation Guide

This document provides installation instructions for the Lab License, designed for school IT administrators. This is an initial version, and we will promptly address any issues. Thank you for your support!

## 1. Preparation

> **Warning:** Before proceeding, please verify with our sales team that your D5 Lab subscription is active.


### 1.1 Log in to the Lab Management Console

1. Visit [D5 MySpace](https://myspace.d5render.com) and log in using your Lab Administrator account.
2. Click `Lab Dashboard` to access your organization's Lab Management Console.



### 1.2 Set Your Organization Address

1. Click `Address Setup`.
2. In the pop-up window, enter the **Country** and **City** where your organization is located.
3. *You may configure up to three different addresses.*

> **Warning:** If you cannot find your city in the list, please contact our sales team.




### 1.3 Download installation files

Click `D5 Lab Installer` **to download the necessary installation files for the D5 Lab version. Please unzip the downloaded file to extract the following three installation packages:**

* **D5Launcher-windows-x.x.x.xxxx.exe:** Used for the unified management of D5 Render, potential future products, and project files. (Required)
* **D5_Render_installer-x.xx.xx.xxxx.exe:** The D5 Render client. (Required)
* **D5DeployTool-windows-x.x.x.xxxx.exe:** The installation management tool.

> **Warning:** If you also need to install DCC LiveSync plugins suited to your workflow, please visit the official website to download the corresponding plugins and follow the instructions in [**Section 2.4**](#id-2.4-example-2-install-d5-launcher-d5-render-and-dcc-livesync-plugins) to install them.


### 1.4 Retrieve the Installation Secret Key

Before installation, please ensure you have your organization's **Secret Key** ready.

1. In the Lab Management Console, click `Lab Details` to navigate to the Organization Details page.
2. Click `Management` to set the Organization Name and manage the key.
3. Click `Copy Secret Key`. You will need this key during the installation process.

## 2. Silent Installation

### 2.1 Command Line Arguments

<table><thead><tr><th width="286.2222595214844">Required Arguments</th><th></th></tr></thead><tbody><tr><td><code>--agreeEula=true</code></td><td>Agrees to the End User License Agreement (EULA).</td></tr><tr><td><code>--useCid=true</code></td><td></td></tr><tr><td><code>--launcherPath="path"</code></td><td>Replace <code>path</code> with the file path of <code>D5Launcher.exe</code></td></tr><tr><td><code>--renderPath="path"</code></td><td>Replace <code>path</code> with the file path of <code>D5Render.exe</code>.</td></tr><tr><td><code>--installPath="path"</code></td><td>Replace <code>path</code> with the custom installation path for D5 Render. (Note: Custom path is not supported for D5 Launcher).</td></tr><tr><td><code>--labSecret=string</code></td><td>Replace <code>string</code> with the installation secret key prepared in the previous step.</td></tr></tbody></table>

<table><thead><tr><th width="286.22222900390625">Optional Arguments</th><th></th></tr></thead><tbody><tr><td><code>--pluginPath="path"</code></td><td>Replace <code>path</code> with the file path of the D5 DCC LiveSync plugin installer (see <a href="#id-2.4-example-2-install-d5-launcher-d5-render-and-dcc-livesync-plugins">Section 2.4</a>).</td></tr><tr><td><code>--logDirPath="path"</code></td><td>Replace <code>path</code> with the custom output path for installation logs. If not specified, the default is <code>%TEMP%/D5Deploy/</code>.</td></tr><tr><td><code>--isForCurrentUser=true/false</code></td><td>Specifies whether to install for the current user only. Defaults to <code>true</code> if not specified.</td></tr><tr><td><code>--workspacePath="path"</code></td><td><p>Replace <code>path</code> with the custom D5 Workspace path. </p><p><em>(The "Workspace" function supports setting the storage location for all online library assets, local library assets, custom HDR/LUT/IES files, and some temporary files).</em></p><p>If not specified, a "D5 Workspace" folder will be created by default on the drive with the most available space. During an overwrite installation, the existing workspace path will be used.</p></td></tr><tr><td><code>--configPath="path"</code></td><td>Replace <code>path</code> with the file path of the <code>.ini</code> configuration file to execute the installation based on its content (see <a href="#id-2.5-example-3-install-using-an-.ini-configuration-file">Section 2.5</a>).</td></tr></tbody></table>

### 2.2 Start Installation

1. Run **Command Prompt** (cmd) as **Administrator**.
2. Enter the full path of the deployment tool followed by all required and optional arguments to initiate the installation (ensure all arguments are separated by spaces): `"X:\...\D5DeployTool-windows-x.x.x.xxx.exe" [arguments]`

> **Note:** Replace `X:\...\` with the actual directory path where you downloaded the D5 Deployment Kit in [Section 1.3](#id-1.3-download-installation-files), and replace `D5DeployTool-windows-x.x.x.xxx.exe` with the actual filename of the deployment tool (filenames may vary by version).

### 2.3 Example 1: Install D5 Launcher and D5 Render Only

Enter the following command in the Command Prompt to install D5 Launcher and D5 Render. (Replace the paths, filenames, and secret key with your actual data).

**Install D5 Launcher and D5 Render Only ↓**

```
"C:\D5 Deployment Kit\D5DeployTool-windows-1.1.0.0076.exe" --agreeEula="true" --useCid=true --launcherPath="C:\D5 Deployment Kit\D5Launcher-windows-1.1.0.0309.exe" --renderPath="C:\D5 Deployment Kit\D5_Render_installer-2.11.10.1771.exe" --installPath="C:\Program Files\D5 Render"  --labSecret=your_lab_secret
```

### 2.4 Example 2: Install D5 Launcher, D5 Render, and DCC LiveSync Plugins

> **Warning:** To install DCC LiveSync plugins (such as SketchUp, Revit, or Rhino plugins) simultaneously, please first download the corresponding plugin installers from the **Workflow** page on the official [D5 Render website](https://www.d5render.com/).


Enter the following command in the Command Prompt to install D5 Launcher, D5 Render, and the selected plugins. Multiple plugins can be installed at once. *(Replace the paths, filenames, and secret key with your actual data).*

**Install D5 Launcher, D5 Render, and DCC LiveSync Plugins ↓**

```
"C:\D5 Deployment Kit\D5DeployTool-windows-1.1.0.0076.exe" --agreeEula="true" --useCid=true --launcherPath="C:\D5 Deployment Kit\D5Launcher-windows-1.1.0.0309.exe" --renderPath="C:\D5 Deployment Kit\D5_Render_installer-2.11.10.1771.exe" --installPath="C:\Program Files\D5 Render" --pluginPath="C:\DCC\D5_LiveSync_Sketchup_usa_1.6.1.0020.exe" --pluginPath="C:\DCC\D5_Live_Sync_Rhino_usa_1.1.2.0005" --labSecret=your_lab_secret
```

### 2.5 Example 3: Install Using an .ini Configuration File

The tool supports `.ini` configuration files, allowing you to store all parameters in a single file for deployment.

**Example of .ini ↓**

```
[InstallConfig]
agreeEula=true
launcherPath="C:\\D5 Deployment Kit\\D5Launcher-windows-1.1.0.0309.exe"
renderPath="C:\\D5 Deployment Kit\\D5_Render_installer-2.11.10.1771.exe"
pluginPath1="C:\\DCC\\D5_LiveSync_Sketchup_usa_1.6.1.0020.exe" // Note: Parameter names must be numbered here. Even if installing only 1 plugin, use pluginPath1.
pluginPath2="C:\\DCC\\D5_Live_Sync_Rhino_usa_1.1.2.0005" // Note: Parameter names must be numbered sequentially.
logDirPath="C:\\Logs"
workspacePath="C:\\D5Workspace"
installPath="C:\\Program Files\\D5 Render"
isForCurrentUser=false
useCid=true
labSecret=your_lab_secret
```

Enter the following command in the Command Prompt to install using the configuration file: *(Replace the path and filename with your actual data).*

> **Danger:** **Note:**

* In the config.ini file above, you must use two backslashes: **\\\\**
* The **“Note”** in the example is provided solely for explanatory purposes; please do not include this comment in actual use.

  <div align="left"></div>


**Install Using an .ini Configuration File ↓**

```
"C:\D5 Deployment Kit\D5DeployTool-windows-1.1.0.0076.exe" --configPath="C:\Config\deployment.ini"
```

## 3. Batch Installation

You can use your preferred batch deployment tool to execute the mass installation using the commands described above. If you require assistance, please contact our sales team.

## FAQ: Why are devices not appearing in the Lab Management backend?

Even after a successful installation, devices will only be registered in the backend once they have been initialized on the client side:

* **Run the D5 Launcher** to display the **Device ID**.
* **Open the D5 Render program** to display the **Last Active Time**.




---
