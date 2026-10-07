---
layout: post
title: Custom DOM Specifications in Vue Headless Editor | Syncfusion
description: Learn how to contribute custom DOM render and parse specs for Headless Editor nodes and marks, including the toDOM and parseDOM shape.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Custom DOM Specifications in Vue Headless Editor

Use the `domSpecs` field on `ExtensionConfig` to describe how a node or mark is rendered to HTML and how HTML is read back into the schema. The two halves of the field, `toDOM` and `parseDOM`, keep saved content and parsed content in sync.

## What you write

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<script setup lang="ts">
domSpecs?: (this: ExtensionScope<TOptions>) => ExtensionDOMSpecs
</script>
{% endhighlight %}
{% endtabs %}

The option returns a `ExtensionDOMSpecs` collection keyed by node name and mark name. Each entry is one descriptor.

## `NodeDOMDescriptor` shape

| Field | Type | Description |
|-------|------|-------------|
| `toDOM(attrs)` | `(attrs) => DOMOutputDescriptor` | Returns the HTML representation of the node. |
| `parseDOM` | `readonly ParseRule[]` | Optional. Rules for parsing HTML into this node. |

## `MarkDOMDescriptor` shape

| Field | Type | Description |
|-------|------|-------------|
| `toDOM(attrs, inline)` | `(attrs, inline) => DOMOutputDescriptor` | Returns the HTML representation of the mark. |
| `parseDOM` | `readonly ParseRule[]` | Optional. Rules for parsing HTML into this mark. |

## `DOMOutputDescriptor` shape

`DOMOutputDescriptor` accepts either a tag-name string or a nested array spec:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<script setup lang="ts">
'div'

['div', { class: 'callout' }, 0]

['span', { class: 'highlight', style: 'background-color: yellow' }, 0]
</script>
{% endhighlight %}
{% endtabs %}

`0` is the content slot where the children are rendered.

## `ParseRule` shape

Each entry in `parseDOM` is a rule that matches against an HTML element and reads attributes from it.

| Field | Type | Description |
|-------|------|-------------|
| `tag` | `string` | The CSS selector to match. For example, `div[data-type="callout"]`. |
| `getAttrs(node)` | function | Reads the attribute values back out of the matched element. |

## Example: a callout with both render and parse

The following extension describes a callout that renders as a `<div data-type="callout" data-variant="...">` and parses the same shape back when HTML is loaded into the editor:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<script setup lang="ts">
import { defineExtension, NodeContent } from '@syncfusion/ej2-headless-editor';

const calloutExtension = defineExtension({
    name: 'callout',
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
    },
    domSpecs() {
        return {
            nodes: {
                callout: {
                    toDOM(attrs) {
                        return [
                            'div',
                            { 'data-type': 'callout', 'data-variant': attrs['variant'] },
                            0
                        ];
                    },
                    parseDOM: [
                        {
                            tag: 'div[data-type="callout"]',
                            getAttrs(node: Node) {
                                const element = node as HTMLElement;
                                return {
                                    variant: element.getAttribute('data-variant') ?? 'info'
                                };
                            }
                        }
                    ]
                }
            }
        };
    }
});
</script>
{% endhighlight %}
{% endtabs %}
