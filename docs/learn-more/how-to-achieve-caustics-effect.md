# How to Implement Caustics Effects?

To implement caustics effects, you must enable the "Caustics" option for both **materials and lights**.

- Among these materials, currently only the **"Custom", "Transparent", and "Water" material templates** support caustics effects.

> Custom materials support reflection caustics;
> 
> Transparent and Water materials support both reflection and refraction caustics;
> 

- **Four types of lights and the Sun (Physical Sky and HDRI Sun)** support caustics effects.

1. The shape of caustic flares is affected by the bump variations of the model and the normal texture map, which can be adjusted via the Intensity and Softness parameters.

2. When caustics effects are enabled, the following adjustable parameters are available for lights (4 basic light types, Physical Sky, and HDRI Sun):

- **Caustics Intensity:** A multiplier for the caustics effect; the higher the value, the brighter the caustics.

- **Softness:** The degree of caustics softening that takes effect when the light radius is greater than 0.

> Notes:
> 
> 1. Caustics effects on Transparent materials are incompatible with their respective UV and Tri-Planar effects.
> 
> 2. Currently, up to **64 lights** are supported to enable caustics effects simultaneously.
> 
> 3. Caustics effects will increase rendering performance overhead, so please select and adjust them according to actual needs when using.
> 


# FAQ

## Why Does Sun Caustics Flicker?

Sun caustics effects consume a large amount of computing resources. To reduce resource consumption, sun caustics effects may flicker slightly during preview, but will remain static in rendered images.