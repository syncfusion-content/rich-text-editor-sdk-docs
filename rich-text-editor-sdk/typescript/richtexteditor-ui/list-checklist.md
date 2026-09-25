---
layout: post
title: Checklist Configuration in Modern Rich Text Editor | Syncfusion
description: Learn how to get configure Checklist in Modern Rich Text Editor and explore setup with core feature examples.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Checklist Configuration

## 1. Purpose

The Checklist feature enables users to create and manage interactive checkbox lists within the Rich Text Editor. Checklists are ideal for task management, requirements tracking, and scenarios where items need to be marked as complete or incomplete.

---

## 2. List Type

### 2.1 Checkbox Shape

The `checklistType` property defines the visual shape of checkboxes in checklist items.

**Property Name:** `listSettings.checklistType`

**Available Shapes:**
- `'Square'` - Square-shaped checkbox (□ / ☑) — **default**
- `'Circle'` - Circular checkbox (○ / ◉)

**Example:**

```typescript
// Create a Rich Text Editor with default square checkboxes
const editor = new RichTextEditor({});

// Use circular checkboxes
const editor = new RichTextEditor({
  listSettings: {
    checklistType: 'Circle'
  }
});

// Change checkbox shape at runtime
editor.listSettings.checklistType = 'Square';
```

---

## 3. Commands Support

Commands provide programmatic control over Checklist operations. Use these commands to create, modify, and manage checklists within the editor.

### 3.1 Create Checklist

**Command:** `taskList`

**Description:** Inserts a checklist at the current cursor position or applies checklist formatting to the selected content. If the selected content is already formatted as a checklist, executing the same command again removes the checklist formatting and reverts it to a normal paragraph.

**Example:**

```typescript
// Insert a checklist with default settings
editor.commands().toggleTaskList().apply();
```

---

## 4. Related Resources

- [List Formatting and Configuration Overview](./list-formatting-and-configuration.md) - General list feature overview
- [NumberFormat List Configuration](./list-numberformat.md) - Numbered list setup and usage
- [BulletFormat List Configuration](./list-bulletformat.md) - Bulleted list setup and usage
- [Rich Text Editor API Reference](./reference.md) - Complete API documentation
