---
title: "How to render a video clip?"
source_url: https://docs.d5render.com/user-guide/render/how-to-render-a-video-clip
fetched: 2026-06-07
---

# How to render a video clip?

The D5 2.6 version has added a camera path editing feature. Clip, shot and view are the three core elements that make up a great animation. Each clip can contain multiple shots, and all the shots within the same clip are compiled into a single video file, saving time on post-production editing.



## 1. Create shots:

There two ways to create shots in a clip:

> Tips:&#x20;
>
> * The order of shot and view can be switched by dragging and dropping.&#x20;
> * The environment and post parameters in shot and view can be duplicated and pasted by right click. Right-click on the shot to "update all parameters", and batch update the environment and post parameters of all views in the shot.

1. **In video mode, click "Add Current View" to directly create a 3-second view.** After adjusting the viewpoint, you can continue to add new views in front of/behind to generate a video with a camera track. Within a clip, you can add multiple shots, and the shots can be cut directly from one to another.
2. **Using the advanced camera tools**, you can select the camera and choose to create a new shot with the selected camera. Or, with the camera active, choose Add shot/view in the right sidebar.

   

   

## 2. Parameter adjustment

1. Select a clip, and on the right side you can edit the clip's path track, movement, and aspect ratio. Select the shot/view, you can edit the path track, movement and camera properties of the shot/view.

> **Info:** Note: The default aspect ratio for new clips is 16:9.


2. Edit Path

* After selecting clip/shot/view, select the "Edit Path" button from the right sidebar "Parameters" to enter this mode. The mirror track is visible in the 3D scene. The path contains 3 objects that can be operated and specific operations, they are:

-Camera Carrier, click “Edit Path” and the three axes will appear, for the overall movement and rotation of the camera path.



-View Carrier, which corresponds to the view in the current shot. Select to adjust through gizmo.



-Spline Tool, corresponding to the two control points for bending the lines. Select to adjust the path through gizmo.



3. Camera Target

Enter Video Mode - Shot - Edit Path - ''Camera Target'' feature in the right sidebar.



With Camera Target enabled, users can specify a target object by clicking on the "Focus" button. Once a target is selected, the camera will automatically lock onto and focus on that object as it moves.



This feature is ideal for complex camera movements, including surround, semi-surround, and curved lens paths. It eliminates the need for manual lens orientation adjustments, significantly simplifying the camera control process.

4. Auto View Interval

* When you select shot, the "Auto View Interval" option in the right sidebar parameter is not ticked by default. After ticking this option, if you change a certain time in the shot, the time interval of each view in the shot will be recalculated automatically, so that the speed is always the same between different views.

5. Movement

* **Movement controls the way the path is segmented between two points in the track.** It supports adjusting the movement of view move and rotate separately, which affects the movement rate of the camera path, e.g.: fast then slow.
* **The movement support 5 basic option: Linear, Ease in, Ease out, Ease in out, Speed in out.** Support for customising settings via 2D view or by entering values. The movement parameters are applied from the first view to the next view. Adjustment will batch change view settings when clip, shot is selected.



## 3. Add keyframe

Select an object in the object list and click the Add Keyframe button (or use the shortcut K) to quickly create a keyframe.

* **Visibility**: In the video mode, users can select models or layers and combine the "Visibility" option from the right sidebar panel to create animations that display/hide keyframes.



## 4. Switch clip view

Click the button in the upper right corner of the video editor to switch between "shot view" and "timeline view". Hold down Alt+mouse wheel to zoom in and out. Playback control adds view/keyframe switching, forward/backward time progress control, start/end position jumping. These can be used separately with shortcut keys.

## 5. Use Template

### **Camera Movement**

**The \[Camera Movement] section provides some basic templates (e.g., pan cameras, etc.) for daily use.**

> The adjustment of “Movement” parameters is **not supported for shots created using “Template-Camera Movement”.**

1. Enter the video mode, click the "Template" column in the right sidebar, you can view and use the current supported preset templates. The template thumbnails are static by default, and the dynamic preview effect will be shown after mouse hovering.



2. Click template, it will directly create a corresponding template shot in the currently selected clip in the current viewport. The template created shot only has start/end 2 views, support start/end view to update environment and effects respectively, but do not support adding or deleting views in the template shot.<br>



3. The template created by shot supports the adjustment of common camera parameters, and does not need to be updated, it takes effect instantly. Each template creation and adjustment has corresponding settings in the right sidebar, and different templates provide different setting options in the right sidebar " parameters / template resolution properties ".



### **Animation Template**

**\[Phasing Animation Template] in the Video mode allows for a simple and rapid visualization of the step-by-step building process, avoiding the need for complex keyframe settings. This tool can be applied to create animations for building structure growth, architectural analysis, component installation demonstration, product animation, and landscape vegetation growth.**

> *Prior to using this feature, you need to import the models for phasing animation into D5.*
>
> * *It is recommended to use the group export feature of D5 Sync plugins (e.g., SketchUp, 3ds Max, Rhino, Revit) to export .d5a files with their group structure, facilitating the creation of phasing animation.*

#### 1. Check and select required animation templates in the Video mode

In the Video mode, all new animation templates can be accessed in the right sidebar under 'Template', including Drop/Rise, Ascend/Descend, etc. You can preview the effect throught the dynamic thumbnail.

Click on the required animation template to access the object selection state.



#### 2. Select the required models for phase animation

Click on any template to enter the Edit Objects mode where you can add models you want to create a phasing animation for. Select models by clicking on the corresponding objects from the viewport or the object list. You can hold down the Shift key for multi-selection. You can also put all the desired objects into one layer and simply select the layer to add all the objects within it. (The added models will appear in the right sidebar. )

Their order follows the sequence in which they were clicked and this sequence will be the default for the phasing animation.

* You can adjust the order of the list by dragging the models upward/downward and delete the models from the list when you don't want them any more.

> TIPS:&#x20;
>
> a) Supports multi-selection (shortcut key Shift)
>
> b) When there are many objects to be selected, you can **put all the objects to be selected in a separate layer, and just click on the layer to select them all during selection.**
>
> c) Please note that D5 **adds single objects by default.** Therefore, even when you select a group, D5 will individually add all the objects within the group.
>
> To add a group as a whole, you can press the shortcut key 'G' to switch to **'adding groups'** selection mode. In this mode, the selected group will appear as a single unit in the phasing animation.



#### 3. Create Phase Animation

Click ‘Done’ to exit the 'Edit Objects' mode when you complete model selection. The corresponding control panel for the animation template will appear in the right sidebar. A new phasing animation track will be added into the timeline right above the shot track.



#### 4. Confirm the phase animation effect and adjust its parameters in the right sidebar.

After selecting objects and clicking the ‘Done’ button above, the corresponding template can be seen in the ‘Bottom Sidebar - Animation Edit Bar’. Click "Play" to preview the current phasing animation. Click the template to adjust corresponding parameters in the right sidebar:

* **Animation Controller: The independent animation controller at the top supports various motion settings such as Linear and Ease In.** Click "Play" to preview the current phasing animation. During playback, the viewing angle can be freely adjusted to observe the animation from different perspectives.
* **Property:**

  * **Objects: Set the order of animating objects.**&#x20;

  &#x20;       a) Sort by the object list: Animate objects in the order according to the order of the object list.

  &#x20;       b) Sort by the world coordinate: Animate objects in the order according to their coordinates on         the three axes to achieve natural phasing animation.<br>

  > E.g.
  >
  > If model A has a positive X-value while model B has a negative X-value, model B will move first when ‘Sort by world coordinate’ is selected.
  >
  > If both AB models have the same X-value, the model with smaller Y-value will move first when ‘Sort by world coordinate’ is selected.

  * **Time interval: Control the playback interval between individual object animations within the overall animation.**

  &#x20;       a) Simultaneous: All the objects appear simultaneously.

  &#x20;       b) Cascading: Objects appear in an overlapping manner, creating a flowing visual sequence.

  &#x20;       c) Sequential: Objects appear one by one.

  * **Distance: Control the distance by which each object moves during the animation.**

  &#x20;    （supports only for 'Drop/Rise', 'Ascend/Descend', 'Fly in/Fly out', and ‘Explode/Implode’.）

  * **Target direction: Control the direction in which objects fly in/out.**

  &#x20;      (supports only for 'Fly in/Fly out')

  * **Visibility: Control the visibility of objects before and after the animation.**
* **Effect: Overlay another animation effect (Not all templates are available).**
  * **Rotate**: Achieve the effect in which objects rotate while moving/scaling.
  * **Bounce**: Achieve the effect in which objects bounce back after falling to the ground.
  * **Scale bounce**: Achieve the effect in which objects scale up and down in size quickly.



#### 5. Adjust parameters in the ‘Bottom Sidebar - Animation Edit Bar’

‘Video Mode - Bottom Sidebar - Animation Edit Bar, is used to host, edit animation templates.

* Supports free dragging of the animation bar between rows, along with auto snapping.
* Supports adjustments to the animation duration by dragging both sides of the animation bar or by entering values.
* The name of the animation bar defaults to the corresponding animation template name. Double-click on the animation bar to customize the name.
* Right-click on the animation bar to access options including "cut (modify the duration)", "duplicate", "copy", "paste", and "delete".
* Free Camera Playback: By default, you can only preview the animations within a shot if one exists. Enable **"Free Camera Playback"** to preview all animations, even those exceeding the shots.



## 6. Render video

1. Clip supports individual rendering and clicking "Add all to render queue" in the "More" button on the right side of the clip. Multiple clips can also have all clips added to the render queue.
2. Shot also supports individual rendering, as well as multi-selection and add to the render queue in batches.

***

## FAQs

### 1. How to import video clips into the render queue with one click?

There are two ways to achieve this:

1. After selecting clips with Ctrl select or Shift continuous select, right-click and select "Add to render queue";
2. Click "Add all to render queue" in the "More" button to the right of the video clip.

### 2. How to creat shots in a clip?

There are two ways to achieve this:

1. Click "Add Current View" to directly create a 3-second view. After adjusting the viewpoint, you can continue to add new views in front of/behind to generate a video with a camera track. Within a clip, you can add multiple shots, and the shots can be cut directly from one to another.
2. Using the advanced camera tools, you can select the camera and choose to create a new shot with the selected camera. Or, with the camera active, choose Add shot/view in the right sidebar.

### 3. What is the maximum video resolution supported for output?

Video output resolution depends on your account type, with different account identities having different maximum resolution limits. **Individual identity** accounts support video output at resolutions **up to 4K**; **Team identity** accounts support video output at resolutions **up to 8K**.


---
