---
layout: post
title: Extension Priority in Angular Headless Editor | Syncfusion
description: Learn how the priority field controls the order extensions and their nodes are added to the Angular Headless Editor schema.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Extension Priority in Angular Headless Editor

`priority` is an optional numeric field on `ExtensionConfig` that controls the order in which the extension is wired up. Higher numbers are processed first; lower numbers are processed last.

## What the default does

When `priority` is omitted, the editor uses `50`. Most built-in extensions leave it at the default.

## When to change it

| Priority | Use for | Built-in examples |
|----------|---------|-------------------|
| `100` | Standalone blocks (fillers) that should be available before the blocks that hold them. | Paragraph, heading, image, horizontal rule. |
| `50` | The default. Most extensions do not need to set this. | Bold, italic, link. |
| `10` | Recursive containers that hold other blocks. Set this so the container is added to the schema after the blocks it contains. | Table, blockquote, list, callout, collapsible. |

## Example: a callout that holds paragraphs

A callout is a `block` that can contain other `block` nodes. If the callout extension is added before the paragraph extension, the schema does not know what `block` means inside a callout yet. Setting `priority: 10` on the callout makes sure paragraph is wired up first.

```ts
import { defineExtension, NodeContent } from '@syncfusion/ej2-headless-editor';

const calloutExtension = defineExtension({
    name: 'callout',
    priority: 10,
    nodes() {
        return [
            {
                name: 'callout',
                group: 'block',
                content: NodeContent.block().oneOrMore()
            }
        ];
    }
});
```