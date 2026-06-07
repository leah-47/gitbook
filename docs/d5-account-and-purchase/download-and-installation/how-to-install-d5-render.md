---
title: "How to install D5 Render?"
source_url: https://docs.d5render.com/d5-account-and-purchase/download-and-installation/how-to-install-d5-render
fetched: 2026-06-07
---

# How to install D5 Render?

## Download and Installation

The latest version can be downloaded from the [official website](https://d5render.com/), or directly by clicking the link below.

> The default installation directory for the ***D5 Render*** is on the C drive, and user-selected custom installation directories are supported. ***D5 Launcher*** is not supported to change installation directory.

The downloaded file is named **D5DeployTool**; double-click it to install. D5 Launcher is ticked by default and must be installed; D5 Render can be installed optionally.

* **D5Launcher-windows-x.x.x.xxxx.exe:** Used for the unified management of D5 Render, potential future products, and project files.
* **D5_Render_installer-x.xx.xx.xxxx.exe:** The D5 Render client.
* **D5DeployTool-windows-x.x.x.xxxx.exe:** The installation management tool.



> **Info:** By default, the software will download assets in the installation path, and after the installation is complete, it supports migrating assets to a custom directory in the Preferences. If you do not want to migrate assets, it is recommended to reserve a larger installation space.


## Hardware Check

After the software is installed and launched for the first time, we will perform a hardware check to ensure that your hardware and system configuration are up to standard for a smooth rendering experience.



* View [System Requirement](../../getting-started/quick-start#system-requirement.md)

## Silent Installation (CMD Installation)

### **1. Download** installation file&#x73;**:**&#x20;

Download all files required for silent installation and place them in the same folder.

* **Download link:**&#x20;

Option 1: Download files together- [**D5 Deployment Kit**](https://usa.api.d5render.com/d5-admin/sl/Ht9KVeQ4) (A zip file containing D5 Launcher, D5 Render and D5DeployTool)

Option 2: Download them separately- [**D5 Launcher**](https://usa.api.d5render.com/d5-admin/sl/LsY4vDq8)**,** [**D5 Render**](https://usa.api.d5render.com/d5-admin/sl/TO81V9bi) and [**D5DeployTool**](https://usa.api.d5render.com/d5-admin/sl/Qp7bLmA2)

* **What are they for?**
  * &#x20;**D5Launcher-windows-x.x.x.xxxx.exe:** Used for the unified management of D5 Render, potential future products, and project files. **(Required)**
  * **D5_Render_installer-x.xx.xx.xxxx.exe:** The D5 Render client. **(Required)**
  * **D5DeployTool-windows-x.x.x.xxxx.exe:** The installation management tool.

> **Warning:** **Note:**

If you also need to install DCC LiveSync plugins suited to your workflow, please visit the official website to download the corresponding plugins and follow the instructions in [**Section 2.4**](#id-2.4-example-2-install-d5-launcher-d5-render-and-dcc-livesync-plugins) to install them.




### 2. **Silent Installation**:

#### **2.1 Command Line Arguments**

<table><thead><tr><th width="286.2222595214844">Required Arguments</th><th></th></tr></thead><tbody><tr><td><code>--agreeEula=true</code></td><td>Agrees to the End User License Agreement (EULA).</td></tr><tr><td><code>--launcherPath="path"</code></td><td>Replace <code>path</code> with the file path of <code>D5Launcher.exe</code></td></tr><tr><td><code>--renderPath="path"</code></td><td>Replace <code>path</code> with the file path of <code>D5Render.exe</code>.</td></tr><tr><td><code>--installPath="path"</code></td><td>Replace <code>path</code> with the custom installation path for D5 Render. (Note: Custom path is not supported for D5 Launcher).</td></tr></tbody></table>

<table><thead><tr><th width="286.22222900390625">Optional Arguments</th><th></th></tr></thead><tbody><tr><td><code>--pluginPath="path"</code></td><td>Replace <code>path</code> with the file path of the D5 DCC LiveSync plugin installer (see <a href="#id-2.4-example-2-install-d5-launcher-d5-render-and-dcc-livesync-plugins">Section 2.4</a>).</td></tr><tr><td><code>--logDirPath="path"</code></td><td>Replace <code>path</code> with the custom output path for installation logs. If not specified, the default is <code>%TEMP%/D5Deploy/</code>.</td></tr><tr><td><code>--isForCurrentUser=true/false</code></td><td>Specifies whether to install for the current user only. Defaults to <code>true</code> if not specified.</td></tr><tr><td><code>--workspacePath="path"</code></td><td><p>Replace <code>path</code> with the custom D5 Workspace path. </p><p><em>(The "Workspace" function supports setting the storage location for all online library assets, local library assets, custom HDR/LUT/IES files, and some temporary files).</em></p><p>If not specified, a "D5 Workspace" folder will be created by default on the drive with the most available space. During an overwrite installation, the existing workspace path will be used.</p></td></tr><tr><td><code>--configPath="path"</code></td><td>Replace <code>path</code> with the file path of the <code>.ini</code> configuration file to execute the installation based on its content (see <a href="#id-2.5-example-3-install-using-an-.ini-configuration-file">Section 2.5</a>).</td></tr></tbody></table>

#### **2.2 Start Installation**

1. Run **Command Prompt** (cmd) as **Administrator**.
2. Enter the full path of the deployment tool followed by all required and optional arguments to initiate the installation (ensure all arguments are separated by spaces): `"X:\...\D5DeployTool-windows-x.x.x.xxx.exe" [arguments]`

> **Note:** Replace `X:\...\` with the actual directory path where you downloaded **the D5 DeploymentTool** in [Section 1,](#id-1.-download-installation-files) and replace `D5DeployTool-windows-x.x.x.xxx.exe` with the actual filename of the deployment tool (filenames may vary by version).

#### **2.3 Example 1: Install D5 Launcher and D5 Render Only**

Enter the following command in the Command Prompt to install D5 Launcher and D5 Render. (Replace the paths, filenames, and secret key with your actual data).

**Install D5 Launcher and D5 Render Only ↓**

```
"C:\D5 Deployment Kit\D5DeployTool-windows-1.1.0.0076.exe" --agreeEula="true" --launcherPath="C:\D5 Deployment Kit\D5Launcher-windows-1.1.0.0309.exe" --renderPath="C:\D5 Deployment Kit\D5_Render_installer-2.11.10.1771.exe" --installPath="C:\Program Files\D5 Render"
```

#### **2.4 Example 2: Install D5 Launcher, D5 Render, and DCC LiveSync Plugins**

> **Warning:** To install DCC LiveSync plugins (such as SketchUp, Revit, or Rhino plugins) simultaneously, please first download the corresponding plugin installers from the **Workflow** page on the official [D5 Render website](https://www.d5render.com/).


Enter the following command in the Command Prompt to install D5 Launcher, D5 Render, and the selected plugins. Multiple plugins can be installed at once. *(Replace the paths, filenames, and secret key with your actual data).*

**Install D5 Launcher, D5 Render, and DCC LiveSync Plugins ↓**

```
"C:\D5 Deployment Kit\D5DeployTool-windows-1.1.0.0076.exe" --agreeEula="true" --launcherPath="C:\D5 Deployment Kit\D5Launcher-windows-1.1.0.0309.exe" --renderPath="C:\D5 Deployment Kit\D5_Render_installer-2.11.10.1771.exe" --installPath="C:\Program Files\D5 Render" --pluginPath="C:\DCC\D5_LiveSync_Sketchup_usa_1.6.1.0020.exe" --pluginPath="C:\DCC\D5_Live_Sync_Rhino_usa_1.1.2.0005"
```

#### **2.5 Example 3: Install Using an .ini Configuration File**

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
```

Enter the following command in the Command Prompt to install using the configuration file: *(Replace the path and filename with your actual data).*

> **Danger:** **Note:**

In the **config.ini** file above, you must use two backslashes: **\\\\**


**Install Using an .ini Configuration File ↓**

```
"C:\D5 Deployment Kit\D5DeployTool-windows-1.1.0.0076.exe" --configPath="C:\Config\deployment.ini"
```

#### **3. Batch Installation**

You can use your preferred batch deployment tool to execute the mass installation using the commands described above. If you require assistance, please contact our sales team.

***

## **Silent Update**

To upgrade, simply download the newer installer and run the silent installation command using the same installation directory as before, but omit the *-workspacePath* parameter. This will perform an in-place upgrade. Example:

```javascript
D5_Render_installer-2.x.x.xxxx.exe -silent -agreeEula -isForCurrentUser=false -installPath="E:/D5 Render" -logPath="E:/"
```

> **Info:** **Note:**

Please replace **D5_Render_installer-2.x.x.xxxx.exe** with the name of the software programme which corresponds to the update downloaded.


***

## **Silent Uninstallation**

To uninstall D5 Render silently, use the following command:

```javascript
"E:/D5 Render/Uninstall.exe" -silent -deleteUserConfig
```



## Note:

(1)  Ensure that you have downloaded the appropriate version of D5 Render (e.g., v2.9.5 or higher).

(2)  Note: On Windows, backslashes **\\** in command-line arguments are treated as escape characters. Handle this by enclosing file paths in double quotes and using **/** instead of **\\** . For example, "C:/Program Files/D5 Render".

(3)  If using the parameter "*-isForCurrentUser=false*" to install for all users, you must run the script or command as an administrator; otherwise, the installation may fail.

(4)  Before actual deployment, run a silent installation in a test environment to ensure it executes correctly.

(5) Remember to back up user configurations and settings to avoid data loss during installation or uninstallation.


---
