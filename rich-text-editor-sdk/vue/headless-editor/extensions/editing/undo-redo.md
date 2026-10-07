---
layout: post
title: Undo and Redo Extension in Vue Headless Editor | Syncfusion
description: Learn how to configure the Undo and Redo extension in the Vue Headless Editor, including history depth, grouping, and commands.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Undo and Redo in Vue Headless Editor

The `undoRedoExtension` registers the `undo` and `redo` commands for navigating the editor history stack.

## Register the extension

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { HeadlessEditor, undoRedoExtension, paragraphExtension } from '@syncfusion/ej2-headless-editor';

const editorContainer = ref<HTMLDivElement | null>(null);
let editor: HeadlessEditor | null = null;
onMounted(() => {
    if (!editorContainer.value) {
        return;
    }
    editor = HeadlessEditor.create({
        extensions: [undoRedoExtension, paragraphExtension]
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
import { HeadlessEditor, undoRedoExtension, paragraphExtension } from '@syncfusion/ej2-headless-editor';

export default defineComponent({
    data() {
        return {
            editor: null as HeadlessEditor | null
        };
    },
    mounted() {
        const editor = HeadlessEditor.create({
            extensions: [undoRedoExtension, paragraphExtension]
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

## Configure undo and redo options

The `undoRedo` extension exposes options for tuning the history stack:

| Option | Description | Default |
|--------|-------------|---------|
| `depth` | Maximum depth of the undo history stack. | `30` |
| `newGroupDelay` | Time in milliseconds after which a new edit forms a new history group. | `300` |

```ts
undoRedoExtension.configure({
    depth: 50,
    newGroupDelay: 500
});
```

## Commands

| Command | Description |
|---------|--------------|
| `undo()` | Reverts the last change in the editor history. |
| `redo()` | Re applies the most recently undone change. |

```ts
// Undo the last change
editor.commands.undo();

// Redo the last undone change
editor.commands.redo();
```

## Keyboard shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Undo | <kbd>Ctrl</kbd> + <kbd>Z</kbd> | <kbd>⌘</kbd> + <kbd>Z</kbd> |
| Redo | <kbd>Ctrl</kbd> + <kbd>Y</kbd> | <kbd>⌘</kbd> + <kbd>Y</kbd> |
