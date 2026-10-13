# Accessibility & Security

> **See also:** [api-references.md](api-references.md) for the file upload event payloads: `BeforeFileUploadEventArgs` (with `file`, `cancel`, and `source` properties) and `FileReceivedEventArgs`. The `FileUploadHandler`, `FileUploadRequest`, `FileUploadResult`, `FileUploadProgress`, and `FileHandler` types are documented in [api-references-part-2.md](api-references-part-2.md).

## Table of Contents
- [Accessibility Overview](#accessibility-overview)
- [WCAG Compliance](#wcag-compliance)
- [WAI-ARIA Attributes](#wai-aria-attributes)
- [Keyboard Accessibility](#keyboard-accessibility)
- [Screen Reader Support](#screen-reader-support)
- [Custom Node Accessibility](#custom-node-accessibility)
- [Security Considerations](#security-considerations)
- [Input Validation](#input-validation)

## Accessibility Overview

The Headless Editor supports keyboard interaction, focus management, semantic content, read-only content, and accessible custom nodes. The consuming application must provide the surrounding labels, roles, toolbar, and controls.

### Accessibility Capabilities

- Keyboard shortcuts through built-in and custom extensions
- Focus, blur, autofocus, and selection management
- Semantic DOM output through node and mark definitions
- Read-only editing through the `readOnly` configuration
- Custom node and node view APIs for embedded content

ARIA roles and labels are not added automatically. The consuming application must apply the appropriate attributes to the editor and its controls.

---

## WCAG Compliance

### Accessibility Criteria Summary

| Accessibility Criteria | Compatibility |
|---|---|
| WCAG 2.2 Support | Intermediate |
| Screen Reader Support | Intermediate |
| Keyboard Navigation Support | Yes |
| Focus Management Support | Yes |
| Read-only Support | Yes |
| Semantic Content Rendering | Yes |
| ARIA Roles and States | Intermediate |
| Color Contrast and Validation | No |

---

## WAI-ARIA Attributes

### Applying ARIA to the Editor Container

The Headless Editor does not add ARIA roles or labels automatically. Add the following attributes to the editable element and application controls as required.

### Required Attributes

| Attribute | Applicability |
|---|---|
| `role="textbox"` and `aria-multiline="true"` | Identify the editable multiline region. |
| `aria-label` or `aria-labelledby` | Provide an accessible name for the editor. |
| `aria-readonly="true"` | Apply when `readOnly: true` is configured. |
| `aria-describedby` | Associate instructions or validation messages. |

The following example applies the recommended attributes:

```ts
import { HeadlessEditor, basicExtensions } from '@syncfusion/ej2-headless-editor';

const readOnly = true;
const editor: HeadlessEditor = HeadlessEditor.create({
  extensions: [basicExtensions],
  readOnly
});
const container: HTMLElement | null = document.getElementById('headless-editor');

if (container) {
  editor.mount(container);
}

const editableElement = container.querySelector('.ProseMirror');
if (editableElement instanceof HTMLElement) {
	editableElement.setAttribute('role', 'textbox');
	editableElement.setAttribute('aria-label', 'Document editor');
	editableElement.setAttribute('aria-multiline', 'true');

	if (readOnly) {
		editableElement.setAttribute('aria-readonly', 'true');
	}
}
```

Use `aria-labelledby` when a visible label is available. If the editor changes to read-only mode, update `aria-readonly` with the editor state.

### Read-Only Mode

When the editor is in read-only mode, update the `aria-readonly` attribute:

```ts
import { HeadlessEditor, basicExtensions } from '@syncfusion/ej2-headless-editor';

const readOnly = true;
const editor = HeadlessEditor.create({
    extensions: [basicExtensions],
    readOnly
});

const container = document.getElementById('headless-editor');
if (container) {
    editor.mount(container);
}

const editableElement = container.querySelector('.ProseMirror');
if (editableElement instanceof HTMLElement) {
    editableElement.setAttribute('role', 'textbox');
    editableElement.setAttribute('aria-label', 'Document viewer');
    editableElement.setAttribute('aria-multiline', 'true');
    
    if (readOnly) {
        editableElement.setAttribute('aria-readonly', 'true');
    }
}
```

### Using aria-labelledby

When a visible label is available on the page:

```html
<label id="editor-label">Document editor</label>
<div id="editor" aria-labelledby="editor-label"></div>
```

---

## Keyboard Accessibility

### Default Keyboard Shortcuts

The editor supports keyboard shortcuts for formatting, headings, lists, links, undo, and redo (see [Keyboard Shortcuts Reference](./keyboard-shortcuts.md)).

### Custom Keyboard Shortcuts

```ts
import { HeadlessEditor, basicExtensions, defineExtension } from '@syncfusion/ej2-headless-editor';

const customShortcutExtension = defineExtension({
	name: 'custom-shortcuts',

	keyboardShortcuts() {
		return {
			'Mod-Alt-b': () => this.editor.commands.toggleBold()
		};
	}
});

const editor: HeadlessEditor = HeadlessEditor.create({
  extensions: [basicExtensions, customShortcutExtension]
});
```

Use `Mod` for `Ctrl` on Windows and Linux and `Cmd` on macOS.

---

## Screen Reader Support

Use semantic DOM for headings, lists, links, paragraphs, and custom nodes. For screen reader support:

- provide an accessible label for the editor container
- provide text alternatives for images and other non-text content
- expose status and validation messages to assistive technologies
- keep custom interactive content keyboard operable

Associate a visible label with the editor:

```html
<label id="editor-label">Document editor</label>
<div id="editor" aria-labelledby="editor-label"></div>
```

Use `autofocus` to set the initial caret position. Use `focus` and `blur` callbacks to respond to focus changes, and use `autoSaveSelectionOnBlur` when toolbar actions can move focus.

---

## Custom Node Accessibility

When defining custom nodes, design the DOM and interaction to be accessible:

- maintain a stable, semantic DOM structure
- provide accessible names for interactive elements
- support keyboard interaction without creating traps
- manage focus consistently with the editor
- expose changes in state or value to assistive technologies

Use `contenteditable='false'` for controls inside a custom node that should not become part of the editor text flow.

The following example defines an accessible custom block using `domSpecs` with an `aria-label`:

```ts
import { defineExtension, NodeContent, basicExtensions } from '@syncfusion/ej2-headless-editor';

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

const editor = HeadlessEditor.create({
    extensions: [basicExtensions, noteExtension]
});
```

---

## Security Considerations

The Headless Editor treats external content as untrusted input. It provides built-in clipboard sanitization, link validation, and upload lifecycle events. Applications must also validate content and files before storing or serving them.

### Content Security

Validate content at the application and server boundaries. The editor sanitizes pasted HTML, but it is not a replacement for server-side validation of content received from users, APIs, or storage.

Use the editor's schema and extension configuration to control the content that can be inserted into the document.

### Clipboard Security

Pasted HTML is sanitized before it is parsed into the editor document. The sanitizer removes dangerous elements, event-handler attributes, and unsafe URL values.

Application clipboard transformations run after the built-in sanitizer:

```ts
const editor: HeadlessEditor = HeadlessEditor.create({
  extensions: [basicExtensions],
  clipboard: {
    transformHTML: (html: string) => html.replace(/\sdata-source="external"/g, '')
  }
});
```

Use `transformHTML` only for additional product-specific rules. It must not be used to bypass the built-in sanitizer.

### HTML Sanitization

The built-in sanitizer removes common XSS vectors, including:

- `script`, `style`, `iframe`, and unsafe `object` elements
- inline event attributes such as `onclick`, `onload`, and `onerror`
- `javascript:` URL values
- `data:text/html` and script-capable SVG data URLs
- styles containing `javascript:` or `expression()` values

Sanitization is applied at the clipboard boundary before the content reaches the schema parser. Sanitize initial HTML and content received from external APIs before passing it to the editor.

### File Upload Security

The `beforeFileUpload` event is raised before processing begins. The public event handler receives `BeforeFileUploadEventArgs` directly. Set `args.cancel` to `true` to reject a file before the upload starts.

```ts
import type { BeforeFileUploadEventArgs } from '@syncfusion/ej2-headless-editor';

editor.on<BeforeFileUploadEventArgs>('beforeFileUpload', (args) => {
  const allowedTypes: Set<string> = new Set(['image/jpeg', 'image/png']);

  if (!allowedTypes.has(args.file.type) || args.file.size > 5 * 1024 * 1024) {
    args.cancel = true;
  }
});
```

`BeforeFileUploadEventArgs` contains the `file`, its `source` (`paste`, `drop`, or `api`), and the optional `cancel` flag. Validate file type, size, name, and content on the server as well. Use `editor.on('fileReceived', handler)` for post-validation processing and `FileHandler.cancel(uploadId)` to cancel an active upload.

### Link Security

The link command validates URLs before applying a link mark. It rejects empty values and dangerous protocols such as `javascript:`, `data:`, and `vbscript:`. Common safe protocols include `http:`, `https:`, `mailto:`, `tel:`, `ftp:`, relative paths, and in-page anchors.

```ts
import { HeadlessEditor, linkExtension } from '@syncfusion/ej2-headless-editor';

const editor: HeadlessEditor = HeadlessEditor.create({
  extensions: [linkExtension]
});

const accepted = editor.execute('setLink', {
    href: 'https://www.example.com',
    displayText: 'Open example'
});

const rejected = editor.execute('setLink', {
  href: 'javascript:alert(1)',
  displayText: 'Unsafe link'
});
```

Check the command result before reporting success. Validate or rewrite link attributes again when exporting or rendering content outside the editor.

### Security best practices

- keep the built-in clipboard sanitizer enabled
- validate initial, pasted, imported, and stored content
- enforce file type and size rules before upload and on the server
- allow only approved URL protocols
- apply a Content Security Policy in the host application
- validate final rendered HTML before displaying user content

### See also

* [Security in Syncfusion® controls](https://ej2.syncfusion.com/documentation/common/security)
