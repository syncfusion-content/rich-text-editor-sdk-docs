---
layout: post
title: Underline Mark in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the Underline mark in the TypeScript Headless Editor, including attributes, commands, keyboard shortcuts, and input rules.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Underline Mark in TypeScript Headless Editor

The `underlineExtension` registers the `underline` mark, which applies underline formatting to text and renders the content as a `<u>` element. It contributes the `toggleUnderline` command, a keyboard shortcut for toggling underline, and input rules that convert `++text++` into underline as the user types.

## Register the extension

```typescript
import { HeadlessEditor, underlineExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [underlineExtension]
});
```

## Configure the extension

The `underline` extension exposes an `htmlAttributes` option that adds custom HTML attributes to every rendered `<u>` element. Use `.configure()` to set it:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `htmlAttributes` | `Record<string, string>` | `{}` | Custom HTML attributes applied to the rendered `<u>` element. |

```typescript
import { HeadlessEditor, underlineExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        underlineExtension.configure({
            htmlAttributes: { class: 'my-custom-class' }
        })
    ]
});
```

## Commands

| Command | Description |
|---------|-------------|
| `toggleUnderline()` | Toggles underline formatting on the current selection. |

```typescript
editor.commands.toggleUnderline();
```

## Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Toggle Underline | <kbd>Ctrl</kbd> + <kbd>U</kbd> | <kbd>⌘</kbd> + <kbd>U</kbd> |

## Input rules

The Underline mark supports `++text++` syntax for inline conversion.

```text
Type:    ++draft++
Result:  <u>draft</u>
```