---
layout: post
title: Selection in TypeScript Headless Editor | Syncfusion
description: Understand selection kinds and how to read and update the current selection in the TypeScript Headless Editor.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Selection

The selection is the cursor or the highlighted range inside the editor. Every command acts on the current selection. Toolbar buttons, keyboard shortcuts, and input rules all read or update it.

This page covers what the selection is, the kinds the editor distinguishes, and how to read and update it.

## What is a selection?

A selection has a `type` that tells you what is selected. For text selections, the selection also has `anchor` and `head` positions. For non-text selections, additional fields describe the selected node or table cells — for example, `nodePath` for a node selection and `anchorCellPath` / `headCellPath` for a cell selection.

For most commands and tools, you do not need to look at these fields directly. Use `getSelection()` to get numeric positions, or the kind-specific helpers when you need information about the selected node or cells.

## Selection kinds

The editor distinguishes five kinds of selection. Knowing which kind is active determines what commands are valid and what toolbar items you should enable.

| Kind | When it is active |
|------|-------------------|
| `'text'` | The cursor is inside text, or a range of text is highlighted. The common case. |
| `'node'` | A single atomic node (such as `image` or `horizontalRule`) is selected. |
| `'cell'` | One or more table cells are selected. |
| `'block'` | One or more block-level nodes are selected. |
| `'all'` | The entire document is selected (for example, after `Ctrl+A`). |

You rarely need to read the kind directly. Use the kind-specific helpers (`getSelection`, `getSelectedNode`, `getSelectedCell`, and so on) to ask the editor for the information that matches the current selection. Those helpers are described in the **Integration** section.

## Reading the current selection

Use `getSelection()` to read the current selection as a numeric range.

```typescript
const sel = editor.getSelection();

if (sel.empty) {
    console.log(`Cursor is at position ${sel.from}`);
} else {
    console.log(`Selected ${sel.to - sel.from} characters from ${sel.from} to ${sel.to}`);
}
```

`getSelection()` returns three fields:

| Field | Meaning |
|-------|---------|
| `from` | The start position of the selection, as a zero-based document offset. |
| `to` | The end position of the selection, as a zero-based document offset. |
| `empty` | `true` when the selection is a collapsed cursor (`from === to`), `false` otherwise. |

Positions are document offsets into the flat representation of the document. Use them when calling commands that take a `{ from, to }` range.

## Updating the selection

To change the selection, use one of the generic built-in commands. Each one runs as a single operation and respects the schema.

```typescript
// Collapse the selection to a cursor at the start of the document.
editor.commands.selectAll();

// Collapse the current selection to a cursor at its anchor.
editor.commands.clearSelection();

// Move the cursor or extend the selection to a specific range.
editor.commands.setSelection({ from: 1, to: 5 });
```

- `selectAll` selects the entire document. It always succeeds.
- `clearSelection` collapses the current selection to a cursor at the anchor. It always succeeds.
- `setSelection` accepts `{ from, to }` and moves the selection there. It validates the range against the document and rejects out-of-bounds or inverted ranges.

For toolbar scenarios — where the user clicks a toolbar button that blurs the editor and would normally lose the selection — see the Integration section's save-and-restore pattern.

## What's next

Now that you know how to read and update the selection, see how commands act on it:

- **Commands** — execute, check availability, and chain commands.
- **Editor** — back to the entry point for all of the above.