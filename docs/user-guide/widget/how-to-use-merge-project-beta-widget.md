---
title: "How to use Merge Project beta Widget？"
source_url: https://docs.d5render.com/user-guide/widget/how-to-use-merge-project-beta-widget
fetched: 2026-06-07
---

# How to use Merge Project beta Widget？

Go to Menu > Preference > Widget, and you can check what you have installed, click to toggle on/off and manage your widgets.

<figure><img src="/files/TSMCRxDjqUjRYaXv8N0P" alt=""><figcaption><p>Merge Project beta</p></figcaption></figure>

Users can merge up to 10 files into one and boost teamwork productivity on big projects. To merge projects, you need to add at least two projects, set the options such as models, lights or scene shots to be merged in the projects respectively, and then choose the location of the file that generates the merged project.


How to use Merge Project in D5 Render


You can open Merge Project beta widget by Going to the Welcome page > Recent and click on the button in the upper-right corner.

<figure><img src="/files/2OSpifC7pbClgZycV0mp" alt="" width="563"><figcaption><p>Step 1</p></figcaption></figure>

&#x20;Right-clicking on a project on the Recent page and select Merge Project.

<figure><img src="/files/x2RhBIeVADktZ7G3GNOu" alt="" width="563"><figcaption><p>Step 2</p></figcaption></figure>

While editing files, go to Menu > File > Merge project

<figure><img src="/files/rCiO9292UWPr4IiVEyqT" alt="" width="563"><figcaption><p>Step 3</p></figcaption></figure>

***

### Conditions for Merger <a href="#header-1" id="header-1"></a>

1. All project files must be saved successfully.
2. The selected project files must be of the same version.
3. The archive version must be 2.1 (or later) and support the project merge function.
4. The remaining free space on the disk where the merged archive is located must be larger than the sum of all the archives to be merged.

***

### Merger Order <a href="#header-2" id="header-2"></a>

Project merging will be carried out in the order of adding projects: the first added project will be the main one. If we choose to merge files while editing, the currently edited project will be added as the main one to the first position of the list.

***

### Methods of Merger <a href="#header-3" id="header-3"></a>

To merge projects, you’ll need to select at least 2 files and choose whether to combine their models, light objects, scenes, etc. Setting items that are ticked are retained in the merge result; those that are unchecked are discarded. Then, select where to export the merged file.

<figure><img src="/files/pdVwuKof0o2LrivBONOS" alt=""><figcaption><p>Merge Project</p></figcaption></figure>

<figure><img src="/files/fNkbB7tlOmpC675VeBg8" alt=""><figcaption><p>Merge Project</p></figcaption></figure>

It should be noted that items are merged in the order of addition as well. The first item will be added as the main one, and subsequent items will overwrite its parameters. For example, the same light exists in both projects. If the light is checked in the merge option, then its parameters will be updated in accordance with the last added project.

The basic logic is that the checked items will be retained in the merged result, while unchecked ones will be removed. If we select the same option for multiple projects at the same time, only one copy of the identical parts of the scene will be retained, and those with differences will be added automatically.

***

### FAQs <a href="#header-4" id="header-4"></a>

#### Why did the project merger fail?？ <a href="#header-5" id="header-5"></a>

There may be the following reasons:

1. The project file is corrupted.
2. The currently selected file version is lower or higher than the added version.
3. Project file version is not supported.
4. Insufficient disk space.
5. File/folder copy failed.
6. Merge project location contains files with the same name.
7. Merge project location is not available.

#### What need to do before merging projects? <a href="#header-6" id="header-6"></a>

* All project files must be saved successfully.
* The selected project files must be of the same version.
* The archive version must be 2.1 (or later) and support the project merge function.
* The remaining free space on the disk where the merged archive is located must be larger than the sum of all the archives to be merged.


---
