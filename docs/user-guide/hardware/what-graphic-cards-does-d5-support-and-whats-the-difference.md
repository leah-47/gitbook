---
title: "What graphic cards does D5 support? And what's the difference?"
source_url: https://docs.d5render.com/user-guide/hardware/what-graphic-cards-does-d5-support-and-whats-the-difference
fetched: 2026-06-07
---

# What graphic cards does D5 support? And what's the difference?

### What kind of configuration supports D5 and why does it fail the test? 

D5 Render’s real-time raytracing technology is built on DXR of Windows systems, and the current graphics cards that support DXR can be checked on

[RTX & GTX supported GPUs (nvidia.com) ](https://www.nvidia.com/en-us/geforce/news/geforce-gtx-dxr-ray-tracing-available-now/)

[AMD ׀ High-Performance & Adaptive Computing](https://www.amd.com/en/technologies/directx12)

[Intel ׀ Data Center Solutions, loT, and PC Innovation](https://www.intel.com/content/www/us/en/homepage.html)

| **Series**          | **Type**                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NVIDIA GTX          | <p>GTX 1060 6GB<br>GTX 1660 6 GB、GTX 1660 TI 6 GB<br>GTX 1070 8GB、GTX 1070 TI 8GB<br>GTX 1080 8GB、GTX 1080 TI 11 GB</p>                                                                                                                                                                                                                                                                                   |
| NVIDIA RTX          | <p>RTX 4090 24 GB、RTX 4080 16 GB<br>RTX 3090 Ti 24 GB、RTX 3090 24 GB<br>RTX 3080 Ti 16 GB / 12 GB、RTX 3080 16 GB / 12 GB / 10 GB / 8 GB<br>RTX 3070 Ti 8 GB、RTX 3070 8 GB<br>RTX 3060 Ti 8 GB、RTX 3060 12 GB / 6 GB<br>RTX 3050 8 GB / 4 GB、RTX 3050 Ti 4 GB<br>RTX 2080 Ti 11 GB、RTX 2080 SUPER 8 GB、RTX 2080 8 GB<br>RTX 2070 SUPER 8 GB、RTX 2070 8 GB<br>RTX 2060 SUPER 8 GB、RTX 2060 12 GB / 6 GB</p> |
| NVIDIA Quadro       | RTX A6000、RTX A5500、RTX A5000、RTX A4500、RTX A4000、RTX A2000                                                                                                                                                                                                                                                                                                                                               |
| AMD Radeon™ RX 6000 | RX 6950 XT、RX 6900 XT、RX 6800 XT、RX 6800、RX 6750 XT、RX 6700 XT、RX 6650 XT、RX 6600 XT、RX 6600、RX 6500 XT、RX 6400                                                                                                                                                                                                                                                                                           |

### What's the difference？ 

1\. The output is consistent for all graphics cards that pass the hardware test.

2\. Different graphics cards differ mainly in real-time operating performance and rendering output efficiency. To see more statistics for your reference, you can go to [Benchmark](https://www.d5render.com/specs) and see test results from D5 users. You're also welcome to run this tool yourself and see how your hardware ranks alongside others when running D5 Render.

3\. Currently, D5 primarily utilizes Dedicated GPU memory and does not support multi-graphics card parallel/interconnected operation. Therefore, it is advisable to keep one graphics card which is at a high level of performance.




---
