---
layout: post
title: Indent and Outdent Extension in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the Indent and Outdent extension in the TypeScript Headless Editor, including structural indentation, Tab handling, and shape-aware dispatch.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Indent and Outdent in TypeScript Headless Editor

The `indentOutdentExtension` registers the `indent` and `outdent` commands and wires <kbd>Tab</kbd> and <kbd>Shift</kbd> + <kbd>Tab</kbd> handling for structural indentation control.

## Register the extension

```typescript
import { HeadlessEditor, indentOutdentExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [indentOutdentExtension]
});
```

The Tab key behavior is controlled by the `enableTabKey` editor configuration. When `true`, plain blocks fall back to inserting 4 spaces on <kbd>Tab</kbd>.

```typescript
import { HeadlessEditor, indentOutdentExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [indentOutdentExtension],
    config: { enableTabKey: true }
});
```

## Commands

| Command | Description |
|---------|--------------|
| `indent()` | Increases the indentation of the current block or selection by one step. Supports paragraphs, headings, callouts, collapsibles, list items, table cells, and images. |
| `outdent()` | Decreases the indentation of the current block or selection by one step. When the block is already at the root indent, the call has no effect. |

```typescript
// Increase indentation of the current block
editor.commands.indent();

// Decrease indentation
editor.commands.outdent();
```

## Keyboard shortcuts

The <kbd>Tab</kbd> and <kbd>Shift</kbd> + <kbd>Tab</kbd> handlers dispatch by the active content shape in this priority order:

| Priority | Shape | <kbd>Tab</kbd> | <kbd>Shift</kbd> + <kbd>Tab</kbd> |
|----------|-------|----------------|----------------------------------|
| 1 | List item | `indentListItem()` (or 4-space insert when `enableTabKey` is true) | `outdentListItem()` |
| 2 | Table cell | `moveToNextCell()`, or `insertRowAfter()` + `moveToNextCell()` at table end | `moveToPreviousCell()` |
| 3 | Indentable block | Structural `indent()` (or 4-space insert when `enableTabKey` is true and the cursor is mid-text) | Structural `outdent()` |
| 4 | Plain block | 4-space insert when `enableTabKey` is true | Strip 4 trailing spaces when present |

The <kbd>Backspace</kbd> key at the start of an indented block triggers an `outdent` step.