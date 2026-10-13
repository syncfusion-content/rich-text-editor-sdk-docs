---
name: syncfusion-javascript-headless-editor
description: Implement rich-text editing with Syncfusion JavaScript Headless Editor. Covers editor initialization, document structure, commands, extensions, node types, marks, custom extensions, content operations, keyboard shortcuts, and advanced customization patterns.
metadata:
  author: "Syncfusion Inc"
  version: "1.0.0"
---

# Syncfusion JavaScript Headless Editor

The **Syncfusion JavaScript Headless Editor** is a powerful, extensible rich-text editing library built on ProseMirror. It provides programmatic control over document editing without bundling a UI, making it ideal for custom editor implementations, headless content systems, and embedded editing experiences.

## Overview

Use the Headless Editor when you need:
- **Programmatic control** over text editing and formatting
- **Custom UI** built to your exact specifications
- **Headless integration** into existing applications
- **Advanced document model** with nodes, marks, and extensions
- **Fine-grained event handling** and command execution

## Documentation and Navigation Guide

### Getting Started & Setup
📄 **Read:** [references/getting-started.md](references/getting-started.md)
- Installation and package setup
- Creating your first editor instance
- Theme configuration and CSS imports
- Basic mounting and DOM integration
- Environment setup with Vite or other bundlers

### Editor Core API
📄 **Read:** [references/editor-api.md](references/editor-api.md)
- HeadlessEditor class and factory method
- Editor configuration options
- Lifecycle hooks (created, destroyed, contentChanged, selectionChanged)
- Mounting and unmounting editors
- Event subscriptions
- Editor destruction and cleanup

### Document Structure & Content Model
📄 **Read:** [references/document-structure.md](references/document-structure.md)
- Document tree architecture
- Node and mark concepts
- Schema structure and versioning
- Block-level vs inline content
- Document serialization formats

### Commands & Interactions
📄 **Read:** [references/core-commands.md](references/core-commands.md)
- Command execution API
- Text formatting commands (bold, italic, underline)
- Block manipulation commands
- List operations (bullets, ordered, task lists)
- Selection and cursor management
- History (undo/redo) commands

### Content Operations
📄 **Read:** [references/content-operations.md](references/content-operations.md)
- Reading document content programmatically
- Updating and manipulating content
- HTML import and export
- JSON serialization and deserialization
- Copy-paste and clipboard handling

### Extensions & Plugin System
📄 **Read:** [references/extensions-guide.md](references/extensions-guide.md)
- Extension architecture and lifecycle
- basicExtensions preset overview
- Registering extensions
- Extension priorities and loading order
- Composing custom extension stacks

### Node Types Reference
📄 **Read:** [references/node-types.md](references/node-types.md)
- Document, paragraph, and text nodes
- Headings and blockquotes
- Code blocks and inline code
- Lists (bullet, ordered, task)
- Tables and images
- Special nodes (callout, collapsible, horizontal rule)

### Mark Types Reference
📄 **Read:** [references/mark-types.md](references/mark-types.md)
- Text formatting marks (bold, italic, underline, strikethrough)
- Font styling (color, family, size, background)
- Inline code and links
- Text transforms (upper-case, lower-case)
- Subscript and superscript

### Custom Extensions & Plugins
📄 **Read:** [references/custom-extensions.md](references/custom-extensions.md)
- Defining custom extensions
- Creating custom commands and keyboard shortcuts
- Custom input rules for autoformatting
- Custom node types and marks
- Custom node views (DOM rendering)
- Lifecycle hooks and priority management
- Advanced plugin patterns

### Keyboard Handling
📄 **Read:** [references/keyboard-shortcuts.md](references/keyboard-shortcuts.md)
- Default keyboard shortcuts (selection, navigation, history, formatting, lists)
- Block shortcuts via input rules (`# `, `## `, `- `, `1. `, `> `, `` ``` ``, etc.)
- Disabling shortcuts (`enableInputRules`, `enableTabKey`)
- Custom keyboard shortcuts via `defineExtension` and `keyboardShortcuts()`
- Custom input rules via `defineExtension` and `inputRules()`
- Keyboard accessibility (WAI-ARIA, focus management)

### Advanced Features & Patterns
📄 **Read:** [references/advanced-features.md](references/advanced-features.md)
- Placeholder text configuration
- Text alignment and indentation
- Content expressions and queries
- Selection preservation
- Event handling patterns
- Performance optimization

### Accessibility & Security
📄 **Read:** [references/accessibility-security.md](references/accessibility-security.md)
- WCAG 2.1 compliance
- Accessibility features (screen readers, focus management)
- Security considerations
- Input sanitization and XSS prevention
- File upload security

---

## Quick Start Example

### Basic Editor Setup

```ts
import './style.css';
import { HeadlessEditor, basicExtensions, placeholderExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [basicExtensions, placeholderExtension]
});

const container = document.getElementById('headless-editor');

if (container) {
    editor.mount(container);
}
```

### HTML Template (`src/index.html`)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Syncfusion TypeScript Headless Editor</title>
</head>

<body>
    <div id="container">
        <div id="headless-editor"></div>
    </div>
    <script type="module" src="/src/main.ts"></script>
</body>

</html>
```

### CSS Reference (`src/style.css`)

```css
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/headless-editor/index.css";
```

---

## Common Patterns

### Pattern 1: Read Content in Different Formats

**Get the structured document as JSON:**
```ts
const doc = editor.getDocument();
console.log(doc.type); // 'document'
doc.children.forEach((node) => console.log(node.type));
```

**Serialize to HTML:**
```ts
const html = editor.getHtml();
console.log(html); // "<p>Hello <strong>world</strong></p>"
```

**Get plain text:**
```ts
const text = editor.getText();
console.log(text); // "Hello world"
```

**Get selected text only:**
```ts
const selected = editor.getSelectionText();
if (selected) {
  console.log(`User selected: ${selected}`);
}
```

### Pattern 2: Set New Content

**Replace with HTML:**
```ts
editor.setContent('<h1>New Title</h1><p>Fresh content.</p>');
```

**Clear to empty paragraph:**
```ts
editor.setContent('');
```

**Assign structured document:**
```ts
editor.setDocument({
  type: 'document',
  attrs: {},
  marks: [],
  schemaVersion: 1,
  children: [
    { type: 'paragraph', attrs: {}, marks: [], children: [] }
  ]
});
```

### Pattern 3: Update Content In-Place

**Insert text at current selection:**
```ts
editor.commands.insertText({ text: 'Hello world' });
```

**Insert at specific offset:**
```ts
editor.commands.insertText({ text: 'Hello world', at: { offset: 0 } });
```

**Replace text in range:**
```ts
editor.commands.replaceText({
  from: { offset: 0 },
  to:   { offset: 11 },
  text: 'Updated text'
});
```

### Pattern 4: Configure Editor Behavior

**Enable read-only mode:**
```ts
const editor = HeadlessEditor.create({
    extensions: [basicExtensions],
    readOnly: true
});
```

**Update options after creation:**
```ts
editor.setOptions({
    readOnly: true,
    autoSaveSelectionOnBlur: true
});
```

**Enable markdown input rules (default):**
```ts
const editor = HeadlessEditor.create({
    extensions: [basicExtensions],
    enableInputRules: true
});
```

### Pattern 5: Lifecycle and Cleanup

**Recommended pattern for teardown:**
```ts
const editor = HeadlessEditor.create({
    extensions: [basicExtensions],
    destroyed: () => {
        console.log('Editor cleaned up');
    }
});

editor.mount(container);

// Clean up on page unload
window.addEventListener('beforeunload', () => {
    editor.destroy();
});
```

**Note:** `destroy()` is safe to call more than once and should be called in teardown hooks.

---

## Key Concepts

### Editor Lifecycle
1. **Create** - Instantiate with `HeadlessEditor.create()`
2. **Mount** - Attach to DOM with `mount()`
3. **Interact** - Execute commands, handle events
4. **Unmount** - Detach from DOM with `unmount()`
5. **Destroy** - Clean up with `destroy()`

### Document Model
- **Root:** Single `document` node containing block-level children
- **Blocks:** Paragraphs, headings, lists, tables, code blocks, etc.
- **Inline Content:** Text nodes and marks inside blocks
- **Marks:** Formatting applied to text (bold, links, color, etc.)
- **Extensible:** Custom nodes and marks via extensions

### Command Execution
- **Return value** - Commands return `true` when a change happened and `false` otherwise
- **Example:** `editor.commands.toggleBold()`, `editor.commands.setHeading({ level: 2 })`
- **State-aware** - Commands check current selection and document state
- **Chainable** - Multiple commands can be executed in sequence

### Extension Architecture
- **Modular:** Each feature (bold, lists, tables) is an independent extension
- **Composable:** Combine extensions to build custom editors
- **Lifecycle:** Extensions have hooks for setup, teardown, and priority management
- **Customizable:** Define custom extensions with commands, shortcuts, and rules

---

## Configuration Options

| Option | Type | Default | Purpose |
|--------|------|---------|---------|
| `extensions` | Extension[] | - | Enable features such as bold, headings, lists, and tables |
| `content` | string | - | Initial HTML content |
| `document` | DocumentRoot | - | Initial document (alternative to `content`); takes precedence when both are provided |
| `autofocus` | - | - | Focus the editor automatically when it is mounted |
| `readOnly` | - | - | Render the editor in read-only mode |
| `enableInputRules` | - | `true` | Enable markdown-style autoformatting |
| `enableTabKey` | - | `true` | Enable Tab and Shift+Tab behavior |
| `autoSaveSelectionOnBlur` | - | - | Save the selection when the editor loses focus |

Structural properties such as `document`, `content`, `extensions`, and `clipboard` cannot be changed after creation. To change them, destroy the editor and create a new one.

**Lifecycle Callbacks:**

| Callback | Purpose |
|----------|---------|
| `created` | Called when editor is fully initialized |
| `destroyed` | Called when editor is destroyed |
| `contentChanged` | Called when document content changes |
| `documentChanged` | Called when the document is replaced (via `setContent` / `setDocument`) with `action: 'Replaced'` |
| `selectionChanged` | Called when selection/cursor moves |
| `focus` | Called when editor receives focus |
| `blur` | Called when editor loses focus |

---

## Next Steps

1. **Start here:** [Getting Started](references/getting-started.md) - Set up your first editor
2. **Learn the core:** [Editor API](references/editor-api.md) - Understand the main API
3. **Understand content:** [Document Structure](references/document-structure.md) - Learn the content model
4. **Execute changes:** [Commands](references/core-commands.md) - Perform edits
5. **Extend functionality:** [Custom Extensions](references/custom-extensions.md) - Build custom features

---

## Related Resources

- [Syncfusion TypeScript Headless Editor Documentation](https://help.syncfusion.com/rich-text-editor-sdk/typescript/headless-editor/)
- [ProseMirror Guide](https://prosemirror.net/docs/guide/)
