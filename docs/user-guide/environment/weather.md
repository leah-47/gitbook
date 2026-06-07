---
title: "How to adjust the weather in D5?"
source_url: https://docs.d5render.com/user-guide/environment/weather
fetched: 2026-06-07
---

# How to adjust the weather in D5?

**The second item in the "Environment" panel on the right sidebar contains three settings for the weather:** ********Cloud, Fog , Wind and Precipitation******.**

## Volumetric Clouds:

Introduces Volumetric Clouds with cloud presets and advanced settings, enabling authentic volumetric effects and flexible sky appearance creation.

* Added Volumetric Clouds to Environment > Weather.
* Contains multiple built-in cloud presets including Cumulus, Stratocumulus, Stratus, Altocumulus, Cumulonimbus, Cirrus Clouds, and Clear Blue Sky.
* **Advanced Cloud Settings:** Contains advanced options to customize the cloud appearance for different weather and lighting conditions.



### Cloud parameters

| **Settings**         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Amount               | Controls the area and volume of clouds in the sky. The larger the value, the more the clouds.                                                                                                                                                                                                                                                                                                                                                        |
| Amount - Thickness   | Controls the thickness of cumulus clouds.                                                                                                                                                                                                                                                                                                                                                                                                            |
| Amount - Density     | Controls the light transmission degree of clouds.                                                                                                                                                                                                                                                                                                                                                                                                    |
| Amount - Curl        | Controls the curliness of cloud edges.                                                                                                                                                                                                                                                                                                                                                                                                               |
| Amount - Aggregation | Controls the aggregation degree of clouds. Increasing this value will cause clouds to merge into larger formations.                                                                                                                                                                                                                                                                                                                                  |
| Cloud Coverage       | <p>Cloud coverage modes:</p><p>• Entire Sky(default): As cloud amount increases, small clouds are randomly generated across the sky, gradually covering the entire sky.</p><p>• Skyline: Small clouds first appear near the skyline, gradually spreading towards the center and eventually covering the entire sky.</p><p>• Direction: Clouds appear along the specified direction, gradually covering the entire sky as their amount increases.</p> |
| Middle-level clouds  | Controls the amount of altocumulus and altostratus clouds.                                                                                                                                                                                                                                                                                                                                                                                           |
| Cirrus Clouds        | Controls the amount of high-level cirrus clouds.                                                                                                                                                                                                                                                                                                                                                                                                     |
| Random Seed          | Randomly creates varied cloud appearance. The same seed creates consistent cloud appearance in the first frame.                                                                                                                                                                                                                                                                                                                                      |
| **Global settings**  |                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Height               | Controls the altitude at which low-level and high-level clouds start to appear.                                                                                                                                                                                                                                                                                                                                                                      |
| Speed                | <p>Controls the cloud movement speed. Increasing the value will make clouds move faster.</p><p>💡 To view the cloud movement, please first enable the Dynamic option from the Display menu.</p>                                                                                                                                                                                                                                                      |
| Direction            | <p>Controls the cloud movement direction with a range of 0-360 degree.</p><p>💡To view the cloud movement, please set a movement speed above 0 and enable the Dynamic option from the Display menu.</p>                                                                                                                                                                                                                                              |
| Rotate               | Controls the cloud rotation or offset angle.                                                                                                                                                                                                                                                                                                                                                                                                         |
| Offset               | Controls the cloud position offset.                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Cast Shadow          | When this option is enabled, clouds cast shadows and affect the light from the sun.                                                                                                                                                                                                                                                                                                                                                                  |

> **Warning:** **Compatibility**

* Volumetric cloud is the new feature introduced in version 3.0; before version 3.0, it took standard cloud parameters.
* When opening scenes created with earlier versions of D5 Render, the cloud effects remain consistent with the original scene.
* Includes a "Legacy" preset for compatibility with historical projects.


## Fog

Control the fog effect in the scene to add realism and depth to the scene.



### **Color**

Click the color slot to open the color picker and change the color of the fog. When the color is warm, it will produce a desert-like, smog effect. When the color is cooler, it will produce a water vapor-like effect.

### **Density**

Controls how dense the fog effect is. The higher the value, the thicker the fog.

### Height

Controls the location of the height at which the fog appears. At higher values of the falloff control, the change in fog height is more noticeable.

### Falloff

Controls the rate at which the fog falls off in the height direction. The higher the value, the faster the fall off, while the lower the value, the softer the transition of the fog in the vertical direction.

### Start Distance

Controls the starting position of the fog relative to the distance from the camera. The larger the value of the control, the further away the fog appears from the camera position.

### **Volume Light**

Light is scattered by particles in the air, making light paths visible. This effect is also often referred to as "God Ray".

### **Scattering**

Controls the distribution of the volume light scattering effect. The default value of 0 makes the fog uniformly bright, and adjusting it to 1 makes the fog from the direction of the light source brighter.

> **Warning:** Turning on Volume Light option will increase GPU memory consumption.

**Compatibility Notice:**

When opening files saved in version 3.0 using previous versions of D5, fog effects may alter. Please manually adjust fog parameters accordingly.


## Wind

### **Strength**

Control the wind movement effect of the plant. The higher the value, the more obvious the wind-driven effect.





### **Direction**

Freely change the wind direction, the control value range is 0°-360°.

> **Info:** Please turn on "Realtime" in the display mode to preview the wind effect.


## **Precipitation (Rain and Snow)**

Precipitation Contains snow and rain system , with adjustable strength and puddle effects.



### **Rain and snow parameters**

Switch weather effects and transition states through the Rain and Snow slide bar. The precipitation velocity gets higher when the value is closer to both ends.

> Note:
>
> This feature can be displayed in real time only in Dynamic state.

### **Strength**

We can adjust the Strength parameter to control the size and density of raindrops or snowflakes in the sky, from light drizzle to full-blown downpour, from winter flurry to whiteout blizzard, or even sleet if you want.

### **Puddle**

Ponding parameter is to control the degree of the ground affected by precipitation. The greater the value, the greater the ponding or snow on the ground. There is no ponding or snow when the value is 0.

> **Warning:** Note:

Due to the changes in the rain and snow effects in version 2.10, the rain, snow and puddle effects may change when opening old archives (archives from versions before 2.10) in version 2.10 Client, so users need to manually re-adjust them or continue to use previous versions of Client.




### Raindrop Transparency

Customize the transparency of the rain line as the effect requires. The smaller the value, the more transparent the rain line will be.

> Note: This parameter is resident and does not affect the effect of rain.

### Snow Flake Size

Customize the size of the snowflake as the effect requires, the larger the value, the larger the snowflake size.

> Note: This parameter is resident and does not affect the effect of rain.

### Water Mist & Density

Simulates water mist in humid air to enhance the realism of rainy day scenes. The larger the density parameter, the more intense the water mist will be.



## Milky Way

Adjust the brightness and angle of Milky Way as needed to enhance the realism of the night sky. Supports adjusting intensity and rotation.

> **Warning:** Note

Milky Way is only displayed in night environments.





---
