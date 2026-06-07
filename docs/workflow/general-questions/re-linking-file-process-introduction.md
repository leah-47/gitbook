---
title: "Re-linking File Process Introduction"
source_url: https://docs.d5render.com/workflow/general-questions/re-linking-file-process-introduction
fetched: 2026-06-07
---

# Re-linking File Process Introduction

If you change the path or name of the model file, you can update the D5 project using the re-linking function, ensuring that previous lighting and material settings are preserved. This process is compatible with **SU/SketchUp** and **3dsMax** real-time plug-ins.

* Data synchronisation after model renaming/path changes
* Avoid duplicate light overlays
* Preserve historical material parameters
* Inheritance of model attributes

## Workflow

### Method 1: Models linked to .drs before

**Scenario:** The model has been linked to a D5 project, but the local storage path or name has been altered.

#### **Operating Steps:**

**Activate Connection**

1. Click the ‘Connect to D5 Render’ button in the DCC plug-in.
2. Select the ‘Sync local Project’ mode in the pop-up window.

<figure><img src="/files/iylZdoU46qCai8brE1SB" alt="" width="374"><figcaption><p>Step 1</p></figcaption></figure>

**Select the model to replace**

Tick the target model to be replaced in the popup window. (D5 materials will be inherited after replacement)

<figure><img src="/files/A0QUhS5eCvFtitRx4UgQ" alt="" width="424"><figcaption><p>Step 2</p></figcaption></figure>

Click ‘Replace and link’ to complete the synchronisation.

### Method 2: Open .drs and the modeling file together

**Scenario:** need to update both the model file and the associated project at the same time

#### **Workflow:**

1. Open the D5 project file (.drs) and the modified model file at the same time.
2. Click the ‘Connect to D5 Render’ button in the DCC plug-in.

<figure><img src="/files/C3iCSxIXVfECKveFzHqW" alt="" width="563"><figcaption><p>Step 1</p></figcaption></figure>

3. Select the corresponding model in the Replacement pop-up window.
4. Tick the ‘’Light‘’ / ‘’Material‘’ options as required.
5. Click ‘Replace and link’ to complete the synchronisation.

<figure><img src="/files/gl3ntN3yjiJ6aoyiMnC5" alt="" width="424"><figcaption><p>Step 2</p></figcaption></figure>

<figure><img src="/files/n5w2thcJAi9TaYQdwBd2" alt="" width="563"><figcaption><p>Replace and link logic</p></figcaption></figure>

### Option Description:

* Tick ‘’Light‘’: Replace the light group with the same ID (historical parameters are preserved)
* Tick ‘Material’: Replace materials with same names (historical parameters are preserved).

> **Warning:** **Note:**

* ‘’Light‘’ replacement only supports SU/3dsMax LiveSync plug-ins.
* No light/material ticking options for non-real-time plug-ins and direct imported models.


## FAQs

### Q1: Why does the DCC prompts "Please retry after exit rendering mode or finish the rendering within D5 Render"?

A：

The general situation is: after entering the picture/video mode in D5, and then performing the increase or decrease model operation in DCC and transmitting new data (real-time update or manual update) to D5, this error will occur.

<figure><img src="/files/rRmDWwQK7a4OMrwyRl5s" alt="" width="238"><figcaption></figcaption></figure>

In this case, exit the picture/video mode, and then re-associate the synchronization.


---
