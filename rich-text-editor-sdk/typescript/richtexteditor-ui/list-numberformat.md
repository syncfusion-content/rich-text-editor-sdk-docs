---
layout: post
title: NumberFormat List Configuration in Modern Rich Text Editor | Syncfusion
description: Learn how to get configure Number Format List in Modern Rich Text Editor and explore setup with core feature examples.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# NumberFormat List Configuration

## 1. Purpose

The NumberFormat List feature enables users to create and manage ordered lists with numeric markers. Numbered lists are essential for presenting sequential information, step-by-step instructions, ranked items, and any content that requires a specific order.

---

## 2. List Type

### 2.1 Supported Number Formats

The Rich Text Editor supports the following numbering formats for ordered lists:

**Available Numbering Formats:**
- `'decimal'` - Standard numeric (1, 2, 3, ...)
- `'lower-alpha'` - Lowercase alphabetic (a, b, c, ...)
- `'upper-alpha'` - Uppercase alphabetic (A, B, C, ...)
- `'lower-roman'` - Lowercase Roman numerals (i, ii, iii, ...)
- `'upper-roman'` - Uppercase Roman numerals (I, II, III, ...)
- `'lower-greek'` - Lowercase Greek letters (α, β, γ, ...)

**Default Formats:**
By default, the Rich Text Editor provides six standard number formats accessible from the toolbar dropdown:
- Number
- Lower Greek
- Lower Roman
- Upper Alpha
- Lower Alpha
- Upper Roman

**Example:**

```typescript
// Create a Rich Text Editor with default number formats
const editor = new RichTextEditor({});

// The toolbar will display all six default number formats
```

---

## 3. Custom List Items

You can customize which number formats are available in the toolbar by modifying the `numberFormatListItems` property. This allows you to define a subset of supported formats or add custom ones tailored to your application's needs.

**Property:** `listSettings.numberFormatListItems`

**Example:**

```typescript
// Customize to show only specific number formats
const editor = new RichTextEditor({
  listSettings: {
    numberFormatListItems: [
      { text: 'Decimal', listType: 'decimal' },
      { text: 'Roman', listType: 'upper-roman' },
      { text: 'Alpha', listType: 'upper-alpha' }
    ]
  }
});

// Modify at runtime
editor.listSettings.numberFormatListItems = [
  { text: 'Decimal', listType: 'decimal' },
  { text: 'Greek', listType: 'lower-greek' }
];
```

---

## 4. Commands Support

Commands provide programmatic control over NumberFormat List operations. Use these commands to create, modify, and manage numbered lists within the editor.

### 4.1 Create Numbered List

**Command:** `numberedList`

**Description:** Inserts a numbered list at the current cursor position or applies numbering to selected content.

**Options:**
- `listType` (optional) - Specify the numbering format (e.g., `'decimal'`, `'lower-roman'`, `'upper-alpha'`)
- `keepMarks` (optional) - When `true`, preserves active text formatting (bold, italic, etc.) in the new list item

**Example:**

```typescript
// Insert a numbered list with default decimal format
editor.executeCommand('numberedList');

// Insert with Roman numeral format
editor.executeCommand('numberedList', {
  listType: 'lower-roman'
});

// Preserve text formatting when creating list
editor.executeCommand('numberedList', {
  listType: 'upper-alpha',
  keepMarks: true
});
```

### 4.2 Change Number Format

**Command:** `setListStyle`

**Description:** Changes the numbering format of an existing numbered list without creating a new list.

**Options:**
- `listType` (required) - The new numbering format to apply

**Available Formats:**
- `'decimal'` - Standard numbering (1, 2, 3, ...)
- `'lower-alpha'` - Lowercase letters (a, b, c, ...)
- `'upper-alpha'` - Uppercase letters (A, B, C, ...)
- `'lower-roman'` - Lowercase Roman numerals (i, ii, iii, ...)
- `'upper-roman'` - Uppercase Roman numerals (I, II, III, ...)
- `'lower-greek'` - Greek letters (α, β, γ, ...)
- `'none'` - Remove numbering

**Example:**

```typescript
// Change current list to Roman numerals
editor.executeCommand('setListStyle', {
  listType: 'upper-roman'
});

// Change to Greek letters
editor.executeCommand('setListStyle', {
  listType: 'lower-greek'
});

// Remove numbering
editor.executeCommand('setListStyle', {
  listType: 'none'
});
```

### 4.3 Increase List Item Indentation

**Command:** `increaseListLevel`

**Description:** Increases the indentation level of list items, creating nested numbered lists.

**Example:**

```typescript
// Increase indentation level
editor.executeCommand('increaseListLevel');
```

### 4.4 Decrease List Item Indentation

**Command:** `decreaseListLevel`

**Description:** Decreases the indentation level of list items, removing nesting from numbered lists.

**Example:**

```typescript
// Decrease indentation level
editor.executeCommand('decreaseListLevel');
```

---

## 5. Related Resources

- [List Formatting and Configuration Overview](./list-formatting-and-configuration.md) - General list feature overview
- [BulletFormat List Configuration](./list-bulletformat.md) - Bulleted list setup and usage
- [Checklist Configuration](./list-checklist.md) - Checklist setup and usage
