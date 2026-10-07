---
layout: post
title: Custom Attributes in Vue Headless Editor | Syncfusion
description: Learn how to define custom node and mark attributes, including supported types, default values, and reusable definitions.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Custom Attributes in Vue Headless Editor

Use the `attrs` field on `NodeDefinition` and `MarkDefinition` to declare the typed attributes a node or mark carries. Each attribute is described by an `AttributeDefinition` that says what it is called, what type of value it stores, and what default it falls back to.

## `AttributeDefinition` shape

| Field | Type | Description |
|-------|------|-------------|
| `name` | `string` | Unique attribute name within the node or mark. |
| `type` | `'string' \| 'number' \| 'boolean' \| 'enum'` | Storage type. |
| `default` | `unknown` | Optional. Default value when the attribute is not supplied. |
| `required` | `boolean` | Optional. When `true`, the attribute must be supplied explicitly and no default is used. |
| `values` | `readonly string[]` | Required for `type: 'enum'`. Allowed values (non-empty). |

## Example attribute definitions

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<script setup lang="ts">
import { defineExtension, AttributeDefinition, NodeContent } from '@syncfusion/ej2-headless-editor';

const customBlockExtension = defineExtension({
    name: 'customBlock',
    nodes() {
        const blockAttrs: AttributeDefinition[] = [
            { name: 'variant', type: 'enum', default: 'primary',
              values: ['primary', 'secondary'] }
        ];
        return [
            {
                name: 'customBlock',
                group: 'block',
                content: NodeContent.inline().zeroOrMore(),
                attrs: blockAttrs
            }
        ];
    }
});
</script>
{% endhighlight %}
{% endtabs %}

## Default values

When a node or mark is created without an attribute, the editor substitutes the `default` value. Use `null` for attributes that have no meaningful default and treat `null` as "unset" in your NodeView or DOM spec.

