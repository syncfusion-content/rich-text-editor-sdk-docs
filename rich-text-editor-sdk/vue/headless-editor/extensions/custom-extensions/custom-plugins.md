---
layout: post
title: Custom Plugins in Vue Headless Editor | Syncfusion
description: Learn how to contribute custom ProseMirror plugins to the Vue Headless Editor to observe and react to editor activity.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Custom Plugins in Vue Headless Editor

Use the `plugins` field on `ExtensionConfig` to add a long-lived observer to the editor. A plugin is the right home for behavior that has to follow the editor over time, like logging, focus tracking, or content change reactions.

## What you write

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<script setup lang="ts">
plugins?: (this: ExtensionScope<TOptions>) => readonly Plugin[]
</script>
{% endhighlight %}
{% endtabs %}

The option returns the list of plugins the extension adds. Each entry is a `Plugin` instance built with the `Plugin` constructor from the `prosemirror-state` package, imported directly.

## Import plugin

`Plugin` is included in the `prosemirror-state` package used by the Headless Editor, so you do not need to install it separately.

Import it directly in your extension:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<script setup lang="ts">
import { Plugin } from 'prosemirror-state';
</script>
{% endhighlight %}
{% endtabs %}

## Example: a focus-tracker plugin

The following plugin watches the editor's focus and blur events and logs them. It is mounted by the editor and lives for the life of the editor instance.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<script setup lang="ts">
import { defineExtension } from '@syncfusion/ej2-headless-editor';
import { Plugin } from 'prosemirror-state';

const focusTrackerExtension = defineExtension({
    name: 'focus-tracker',
    plugins() {
        return [
            new Plugin({
                view(editorView) {
                    const onFocus = () => console.log('editor focused');
                    const onBlur = () => console.log('editor blurred');
                    editorView.dom.addEventListener('focus', onFocus);
                    editorView.dom.addEventListener('blur', onBlur);
                    return {
                        destroy() {
                            editorView.dom.removeEventListener('focus', onFocus);
                            editorView.dom.removeEventListener('blur', onBlur);
                        }
                    };
                }
            })
        ];
    }
});
</script>
{% endhighlight %}
{% endtabs %}

## When to ship a plugin

| Use `plugins` when | Use `addExtensions` when |
|---------------------|---------------------------|
| You need to observe or react to editor activity over time. | You only need to add nodes, marks, commands, or shortcuts. |
| The lifetime of the work is tied to the editor. | The lifetime of the work is per-extension. |
| You are wrapping a third-party library that needs to be present alongside the editor. | You are building a small extension. |

I> A plugin that needs to change the document must dispatch a command through `editor.execute(name, payload)` rather than mutating state on its own.
