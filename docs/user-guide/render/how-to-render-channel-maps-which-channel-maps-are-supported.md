---
title: "How to render channel maps? Which channel maps are supported?"
source_url: https://docs.d5render.com/user-guide/render/how-to-render-channel-maps-which-channel-maps-are-supported
fetched: 2026-06-07
---

# How to render channel maps? Which channel maps are supported?

Check the Channel option, and check the desired channel map for rendering in the right setting column of it, then the channel maps will be exported when exporting the pictures, which can be used for post-processing.

<figure><img src="/files/TEwpaxPLcs7xotDzOD8N" alt=""><figcaption></figcaption></figure>

Currently D5 supports rendering the following types of channel maps:

* SkyMask
* AO
* MaterialID
* Reflection
* Transparent
* ZDepth
* AI Post Channel (AI_Albedo、AI_Normal、AI_Material)

> Note:&#x20;
>
> AI Post Channel is checked by default when outputting images; not available when outputting sequence frames.

## FAQS

**1.Why aren't transparent materials displayed in the channel map?**

A: For ease of post-processing, D5 provides an exclusive colored channel map called 'Transparent' for rendered transparent materials.

<figure><img src="/files/37Pyr18jBEl9Pq7vP1OQ" alt=""><figcaption></figcaption></figure>


---
