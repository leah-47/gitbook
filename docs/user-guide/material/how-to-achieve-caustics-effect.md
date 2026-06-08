# How to achieve caustics effect

To achieve the caustic effect, the ‘Caustics’ option must be enabled simultaneously for **both the material and the light source**\.

- Among the materials, only the **\&\#34;Custom\&\#34;, \&\#34;Transparent\&\#34; and \&\#34;Water\&\#34; material templates** currently support caustics\.

> The Custom material supports reflective caustics; 
> 
> the Transparent and Water materials support both reflective and refractive caustics;
> 
> 

- **Four types of light sources and the sun\(Geo Sky, and HDRI\-Sun\)** support the caustic effect\.

1. The morphology of the caustics spot is affected by the model\&\#39;s bump variations as well as the normal texture map, which can be adjusted with the intensity and softness parameters\.

2. The parameters supported for adjustment in Light Sources \(4 Basic Light, Geo Sky and HDRI\-Sun\) when caustics is turned on: 

- **Caustics Intensity:** The multiplier value of the Caustics effect, the higher the value, the brighter the caustics\.

- **Softness:** The degree of Caustics softening which takes effect at the Light Source Radius greater than 0\.

> Note:
> 
> 1. The caustics effect on transparent materials is not compatible with their individual UV and triplanar effects\.
> 
> 2. Currently supports **up to 64 light sources** at the same time with the caustics effect on\.
> 
> 3. The caustics effect increases the rendering performance overhead, so please choose and adjust it according to the actual need when using it\.
> 
> 



# FAQ

## Why do the sunlight caustics flicker? 

Sunlight caustics consume huge computation resources\. To reduce the consumption, Sunlight Caustics may slightly flicker in preview, but will appear static in rendered images\.