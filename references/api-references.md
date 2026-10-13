# HeadlessEditor API Reference

This file is the API reference for the Syncfusion TypeScript Headless Editor. It is sourced from the Syncfusion API documentation under `https://ej2.syncfusion.com/documentation/api/headless-editor/`.

> **Source of truth.** The API documentation pages are authoritative for the method signatures, parameter descriptions, and return types. When this file conflicts with the local UG reference files, the API documentation wins for API surface; the local UG files win for conceptual explanations and example usage.

## Table of Contents

- [Overview](#overview)
- [HeadlessEditor class](#headlesseditor-class)
  - [Constructor and factory](#constructor-and-factory)
  - [Properties](#properties)
  - [Methods](#methods)
- [Configuration](#configuration)
  - [EditorConfig](#editorconfig)
- [Document model](#document-model)
  - [DocumentRoot](#documentroot)
- [Public types](#public-types)
  - [Command](#command)
  - [CommandContext](#commandcontext)
  - [PMCommandContext](#pmcommandcontext)
  - [NodeResolver](#noderesolver)
  - [SelectionType](#selectiontype)
  - [CommandMeta](#commandmeta)
  - [ChainResult](#chainresult)
  - [ValidationError](#validationerror)
- [Payloads](#payloads)
  - [DeleteRangePayload](#deleterangepayload)
  - [SetMarkPayload](#setmarkpayload)
- [Command facades](#command-facades)
  - [TypedCommandsFacade](#typedcommandsfacade)
  - [TypedCanFacade](#typedcanfacade)
  - [TypedChain](#typedchain)
- [Event payloads](#event-payloads)
  - [AfterPasteEventArgs](#afterpasteeventargs)
  - [BeforePasteEventArgs](#beforepasteeventargs)
  - [PasteContent](#pastecontent)
  - [ContentChangedEventArgs](#contentchangedeventargs)
  - [DocumentChangedEventArgs](#documentchangedeventargs)
  - [DocumentChangeAction](#documentchangeaction)
- [File upload event payloads](#file-upload-event-payloads)
  - [BeforeFileUploadEventArgs](#beforefileuploadeventargs)
  - [FileReceivedEventArgs](#filereceivedeventargs)
- [Resize event payloads](#resize-event-payloads)
  - [ResizeEventArgs](#resizeeventargs)
  - [ResizeStartEventArgs](#resizestarteventargs)
  - [ResizeStopEventArgs](#resizestopeventargs)
  - [ResizingEventArgs](#resizingeventargs)
- [Clipboard](#clipboard)
  - [ClipboardContent](#clipboardcontent)
  - [ClipboardOptions](#clipboardoptions)
  - [ClipboardTransformContext](#clipboardtransformcontext)

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

`addCaption`, `backspaceCollapsible`, `clearCodeBlock`, `clearFormatting`, `clearSelection`, `collapse`, `deleteCollapsible`, `deleteColumn`, `deleteListItem`, `deleteNode(payload: DeleteNodePayload)`, `deleteRange(payload: DeleteRangePayload)`, `deleteRow`, `deleteTable`, `deleteText(payload: DeleteTextPayload)`, `enterCollapsible`, `exitCode`, `expand`, `indent`, `indentCodeBlock`, `indentListItem`, `inputRuleInsert(payload: InputRuleInsertPayload)`, `inputRuleMark(payload: InputRuleMarkPayload)`, `inputRuleTransform(payload: InputRuleTransformPayload)`, `inputRuleWrap(payload: InputRuleWrapPayload)`, `insertColumnAfter`, `insertColumnBefore`, `insertImage(payload: InsertImagePayload)`, `insertNode(payload: InsertNodePayload)`, `insertParagraphInCell`, `insertRowAfter`, `insertRowBefore`, `insertTable(payload: InsertTablePayload)`, `insertText(payload: InsertTextPayload)`, `joinListBackward`, `mergeCollapsibleBackward`, `mergeCollapsibleForward`, `moveNode(payload: MoveNodePayload)`, `moveToNextCell`, `moveToPreviousCell`, `outdent`, `outdentCodeBlock`, `outdentListItem`, `removeCaption`, `removeImage`, `replaceText(payload: ReplaceTextPayload)`, `selectAll`, `setBulletListType(payload: SetBulletListTypePayload)`, `setCellAttribute(payload: SetCellAttributePayload)`, `setCodeBlock`, `setCodeBlockLanguage(payload: SetCodeBlockLanguagePayload)`, `setColor(payload: SetColorPayload)`, `setFontFamily(payload: SetFontFamilyPayload)`, `setFontSize(payload: SetFontSizePayload)`, `setHardBreak`, `setHeading(payload: SetHeadingPayload)`, `setHighlight(payload: SetHighlightPayload)`, `setHorizontalRule`, `setImageAlign(payload: SetImageAlignPayload)`, `setImageDimension(payload: SetImageDimensionPayload)`, `setImageDisplay(payload: SetImageDisplayPayload)`, `setImageWrap(payload: SetImageWrapPayload)`, `setLink(payload: SetLinkPayload)`, `setMark(payload: SetMarkPayload)`, `setOrderedListType(payload: SetOrderedListTypePayload)`, `setParagraph`, `setSelection(payload: SetSelectionPayload)`, `setTextAlign(payload: SetTextAlignPayload)`, `splitBlock`, `splitCollapsible`, `splitListItem`, `toggleBlockQuote`, `toggleBold`, `toggleBulletList(payload: ToggleBulletListPayload)`, `toggleCallout(payload: ToggleCalloutPayload)`, `toggleCaption(payload: ToggleCaptionPayload)`, `toggleCodeBlock`, `toggleCodeMark`, `toggleCollapsible(payload: ToggleCollapsiblePayload)`, `toggleHeaderColumn`, `toggleHeaderRow`, `toggleItalic`, `toggleMark(payload: ToggleMarkPayload)`, `toggleOrderedList(payload: ToggleOrderedListPayload)`, `toggleStrikethrough`, `toggleSubscript`, `toggleSuperscript`, `toggleTaskChecked(payload: ToggleTaskCheckedPayload)`, `toggleTaskList(payload: ToggleTaskListPayload)`, `toggleUnderline`, `unsetColor`, `unsetFontFamily`, `unsetFontSize`, `unsetHighlight`, `unsetLink`, `unsetTextAlign`, `updateImage(payload: UpdateImagePayload)`.

## Configuration

### EditorConfig

The public configuration object for creating a Headless Editor instance. Provides a declarative way to configure editor behavior, initial content, extensions, clipboard handling, file upload, and lifecycle event handlers. Contains Syncfusion-owned types only — no implementation-specific or ProseMirror types are exposed.

```ts
const editor = new HeadlessEditor({
    content: '<h1>Welcome</h1>',
    extensions: [boldExtension, italicExtension],
    enableInputRules: true,
    autoSaveSelectionOnBlur: true,
    contentChanged: (args) => console.log('Content updated')
});
```

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `content` | `string` | Initial document content as HTML markup. Convenience property for importing HTML content (templates, copy-paste, or migration scenarios). Read once at creation. To replace the content of a live editor later, use `editor.setContent(html)`. Requires an HTML content parser extension to be loaded. If `document` is also provided, it takes precedence and `content` is ignored. |
| `document` | `DocumentRoot` | Initial document content as a structured object. Use this when you have pre-built document data. Read once at creation. To replace the document of a live editor later, use `editor.setDocument(doc)`. If both `document` and `content` are provided, `document` takes precedence. |
| `extensions` | `ExtensionDefinition[]` | Array of extensions that provide formatting, blocks, and behaviors. |
| `autofocus` | `boolean` | Auto-focus the editor when mounted. `true` / `'auto'`: focus at the last known selection (or start if none). `'start'`: focus at document beginning. `'end'`: focus at document end. `undefined`: no auto-focus (default). |
| `readOnly` | `boolean` | Render editor in read-only mode. When enabled, all mutations are blocked. Content is viewable only. Commands execute but do not modify state. |
| `enableInputRules` | `boolean` | Enable automatic formatting from text patterns. When enabled, typing patterns like `**text**`, `# heading`, or `> quote` are automatically converted. Commands always work regardless of this setting. |
| `enableTabKey` | `boolean` | Enables Tab and Shift+Tab keyboard behavior. |
| `autoSaveSelectionOnBlur` | `boolean` | Automatically save selection when editor loses focus. Essential for toolbar-based editors where toolbar clicks blur the editor. |
| `clipboard` | `ClipboardOptions` | Clipboard transformation hooks for product-level paste policy. |
| `fileUploadHandler` | `FileUploadHandler` | File upload handler for processing files. Must be provided to enable file upload functionality. |
| `created` | `Object` (callback) | Invoked once after the editor is fully initialized and ready for use. |
| `destroyed` | `Object` (callback) | Invoked before the editor starts its teardown sequence. |
| `contentChanged` | `Object` (callback) | Invoked after content is modified (document change committed). |
| `documentChanged` | `Object` (callback) | Invoked after the document is modified (document change committed). |
| `selectionChanged` | `Object` (callback) | Invoked when the cursor or selection moves (without document change). |
| `focus` | `Object` (callback) | Invoked when the editor gains DOM focus. |
| `blur` | `Object` (callback) | Invoked when the editor loses DOM focus. |
| `beforePaste` | `Object` (callback) | Invoked before pasted content is inserted into the document. |
| `afterPaste` | `Object` (callback) | Invoked after pasted content has been inserted into the document. |
| `beforeFileUpload` | `Object` (callback) | Invoked before a file is uploaded. |
| `fileReceived` | `Object` (callback) | Invoked after a file is received. |
| `resizeStart` | `Object` (callback) | Invoked before a resize operation starts on a resizable element. Set `cancel` to `true` in the event arguments to prevent the resize. |
| `resizeStop` | `Object` (callback) | Invoked when a resize operation on a resizable element completes. |
| `resizing` | `Object` (callback) | Invoked for every dimension update during an active resize operation. |

## Document model

### DocumentRoot

`DocumentRoot` — the top-level container for the entire document. Always has `type: 'document'`.

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `attrs` | `Record` | Node attributes (alignment, indent, color, etc.). |
| `children` | `EditorNode[]` | Child nodes — empty array for leaf nodes. |
| `marks` | `Mark[]` | Marks applied to this node (for block-level mark support). |
| `schemaVersion` | `number` | Schema version — used for future migration handling. |

## Public types

### CommandMeta

`CommandMeta` — optional metadata for UI rendering, discovery, and accessibility of commands. Provides human-readable labels, descriptions, icons, keyboard shortcuts, and searchable tags for each command. Used by toolbars, menus, keyboard shortcut registries, command palettes, and accessibility systems. All fields are optional, allowing simple commands to omit metadata entirely. The `category` field is intentionally a plain string so custom categories can be introduced by extensions without modifying this interface.

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `category` | `string` | Semantic category for command organization and filtering. The category is a plain string intentionally allowing extensions to define custom categories beyond built-in values. Recommended built-in categories: `'formatting'` | `'structure'` | `'list'` | `'table'` | `'content'` | `'selection'` | `'history'` | `'media'` | `'collaboration'` | `'block'` | `'inline'`. Custom categories can be domain-specific (e.g., `'admonition'`, `'callout'`). |
| `description` | `string` | Longer explanation of what the command does and its effects. Used in extended help text, tooltips, and accessibility descriptions. |
| `focusAfterDispatch` | `boolean` | If `true`, automatically focus the editor after the command's transaction updates the DOM. Defaults to `true` for most interactive commands. Set to `false` for commands that should not steal focus. |
| `icon` | `string` | Icon identifier or resource for toolbar/menu rendering. Can be an icon name (e.g., `'icon-bold'`), a CSS class, a data URL, or an SVG identifier. |
| `label` | `string` | User-facing command label displayed in toolbars, menus, and dialogs. |
| `shortcut` | `string` | Keyboard shortcut hint for display in menus and help systems. Format is display-oriented (e.g., `'Ctrl+B'`, `'Cmd+I'`). This field is for documentation only; actual keybinding registration is handled separately. The shortcut string is not validated or executed. |

### ChainResult

`ChainResult` — returned by `ChainBuilder.run()`. Distinguishes an empty chain from an aborted one so callers can react appropriately.

### ValidationError

`ValidationError` — single reason why a schema or document validation failed. Carries the dot-path of the offending value (e.g. `nodes.paragraph.attrs.align`) so consumers can produce meaningful error messages.

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `message` | `string` | Short human-readable reason for the failure. |
| `path` | `string` | Dot-path to the failing field. Empty string for the whole document. |

## Event payloads

### AfterPasteEventArgs

Payload for `afterPaste` — describes what was actually inserted.

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `content` | `PasteContent` | The content that was inserted. |
| `event` | `ClipboardEvent` | The original DOM paste event. |
| `insertPosition` | `number` | Position in document where content was inserted. |
| `insertedLength` | `number` | Number of characters/nodes inserted. |

### BeforePasteEventArgs

Payload for `beforePaste` — carries the parsed clipboard content ready for insertion. Set `event.cancel = true` to abort the paste.

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `content` | `PasteContent` | The parsed clipboard content about to be inserted. |
| `event` | `ClipboardEvent` | The original DOM paste event. |

### PasteContent

`PasteContent` — clipboard content carried by paste events. This is a PM-independent view of the clipboard payload. Listeners that need the parsed document structure should read `editor.getDocument()` in the `AFTER_PASTE` handler. Post-parse transformation belongs in the `config.clipboard.transformContent` hook, not in these events.

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `files` | `File[]` | Image files extracted from clipboard content. Populated when the user pastes direct image files (`image/png`, `image/jpeg`, etc.) from system clipboard, or when HTML content contains images as data URIs (automatically converted to `File` objects). Empty or `undefined` when source is plain text or HTML without embedded images. |
| `htmlContent` | `string` | HTML content from the clipboard (after Headless security sanitisation and any product `transformHTML` hook has run). |
| `text` | `string` | Plain text fallback content from the clipboard. |

### ContentChangedEventArgs

Payload for `contentChanged` — aggregated from `TransactionApplied` + `HistoryRecorded` + `SelectionUpdated` + `RendererInvalidated`.

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `document` | `DocumentRoot` | The document state after the change. |
| `selection` | `Selection` | The selection state after the change. |

### DocumentChangedEventArgs

Payload for `documentChanged` — emitted on document-mutating transactions with semantic change information. Provides rich context about what changed (action), which nodes were affected, and the new state. Use this for product-level behaviors (Block Editor block tracking, RTE undo previews, analytics).

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `action` | `DocumentChangeAction` | Semantic action describing the nature of the change. |
| `affectedNodes` | `EditorNode[]` | All Headless Editor nodes touched by this transaction. Populated based on action. |
| `document` | `DocumentRoot` | The document state after the change. |
| `selection` | `Selection` | The selection state after the change. |

#### `affectedNodes` per action

- `'Insertion'`: Newly inserted nodes and their ancestors.
- `'Deletion'`: Nodes that existed before deletion (for archival/undo preview).
- `'Moved'`: Relocated nodes.
- `'Replaced'`: Both old and new nodes.
- `'Update'`: Nodes with changed attributes; normally containing block.
- `'Formatting'`: Nodes with added/removed marks; normally containing block.
- `'Unknown'`: All nodes with changes (best effort).

### DocumentChangeAction

`DocumentChangeAction` — semantic action that describes the nature of a document change. Allowed values: `Insertion`, `Deletion`, `Moved`, `Replaced`, `Update`, `Formatting`, `Unknown`.

| Action | Description |
|--------|-------------|
| `Insertion` | Content was added (typing, paste, insert command). |
| `Deletion` | Content was removed (backspace, delete, remove command). |
| `Moved` | Content was relocated (drag-drop, reorder, move command). |
| `Replaced` | Content was swapped (find-replace, transform). |
| `Update` | Node attributes changed without content/structural change (heading level, node attrs). |
| `Formatting` | Mark/formatting changed (bold, italic, color) without content/structural change. |
| `Unknown` | Transaction too complex to categorize; examine `affectedNodes` for details. |

## File upload event payloads

### BeforeFileUploadEventArgs

Payload for `BEFORE_FILE_UPLOAD` event. Published before a file upload is attempted. Extensions can inspect the file and cancel the upload if needed.

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `cancel` | `boolean` | Set to `true` to cancel the upload. Extensions can set this in their event handler to prevent the upload from starting. |
| `file` | `File` | The file about to be uploaded. |

### FileReceivedEventArgs

Payload for `FILE_RECEIVED` event. Published when a file is received (pasted/dropped/API). Extensions receive this to decide whether to accept the file and create a node.

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `file` | `File` | The file that was received. |

## Resize event payloads

### ResizeEventArgs

Common arguments for resize lifecycle events.

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `currentHeight` | `number` | The current height of the element in pixels. |
| `currentWidth` | `number` | The current width of the element in pixels. |
| `element` | `HTMLElement` | The DOM element being resized. |
| `nodeType` | `string` | The schema node type associated with the element being resized. |

### ResizeStartEventArgs

Arguments supplied when a resize operation starts. Set `cancel` to `true` to prevent the operation from starting.

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `cancel` | `boolean` | Prevents the resize operation when set to `true`. |
| `currentHeight` | `number` | The current height of the element in pixels. |
| `currentWidth` | `number` | The current width of the element in pixels. |
| `element` | `HTMLElement` | The DOM element being resized. |
| `nodeType` | `string` | The schema node type associated with the element being resized. |

### ResizeStopEventArgs

Arguments supplied when a resize operation completes.

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `currentHeight` | `number` | The current height of the element in pixels. |
| `currentWidth` | `number` | The current width of the element in pixels. |
| `element` | `HTMLElement` | The DOM element being resized. |
| `nodeType` | `string` | The schema node type associated with the element being resized. |
| `originalHeight` | `number` | The height captured when the resize operation started, in pixels. |
| `originalWidth` | `number` | The width captured when the resize operation started, in pixels. |

### ResizingEventArgs

Arguments supplied during an active resize operation.

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `currentHeight` | `number` | The current height of the element in pixels. |
| `currentWidth` | `number` | The current width of the element in pixels. |
| `element` | `HTMLElement` | The DOM element being resized. |
| `nodeType` | `string` | The schema node type associated with the element being resized. |
| `originalHeight` | `number` | The height captured when the resize operation started, in pixels. |
| `originalWidth` | `number` | The width captured when the resize operation started, in pixels. |

## Clipboard

### ClipboardContent

`ClipboardContent` — parsed clipboard content as a ProseMirror slice. Product `transformContent` hooks receive the slice that ProseMirror's schema-driven parser produced, and may return a new slice to replace it. This allows for content restructuring, node type normalization, or mark filtering after parsing but before insertion into the document.

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `slice` | `PMSlice` | The parsed ProseMirror slice ready for insertion into the document. Transform hooks may modify and return a new slice to alter the inserted content. |

### ClipboardOptions

`ClipboardOptions` — clipboard transformation options exposed on `EditorConfig.clipboard`. Provides extensibility points for product-level paste policies. Headless composes a non-overridable security sanitiser ahead of `transformHTML`. Products register their paste policy (`deniedTags`, `deniedAttrs`, `allowedStyles`, `allowedTags`, etc.) by implementing one or both of these hooks to enforce content rules, normalize structure, and handle platform-specific content (e.g., Office, Google Docs).

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `transformContent` | `Object` | Transform parsed clipboard content before it is inserted. Receives the slice produced by ProseMirror's schema parser and may return a modified slice to alter insertion behavior. Use to drop foreign marks not supported by your schema, restructure node hierarchies, normalize content, or apply schema-aware filtering. |
| `transformHTML` | `Object` | Transform clipboard HTML before it is parsed into editor content. Runs after Headless's non-overridable security sanitiser, so the input is already stripped of dangerous tags, event-handler attributes, and unsafe URL protocols. Use to strip platform-specific markup, normalize HTML structure, or apply `deniedTags`/`deniedAttrs` rules at the HTML level. Return the (possibly rewritten) HTML string. |

### ClipboardTransformContext

`ClipboardTransformContext` — context passed to clipboard transform hooks. Provides the editor instance and detected source format to allow transform hooks to make context-aware decisions about clipboard content handling.

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `editor` | `HeadlessEditor` | The editor instance receiving the paste operation. |
