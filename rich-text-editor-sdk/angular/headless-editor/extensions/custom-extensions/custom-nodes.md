---
layout: post
title: Custom Nodes in Angular Headless Editor | Syncfusion
description: Learn how to contribute custom node types to the Headless Editor schema using the nodes contributor and NodeDefinition.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Custom Nodes in Angular Headless Editor

Use the `nodes` field on `ExtensionConfig` to add a new node type to the editor's schema. Each node is described by a `NodeDefinition` that says what the node is called, where it sits in the document, what children it can hold, and what attributes it carries.

## What you write

```ts
nodes?: (this: ExtensionScope<TOptions>) => NodeDefinition[]
```

The contributor returns the list of node definitions the extension adds to the editor. Each returned `NodeDefinition` must have a unique `name`.

## `NodeDefinition` shape

| Field | Type | Description |
|-------|------|-------------|
| `name` | `string` | Unique node type name. |
| `group` | `'root' \| 'block' \| 'container' \| 'inline' \| 'block list' \| 'list'` | Semantic group this node belongs to. |
| `content` | `NodeContent` | Optional. A content expression that constrains the children. |
| `attrs` | `AttributeDefinition[]` | Optional. Attribute definitions for the node. |
| `inline` | `boolean` | Optional. Marks the node as an inline (leaf) node. |
| `leaf` | `boolean` | Optional. Marks the node as a leaf with no content (for example, image or horizontal rule). |

## Example: a custom `callout` block

```ts
import { defineExtension, NodeContent } from '@syncfusion/ej2-headless-editor';

interface CalloutOptions {
    defaultVariant: 'info' | 'warning' | 'error';
    htmlAttributes?: Readonly<Record<string, string>>;
}

const calloutExtension = defineExtension<CalloutOptions>({
    name: 'callout',
    priority: 10,
    defineOptions: () => ({ defaultVariant: 'info', htmlAttributes: {} }),
    nodes() {
        return [
            {
                name: 'callout',
                group: 'block',
                content: NodeContent.block().oneOrMore(),
                attrs: [
                    { name: 'variant', type: 'enum', default: 'info',
                      values: ['info', 'warning', 'error'] }
                ]
            }
        ];
    }
});
```

This is a simplified version of the built-in [Callout] extension.

## Priority for recursive containers

When a block can contain other blocks (for example, a table cell or a callout body), set `priority` to `10` so the container is added to the schema after the blocks it contains. See [Extension Priority](priority) for the full guide.