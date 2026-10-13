# Advanced Features & Patterns

> **See also:** [api-references-part-2.md](api-references-part-2.md) for the full options types: `PlaceholderOptions` (9 properties for the placeholder extension), `TextAlignOptions` (types and htmlAttributes), `UndoRedoOptions` (depth and newGroupDelay), and the static functions `setTextAlignCommand` and `unsetTextAlignCommand` that build the text-align command instances.

## Table of Contents
- [Placeholder Configuration](#placeholder-configuration)
- [Text Alignment](#text-alignment)
- [Indentation & Outdentation](#indentation--outdentation)
- [Advanced Command Patterns](#advanced-command-patterns)

## Placeholder Configuration

### Overview

The `placeholderExtension` displays hint text inside empty editor nodes to guide users where content should be entered.

### Register the Extension

```ts
import { HeadlessEditor, placeholderExtension, paragraphExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [placeholderExtension, paragraphExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

### Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `placeholder` | Hint text shown in empty nodes. Can be a static string or a function that returns text based on the node context. | `'Write something...'` |
| `emptyNodeClass` | CSS class applied to empty nodes. Can be a static class name or a function that returns a class name based on the node context. | `'e-placeholder-is-empty'` |
| `emptyEditorClass` | CSS class applied to the editor root element when the entire editor is empty. | `'e-placeholder-is-editor-empty'` |
| `dataAttribute` | HTML data attribute name used to store the placeholder text on DOM elements. The value can be read by CSS `::before` pseudo-elements. | `'data-placeholder'` |
| `showOnlyCurrent` | When `true`, the placeholder is shown only for the node containing the active cursor. | `true` |
| `showOnlyWhenEditable` | When `true`, the placeholder is displayed only when the editor is in editable mode. | `true` |
| `includeChildren` | When `true`, the placeholder is shown for parent nodes containing only empty child nodes. | `true` |
| `showOnlyWhenEditorEmpty` | When `true`, the placeholder is shown only when the entire editor is empty. | `true` |

### Configure Placeholder

```ts
import { HeadlessEditor, placeholderExtension, paragraphExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        paragraphExtension,
        placeholderExtension.configure({
            placeholder: 'Start typing...',
            emptyNodeClass: 'is-empty',
            showOnlyCurrent: true
        })
    ]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

The `placeholder` and `emptyNodeClass` options accept either a string or a function that returns a string.

### Dynamic Placeholders

Use a function to render context-specific hints, for example:

```ts
import { HeadlessEditor, placeholderExtension, paragraphExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        paragraphExtension,
        placeholderExtension.configure({
            placeholder: (context) => `Write a ${context.node.type.name}...`
        })
    ]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

---

## Text Alignment

### Overview

The `textAlignExtension` registers the `setTextAlign` and `unsetTextAlign` commands for applying and removing block-level text alignment.

### Register the Extension

```ts
import { HeadlessEditor, textAlignExtension, paragraphExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [paragraphExtension, textAlignExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

### Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `types` | Block node type names where text alignment is allowed. | `['paragraph', 'heading', 'listItem', 'taskItem']` |
| `htmlAttributes` | HTML attributes applied to the aligned block elements. | `{}` |

### Configure Text Alignment

```ts
import { HeadlessEditor, textAlignExtension, paragraphExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        paragraphExtension,
        textAlignExtension.configure({
            types: ['paragraph', 'heading', 'blockquote']
        })
    ]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

### Commands

| Command | Description |
|---------|-------------|
| `setTextAlign({ align })` | Applies the specified alignment to the current block or selection. Accepted values: `left`, `center`, `right`, `justify`. |
| `unsetTextAlign()` | Removes the alignment attribute from the current block or selection. |

### Usage

```ts
// Apply center alignment to the current block
editor.commands.setTextAlign({ align: 'center' });

// Apply right alignment
editor.commands.setTextAlign({ align: 'right' });

// Remove alignment
editor.commands.unsetTextAlign();
```

### Keyboard Shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Align Left | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>L</kbd> |
| Align Center | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>E</kbd> |
| Align Right | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>R</kbd> |
| Justify | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>J</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>J</kbd> |

---

## Indentation & Outdentation

### Overview

The `indentOutdentExtension` registers the `indent` and `outdent` commands and wires <kbd>Tab</kbd> and <kbd>Shift</kbd> + <kbd>Tab</kbd> handling for structural indentation control.

### Register the Extension

```ts
import { HeadlessEditor, paragraphExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [paragraphExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

The Tab key behavior is controlled by the `enableTabKey` editor configuration. When `true`, the editor automatically registers `indentOutdentExtension` and plain blocks fall back to inserting 4 spaces on <kbd>Tab</kbd>.

### Configure the Tab key

```ts
import { HeadlessEditor, paragraphExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [paragraphExtension],
    enableTabKey: true
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

> When `config.enableTabKey` is `true`, the editor automatically registers `indentOutdentExtension`. Register it manually only if you need to call `indent()` or `outdent()` programmatically without enabling the Tab key.

### Commands

| Command | Description |
|---------|-------------|
| `indent()` | Increases the indentation of the current block or selection by one step. |
| `outdent()` | Decreases the indentation of the current block or selection by one step. When the block is already at the root indent, the call has no effect. |

```ts
// Increase indentation of the current block
editor.commands.indent();

// Decrease indentation
editor.commands.outdent();
```

### Keyboard Shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Increase indent | <kbd>Tab</kbd> | <kbd>Tab</kbd> |
| Decrease indent | <kbd>Shift</kbd> + <kbd>Tab</kbd> | <kbd>Shift</kbd> + <kbd>Tab</kbd> |
| Outdent at the start of an indented block | <kbd>Backspace</kbd> | <kbd>Backspace</kbd> |

> When `enableTabKey` is `true` and the cursor is not at a structural position, <kbd>Tab</kbd> inserts 4 spaces and <kbd>Shift</kbd> + <kbd>Tab</kbd> removes 4 trailing spaces.

---

## Undo and Redo

### Overview

The `undoRedoExtension` registers the `undo` and `redo` commands for navigating the editor's history stack.

### Register the Extension

```ts
import { HeadlessEditor, undoRedoExtension, paragraphExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [undoRedoExtension, paragraphExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

### Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `depth` | Maximum depth of the undo history stack. | `30` |
| `newGroupDelay` | Time in milliseconds after which a new edit forms a new history group. | `300` |

### Configure Undo and Redo

```ts
import { HeadlessEditor, undoRedoExtension, paragraphExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        paragraphExtension,
        undoRedoExtension.configure({
            depth: 50,
            newGroupDelay: 500
        })
    ]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

### Commands

| Command | Description |
|---------|-------------|
| `undo()` | Reverts the last change in the editor history. |
| `redo()` | Re-applies the most recently undone change. |

```ts
// Undo the last change
editor.commands.undo();

// Redo the last undone change
editor.commands.redo();
```

### Keyboard Shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Undo | <kbd>Ctrl</kbd> + <kbd>Z</kbd> | <kbd>⌘</kbd> + <kbd>Z</kbd> |
| Redo | <kbd>Ctrl</kbd> + <kbd>Y</kbd> | <kbd>⌘</kbd> + <kbd>Y</kbd> |

---

## Advanced Command Patterns

### Pattern 1: Command Availability Checking

Always check if a command is available before executing:

```ts
// Check if bold can be applied
if (editor.can().toggleBold()) {
    editor.commands.toggleBold();
}

// Dry-run a whole chain
if (editor.chain().setSelection({ from: 1, to: 5 }).canRun()) {
    // Safe to run the same chain
    editor.chain().setSelection({ from: 1, to: 5 }).run();
}
```

### Pattern 2: Multi-Step Formatting

Execute commands in sequence with chaining:

```ts
const result = editor.chain()
    .setSelection({ from: 1, to: 5 })
    .insertText({ text: 'Hi' })
    .run();

if (result.success) {
    // The chain ran and updated state
} else if (result.reason === 'aborted') {
    // A step's availability check failed; nothing changed
} else {
    // The chain was empty
}
```

### Pattern 3: Set and Move the Selection

Use `setSelection({ from, to })` to position the cursor or a range. The `from` and `to` values are document positions, not character indexes:

```ts
// Collapse to a cursor position
editor.commands.clearSelection();

// Select a range
editor.commands.setSelection({ from: 1, to: 5 });
```

> `setContent(html)` and `setDocument(doc)` both reset the selection to the start of the new document. Re-apply the selection with `setSelection` after a replace if you need to keep the user's position.
