---
title: "How to edit plants created by brushes"
source_url: https://docs.d5render.com/user-guide/tool/how-to-edit-plants-created-by-brushes
fetched: 2026-06-07
---

# How to edit plants created by brushes

You can hide/delete/re-edit again by the brush records, which can be used as follows:

After using the Brush or Scatter tool to draw plants on a model, selected models will display brush records in the right sidebar when the models are unlocked. Hover over the asset thumbnail to see the specific names of the assets. Each brush record can be hidden.

<div align="left"></div>

The brush record contains information about the plants drawn, and also supports applying the plants in the current record to the brush and eraser. Plants in the record can be continued to be drawn or erased. Right click on the brush record, you can delete it to manage the material in the scene more conveniently.

## Combination of brush records

Each time you draw, if you select the same plant, it will be merged into one record. If the first brush draws three plants A/B/C, the second brush draws three plants B/C/D, and the third brush continues to draw three plants A/B/C, then there are only two brush records for this model: A/B/C and B/C/D . That is, the first and the third brush painted the same plants, which are combined into one record.

<div align="left"></div>

Currently, plants drawn with tools (Brush/Spread/Path) do not support the operation of "editing or deleting one of them individually", but only support the use of eraser to remove or the use of brush records to manage the drawn plants as a whole. We will consider adding this feature in future releases.

## Common issues

### How to delete the plants?

1. Plants drawn with the brush/scatter tool

When a model with brush/scatter plant load is selected, the right sidebar will show the corresponding brush records, and you can right-click to delete the records. If the same plant is selected for each brush paint, it will be merged into the same brush record.

<div align="left"></div>

2. Plants drawn with the path tool

Plants placed using the Path tool will be displayed in the Objects on the left and can be selected and then deleted.

<div align="left"></div>

3. Individually placed plants

Plants placed individually are shown in Objects on the left and can be selected and then deleted.

<div align="left"></div>


---
