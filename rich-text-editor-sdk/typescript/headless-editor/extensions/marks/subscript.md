---
layout: post
title: Subscript Mark in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the Subscript mark in the TypeScript Headless Editor, including attributes, commands, keyboard shortcuts, and input rules.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Subscript Mark in TypeScript Headless Editor

The `subscriptExtension` registers the `subscript` mark, which applies subscript formatting to text and renders the content as a `<sub>` element. It contributes the `toggleSubscript` command, a keyboard shortcut for toggling subscript, and input rules that convert `,,text,,` into subscript as the user types.

## Register the extension

```typescript
import { HeadlessEditor, subscriptExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [subscriptExtension]
});
```

## Configure the extension

The `subscript` extension exposes an `htmlAttributes` option that adds custom HTML attributes to every rendered `<sub>` element. Use `.configure()` to set it:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `htmlAttributes` | `Record<string, string>` | `{}` | Custom HTML attributes applied to the rendered `<sub>` element. |

```typescript
import { HeadlessEditor, subscriptExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        subscriptExtension.configure({
            htmlAttributes: { class: 'my-custom-class' }
        })
    ]
});
```

## Commands

| Command | Description |
|---------|-------------|
| `toggleSubscript()` | Toggles subscript formatting on the current selection. |

```typescript
editor.commands.toggleSubscript();
```

## Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Toggle Subscript | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>,</kbd> | <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>,</kbd> |

## Input rules

The Subscript mark supports `,,text,,` syntax for inline conversion.

```text
Type:    ,,2,,
Result:  <sub>2</sub>
```