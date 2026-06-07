---
title: "Common issues | D5 Sync for 3ds Max"
source_url: https://docs.d5render.com/workflow/3ds-max/common-issues-or-d5-sync-for-3ds-max
fetched: 2026-06-07
---

# Common issues | D5 Sync for 3ds Max

## &#x20;1. Why does the menu bar in 3ds Max display "D5" and "D5 Render"?

The "D5 Render" displayed in the menu bar is an older version (version 2.98), and "D5" is the current newer version;

If you need to keep only "D5", please select "Customize - Customize User Interface - Menu - D5 Converter - Delete - Save" in the menu bar to keep only "D5".

<div align="left"></div>

## 2. Why does the D5 converter - 3ds Max export .skp files slowly?

Due to the limitations of export efficiency, exporting larger 3ds Max files (over 1.5G) to .skp is indeed slower.

Suggestion: If you need to import to D5, you can directly use the linked workflow; if you need to export .skp files, you can try to export the overall model in multiple .skp files.

## 3. Why does the transparency map in the material get lost when the 3ds Max model is synchronized to D5?

The transparency map needs to be added to the "Opacity" map slot in the 3ds Max material.&#x20;

After synchronization or export to D5, it will automatically correspond to the transparency material template.

## 4. What types of 3ds Max lights are supported for import into?

Currently, Vray Light Dome/Vray Light Mesh/Vray Light Environmental Light are not supported.

| 3ds Max Lights type                 | 3ds Max Lights parameters                                                  | D5 Lights   |
| ----------------------------------- | -------------------------------------------------------------------------- | ----------- |
| Standard-Target/Free Spotlight      | location, attenuation-use-end, light cone-aspect, orientation, light color | Spotlight   |
| Standard-Target/Free Parallel Light | light cone-aspect, light color                                             | Strip light |
| Standard - Floodlight               | colour                                                                     | Point light |
| VRay Plane                          | location, size (light length and width), orientation, temperature/colour   | Strip light |
| VRay Sphere                         | location, colour                                                           | Point light |
| VRay IES                            | ies files, rotation                                                        | Spotlight   |
| Corona Light                        | ies file, temperature/colour                                               | Spotlight   |
| Corona Rect                         | location, size (light length and width), orientation, temperature/colour   | Rect light  |
| Corona Disk                         | location, temperature/colour                                               | Spotlight   |
| Corona Sphere                       | location, temperature/colour                                               | Point light |
| Corona Cylinder                     | location, temperature/colour                                               | Rect light  |
| Corona Sun                          | location                                                                   | Strip light |
| Arnold Light                        |                                                                            | Point light |
| Photometric light                   |                                                                            | Point light |

## 5. Why do the materials of the 3ds Max model lose or have effect issues after being synchronized to D5?

Please refer to the instructions for the current material support in D5 Converter-3ds Max:

* Dirt Material: When there are both occluded and non-occluded maps, the non-occluded map is taken.
* The current version only supports basic mapping for procedural maps such as falloff, mix, composite, etc., and will be individually optimized for these nodes in the future.

Suggestions: Directly remove the falloff node, or replace it with a material library material (When the IOR is greater than or equal to 10, the D5 material metalness parameter is 1, it is recommended to manually adjust the IOR to below 10 or lower the metalness parameter in D5).

## 6. How to uninstall D5 Converter-3ds Max?

Method 1: Click on "Windows System-Start Menu-Plugin Uninstaller-Uninstall D5 Converter for 3ds Max".

<div align="left"></div>

Method 2: Uninstall it through "Computer-Control Panel-Programs-Uninstall a program".



## 7. Why does the model deviate when aligning two objects during export or snyc using the D5 Converter-3ds Max plugin?

When using D5 2.4 version, align the group structure objects （export or snyc）with non-group structure objects, the model will deviate by 90°.

Suggestion: Keep all objects in the D5 scene as either group structure objects or non-group structure objects for correct alignment.

## 8. Why does the exported .d5a file deviate after using the sync coordinate?

After importing and saving the .d5a file in D5 version 2.3, the scene is opened in D5 version 2.4, and the .d5a file is imported again - the coordinate is synchronized, the model deviates by 90°.

Suggestion: Swap the x/y values of the model's position in D5, and then add a "-" sign to the swapped y value, which can align with the .d5a file imported in version 2.3.

For example: The position of the imported .d5a in the figure below 2.3 is (-8,15,0); after the .d5a file imported in 2.4 is synchronized with the coordinate, the position is (-15,-8,0), swap its x/y values and add a "-" sign to the swapped y value, then it becomes (-8,15,0).

<div> </div>

## 9. Why are objects hidden in 3ds Max displayed after being synchronized to D5?

The sync and export .d5a function currently does not support layer hiding or category hiding.

Suggestion: If you need to export, you can use the group export function, group the parts you need to hide before exporting, in order to achieve the model hiding effect in D5.

## 10. Why ungrouped objects in 3ds Max group together after being synchronized to D5?

Currently, only group exports to .d5a files are supported, and the sync feature does not yet support preserving group structures in D5.

## 11.D5-3ds Max converter installation error,  indacates "Create File failed; code 5.Access is denied."

<div align="left"></div>

This error is due to permission issues；

Suggestion: Uninstall the D5-3ds Max converter from the Windows start menu, and then reinstall the new version of the plugin.

Specific uninstallation steps can refer to: [How to uninstall D5 Converter-3ds Max?](#id-6.-how-to-uninstall-d5-converter-3ds-max)

## 12. "Exception catched in D5ExportD5A/D5ExportSKP." when exporting.

Mothod 1: Uninstall the D5-3ds Max Converter in the Windows start menu in either way, and reinstall the new version of the plugin.

Mothoed 2: If after uninstalling and reinstalling, the error message still occurs. Delete the MaxToD5a.toml file or MaxToSkp.toml file under the corresponding path. For example, if you get an error when trying to export a .d5a file from 3ds max2022, delete the MaxToD5a.toml file under 3ds max2022, file path: C:\Users\Administrator\AppData\Local\Autodesk\3dsMax\2022 - 64bit. CHS\plugcfg_ln\MaxToD5a.toml



## 13. Why is the plugin UI not displayed after installing the 3ds Max-D5 Sync plugin?

1. In Customise - Customise UI - Menu, see if D5 is displayed and loaded.
2. In Customise - Show ui - Show Floating Toolbar right click on the blank part of the toolbar and see if the D5 Converter option is displayed.

## 14. Why are some models not displayed or misplaced when using the plugin to sync/export .d5a models?

Due to data efficiency reasons, some models will have the above situation. Solution: Collapse/reset the abnormal part of the model in 3ds Max to transform it a bit, it will improve.


---
