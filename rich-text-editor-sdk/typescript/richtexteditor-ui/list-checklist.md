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

## 3. Custom List Items

Checklist items do not have additional custom configuration beyond the checkbox shape. Once a checklist is created, you can manage items and their completion states using the available commands.

---

## 4. Commands Support

Commands provide programmatic control over Checklist operations. Use these commands to create, modify, and manage checklists within the editor.

### 4.1 Create Checklist

**Command:** `taskList`

**Description:** Inserts a checklist at the current cursor position or applies checklist formatting to selected content.

**Options:**
- `keepMarks` (optional) - When `true`, preserves active text formatting (bold, italic, etc.) in the new list item

**Example:**

```typescript
// Insert a checklist with default settings
editor.executeCommand('taskList');

// Insert checklist and preserve text formatting
editor.executeCommand('taskList', {
  keepMarks: true
});
```

### 4.2 Convert List to Checklist

**Command:** `setListStyle`

**Description:** Converts an existing numbered or bulleted list to a checklist.

**Options:**
- `listType` (required) - Use `'task'` to convert to a checklist

**Example:**

```typescript
// Convert current list to a checklist
editor.executeCommand('setListStyle', {
  listType: 'task'
});

// Remove checklist formatting (convert to normal text)
editor.executeCommand('setListStyle', {
  listType: 'none'
});
```

### 4.3 Toggle Checkbox

**Command:** `toggleTaskItemDone`

**Description:** Toggles the checked state of a checklist item (marks it as complete or incomplete).

**Example:**

```typescript
// Toggle checkbox state at current cursor position
editor.executeCommand('toggleTaskItemDone');
```

### 4.4 Increase Checklist Item Indentation

**Command:** `increaseListLevel`

**Description:** Increases the indentation level of checklist items, creating nested checklists.

**Example:**

```typescript
// Increase indentation level
editor.executeCommand('increaseListLevel');
```

### 4.5 Decrease Checklist Item Indentation

**Command:** `decreaseListLevel`

**Description:** Decreases the indentation level of checklist items, removing nesting from checklists.

**Example:**

```typescript
// Decrease indentation level
editor.executeCommand('decreaseListLevel');
```

---

## 5. Related Resources

- [List Formatting and Configuration Overview](./list-formatting-and-configuration.md) - General list feature overview
- [NumberFormat List Configuration](./list-numberformat.md) - Numbered list setup and usage
- [BulletFormat List Configuration](./list-bulletformat.md) - Bulleted list setup and usage
