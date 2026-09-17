---
name: canva-slide-excalidraw-style
description: Create simple 16:9 Canva-style presentation visuals with an Excalidraw-like hand-drawn look. Use for workflow diagrams, bottleneck tables, system overviews, and other business slides that need only boxes, lines, arrows, and readable text.
metadata:
  short-description: Create simple Excalidraw-style Canva slides
---

# Canva Excalidraw Slide Style

Use the built-in image generation tool to create a clean presentation visual. The target is a simple Canva slide that looks like an Excalidraw sketch, not a polished illustration.

## Default visual language

- Use a 16:9 slide canvas, preferably 2048x1152.
- Use a warm white or white background.
- Draw frames, dividers, arrows, and table lines in black or near-black with a hand-drawn feel.
- Use a readable handwritten or casual sans-serif style for labels.
- Keep the composition flat, spacious, and presentation-ready.
- Do not add icons, illustrations, gradients, photos, decorative elements, logos, or watermarks unless requested.
- Keep all text large enough to read on a presentation screen. Cut content before shrinking text.
- Do not use emoji or em dash in slide copy.

## Content fidelity

- Preserve user-supplied wording verbatim unless the user asks for editing or translation.
- Do not add extra labels, conclusions, examples, or explanatory copy.
- Keep the supplied reading order and hierarchy.

## Layout patterns

For a flow diagram:

- Put inputs on the left, processing in the middle, and outputs on the right or lower area.
- Use arrows to show direction and keep crossing lines to a minimum.
- Use one clear frame per major stage.

For a table:

- Use a clear header row and one row per supplied item.
- Size columns according to the amount of text.
- Keep row boundaries and text alignment unambiguous.
- Do not merge cells unless requested.

## Reusing an existing slide

When the user provides an existing slide image as a reference or asks to modify one:

- Use the local image as the style reference or edit target.
- Preserve its background, line weight, typography, spacing, and visual simplicity.
- Replace only the requested content or layout.
- Save the result as a new sibling file in the workspace unless the user explicitly asks to overwrite the original.

## Image generation prompt checklist

Include all of the following in the generation prompt:

1. The use case: productivity visual or presentation slide.
2. The 16:9 Canva slide format.
3. Exact text, marked as verbatim.
4. The layout and reading order.
5. The Excalidraw-style visual constraints.
6. The instruction that every supplied label must remain visible and that no extra text, emoji, em dash, or watermark may be added.

## Quality check

Before returning the result, inspect the image and verify:

- Every label and spelling matches the source.
- Text fits inside its frame and remains readable.
- Arrows point to the intended destination.
- Table rows and columns are visually clear.
- The slide has safe margins and a 16:9 composition.
- No unrequested visuals, colors, labels, emoji, or em dash were introduced.

Save project-bound images in the current workspace and return the absolute file path.
