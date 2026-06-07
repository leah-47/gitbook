---
title: "How to make a light invisible in the reflection?"
source_url: https://docs.d5render.com/user-guide/lights/how-to-make-a-light-invisible-in-the-reflection
fetched: 2026-06-07
---

# How to make a light invisible in the reflection?

<mark style="background-color:purple;">Use the</mark> <mark style="background-color:purple;"></mark><mark style="background-color:purple;">**''Visible in Reflection''**</mark> <mark style="background-color:purple;"></mark><mark style="background-color:purple;">parameter to control the visibility of lights in the reflection.</mark>

<figure><img src="/files/9qMYXInXTe1Mb2CBtJcT" alt="" width="563"><figcaption></figcaption></figure>

Reflections from lights usually appear on materials with high "Specular" and "Metallic", and the **"Intensity"** parameter can be used to adjust the influence of the light on reflections.&#x20;

By default ''Visible in Reflection'' is turned on and is 1. When it is turned off, i.e. the parameter is set to 0, the light will be completely invisible in the reflection.

> **Info:** #### Know issue

Currently, it is not possible to switch off reflections using "Visible in Reflection" for lights reflected in  glass.



---
