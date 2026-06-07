---
title: "What's the difference between different video encoding formats? How to use QSV encoding?"
source_url: https://docs.d5render.com/user-guide/preference/whats-the-difference-between-different-video-encoding-formats-how-to-use-qsv-encoding
fetched: 2026-06-07
---

# What's the difference between different video encoding formats? How to use QSV encoding?

#### Support AV1 encoding <a href="#toc-h3-32-support-av1-encoding" id="toc-h3-32-support-av1-encoding"></a>

* AV1 is a new generation video encoding format with higher compression ratio and better picture quality at the same bitrate. Intel graphics cards have hardware acceleration support for the AV1 encoding format.\
  You can enable AV1 encoding in “Preference” → “Rendering” on machines with Intel GPUs.
* Non-Intel graphics cards will not have this option.
* If the rendered video cannot be played, you may need to download the corresponding AV1 video decoding package.
* On devices that do not support hard-decoded AV1, playback of AV1 video with very high resolution may be laggy.

#### Support QSV encoding <a href="#toc-h3-33-support-qsv-encoding" id="toc-h3-33-support-qsv-encoding"></a>

* Intel Quick Sync Video uses specialized media processing hardware cores to speed up video encoding and decoding, and it is a hardware acceleration technology for video encoding and decoding specific to Intel graphics cards.
* Non-Intel graphics cards will not have this option.


---
