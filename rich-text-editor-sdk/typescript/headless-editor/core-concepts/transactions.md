---
layout: post
title: Transactions in TypeScript Headless Editor | Syncfusion
description: Understand how the Headless Editor applies changes atomically, groups them for undo and redo, and supports dry-run checks.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Transactions

A transaction is the single, atomic change the editor applies when a command runs. When a command succeeds, one transaction is dispatched. Either the whole change is applied, or none of it is.

You do not write transactions directly. Commands do. This page describes what a transaction means to you as a user — atomicity, history grouping, dry-run, and how undo and redo behave.

If you are not yet familiar with commands, see the **Commands** page first.

## What is a transaction?

A transaction is the unit of change in the editor. Every successful command — typing, formatting, block transform, selection move — runs as one transaction. The editor either applies the transaction in full or rejects it and leaves the document untouched.

This guarantees that a sequence of operations can never leave the document half-updated. If a command's availability check fails, no transaction is dispatched. If a chain of commands is interrupted, none of its steps are dispatched.

## What this means for you

Three practical consequences follow from every command being one atomic transaction:

- **One undo step per execution.** Calling `editor.commands.insertText({ text: 'a' })` once adds one undo step. Calling it twice adds two undo steps.
- **Selection-only commands do not add an undo step.** `selectAll`, `clearSelection`, and `setSelection` change the selection but not the document. They are not recorded as undoable actions.
- **Failed commands leave no trace.** If `editor.execute(...)` returns `false`, nothing was changed and the undo history is unchanged.

## Undo and redo

Use `editor.commands.undo()` and `editor.commands.redo()` to navigate the history.

```typescript
editor.commands.undo();
editor.commands.redo();
```

These are history commands — they cannot be used inside `editor.chain()`. Call them directly with `editor.execute('undo')` or `editor.commands.undo()` instead.

## History grouping

Successive transactions that happen close together are grouped into a single undo step. The Undo/Redo extension defines two options that control grouping:

| Option | Purpose | Default |
|--------|---------|---------|
| `depth` | Maximum number of undo steps kept in the history stack. | `30` |
| `newGroupDelay` | Maximum gap (in milliseconds) between transactions that are still grouped together. After this delay, the next transaction starts a new undo step. | `300` |

```typescript
import { HeadlessEditor, basicExtensions, undoRedoExtension } from '@syncfusion/ej2-headless-editor';

const customizedUndoRedo = undoRedoExtension.configure({
    depth: 50,
    newGroupDelay: 500
});

const editor = HeadlessEditor.create({
    extensions: [basicExtensions, customizedUndoRedo]
});
```

When you type a sentence, every keystroke dispatches one transaction, but they are all within `newGroupDelay` of each other, so a single `undo()` reverses the whole sentence.

## Dry-run — checking before committing

Dry-run lets you ask the editor "would this command work?" without changing the document. Use it to update toolbar and menu state, or to validate a payload before committing.

There are two dry-run entry points:

```typescript
// Check a single command.
if (editor.can().setSelection({ from: 1, to: 5 })) {
    // Safe to position the cursor at the requested range.
}

// Check a whole chain.
if (editor.chain().setSelection({ from: 1, to: 5 }).insertText({ text: 'Hi' }).canRun()) {
    // Safe to run the chain.
}
```

`editor.can()` and `chain().canRun()` evaluate the same availability guards that a real execution would use, against the current document and selection. They never dispatch and never change state.

## What's next

Now that you know how commands and transactions work, see how the editor responds when state changes:

- **Events** — subscribe to `contentChanged`, `documentChanged`, `selectionChanged`, and more.
- **Commands** — back to the typed command facade.