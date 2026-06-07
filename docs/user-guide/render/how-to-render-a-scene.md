---
title: "How to render a scene?"
source_url: https://docs.d5render.com/user-guide/render/how-to-render-a-scene
fetched: 2026-06-07
---

# How to render a scene?

Set the Scenes：

* **Once the scene is selected, it can be rendered by entering the image rendering mode.** Different rendering parameters can be set and recorded separately for each scene.
* The scene list supports Ctrl (add) and Shift (select) multi-select operations, **and supports adding multi-selected scenes to the render queue with a single click**.
* Multi-selected scenes can be added directly to the render queue. Each scene will retain its own rendering parameters. **It is also available to batch adjust the rendering parameters such as scene size, format, channel map, etc. after multi-selecting, and then batch add them to the render queue.**



## FAQs

### 1. Why version 2.6 can't inherit the previous rendering parameter set after entering image mode/need to select the rendering parameter again?

The scene list of D5 version 2.6 integrates the camera tool and can record the respective rendering parameters.

* Once in image mode, click on the scene again to display the rendering parameters for the scene list. It also supports setting different rendering parameters for each scene separately.

### 2. How to output vertical video?

During picture/video editing, users can enter this mode and modify the aspect ratio of the corresponding camera/video clip in the right sidebar, or even customise the aspect ratio to achieve the corresponding needs.\
<https://www.youtube.com/watch?v=L9w10F1lHr0>

### 3. How to batch modify image/video rendering parameters in the Render Queue?

After filtering rendering tasks of the same type, you can adjust image/video parameters in a batch in the Render Queue, such as format and channel maps.

> *Note:*
>
> 1. *Batch modification of parameters is **not supported when images and videos are selected at the same time**.*
> 2. *Batch rendering does **not support right-clicking on preview thumbnails to make modifications after multiple selections**.*




---
