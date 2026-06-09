# How to Achieve Caustics Effect

To achieve the caustics effect, you must enable the "Caustics" option for both **materials and light sources**.

- Currently, only the **"Custom", "Transparent", and "Water" material templates** support the caustics effect.

> Custom materials support reflection caustics;
> 
> Transparent and Water materials support both reflection and refraction caustics;
> 

- **Four types of light sources and the Sun (Geographic Sky and HDRI Sun)** support the caustics effect.

1. The shape of caustic spots is affected by the bump variations of the model and the normal texture map, which can be adjusted via the Intensity and Softness parameters.

2. When the caustics effect is enabled, the adjustable parameters for light sources (4 basic light sources, Geographic Sky, and HDRI Sun) include:

- **Caustics Intensity**: Multiplier for the caustics effect. The higher the value, the brighter the caustics.

- **Softness**: The degree of caustic softening that takes effect when the light source radius is greater than 0.

> Notes:
> 
> 1. The caustics effect on transparent materials is incompatible with their respective UV and tri-planar effects.
> 
> 2. Currently, a maximum of **64 light sources** can have the caustics effect enabled simultaneously.
> 
> 3. The caustics effect increases rendering performance overhead, so please select and adjust it according to actual needs when using it.
> 

# FAQ

## Why Does Sunlight Caustics Flicker?

Sunlight caustics consume a large amount of computing resources. To reduce resource consumption, sunlight caustics may flicker slightly during preview, but will remain static in rendered images.