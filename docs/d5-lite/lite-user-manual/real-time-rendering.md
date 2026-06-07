---
title: "Real-time Rendering"
source_url: https://docs.d5render.com/d5-lite/lite-user-manual/real-time-rendering
fetched: 2026-06-07
---

# Real-time Rendering



### Real-Time Sync

1. Model and Material Sync
   1. Supports real-time synchronization of all model and material data.
   2. Includes operations such as model creation, deletion, rotation, and scaling.
   3. Syncs material properties including textures, colors, UVs, and transparency.
   4. Supports switching between real-time sync and one-time sync.
2. View Sync
   1. The camera view in Lite follows the SketchUp camera by default.
   2. Synced parameters include camera position, movement, focal length, and safe frame.
   3. You can navigate in Lite using the W/A/S/D keys and the mouse. To restore sync with the SketchUp camera view, either move the view in SketchUp again or press the 0 key in Lite.
   4. Supports linking or unlinking the camera view.

### Materials

1. You can open the Material Editor from the Lite's bottom toolbar or from the Lite menu in SketchUp. The editor is a floating panel, available even when the Lite render window is not active. You can select materials directly from SketchUp for editing.
2. Once a material is selected in SketchUp, its parameters can be edited in the Lite panel. Texture changes—including editing, deleting, or replacing—are synced in real time between SketchUp and Lite.
3. D5 Lite uses the same PBR material system as D5 Render. However, D5 Lite can only inherit SketchUp’s single base colour texture. Other PBR channels (e.g. roughness, normal) can be adjusted using simplified parameters for better performance.
4. Lite supports 6 basic material templates: **General, Glass, Metal, Emissive, Water,** and **Grass**. Each has different parameters and render behavior:
   1. **General**: Suitable for most non-metal materials. Supports base color, texture, normal, specular, and roughness.
   2. **Glass:** By default, the Glass material is transparent. You can adjust parameters such as transparency, refraction, and thickness to achieve different visual effects. The Metal Coating parameter allows you to simulate highly reflective glass surfaces.
   3. **Metal:** Metalness is set to 1 by default for quick metallic look.
   4. **Emissive:** Follows texture color by default, or use custom color and temperature. It also supports brightness adjustment.
   5. **Water:** Adjustable colour and depth.
   6. **Grass:** Follows texture colour. The density and height can also be adjusted.



### Lighting Tool

1. Supports five basic light types: **Point Light, Spotlight, Strip Light, Rectangular Light** and **Disk Light.**
2. Open the Lighting Tool from the Lite bottom toolbar or the Lite menu in SketchUp. Like the Material Editor, it can be used without launching the Lite render window.
3. Choose a light type in the tool, then place it in SketchUp. Strip and Area Lights can be resized using SketchUp's scale tool.
4. Select lights in SketchUp to edit their settings in the panel. Supports multi-selection for batch editing.



### Environment & Effect

1. Use the bottom toolbar in Lite to adjust exposure or turn auto exposure on/off.
2. Similar to D5 Render, post-processing features include **tone mapping, white balance, saturation, and more.**
3. a.  Sunlight Intensity parameter is available to enhance the illumination brightness provided by the HDRI.

&#x20;     b.  By default, the Sun Direction follows the brightest point of the HDRI. You can switch to a custom direction mode and manually adjust the Altitude and Azimuth angles.



### Asset Library

1. **Accessing Assets:**\
   You can open the Asset Library from the bottom toolbar (this feature is currently in development) or through the Lite menu in SketchUp.
2. **Downloading and Using Assets:**\
   The assets are online resources and must be downloaded before you can use them. Once downloaded, they will be marked as locally available.
3. Similar to D5 Render, D5 Lite places assets in SketchUp as low-poly proxies to reduce your file's resource load. The full-quality asset is only displayed in the Lite render window.
4. Proxy object position, size, etc. are synced in real time to the render view.
5. You can edit these proxy objects in SketchUp without exploding them. However, please note that these edits will not affect the final render model in D5 Lite.

### Render Settings

1. Lite only supports image output (no video).
2. There only two quality options: Standard (2K) and High (4K).
3. Supports PNG and JPG formats.
4. Aspect ratio options:
   1. Default: Fit to window
   2. Match SketchUp viewport: render output will match SketchUp’s display exactly (including safe frame area).
   3. Preset ratios: 16:9, 3:2, 4:3, etc.



### Render Output

1. Click the Render button at the bottom right of the Lite window to render the current view.
2. After selecting the save location, Lite will start rendering and show the estimated time remaining.
3. Once finished, you can open the saved image file from your local system.

### Parameter Saving

1. Light, material, environment, and post-processing settings are all saved inside the .skp file.
2. When reopened, even on another device, the settings will be loaded, and render results will remain consistent.


---
