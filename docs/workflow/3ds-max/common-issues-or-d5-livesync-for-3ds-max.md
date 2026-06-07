---
title: "Common issues | D5 LiveSync for 3ds Max"
source_url: https://docs.d5render.com/workflow/3ds-max/common-issues-or-d5-livesync-for-3ds-max
fetched: 2026-06-07
---

# Common issues | D5 LiveSync for 3ds Max

## Why don't .d5a files exported with the livesync plugin show thumbnails?

It may be related to the current software environment.

**Please try to use administrator privileges and enter the following command on the command line (enter cmd in the windows search box).** After the execution is successful and a pop-up window is displayed, see if the thumbnail image can be displayed normally.

If it still doesn't work, it may be that the 3ds Max installation package used lacks the dependency file for this feature. It is recommended to try using an installation package from another source.

> **Info:** Note:&#x20;

The instructions need to be modified according to your actual situation.&#x20;

E.g. Currently using the <mark style="background-color:purple;">2020 version of 3ds max</mark>, installed under <mark style="background-color:purple;">D:\anzhuang2\3dsmax2020\\</mark> path, <mark style="background-color:green;">Enter command</mark>`“D:\anzhuang2\3dsmax2020\3ds Max 2020\MaxThumbnailShellExt.dll”`<mark style="background-color:green;">.</mark>


<figure><img src="/files/ibptoEXXiOxlKgokg23H" alt="" width="563"><figcaption><p>Enter the command and prompt for successful operation</p></figcaption></figure>


---
