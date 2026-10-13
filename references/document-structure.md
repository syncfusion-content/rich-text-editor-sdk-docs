# Document Structure & Content Model

> **See also:** [api-references.md](api-references.md) for the full type definitions of `DocumentRoot`, `EditorNode`, `TextNode`, `EditorState`, `Position`, `Mark`, and `Selection`. [api-references-part-2.md](api-references-part-2.md) covers the schema building blocks: `NodeDefinition`, `MarkDefinition`, `AttributeDefinition`, `NodeGroup`, and `NodeContent` (content expressions).

## Table of Contents
- [Document Tree Architecture](#document-tree-architecture)
- [Document Root Identity](#document-root-identity)
- [Content Layers](#content-layers)
- [Block-Level Nodes](#block-level-nodes)
- [Inline Content](#inline-content)
- [Marks System](#marks-system)
- [Schema Stability](#schema-stability)
- [Document Examples](#document-examples)

## Document Tree Architecture

A Headless Editor document is a tree of nodes. The root is always a single `document` node. Inside the root are blocks such as paragraphs, headings, lists, tables, images, and code blocks. Each block can contain inline content, including text and inline nodes, and text can carry inline formatting marks.

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
        └─�� paragraph
            └── text "First item"
```

---

## Document Root Identity

The document root has the following fields:

| Field | Type | Purpose |
|-------|------|---------|
| `type` | string | Always `'document'`. |
| `schemaVersion` | number | Version of the schema the document was authored against. |
| `attrs` | object | Reserved for future root-level attributes. Typically empty. |
| `marks` | array | Root-level marks. |
| `children` | array | The top-level block nodes. |

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

The `type` is always the string `'document'`, and `schemaVersion` identifies the schema version associated with the document.

---

## Content Layers

A document contains two layers of content:

- **Block-level nodes** paragraphs, headings, blockquotes, code blocks, lists, list items, tables, table rows, table cells, images, horizontal rules, and any custom block types you add through extensions.
- **Inline content** text, marks, and inline nodes such as images. Inline content lives inside block-level nodes.

Blocks are the top-level children of the document root. A text node is always inside a block and never appears directly under the document root.

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

---

## Block-Level Nodes

A node's `type` decides whether it is a block, an inline node, a leaf, or a container. These categories describe the role a node plays in the tree and are not separate classes.

- **Block nodes** appear as top-level children of the document and group other content. Examples: `paragraph`, `heading`, `blockquote`, `listItem`, `tableRow`, `tableCell`.
- **Inline nodes** live inside blocks. Examples: `text`, `hardBreak`, and inline-level extensions.
- **Leaf nodes** are nodes without children/content. Examples: `image`, `horizontalRule`.
- **Container nodes** are blocks that hold other blocks. Examples: `bulletList`, `orderedList`, `table`.

The `group` field on a node's `NodeDefinition` (`'block'`, `'inline'`, `'container'`, `'root'`, `'block list'`, `'list'`) decides which category a node belongs to. You do not need to set this directly when reading a document, because the category is implied by the `type` and the position of the node in the tree.

### Common Block Structure

All block nodes share this basic shape:

```ts
{
    type: 'paragraph',           // Node type identifier
    attrs: {},                   // Node-specific attributes
    marks: [],                   // Marks applied to the block
    children: [...]              // Child content (text, inline nodes, or nested blocks)
}
```

### Block Node Types

| Type | Role |
|------|------|
| `paragraph` | Block — basic text container |
| `heading` | Block — title (level 1-6) |
| `blockquote` | Block — quoted content |
| `codeBlock` | Block — monospace code |
| `bulletList` | Container — unordered list |
| `orderedList` | Container — numbered list |
| `taskList` | Container — checklist |
| `listItem` | Block — list entry |
| `table` | Container — data grid |
| `tableRow` | Block — row in table |
| `tableCell` | Block — cell in row |
| `callout` | Block — highlighted info box |
| `collapsible` | Block — expandable content |
| `image` | Leaf — embedded image |
| `horizontalRule` | Leaf — visual separator |
| `hardBreak` | Inline — line break within a paragraph |

---

## Inline Content

Inline content lives inside block nodes and represents the actual content and formatting.

### Text Nodes

Every part of a Headless Editor document is a node. A text node has a `text` string and no `children`.

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

### Example with Marks

```ts
{
    type: 'text',
    attrs: {},
    marks: [
        { type: 'bold', attrs: {} },
        { type: 'italic', attrs: {} }
    ],
    text: 'Bold and italic text'
}
```

### Inline Nodes

Special inline elements that are not simple text:

```ts
{
    type: 'hardBreak',
    attrs: {},
    marks: []
}
```

Inline nodes include `hardBreak` (line break within a paragraph), and custom inline nodes from extensions.

### Inline vs Block Composition

A document is composed in two layers:

- **Block layer**: the document root holds one or more block-level children. Block-level children can themselves contain other blocks when the schema allows it (for example, a `listItem` contains a `paragraph`).
- **Inline layer**: a block that accepts inline content holds text nodes and inline nodes. Text nodes carry marks.

Most blocks (paragraphs, headings) accept only inline content. A few blocks (list items, table cells, callouts) accept other blocks inside them. The schema's content rule is what determines this.

---

## Marks System

A mark is inline formatting attached to text — `bold`, `italic`, `link`, and so on. Marks always live on text nodes (and on block-level nodes that support block marks). They never appear as their own nodes in the tree.

A mark has:

- `type`: The mark's name.
- `attrs`: Mark-specific values such as an `href` for a link or a `color` for text color.

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

### Mark Attributes

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

### Common Built-in Marks

The following marks are available through the built-in extensions in `basicExtensions` and the individual mark extensions. Some require their own extension to be registered (see [Extensions & Plugin System](./extensions-guide.md)):

| Mark | Purpose | Attributes |
|------|---------|------------|
| `bold` | Bold text | None |
| `italic` | Italic text | None |
| `underline` | Underlined text | None |
| `strikethrough` | Strikethrough text | None |
| `inlineCode` | Monospace text | None |
| `link` | Hyperlink | `href`, `title`, `target`, `rel` |
| `textColor` | Text color | `color` |
| `backgroundColor` | Background color | `color` |
| `fontSize` | Font size | `size` |
| `fontFamily` | Font family | `family` |
| `subscript` | Subscript text | None |
| `superscript` | Superscript text | None |
| `upperCase` | UPPERCASE text | None |
| `lowerCase` | lowercase text | None |

### Multiple Marks on Text

A single text node can have multiple marks:

```ts
{
    type: 'text',
    attrs: {},
    marks: [
        { type: 'bold', attrs: {} },
        { type: 'textColor', attrs: { color: '#ff0000' } },
        { type: 'link', attrs: { href: '/docs' } }
    ],
    text: 'Red bold link'
}
```

---

## Schema Stability

The schema defines which node types and which mark types are valid in the document. As long as the editor is configured with the same schema, the document you read out of it has the same shape as the document you wrote in.

This means a document saved as JSON today can be loaded back tomorrow and produce the same tree assuming the schema is unchanged.

```ts
// Save document as JSON
const savedDoc = editor.getDocument();
console.log(JSON.stringify(savedDoc, null, 2));

// Later, in a new session with same schema
const restoredEditor = HeadlessEditor.create({
    extensions: [basicExtensions],
    document: savedDoc
});

// Document structure is identical
console.log(JSON.stringify(restoredEditor.getDocument()) === JSON.stringify(savedDoc));
```

The `schemaVersion` field in the document root tracks which version of the schema created the document.

---

## Document Examples

### Simple Paragraph

```ts
const doc: DocumentRoot = {
    type: 'document',
    schemaVersion: 1,
    attrs: {},
    marks: [],
    children: [
        {
            type: 'paragraph',
            attrs: { align: 'left', indent: 0 },
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

### Formatted Text (Mixing Bold and Plain)

```ts
{
    type: 'paragraph',
    attrs: { align: 'left', indent: 0 },
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

### Heading with Text

```ts
{
    type: 'heading',
    attrs: { level: 1 },
    marks: [],
    children: [
        {
            type: 'text',
            attrs: {},
            marks: [],
            text: 'Welcome to the Editor'
        }
    ]
}
```

### Link

```ts
{
    type: 'paragraph',
    attrs: {},
    marks: [],
    children: [
        {
            type: 'text',
            attrs: {},
            marks: [
                {
                    type: 'link',
                    attrs: {
                        href: 'https://example.com',
                        target: '_blank'
                    }
                }
            ],
            text: 'Click here'
        }
    ]
}
```

### Bullet List

```ts
{
    type: 'bulletList',
    attrs: {},
    marks: [],
    children: [
        {
            type: 'listItem',
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
                            text: 'First item'
                        }
                    ]
                }
            ]
        },
        {
            type: 'listItem',
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
                            text: 'Second item'
                        }
                    ]
                }
            ]
        }
    ]
}
```
