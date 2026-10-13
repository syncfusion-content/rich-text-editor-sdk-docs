# HeadlessEditor API Reference

This file is the API reference for the Syncfusion TypeScript Headless Editor. It is sourced from the Syncfusion API documentation under `https://ej2.syncfusion.com/documentation/api/headless-editor/`.

> **Source of truth.** The API documentation pages are authoritative for the method signatures, parameter descriptions, and return types. When this file conflicts with the local UG reference files, the API documentation wins for API surface; the local UG files win for conceptual explanations and example usage.

## Table of Contents

- [Overview](#overview)
- [HeadlessEditor class](#headlesseditor-class)
  - [Constructor and factory](#constructor-and-factory)
  - [Properties](#properties)
  - [Methods](#methods)
- [Public types](#public-types)
  - [Command](#command)
  - [CommandContext](#commandcontext)
  - [PMCommandContext](#pmcommandcontext)
  - [NodeResolver](#noderesolver)
  - [SelectionType](#selectiontype)
- [Payloads](#payloads)
  - [DeleteRangePayload](#deleterangepayload)
  - [SetMarkPayload](#setmarkpayload)
- [Command facades](#command-facades)
  - [TypedCommandsFacade](#typedcommandsfacade)
  - [TypedCanFacade](#typedcanfacade)
  - [TypedChain](#typedchain)

## Overview

The Headless Editor API surface is organized around the `HeadlessEditor` class and a set of supporting types. The overview page in the API documentation lists the following public types:

| Name | Description |
|------|-------------|
| `NodeResolver` | Stateless utility for navigating a `DocumentRoot` tree. All methods are pure: they do not mutate the document and always return a new value or `undefined`. |
| `ResizableNodeView` | Pure-DOM resize engine for the Headless Editor. Provides in-place drag-based resizing for atom nodes (images, videos, embeds) without any dependency on ProseMirror or external libraries. |
| `NodeContent` | Fluent builder for content expressions (e.g. `NodeContent.block().oneOrMore()` → `block+`, `NodeContent.inline().zeroOrMore()` → `inline*`). |
| `FileHandler` | Generic file upload service. Manages file lifecycle: paste/drop → upload ID generation → upload orchestration. Writes upload state directly to `UploadStateRegistry` (no EventBus re-publishing). |
| `TableService` | Resolves table, row, and cell context from the headless document. All methods perform pure tree walks (no PM imports). |
| `HeadlessEditor` | Syncfusion's frameworkless rich text editor with complete command control, extension system, and event-driven architecture. |
| `SelectionType` | Discriminant for the kind of selection in the editor. Distinguishes between `Text`, `Node`, `Cell`, `Block`, and `All` selections. |
| `SetMarkPayload` | Payload for the `setMark` command. |
| `PMCommandContext` | Extends the public `CommandContext` with a frozen PM state snapshot captured by the executor at the start of each command invocation. |
| `TypedCanFacade` | Command availability check interface (dry-run surface). All methods mirror `TypedCommandsFacade` but execute as dry-run queries that return `boolean` without dispatching any changes. |
| `TypedChain` | Fluent command chaining interface. Accumulates multiple commands and executes them in a single atomic transaction. |
| `TypedCommandsFacade` | Immediate command execution interface. All methods execute immediately against the current editor state and return a `boolean` indicating success. |
| `Command` | The unit of execution in the command framework. `name` must be unique across the registry. |
| `CommandContext` | Provides all required information to commands during execution. Every command's `canExecute()` and `execute()` methods receive a `CommandContext` instance. |
| `CommandMeta` | Optional metadata for UI rendering, discovery, and accessibility of commands (labels, descriptions, icons, keyboard shortcuts, tags). |
| `ValidationError` | Single reason why a schema or document validation failed. Carries the dot-path of the offending value. |
| `AfterPasteEventArgs` | Payload for `afterPaste` — describes what was actually inserted. |
| `BeforePasteEventArgs` | Payload for `beforePaste` — carries the parsed clipboard content ready for insertion. Set `event.cancel = true` to abort the paste. |
| `PasteContent` | Clipboard content carried by paste events. This is a PM-independent view of the clipboard payload. |
| `ContentChangedEventArgs` | Payload for `contentChanged` — aggregated from `TransactionApplied` + `HistoryRecorded` + `SelectionUpdated` + `RendererInvalidated`. |
| `DocumentChangedEventArgs` | Payload for `documentChanged` — emitted on document-mutating transactions with semantic change information. |

## HeadlessEditor class

`HeadlessEditor` is Syncfusion's frameworkless rich text editor with complete command control, extension system, and event-driven architecture. The Headless Editor provides a decoupled editing engine with no DOM dependencies for initialization, full undo/redo, custom content schemas, extensible node types, and comprehensive keyboard/paste/clipboard handling. Mount into any DOM container and control via the typed command system.

```ts
// Create and mount editor
const editor = HeadlessEditor.create({ schema: mySchema });
editor.mount(document.getElementById('editor'));

// Execute typed commands
editor.commands.toggleBold();
editor.commands.setHeading({ level: 1 });
editor.commands.insertImage({ src: 'image.png' });

// Query editor state
const doc = editor.getDocument();
const selection = editor.getSelection();

// Subscribe to events
editor.on('contentChanged', (args) => console.log('Updated:', args.document));

// Cleanup
editor.destroy();
```

### Constructor and factory

#### `create(config)` (static)

Creates a fully initialized `HeadlessEditor` instance. Performs full bootstrap of the editor including schema compilation, extension loading, command registry initialization, and service layer setup. This method is called directly by applications; the constructor is not public. The returned `HeadlessEditor` is ready for immediate use but does NOT attach to the DOM. Call `mount(container)` to render the editor in the DOM. The editor can be mounted and unmounted multiple times without re-initialization.

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | `EditorConfig` | The editor configuration object containing schema, extensions, event callbacks, and options. |

**Returns:** `HeadlessEditor`

### Properties

#### `commands: TypedCommandsFacade`

Typed proxy for immediate command execution: `editor.commands.toggleBold()`.

### Methods

The method documentation below uses the API-page ordering. Each method shows the parameter table and return type as documented on the API page.

#### `can()`

Returns a facade for dry-run command availability checks. Provides typed methods (`can().toggleBold()`, `can().setHeading({ level: 1 })`, etc.) that evaluate the command's `canExecute()` logic without dispatching any transaction. Useful for toolbar/menu state management and validation. A new facade instance is created per call; the cost is minimal as it wraps the command manager without extra state. Facade creation is intentionally cheap.

**Returns:** `TypedCanFacade`

#### `chain()`

Returns a facade for building and executing chained command sequences. Enables fluent API for command batching: `editor.chain().command1().command2().command3().run()`. All chained commands are collected and executed in a single atomic transaction.

Terminal methods:
- `.run()` — Execute the chain and apply the transaction.
- `.canRun()` — Check if all chained commands are available without executing.

A new `ChainBuilder` and facade are created per call, ensuring independent chains.

**Returns:** `TypedChain`

#### `destroy()`

Destroys the editor and releases all resources. Performs complete teardown in reverse bootstrap order: integration → lifecycleManager → serviceRegistry → eventBus → diagnostics. All event subscriptions are disposed, the DOM view is destroyed, and internal state is cleared. Subsequent calls to `destroy()` are safe no-ops. After calling `destroy()`, the editor instance becomes invalid and should not be used. A new editor must be created via `HeadlessEditor.create()`.

**Returns:** `void`

#### `execute(name, payload?)`

Executes a command by name with optional payload. This is the low-level untyped path. For type safety and IDE autocomplete, use `editor.commands.commandName()` instead (via the typed facade). The command's `canExecute()` is checked first. If it returns `false`, the command is not dispatched and this method returns `false`. If `canExecute` is `true`, `execute()` is called and returns `true` (assuming a transaction was dispatched).

**Returns:** `boolean`

#### `focusView()`

Programmatically focus the editor view. Useful for programmatic interaction when the editor loses focus (e.g., after a toolbar button click). The focus is placed at the current selection position.

**Returns:** `void`

#### `getDocument()`

Returns the current document as a Syncfusion-native `DocumentRoot` object. The returned `DocumentRoot` is a pure TypeScript type containing the full node tree, with all nodes having stable IDs and no ProseMirror types exposed. This snapshot reflects the current state at the time of the call. Throws `EditorLifecycleError` if the editor has been destroyed.

**Returns:** `DocumentRoot`

#### `getFileHandler()`

Returns the `FileHandler` instance for file upload operations. The `FileHandler` is lazily initialized on first access and manages the complete file lifecycle: paste/drop detection, upload ID generation, handler invocation, and event emission. This method provides low-level access for advanced use cases; most applications use `setFileUploadHandler()` instead.

**Returns:** `FileHandler`

#### `getHtml()`

Serializes the entire document to HTML. Uses the schema's `parseDOM` and serialization rules to generate valid HTML. All extension node specs and mark specs contribute to serialization via their `toDOM` specifications.

**Returns:** `string`

#### `getSelectedBlocks()`

Returns all block-level nodes that intersect the current selection. For a cursor or single selection, returns a single block. For a range spanning multiple blocks, returns all blocks in the range. Each returned node includes its live DOM element (if mounted) for toolbar positioning.

**Returns:** `SelectedNode[]`

#### `getSelectedCells()`

Returns all currently selected table cells (for `CellSelection`). For non-`CellSelection`, returns an empty array. Each cell includes its live DOM element (if mounted), row and table references, and 0-based coordinates.

**Returns:** `SelectedCell[]`

#### `getSelectedLeafNodes()`

Returns all leaf nodes (atom nodes with no children: image, horizontal rule, hard break, etc.) within the current selection range. Each returned node includes its live DOM element (if mounted) for toolbar positioning or bulk operations.

**Returns:** `SelectedNode[]`

#### `getSelection()`

Returns the current selection range as absolute document positions. Provides the `from` and `to` positions (in document offset units) and an `empty` flag indicating whether the selection is a collapsed cursor or spans text. All positions are absolute offsets relative to the document root.

**Returns:** `Object`

#### `getSelectionContext()`

Returns the formatting marks and structural nodes relevant to the current selection. Marks are limited to those present at the selection start. A mark is mixed when its attributes differ or it is absent from part of the range. Structural wrapper nodes that do not represent toolbar context are omitted.

**Returns:** `SelectionContext`

#### `getSelectionText()`

Returns the plain-text content of the current selection. Extracts text from the current selection range, preserving newlines between blocks. Returns an empty string if no text is selected (selection is collapsed) or if the editor has been destroyed.

**Returns:** `string`

#### `getText()`

Returns the plain-text content of the entire document. Strips all formatting and marks, returning only text content.

**Returns:** `string`

#### `mount(container)`

Mounts the editor into the specified DOM container element. Creates the ProseMirror editor view within the container and initializes event listeners. The container element must be a valid `HTMLElement` in the document. After mounting, the editor is interactive and ready for user input and command execution.

Autofocus behavior is controlled by `config.autofocus`:
- `true` or `'auto'` — Focuses at the last saved selection if available, otherwise at document start.
- `'start'` — Focuses at the beginning of the document.
- `'end'` — Focuses at the end of the document.
- `false` or `undefined` — No autofocus (editor container must be manually focused if needed).

The editor can be mounted, unmounted (`unmount()`), and re-mounted multiple times on the same instance.

| Parameter | Type | Description |
|-----------|------|-------------|
| `container` | `HTMLElement` | The DOM element that will contain the editor view. Must be a valid `HTMLElement` present in the document. |

**Returns:** `void`

#### `off(eventName, handler)`

Unsubscribes from a previously registered event listener. Removes the handler that was registered via `on()`. If the handler is not found or was already unsubscribed, this method is a safe no-op.

| Parameter | Type | Description |
|-----------|------|-------------|
| `eventName` | `string` | The public event name to unsubscribe from (must match the name passed to `on()`). |
| `handler` | `Object` | The exact callback function that was passed to `on()`. |

**Returns:** `void`

#### `on(eventName, handler)`

Subscribes to a public editor event. Registers an event listener that fires each time the specified event is published. The handler receives the event payload directly. Event names correspond to the config-level callbacks (e.g., `'contentChanged'`, `'focus'`, `'beforePaste'`). Multiple handlers can be registered for the same event. Call `off()` to unsubscribe.

| Parameter | Type | Description |
|-----------|------|-------------|
| `eventName` | `string` | The public event name (e.g., `'contentChanged'`, `'focus'`, `'beforePaste'`). |
| `handler` | `Object` | Callback invoked with the event payload each time the event fires. |

**Returns:** `void`

#### `restoreSelection(snapshot?)`

Applies a previously captured selection snapshot to the current editor state. Restores a saved selection from a `SelectionSnapshot`. If no snapshot is provided, uses the most recently held snapshot from `saveSelection()`. If an explicit snapshot is provided, it updates the editor's held snapshot. Success depends on snapshot freshness (stale snapshots may fail if document structure changed). Restore operations do NOT consume the snapshot — only command execution consumes. Calling `restoreSelection()` followed by a command is equivalent to a single command execution with automatic selection restoration.

**Returns:** `boolean`

#### `saveSelection()`

Captures and stores the current selection as a PM-free `SelectionSnapshot`. Creates a persistent snapshot of the current selection (text range, node selection, or cell selection) that survives DOM events like `blur`. The snapshot is retained by the editor and automatically applied before the next command execution, making toolbar button clicks (which blur the editor) safe. Multiple calls to `saveSelection()` replace the previously held snapshot. The snapshot is independent of any command chain or execution. This is essential for maintaining selection across focus changes in toolbar-based editors where clicking a toolbar button blurs the editor, causing focus loss and selection reset.

**Returns:** `SelectionSnapshot`

#### `setContent(html)`

Replaces the entire document content with the supplied HTML markup. The HTML is parsed through the same schema-driven pipeline used at create-time (`EditorConfig.content`): every `parseDOM` rule contributed by the loaded extensions is applied, then the parsed tree replaces the current document body in **one transaction**.

Because replacement is a single transaction on the live editor state:
- The editor instance, PM view, plugins, and undo stack are preserved — no destroy/re-create, no remount.
- `NodeViews` for the old document are destroyed and `NodeViews` for the new document are created by the normal PM view update.
- `contentChanged` and `documentChanged` (action `'Replaced'`) fire once.
- The replacement is a single undo step; `undo()` restores the previous content.
- The selection is reset to the start of the new document.
- All-or-nothing: when parsing fails, a diagnostic warning is emitted, the existing document and selection are left untouched, no events fire, and `false` is returned.

| Parameter | Type | Description |
|-----------|------|-------------|
| `html` | `string` | The HTML markup for the new document. An empty or whitespace-only string resets the document to a single empty paragraph. |

**Returns:** `boolean`

#### `setDocument(doc)`

Replaces the entire document content with the supplied structured document. The structured tree replaces the current document body in **one transaction**, with the same lifecycle guarantees as `setContent()`: view/plugins/undo preserved, `NodeViews` swapped by the normal PM view update, single undo step, selection reset to document start. All-or-nothing: when the document is invalid (unknown node types, unregistered marks), a diagnostic warning is emitted, the existing document and selection are left untouched, no events fire, and `false` is returned.

| Parameter | Type | Description |
|-----------|------|-------------|
| `doc` | `DocumentRoot` | The new document. The live root id is taken from the supplied document; child node ids are preserved when present and generated when absent. |

**Returns:** `boolean`

#### `setFileUploadHandler(handler)`

Registers a file upload handler for paste and drag-drop file operations. The provided handler is invoked whenever files are pasted or dropped into the editor. This method must be called before file paste/drop operations begin to have any effect. Calling it multiple times replaces the previous handler. The `FileUploadHandler` receives a file object and metadata, and must return a `Promise` resolving to the uploaded file URL or resource identifier.

| Parameter | Type | Description |
|-----------|------|-------------|
| `handler` | `FileUploadHandler` | The upload handler implementation with an `upload()` method that accepts a file request and returns a `Promise` with the uploaded URL. |

**Returns:** `void`

#### `setOptions(options)`

Updates safe editor configuration properties after initialization. Only a subset of properties can be updated after mount. Structural properties (`document`, `content`, `extensions`) require full re-initialization and cannot be changed.

Supported properties:
- `readOnly` — Update editor editability (immediately reflected if mounted).
- `autofocus` — Update autofocus behavior (applies on next mount if unmounted).
- `autoSaveSelectionOnBlur` — Update blur selection auto-save.
- `enableInputRules` — Update input rules enabled state.

Unsupported properties (structural, require re-init): `document`, `content`, `extensions`, `schema`.

| Parameter | Type | Description |
|-----------|------|-------------|
| `options` | `Partial<...>` | Configuration properties to update. |

**Returns:** `void`

#### `unmount()`

Unmounts the editor from the DOM without destroying the editor instance. This method detaches the ProseMirror view from the DOM container but preserves all editor state (document, selection, history). The editor can be re-mounted to a container (same or different) using `mount()` without loss of state or configuration. All event listeners attached to the DOM are removed and the view is disposed. The editor instance remains valid and can be used to query state via `getDocument()`, `getSelection()`, etc.

**Returns:** `void`

## Public types

### Command

`Command` — the unit of execution in the command framework. `name` must be unique across the registry. Success is determined by whether `context.dispatch()` was called — not by a return value. Commands return `void`.

| Method | Description | Returns |
|--------|-------------|---------|
| `canExecute` | Optional guard. When defined, `CommandExecutor` calls this before `execute`. If it returns `false`, execution is blocked. | `boolean` |
| `execute` | Perform the command. Call `context.dispatch(tr)` to commit a state change. `CommandExecutor` detects dispatch via the `DispatchRecorder` — no return value needed. | `void` |

### CommandContext

`CommandContext` — provides all required information to commands during execution. Every command's `canExecute()` and `execute()` methods receive a `CommandContext` instance. This context exposes the current editor state, selection, document, and a `dispatch` function for committing transaction changes. All types within `CommandContext` are Syncfusion-owned; no ProseMirror types are exposed.

| Property | Type | Description |
|----------|------|-------------|
| `dispatch` | `Object` | Dispatch a transaction to apply changes to the document and selection. This is the only path for committing state changes. Internally wraps `IntegrationManager.dispatch()`. All transaction changes are validated and published to subscribers before returning. ProseMirror types are encapsulated and stay inside `src/pm/`. |
| `document` | `DocumentRoot` | The current document root and full node tree. Convenience accessor equivalent to `editorState.document`. |
| `editor` | `EditorRef` | Reference to the `HeadlessEditor` instance for accessing commands, events, or other APIs. |
| `editorState` | `EditorState` | The current Syncfusion editor state snapshot (document, selection, schema version). |
| `selection` | `Selection` | The current text, node, cell, or block selection. Convenience accessor equivalent to `editorState.selection`. |

### PMCommandContext

`PMCommandContext` — extends the public `CommandContext` with a frozen PM state snapshot captured by the executor at the start of each command invocation.

Builtins use `ctx.pmState` to:
- Read schema: `ctx.pmState.schema`
- Fork transactions: `ctx.pmState.tr`
- Read selection: `ctx.pmState.selection`
- Read document: `ctx.pmState.doc`

This is a snapshot — not the live `IntegrationManager` state. For `ChainExecutor` it is the virtual state (reflecting all prior chain steps).

| Property | Type | Description |
|----------|------|-------------|
| `dispatch` | `Object` | Same as `CommandContext.dispatch`. |
| `document` | `DocumentRoot` | Same as `CommandContext.document`. |
| `editor` | `EditorRef` | Same as `CommandContext.editor`. |
| `editorState` | `EditorState` | Same as `CommandContext.editorState`. |
| `pmState` | `PMEditorState` | Frozen PM state snapshot at the start of this command's execution. Use this — do NOT reach for `IntegrationManager`. |
| `selection` | `Selection` | Same as `CommandContext.selection`. |

### NodeResolver

`NodeResolver` — stateless utility for navigating a `DocumentRoot` tree. All methods are pure: they do not mutate the document and always return a new value or `undefined`.

| Method | Description | Returns |
|--------|-------------|---------|
| `childIndexOf(parent, childNode)` | Returns the zero-based child index of `childNode` within its parent, or `-1` when not found. | `number` |
| `findFirstByType(root, nodeType)` | Finds the first node whose type matches the given `nodeType` in the document tree (depth-first, pre-order). Returns `undefined` if not found. | `EditorNode \| undefined` |
| `findNodesByType(root, nodeType)` | Collects all nodes whose type matches `nodeType`. Returns an empty array when no matches exist. | `EditorNode[]` |
| `findParent(root, target)` | Finds the parent node of `target`. Returns `undefined` when `target` is not found or is the root. | `EditorNode \| undefined` |

### SelectionType

`SelectionType` — Discriminant for the kind of selection in the editor. Distinguishes between different selection modes:

- `Text` — Cursor or highlighted text within a node
- `Node` — Single inline node selected (e.g., image, link)
- `Cell` — Table cell or cell range selected
- `Block` — Entire block-level node selected (e.g., paragraph, heading)
- `All` — Entire document selected

## Payloads

### DeleteRangePayload

Payload for the `deleteRange` command.

| Property | Type | Description |
|----------|------|-------------|
| `from` | `number` | Start document position (inclusive). |
| `to` | `number` | End document position (exclusive). |

### SetMarkPayload

Payload for the `setMark` command.

| Property | Type | Description |
|----------|------|-------------|
| `attrs` | `Record<string, unknown>` | Attributes to apply to the mark. |
| `markType` | `string` | The target mark type. |

## Command facades

### TypedCommandsFacade

`TypedCommandsFacade` — Immediate command execution interface. All methods execute immediately against the current editor state and return a `boolean` indicating success. Commands that require parameters accept a payload object. Commands are only executed if they are available at the current cursor position or selection. For dry-run availability checks (without execution), use `editor.can().*` instead. For fluent chaining of multiple commands in a single transaction, use `editor.chain().*`.

The complete list of methods on `TypedCommandsFacade`:

| Method | Description | Returns |
|--------|-------------|---------|
| `addCaption(payload?)` | Add a caption to the currently selected image. | `boolean` |
| `backspaceCollapsible` | Backspace handling in collapsible sections. Returns `true` if handled. | `boolean` |
| `clearCodeBlock` | Exit code block formatting and convert to paragraph. | `boolean` |
| `clearFormatting` | Remove all inline formatting (bold, italic, color, etc.) from the selection. | `boolean` |
| `clearSelection` | Clear the current selection (cursor remains). | `boolean` |
| `collapse(payload?)` | Collapse (close) an expandable section. | `boolean` |
| `deleteCollapsible` | Delete the current collapsible section. | `boolean` |
| `deleteColumn` | Delete the current table column. | `boolean` |
| `deleteListItem` | Delete the current list item and preserve child items. | `boolean` |
| `deleteNode(payload)` | Delete a specific node by ID or position. | `boolean` |
| `deleteRange(payload)` | Delete a range of content specified by position. | `boolean` |
| `deleteRow` | Delete the current table row. | `boolean` |
| `deleteTable` | Delete the table containing the current cursor. | `boolean` |
| `deleteText(payload?)` | Delete text from the current selection. | `boolean` |
| `enterCollapsible` | Enter a collapsible section at the cursor. | `boolean` |
| `exitCode` | Exit a code block and return to normal editing. | `boolean` |
| `expand(payload?)` | Expand (open) a collapsed section. | `boolean` |
| `indent` | Increase indentation of the current block. | `boolean` |
| `indentCodeBlock` | Increase indentation level in a code block. | `boolean` |
| `indentListItem` | Increase indentation of the current list item. | `boolean` |
| `inputRuleInsert` | Insert content based on an input rule match. | `boolean` |
| `inputRuleMark` | Apply a mark based on an input rule match. | `boolean` |
| `inputRuleTransform` | Transform content based on an input rule match. | `boolean` |
| `inputRuleWrap` | Wrap content based on an input rule match. | `boolean` |
| `insertColumnAfter` | Insert a new column after the current column. | `boolean` |
| `insertColumnBefore` | Insert a new column before the current column. | `boolean` |
| `insertImage(payload?)` | Insert one or more images at the cursor position. | `boolean` |
| `insertNode(payload)` | Insert a node at the cursor position. | `boolean` |
| `insertParagraphInCell` | Insert a paragraph inside a table cell. | `boolean` |
| `insertRowAfter` | Insert a new row after the current row. | `boolean` |
| `insertRowBefore` | Insert a new row before the current row. | `boolean` |
| `insertTable(payload?)` | Insert a table at the cursor position. | `boolean` |
| `insertText(payload)` | Insert text at the cursor position. | `boolean` |
| `joinListBackward` | Join current list item with the previous list item. | `boolean` |
| `mergeCollapsibleBackward` | Merge the current collapsible with the previous one. | `boolean` |
| `mergeCollapsibleForward` | Merge the current collapsible with the next one. | `boolean` |
| `moveNode(payload)` | Move a node to a new position in the document. | `boolean` |
| `moveToNextCell` | Move selection to the next table cell. | `boolean` |
| `moveToPreviousCell` | Move selection to the previous table cell. | `boolean` |
| `outdent` | Decrease indentation of the current block. | `boolean` |
| `outdentCodeBlock` | Decrease indentation level in a code block. | `boolean` |
| `outdentListItem` | Decrease indentation of the current list item. | `boolean` |
| `redo` | Redo the last undone change. | `boolean` |
| `removeCaption` | Remove the caption from the currently selected image. | `boolean` |
| `removeImage` | Remove the currently selected image. | `boolean` |
| `replaceText(payload)` | Replace selected text with new content. | `boolean` |
| `selectAll` | Select all content in the document. | `boolean` |
| `setBulletListType(payload)` | Set the style/type of a bullet list (e.g., `disc`, `square`). | `boolean` |
| `setCellAttribute(payload)` | Set an attribute (e.g., colspan, rowspan) on the current table cell. | `boolean` |
| `setCodeBlock(payload?)` | Convert current block to a code block. | `boolean` |
| `setCodeBlockLanguage(payload)` | Set or change the language syntax highlighting in a code block. | `boolean` |
| `setColor(payload)` | Apply color to selected text (hex, rgb, or named). | `boolean` |
| `setFontFamily(payload)` | Set font family for selected text. | `boolean` |
| `setFontSize(payload)` | Set font size for selected text. | `boolean` |
| `setHardBreak` | Insert a hard line break (in code blocks or paragraphs). | `boolean` |
| `setHeading(payload)` | Convert current block to a heading (level 1–6). | `boolean` |
| `setHighlight(payload)` | Apply background highlight color to selected text. | `boolean` |
| `setHorizontalRule` | Insert a horizontal rule (divider) at the cursor position. | `boolean` |
| `setImageAlign(payload)` | Set alignment for the currently selected image (`left`, `center`, `right`). | `boolean` |
| `setImageDimension(payload)` | Set width and height for the currently selected image (in pixels). | `boolean` |
| `setImageDisplay(payload)` | Set display mode for the currently selected image (`inline`, `block`). | `boolean` |
| `setImageWrap(payload)` | Set text wrapping behavior for the currently selected image (`none`, `tight`, `square`). | `boolean` |
| `setLink(payload)` | Apply or update a hyperlink on selected text. | `boolean` |
| `setOrderedListType(payload)` | Set the style/type of an ordered list (e.g., `decimal`, `roman`). | `boolean` |
| `setParagraph` | Convert current block to a paragraph. | `boolean` |
| `setSelection(payload)` | Set the cursor/selection to a specific position or range. | `boolean` |
| `setTextAlign(payload)` | Set text alignment for the current block (`left`, `center`, `right`, `justify`). | `boolean` |
| `splitBlock` | Split the current block at the cursor position. | `boolean` |
| `splitCollapsible` | Split a collapsible section at the cursor. | `boolean` |
| `splitListItem` | Split a list item at the cursor, creating a sibling item. | `boolean` |
| `toLowerCase` | Convert selected text to lowercase. | `boolean` |
| `toUpperCase` | Convert selected text to uppercase. | `boolean` |
| `toggleBlockQuote` | Toggle block quote formatting on the current block. | `boolean` |
| `toggleBold` | Toggle bold (strong) formatting on the current selection. | `boolean` |
| `toggleBulletList(payload?)` | Toggle bullet (unordered) list for the current block. | `boolean` |
| `toggleCallout(payload?)` | Toggle callout (highlighted note) formatting on the current block. | `boolean` |
| `toggleCaption(payload?)` | Toggle a caption on the currently selected image. | `boolean` |
| `toggleCodeBlock(payload?)` | Toggle code block on current block. | `boolean` |
| `toggleCodeMark` | Toggle inline code formatting on the current selection. | `boolean` |
| `toggleCollapsible(payload?)` | Toggle collapsible (expandable) section on the current block. | `boolean` |
| `toggleHeaderColumn` | Toggle the header column status of the current column. | `boolean` |
| `toggleHeaderRow` | Toggle the header row status of the current row. | `boolean` |
| `toggleItalic` | Toggle italic (emphasis) formatting on the current selection. | `boolean` |
| `toggleOrderedList(payload?)` | Toggle ordered (numbered) list for the current block. | `boolean` |
| `toggleStrikethrough` | Toggle strikethrough formatting on the current selection. | `boolean` |
| `toggleSubscript` | Toggle subscript formatting on the current selection. | `boolean` |
| `toggleSuperscript` | Toggle superscript formatting on the current selection. | `boolean` |
| `toggleTaskChecked(payload?)` | Toggle the checked state of a task list item. | `boolean` |
| `toggleTaskList(payload?)` | Toggle task list (checklist) for the current block. | `boolean` |
| `toggleUnderline` | Toggle underline formatting on the current selection. | `boolean` |
| `undo` | Undo the last editor change. | `boolean` |
| `unsetColor` | Remove color formatting from selected text. | `boolean` |
| `unsetFontFamily` | Remove custom font family from selected text. | `boolean` |
| `unsetFontSize` | Remove custom font size from selected text. | `boolean` |
| `unsetHighlight` | Remove background highlight from selected text. | `boolean` |
| `unsetLink` | Remove hyperlink formatting from selected text. | `boolean` |
| `unsetTextAlign` | Remove custom text alignment from the current block. | `boolean` |
| `updateImage(payload)` | Update attributes of the currently selected image. | `boolean` |

### TypedCanFacade

`TypedCanFacade` — Command availability check interface (dry-run surface). All methods mirror `TypedCommandsFacade` but execute as dry-run queries that return `boolean` without dispatching any changes to the editor state. Use this to check if a command is available before offering it in a toolbar or menu, or to enable/disable UI controls. No document changes occur. Ideal for toolbar button enable/disable logic and command availability inspection.

The complete list of methods on `TypedCanFacade` (all return `boolean`):

`addCaption`, `backspaceCollapsible`, `clearCodeBlock`, `clearFormatting`, `clearSelection`, `collapse`, `deleteCollapsible`, `deleteColumn`, `deleteListItem`, `deleteNode`, `deleteRange`, `deleteRow`, `deleteTable`, `deleteText`, `enterCollapsible`, `exitCode`, `expand`, `indent`, `indentCodeBlock`, `indentListItem`, `inputRuleInsert`, `inputRuleMark`, `inputRuleTransform`, `inputRuleWrap`, `insertColumnAfter`, `insertColumnBefore`, `insertImage`, `insertNode`, `insertParagraphInCell`, `insertRowAfter`, `insertRowBefore`, `insertTable`, `insertText`, `joinListBackward`, `mergeCollapsibleBackward`, `mergeCollapsibleForward`, `moveNode`, `moveToNextCell`, `moveToPreviousCell`, `outdent`, `outdentCodeBlock`, `outdentListItem`, `redo`, `removeCaption`, `removeImage`, `replaceText`, `selectAll`, `setBulletListType`, `setCellAttribute`, `setCodeBlock`, `setCodeBlockLanguage`, `setColor`, `setFontFamily`, `setFontSize`, `setHardBreak`, `setHeading`, `setHighlight`, `setHorizontalRule`, `setImageAlign`, `setImageDimension`, `setImageDisplay`, `setImageWrap`, `setLink`, `setOrderedListType`, `setParagraph`, `setSelection`, `setTextAlign`, `splitBlock`, `splitCollapsible`, `splitListItem`, `toLowerCase`, `toUpperCase`, `toggleBlockQuote`, `toggleBold`, `toggleBulletList`, `toggleCallout`, `toggleCaption`, `toggleCodeBlock`, `toggleCodeMark`, `toggleCollapsible`, `toggleHeaderColumn`, `toggleHeaderRow`, `toggleItalic`, `toggleOrderedList`, `toggleStrikethrough`, `toggleSubscript`, `toggleSuperscript`, `toggleTaskChecked`, `toggleTaskList`, `toggleUnderline`, `undo`, `unsetColor`, `unsetFontFamily`, `unsetFontSize`, `unsetHighlight`, `unsetLink`, `unsetTextAlign`, `updateImage`.

### TypedChain

`TypedChain` — Fluent command chaining interface. Accumulates multiple commands and executes them in a single atomic transaction. All methods return `TypedChain` for method chaining. Use the terminal methods `.run()` and `.canRun()` to execute or check the accumulated chain. Useful for complex multi-step operations that should appear as a single undo event to the user, or for optimizing performance when multiple changes are needed. Note: `undo()` and `redo()` are intentionally NOT available on chains — they apply to history, not individual documents.

#### Terminal methods

| Method | Description | Returns |
|--------|-------------|---------|
| `run()` | Execute the accumulated chain commands in a single atomic transaction. Runs all accumulated commands together, appearing as a single undo event to the user. Returns a result indicating success or failure of the chain execution. | `ChainResult` |
| `canRun()` | Check if the accumulated chain commands can execute without applying changes. Performs a dry-run validation of all accumulated commands without modifying editor state. Useful for enabling/disabling UI controls based on command availability. | `boolean` |

#### Chainable methods (each returns `TypedChain`)

The chainable methods on `TypedChain` mirror the methods on `TypedCommandsFacade` with the addition of a `payload` parameter where applicable. The full list:

`addCaption`, `backspaceCollapsible`, `clearCodeBlock`, `clearFormatting`, `clearSelection`, `collapse`, `deleteCollapsible`, `deleteColumn`, `deleteListItem`, `deleteNode(payload: DeleteNodePayload)`, `deleteRange(payload: DeleteRangePayload)`, `deleteRow`, `deleteTable`, `deleteText(payload: DeleteTextPayload)`, `enterCollapsible`, `exitCode`, `expand`, `indent`, `indentCodeBlock`, `indentListItem`, `inputRuleInsert(payload: InputRuleInsertPayload)`, `inputRuleMark(payload: InputRuleMarkPayload)`, `inputRuleTransform(payload: InputRuleTransformPayload)`, `inputRuleWrap(payload: InputRuleWrapPayload)`, `insertColumnAfter`, `insertColumnBefore`, `insertImage(payload: InsertImagePayload)`, `insertNode(payload: InsertNodePayload)`, `insertParagraphInCell`, `insertRowAfter`, `insertRowBefore`, `insertTable(payload: InsertTablePayload)`, `insertText(payload: InsertTextPayload)`, `joinListBackward`, `mergeCollapsibleBackward`, `mergeCollapsibleForward`, `moveNode(payload: MoveNodePayload)`, `moveToNextCell`, `moveToPreviousCell`, `outdent`, `outdentCodeBlock`, `outdentListItem`, `removeCaption`, `removeImage`, `replaceText(payload: ReplaceTextPayload)`, `selectAll`, `setBulletListType(payload: SetBulletListTypePayload)`, `setCellAttribute(payload: SetCellAttributePayload)`, `setCodeBlock`, `setCodeBlockLanguage(payload: SetCodeBlockLanguagePayload)`.
