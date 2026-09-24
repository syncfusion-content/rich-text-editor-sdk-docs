---
layout: post
title: Bold Mark in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the Bold mark in the TypeScript Headless Editor, including attributes, commands, keyboard shortcuts, and Markdown input rules.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Bold Mark in TypeScript Headless Editor

The `boldExtension` registers the `bold` mark, which applies semantic bold formatting to text and renders the content as a `<strong>` element. It contributes the `toggleBold` command, a keyboard shortcut for toggling bold, and Markdown-style input rules that convert `**text**` or `__text__` into bold as the user types.

## Register the extension

```typescript
import { HeadlessEditor, boldExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [boldExtension]
});
```

## Configure the extension

The `bold` extension exposes an `htmlAttributes` option that adds custom HTML attributes to every rendered `<strong>` element. Use `.configure()` to set it:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `htmlAttributes` | `Record<string, string>` | `{}` | Custom HTML attributes applied to the rendered `<strong>` element. |

```typescript
import { HeadlessEditor, boldExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        boldExtension.configure({
            htmlAttributes: { class: 'my-custom-class' }
        })
    ]
});
```

## Commands

| Command | Description |
|---------|-------------|
| `toggleBold()` | Toggles bold formatting on the current selection. |

```typescript
editor.commands.toggleBold();
```

## Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Toggle Bold | <kbd>Ctrl</kbd> + <kbd>B</kbd> | <kbd>⌘</kbd> + <kbd>B</kbd> |

## Markdown input rules

The Bold mark supports Markdown-style input rules using `**text**` or `__text__` syntax.

```text
Type:    **important**
Result:  <strong>important</strong>
```