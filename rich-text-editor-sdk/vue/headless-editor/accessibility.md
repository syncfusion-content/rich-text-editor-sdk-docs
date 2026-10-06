---
layout: post
title: Accessibility in Vue Headless Editor | Syncfusion
description: Learn about accessibility in the Vue Headless Editor, including WAI-ARIA, keyboard navigation, screen readers, and custom content.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/appliesto: UI Component Suite, Rich Text Editor SDK
---

# Accessibility in Vue Headless Editor

The Headless Editor supports keyboard interaction, focus management, semantic content, read-only content, and accessible custom nodes. The consuming application must provide the surrounding labels, roles, toolbar, and controls.

## Accessibility Overview

The Headless Editor provides the following accessibility capabilities:

- keyboard shortcuts through built-in and custom extensions
- focus, blur, autofocus, and selection management
- semantic DOM output through node and mark definitions
- read-only editing through the `readOnly` configuration
- custom node and node view APIs for embedded content

ARIA roles and labels are not added automatically. The consuming application must apply the appropriate attributes to the editor and its controls.

## Accessibility criteria

The following table summarizes the accessibility capabilities provided by the editor and the responsibilities of the consuming application.

| Accessibility Criteria | Compatibility |
| --- | --- |
| [WCAG 2.2 Support](https://ej2.syncfusion.com/documentation/common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Screen Reader Support](https://ej2.syncfusion.com/documentation/common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Keyboard Navigation Support](https://ej2.syncfusion.com/documentation/common/accessibility#keyboard-navigation-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Focus Management Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Read-only Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Semantic Content Rendering | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| ARIA Roles and States | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| Color Contrast and Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> |

<style>
	.post .post-content img {
		display: inline-block;
		margin: 0.5em 0;
	}
</style>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

## WAI-ARIA attributes

The Headless Editor does not add ARIA roles or labels automatically. Add the following attributes to the editable element and application controls as required.

| Attribute | Applicability |
|---|---|
| `role="textbox"` and `aria-multiline="true"` | Identify the editable multiline region. |
| `aria-label` or `aria-labelledby` | Provide an accessible name for the editor. |
| `aria-readonly="true"` | Apply when `readOnly: true` is configured. |
| `aria-describedby` | Associate instructions or validation messages. |

The following Vue component applies the recommended attributes to the editable element:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { HeadlessEditor, basicExtensions } from '@syncfusion/ej2-headless-editor';
const editorContainer = ref<HTMLDivElement | null>(null);
const readOnly = true;
let editor: HeadlessEditor | null = null;
onMounted(() => {
	const container = editorContainer.value;
	if (!container) {
		return;
	}
	editor = HeadlessEditor.create({
		extensions: [basicExtensions],
		readOnly
	});
	editor.mount(container);
	const editableElement = container.querySelector('.ProseMirror');
	if (editableElement instanceof HTMLElement) {
		editableElement.setAttribute('role', 'textbox');
		editableElement.setAttribute('aria-label', 'Document editor');
		editableElement.setAttribute('aria-multiline', 'true');
		if (readOnly) {
			editableElement.setAttribute('aria-readonly', 'true');
		}
	}
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
			editor: null as HeadlessEditor | null,
			readOnly: true
		};
	},
	mounted() {
		const editor = HeadlessEditor.create({
			extensions: [basicExtensions],
			readOnly: this.readOnly
		});
		this.editor = markRaw(editor);
		const container = this.$refs.editorContainer as HTMLDivElement;
		editor.mount(container);
		const editableElement = container.querySelector('.ProseMirror');
		if (editableElement instanceof HTMLElement) {
			editableElement.setAttribute('role', 'textbox');
			editableElement.setAttribute('aria-label', 'Document editor');
			editableElement.setAttribute('aria-multiline', 'true');
			if (this.readOnly) {
				editableElement.setAttribute('aria-readonly', 'true');
			}
		}
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

Use `aria-labelledby` when a visible label is available. If the editor changes to read-only mode, update `aria-readonly` with the editor state.

## Keyboard Accessibility

The editor supports keyboard shortcuts for formatting, headings, lists, links, undo, and redo. Custom shortcuts are defined through an extension’s `keyboardShortcuts` contributor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { HeadlessEditor, basicExtensions, defineExtension } from '@syncfusion/ej2-headless-editor';
const editorContainer = ref<HTMLDivElement | null>(null);
let editor: HeadlessEditor | null = null;
const customShortcutExtension = defineExtension({
	name: 'custom-shortcuts',
	keyboardShortcuts() {
		return {
			'Mod-Alt-b': () => this.editor.commands.toggleBold()
		};
	}
});
onMounted(() => {
	if (!editorContainer.value) {
		return;
	}
	editor = HeadlessEditor.create({
		extensions: [basicExtensions, customShortcutExtension]
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
import { HeadlessEditor, basicExtensions, defineExtension } from '@syncfusion/ej2-headless-editor';
const customShortcutExtension = defineExtension({
	name: 'custom-shortcuts',
	keyboardShortcuts() {
		return {
			'Mod-Alt-b': () => this.editor.commands.toggleBold()
		};
	}
});
export default defineComponent({
	data() {
		return {
			editor: null as HeadlessEditor | null
		};
	},
	mounted() {
		const editor = HeadlessEditor.create({
			extensions: [basicExtensions, customShortcutExtension]
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

Use `Mod` for `Ctrl` on Windows and Linux and `Cmd` on macOS.

## Screen Reader Considerations

Use semantic DOM for headings, lists, links, paragraphs, and custom nodes. For screen reader support:

- provide an accessible label for the editor container
- provide text alternatives for images and other non-text content
- expose status and validation messages to assistive technologies
- keep custom interactive content keyboard operable

Associate a visible label with the editor in the Vue template:

```ts
<template>
	<label id="editor-label">Document editor</label>
	<div id="editor" aria-labelledby="editor-label"></div>
</template>
```

Use `autofocus` to set the initial caret position. Use `focus` and `blur` callbacks to respond to focus changes, and use `autoSaveSelectionOnBlur` when toolbar actions can move focus.

## Custom Node Accessibility

Custom nodes should use semantic elements and provide accessible names for interactive content. Keep their structure predictable when selected or focused, and provide keyboard behavior and state announcements for interactive controls.

Use `contenteditable="false"` for controls inside a custom node that should not become part of the editor text flow.

The following Vue component configures a custom node that renders semantic `aside` content with an accessible label:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { HeadlessEditor, basicExtensions, defineExtension, NodeContent } from '@syncfusion/ej2-headless-editor';
const editorContainer = ref<HTMLDivElement | null>(null);
let editor: HeadlessEditor | null = null;
const noteExtension = defineExtension({
	name: 'accessible-note',
	nodes() {
		return [{
			name: 'accessibleNote',
			group: 'block',
			content: NodeContent.block().oneOrMore()
		}];
	},
	domSpecs() {
		return {
			nodes: {
				accessibleNote: {
					toDOM: () => ['aside', { 'aria-label': 'Note' }, 0]
				}
			}
		};
	}
});
onMounted(() => {
	if (!editorContainer.value) {
		return;
	}
	editor = HeadlessEditor.create({
		extensions: [basicExtensions, noteExtension]
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
import { HeadlessEditor, basicExtensions, defineExtension, NodeContent } from '@syncfusion/ej2-headless-editor';
const noteExtension = defineExtension({
	name: 'accessible-note',
	nodes() {
		return [{
			name: 'accessibleNote',
			group: 'block',
			content: NodeContent.block().oneOrMore()
		}];
	},
	domSpecs() {
		return {
			nodes: {
				accessibleNote: {
					toDOM: () => ['aside', { 'aria-label': 'Note' }, 0]
				}
			}
		};
	}
});
export default defineComponent({
	data() {
		return {
			editor: null as HeadlessEditor | null
		};
	},
	mounted() {
		const editor = HeadlessEditor.create({
			extensions: [basicExtensions, noteExtension]
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

## Custom Node View Accessibility

Custom node views control the DOM rendered for embedded content and widgets. Accessible node views should:

- maintain a stable, semantic DOM structure
- provide accessible names for interactive elements
- support keyboard interaction without creating traps
- manage focus consistently with the editor
- expose changes in state or value to assistive technologies

Use semantic markup, accessible names, and a live region in the Vue component rendered for a custom node:

The `accessibleStatus` node type must also be registered in the editor schema for this node view to be used.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { HeadlessEditor, basicExtensions, defineExtension, type NodeViewDescriptor } from '@syncfusion/ej2-headless-editor';
const editorContainer = ref<HTMLDivElement | null>(null);
let editor: HeadlessEditor | null = null;
const statusNodeViewExtension = defineExtension({
	name: 'accessible-status-view',
	nodeViews() {
		return {
			accessibleStatus: (): NodeViewDescriptor => {
				const dom: HTMLElement = document.createElement('div');
				dom.setAttribute('role', 'status');
				dom.setAttribute('aria-live', 'polite');
				return { dom };
			}
		};
	}
});
onMounted(() => {
	const container = editorContainer.value;
	if (!container) {
		return;
	}
	editor = HeadlessEditor.create({
		extensions: [basicExtensions, statusNodeViewExtension]
	});
	editor.mount(container);
});
onBeforeUnmount(() => {
	editor?.destroy();
});
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
	defineExtension,
	type NodeViewDescriptor
} from '@syncfusion/ej2-headless-editor';
const statusNodeViewExtension = defineExtension({
	name: 'accessible-status-view',
	nodeViews() {
		return {
			accessibleStatus: (): NodeViewDescriptor => {
				const dom: HTMLElement = document.createElement('div');
				dom.setAttribute('role', 'status');
				dom.setAttribute('aria-live', 'polite');
				return { dom };
			}
		};
	}
});
export default defineComponent({
	data() {
		return {
			editor: null as HeadlessEditor | null
		};
	},
	mounted() {
		const editor = HeadlessEditor.create({
			extensions: [basicExtensions, statusNodeViewExtension]
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

## Ensuring accessibility

Validate the complete application with an accessibility checker and axe-core, including custom toolbars, nodes, menus, images, and status messages.

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> controls](https://ej2.syncfusion.com/documentation/common/accessibility)
