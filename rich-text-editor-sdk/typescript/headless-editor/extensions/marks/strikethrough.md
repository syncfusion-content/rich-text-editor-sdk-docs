---
layout: post
title: Strikethrough Mark in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the Strikethrough mark in the TypeScript Headless Editor, including attributes, commands, keyboard shortcuts, and Markdown input rules.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Strikethrough Mark in TypeScript Headless Editor

The `strikethroughExtension` registers the `strikethrough` mark, which applies strikethrough formatting to text and renders the content as an `<s>` element. It contributes the `toggleStrikethrough` command, a keyboard shortcut for toggling strikethrough, and Markdown-style input rules that convert `~~text~~` into strikethrough as the user types.

## Register the extension

```typescript
import { HeadlessEditor, strikethroughExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [strikethroughExtension]
});
```

## Configure the extension

The `strikethrough` extension exposes an `htmlAttributes` option that adds custom HTML attributes to every rendered `<s>` element. Use `.configure()` to set it:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `htmlAttributes` | `Record<string, string>` | `{}` | Custom HTML attributes applied to the rendered `<s>` element. |

```typescript
import { HeadlessEditor, strikethroughExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        strikethroughExtension.configure({
            htmlAttributes: { class: 'my-custom-class' }
        })
    ]
});
```

## Commands

| Command | Description |
|---------|-------------|
| `toggleStrikethrough()` | Toggles strikethrough formatting on the current selection. |

```typescript
editor.commands.toggleStrikethrough();
```

## Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Toggle Strikethrough | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>X</kbd> |

## Markdown input rules

The Strikethrough mark supports Markdown-style input rules using `~~text~~` syntax.

```text
Type:    ~~deprecated~~
Result:  <s>deprecated</s>
```