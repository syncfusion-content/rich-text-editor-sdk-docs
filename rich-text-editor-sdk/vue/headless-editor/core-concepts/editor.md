---
layout: post
title: Editor in Vue Headless Editor | Syncfusion
description: Learn how to create, mount, configure, and dispose a HeadlessEditor instance inside a Vue component using the Vue Headless Editor.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdkappliesto: UI Component Suite, Rich Text Editor SDK
---

# Editor in Vue Headless Editor

The `HeadlessEditor` class is the single entry point for the Headless Editor. You create one with `HeadlessEditor.create()`, mount it into a DOM container, interact with it through commands, observe it through events, and dispose it with `destroy()`.

## Creating an editor

Use the static `HeadlessEditor.create()` method to instantiate the editor. The constructor is internal and `create()` is the only public way to obtain an instance.

```ts
import { HeadlessEditor, basicExtensions } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [basicExtensions]
});
```

The `create()` call returns a fully initialized editor that is ready to mount. It is not attached to the DOM until you call `mount()`.

## Editor configuration

`HeadlessEditor.create()` accepts an `EditorConfig` object that controls initial content, extensions, behavior toggles, lifecycle hooks, and integrations.

### Initial content and extensions

Use `document` or `content` to provide a starting document, and `extensions` to enable features such as bold, headings, lists, and tables.

```ts
import { HeadlessEditor, basicExtensions } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    content: '<h1>Welcome</h1><p>Start typing...</p>',
    extensions: [basicExtensions]
});
```

### Behavior toggles

| Property | Purpose |
|----------|---------|
| `autofocus` | Focus the editor automatically when it is mounted. |
| `readOnly` | Render the editor in read only mode. |
| `enableInputRules` | Enable markdown style autoformatting (default `true`). |
| `enableTabKey` | Enable Tab and Shift+Tab behavior (default `true`). |
| `autoSaveSelectionOnBlur` | Save the selection when the editor loses focus. |

```ts
const editor = HeadlessEditor.create({
    extensions: [basicExtensions],
    autofocus: 'start',
    readOnly: false,
    enableInputRules: true
});
```

### Lifecycle hooks

`EditorConfig` exposes lifecycle callbacks such as `created`, `destroyed`, `contentChanged`, `selectionChanged`, `focus`, and `blur`. These are wired to the same named public events on the editor instance.

```ts
const editor = HeadlessEditor.create({
    extensions: [basicExtensions],
    created: () => {
        console.log('Editor is ready.');
    },
    contentChanged: (args) => {
        console.log('Document changed.');
    }
});
```

For the full list of events and their payloads, see the `Events` api.

## Mounting inside a Vue component

In Vue, the editor is created inside `onMounted` (Composition API) or `mounted` (Options API) so it has access to a real DOM element and destroyed inside `onBeforeUnmount` or `beforeUnmount` to release resources.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { HeadlessEditor, basicExtensions } from '@syncfusion/ej2-headless-editor';

const editorContainer = ref<HTMLDivElement | null>(null);
let editor: HeadlessEditor | null = null;

onMounted(() => {
    editor = HeadlessEditor.create({
        extensions: [basicExtensions]
    });
    editor.mount(editorContainer.value!);
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
import { HeadlessEditor, basicExtensions } from '@syncfusion/ej2-headless-editor';

export default defineComponent({
    data() {
        return {
            editor: null as HeadlessEditor | null
        };
    },
    mounted() {
        const editor = HeadlessEditor.create({
            extensions: [basicExtensions]
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

## Mounting and unmounting

Use `mount()` to attach the editor to a DOM container, and `unmount()` to detach it.

```ts
const container = document.getElementById('editor');

editor.mount(container);
```

```ts
editor.unmount();
```

After `unmount()`, the editor's state, including the document, selection, and history, is preserved. You can re-attach the same instance to the same container or to a different one by calling `mount()` again.

## Disposing an editor

Use `destroy()` to release the editor and all of its resources. After `destroy()` the instance is unusable; create a new one with `HeadlessEditor.create()` if you need another editor.

```ts
editor.destroy();
```

`destroy()` is safe to call more than once. In a Vue component, the recommended pattern is to destroy the editor inside `onBeforeUnmount` (Composition API) or `beforeUnmount` (Options API).

## Updating configuration after creation

A small set of behavior toggles can be updated at runtime with `setOptions()`. Updates take effect immediately on the live editor.

```ts
editor.setOptions({
    readOnly: true,
    autoSaveSelectionOnBlur: true
});
```

The properties supported by `setOptions()` are:

| Property | Effect |
|----------|--------|
| `readOnly` | Switches the editor in and out of read only mode. |
| `autofocus` | Updates the autofocus behavior for the next mount. |
| `autoSaveSelectionOnBlur` | Enables or disables selection auto save. |
| `enableInputRules` | Enables or disables markdown style input rules. |

Structural properties such as `document`, `content`, `extensions`, and `clipboard` cannot be changed after creation. To change them, destroy the editor and create a new one.
