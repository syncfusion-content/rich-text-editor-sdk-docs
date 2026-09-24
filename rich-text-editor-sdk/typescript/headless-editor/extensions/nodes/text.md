---
layout: post
title: Text Extension in TypeScript Headless Editor | Syncfusion
description: Learn about the Text extension in the TypeScript Headless Editor, which registers the inline text node used inside block content.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Text in TypeScript Headless Editor

The `textExtension` registers the inline `text` node used to represent plain textual content. The `text` node is used inside block nodes such as paragraphs, headings, and blockquotes, and is a mandatory part of the editor schema.

## Register the extension

The `text` extension has no configurable options. Add it to the `extensions` array when initializing the editor.

```typescript
import { HeadlessEditor, documentExtension, paragraphExtension, textExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [documentExtension, paragraphExtension, textExtension]
});
```

Marks such as bold, italic, or links are applied on top of `text` nodes. Refer to the [Marks](../marks) concept page for more details on how marks attach to text.

I> Every editor instance requires the `text` node. Omitting it results in an invalid schema. The Headless Editor automatically adds the required `text` extension if they are not registered.
