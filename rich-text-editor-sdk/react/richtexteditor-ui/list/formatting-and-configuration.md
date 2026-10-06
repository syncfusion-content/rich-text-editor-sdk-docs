---
layout: post
title: List Styles in React Modern Rich Text Editor | Syncfusion
description: Learn how to configure List in React Modern Rich Text Editor and explore setup with core feature examples.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# List Formatting and Configuration in React Modern Rich Text Editor

The List feature in the Rich Text Editor enables users to create and format different types of lists for organizing and presenting content. Lists provide structured ways to display information and improve content readability. The Rich Text Editor supports three primary list types: numbered (NumberFormat), bulleted (BulletFormat), and checklist items.

**Note:** List format items are configured in the toolbar item configuration. Refer to the **Toolbar Module** documentation for toolbar setup instructions.

---

## List Types Overview

The Rich Text Editor provides three distinct list types, each designed for different content organization needs:

| List Type | Purpose | Use Case |
| --- | --- | --- |
| **NumberFormat List** | Ordered lists with numeric formatting | Step-by-step instructions, sequences, ranked items |
| **BulletFormat List** | Unordered lists with bullet markers | Key points, feature lists, general items |
| **Checklist** | Interactive checkbox items | Task lists, requirements, verification items |

---

## Configuring List Items in Toolbar

To configure which list format options appear in the toolbar, use the toolbar item configuration. List items are configured through the `listSettings` property when setting up toolbar items.

**Configure in Toolbar Settings:**

```ts
<RichTextEditorUIComponent
  toolbarSettings={{
    items: [
      'NumberFormatList',  // Displays configured number formats
      'BulletFormatList',  // Displays configured bullet styles
      'Checklist'          // Displays checklist button
    ]
  }}
  listSettings={{
    numberFormatListItems: [
      { text: 'Decimal', listType: 'decimal' },
      { text: 'Roman', listType: 'upper-roman' }
    ],
    bulletFormatListItems: [
      { text: 'Disc', listType: 'disc' },
      { text: 'Circle', listType: 'circle' }
    ],
    checklistType: 'Square'
  }}
/>
```

---

## Common Commands

All list operations use the following commands:
- **`numberedList`** - Create a numbered list
- **`bulletList`** - Create a bulleted list
- **`toggleTaskList`** - Create a checklist
- **`setListStyle`** - Change the current list style

**Example:**

```ts
// Create a bullet list
editorRef.current?.commands().bulletList().apply();

// Change to Roman numerals
editorRef.current?.commands().numberedList().options({ listType: 'upper-alpha' }).apply();

// Toggle checklist
editorRef.current?.commands().toggleTaskList().apply();
```

---

## List Type Details

### NumberFormat List

Numbered lists display items in sequential order using numeric markers (1, 2, 3, etc.) or custom numbering formats (Roman numerals, letters, etc.).

**Key Properties:**
- List type configuration
- Custom list item definitions
- Numbering format options

**Supported Operations:**
- Create numbered lists
- Apply custom numbering formats
- Modify list properties at runtime

**See Also:** [NumberFormat List Configuration](./numberformat)

### BulletFormat List

Bulleted lists display items with bullet markers (•, ○, ■, etc.) without sequential ordering.

**Key Properties:**
- List type configuration
- Custom list item definitions
- Bullet style options

**Supported Operations:**
- Create bulleted lists
- Apply custom bullet styles
- Modify list properties at runtime

**See Also:** [BulletFormat List Configuration](./bulletformat)

### Checklist

Checklists display items with interactive checkboxes, allowing users to mark items as complete or incomplete.

**Key Properties:**
- Checkbox state management
- Custom checkbox representations

**Supported Operations:**
- Create checklists
- Toggle checkbox states
- Apply custom checkbox styling

**See Also:** [Checklist Configuration](./checklist)

---

## Related Resources

- [NumberFormat List Configuration](./numberformat) - Detailed NumberFormat List setup and usage
- [BulletFormat List Configuration](./bulletformat) - Detailed BulletFormat List setup and usage
- [Checklist Configuration](./checklist) - Detailed Checklist setup and usage
