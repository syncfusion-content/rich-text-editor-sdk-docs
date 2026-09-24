---
layout: post
title: Heading Extension in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the Heading extension in the TypeScript Headless Editor, including heading levels (h1-h6), commands, shortcuts, and input rules.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Heading in TypeScript Headless Editor

The `headingExtension` registers the `heading` block node, which renders semantic HTML headings (`<h1>` through `<h6>`).

## Register the extension

```typescript
import { HeadlessEditor, headingExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [headingExtension]
});
```

## Node attributes

| Attribute | Description |
|-----------|--------------|
| `level` | Heading level from `1` to `6`, mapping to HTML tags `<h1>` through `<h6>`. Defaults to `1`. |
| `align` | Text alignment of the heading (`left`, `center`, `right`, or `justify`). No alignment is applied by default. Managed through the Text Alignment extension's commands. |
| `indent` | Indent level of the heading, rendered as `margin-left` in steps of 20px. Defaults to `0` (no indent). Managed through the Indent and Outdent extension's commands. |

## Configure heading options

The `heading` extension exposes an `htmlAttributes` option that adds custom HTML attributes to rendered heading elements. It defaults to an empty object. Use `.configure()` to set it:

```typescript
import { HeadlessEditor, headingExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        headingExtension.configure({
            htmlAttributes: { class: 'custom-heading' }
        })
    ]
});
```

## Commands

| Command | Description |
|---------|--------------|
| `setHeading({ level })` | Converts the current block into a heading at the specified level (`1` to `6`). Existing block attributes like `align` and `indent` are preserved. |

```typescript
// Convert the current block to an <h2>
editor.commands.setHeading({ level: 2 });
```

## Keyboard shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Heading 1 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>1</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>1</kbd> |
| Heading 2 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>2</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>2</kbd> |
| Heading 3 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>3</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>3</kbd> |
| Heading 4 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>4</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>4</kbd> |
| Heading 5 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>5</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>5</kbd> |
| Heading 6 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>6</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>6</kbd> |

## Input rules

Type `#` to `######` followed by a space at the start of a line to convert the block into the corresponding heading level:

* `# ` creates an `<h1>`
* `## ` creates an `<h2>`
* `### ` creates an `<h3>`
* `#### ` creates an `<h4>`
* `##### ` creates an `<h5>`
* `###### ` creates an `<h6>`
