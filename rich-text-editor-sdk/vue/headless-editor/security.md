---
layout: post
title: Security in Vue Headless Editor | Syncfusion
description: Learn about content security, clipboard sanitization, file upload validation, and link security in the Vue Headless Editor.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Security in Vue Headless Editor

The Headless Editor treats external content as untrusted input. It provides built-in clipboard sanitization, link validation, and upload lifecycle events. Applications must also validate content and files before storing or serving them.

## Content Security

Validate content at the application and server boundaries. The editor sanitizes pasted HTML, but it is not a replacement for server-side validation of content received from users, APIs, or storage.

Use the editor's schema and extension configuration to control the content that can be inserted into the document.

## Clipboard Security

Pasted HTML is sanitized before it is parsed into the editor document. The sanitizer removes dangerous elements, event-handler attributes, and unsafe URL values.

Application clipboard transformations run after the built-in sanitizer:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { HeadlessEditor, basicExtensions } from '@syncfusion/ej2-headless-editor';

const editorContainer = ref<HTMLDivElement | null>(null);
let editor: HeadlessEditor | null = null;
onMounted(() => {
  const container = editorContainer.value;
  if (!container) {
    return;
  }
  editor = HeadlessEditor.create({
    extensions: [basicExtensions],
    clipboard: {
      transformHTML: (html: string) => html.replace(/\sdata-source="external"/g, '')
    }
  });
  editor.mount(container);
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
      extensions: [basicExtensions],
      clipboard: {
        transformHTML: (html: string) => html.replace(/\sdata-source="external"/g, '')
      }
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

Use `transformHTML` only for additional product-specific rules. It must not be used to bypass the built-in sanitizer.

## HTML Sanitization

The built-in sanitizer removes common XSS vectors, including:

- `script`, `style`, `iframe`, and unsafe `object` elements
- inline event attributes such as `onclick`, `onload`, and `onerror`
- `javascript:` URL values
- `data:text/html` and script-capable SVG data URLs
- styles containing `javascript:` or `expression()` values

Sanitization is applied at the clipboard boundary before the content reaches the schema parser. Sanitize initial HTML and content received from external APIs before passing it to the editor.

## File Upload Security

The `beforeFileUpload` event is raised before processing begins. The public event handler receives `BeforeFileUploadEventArgs` directly. Set `args.cancel` to `true` to reject a file before the upload starts.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import {
  HeadlessEditor,
  basicExtensions,
  type BeforeFileUploadEventArgs
} from '@syncfusion/ej2-headless-editor';
const editorContainer = ref<HTMLDivElement | null>(null);
const allowedTypes = new Set(['image/jpeg', 'image/png']);
let editor: HeadlessEditor | null = null;
onMounted(() => {
  const container = editorContainer.value;
  if (!container) {
    return;
  }
  editor = HeadlessEditor.create({ extensions: [basicExtensions] });
  editor.mount(container);
  editor.on<BeforeFileUploadEventArgs>('beforeFileUpload', (args) => {
    if (!allowedTypes.has(args.file.type) || args.file.size > 5 * 1024 * 1024) {
      args.cancel = true;
    }
  });
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
import {
  HeadlessEditor,
  basicExtensions,
  type BeforeFileUploadEventArgs
} from '@syncfusion/ej2-headless-editor';
const allowedTypes = new Set(['image/jpeg', 'image/png']);
export default defineComponent({
  data() {
    return {
      editor: null as HeadlessEditor | null
    };
  },
  mounted() {
    const editor = HeadlessEditor.create({ extensions: [basicExtensions] });
    this.editor = markRaw(editor);
    editor.mount(this.$refs.editorContainer as HTMLDivElement);
    editor.on<BeforeFileUploadEventArgs>('beforeFileUpload', (args) => {
      if (!allowedTypes.has(args.file.type) || args.file.size > 5 * 1024 * 1024) {
        args.cancel = true;
      }
    });
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

`BeforeFileUploadEventArgs` contains the `file`, its `source` (`paste`, `drop`, or `api`), and the optional `cancel` flag. Validate file type, size, name, and content on the server as well. Use `editor.on('fileReceived', handler)` for post-validation processing and `FileHandler.cancel(uploadId)` to cancel an active upload.

## Link Security

The link command validates URLs before applying a link mark. It rejects empty values and dangerous protocols such as `javascript:`, `data:`, and `vbscript:`. Common safe protocols include `http:`, `https:`, `mailto:`, `tel:`, `ftp:`, relative paths, and in-page anchors.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { HeadlessEditor, basicExtensions, linkExtension } from '@syncfusion/ej2-headless-editor';
const editorContainer = ref<HTMLDivElement | null>(null);
const linkResult = ref('');
let editor: HeadlessEditor | null = null;
onMounted(() => {
  const container = editorContainer.value;
  if (!container) {
    return;
  }
  editor = HeadlessEditor.create({
    extensions: [basicExtensions, linkExtension]
  });
  editor.mount(container);
});
function testLink(href: string, displayText: string) {
  if (!editor) {
    return;
  }
  const applied = editor.execute('setLink', { href, displayText });
  linkResult.value = applied ? 'The link was accepted.' : 'The link was rejected.';
}
onBeforeUnmount(() => editor?.destroy());
</script>

<template>
  <div>
    <div ref="editorContainer"></div>
    <button type="button" @click="testLink('https://www.example.com', 'Open example')">
      Test a safe URL
    </button>
    <button type="button" @click="testLink('javascript:alert(1)', 'Unsafe link')">
      Test an unsafe URL
    </button>
    <p aria-live="polite">{{ linkResult }}</p>
  </div>
</template>
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<script lang="ts">
import { defineComponent, markRaw } from 'vue';
import { HeadlessEditor, basicExtensions, linkExtension } from '@syncfusion/ej2-headless-editor';
export default defineComponent({
  data() {
    return {
      editor: null as HeadlessEditor | null,
      linkResult: ''
    };
  },
  mounted() {
    const editor = HeadlessEditor.create({
      extensions: [basicExtensions, linkExtension]
    });
    this.editor = markRaw(editor);
    editor.mount(this.$refs.editorContainer as HTMLDivElement);
  },
  beforeUnmount() {
    this.editor?.destroy();
  },
  methods: {
    testLink(href: string, displayText: string) {
      if (!this.editor) {
        return;
      }
      const applied = this.editor.execute('setLink', { href, displayText });
      this.linkResult = applied ? 'The link was accepted.' : 'The link was rejected.';
    }
  }
});
</script>

<template>
  <div>
    <div ref="editorContainer"></div>
    <button type="button" @click="testLink('https://www.example.com', 'Open example')">
      Test a safe URL
    </button>
    <button type="button" @click="testLink('javascript:alert(1)', 'Unsafe link')">
      Test an unsafe URL
    </button>
    <p aria-live="polite">{{ linkResult }}</p>
  </div>
</template>
{% endhighlight %}
{% endtabs %}

Check the command result before reporting success. Validate or rewrite link attributes again when exporting or rendering content outside the editor.

## Security best practices

- keep the built-in clipboard sanitizer enabled
- validate initial, pasted, imported, and stored content
- enforce file type and size rules before upload and on the server
- allow only approved URL protocols
- apply a Content Security Policy in the host application
- validate final rendered HTML before displaying user content

## See also

* [Security in Syncfusion<sup style="font-size:70%">&reg;</sup> controls](https://ej2.syncfusion.com/documentation/common/security)
