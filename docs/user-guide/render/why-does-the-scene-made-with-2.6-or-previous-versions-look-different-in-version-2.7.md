---
title: "Why does the scene made with 2.6 or previous versions look different in version 2.7?"
source_url: https://docs.d5render.com/user-guide/render/why-does-the-scene-made-with-2.6-or-previous-versions-look-different-in-version-2.7
fetched: 2026-06-07
---

# Why does the scene made with 2.6 or previous versions look different in version 2.7?

Because we upgraded the D5 GI (global illumination) for both preview and output:

* Improved reflection algorithms with better diffuse and reflection accuracy so the real-time preview & output are closer to Ground Truth.
* Improved the accuracy of GI brightness and color from spotlights, projectors, and stage lights. The attenuation of area lights now affect GI correctly.
* Materials in video renderings can now reflect soft edges of shadows correctly.

### Interior GI Enhancements

1. Interior global illumination (GI) is slightly brighter in 2.7 compared to 2.6 due to multiple bounces of skylight.
2. With the introduction of blue skylight, 2.7 GI appears slightly cooler and closer to reality in terms of color temperature.

<figure><img src="/files/oIIR8fVpjigZvy8qOjUa" alt=""><figcaption><p>2.6 GI vs 2.7 GI</p></figcaption></figure>

### Enhanced Metal Reflections in Interior Scenes

Interior metals in 2.7 appear brighter compared to 2.6, because interior metal reflections are enhanced to get closer to Ground Truth, namely the reality.

<figure><img src="/files/gxufB1i1lhXV53udaB5O" alt=""><figcaption></figcaption></figure>

### Enhanced Interior Light-Dark Contrast

The GI algorithms of D5 2.7 are more accurate, resulting in enhanced contrasts between bright and dark areas. The overall shading effect is more accurate.

<figure><img src="/files/cey3uI8l2HHTEliuibMK" alt=""><figcaption></figcaption></figure>

### More Color-accurate Diffuse Effect

<figure><img src="/files/BWVukUWcW7v8Ap3bsq8L" alt=""><figcaption><p>2.7 Preview</p></figcaption></figure>

### Enhanced Ray Bounces

Optimizations to noise reduction and GI algorithms improves the lighting details. The contrast between light and shadows will be more pronounced, and the issue of abnormal brightness under sofas in previous versions has been addressed.

### More Accurate GI for Plants

### Support for Soft Shadow Reflections in Video Renderings

<figure><img src="/files/XRaUBQeyatYqK0zJPj1a" alt=""><figcaption><p>Reflections of Soft Shadows in 2.7</p></figcaption></figure>

### More Accurate GI for Light Sources

The accuracy of GI brightness and color from spotlights, projectors, and stage lights has been improved.

> Note: If **an archive from a version prior to 2.7** is opened in 2.7, it may appear that the "**scene becomes darker/lighting effects become weaker**". This in expected, because the effect of the previous version was inaccurate.&#x20;
>
> Suggestion: Re-adjust the brightness of the light source in version 2.7 and adjust it with post parameters.

<figure><img src="/files/kGqu4t7iBRoLynlVtlHj" alt=""><figcaption><p>Light sources 1, 3 and 4 are preview effects in 2.7</p></figcaption></figure>


---
