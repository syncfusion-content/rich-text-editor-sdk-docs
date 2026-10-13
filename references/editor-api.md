# Editor in TypeScript Headless Editor

The `HeadlessEditor` class is the single entry point for the Headless Editor. You create one with `HeadlessEditor.create()`, mount it into a DOM container, interact with it through commands, observe it through lifecycle callbacks, and dispose it with `destroy()`.

## Table of Contents
- [Creating an editor](#creating-an-editor)
- [Editor configuration](#editor-configuration)
- [Mounting and unmounting](#mounting-and-unmounting)
- [Updating configuration after creation](#updating-configuration-after-creation)
- [Disposing an editor](#disposing-an-editor)
- [Reading content](#reading-content)
- [Setting content](#setting-content)
- [Selection helpers](#selection-helpers)
- [Selection snapshots](#selection-snapshots)
- [File handling](#file-handling)
- [Focus](#focus)
- [Event subscription](#event-subscription)

## Creating an editor

Use the static `HeadlessEditor.create()` method to instantiate the editor. The constructor is internal, and `create()` is the only public way to obtain an instance.

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
| `readOnly` | Render the editor in read-only mode. |
| `enableInputRules` | Enable markdown-style autoformatting (default `true`). |
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

If both `EditorConfig.document` (JSON) and `EditorConfig.content` (HTML) are provided, `document` takes precedence and `content` is ignored.

`EditorConfig.content` is read once at creation. To replace the content of a live editor, use `editor.setContent(html)` instead.

### Lifecycle hooks

`EditorConfig` exposes lifecycle callbacks such as `created`, `destroyed`, `contentChanged`, `selectionChanged`, `focus`, and `blur`. These are wired to the same-named public events on the editor instance and can also be subscribed to through `editor.on(eventName, handler)` after creation.

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

### Registering multiple extensions

```ts
import { HeadlessEditor, basicExtensions, tableExtension, imageExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [basicExtensions, tableExtension, imageExtension]
});
```

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
| `readOnly` | Switches the editor in and out of read-only mode. |
| `autofocus` | Updates the autofocus behavior for the next mount. |
| `autoSaveSelectionOnBlur` | Enables or disables selection auto-save. |
| `enableInputRules` | Enables or disables markdown-style input rules. |

Structural properties such as `document`, `content`, `extensions`, and `clipboard` cannot be changed after creation. To change them, destroy the editor and create a new one.

## Disposing an editor

Use `destroy()` to release the editor and all of its resources. After `destroy()` the instance is unusable; create a new one with `HeadlessEditor.create()` if you need another editor.

```ts
editor.destroy();
```

`destroy()` is safe to call more than once. The recommended pattern is to destroy the editor in a teardown hook such as the `beforeunload` event, a route change, or a component-disposal lifecycle method.

`getDocument()` throws if the editor has been destroyed through `destroy()`. The other accessors return an empty string on error so that read paths never throw.

## Reading content

The Headless Editor provides four read APIs, each returning a different representation of the current content. None of them dispatch a transaction, so calling them from a `contentChanged` listener is safe.

| API | Returns | When to use |
| --- | --- | --- |
| `getDocument()` | `DocumentRoot` | Persist or diff the editor state as a Syncfusion-native JSON tree. |
| `getHtml()` | `string` | Export the schema-driven HTML serialization. |
| `getText()` | `string` | Read plain text with all formatting stripped. |
| `getSelectionText()` | `string` | Read only the text inside the current selection. |

Read the structured document. The returned `DocumentRoot` exposes the document tree through its `children` array:

```ts
const doc = editor.getDocument();
console.log(doc.type); // 'document'
doc.children.forEach((node) => console.log(node.type));
```

Serialize the document to HTML:

```ts
const html = editor.getHtml();
console.log(html); // "<p>Hello <strong>world</strong></p>"
```

Read the plain text of the whole document:

```ts
const text = editor.getText();
console.log(text); // "Hello world"
```

Read only the currently selected text. Returns an empty string when the selection is collapsed to a caret:

```ts
const selected = editor.getSelectionText();
if (selected) {
  console.log(`User selected: ${selected}`);
}
```

If an error occurs during serialization, `getHtml()` returns an empty string instead of throwing.

## Setting content

Use `setContent()` or `setDocument()` to assign new content to a mounted editor. Both APIs swap the document body in a single transaction through the same schema-driven parser used at create-time, so the editor instance, view, plugins, and undo stack are preserved. The replacement is a single undo step, and the selection is reset to the start of the new document.

Both APIs are all-or-nothing:

- If the input parses successfully, `contentChanged` and `documentChanged` (with `action: 'Replaced'`) fire once.
- If parsing fails, a diagnostic warning is emitted, the existing document and selection are left untouched, no events fire, and the method returns `false`.

### Assign HTML with `setContent`

`setContent()` accepts an HTML string. Pass an empty or whitespace-only string to clear the document to a single empty paragraph:

```ts
// Replace the document with HTML
editor.setContent('<h1>New Title</h1><p>Fresh content.</p>');

// Clear the document to a single empty paragraph
editor.setContent('');
```

`setContent()` returns `true` when the HTML is parsed and dispatched, and `false` when parsing fails.

N> Use `setContent('')` to clear the editor in one transaction instead of dispatching multiple delete commands. This keeps undo/redo intact and fires `contentChanged` once.

### Assign a Structured Document with `setDocument`

`setDocument()` accepts a `DocumentRoot`, which is the same shape that `getDocument()` returns. Use it when you have a structured document round-tripped from the editor or persisted from an external store.

A `DocumentRoot` has the following properties:

| Property | Type | Description |
| --- | --- | --- |
| `type` | `'document'` | Always `'document'` for the root. |
| `attrs` | `Record<string, unknown>` | Root-level attributes. |

## Selection helpers

In addition to `getSelectionText()`, the editor exposes methods that return structured selection information.

### `getSelection()`

Returns the current selection range as absolute document positions. Provides the `from` and `to` positions (in document offset units) and an `empty` flag indicating whether the selection is a collapsed cursor or spans text. All positions are absolute offsets relative to the document root.

```ts
const selection = editor.getSelection();
if (selection) {
  console.log(selection.from, selection.to, selection.empty);
}
```

### `getSelectionContext()`

Returns the formatting marks and structural nodes relevant to the current selection. Marks are limited to those present at the selection start. A mark is mixed when its attributes differ or it is absent from part of the range. Structural wrapper nodes that do not represent toolbar context are omitted.

```ts
const ctx = editor.getSelectionContext();
ctx.marks.forEach((m) => console.log(m.type, m.attrs));
ctx.nodes.forEach((n) => console.log(n.type, n.attrs));
```

### `getSelectedBlocks()`

Returns all block-level nodes that intersect the current selection. For a cursor or single selection, returns a single block. For a range spanning multiple blocks, returns all blocks in the range. Each returned node includes its live DOM element (if mounted) for toolbar positioning.

### `getSelectedLeafNodes()`

Returns all leaf nodes (atom nodes with no children: image, horizontal rule, hard break, etc.) within the current selection range. Each returned node includes its live DOM element (if mounted) for toolbar positioning or bulk operations.

### `getSelectedCells()`

Returns all currently selected table cells (for `CellSelection`). For non-`CellSelection`, returns an empty array. Each cell includes its live DOM element (if mounted), row and table references, and 0-based coordinates.

## Selection snapshots

The editor captures and stores the current selection as a PM-free `SelectionSnapshot` so toolbar button clicks (which blur the editor) do not reset the selection.

### `saveSelection()`

Captures and stores the current selection. Multiple calls replace the previously held snapshot. The snapshot is independent of any command chain or execution. This is essential for maintaining selection across focus changes in toolbar-based editors where clicking a toolbar button blurs the editor.

### `restoreSelection()`

Applies a previously captured selection snapshot to the current editor state. Restores a saved selection from a `SelectionSnapshot`. If no snapshot is provided, uses the most recently held snapshot from `saveSelection()`. Success depends on snapshot freshness (stale snapshots may fail if document structure changed). Restore operations do NOT consume the snapshot — only command execution consumes. Calling `restoreSelection()` followed by a command is equivalent to a single command execution with automatic selection restoration.

## File handling

The editor exposes a lazy `FileHandler` for managing file uploads. Most applications use the convenience wrapper; the lower-level accessors are for advanced use cases.

### `getFileHandler()`

Returns the `FileHandler` instance for file upload operations. The `FileHandler` is lazily initialized on first access and manages the complete file lifecycle: paste/drop detection, upload ID generation, handler invocation, and event emission.

### `setFileUploadHandler(handler)`

Registers a file upload handler for paste and drag-drop file operations. The provided handler is invoked whenever files are pasted or dropped into the editor. This method must be called before file paste/drop operations begin to have any effect. Calling it multiple times replaces the previous handler. The `FileUploadHandler` receives a file object and metadata, and must return a `Promise` resolving to the uploaded file URL or resource identifier.

```ts
editor.setFileUploadHandler({
  async upload(request) {
    // request.file, request.signal, request.onProgress
    const response = await fetch('/api/upload', { method: 'POST', body: request.file });
    if (!response.ok) throw new Error('Upload failed');
    const { url } = await response.json();
    return { url };
  }
});
```

## Focus

### `focusView()`

Programmatically focus the editor view. Useful for programmatic interaction when the editor loses focus (e.g., after a toolbar button click). The focus is placed at the current selection position.

```ts
editor.focusView();
```

## Event subscription

The lifecycle callbacks passed to `EditorConfig` are also exposed as public events on the editor instance. Subscribe to them at runtime with `editor.on(eventName, handler)`, and unsubscribe with `editor.off(eventName, handler)`.

| Method | Description |
|--------|-------------|
| `on(eventName, handler)` | Subscribes to a public editor event. Registers an event listener that fires each time the specified event is published. The handler receives the event payload directly. Event names correspond to the config-level callbacks (e.g., `'contentChanged'`, `'focus'`, `'beforePaste'`). Multiple handlers can be registered for the same event. |
| `off(eventName, handler)` | Unsubscribes from a previously registered event listener. Removes the handler that was registered via `on()`. If the handler is not found or was already unsubscribed, this method is a safe no-op. The handler reference passed to `off()` must match the one passed to `on()`. |

```ts
const editor = HeadlessEditor.create({
    extensions: [basicExtensions]
});

// Subscribe to events
editor.on('contentChanged', (args) => {
    console.log('Content updated');
    console.log(editor.getHtml());
});

editor.on('selectionChanged', (args) => {
    console.log('Selection updated');
});

editor.on('focus', () => {
    console.log('Editor focused');
});

editor.on('blur', () => {
    console.log('Editor blurred');
});

// Unsubscribe
const handler = (args) => console.log('change', args);
editor.on('contentChanged', handler);
editor.off('contentChanged', handler);
```
