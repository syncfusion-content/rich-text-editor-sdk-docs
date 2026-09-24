---
layout: post
title: Placeholder Extension in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the Placeholder extension in the TypeScript Headless Editor, including hint text, empty node styling, and visibility rules.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Placeholder in TypeScript Headless Editor

The `placeholderExtension` displays hint text inside empty editor nodes to guide users where content should be entered.

## Register the extension

```typescript
import { HeadlessEditor, placeholderExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [placeholderExtension]
});
```

## Configure placeholder options

The `placeholder` extension exposes options for hint text and visibility rules:

| Option | Description | Default |
|--------|-------------|---------|
| `placeholder` | Hint text shown in empty nodes. Can be a static string or a function that returns text based on the node context. | `'Write something...'` |
| `emptyNodeClass` | CSS class applied to empty nodes. Can be a static class name or a function that returns a class name based on the node context. | `'e-placeholder-is-empty'` |
| `emptyEditorClass` | CSS class applied to the editor root element when the entire editor is empty. | `'e-placeholder-is-editor-empty'` |
| `dataAttribute` | HTML data attribute name used to store the placeholder text on DOM elements. The value can be read by CSS `::before` pseudo-elements. | `'data-placeholder'` |
| `showOnlyCurrent` | When `true`, the placeholder is shown only for the node containing the active cursor. | `true` |
| `showOnlyWhenEditable` | When `true`, the placeholder is displayed only when the editor is in editable mode. | `true` |
| `includeChildren` | When `true`, the placeholder is shown for parent nodes containing only empty child nodes. | `true` |
| `showOnlyWhenEditorEmpty` | When `true`, the placeholder is shown only when the entire editor is empty. | `true` |

```typescript
import { HeadlessEditor, placeholderExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        placeholderExtension.configure({
            placeholder: 'Start typing...',
            emptyNodeClass: 'is-empty',
            showOnlyCurrent: true
        })
    ]
});
```

The `placeholder` and `emptyNodeClass` options accept either a string or a function that returns a string. Use a function to render context-specific hints, for example:

```typescript
import { HeadlessEditor, placeholderExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        placeholderExtension.configure({
            placeholder: (context) => `Write a ${context.node.type.name}...`
        })
    ]
});
```