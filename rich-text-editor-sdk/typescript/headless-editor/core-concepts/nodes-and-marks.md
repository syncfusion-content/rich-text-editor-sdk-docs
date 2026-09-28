---
layout: post
title: Nodes and Marks in TypeScript Headless Editor | Syncfusion
description: Understand nodes, marks, attributes, inline vs block composition and how to read them in the TypeScript Headless Editor.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Nodes and Marks in TypeScript Headless Editor

Every part of a Headless Editor document is a node. Inline formatting on text is a mark. Together, nodes and marks are the two ingredients of the document tree.

## Node

A node is one element in the document tree. Every node has:

- a `type` — the name of the node kind (`'paragraph'`, `'heading'`, `'table'`, …),
- an `attrs` object — key/value pairs whose meaning depends on the node's type,
- a `children` array — other nodes inside this one (empty for leaves),
- a `marks` array — formatting marks applied to the node itself (used for block-level marks).

A text node has a `text` string and no `children`.

```ts
import { EditorNode, TextNode } from '@syncfusion/ej2-headless-editor';

// A block node — has children.
const heading: EditorNode = {
    type: 'heading',
    attrs: { level: 2 },
    marks: [],
    children: [
        {
            type: 'text',
            attrs: {},
            marks: [],
            text: 'Section title'
        } as TextNode
    ]
};

// A text node — has a text string, no children.
const text: TextNode = {
    type: 'text',
    attrs: {},
    marks: [],
    text: 'Hello world'
};
```

### Node types

A node's `type` decides whether it is a block, an inline node, a leaf, or a container. These categories describe the role a node plays in the tree — they are not separate classes.

- **Block nodes** appear as top-level children of the document and group other content. Examples: `paragraph`, `heading`, `blockquote`, `listItem`, `tableRow`, `tableCell`.
- **Inline nodes** live inside blocks. Examples: `text`, `hardBreak`, and inline-level extensions.
- **Leaf nodes** are nodes without children/content. Examples: `image`, `horizontalRule`.
- **Container nodes** are blocks that hold other blocks. Examples: `bulletList`, `orderedList`, `table`.

The `group` field on a node's `NodeDefinition` (`'block'`, `'inline'`, `'container'`, `'root'`, `'block list'`, `'list'`) decides which category a node belongs to. You do not need to set this directly when reading a document — the category is implied by the `type` and the position of the node in the tree.

### Node attributes

Every node has an `attrs` property. The schema decides which keys exist on a given node type and what each key's value type is. A heading has a `level` number. A link has an `href` string. A list item may have a `listType`.

```ts
{
    type: 'heading',
    attrs: { level: 2 },
    marks: [],
    children: [
        {
            type: 'text',
            attrs: {},
            marks: [],
            text: 'Section title'
        }
    ]
}
```

## Mark

A mark is inline formatting attached to text — `bold`, `italic`, `link`, and so on. Marks always live on text nodes (and on block-level nodes that support block marks). They never appear as their own nodes in the tree.

A mark has:

- a `type` — the mark's name,
- an `attrs` — mark-specific values such as an `href` for a link or a `color` for text color.

```ts
import { Mark } from '@syncfusion/ej2-headless-editor';

const link: Mark = {
    type: 'link',
    attrs: {
        href: 'https://example.com',
        target: '_blank'
    }
};
```

A text node carries its marks in the `marks` array. Adjacent text nodes can carry different marks, so a single line of text may switch between formatted and unformatted runs.


### Mark attributes

Marks have the same shape as node attributes: a `type` and an `attrs` property. The mark's `type` selects the formatting (`'bold'`, `'italic'`, `'link'`, `'underline'`, …), and the `attrs` carry the values the mark needs.

```ts
const textColor: Mark = {
    type: 'textColor',
    attrs: { color: '#ff0000' }
};

const highlight: Mark = {
    type: 'highlight',
    attrs: { color: '#fff176' }
};
```

A single text node can carry several marks at once. Marks stack in the order they appear in the `marks` array.

## Inline vs block composition

A document is composed in two layers:

- **Block layer** — the document root holds one or more block-level children. Block-level children can themselves contain other blocks when the schema allows it (for example, a `listItem` contains a `paragraph`).
- **Inline layer** — a block that accepts inline content holds text nodes and inline nodes. Text nodes carry marks.

Most blocks (paragraphs, headings) accept only inline content. A few blocks (list items, table cells, callouts) accept other blocks inside them. The schema's content rule is what determines this.

```ts
// A paragraph that mixes bold and plain text:
{
    type: 'paragraph',
    attrs: {},
    marks: [],
    children: [
        {
            type: 'text',
            attrs: {},
            marks: [{ type: 'bold', attrs: {} }],
            text: 'Bold '
        },
        {
            type: 'text',
            attrs: {},
            marks: [],
            text: 'and plain text.'
        }
    ]
}
```