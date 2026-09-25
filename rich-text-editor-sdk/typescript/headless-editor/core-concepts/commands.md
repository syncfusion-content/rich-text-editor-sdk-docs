---
layout: post
title: Commands in TypeScript Headless Editor | Syncfusion
description: Use the Headless Editor command api to execute, check availability, and chain generic built-in commands.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Commands in TypeScript Headless Editor

A command is a named action the editor knows how to perform. Commands are the only way to change the editor's state. Every formatting toggle, every block transform, and every selection move is implemented as a command.

There are two kinds of commands in the editor:

- **Generic built-in commands** — listed on this page. They are not tied to any particular feature and are always available.
- **Extension commands** — owned by their extension (for example, `toggleBold` on the Bold extension, `toggleHeading` on the Heading extension, etc).

If you are not yet familiar with the editor instance, see the **Editor** page first.

## Executing a command

There are three ways to call a command.

### The typed facade

The typed facade is the common path. Every command is exposed as a method on `editor.commands`. The method returns `true` when a change happened, `false` otherwise.

```typescript
// Select the entire document.
editor.commands.selectAll();

// Collapse the current selection to a cursor.
editor.commands.clearSelection();

// Move the cursor to a specific range.
editor.commands.setSelection({ from: 1, to: 5 });
```

### The string format

Use `editor.execute(name, payload)` when the command name is dynamic (for example, when it comes from a configuration or a user action).

```typescript
const commandName = 'selectAll';
editor.execute(commandName);

// With a payload.
editor.execute('setSelection', { from: 1, to: 5 });
```

The string form returns the same `boolean` as the typed facade.

### Command chaining — `editor.chain`

Use `editor.chain()` to run several commands as one atomic step. Every step is collected, availability-checked, and dispatched together as single action.

```typescript
editor.chain()
    .setSelection({ from: 1, to: 5 })
    .insertText({ text: 'Hello' })
    .run();
```

Chaining is described in brief here [Command chaining](#command-chaining).

## Checking availability — `editor.can()`

Use `editor.can()` to check whether a command would run successfully without changing state. This is the standard way to update toolbar and menu state.

```typescript
if (editor.can().selectAll()) {
    // Enable the select-all action.
}

if (editor.can().setSelection({ from: 1, to: 5 })) {
    // Safe to position the cursor at the requested range.
}
```

`editor.can()` never mutates the document. It evaluates the same guard that a real execution would use, against the current document and selection, and returns `true` or `false`.

You can also dry-run a whole chain with `editor.chain().<a>().<b>().canRun()`.

```typescript
if (editor.chain().clearSelection().setSelection({ from: 1, to: 5 }).canRun()) {
    // Safe to run the same chain.
}
```

## Command return values

`editor.execute(...)` and `editor.commands.<name>(...)` returns a `boolean` value:

| Value | Meaning |
|-------|---------|
| `true` | A change happened. The document or selection was updated. |
| `false` | The command was unavailable for the current state or payload. Nothing was changed. |

`editor.chain().run()` returns a richer result:

```typescript
const result = editor.chain().setSelection({ from: 1, to: 5 }).insertText({ text: 'Hi' }).run();

if (result.success) {
    // The chain ran and updated state.
} else if (result.reason === 'aborted') {
    // A step's availability check failed; nothing changed.
    console.log(`Aborted at ${result.failedStep}`);
} else {
    // The chain was empty.
}
```

| Result | Meaning |
|--------|---------|
| `{ success: true }` | All steps ran and one transaction was dispatched. |
| `{ success: false; reason: 'aborted'; failedStep }` | A step's availability check failed; the chain aborted and no change was made. |
| `{ success: false; reason: 'empty' }` | The chain had no steps. |

## Default injectable commands

The following generic built-in commands are always available. Each entry lists the command name, what it does, and the payload shape. Detailed payload field descriptions live in the API reference.

### Content commands

| Command | Payload | Purpose |
|---------|---------|---------|
| `insertNode` | `InsertNodePayload` | Insert a node subtree at a parent and index. |
| `deleteNode` | `DeleteNodePayload` | Delete a node by its open/close positions. |
| `moveNode` | `MoveNodePayload` | Relocate a node subtree to a new parent and index. |
| `insertText` | `InsertTextPayload` | Insert a plain text string at the current cursor or a given position. |
| `deleteText` | `DeleteTextPayload` | Delete text in a from-to-to range. |
| `replaceText` | `ReplaceTextPayload` | Replace text in a range with a new string. |
| `deleteRange` | `DeleteRangePayload` | Delete content in a document-position range and place the cursor at the result. |

### Formatting commands

| Command | Payload | Purpose |
|---------|---------|---------|
| `toggleMark` | `ToggleMarkPayload` | Toggle an inline mark on the current selection. |
| `setMark` | `SetMarkPayload` | Apply or update an inline mark on the current selection. |
| `removeMark` | `RemoveMarkPayload` | Remove an inline mark from the current selection. |

### Structure commands

| Command | Payload | Purpose |
|---------|---------|---------|
| `toggleBlockStructure` | `ToggleBlockStructurePayload` | Wrap or unwrap a block-level structure such as `blockquote` or `callout`. |
| `duplicateNode` | `DuplicateNodePayload` | Deep-clone a node subtree and insert the copy right after the original. |
| `wrapNode` | `WrapNodePayload` | Wrap an existing node in a new container node. |
| `unwrapNode` | `UnwrapNodePayload` | Replace a container node with its children. |
| `transformNode` | `TransformNodePayload` | Change a node's type while preserving its children and attributes. |
| `splitBlock` | — | Split the current block at the selection. |

### Selection commands

| Command | Payload | Purpose |
|---------|---------|---------|
| `selectAll` | — | Select the entire document. |
| `setSelection` | `SetSelectionPayload` | Set the text selection to a from/to range. |
| `clearSelection` | — | Collapse the selection to a cursor at the anchor. |

## Command chaining

`editor.chain()` collects commands and dispatches them as one atomic step. Every step is run through the same availability guard that a single-command execution would use.

```typescript
editor.chain()
    .setSelection({ from: 1, to: 5 })
    .insertText({ text: 'Hello' })
    .run();
```

Chaining has three important rules:

- **All-or-nothing.** If any step's availability check fails, the chain aborts and **no change is made**. This is different from calling each command separately, where each call might independently change the document.
- **History commands are forbidden.** `undo` and `redo` cannot be queued inside a chain.
- **Focus is restored.** After a successful run, focus returns to the editor automatically.

A chain with no steps returns `{ success: false; reason: 'empty' }` and dispatches nothing.