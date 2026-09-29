---
layout: post
title: Migrating to TypeScript Modern Rich Text Editor | Syncfusion
description: Learn how to migrate from the Essential JS 2 Rich Text Editor to the Modern Rich Text Editor by mapping APIs, toolbar items, and configuration settings.
control: Modern Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Migrating from Rich Text Editor to Modern Rich Text Editor

This article describes the API migration process from the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Rich Text Editor (`@syncfusion/ej2-richtexteditor`) to the Modern Rich Text Editor (`@syncfusion/ej2-richtexteditor-ui`).

## Package Import Changes

### Previous Import

```ts
import { RichTextEditor } from '@syncfusion/ej2-richtexteditor';
```

### Updated Import

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';
```

### Additional Changes

- No need to import the following modules separately:
  - Toolbar
  - Link
  - Image
  - Table
  - QuickToolbar
  - AutoFormat

- No need to inject these modules into `RichTextEditorUI`.

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

```ts
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

### Module Registration

`SlashCommand` must be imported and injected into the `RichTextEditorUI` component.

### Property Changes

| Previous Property | Updated Property |
|-------------------|------------------|
| slashMenuSettings | slashCommandSettings |

### Known Limitation

```ts
"CodeBlock"
```

is currently not assignable to:

```ts
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

```ts
enableTabKey: true
```

### Updated Configuration

```ts
interactionSettings: {
    enableTabKeyIndent: true
}
```

---

## Quick Toolbar Changes

### Deprecated Property

The following property has been deprecated and is no longer available:

```ts
quickToolbarSettings.showOnRightClick
```

### Table Quick Toolbar Item Changes

#### Previous Configuration

```ts
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

```ts
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

```ts
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

```ts
valueFormat: 'html',
value: '<p>Sample Content</p>'
```

### JSON Example

```ts
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