---
layout: post
title: BulletFormat List Configuration in Modern Rich Text Editor | Syncfusion
description: Learn how to get configure Bullet Format List in Modern Rich Text Editor and explore setup with core feature examples.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# BulletFormat List Configuration

## 1. Purpose

The BulletFormat List feature enables users to create and manage unordered lists with bullet markers. Bulleted lists are ideal for presenting key points, feature lists, and any content that does not require a specific order.

---

## 2. List Type

### 2.1 Supported Bullet Styles

The Rich Text Editor supports the following bullet styles for unordered lists:

**Available Bullet Styles:**
- `'disc'` - Filled circle bullet (●)
- `'circle'` - Hollow circle bullet (○)
- `'square'` - Square bullet (■)

**Default Styles:**
By default, the Rich Text Editor provides three standard bullet styles accessible from the toolbar dropdown:
- Disc
- Circle
- Square

**Example:**

```typescript
// Create a Rich Text Editor with default bullet styles
const editor = new RichTextEditor({});

// The toolbar will display all three default bullet styles
```

---

## 3. Custom List Items

You can customize which bullet styles are available in the toolbar by modifying the `bulletFormatListItems` property. This allows you to define a subset of supported styles or add custom ones tailored to your application's needs.

**Property:** `listSettings.bulletFormatListItems`

**Example:**

```typescript
// Customize to show only specific bullet styles
const editor = new RichTextEditor({
  listSettings: {
    bulletFormatListItems: [
      { text: 'Malayalam', listType: '-moz-malayalam' }
    ]
  }
});
```

---

## 4. Commands Support

Commands provide programmatic control over BulletFormat List operations. Use these commands to create, modify, and manage bulleted lists within the editor.

### 4.1 Create Bulleted List

**Command:** `bulletList`

**Description:** Inserts a bulleted list at the current cursor position or applies bullet formatting to selected content.

**Options:**
- `listType` (optional) - Specify the bullet style (e.g., `'disc'`, `'circle'`, `'square'`)

**Example:**

```typescript
// Insert a bulleted list with default disc bullets
this.parent.commands().numberedList().apply();
```

### 4.2 Change Bullet Style

**Command:** `setListStyle`

**Description:** Changes the bullet style of an existing bulleted list without creating a new list.

**Options:**
- `listType` (required) - The new bullet style to apply

**Available Styles:**
- `'disc'` - Filled circle bullet (●)
- `'circle'` - Hollow circle bullet (○)
- `'square'` - Square bullet (■)

**Example:**

```typescript
// Change to disc bullets
editor.commands().bulletList().options({ listType: 'Disc' }).apply();
```

---

## 5. Related Resources

- [List Formatting and Configuration Overview](./list-formatting-and-configuration.md) - General list feature overview
- [NumberFormat List Configuration](./list-numberformat.md) - Numbered list setup and usage
- [Checklist Configuration](./list-checklist.md) - Checklist setup and usage
- [Rich Text Editor API Reference](./reference.md) - Complete API documentation
