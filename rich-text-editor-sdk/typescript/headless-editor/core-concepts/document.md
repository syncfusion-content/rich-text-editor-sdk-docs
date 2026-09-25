---
layout: post
title: Document in TypeScript Headless Editor | Syncfusion
description: Understand the document tree in the TypeScript Headless Editor, including blocks, inline content, marks, and schemaVersion.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Document in TypeScript Headless Editor

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

## Document identity

The document root has below fields:

| Field | Purpose |
|-------|---------|
| `type` | Always `'document'`. |
| `schemaVersion` | Version of the schema the document was authored against. |
| `attrs` | Reserved for future root-level attributes. Typically empty. |
| `children` | The top-level block nodes. |

```ts
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

Blocks are the top-level children of the document root. A text node is always inside a block — it never appears directly under the document root.

```ts
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

This means a document saved as JSON today can be loaded back tomorrow and produce the same tree — assuming the schema is unchanged.