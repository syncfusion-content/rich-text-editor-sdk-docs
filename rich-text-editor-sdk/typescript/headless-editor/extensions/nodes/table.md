---
layout: post
title: Table Extension in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the Table extension in the TypeScript Headless Editor, including row and column management, cell formatting, and navigation commands.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Table in TypeScript Headless Editor

The `tableExtension` registers the `table`, `tableRow`, `tableCell`, and `tableHeader` block container nodes for rendering and editing tables as `<table>`, `<tr>`, `<td>`, and `<th>`.

## Register the extension

```html
<div id="editor"></div>
```

```ts
import { HeadlessEditor, tableExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [tableExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

## Node attributes

### tableCell and tableHeader

| Attribute | Description | Default |
|-----------|-------------|---------|
| `colspan` | Number of columns the cell spans. | `1` |
| `rowspan` | Number of rows the cell spans. | `1` |
| `colwidth` | Comma-separated column widths in pixels (for example, `120,200,80`). | `null` |
| `align` | Horizontal text alignment of the cell (`left`, `center`, or `right`). | `null` |
| `verticalAlign` | Vertical text alignment of the cell (`top`, `middle`, or `bottom`). | `null` |
| `backgroundColor` | CSS color value for the cell background. | `null` |
| `color` | CSS color value for the cell text. | `null` |
| `borderColor` | CSS color value for the cell border. | `null` |

## Configure table options

The `table` extension exposes options that control table behavior:

| Option | Description | Default |
|--------|-------------|---------|
| `resize` | When `true`, table columns can be resized by dragging the column separator handles in the header row. | `true` |

```html
<div id="editor"></div>
```

```ts
import { HeadlessEditor, tableExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        tableExtension.configure({
            resize: true
        })
    ]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

## Commands

### Table structure

| Command | Description |
|---------|--------------|
| `insertTable({ rows, columns })` | Inserts a new table at the current cursor position with the specified number of `rows` and `columns` (minimum 1). Each cell is initialized with an empty paragraph. |
| `deleteTable()` | Removes the table under the cursor from the document. |
| `insertRowBefore()` | Inserts a new empty row above the current row. |
| `insertRowAfter()` | Inserts a new empty row below the current row. |
| `deleteRow()` | Removes the table row under the cursor. |
| `insertColumnBefore()` | Inserts a new empty column to the left of the current column. |
| `insertColumnAfter()` | Inserts a new empty column to the right of the current column. |
| `deleteColumn()` | Removes the table column under the cursor. |

### Cell content and formatting

| Command | Description |
|---------|--------------|
| `insertParagraphInCell()` | Inserts a new paragraph block inside the current table cell without splitting the cell structure. Bound to the <kbd>Enter</kbd> key inside a cell. |
| `setCellAttribute({ attribute, value })` | Sets an arbitrary attribute on the cell(s) in the current selection. Common attributes include `colspan`, `rowspan`, `colwidth`, `align`, `verticalAlign`, `backgroundColor`, `color`, and `borderColor`. |
| `toggleHeaderRow()` | Toggles the row containing the cursor between a body row and a header row. |
| `toggleHeaderColumn()` | Toggles the column containing the cursor between body cells and header cells. |

### Cell navigation

| Command | Description |
|---------|--------------|
| `moveToNextCell()` | Moves the cursor to the next table cell. If the cursor is in the last cell, a new row is appended automatically. |
| `moveToPreviousCell()` | Moves the cursor to the previous table cell. |

```ts
// Insert a 3x3 table at the cursor
editor.commands.insertTable({ rows: 3, columns: 3 });

// Add a new row below the current row
editor.commands.insertRowAfter();

// Convert the current row into a header row
editor.commands.toggleHeaderRow();

// Apply background color to the selected cells
editor.commands.setCellAttribute({ attribute: 'backgroundColor', value: '#f0f8ff' });

// Move to the next cell
editor.commands.moveToNextCell();
```

## Keyboard shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Move to Next Cell | <kbd>Tab</kbd> | <kbd>Tab</kbd> |
| Move to Previous Cell | <kbd>Shift</kbd> + <kbd>Tab</kbd> | <kbd>Shift</kbd> + <kbd>Tab</kbd> |
| Insert Paragraph in Cell | <kbd>Enter</kbd> | <kbd>Enter</kbd> |
