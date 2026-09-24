---
layout: post
title: Block Quote Extension in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the Block Quote extension in the TypeScript Headless Editor, including commands, shortcuts, and markdown input rules.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Block Quote in TypeScript Headless Editor

The `blockquoteExtension` registers the `blockquote` block container node, which renders quoted content inside a semantic `<blockquote>` tag.

## Register the extension

```typescript
import { HeadlessEditor, blockquoteExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [blockquoteExtension]
});
```

## Configure block quote options

The `blockquote` extension exposes an `htmlAttributes` option that adds custom HTML attributes to the rendered `<blockquote>` element. It defaults to an empty object. Use `.configure()` to set it:

```typescript
import { HeadlessEditor, blockquoteExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        blockquoteExtension.configure({
            htmlAttributes: { class: 'custom-quote' }
        })
    ]
});
```

## Commands

| Command | Description |
|---------|--------------|
| `toggleBlockQuote()` | Toggles the block quote wrapper on the current block or selection. If the selection is already inside a block quote, it unwraps the content back to regular blocks. |

```typescript
editor.commands.toggleBlockQuote();
```

## Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Toggle Block Quote | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Q</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>Q</kbd> |

## Input rules

Type `>` followed by a space at the start of an empty line to wrap the current block in a block quote.
