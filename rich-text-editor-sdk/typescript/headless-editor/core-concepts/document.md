---
layout: post
title: Document in TypeScript Headless Editor | Syncfusion
description: Understand the document tree in the TypeScript Headless Editor, including blocks, inline content, marks, and schemaVersion.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Document

A Headless Editor document is a tree of nodes. The root is always a single `document` node. Inside the root are blocks (paragraphs, headings, lists, tables, images, code blocks). Inside each block is inline content — text and inline nodes — and the text can carry inline formatting marks.

```
document
└── paragraph
│   └── text "Hello "
│   │   └── marks: [bold]
│   └── text "world"
└── heading (level: 1)
│   └── text "Welcome"
└── bulletList
    └── listItem
        └── paragraph
            └── text "First item"
```

Every block and every inline node has a `type` and an `attrs` bag. Marks live on text and add inline formatting. A block has `children`. A text node has a `text` string and no `children`.

## Document identity

The document root has five stable fields:

| Field | Purpose |
|-------|---------|
| `type` | Always `'document'`. |
| `schemaVersion` | Version of the schema the document was authored against. |
| `attrs` | Reserved for future root-level attributes. Typically empty. |
| `children` | The top-level block nodes. |
| `marks` | Reserved for future root-level marks. Typically empty. |

`schemaVersion` lets the editor recognize content authored with an older schema and run any registered migration before rendering.

```typescript
import { DocumentRoot } from '@syncfusion/ej2-headless-editor';

const document: DocumentRoot = {
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
                {
                    type: 'text',
                    attrs: {},
                    marks: [],
                    text: 'Hello world'
                }
            ]
        }
    ]
};
```

## What lives in the document

A document contains two layers of content:

- **Block-level nodes** — paragraphs, headings, blockquotes, code blocks, lists, list items, tables, table rows, table cells, images, horizontal rules, and any custom block types you add through extensions.
- **Inline content** — text, marks, and inline nodes such as images. Inline content lives inside block-level nodes.

Blocks are the top-level children of the document root. The root always contains one or more blocks. A text node is always inside a block — it never appears directly under the document root.

```typescript
{
    type: 'paragraph',
    attrs: { align: 'left', indent: 0 },
    marks: [],
    children: [
        {
            type: 'text',
            attrs: {},
            marks: [
                { type: 'bold', attrs: {} }
            ],
            text: 'Bold text'
        },
        {
            type: 'text',
            attrs: {},
            marks: [],
            text: ' followed by plain text.'
        }
    ]
}
```

## Stable shape across sessions

The schema defines which node types and which mark types are valid in the document. As long as the editor is configured with the same schema, the document you read out of it has the same shape as the document you wrote in.

This means a document saved as JSON today can be loaded back tomorrow and produce the same tree — assuming the schema is unchanged. If the schema does change, `schemaVersion` and the migration pipeline take care of upgrading older documents to the new shape.

## Reading, writing, and replacing the document

Methods that read or write the document — such as retrieving it as JSON, exporting it as HTML, replacing it from HTML or from a structured object, and reading its plain text — all live in the **Content and Data** section. See that section for `getDocument`, `getHtml`, `getText`, `setContent`, `setDocument`, and related operations.

## What's next

Now that you know what the document looks like, learn what the building blocks are:

- **Nodes and Marks** — the atoms the tree is built from.
- **Schema** — the rules that decide which nodes and marks are valid.