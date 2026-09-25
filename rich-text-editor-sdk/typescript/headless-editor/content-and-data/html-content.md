---
layout: post
title: HTML Content | Syncfusion TypeScript Headless Editor
description: Learn how the Syncfusion TypeScript Headless Editor loads and exports HTML through the schema-driven parsing and serialization pipeline.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# HTML Content in TypeScript Headless Editor

The Headless Editor loads HTML through a schema-driven parsing pipeline and exports HTML through a schema-driven serialization pipeline. Both directions are governed by the schema and the extensions registered with the editor, not by a fixed public allow-list of HTML tags.

This page covers:

- [Loading HTML Content](#loading-html-content) – assigning HTML at creation and on a live editor.
- [Exporting HTML Content](#exporting-html-content) – reading the current document as an HTML string.

## Loading HTML Content

HTML can be assigned to the editor at two points: when the editor is created, through `EditorConfig.content`; and on a mounted editor, through `editor.setContent(html)`. Both entry points go through the same schema-driven parsing pipeline.

### At Creation

Pass an HTML string as the `content` property of `EditorConfig` to seed the editor with HTML on first mount:

```ts
import { HeadlessEditor } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
  content: '<h1>Welcome</h1><p>Start typing...</p>'
});
```

If both `EditorConfig.document` (JSON) and `EditorConfig.content` (HTML) are provided, `document` takes precedence and `content` is ignored.

N> `EditorConfig.content` is read once at creation. To replace the content of a live editor, use `editor.setContent(html)` instead — it swaps the document in a single transaction and preserves the editor instance, plugins, and undo history.

### On a Live Editor

On a mounted editor, `editor.setContent(html)` replaces the current document with the parsed HTML in a single transaction. Pass an empty or whitespace-only string to reset the document to a single empty paragraph:

```ts
// Replace the document with HTML
editor.setContent('<h1>New Title</h1><p>Fresh content.</p>');

// Reset the document to a single empty paragraph
editor.setContent('');
```

`setContent()` returns `true` when the HTML is parsed and dispatched, and `false` when parsing fails. On failure, the existing document and selection are left untouched, no events fire, and a diagnostic warning is emitted.

### Schema-driven Parsing

Both `EditorConfig.content` and `editor.setContent(html)` parse HTML through the same pipeline: the registered ProseMirror schema, with every `parseDOM` rule contributed by the loaded extensions, is used to convert the HTML into the editor's document tree.

This means which HTML elements are recognized depends on the schema and extensions you register. There is no public, fixed allow-list or deny-list of HTML tags — tags that no extension recognizes are simply not part of the document model.

N> HTML loading is not run through the clipboard sanitizer. The clipboard sanitizer is handled separately by the clipboard pipeline and does not apply to `setContent()` or `EditorConfig.content`.

The HTML recognized during loading depends on the schema and extensions registered with the editor.

## Exporting HTML Content

The Headless Editor exposes a single HTML export method on a mounted editor.

### Getting HTML

`editor.getHtml()` returns the current document serialized as an HTML string:

```ts
const html: string = editor.getHtml();
console.log(html); // "<p>Hello <strong>world</strong></p>"
```

If an error occurs during serialization, `getHtml()` returns an empty string instead of throwing.

### Schema-driven Serialization

Serialization is driven by the same schema and extensions that govern parsing. Each registered extension contributes a `toDOM` specification that defines how its node and mark types are rendered to HTML. The string returned by `getHtml()` therefore reflects the extensions you have loaded — adding an extension can change the HTML output for its node types.

The HTML returned by `getHtml()` is serialized according to the same schema and extensions used when loading HTML content.