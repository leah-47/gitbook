---
title: "How to duplicate the model?"
source_url: https://docs.d5render.com/model/how-to-duplicate-the-model
fetched: 2026-06-07
---

# How to duplicate the model?

## Function overview

**D5 Render provides multiple ways to duplicate the scene resources：**

> * Shortcut keys support custom modification.&#x20;
>
> Please refer to: [How to view and change the default shortcuts?](../user-guide/preference/how-to-view-and-change-the-default-shortcuts.md)
>
> * Please note: the duplicate operation supports not only models, but also path tools and other assets.

| Function                       | Shortcut key \*           | Usage                                                                                                                                                                    |
| ------------------------------ | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Associative duplicate**      | **Ctrl + D**              | After duplicating the model, the material of the same part is associated with each other. Adjust the material on one model, and the other model will follow the changes. |
| **Independent duplicate**      | **Alt + D**               | The duplicated models are independent of each other, and the materials are not associated. When adjusting the material, the models do not affect each other.             |
| **Drag associative duplicate** | **Shift + Drag the axis** | Copy along an axis in a certain direction. After duplicating the model, the materials are associated with each other.                                                    |

## Operation

### Associative duplicate

Use the shortcut key "Ctrl + D" to duplicate, and the materials are associated with each other by default. Arbitrarily adjust the material on one model, and the other model will follow the changes. Click the "Duplicate" function in the menu or the right sidebar.

### Independent duplicate

Use the shortcut key "Alt + D" to duplicate the model to avoid material association.

### Drag associative duplicate

Press the "Shift" first, and click the axis in any direction to duplicate the model along the specified direction.

<div align="left"></div>

***

## FAQ

### Q: How to cancel the associate material from a model?&#x20;

Unassociate a material from a model by "Make unique".

> Reference: [What is "Make Unique"?](./what-is-make-unique.md)

### Q: How to duplicate the model in situ (the position of the duplicated model remains unchanged)?

After duplicating, click the mouse in the scene (without moving the mouse) to duplicate the model in situ.

### Q: Do lights support parameter association?

Duplication of lights does not support parameter association. After multiple selections or grouping of the same type of lights, the parameters of the lights can be edited uniformly.


---
