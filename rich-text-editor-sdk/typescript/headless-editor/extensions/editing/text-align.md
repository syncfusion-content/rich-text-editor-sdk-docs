---
layout: post
title: Text Alignment Extension in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the Text Alignment extension in the TypeScript Headless Editor, including left, center, right, and justify alignment with commands and shortcuts.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Text Alignment in TypeScript Headless Editor

The `textAlignExtension` registers the `setTextAlign` and `unsetTextAlign` commands for applying and removing block-level text alignment.

## Register the extension

```typescript
import { HeadlessEditor, textAlignExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [textAlignExtension]
});
```

## Configure text alignment options

The `textAlign` extension exposes options for choosing which block types accept alignment and which HTML attributes are applied:

| Option | Description | Default |
|--------|-------------|---------|
| `types` | Block node type names where text alignment is allowed. | `['paragraph', 'heading', 'listItem', 'taskItem']` |
| `htmlAttributes` | HTML attributes applied to the aligned block elements. | `{}` |

```typescript
import { HeadlessEditor, textAlignExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        textAlignExtension.configure({
            types: ['paragraph', 'heading', 'blockquote']
        })
    ]
});
```

## Commands

| Command | Description |
|---------|--------------|
| `setTextAlign({ align })` | Applies the specified alignment to the current block or selection. Accepted values: `left`, `center`, `right`, `justify`. |
| `unsetTextAlign()` | Removes the alignment attribute from the current block or selection. |

```typescript
// Apply center alignment to the current block
editor.commands.setTextAlign({ align: 'center' });

// Apply right alignment
editor.commands.setTextAlign({ align: 'right' });

// Remove alignment
editor.commands.unsetTextAlign();
```

## Keyboard shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Align Left | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>L</kbd> |
| Align Center | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>E</kbd> |
| Align Right | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>R</kbd> |
| Justify | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>J</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>J</kbd> |