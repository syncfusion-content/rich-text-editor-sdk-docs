---
layout: post
title: Working with Content | Syncfusion TypeScript Headless Editor
description: Learn how to get, set, and update content in the Syncfusion TypeScript Headless Editor using the public content APIs and built-in commands.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Working with Content in TypeScript Headless Editor

After a Headless Editor instance is mounted, you can read the current content in different shapes, assign new content through `setContent` or `setDocument`, and modify the document in place through typed commands such as `insertText`, `replaceText`, and `insertNode`.

This page covers the three common content operations:

- [Get Content](#get-content) – read the current document, HTML, text, or selection.
- [Set Content](#set-content) – assign HTML or a structured document; also used to clear the document.
- [Update Content](#update-content) – apply in-place changes through typed commands.

N> The examples below assume an editor instance created with `HeadlessEditor.create({ schema, extensions })` and mounted to a DOM container. Replace `editor` with the initialized editor instance in your application.

## Get Content

The Headless Editor provides four read APIs, each returning a different representation of the current content. None of them dispatch a transaction, so calling them from a `contentChanged` listener is safe.

| API | Returns | When to use |
| --- | --- | --- |
| `getDocument()` | `DocumentRoot` | Persist or diff the editor state as a Syncfusion-native JSON tree. |
| `getHtml()` | `string` | Export the schema-driven HTML serialization. |
| `getText()` | `string` | Read plain text with all formatting stripped. |
| `getSelectionText()` | `string` | Read only the text inside the current selection. |

`getDocument()` throws if the editor has been destroyed through `destroy()`. The other accessors return an empty string on error so that read paths never throw.

Read the structured document. The returned `DocumentRoot` exposes the document tree through its `children` array:

```ts
const doc = editor.getDocument();
console.log(doc.type); // 'document'
doc.children.forEach((node) => console.log(node.type));
```

Serialize the document to HTML:

```ts
const html = editor.getHtml();
console.log(html); // "<p>Hello <strong>world</strong></p>"
```

Read the plain text of the whole document:

```ts
const text = editor.getText();
console.log(text); // "Hello world"
```

Read only the currently selected text. Returns an empty string when the selection is collapsed to a caret:

```ts
const selected = editor.getSelectionText();
if (selected) {
  console.log(`User selected: ${selected}`);
}
```

## Set Content

Use `setContent()` or `setDocument()` to assign new content to a mounted editor. Both APIs swap the document body in a single transaction through the same schema-driven parser used at create-time, so the editor instance, view, plugins, and undo stack are preserved. The replacement is a single undo step, and the selection is reset to the start of the new document.

Both APIs are all-or-nothing:

- If the input parses successfully, `contentChanged` and `documentChanged` (with `action: 'Replaced'`) fire once.
- If parsing fails, a diagnostic warning is emitted, the existing document and selection are left untouched, no events fire, and the method returns `false`.

### Assign HTML with `setContent`

`setContent()` accepts an HTML string. Pass an empty or whitespace-only string to clear the document to a single empty paragraph:

```ts
// Replace the document with HTML
editor.setContent('<h1>New Title</h1><p>Fresh content.</p>');

// Clear the document to a single empty paragraph
editor.setContent('');
```

N> Use `setContent('')` to clear the editor in one transaction instead of dispatching multiple delete commands. This keeps undo/redo intact and fires `contentChanged` once.

### Assign a Structured Document with `setDocument`

`setDocument()` accepts a `DocumentRoot`, which is the same shape that `getDocument()` returns. Use it when you have a structured document round-tripped from the editor or persisted from an external store.

The `DocumentRoot` payload has these properties:

| Property | Type | Description |
| --- | --- | --- |
| `type` | `'document'` | Always `'document'` for the root. |
| `attrs` | `Record<string, unknown>` | Root-level attributes. |
| `marks` | `Mark[]` | Root-level marks. |
| `children` | `EditorNode[]` | Top-level block children. |
| `schemaVersion` | `number` | Schema version associated with the document. |

```ts
editor.setDocument({
  type: 'document',
  attrs: {},
  marks: [],
  schemaVersion: 1,
  children: [
    { type: 'paragraph', attrs: {}, marks: [], children: [] }
  ]
});
```

The `setDocument()` payload is validated against the active schema; unknown node types or marks are rejected without mutating the document.

## Update Content

In-place changes are dispatched through typed commands on the command facade. The Headless Editor ships with three commands dedicated to content updates:

- `insertText` – insert plain text at the current selection or at an explicit offset.
- `replaceText` – replace the text in an offset-based range.
- `insertNode` – insert a structured `EditorNode` into a parent at a given index.

All three commands execute in a single transaction, participate in undo/redo, and honor the active selection snapshot.

### Insert Text

`insertText` accepts a `text` payload and inserts it at the current selection. `offset` values use ProseMirror document positions. They refer to positions in the document tree rather than character indexes within an individual text node. Pass an `at` payload to target a specific offset instead:

```ts
// Insert at the current selection
editor.commands.insertText({ text: 'Hello world' });

// Insert at a specific offset
editor.commands.insertText({ text: 'Hello world', at: { offset: 0 } });
```

The command is a no-op when `text` is empty.

### Replace Text in a Range

`replaceText` replaces the plain text between two offsets. Use it to update a segment of an existing paragraph or block without rebuilding the surrounding structure:

```ts
editor.commands.replaceText({
  from: { offset: 0 },
  to:   { offset: 11 },
  text: 'Updated text'
});
```

If `from.offset` is greater than or equal to `to.offset`, the command silently no-ops and the document is left untouched.

### Insert a Node

`insertNode` inserts a structured `EditorNode` into a parent at a given index. The parent is identified by its PM position (`parentPos`), the `index` is the zero-based insertion position within the parent's children, and `node` is the `EditorNode` to insert:

```ts
editor.commands.insertNode({
  parentPos: 0,
  index: 1,
  node: {
    type: 'paragraph',
    attrs: {},
    marks: [],
    children: []
  }
});
```

The command rejects payloads with a missing parent, a negative `index`, or an out-of-bounds `index`.