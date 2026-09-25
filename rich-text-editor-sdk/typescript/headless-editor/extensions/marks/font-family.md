---
layout: post
title: Font Family Mark in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the Font Family mark in the TypeScript Headless Editor, including setFontFamily, unsetFontFamily commands, and HTML output.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Font Family Mark in TypeScript Headless Editor

The `fontFamilyExtension` registers the `fontFamily` capability, which applies a font family to text. Family values are stored using the shared `textStyle` mark, allowing font family to coexist with other text style attributes such as font size, font color, and background color. It contributes the `setFontFamily` and `unsetFontFamily` commands. Family names that contain spaces are automatically wrapped in double quotes in the generated CSS.

## Register the extension

```typescript
import { HeadlessEditor, fontFamilyExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [fontFamilyExtension]
});
```

## Configure the extension

The `fontFamily` extension exposes an `htmlAttributes` option that adds custom HTML attributes to the rendered `<span>` element. Use `.configure()` to set it:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `htmlAttributes` | `Record<string, string>` | `{}` | Custom HTML attributes applied to the rendered `<span>` element. |

```typescript
import { HeadlessEditor, fontFamilyExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        fontFamilyExtension.configure({
            htmlAttributes: { class: 'my-custom-class' }
        })
    ]
});
```

## Commands

| Command | Description |
|---------|-------------|
| `setFontFamily({ family })` | Applies the specified font family to the current selection. |
| `unsetFontFamily()` | Removes the font family from the current selection. |

```typescript
// Apply Arial to the current selection
editor.commands.setFontFamily({ family: 'Arial' });

// Apply a font stack with fallback
editor.commands.setFontFamily({ family: '"Helvetica Neue", Arial, sans-serif' });

// Remove the font family from the current selection
editor.commands.unsetFontFamily();
```