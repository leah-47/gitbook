---
title: "How to use Projector Widget?"
source_url: https://docs.d5render.com/user-guide/widget/how-to-use-projector-widget
fetched: 2026-06-07
---

# How to use Projector Widget?

Go to Menu > Preference > Widget, and you can check what you have installed, click to toggle on/off and manage your widgets.

<figure><img src="/files/vOdxH3D8UDmHlZkIXymw" alt=""><figcaption><p>Projector Widget</p></figcaption></figure>

***

Go to Menu > Preference > Widget to activate Projector, and insert it into the scene from Navigation bar > Add lights

<figure><img src="/files/c8oUJ3hOLaT6wYjPWmgt" alt=""><figcaption><p>Projector </p></figcaption></figure>

Projector is a new type of light source which has a rectangular projection effect. It supports image formats including jpg/png/bmp and video formats including mp4/avi/wmv. After adding a projector to the scene, we can adjust its parameters in Inspector.

<figure><img src="/files/Yi1W2smWOwTAWJMYfqpw" alt=""><figcaption><p> Inspector</p></figcaption></figure>

* Video: Customized pattern can be uploaded to determine the projection screen.
* Intensity: The luminous intensity of the light source in cd (candela), the maximum brightness can be entered 8000000.
* Cone Angle: Control the cone angle range of the projector's light emitting cone. The cone angle parameter allows you to control the feedback of the projection pattern.
* Attenuation Radius: Limit the range of influence of the light source. Within this range, the light fades according to the normal inverse square law, and beyond this range, the light calculation stops.
* UV: Control the position or size of the image or video within the projection.
* Haze: To create a Haze effect, we need to turn on Volume Light in Environment - > Weather - > Fog beforehand.

***

### FAQs <a href="#toc-h2-faq" id="toc-h2-faq"></a>

#### 1.Why are the Stage Lights effect abnormal? <a href="#header-2" id="header-2"></a>

The maximum number of the Stage Light/Projector is 64, if it exceeds the change limit it may cause abnormal preview or output effect.

#### 2.Why the specular reflection Stage Light/Projector effect is not shown in the rendering result? <a href="#header-3" id="header-3"></a>

This effect is not supported in the current version and will be supported in subsequent versions.

<figure><img src="/files/cuZLfaFS0YU2TxpoMl4d" alt=""><figcaption><p>Preview and output effect of the current version of Mirror Reflection Stage Light/Projector</p></figcaption></figure>


---
