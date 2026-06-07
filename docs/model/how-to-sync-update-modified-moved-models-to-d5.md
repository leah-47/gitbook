---
title: "How to sync/update modified/moved models to D5?"
source_url: https://docs.d5render.com/model/how-to-sync-update-modified-moved-models-to-d5
fetched: 2026-06-07
---

# How to sync/update modified/moved models to D5?

## Directly Import from Workflow

<mark style="background-color:purple;">If the model is directly imported into D5, after the model file is modified, you can right-click on the original model in the scene resource list, and select</mark> <mark style="background-color:purple;"></mark><mark style="background-color:purple;">**"Reload"**</mark> <mark style="background-color:purple;"></mark><mark style="background-color:purple;">or</mark> <mark style="background-color:purple;"></mark><mark style="background-color:purple;">**"Replace from Local"**</mark> <mark style="background-color:purple;"></mark><mark style="background-color:purple;">from the menu bar.</mark>

1. If you make modifications to the original model and the file path or file name are not changed, you can choose **"Reload"**. D5 will automatically update to the modified model and retain any adjusted materials in D5. The progress of update will be displayed in the scene resource list, and when the update is completed, a completion indicator will be displayed in the list.

> * If the model's file name or location changes, it can cause the update to fail. You can try re-importing or replacing the model.
> * The updated or replaced model cannot be restored, so please confirm before proceeding with the operation.

2. If you make modifications to the original model, and save it as a new file with a different file path or file name, you can choose **"Replace from Local"**. D5 will automatically update to the modified model and retain any adjusted materials in D5.

<div align="left"><figure><img src="/files/YDhfa3GrfpLogXWcKx6J" alt=""><figcaption></figcaption></figure></div>

## Sync

<mark style="background-color:purple;">To sync the model to D5 using the D5 converter, during synchronization, after modifying the model file, you can</mark> <mark style="background-color:purple;"></mark><mark style="background-color:purple;">**click the "Update" button in the D5 converter**</mark> <mark style="background-color:purple;"></mark><mark style="background-color:purple;">to synchronize the modified model to the D5 Render and retain any adjusted materials in D5.</mark>

### Modified the model after stop syncing and the file path remained unchanged

Modifications were made on the original model and saved without changing the file name and path of both the model file and D5 scene file.

Solution: You can directly open the modified model file by clicking the "Launch D5 Render" button in the modeling software using the D5 converter. This will allow you to continue with the linkage, and D5 will automatically update to the modified model while retaining the adjusted materials in D5.

### Modified the model after stop syncing and the file path unchanged

A new file was saved, or the file name or file path of the model file/D5 scene file was changed due to moving the file location.

Solution: First, open the model file and D5 scene file separately, click the launch button in the D5 converter, and when the D5 popup appears, click "Select File":&#x20;

<div align="left"><figure><img src="/files/3orARB16nfoSM9HDE3LB" alt=""><figcaption></figcaption></figure></div>

After selecting the corresponding model, click "Replace" to continue with the linkage:

<div align="left"><figure><img src="/files/650dldjDRXood88d1oPg" alt=""><figcaption></figcaption></figure></div>

## Other FAQs

### Q : Why is the "Reload" button grayed out?

There are two reasons:

1\. The model is from the asset library. As there is no source file, the model can't be updated.

2\. The current model was sync to D5 using the converter. If you need to update the model, you can use the update model feature in the D5 converter.

> Note:&#x20;
>
> Do not mix up the workflow of sync and direct import! The models/lights may overlap each other!

<div align="left"><figure><img src="/files/eJsmb5i1p8JQBwzbqZkC" alt=""><figcaption></figcaption></figure></div>

### Q : What is the difference between "Reload" and "Replace from Assets"?&#x20;

**1."Reload"** is applicable when the file name and file path of the model have not changed, and all model updates are based on the original model file. Clicking "Reload" will update the model file to the latest version, and adjustments made to the same named materials in D5 will be preserved.

Otherwise, the update will fail, and you will need to manually select the location of the model file.

**2."Replace from Assets"** follows the same strategy as "Reload", which updates the model file to the latest version and preserves adjustments made to same named materials in D5. Compared to "Reload", there is an additional step where you need to manually select the file path.


---
