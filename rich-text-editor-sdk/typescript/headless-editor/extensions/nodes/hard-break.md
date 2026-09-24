---
layout: post
title: Hard Break Extension in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the Hard Break extension in the TypeScript Headless Editor to insert inline line breaks (<br>) with keyboard shortcuts.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Hard Break in TypeScript Headless Editor

The `hardBreakExtension` registers the `hard_break` inline node, which inserts a semantic `<br>` line break within the current text flow without splitting the parent block.

## Register the extension

```typescript
import { HeadlessEditor, hardBreakExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [hardBreakExtension]
});
```

## Configure hard break options

The `hardBreak` extension exposes an `htmlAttributes` option that adds custom HTML attributes to rendered `<br>` elements. It defaults to an empty object. Use `.configure()` to set it:

```typescript
import { HeadlessEditor, hardBreakExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        hardBreakExtension.configure({
            htmlAttributes: { class: 'custom-break' }
        })
    ]
});
```

## Commands

| Command | Description |
|---------|--------------|
| `setHardBreak()` | Inserts a hard line break (`<br>`) at the current selection, maintaining the current paragraph or block context. |

```typescript
editor.commands.setHardBreak();
```

## Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Insert Hard Break | <kbd>Shift</kbd> + <kbd>Enter</kbd> | <kbd>Shift</kbd> + <kbd>Enter</kbd> |
