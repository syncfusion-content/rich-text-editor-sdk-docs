---
layout: post
title: Collapsible Extension in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the Collapsible extension in the TypeScript Headless Editor, including expandable sections, toggle commands, and keyboard navigation.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Collapsible in TypeScript Headless Editor

The `collapsibleExtension` registers the `collapsible` block container along with `collapsibleHeader` and `collapsibleBody` child nodes for rendering expandable and collapsible content sections.

## Register the extension

```typescript
import { HeadlessEditor, collapsibleExtension, collapsibleKeymapExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [collapsibleExtension, collapsibleKeymapExtension]
});
```

I> Include `collapsibleKeymapExtension` to enable collapsible navigation keys such as <kbd>Enter</kbd>, <kbd>Backspace</kbd>, and <kbd>Delete</kbd> inside collapsible sections.

## Node attributes

### collapsible

| Attribute | Description | Default |
|-----------|-------------|---------|
| `collapsed` | When `true`, the body content is collapsed and hidden. When `false`, the body is expanded and visible. | `false` |

`collapsibleHeader` and `collapsibleBody` nodes do not expose additional attributes.

## Configure collapsible options

The `collapsible` extension exposes an `htmlAttributes` option that adds custom HTML attributes to the outer collapsible `<div>` container. The `data-type` and `data-collapsed` attributes are always applied. It defaults to an empty object.

```typescript
import { HeadlessEditor, collapsibleExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        collapsibleExtension.configure({
            htmlAttributes: { class: 'custom-collapsible' }
        })
    ]
});
```

## Commands

### Toggle and state

| Command | Description |
|---------|--------------|
| `toggleCollapsible({ triggerType, level? })` | Wraps the current block in a collapsible, or unwraps it if the selection is already inside one. `triggerType` selects the block type of the collapsible trigger child: `heading` or `paragraph`. When `triggerType` is `heading`, `level` sets the heading level (1 to 6) and defaults to `1`. |
| `collapse({ pos? })` | Sets `collapsed` to `true` on the nearest collapsible ancestor. Pass an explicit document `pos` to target a specific collapsible (used by custom NodeViews). |
| `expand({ pos? })` | Sets `collapsed` to `false` on the nearest collapsible ancestor. Pass an explicit document `pos` to target a specific collapsible (used by custom NodeViews). |

### Editing

| Command | Description |
|---------|--------------|
| `enterCollapsible()` | Handles the <kbd>Enter</kbd> key when the cursor is in a collapsible header. Behavior depends on the collapsed state and the cursor position: creates a paragraph inside the body, creates a paragraph above or below the collapsible, or splits the collapsible into two. |
| `splitCollapsible()` | Splits the current collapsible into two collapsibles at the cursor position. |
| `backspaceCollapsible()` | Handles the <kbd>Backspace</kbd> key when the cursor is in a collapsible. Preserves collapsible state across the delete. |
| `deleteCollapsible()` | Handles the <kbd>Delete</kbd> key when the cursor is in a collapsible. Multi-stage fallthrough: deletes empty collapsibles, merges adjacent blocks, or falls through to default delete behavior. |
| `mergeCollapsibleBackward()` | Merges the current collapsible with the preceding block at the cursor position. |
| `mergeCollapsibleForward()` | Merges the next sibling block into the current collapsible at the cursor position. |

```typescript
// Wrap the current block as a heading-triggered collapsible (level 1)
editor.commands.toggleCollapsible({ triggerType: 'heading', level: 2 });

// Wrap the current block as a paragraph-triggered collapsible
editor.commands.toggleCollapsible({ triggerType: 'paragraph' });

// Collapse the nearest collapsible
editor.commands.collapse();

// Expand the nearest collapsible
editor.commands.expand();
```

## Keyboard shortcuts

Provided by `collapsibleKeymapExtension` when registered alongside `collapsibleExtension`:

| Action | Shortcut |
|--------|----------|
| Handle Enter in header | <kbd>Enter</kbd> |
| Handle Backspace in collapsible | <kbd>Backspace</kbd> / <kbd>Ctrl</kbd> + <kbd>Backspace</kbd> |
| Handle Delete in collapsible | <kbd>Delete</kbd> / <kbd>Ctrl</kbd> + <kbd>Delete</kbd> |