---
layout: post
title: Ordered List Extension in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the Ordered List extension in the TypeScript Headless Editor, including start numbering, numbering formats, and commands.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Ordered List in TypeScript Headless Editor

The `listExtension` provides built-in support for numbered lists (`<ol>`) and list items (`<li>`).

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
| `order` | Starting number of the list, rendered as the HTML `start` attribute on `<ol>`. Defaults to `1`. |
| `listStyleType` | Numbering style format (`decimal`, `lower-alpha`, `upper-alpha`, `lower-roman`, `upper-roman`). Rendered as inline `list-style-type` CSS. Defaults to `decimal`. |

## Configure list options

The `list` extension supports custom HTML attributes for both the list container (`<ol>`) and its items (`<li>`):

| Option | Description | Default |
|--------|-------------|---------|
| `htmlAttributes` | Custom HTML attributes applied to the outer `<ol>` element. | `{}` |
| `itemHtmlAttributes` | Custom HTML attributes applied to every child `<li>` element. | `{}` |

```typescript
import { HeadlessEditor, listExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        listExtension.configure({
            htmlAttributes: { class: 'custom-ordered-list' },
            itemHtmlAttributes: { class: 'custom-list-item' }
        })
    ]
});
```

## Commands

| Command | Description |
|---------|--------------|
| `toggleOrderedList({ listStyleType?, keepMarks? })` | Toggles the ordered list format on the current block or selection. Accepts an optional `listStyleType` (`decimal`, `lower-alpha`, `upper-alpha`, `lower-roman`, `upper-roman`) to toggle directly into that numbering style or update an existing list's style, and `keepMarks` to retain active formatting marks. |
| `setOrderedListType({ listStyleType })` | Sets the numbering format (`decimal`, `lower-alpha`, `upper-alpha`, `lower-roman`, `upper-roman`) for the active list. |
| `indentListItem()` | Indents the active list item to create a nested sub-list. |
| `outdentListItem()` | Outdents the active list item to the parent list level or converts it back to a standard block. |
| `splitListItem()` | Splits the current list item at the cursor into a new list item. |

```typescript
// Toggle default ordered list (decimal)
editor.commands.toggleOrderedList();

// Toggle directly with a specific numbering format (e.g., lower-alpha)
editor.commands.toggleOrderedList({ listStyleType: 'lower-alpha' });

// Set numbering style on an existing list
editor.commands.setOrderedListType({ listStyleType: 'lower-roman' });

// Indent active item
editor.commands.indentListItem();
```

## Keyboard shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Toggle Ordered List | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>9</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>9</kbd> |
| Indent Item | <kbd>Tab</kbd> | <kbd>Tab</kbd> |
| Outdent Item | <kbd>Shift</kbd> + <kbd>Tab</kbd> | <kbd>Shift</kbd> + <kbd>Tab</kbd> |

## Input rules

Type `1.` followed by a space at the start of a line to convert the block into an ordered list starting at number 1.
