---
title: "How to use Ocean?"
source_url: https://docs.d5render.com/user-guide/tool/how-to-use-ocean
fetched: 2026-06-07
---

# How to use Ocean?

Introduces Ocean to simulate realistic waves, coastlines, foam, water materials, and physical interactions between water and objects. By adding an Ocean object, a dynamic ocean surface can be created efficiently, with automatic detection of the scene’s terrain range to generate seamless and natural transitions from ocean to coast.

## Create and Basic Properties

### Ocean Creation

* Supports adding ocean from the top toolbar > Terrain.





* An ocean object is automatically created upon selection and appears in the Resource List.
* When ocean is selected, its corresponding control panel appears on the right sidebar, enabling adjustments to coastline range, waves, and materials.

### General Attributes

The ocean divides the water body into two logical areas for fine control: the **Surface** and the **Coastline**.

|                                      Surface                                      |             Coastline            |
| :-------------------------------------------------------------------------------: | :------------------------------: |
| <p></p><p></p> |  |

#### **1. Ocean Surface**

It is used to control the behavior of deep water away from the coast, primarily affecting the wave form and the optical properties of water bodies.

**General parameters:**

* Height: Controls the sea level height.
* Wave Scale: Controls the horizontal size of waves. The larger the value, the wider the wave crest.
* Wave Height: Controls the vertical amplitude of the wave crest, affecting the wave's volumetric effect.
* Speed: Controls the flow speed of ocean waves.

**Material Settings:**

Affects the entire ocean surface material.



* Absorption: Controls the degree of light absorption in water. Higher values result in deeper water color.
* Scattering: Controls the light scattering effect, affecting water turbidity and volumetric effect.
* Depth: Controls the surface transparency.

**Underwater Volumetric Effect:**

* Supports simulation of underwater light scattering and turbidity to enhance realism.

#### **2. Coastline**

Controls the effects of nearshore waves, foams, intertidal zone, and transition from land to ocean.

**Automatic Coastline Generation**



Supports automatic detection of intersections between terrain/geometry and the ocean surface to generate a coastline with tidal and caustic effects near the shore.

> **Warning:** Range: For now, the coastline covers a **5120m\*5120m** area and **doesn't** allow adjustments.


**General Parameters:**

* Size: Controls the width range of the shoreline wave area.
* Shoreline Wave Speed: Controls the movement speed of waves near the coastline.
* Shoreline Wave Width: Controls the wave coverage range near the coastline.

**Material Settings:**



* Based on the height difference between the ocean surface and the ground: as the distance decreases, the color shifts toward the coastline material; as the distance increases, it shifts toward the ocean surface material.
* Absorption: Controls the dark-to-light transition of nearshore water material.
* Scattering: Controls the water turbidity near the shore to create a natural shallow water area.

**Foam Parameters:**



* Nearshore Foam Intensity: Adjusts the visibility and brightness of foam in nearshore areas, defined as the coastal zone where the model meets the sea surface, including island edges, structures, or terrain intersecting with seawater. Increased values result in more pronounced nearshore spray and whiter foam.
* Offshore Foam Intensity: Adjusts the overall visibility and brightness of foam in offshore waters. Higher values produce a more distinct spray in distant waves and whiter foam.
* Offshore Foam Size: Modifies the scale and distribution density of offshore foam on the sea surface. Higher values increase both the quantity and density of offshore spray and foam.

> **Note:** The change in foam direction when adjusting this parameter is under expectations; the value corresponds to the number of divisions of the foam area.

* Offshore Foam Offset: Adjusts the positional displacement of offshore foam textures on the sea surface.

X-axis Offset: Adjusts the horizontal (left-right) translation of foam.

Y-axis Offset: Adjusts the depth (front-back) translation of foam.

**Coastline Anchor:**

* Supports select objects from the viewport or the resource list as the Coastline Anchor, around which the coastline will be automatically generated.
* Supports individual objects only. Grouped/path-based/scattered/.abc objects are not supported.
* The coastline area updates dynamically with any addition/deletion/modification of anchor objects, similar to the cull effect of D5 Scatter.
* Allows up to 50 objects to be set as Coastline Anchors.



**Auto-refresh of Coastline Range:**

The following actions lead to auto-refresh of the coastline rage:

* Adjust ocean surface height
* Sculpt and modify terrain
* Modify terrain range
* Add Coastline Anchor objects

**Manual Refresh of Coastline:**

The following actions require manual refresh of the coastline rage:

* Delete/edit Coastline Anchor objects




---
