---
layout: post
title: To Lower Case in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the To Lower Case extension in the TypeScript Headless Editor, including the toLowerCase command, configuration, and usage examples.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# To Lower Case in TypeScript Headless Editor

The `toLowerCaseExtension` registers the `toLowerCase` command, which transforms the literal text characters in the current selection to lowercase. The command is contribution-only; it adds no schema marks, no DOM rendering, and no keyboard shortcut.

## Register the extension

```typescript
import { HeadlessEditor, toLowerCaseExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [toLowerCaseExtension]
});
```

## Configure the extension

The `toLowerCase` extension exposes an `htmlAttributes` option that adds custom HTML attributes to the surrounding container. Use `.configure()` to set it:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `htmlAttributes` | `Record<string, string>` | `{}` | Custom HTML attributes applied to the surrounding container. |

```typescript
import { HeadlessEditor, toLowerCaseExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        toLowerCaseExtension.configure({
            htmlAttributes: { class: 'my-custom-class' }
        })
    ]
});
```

## Commands

| Command | Description |
|---------|-------------|
| `toLowerCase()` | Converts the literal text characters of the current selection to lowercase. |

```typescript
// Convert the current selection to lowercase
editor.commands.toLowerCase();
```

## Example

The command transforms the literal characters in the document. It does **not** add a CSS `text-transform` style; use a CSS mark for that behavior.

```text
Before: HELLO WORLD
After:  hello world
```