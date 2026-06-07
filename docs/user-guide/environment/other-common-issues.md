---
title: "Other common issues"
source_url: https://docs.d5render.com/user-guide/environment/other-common-issues
fetched: 2026-06-07
---

# Other common issues

## 1. Why is the imported HDRI blurry?

**High-definition HDRI takes up more resources when previewing, so the HDRI is compressed to 2k by the D5 when previewing to ensure that accurate lighting is provided.**

* The image output is based on the actual size of the imported HDRI.&#x20;
* The HDRI is also compressed to 2K/4K/8K for video.

## 2. Why does it prompt " Failed to load HDRI"?

**Custom HDRIs imported into the D5 renderer need to be standard size files.**

Common sizes:

| 1k       | 2k          | 4k          | 8k          |
| -------- | ----------- | ----------- | ----------- |
| 1024×512 | 2048 × 1024 | 4096 × 2048 | 8192 × 4096 |

> 1. Large HDRIs take longer to import and will take longer to render out.
> 2. Recommended HDRI download site: [Poly Haven](https://polyhaven.com/)

## 3. Why are there two angles of shadow in the scene?

In some HDRIs the sun is visible and already produces clear shadows. **If** ********"Sun-Direction-Custom" is ticked******, it is possible to have this "heavy shadow" problem in certain cases, because there is already a sun in the original HDRI.**

The following is recommended for adjusting the sky:

1. **Enable Follow HDRI.** Make the sun's altitude and azimuth auto-follow the sun in the HDRI. Adjust the angle of the sun by rotating the HDRI.
2. **Replace the HDRI with one that does not have the sunlight effect** (i.e. one that is more balanced in brightness). This will not produce more noticeable shadows, and this time use simulated parallel sunlight will allow you to make more controlled shadows.
3. **Use Geo and Sky.** Geo-Sky has fewer parameters controllable for the sun compared to HDRI, and is based on real geographic information to determine the sun's orientation and light changes.

## 4. How to adjust the Tyndall effect/volume light?

**In the second item of the "Environment" panel on the right sidebar, find** ********"Weather" > select "Fog" > enable the "Volume Light" button******.**

<div align="center"></div>

* Volume Light: The Tyndall effect is a phenomenon in which light is scattered by particles in the air, allowing pathways of light to be seen.
* Scattering: Controls the scattering distribution of the Volume Light scattering effect. The default value is 0 for a uniformly light fog, adjusting it to 1 will make the fog brighter from the direction of the light source.

> Note: The issue of "preview is normal but output has no Tyndall effect" has been fixed in 2.9 version, please output with 2.9 version.

> **Info:** **Note:**

If you get ‘stripes of light’ when creating the Tyndall effect/Volume Light, this is a known issue with the current 2.9 version. Please try giving the one-sided wall a certain thickness (or placing a plane outside the wall).




## 5. How do I achieve the effect of no precipitation but having standing water/snow?

1. ****Precipitation:**** ******Turn on precipitation in Environment - Weather, adjust the precipitation strength to 0, and then increase the puddle parameter appropriately.**
2. **Decals:** The effect of water on the ground can also be achieved with a custom transparency map.

<div align="center"></div>

## 6. Why is the custom HDRI/LUT file import not working?

**This will occur if the file path of the custom HDRI/LUT file contains special characters.**&#x20;

It is recommended that the HDRI/LUT file be placed under an English path.

## 7. Why do scenes lose HDRI thumbnails?

There are two cases that can occur in the current version:

* Load an old archive and that archive uses the D5 inbuilt HDRI - Pure White;
* Download the HDRI from the D5 Assets Library - HDRI and import its local cache.

<div align="left"></div>

## 8. When keyframing the environment (Geo and Sky/HDRI), why does the scene flicker/have white spots?

**It's a current KNOWN ISSUE.**

**It is relatively difficult to downsample in this case (when the scene environment changes), thus white spots/scene flickering may occur during preview or output.**

Suggestion: When keyframing the environment in animations, if white spots/flickering occurs, it is recommended to output in two separate times and merge them in the post-production software.



## 9. Why do scenes created in version 3.0 appear different when opened in previous versions?

When opening files saved in version 3.0 using previous D5 versions, **the manual exposure** and **fog effects** may alter, requiring manual adjustment of the parameters.


---
