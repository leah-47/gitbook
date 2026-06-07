---
title: "How is Z Depth used in Style?"
source_url: https://docs.d5render.com/user-guide/effect/how-is-z-depth-used-in-style
fetched: 2026-06-07
---

# How is Z Depth used in Style?

## What is Z Depth?

Z Depth map is a picture that records the distance of an object to the camera using the greyscale colour values of the pixels. For example, we can define that points closer to the camera are blacker and points further away from the camera are whiter. We can then get the following Z Depth image:

<figure><img src="/files/nydDt1U1Y4ADRQ0jYNy9" alt=""><figcaption></figcaption></figure>

## Where to turn on the Z depth map in D5?

There are **two places** in D5 Render related to the Z depth map:

1. In the **effect** panel, there is a **Z depth** option under the **Style** module:

<figure><img src="/files/NcgIf6qWudUOLy5IKY21" alt="" width="217"><figcaption></figcaption></figure>

2. The Z depth channel can be customized when outputting images/videos:

<figure><img src="/files/f6XnQuCb5D3SxLobPok8" alt=""><figcaption><p>                              Image mode                                                                      Video Sequence Mode (*Sequence is a Pro function)                                              </p></figcaption></figure>

## What is the difference between the Z Depth in Style and the Z Depth Channel of the output?

#### Z Depth Style

The Z-Depth screen in Styling is the same as the preview in the D5 viewport, it's just a styling effect that can be toned by post-processing and can be mixed with the Line Drawing mode. We can adjust its exposure, contrast, and even its colour temperature, tint, and other parameters.&#x20;

As shown below, this is an image that combines Z depth and Outline mode Style, where the main post-processing effects are: dark corners, colour temperature, tint, dispersion and so on.

<figure><img src="/files/AXMn0JzwvMFLXelIcHBc" alt="" width="563"><figcaption></figcaption></figure>

#### Z Depth Channel (Z Channel)

In contrast, when outputting images/videos, the custom-selected Z Depth channel is the standard Z Depth map, which is a picture representing the distance from the object to the camera, and is a greyscale map that is not affected by post-tinting parameters.&#x20;

The pixel colour value of a standard Z Depth Map is proportional to the distance from the object to the camera.&#x20;

For example, if we specify that a point 0m from the camera is black (with a colour value of 0), and a point about 100m from the camera to infinity is white (with a colour value of 255), then a point about 50m from the camera will appear as grey with a colour value of 128.

<figure><img src="/files/1zhGuC3I8yblzXpS6tjb" alt="" width="563"><figcaption></figcaption></figure>

#### Note

1. Whether you turn on the Z Depth switch in Post Style or not, you can output the Z Depth channel when outputting the image/video\*. (\*Video framing Sequence is a Pro feature)&#x20;
2. The distance from the black/white range of the Z Depth channel to the camera depends on the value **defined by the Post Style Z Depth slider**. This means that even if you only need a Z Depth channel map, you can use the Stylised Z Depth function as a preview of the black and white distances, and once you are satisfied with the distances, you can turn off the Z Depth Style switch, at which point the modified distance values will still be valid.
3. Please note: The ‘Z Depth’ of Style in the preview is affected by post-processing, while the standard ‘Z Depth’ channel in the output is a grayscale image converted from linear distance data. The latter will appear ‘darker’. If you want to obtain results consistent with the preview, please keep the ‘Z Depth’ enabled and use output channels directly instead of the Z Depth channel.

## How to use Z Depth slider in Style?

When outputting a Z Depth map, because of the variable dimensions of a 3D scene, the most important parameter is to define the distances of the "black point" and the "white point" to the camera. If the distance between the black and white points is defined properly, the Z Depth map can contain more distance information, which is of rich layers and helpful for post-processing.&#x20;

**Note:** To avoid ambiguity, black and white in the following descriptions refer to the colour of the standard Z Depth channel map at the time of image/video output, as they will not be affected by the colour grading parameters.

#### Default Value&#x20;

For a new scene, D5 defines by default that objects 0 metres from the camera are pure black (colour value 0) and objects 10 metres and more from the camera are pure white (colour value 255), with a linear transition from black to white in between.&#x20;

By dragging the slider control with the mouse, you can define how far away from the camera you want it to be pure white or pure black, and even swap the left and right positions of the black and white controls so that the near side is white and the far side is black.

<figure><img src="/files/yy1ieXmlYGs35Uls97bL" alt=""><figcaption></figcaption></figure>

#### Non-Linear Slider&#x20;

To accommodate scenes of different sizes, the Z depth distance slider bar is non-linear, and the following figure gives the approximate distance scale in metres.

&#x20;The values are for reference only. For actual use, the position of the black-and-white slider scale should be determined according to the preview content of the screen.

<figure><img src="/files/8bBLBVY0R3ckYEAQpTNk" alt=""><figcaption></figcaption></figure>

Specific operations

1. Take the demo scene as an example, after turning on the Stylized Z Depth switch, the preview screen is grey without content, because all the models in the scene are more than 10m away from the camera by default, so they are all white; at the same time, the Z Depth screen in the viewport is affected by the exposure and other post-processing parameters, so it looks like grey.

<figure><img src="/files/VyluT1ADcVwPnOXmjOQZ" alt="" width="563"><figcaption></figcaption></figure>

2. At this time, we just need to pull the white dot slider to the right and define the white dot as a further distance, then we can include the whole scene into the Z depth map, this process is previewed in real time, which very intuitive:

<figure><img src="/files/fBKqBrgXi6JAoY6z5DY7" alt="" width="563"><figcaption></figcaption></figure>

## Additional Documentation: How to use Z Depth Map in other post-production software?&#x20;

Here is an example of using Photoshop, a popular compositing software, to show the process of using Z Depth Maps to create depth-of-field effects in post-production.

1. Preview Z Depth&#x20;

The scene as shown in the image:

<figure><img src="/files/MhRCkMRvWV0LdX2nGpBl" alt="" width="563"><figcaption></figcaption></figure>

Turn on the "Z Depth" switch in Effect>Style to adjust the distance between the black and white dots to make both the foreground and background objects appear in the preview view:

<figure><img src="/files/PmKAvJzLVeFfWQI0lfNa" alt="" width="563"><figcaption></figcaption></figure>

2. Output result image and Z Depth map&#x20;

Turn off the Z Depth switch and enter the output mode

<figure><img src="/files/0pUwhtCCbvDopvSA7V2z" alt="" width="563"><figcaption></figcaption></figure>

In the bottom panel use the scroll wheel, find the channel option, select the Z depth channel and render the image

<figure><img src="/files/gGikFJ4VKB37MN35S62N" alt=""><figcaption></figcaption></figure>

The rendered results are the following two images:

<figure><img src="/files/BV6k6UKVikM8TmISewef" alt=""><figcaption></figcaption></figure>

3. Associate the Z depth map with the resultant image&#x20;

Just drag the two images into Photoshop and juxtapose them like this:

<figure><img src="/files/e6fAjNojgTovoSJeLsMG" alt="" width="563"><figcaption></figcaption></figure>

Ctrl+A selects the Z depth map entirely and Ctrl+C copies the Z depth information to the clipboard:

<figure><img src="/files/Zu76VMhfn0ELnj4xWw6n" alt="" width="563"><figcaption></figcaption></figure>

In the result image file, click the "Channels" tab, create a new channel, Ctrl+V, and copy the Z depth information to the new channel "Alpha 1":

<figure><img src="/files/VsUDeUsZzA01onDVzol5" alt="" width="563"><figcaption></figcaption></figure>

Left-click on the space indicated by the red circle and select the RGB channel.&#x20;

At this point, the Z Depth information is recorded in the "Alpha 1" channel of the resultant image.

<figure><img src="/files/BwRL24coRCp1ELFa7DMU" alt="" width="563"><figcaption></figcaption></figure>

4. Adjust the depth of field effect Select the results layer and in the Filter menu, find Blur > Lens Blur:

<figure><img src="/files/krEA0wi3gZGinBgm1i9l" alt="" width="563"><figcaption></figcaption></figure>

Set the Depth Map Source to our pre-written "Alpha 1" channel

<figure><img src="/files/Qocr1TvTKFvCZVo8hAJ0" alt="" width="563"><figcaption></figcaption></figure>

The value range of the Blur Focus parameter is 0-255, which corresponds to 0-255 of the Z Depth map colour value, and the Blur Focus is set to whatever greyscale, and what Z Depth objects do not produce blurring, and shown to be in sharp focus.

<figure><img src="/files/tP254jfSfKDC764nQZqy" alt="" width="563"><figcaption></figcaption></figure>

We can widen the aperture radius to get a more intense depth of field blur effect (consistent with real-life experience):

<figure><img src="/files/wD9EkSvl9fxP3ouRx2t2" alt="" width="563"><figcaption></figcaption></figure>

It is very intuitive and convenient to click on the Set Focal point tool to define the object in focus by clicking directly on it on the screen:

<figure><img src="/files/UWcgA9TZJD3fXEQ9vdRI" alt="" width="563"><figcaption></figcaption></figure>


---
