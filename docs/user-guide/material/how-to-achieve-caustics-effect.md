# How to Implement Caustic Effects?

To implement caustic effects, you must enable the "Caustics" option for both **materials and light sources**.

- Among materials, only the **"Custom", "Transparent", and "Water" material templates** currently support caustic effects.

> Custom materials support reflection caustics;
> 
> Transparent and Water materials support both reflection and refraction caustics;
> 

- **Four types of light sources and the Sun (Geographic Sky and HDRI Sun)** support caustic effects.

1. The shape of caustic spots is affected by the bump variations of the model and the normal texture map, which can be adjusted via the Intensity and Softness parameters.

2. When caustic effects are enabled, the following adjustable parameters are available for light sources (4 basic light sources, Geographic Sky, and HDRI Sun):

- **Caustic Intensity:** A multiplier for the caustic effect; the higher the value, the brighter the caustics.

- **Softness:** The degree of caustic softening that takes effect when the light source radius is greater than 0.

> Notes:
> 
> 1. Caustic effects on Transparent materials are incompatible with their respective UV and tri-planar effects.
> 
> 2. Currently, a maximum of **64 light sources** can have caustic effects enabled simultaneously.
> 
> 3. Caustic effects increase rendering performance overhead, so please select and adjust them according to actual needs when using them.