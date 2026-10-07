---
layout: post
title: Custom Node Views in Vue Headless Editor | Syncfusion
description: Learn how to contribute a custom DOM render for a Headless Editor node, including the descriptor shape and lifecycle handlers.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Custom Node Views in Vue Headless Editor

Use the `nodeViews` field on `ExtensionConfig` to take over how a node is rendered. A node view is the right home when you want the editor to display a node with your own DOM and your own behavior, not just the default `domSpecs` HTML.

## What you write

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<script setup lang="ts">
nodeViews?: (this: ExtensionScope<TOptions>) => Record<string, (node: EditorNode) => NodeViewDescriptor | null>
</script>
{% endhighlight %}
{% endtabs %}

## `NodeViewDescriptor` shape

| Field | Type | Description |
|-------|------|-------------|
| `dom` | `HTMLElement` | The DOM root this view manages. Required. |
| `contentDOM` | `HTMLElement \| null` | Optional. Where child content is rendered. If `null`, the node is treated as atom-like. |
| `update` | `(attrs) => boolean` | Optional. Called when the node's data changes; return `true` if the view is still valid. |
| `ignoreMutation` | `(mutation) => boolean` | Optional. Return `true` to tell the editor the mutation came from the view itself. |
| `destroy` | `() => void` | Optional. Cleanup on view teardown. |
| `selectNode` | `() => void` | Optional. Called when the node becomes the editor selection. |
| `deselectNode` | `() => void` | Optional. Called when the node loses the editor selection. |

## `dom` and `contentDOM`

`dom` is the outer wrapper the editor mounts. If your node has editable children, `contentDOM` is where the editor inserts them. If you only need a leaf widget, omit `contentDOM`.

## `update` lifecycle

`update(attrs)` runs whenever the node's data changes. Returning `true` keeps the existing view in place; returning `false` triggers a full rebuild. Use `update` to react to attribute changes (for example, refreshing a label when an attribute changes).

## `ignoreMutation` lifecycle

`ignoreMutation(mutation)` runs for every DOM mutation inside the view. Return `true` when a mutation is the node view's own product. Returning `false` lets the editor treat the mutation as an external edit and respond accordingly.

## Example: a badge with a click handler

Imagine a `badge` block that displays a label and reacts to a click. The node view builds the wrapper element, attaches the click handler, and cleans up on teardown:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<script setup lang="ts">
import { defineExtension } from '@syncfusion/ej2-headless-editor';

const badgeExtension = defineExtension({
    name: 'badge',
    nodes() {
        return [
            {
                name: 'badge',
                group: 'inline',
                inline: true,
                attrs: [
                    { name: 'label', type: 'string', default: '' }
                ]
            }
        ];
    },
    nodeViews() {
        return {
            badge: (node) => {
                const dom = document.createElement('span');
                dom.className = 'badge';
                dom.textContent = node.attrs['label'];
                dom.title = 'Click to copy';
                dom.style.cursor = 'pointer';

                const onClick = () => {
                    navigator.clipboard.writeText(node.attrs['label']);
                };
                dom.addEventListener('click', onClick);

                return {
                    dom,
                    update(node) {
                        dom.textContent = node.attrs['label'];
                        return true;
                    },
                    destroy() {
                        dom.removeEventListener('click', onClick);
                    }
                };
            }
        };
    }
});
</script>
{% endhighlight %}
{% endtabs %}

## Precedence over `domSpecs`

Node views take precedence over DOM specs for rendering. The editor uses `domSpecs` to produce HTML on save; it uses `nodeViews` to mount the running view in the editor surface. If both are defined for the same node, `nodeViews` controls the live render.
