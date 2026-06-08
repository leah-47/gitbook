# How to achieve caustics effect

To achieve the caustics effect, you must enable the "Caustics" option for both **materials and light sources**.

- Among these materials, currently only the **"Custom", "Transparent", and "Water" material templates** support the caustics effect.

> Custom materials support reflection caustics;
> 
> Transparent and Water materials support both reflection and refraction caustics;
> 

- **Four types of light sources and the Sun (Geographic Sky and HDRI Sun)** support the caustics effect.

1. The shape of caustic spots is affected by the bump variations of the model and the normal texture map, which can be adjusted via the Intensity and Softness parameters.

2. When the caustics effect is enabled, the adjustable parameters in light sources (4 basic light sources, Geographic Sky, and HDRI Sun) include:

- **Caustics Intensity:** A multiplier for the caustics effect; the higher the value, the brighter the caustics.

- **Softness:** The degree of caustic softening that takes effect when the light source radius is greater than 0.

> Note:
> 
> 1. The caustics effect on Transparent materials is incompatible with their respective UV and Tri-Planar effects.
> 
> 2. Currently, a maximum of **64 light sources** can have the caustics effect enabled simultaneously.
> 
> 3. The caustics effect increases rendering performance overhead, so please select and adjust it according to your actual needs when using it.
> 

# FAQ

## Why does sunlight caustics flicker?

The sunlight caustics effect consumes a large amount of computing resources. To reduce resource consumption, the sunlight caustics effect may flicker slightly during preview, but it will remain static in rendered images.