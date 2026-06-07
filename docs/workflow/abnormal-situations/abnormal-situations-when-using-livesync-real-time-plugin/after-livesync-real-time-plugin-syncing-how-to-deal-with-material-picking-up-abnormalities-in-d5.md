---
title: "After LiveSync(real-time plugin) syncing, how to deal with material picking up abnormalities in D5?"
source_url: https://docs.d5render.com/workflow/abnormal-situations/abnormal-situations-when-using-livesync-real-time-plugin/after-livesync-real-time-plugin-syncing-how-to-deal-with-material-picking-up-abnormalities-in-d5
fetched: 2026-06-07
---

# After LiveSync(real-time plugin) syncing, how to deal with material picking up abnormalities in D5?

### Why when using SU and other LiveSyncs, partial models experience abnormal material picking up?

> **Info:** **This problem has been fixed in 2.8 version of D5 Render** (i.e. no need to do the followings can still pick up materials normally).

* If you still have the problem of can't pick up materials when using live sync plugins, but it's fine if disconnecting the connection , please check with the official technical supports.


Why is it that when using SU and other live workflow plugins, some of the models are abnormally sucked up after being synced to D5, but it is normal to absorb materials when D5 directly reads the .skp models or when using non-live version of plugins to link/convert live models to non-live?

A known issue in current version 2.5/2.6: If an individual model is scaled to be extremely small, but the boundingbox is very large, it will cause the abnormality of absorbing textures in D5 in real time.

Suggestions:

* Use version 2.6.1, add and save corresponding fields in D5Config-config.ini;
* Re-synchronize the model using the real-time plugin. The model with the abnormal boundingbox size will be displayed in D5;
* Delete the model with the abnormal boundingbox size in the modelling software and sync the model modification to D5, then it can be absorbed normally.

We will fix the issue in subsequent releases.

> * Path of config.ini file: Search for %appdata% in the Windows taskbar and enter to display the D5Config folder, and find the config.ini file under the folder with the most recent modification time.&#x20;
>
> &#x20;      For example **`C:\Users\Administrator\AppData\Roaming\D5Config`**
>
> * Corresponding fields needed to be added:&#x20;
>
> &#x20;     **`[Debug]`**&#x20;
>
> &#x20;     **`VerySmallScale=1`**




---
