---
title: "What is the Scene List?"
source_url: https://docs.d5render.com/user-guide/resource/what-is-the-scene-list
fetched: 2026-06-07
---

# What is the Scene List?

## Scene shot setup

<div align="left"></div>

When you have saved multiple camera views in the scene list, you can click on one of them to switch the shot. You can also click the "Rename", "Update Scene" and "Delete" buttons after the shot name to adjust the current saved shot view.

<div align="left"></div>

* Transition Animation is used to set whether or not to display the transition animation at the same time as the shot switch.&#x20;
* Environment & Effect

-Apply to all: apply the last adjusted outdoor and post parameters when switching between cameras. It reads the scene's camera position information and the current outdoor and post parameters when switching between cameras.

-Save separately: when switching between cameras, read the current scene's camera position information and environment post parameters.

> **Info:** **Note:**

If the scene parameters are not saved after switching shots, it is possible that "Apply to all" is turned on in the settings of the scene list.


* Copy/Paste feature: Copy and click Paste to immediately apply the environment and effect parameters saved in the scene to a different scene.
* Create Preset: Store the Environment & Effect parameters of the current scene as a preset in Studio.

<div align="left"></div>

## Create New Scene

In the scene list, click the "Add Scene" button to save the current view. When creating a scene, it will record the ambient lighting information of the current scene and the color and special effect information in the post-processing stage. Each scene can correspond to different parameters.

When you add a scene, a camera for the current viewpoint will be created by default. Click "Scene" to activate the camera. The camera in the upper right corner of the interface will indicate the currently activated camera. Click on the camera icon to exit the activated state of the camera in the right sidebar, and set the projection mode, frame ratio, depth of field, and other parameters. The camera parameters adjusted in the right sidebar will be updated instantly without clicking. The camera parameters adjusted in the right sidebar will take effect instantly without clicking "Update."

When you move the viewpoint only when the scene is selected, the camera corresponding to the scene will be exited immediately, and return to the default "God's view" state. When both the scene and the camera are selected, you can keep the mobile operation in an active state.

> **Info:** **Note:**

If the screen returns to the default "God's view" when the viewpoint is moved, it is because the scene and its corresponding camera are not selected at the same time.


<div align="left"></div>

## Update scene shots

Scene shots will record the environment, post, and the current object's hidden state information when created. When the environment and post parameters are modified, the parameters need to be updated.&#x20;

A purple dot indicates that it has been successfully updated.

<div align="left"></div>

## Scene List supports group management

**Scene Group Creation and Management**

**Create Group:** Right click Scene Group → Select ''Group'' or use shortcut `Ctrl + G`

**Ungroup:** Right click the Scene Group → Select ''Ungroup'' or use shortcut `Ctrl + Shift + G`

**Rename:** Right click the Scene Group → Select ''Rename'' or double click group name

**Paste Parameter to Groups:** After copying the parameter, right click the Scene Group → Select ''Paste Parameter'' → The Environment/Post-processing parameters will be pasted to all the Scenes in the Group.

**Delete:** Right-click on the Scene group → Delect ''Delete'' → Current group and the Scenes in the group will be deleted (this operation supports Ctrl + Z to undo)

**Drag & Drop:** Drag and Drop Scene groups to change their order, and Drag and Drop individual Scenes to move them into or out of a group.

**Scene list operations support Undo**

Undo operations for both Scenes and Groups are supported by pressing `Ctrl + Z`

* Scene: Add/Delete/Update
* Group: Group/ Ungroup/ Delete

**Add all the scenes in Group to the Render Queue**

Enter Render Mode → select the group → and click "Add to Render Queue" at the bottom right corner of the window, and the scenes in the group will be added to the queue in order.


---
