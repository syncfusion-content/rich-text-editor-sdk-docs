---
layout: post
title: Subscript Mark in Vue Headless Editor | Syncfusion
description: Learn how to configure the Subscript mark in the Vue Headless Editor, including attributes, commands, keyboard shortcuts, and input rules.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Subscript Mark in Vue Headless Editor

The `subscriptExtension` registers the `subscript` mark, which applies subscript formatting to text and renders the content as a `<sub>` element. It contributes the `toggleSubscript` command, a keyboard shortcut for toggling subscript, and input rules that convert `,,text,,` into subscript as the user types.

## Register the extension

```ts
import { HeadlessEditor, subscriptExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [subscriptExtension]
});

editor.mount(document.getElementById('editor') as HTMLElement);
```

## Configure the extension

The `subscript` extension exposes an `htmlAttributes` option that adds custom HTML attributes to every rendered `<sub>` element. Use `.configure()` to set it:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `htmlAttributes` | `Record<string, string>` | `{}` | Custom HTML attributes applied to the rendered `<sub>` element. |

```ts
subscriptExtension.configure({
    htmlAttributes: { class: 'my-custom-class' }
});
```

## Commands

| Command | Description |
|---------|-------------|
| `toggleSubscript()` | Toggles subscript formatting on the current selection. |

```ts
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
