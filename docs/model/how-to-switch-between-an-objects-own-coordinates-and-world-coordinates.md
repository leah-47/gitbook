---
title: "How to switch between an object's own coordinates and world coordinates?"
source_url: https://docs.d5render.com/model/how-to-switch-between-an-objects-own-coordinates-and-world-coordinates
fetched: 2026-06-07
---

# How to switch between an object's own coordinates and world coordinates?

<div align="center"><figure><img src="/files/InAfsI8HJwwwvRIECuiF" alt=""><figcaption><p>World Coordinate System</p></figcaption></figure></div>

<figure><img src="/files/uswqpR9JwAVJaU7lvO29" alt=""><figcaption><p>Local Coordinate System</p></figcaption></figure>

<mark style="background-color:purple;">After selecting the model, you can switch between the</mark> <mark style="background-color:purple;"></mark><mark style="background-color:purple;">**Local Coordinates System & World Coordinate System**</mark> <mark style="background-color:purple;"></mark><mark style="background-color:purple;">options in the coordinate axis tool located in the upper-left corner of the scene.</mark>

1. When you switch to world coordinates, the direction of the x, y, and z axes of the object is along the world coordinates. **When the object rotates and creates an angle between it and the world coordinates, the direction of the three axes remains unchanged.**&#x20;
2. However, **after switching to the local coordinates, when the object rotates, the direction of the three axes changes according to the rotation angle**.

> **Info:** After switching between local coordinates and world coordinates, all models are uniformly set to the local or world coordinate system state.


* World Coordinate System: Refers to the absolute coordinate of space. The world space is the outermost space, and the concept of absolute position is similar to the latitude, longitude, and altitude in the real world.
* Local Coordinate System: It is the model's independent coordinate space. Each model or object has its own front, back, left, and right directions, and rotating or moving and scaling the model cannot change its own directions.


---
