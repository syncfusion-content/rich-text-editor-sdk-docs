---
layout: post
title: Image Extension in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the Image extension in the TypeScript Headless Editor, including display modes, alignment, wrapping, captions, and resize behavior.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Image in TypeScript Headless Editor

The `imageExtension` registers the `image` block and `imageInline` inline nodes for rendering images as `<figure>` with `<img>` (block) or `<img>` (inline) elements.

## Register the extension

```typescript
import { HeadlessEditor, imageExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [imageExtension]
});
```

## Node attributes

The `image` and `imageInline` nodes share the same attribute set:

| Attribute | Description | Default |
|-----------|-------------|---------|
| `src` | Image source URL (HTTP, HTTPS, or data URI). | `''` |
| `alt` | Alternative text displayed when the image fails to load (accessibility). | `''` |
| `title` | Tooltip text shown on hover. | `''` |
| `width` | Image width in pixels. | `null` |
| `height` | Image height in pixels. | `null` |
| `display` | Display mode: `block` (standalone figure) or `inline` (flows with text). | `'block'` |
| `align` | Horizontal alignment for block images (`left`, `center`, `right`, or `none`). | `'none'` |
| `wrap` | Text wrapping for block images (`left`, `right`, or `none`). | `'none'` |
| `caption` | Whether the image renders an editable caption. | `false` |

## Configure image options

The `image` extension exposes options for default image behavior, persistence, and resize handles:

| Option | Description | Default |
|--------|-------------|---------|
| `allowBase64` | Allow pasted or dropped images to keep their base64 payload as `src`. | `true` |
| `htmlAttributes` | Static HTML attributes merged onto every inserted `<img>` element. | `{}` |
| `saveFormat` | Persistence format for image references: `blob` (Blob URL) or `base64` (inline data URI). | `'blob'` |
| `display` | Default display mode for newly inserted images. | `'block'` |
| `align` | Default horizontal alignment for newly inserted images. | `'none'` |
| `wrap` | Default text wrapping for newly inserted images. | `'none'` |
| `resize` | Configure image resizing. Set to `false` to disable drag handles, or provide an `ImageResizeOptions` object. | `{ enabled: true, alwaysPreserveAspectRatio: true }` |

`ImageResizeOptions` accepts the following fields:

| Field | Description | Default |
|-------|-------------|---------|
| `enabled` | When `true`, drag-to-resize handles are rendered on image node views. | `true` |
| `alwaysPreserveAspectRatio` | When `true`, the engine preserves the aspect ratio on every handle. When `false`, holding <kbd>Shift</kbd> toggles aspect lock interactively. | `true` |
| `directions` | Whitelist of resize directions to render handles for (for example, `top-left`, `top-right`, `bottom-left`, `bottom-right`). | All four corners |
| `minWidth` | Minimum allowed width in pixels during a resize drag. | `8` |
| `minHeight` | Minimum allowed height in pixels during a resize drag. | `8` |

```typescript
import { HeadlessEditor, imageExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        imageExtension.configure({
            display: 'block',
            align: 'none',
            wrap: 'none',
            resize: {
                enabled: true,
                directions: ['bottom-right'],
                alwaysPreserveAspectRatio: true,
                minWidth: 50,
                minHeight: 50
            }
        })
    ]
});
```

## Commands

### Insert and remove

| Command | Description |
|---------|--------------|
| `insertImage(payload)` | Inserts one or more images at the current cursor position. Accepts a single `InsertImagePayload` or an array of payloads for batch insertion. |
| `removeImage()` | Removes the selected image from the document. |
| `updateImage(payload)` | Updates properties of the selected image. Each payload field is optional; only supplied fields are applied. |

`InsertImagePayload` accepts the following fields:

| Field | Type | Description |
|-------|------|-------------|
| `src` | `string` | Image source URL (HTTP, HTTPS, or data URI). Required. |
| `alt` | `string` | Alternative text for accessibility. |
| `title` | `string` | Tooltip text. |
| `width` | `number` | Image width in pixels. |
| `height` | `number` | Image height in pixels. |
| `display` | `'block' \| 'inline'` | Display mode for the new image. |
| `align` | `'left' \| 'center' \| 'right' \| 'none'` | Horizontal alignment. |
| `wrap` | `'left' \| 'right' \| 'none'` | Text wrapping. |
| `caption` | `string` | Caption text rendered below the image. |
| `attributes` | `Record<string, string>` | Custom HTML attributes (for example, `data-*`, `class`). |

`UpdateImagePayload` accepts `src`, `alt`, `title`, `width`, `height`, and `attributes`.

### Layout and dimension

| Command | Description |
|---------|--------------|
| `setImageAlign({ align })` | Sets the horizontal alignment of the selected image. Accepted values: `left`, `center`, `right`, `none`. Clears any active text wrapping. |
| `setImageWrap({ wrap })` | Sets the text wrapping of the selected image. Accepted values: `left`, `right`, `none`. Clears any active alignment when wrapping is enabled. |
| `setImageDisplay({ mode })` | Converts the selected image between block and inline display modes. Accepted values: `block`, `inline`. |
| `setImageDimension({ width?, height? })` | Updates the `width` and `height` attributes of the selected image. Pass `null` to clear a dimension. |

### Captions

| Command | Description |
|---------|--------------|
| `addCaption({ caption? })` | Adds an editable caption to the selected image. When the selection is an inline image, it is first converted to a block image. Accepts an optional `caption` string; if omitted or empty, the placeholder text `Insert caption` is used and the cursor is placed inside the caption. |
| `removeCaption()` | Removes the caption text and disables the `caption` attribute on the selected image. |
| `toggleCaption({ caption? })` | Toggles the caption on the selected image. When a caption already exists, it is removed; otherwise, a new one is added. Accepts the same optional `caption` payload as `addCaption` to seed the new caption text. |

The optional `caption` payload for `addCaption` and `toggleCaption` is `CaptionPayload`:

| Field | Type | Description |
|-------|------|-------------|
| `caption` | `string` | Initial text for the new caption. When omitted or whitespace-only, the placeholder text `Insert caption` is used. |

```typescript
// Insert a single block image
editor.commands.insertImage({
    src: 'https://example.com/photo.png',
    alt: 'Example photo',
    width: 400,
    height: 300,
    display: 'block'
});

// Insert multiple images at once
editor.commands.insertImage([
    { src: 'image1.png', alt: 'First image' },
    { src: 'image2.png', alt: 'Second image' }
]);

// Update the alt text of the selected image
editor.commands.updateImage({ alt: 'Updated alt text' });

// Float the selected image to the left with text wrapping
editor.commands.setImageWrap({ wrap: 'left' });

// Resize the selected image programmatically
editor.commands.setImageDimension({ width: 600, height: 400 });

// Convert the selected image to inline display
editor.commands.setImageDisplay({ mode: 'inline' });

// Add a caption with custom text
editor.commands.addCaption({ caption: 'Sunset over the lake' });

// Add a caption with the default placeholder text
editor.commands.addCaption();

// Toggle a caption, seeding it with text when adding
editor.commands.toggleCaption({ caption: 'Figure 1' });
```

## Resize events

When `resize.enabled` is `true`, the extension emits lifecycle events during user drag interactions:

| Event | Payload |
|-------|---------|
| `resize-start` | Initial dimensions and event coordinates. |
| `resizing` | Updated dimensions as the drag progresses. |
| `resize-stop` | Final dimensions when the drag completes. |

The final `width` and `height` are persisted to the image attributes when resizing is completed.