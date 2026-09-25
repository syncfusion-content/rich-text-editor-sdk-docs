---
layout: post
title: JSON Content | TypeScript Headless Editor
description: Learn the public document model used by the Syncfusion TypeScript Headless Editor, and how to load and export JSON content through DocumentRoot.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# JSON Content in TypeScript Headless Editor

The Headless Editor exchanges structured content with your application through a Syncfusion-native document tree rooted at `DocumentRoot`. The same `DocumentRoot` shape is used for loading and exporting: provide it when creating the editor, set it on a live editor, or read it back as a JSON-serializable object.

This page covers:

- [Document Structure](#document-structure) – the `DocumentRoot`, `EditorNode`, `TextNode`, and `Mark` types.
- [Loading JSON Content](#loading-json-content) – assigning a `DocumentRoot` at creation and on a live editor.
- [Exporting JSON Content](#exporting-json-content) – reading the current document and serializing it to JSON.

## Document Structure

The document model has four public types. Every node in the tree is an `EditorNode`; the root is a `DocumentRoot`; text leaves are `TextNode`; and inline formatting is carried by `Mark`.

### Type Summary

| Type | Extends | Properties |
| --- | --- | --- |
| `DocumentRoot` | `EditorNode` | `type: 'document'`, `schemaVersion: number`, plus `attrs`, `marks`, `children` |
| `EditorNode` | — | `type: string`, `attrs: Record<string, unknown>`, `marks: Mark[]`, `children: EditorNode[]` |
| `TextNode` | `EditorNode` | `text: string`, `marks: Mark[]`, `children: never[]` |
| `Mark` | — | `type: string`, `attrs: Record<string, unknown>` |

N> Node identity is position-based within the document tree; persistent node identifiers are not part of the public document model. Do not add an `id` property to JSON payloads.

### The Document Root

`DocumentRoot` is the top-level container. Its `type` is always `'document'`, and `schemaVersion` identifies the schema version associated with the document.

```ts
const doc: DocumentRoot = {
  type: 'document',
  schemaVersion: 1,
  attrs: {},
  marks: [],
  children: [
    {
      type: 'paragraph',
      attrs: {},
      marks: [],
      children: [
        { type: 'text', text: 'Hello, ', attrs: {}, marks: [] },
        { type: 'text', text: 'world', attrs: {}, marks: [{ type: 'bold', attrs: {} }] },
        { type: 'text', text: '!', attrs: {}, marks: [] }
      ]
    }
  ]
};
```

### Block and Container Nodes

`EditorNode` represents any block or container node, such as a paragraph, heading, or list item. The `type` field matches a `NodeDefinition` registered through the schema and extensions. `attrs` carries node-specific attributes (alignment, indent, and so on), and `marks` is reserved for block-level marks when the schema supports them.

```ts
{
  type: 'heading',
  attrs: { level: 1 },
  marks: [],
  children: [
    { type: 'text', text: 'Welcome', attrs: {}, marks: [] }
  ]
}
```

### Text Nodes

`TextNode` is the only leaf in the tree. It carries the `text` string and any inline `marks` (bold, italic, link, and so on). It never has child nodes.

```ts
{
  type: 'text',
  text: 'Syncfusion',
  attrs: {},
  marks: [{ type: 'bold', attrs: {} }]
}
```

### Marks

`Mark` represents inline formatting applied to a `TextNode`. Each mark has a `type` (matching a registered `MarkDefinition`) and an `attrs` object whose shape is determined by the mark's definition.

```ts
{ type: 'link', attrs: { href: 'https://www.syncfusion.com' } }
```

## Loading JSON Content

A `DocumentRoot` can be assigned to the editor in two ways: at creation through the editor configuration, or on a live editor through the document API. `setDocument()` validates the supplied document against the active schema; invalid input is rejected without mutating the editor.

### At Creation

Pass a `DocumentRoot` as the `document` property of `EditorConfig`. This is the recommended way to load a persisted document when you spin up the editor.

```ts
import { HeadlessEditor } from '@syncfusion/ej2-headless-editor';
import type { DocumentRoot } from '@syncfusion/ej2-headless-editor';

const initial: DocumentRoot = {
  type: 'document',
  schemaVersion: 1,
  attrs: {},
  marks: [],
  children: [
    { type: 'paragraph', attrs: {}, marks: [], children: [] }
  ]
};

const editor = HeadlessEditor.create({
  schema,
  extensions,
  document: initial
});
```

If `EditorConfig.document` and `EditorConfig.content` are both provided, `document` takes precedence and `content` is ignored. If neither `document` nor `content` is provided, the editor initializes with a single empty paragraph.

### From a JSON String

To load a document stored as a JSON string, parse the string into a `DocumentRoot` and assign it through the same path. The standard `JSON.parse` and `JSON.stringify` helpers are the source-supported round-trip pattern; the Headless Editor does not expose a dedicated JSON loader.

```ts
const json = '{"type":"document","schemaVersion":1,"attrs":{},"marks":[],"children":[]}';
const parsed: DocumentRoot = JSON.parse(json) as DocumentRoot;

editor.setDocument(parsed);
```

### On a Live Editor

After the editor has been created, `editor.setDocument(doc)` replaces the current document with the supplied `DocumentRoot` in a single transaction. The editor instance, view, plugins, and undo stack are preserved, and the replacement is a single undo step.

```ts
editor.setDocument({
  type: 'document',
  schemaVersion: 1,
  attrs: {},
  marks: [],
  children: [
    {
      type: 'paragraph',
      attrs: {},
      marks: [],
      children: [
        { type: 'text', text: 'Replaced via JSON', attrs: {}, marks: [] }
      ]
    }
  ]
});
```

`setDocument()` validates the supplied document against the active schema. If a node type or mark is unknown, or the body does not match the root content rule, the call returns `false`, the existing document and selection are left untouched, and a diagnostic warning is emitted. `setDocument()` returns `true` when the document is accepted and applied, and `false` when validation fails.

## Exporting JSON Content

`editor.getDocument()` returns the current document as a `DocumentRoot`. The returned tree uses the same public types that `setDocument()` accepts, so it can be inspected, persisted, or fed straight back into `setDocument()` on a future session.

```ts
const doc: DocumentRoot = editor.getDocument();

doc.children.forEach((node) => {
  console.log(node.type, node.attrs);
});
```

To persist the document as a JSON string, use the standard `JSON.stringify` helper:

```ts
const json = JSON.stringify(editor.getDocument());
```

Because `getDocument()` returns plain JSON-serializable data, you can pretty-print, transform, or diff the result with ordinary JavaScript tools before storing it.

### Round-Trip

The simplest JSON workflow is a clean round-trip through the editor:

```ts
// Export the current document as a JSON string
const json: string = JSON.stringify(editor.getDocument());

// Persist `json` to storage, send it over the network, etc.

// Later — load it back into an editor
const restored: DocumentRoot = JSON.parse(json) as DocumentRoot;
editor.setDocument(restored);
```

This pattern is safe because `getDocument()` and `setDocument()` operate on the same `DocumentRoot` shape. To clear the document, pass a `DocumentRoot` whose `children` is a single empty paragraph.