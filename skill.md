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

This skill bundles 12 reference files that map to the Syncfusion TypeScript Headless Editor documentation. Use the navigation below to locate the right reference for a given task.

### Getting Started & Setup
📄 **Read:** [references/getting-started.md](references/getting-started.md)
- Prerequisites (Node.js 24.13.0 or higher)
- Creating a TypeScript application with Vite
- Installing `@syncfusion/ej2-headless-editor` and the Tailwind 3 theme
- Adding the CSS reference and the main editor library
- Running the application

### Editor API
📄 **Read:** [references/editor-api.md](references/editor-api.md)
- Creating an editor with `HeadlessEditor.create()`
- Editor configuration (`content`, `document`, `extensions`, behavior toggles, lifecycle hooks)
- Mounting and unmounting
- Updating configuration with `setOptions()`
- Disposing an editor with `destroy()`
- Reading content (`getDocument`, `getHtml`, `getText`, `getSelectionText`)
- Setting content (`setContent`, `setDocument`)

### Document Structure & Content Model
📄 **Read:** [references/document-structure.md](references/document-structure.md)
- Document tree architecture
- Document root identity
- Content layers (block-level nodes, inline content, marks)
- Schema stability
- Document examples

### Core Commands
📄 **Read:** [references/core-commands.md](references/core-commands.md)
- Command execution (`editor.commands.*`, `editor.execute`)
- Command return values
- Checking availability (`editor.can()`, `canRun()`)
- Default injectable commands
- Content commands (`insertText`, `deleteText`, `replaceText`, `deleteRange`)
- Selection commands (`setSelection`, `clearSelection`)
- Command chaining (`editor.chain()`)

### Content Operations
📄 **Read:** [references/content-operations.md](references/content-operations.md)
- Reading content (`getDocument`, `getHtml`, `getText`, `getSelectionText`)
- Setting content (`setContent`, `setDocument`)
- Updating content in-place via typed commands
- HTML import and export
- JSON serialization
- Copy-paste and clipboard handling
- End-to-end example

### Extensions & Plugin System
📄 **Read:** [references/extensions-guide.md](references/extensions-guide.md)
- `basicExtensions` preset
- Adding extensions alongside the preset
- Registering extensions individually
- How extensions compose
- Defining a custom extension
- Extension config fields (summary)
- Reusing and extending extensions
- Extension lifecycle
- End-to-end example: document variable

### Custom Extensions & Plugins (Deep Dive)
📄 **Read:** [references/custom-extensions.md](references/custom-extensions.md)
- Custom node types
- Custom marks
- Custom commands
- Custom keyboard shortcuts
- Custom input rules
- Custom plugins
- Custom DOM specifications
- Custom node views
- Custom attributes
- Layering a node view on an existing node
- Extension constraints

### Node Types Reference
📄 **Read:** [references/node-types.md](references/node-types.md)
- Document, paragraph, heading, block quote, code block
- Bullet list and ordered list
- Task list
- Text node
- Hard break, horizontal rule
- Table, image, callout, collapsible

### Mark Types Reference
📄 **Read:** [references/mark-types.md](references/mark-types.md)
- Bold, italic, underline, strikethrough
- Link (with URL validation)
- Inline code
- Font color, background color, font family, font size
- Subscript, superscript
- `toLowerCase`, `toUpperCase`

### Keyboard Shortcuts
📄 **Read:** [references/keyboard-shortcuts.md](references/keyboard-shortcuts.md)
- All default keyboard shortcuts (selection, navigation, history, formatting, lists)
- Block shortcuts via input rules (`#`, `##`, `-`, `1.`, `>`, `` ``` ``, etc.)
- How shortcuts are matched (keymap assembly and priority)
- Disabling shortcuts (`enableInputRules`, `enableTabKey`)
- Custom keyboard shortcuts via `defineExtension` and `keyboardShortcuts()`
- Custom input rules via `defineExtension` and `inputRules()`
- Keyboard accessibility and focus management

### Advanced Features
📄 **Read:** [references/advanced-features.md](references/advanced-features.md)
- Placeholder configuration
- Text alignment
- Indentation and outdentation
- Undo and redo
- Advanced command patterns

### Accessibility & Security
📄 **Read:** [references/accessibility-security.md](references/accessibility-security.md)
- Accessibility overview
- WCAG 2.2 compliance
- WAI-ARIA attributes
- Keyboard accessibility
- Screen reader support
- Custom node accessibility
- Security considerations (input sanitization, file uploads)

### API Reference
📄 **Read:** [references/api-references.md](references/api-references.md)
- `HeadlessEditor` class methods and properties
- `EditorConfig`, `DocumentRoot`, `EditorNode`, `TextNode`, `EditorState`, `Position`, `Mark`
- `Command`, `CommandContext`, `PMCommandContext`, `NodeResolver`, `CommandMeta`, `ChainResult`, `ValidationError`, `SelectionType`
- Payload types: `DeleteRangePayload`, `SetMarkPayload`
- Command facades: `TypedCommandsFacade`, `TypedCanFacade`, `TypedChain`
- Event payloads: `AfterPasteEventArgs`, `BeforePasteEventArgs`, `PasteContent`, `ContentChangedEventArgs`, `DocumentChangedEventArgs`, `DocumentChangeAction`
- File upload event payloads: `BeforeFileUploadEventArgs`, `FileReceivedEventArgs`
- Resize event payloads: `ResizeEventArgs`, `ResizeStartEventArgs`, `ResizeStopEventArgs`, `ResizingEventArgs`
- Clipboard: `ClipboardContent`, `ClipboardOptions`, `ClipboardTransformContext`
- File upload: `FileUploadHandler`, `FileUploadProgress`, `FileUploadRequest`, `FileUploadResult`
- Selection helpers: `SelectedNode`, `SelectedCell`, `SelectionContext`, `SelectionMark`, `SelectionNode`, `SelectionSnapshotStatus`, `CellSelection`
- `ResizableNodeView` and related types

### API Reference — Part 2
📄 **Read:** [references/api-references-part-2.md](references/api-references-part-2.md)
- Schema building blocks: `AttributeDefinition`, `NodeGroup`, `NodeDefinition`, `MarkDefinition`
- Content expressions: `NodeContent`
- File upload registry: `FileHandler`, `PendingFileUpload`
- Extension options: `CalloutExtensionOptions`, `CalloutVariant`, `CodeBlockOptions`, `CollapsibleExtensionOptions`, `LinkExtensionOptions`, `ListExtensionOptions`, `ListKeymapExtensionOptions`, `ImageOptions`, `ImageResizeOptions`, `ImageUIContribution`, `ImageUINodeViewFactory`
- Command payloads: `SetHighlightPayload`, `SetColorPayload`, `SetFontFamilyPayload`, `SetFontSizePayload`, `SetHeadingPayload`, `SetLinkPayload`, `InsertImagePayload`, `IndentCodeBlockPayload`, `OutdentCodeBlockPayload`, `CollapsePayload`, `ExpandPayload`, `SetBulletListTypePayload`, `SetOrderedListTypePayload`, `ToggleBulletListPayload`, `ToggleOrderedListPayload`, `ToggleListTypePayload`
- Image enums: `ImageAlign`, `ImageDisplayMode`, `ImageUIPlacement`, `ImageWrap`, `SaveFormatType`
- Input rule options: `CreateNodeRuleOptions`, `CreateLinkRuleOptions`, `CreateTextBlockRuleOptions`, `CreateWrappingRuleOptions`

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
  children: [
    { type: 'paragraph', attrs: {}, children: [] }
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
