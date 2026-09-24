---
layout: post
title: Migrating to JavaScript Modern Rich Text Editor | Syncfusion
description: Learn how to migrate from the Essential JS 2 Rich Text Editor to the Modern Rich Text Editor by mapping APIs, toolbar items, and configuration settings.
control: Modern Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Migrating from Rich Text Editor to Modern Rich Text Editor

This article describes the API migration process from the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Rich Text Editor (`@syncfusion/ej2-richtexteditor`) to the Modern Rich Text Editor (`@syncfusion/ej2-richtexteditor-ui`).

## Component Initialization Changes

### Previous Initialization

```javascript
var editor = new ej.richtexteditor.RichTextEditor({});
```

### Updated Initialization

```javascript
var editor = new ej.richtexteditor.RichTextEditorUI({});
```

---

## Component Name Changes

| Previous | Updated |
|-----------|-----------|
| RichTextEditor | RichTextEditorUI |

---

## Toolbar Item Name Changes

The following toolbar item names have been renamed:

| Previous Item | Updated Item |
|---------------|-------------|
| StrikeThrough | Strikethrough |
| CreateLink | Link |
| CreateTable | Table |
| Blockquote | Quote |
| Alignments | Alignment |
| SuperScript | Superscript |
| SubScript | Subscript |
| UnorderedList | BulletList |
| OrderedList | NumberedList |

---

## Current Limitations

The following toolbar items are currently not supported in RichTextEditorUI:

```javascript
[
  'ImportWord',
  'ExportWord',
  'ExportPdf',
  'LineHeight',
  'EmojiPicker',
  'FileManager',
  'Video',
  'Audio',
  'Print',
  'FullScreen',
  'SourceCode',
  'FormatPainter'
]
```

---

## Slash Command Changes

### Property Changes

| Previous Property | Updated Property |
|-------------------|------------------|
| slashMenuSettings | slashCommandSettings |

### Known Limitation

```javascript
"CodeBlock"
```

is currently not assignable to:

```javascript
SlashCommandItems
```

---

## Image Configuration Changes

### Property Changes

| Previous Property | Updated Property |
|-------------------|------------------|
| insertImageSettings | imageSettings |
| saveUrl | uploadUrl |
| path | imageUrl |

### Limitations
 
The following properties are currently not supported in `RichTextEditorUI`:
 
- importWord
- exportWord
- exportPdf
- fileManagerSettings
- enableXhtml
- showCharCount

---

## Tab Key Configuration Changes

### Previous Configuration

```javascript
enableTabKey: true
```

### Updated Configuration

```javascript
interactionSettings: {
    enableTabKeyIndent: true
}
```

---

## Quick Toolbar Changes

### Deprecated Property

The following property has been deprecated and is no longer available:

```javascript
quickToolbarSettings.showOnRightClick
```

### Table Quick Toolbar Item Changes

#### Previous Configuration

```javascript
[
  'Tableheader',
  'TableRemove',
  '|',
  'TableRows',
  'TableColumns',
  'BackgroundColor',
  'Alignments',
  'TableCellVerticalAlign'
]
```

#### Updated Configuration

```javascript
[
  'Header',
  'Remove',
  '|',
  'Row',
  'Column',
  '|',
  'CellBackgroundColor',
  'Align',
  'VerticalAlign'
]
```

### Missing Table Quick Toolbar Items

The following table quick toolbar items are currently unavailable:

```javascript
[
  'TableCell',
  'TableEditProperties',
  'TableCellProperties',
  'Styles'
]
```

---

## Content Loading Changes

HTML content cannot be loaded directly into the appended `RichTextEditorUI` DOM element.

To load content into the editor, configure the content using the `value` property along with the `valueFormat` setting.

### Supported Value Formats

- HTML
- JSON

### HTML Example

```javascript
valueFormat: 'html',
value: '<p>Sample Content</p>'
```

### JSON Example

```javascript
valueFormat: 'json',
value: jsonData
```

The `value` property can be configured with either an HTML string or JSON data to load content into the Rich Text Editor UI.

---

## Summary of API Changes

| Previous API | Updated API |
|-------------|-------------|
| RichTextEditor | RichTextEditorUI |
| slashMenuSettings | slashCommandSettings |
| insertImageSettings | imageSettings |
| saveUrl | uploadUrl |
| path | imageUrl |
| enableTabKey | interactionSettings.enableTabKeyIndent |
| StrikeThrough | Strikethrough |
| CreateLink | Link |
| CreateTable | Table |
| Blockquote | Quote |
| Alignments | Alignment |
| SuperScript | Superscript |
| SubScript | Subscript |
| UnorderedList | BulletList |
| OrderedList | NumberedList |