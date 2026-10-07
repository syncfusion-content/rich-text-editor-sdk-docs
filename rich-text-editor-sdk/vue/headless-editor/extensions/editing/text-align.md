---
layout: post
title: Text Alignment Extension in Vue Headless Editor | Syncfusion
description: Learn how to configure the Text Alignment extension in the Vue Headless Editor, including left, center, right, and justify alignment.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Text Alignment in Vue Headless Editor

The `textAlignExtension` registers the `setTextAlign` and `unsetTextAlign` commands for applying and removing block level text alignment.

## Register the extension

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { HeadlessEditor, textAlignExtension, paragraphExtension } from '@syncfusion/ej2-headless-editor';

const editorContainer = ref<HTMLDivElement | null>(null);
let editor: HeadlessEditor | null = null;
onMounted(() => {
    if (!editorContainer.value) {
        return;
    }
    editor = HeadlessEditor.create({
        extensions: [textAlignExtension, paragraphExtension]
    });
    editor.mount(editorContainer.value);
});
onBeforeUnmount(() => editor?.destroy());
</script>

<template>
    <div ref="editorContainer"></div>
</template>
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<script lang="ts">
import { defineComponent, markRaw } from 'vue';
import { HeadlessEditor, textAlignExtension, paragraphExtension } from '@syncfusion/ej2-headless-editor';

export default defineComponent({
    data() {
        return {
            editor: null as HeadlessEditor | null
        };
    },
    mounted() {
        const editor = HeadlessEditor.create({
            extensions: [textAlignExtension, paragraphExtension]
        });
        this.editor = markRaw(editor);
        editor.mount(this.$refs.editorContainer as HTMLDivElement);
    },
    beforeUnmount() {
        this.editor?.destroy();
    }
});
</script>

<template>
    <div ref="editorContainer"></div>
</template>
{% endhighlight %}
{% endtabs %}

## Configure text alignment options

The `textAlign` extension exposes options for choosing which block types accept alignment and which HTML attributes are applied:

| Option | Description | Default |
|--------|-------------|---------|
| `types` | Block node type names where text alignment is allowed. | `['paragraph', 'heading', 'listItem', 'taskItem']` |
| `htmlAttributes` | HTML attributes applied to the aligned block elements. | `{}` |

```ts
textAlignExtension.configure({
    types: ['paragraph', 'heading', 'blockquote']
});
```

## Commands

| Command | Description |
|---------|--------------|
| `setTextAlign({ align })` | Applies the specified alignment to the current block or selection. Accepted values: `left`, `center`, `right`, `justify`. |
| `unsetTextAlign()` | Removes the alignment attribute from the current block or selection. |

```ts
// Apply center alignment to the current block
editor.commands.setTextAlign({ align: 'center' });

// Apply right alignment
editor.commands.setTextAlign({ align: 'right' });

// Remove alignment
editor.commands.unsetTextAlign();
```

## Keyboard shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Align Left | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>L</kbd> |
| Align Center | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>E</kbd> |
| Align Right | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>R</kbd> |
| Justify | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>J</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>J</kbd> |
