---
layout: post
title: Custom Marks in Angular Headless Editor | Syncfusion
description: Learn how to contribute custom mark types to the Headless Editor schema using the marks contributor and MarkDefinition.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Custom Marks in Angular Headless Editor

Use the `marks` field on `ExtensionConfig` to add a new mark type to the editor. A mark describes inline styling or metadata that travels with text inside a block, like a highlight, a color, or a custom annotation.

## What you write

```ts
marks?: (this: ExtensionScope<TOptions>) => MarkDefinition[]
```

The contributor returns the list of mark definitions the extension adds to the editor. Each returned `MarkDefinition` must have a unique `name`.

## `MarkDefinition` shape

| Field | Type | Description |
|-------|------|-------------|
| `name` | `string` | Unique mark type name. |
| `attrs` | `AttributeDefinition[]` | Optional. Attribute definitions for the mark. |
| `inclusive` | `boolean` | Optional. When `false`, the mark is exclusive (typing inside it leaves it). Defaults to `true`. |
| `spanning` | `boolean` | Optional. When `true`, the mark spans across block boundaries. |
| `excludes` | `string[]` | Optional. Names of marks that cannot coexist with this mark. |

For a tour of the built-in marks, see [Text](../nodes/text).

## Example: a custom `highlight` mark

```ts
import { defineExtension } from '@syncfusion/ej2-headless-editor';

const highlightExtension = defineExtension({
    name: 'highlight',
    marks() {
        return [
            {
                name: 'highlight',
                attrs: [
                    { name: 'color', type: 'string', default: 'yellow' }
                ]
            }
        ];
    }
});
```

## How marks attach to text

Marks live on text nodes, not on blocks. When the user selects a range and applies a mark, every text node inside the range is wrapped with the mark.