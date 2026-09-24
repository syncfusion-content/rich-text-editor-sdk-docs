---
layout: post
title: Bullet List Extension in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the Bullet List extension in the TypeScript Headless Editor, including list style types, commands, shortcuts, and input rules.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Bullet List in TypeScript Headless Editor

The `listExtension` provides built-in support for unordered bullet lists (`<ul>`) and list items (`<li>`).

## Register the extension

```typescript
import { HeadlessEditor, listExtension, listKeymapExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [listExtension, listKeymapExtension]
});
```

I> Include `listKeymapExtension` to enable list navigation keys such as <kbd>Tab</kbd>, <kbd>Shift</kbd> + <kbd>Tab</kbd>, <kbd>Enter</kbd>, and <kbd>Backspace</kbd>.

## Node attributes

| Attribute | Description |
|-----------|--------------|
| `listStyleType` | Bullet style applied to the list (`disc`, `circle`, or `square`). Rendered as an inline `list-style-type` CSS style. Defaults to `disc`. |

## Configure list options

The `list` extension supports custom HTML attributes for both the list container (`<ul>`) and its items (`<li>`):

| Option | Description | Default |
|--------|-------------|---------|
| `htmlAttributes` | Custom HTML attributes applied to the outer `<ul>` element. | `{}` |
| `itemHtmlAttributes` | Custom HTML attributes applied to every child `<li>` element. | `{}` |

```typescript
import { HeadlessEditor, listExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        listExtension.configure({
            htmlAttributes: { class: 'custom-bullet-list' },
            itemHtmlAttributes: { class: 'custom-list-item' }
        })
    ]
});
```

## Commands

| Command | Description |
|---------|--------------|
| `toggleBulletList({ listStyleType?, keepMarks? })` | Toggles the bullet list format on the current block or selection. Accepts an optional `listStyleType` (`disc`, `circle`, `square`) to toggle directly into that style or switch an existing list's style, and `keepMarks` to retain active formatting marks. |
| `setBulletListType({ listStyleType })` | Changes the bullet style (`disc`, `circle`, `square`) of the current bullet list. |
| `indentListItem()` | Indents the active list item to create a nested sub-list. |
| `outdentListItem()` | Outdents the active list item to the parent list level or converts it back to a standard block. |


```typescript
// Toggle default bullet list (disc)
editor.commands.toggleBulletList();

// Toggle directly with a specific style (e.g., circle)
editor.commands.toggleBulletList({ listStyleType: 'circle' });

// Set bullet style on an existing list
editor.commands.setBulletListType({ listStyleType: 'square' });

// Indent active item
editor.commands.indentListItem();
```

## Keyboard shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Toggle Bullet List | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>8</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>8</kbd> |
| Indent Item | <kbd>Tab</kbd> | <kbd>Tab</kbd> |
| Outdent Item | <kbd>Shift</kbd> + <kbd>Tab</kbd> | <kbd>Shift</kbd> + <kbd>Tab</kbd> |

## Input rules

Type `-` or `*` followed by a space at the start of a line to convert the block into a bullet list.
