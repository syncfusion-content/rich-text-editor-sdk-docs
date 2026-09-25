---
layout: post
title: To Upper Case in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the To Upper Case extension in the TypeScript Headless Editor, including the toUpperCase command and usage examples.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# To Upper Case in TypeScript Headless Editor

The `toUpperCaseExtension` registers the `toUpperCase` command, which transforms the literal text characters in the current selection to UPPERCASE.

## Register the extension

```typescript
import { HeadlessEditor, toUpperCaseExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [toUpperCaseExtension]
});
```

## Commands

| Command | Description |
|---------|-------------|
| `toUpperCase()` | Converts the literal text characters of the current selection to UPPERCASE. |

```typescript
// Convert the current selection to uppercase
editor.commands.toUpperCase();
```
