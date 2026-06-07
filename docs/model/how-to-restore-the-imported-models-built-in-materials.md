---
title: "How to restore the imported model's built-in materials?"
source_url: https://docs.d5render.com/model/how-to-restore-the-imported-models-built-in-materials
fetched: 2026-06-07
---

# How to restore the imported model's built-in materials?

### Solution:

1\. Change the material name in the modeling software.

2\. If it's during the sync process, click the "Update" button in the D5 Converter.&#x20;

If it is a directly imported model, right-click on the model in the resource list and select "Reload" from the menu bar.

<div align="left"></div>

### The logic of sync materials

Currently, the logic of sync materials through the converter are as follows:

1\. If the material parameters have not been changed in D5, always sync the plugin parameters.

2\. If a parameter has been changed in D5, the D5 parameter will take precedence, and the corresponding material parameter in the modeling software will no longer override the D5 parameter.

3\. If a material template has been switched in D5, all parameters in the current material template will still follow the rules of \[2].

4\. If a material's name has been changed, it will be treated as a new material and resynchronized.

5\. If you use a material from the asset library, it is equivalent to completely replacing a new material, and cannot be reset.

The logic of sync materials through directly importing and reloading models are as follows:

6\. Once imported, the material parameters in the modeling software will no longer affect the material parameters in D5.

7\. Only renamed materials will be treated as new materials and resynchronized.

The most effective way to restore the material to the one in the modeling software is to rename the material in the modeling software and then update the model/resynchronize.


---
