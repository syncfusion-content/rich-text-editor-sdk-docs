---
layout: post
title: Inline Code Mark in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the Inline Code mark in the TypeScript Headless Editor, including attributes, commands, keyboard shortcuts, and Markdown input rules.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Inline Code Mark in TypeScript Headless Editor

The `inlineCodeExtension` registers the `code` mark, which applies inline code formatting to text and renders the content as a `<code>` element. It contributes the `toggleCodeMark` command, a keyboard shortcut for toggling inline code, and Markdown-style input rules that convert `` `text` `` into inline code as the user types.

## Register the extension

```html
<div id="editor"></div>
```

```typescript
import { HeadlessEditor, inlineCodeExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [inlineCodeExtension]
});

editor.mount(document.getElementById('editor') as HTMLElement);
```

## Configure the extension

The `inlineCode` extension exposes an `htmlAttributes` option that adds custom HTML attributes to every rendered `<code>` element. Use `.configure()` to set it:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `htmlAttributes` | `Record<string, string>` | `{}` | Custom HTML attributes applied to the rendered `<code>` element. |

```html
<div id="editor"></div>
```

```typescript
import { HeadlessEditor, inlineCodeExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        inlineCodeExtension.configure({
            htmlAttributes: { class: 'my-custom-class' }
        })
    ]
});

editor.mount(document.getElementById('editor') as HTMLElement);
```

## Commands

| Command | Description |
|---------|-------------|
| `toggleCodeMark()` | Toggles inline code formatting on the current selection. |

```typescript
editor.commands.toggleCodeMark();
```

## Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Toggle Inline Code | <kbd>Ctrl</kbd> + <kbd>`</kbd> | <kbd>⌘</kbd> + <kbd>`</kbd> |

## Markdown input rules

The Inline Code mark supports Markdown-style input rules using `` `text` `` syntax.

```text
Type:    `let x = 10;`
Result:  <code>let x = 10;</code>
```