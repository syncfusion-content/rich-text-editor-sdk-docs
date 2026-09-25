---
layout: post
title: Schema in TypeScript Headless Editor | Syncfusion
description: Understand the Headless Editor schema — NodeDefinition, MarkDefinition, and AttributeDefinition — and how extensions contribute to it.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Schema in TypeScript Headless Editor

The schema is the contract that decides which nodes and which marks the editor accepts. Every node and every mark in a document must be declared in the schema. If a node type or mark type is missing, the editor cannot create it, parse it from HTML, or apply it through a command.

## What is a schema?

A schema answers three questions for every node and every mark the editor knows about:

1. What is its `type` (or `name`)?
2. What attributes does it carry, and what types are those attributes?
3. What content may appear inside it?

The schema is the source of truth for the document's shape. As long as the editor is configured with the same schema, documents authored with it can be loaded back unchanged.

## Where the schema comes from?

In Headless Editor, the schema is not something you hand-author as a single object. It is built automatically from the extensions you pass to `HeadlessEditor.create()`. Each extension contributes one or more `NodeDefinition`, `MarkDefinition`, or `AttributeDefinition` entries.

```typescript
import { HeadlessEditor, basicExtensions } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [basicExtensions]
});
```

`basicExtensions` is a preset that bundles a full default schema — document, text, paragraph, heading, blockquote, code block, lists, task lists, bold, italic, underline, strikethrough, inline code, hard break, horizontal rule, and undo/redo. It is the easiest way to get a working editor.

To build a smaller or custom schema, register individual extensions or use `defineExtension` to write your own. Custom extensions can contribute nodes, marks, attributes, commands, keyboard shortcuts, and input rules.

Below extensions are always registered in editor automatically even if you never pass them:

- `documentExtension` and `textExtension` are required by every editor instance.
- `listKeymapExtension` is auto-registered when `listExtension` is present.
- `collapsibleKeymapExtension` is auto-registered when the `collapsibleExtension` is present.
- `indentOutdentExtension` is auto-registered when `enableTabKey` is `true` and the user has not already registered one.

## Nodes in a schema

A `NodeDefinition` describes one node type and it has below fields:

| Field | Purpose |
|-------|---------|
| `name` | The unique name of the node type (`'paragraph'`, `'heading'`, `'table'`, …). |
| `group` | The semantic group the node belongs to (`'block'`, `'inline'`, `'container'`, `'root'`, `'block list'`, `'list'`). |
| `content` | The content rule that decides what child nodes are allowed. |
| `attrs` | The attribute definitions for this node. |
| `inline` | `true` if the node is inline (lives inside a block). |
| `leaf` | `true` if the node is a leaf with no content (for example, `image` or `horizontalRule`). |

```typescript
import { defineExtension, NodeContent } from '@syncfusion/ej2-headless-editor';
import type { NodeDefinition } from '@syncfusion/ej2-headless-editor';

const customParagraph = defineExtension({
    name: 'paragraph',
    nodes(): NodeDefinition[] {
        return [
            {
                name: 'paragraph',
                group: 'block',
                content: NodeContent.inline().zeroOrMore()
            }
        ];
    }
});
```

## Marks in a schema

A `MarkDefinition` describes one mark type and it has below fields:

| Field | Purpose |
|-------|---------|
| `name` | The unique name of the mark type (`'bold'`, `'italic'`, `'link'`, …). |
| `attrs` | The attribute definitions for this mark. |
| `inclusive` | Whether the mark extends across text inserted at its boundary. Defaults to `true`. |
| `spanning` | Whether the mark can span across block boundaries. |
| `excludes` | The names of marks that cannot coexist with this mark. |

```typescript
import { defineExtension } from '@syncfusion/ej2-headless-editor';
import type { MarkDefinition } from '@syncfusion/ej2-headless-editor';

const bold = defineExtension({
    name: 'bold',
    marks(): MarkDefinition[] {
        return [
            {
                name: 'bold',
                inclusive: true
            }
        ];
    }
});
```

## Attributes

An `AttributeDefinition` declares a single typed attribute on a node or a mark and it has below fields:

| Field | Purpose |
|-------|---------|
| `name` | The attribute key as it appears in `attrs`. |
| `type` | The value type. One of `'string'`, `'number'`, `'boolean'`, or `'enum'`. |
| `default` | The default value used when the attribute is not provided. |
| `required` | If `true`, the attribute must be supplied explicitly and has no default. |
| `values` | Allowed values for an `enum` type. Required when `type` is `'enum'`. |

```typescript
import type { AttributeDefinition } from '@syncfusion/ej2-headless-editor';

const textAlign: AttributeDefinition = {
    name: 'align',
    type: 'enum',
    default: 'left',
    values: ['left', 'center', 'right', 'justify']
};
```

## Validating a schema

The editor validates the schema when the editor is created. Two rules apply:

- The schema must include a node named `'document'`. This is the root of every document.
- Node and mark names must be unique within their respective collections. Two nodes cannot share a name, and two marks cannot share a name.

If either rule is broken, `HeadlessEditor.create()` throws error and the editor is not created. The error message clearly names the broken definition.