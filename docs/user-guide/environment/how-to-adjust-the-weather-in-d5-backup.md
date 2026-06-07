---
title: "How to adjust the weather in D5?backup"
source_url: https://docs.d5render.com/user-guide/environment/how-to-adjust-the-weather-in-d5-backup
fetched: 2026-06-07
---

# How to adjust the weather in D5?backup

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


***

## Fog

**Fog controls the fog effect in the scene, adding realism and layers to the scene.**

<div align="center"></div>

### Colour

Click on the colour slot to open the colour picker and change the colour of the fog.&#x20;

When the colour is on the warm side, it produces a desert-like, hazy effect. A cooler colour produces a water vapour-like effect.

### Density

Controls the sparseness of the fog effect. The higher the control value, the denser the fog.

### Height

Height controls the height at which the fog appears.&#x20;

At higher values of the Falloff control, the change in fog height is more pronounced.

### Falloff

Falloff controls the rate of fog decay in the height direction, the higher the value, the faster the decay; the lower the value, the softer the transition in the vertical direction.

### Start Distance

Start Distance controls the start position of the fog relative to the distance from the camera, the larger the value of the control, the further away from the camera position the fog appears.

### Volume Light

The Tyndall effect is a phenomenon in which light is scattered by particles in the air, allowing pathways of light to be seen. The Tyndall effect is often referred to as "God's light".

<div align="center" data-full-width="true"></div>

### Scattering

Controls the scattering distribution of the Volume Light scattering effect. The default value is 0 for a uniformly light fog, adjusting it to 1 will make the fog brighter from the direction of the light source.

Turning on the "Volume Light" option will increase the memory usage.

***

## Wind

<div align="center"></div>

### Strength

Wind strength affects the intensity of the effect of wind movement of plants. The larger the value, the more pronounced the effect of wind movement.

### Direction

This parameter allows you to freely change the wind direction, and the control value ranges from 0° to 360°.

Please enable Dynamic in the display mode to preview the wind effect.

***

## Precipitation

**Precipitation function includes both rain and snow. Support to adjust the strength of rain and snow and the effect of water on the ground.**

<div align="left"></div>

### Parameters for rain and snow

You can directly change the weather effect and transition state by adjusting Parameters for rain and snow. At the same time, the more the values are biased towards the ends, the greater the particle speed of the precipitation.

### Strength

Strength is used to control both the size and density of raindrops or snowflakes in the sky. It is possible to simulate the process from light to heavy rain, rain to snow, and light to heavy snow.

### Puddle

Puddle adjusts how much the ground is affected by precipitation. A value of 0 means that there is no effect of water or snow on the ground, the larger the value the greater the degree of water or snow on the ground.

### Snow Flake Size

You can customise the size of the snowflake according to the need of effect, the higher the value, the bigger the snowflake size is.

Note: This parameter is permanent and does not affect the effect of rain.


---
