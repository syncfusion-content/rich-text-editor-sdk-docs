---
layout: post
title: To Lower Case in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the To Lower Case extension in the TypeScript Headless Editor, including the toLowerCase command and usage examples.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# To Lower Case in TypeScript Headless Editor

The `toLowerCaseExtension` registers the `toLowerCase` command, which transforms the literal text characters in the current selection to lowercase.

## Register the extension

```html
<div id="editor"></div>
```

```ts
import { HeadlessEditor, toLowerCaseExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [toLowerCaseExtension]
});

editor.mount(document.getElementById('editor') as HTMLElement);
```

## Commands

| Command | Description |
|---------|-------------|
| `toLowerCase()` | Converts the literal text characters of the current selection to lowercase. |

```ts
// Convert the current selection to lowercase
editor.commands.toLowerCase();
```
