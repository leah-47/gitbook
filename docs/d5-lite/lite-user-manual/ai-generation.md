---
title: "AI Generation"
source_url: https://docs.d5render.com/d5-lite/lite-user-manual/ai-generation
fetched: 2026-06-07
---

# AI Generation

<figure><img src="/files/YGOhkuV1LvP796PKbQNf" alt=""><figcaption></figcaption></figure>

### Capture

1. Capture from SketchUp
   1. Every time Lite is launched, the program automatically captures a screenshot from the current view in SketchUp and imports it into the D5 Lite viewport.
   2. To change the view, click the "Capture from SketchUp" button in the lower-left corner of the interface. D5 Lite will capture a new screenshot based on the updated view in SketchUp.
   3. The screenshot ratio is always consistent with the SketchUp window. To adjust it, change the window ratio in SketchUp.
2. Switch from Render Mode to AI Mode
   1. When switching from Render Mode to AI Mode, D5 Lite automatically captures the current render viewport and uses it as the input for AI generation.
   2. Lite AI continues generating based on the current rendered image, helping complete subsequent visual enhancements and style refinement.

### Style Presets and Structure Weights

D5 Lite offers multiple parameters to control the image generation effect.

1. D5 Lite includes a variety of style presets, covering architecture, landscape, and interior design. In the "Style Preset" menu, you can switch between different design categories from the top of the window.
2. Each category corresponds to different project types, such as commercial, office, villa, residential, etc., in the architecture category.
3. Each project type further specifies design styles, including aspects like perspective, environment, season, and materials, allowing you to choose corresponding generation styles.

<figure><img src="/files/Bp9lQsitH6dwSWlvyaag" alt=""><figcaption></figcaption></figure>

### Structure Weight

Used to adjust the similarity between the generated image and the input image structure, affecting the balance between creative freedom and structural consistency.

1. Creative
   1. Adjusting the parameter to the left leans toward creativity, with less dependence on the lines and structures of the input image, introducing more variation in the results.
   2. This is suitable for early-stage design inspiration exploration.
2. Precise
   1. Adjusting the parameter to the right makes the model strictly follow the lines and structure of the input image, ensuring higher matching between the generated and input images.
   2. This is more suitable for the later stages of design, where strict control over form and structure is required.

|                                                                                                                                                                                                                                                           | Creative                                                                                                                                                                                                                                                  | Default                                                                                                                                                                                                                                                 | Precise                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <p><br></p>                                                                                                                                                                                                                                               | <p></p><p><img src="/files/90F4ECJog9mw50Ki58xX" alt=""><br></p>                                                                                                                                                                                          | <p></p><p><img src="/files/lM5jH5PE0nAoWpZgDrAf" alt=""><br></p>                                                                                                                                                                                        | ![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXds86Yg2doONt9NcEsCCmTMIJ1k2atcBGHtza2zS56P9YVv4GJoaY0TZ9EzuSoGga6ZFHYFoeGnGvFpYO0aT7mxgWkKbFBs3qoDEKUGbYuiIZuQCGEr7JHxwjFqGthwEQObkLCC?key=aSAS5uWlhWzlvc3M8Jr3hct-)                                 |
| <p><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXe6EzYEQasQfKksE4vlssuT8eCMTtgtvoOxigRygI3-k5rMNjJa56Yv70xwnCy_DdtzClctr8N4neW4FfeGDvBWGu_FFOviNKV0QqkTjdZ56LqEHdwMXHcepA8ng1WJDE3hcGRH?key=aSAS5uWlhWzlvc3M8Jr3hct-" alt=""></p><p><br></p> | <p><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXfEN41vuV9OJRtVddHSw7JG1mdIsXOV6y-GOie9rollRElgzWCIZ61BmXDjLZnagAi-7NF3cRjk73BwARcmdIPa5O28Yyx6n3dZvs-cHDLoGRj18Tt6U5uww8l3cnTy169oV-RD?key=aSAS5uWlhWzlvc3M8Jr3hct-" alt=""></p><p><br></p> | <p><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdkmIt3_BEpsnuIL7HsO7kqWZfIWwq5sEalNtdLVe4cP-kZUx5wX2okRB4wQ5oIQjHsNVr7mkKGqXttIdaEzmyu2p80ucGm1f9Z5Cq7h9ESO-fbrqNp83i5r6ySmO0uUsKIsA?key=aSAS5uWlhWzlvc3M8Jr3hct-" alt=""></p><p><br></p> | <p><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdOXCg0huMp_f20mSXtRDlkFnbFac94eOWoy0MawrUqvCgC9QNjJv75jaRzViyNtZ-3LKzvi_Y2RJB6THQBWl0GxRulJcskVdhqs8DOX9dAmzXZ5e_KxWrCn8PSLaDlaU3PyeaT?key=aSAS5uWlhWzlvc3M8Jr3hct-" alt=""></p><p><br></p> |

### Inspiration Description

1. By inputting a custom prompt, users can more accurately control the content of the generated images to meet specific design needs.
2. Up to 300 characters are supported.

<figure><img src="/files/F4PJhCq92GQGfMpyyXQT" alt=""><figcaption></figcaption></figure>

### Reference Image

1. Supports custom reference image upload. The AI analyzes the style, color, and atmosphere of the uploaded image to generate corresponding results.
2. You can upload any image directly from the toolbar, with support for up to 50M.

<figure><img src="/files/bpmQqnvuAmxKiJJZ03he" alt=""><figcaption></figcaption></figure>

### Image Generation Settings

1. Image Quality
   1. There are three options: Standard, High, and Ultra Quality.
   2. In addition to resolution, higher quality also enhances detail and visual effects.
2. Random Seed
   1. The random seed is an integer between 1 and 2,147,483,647.
   2. The seed influences details, colors, and some random factors in the image, causing each generated result to be slightly different.
   3. If you want to preserve a specific generated effect, using the same prompts and a fixed seed will generate the same result. By adjusting the seed, you can explore different image generation effects without changing other input parameters.
3. Number of Generated Images
   1. You can generate up to 4 images at a time for quick comparison of design schemes.

<figure><img src="/files/9oy1ewCfwTWW4Nizolrk" alt=""><figcaption></figcaption></figure>

### Generate, Re-generate, and Iterative Generate

<figure><img src="/files/PpJw9a8OISBrW46xD5xT" alt=""><figcaption></figcaption></figure>

1. Generation Process:
   1. Generate:
      1. After capturing a screenshot from SketchUp, add style presets or inspiration descriptions, and start creating a new AI image from scratch.
   2. Re-generate
      1. If you are dissatisfied with the generated image or need more variations, use the regenerate function to obtain a different version.
      2. During the re-generation process, the input image remains unchanged, but the generation parameters (style presets, inspiration description, or random seed) can be adjusted.
   3. Iterative Generation
      1. If you are generally satisfied with the generated result but need some detailed adjustments, iterative generation is suitable for improving the output.
      2. Based on the already generated image, you can continue adjusting parameters (style presets, inspiration descriptions, etc.) to produce a result that better meets expectations.
2. After the initial generation (or re-capturing a screenshot from SketchUp), you can re-generate the image if needed.
3. Viewing the image in larger detail initiates the iterative generation process. You can return to the previous step from the top left corner of the interface.
4. While viewing the larger version of the generated image, you can compare it with the original via the option in the top-right corner, making it easier to evaluate differences and improvements.

<figure><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXc4_zc-gzKOKG9eWVCLI2PlAkH8LQzc4vMLYUi42zsB4dyygjqCSs58nL9onkLaKZ_b121rjexoBibr5mxCgmROME7KHWnkOCUNRywSUwJCOQwI7SJUOy-lhaaFWZFpsFQvjNUg?key=aSAS5uWlhWzlvc3M8Jr3hct-" alt="" width="563"><figcaption></figcaption></figure>

### Save and Delete Image

1. After generating, you can click the save button at the bottom right corner to save the generated image locally.
2. When hovering over a single image, you can choose to save or delete that image.

### History

1. The "History" section is located at the bottom left of the interface, and it records all previously generated images.
2. By opening the history menu, you can select any previously generated image; and may either regenerate it or use iterative generation to refine it further.
3. Support switching between “**All**” and “**Current Item**”
   1. “**All**” shows all the generated image records under the current login account.
   2. “**Current Project**" filters out the images corresponding to the current SketchUp file.


---
