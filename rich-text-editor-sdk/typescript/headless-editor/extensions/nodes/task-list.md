---
layout: post
title: Task List Extension in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the Task List extension in the TypeScript Headless Editor, including checkable items, toggle commands, and markdown input rules.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Task List in TypeScript Headless Editor

The `taskListExtension` registers the `taskList` container and `taskItem` nodes for rendering checkable to-do lists.

## Register the extension

```html
<div id="editor"></div>
```

```ts
import { HeadlessEditor, taskListExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [taskListExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

I> The editor automatically registers `listKeymapExtension` whenever `listExtension` or `taskListExtension` is registered, so list navigation keys (<kbd>Tab</kbd>, <kbd>Shift</kbd> + <kbd>Tab</kbd>, <kbd>Enter</kbd>, and <kbd>Backspace</kbd>) are enabled without an extra import.

## Node attributes

| Attribute | Description |
|-----------|--------------|
| `checked` | Boolean state of the task item checkbox (`true` or `false`). Defaults to `false`. |

## Configure task list options

The `task-list` extension supports configuring container attributes, item attributes, and nested list structure:

| Option | Description | Default Value |
|--------|-------------|---------------|
| `nested` | When `true`, allows nested blocks (sub-lists, quotes) inside task items. When `false`, restricts items to paragraphs only. | `true` |
| `htmlAttributes` | Custom HTML attributes applied to the `<ul data-type="taskList">` element. | `{}` |
| `itemHtmlAttributes` | Custom HTML attributes applied to each `<li data-type="taskItem">` element. | `{}` |

```html
<div id="editor"></div>
```

```ts
import { HeadlessEditor, taskListExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        taskListExtension.configure({
            nested: true,
            htmlAttributes: { class: 'custom-task-list' }
        })
    ]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

## Commands

| Command | Description |
|---------|--------------|
| `toggleTaskList({ keepMarks?, checked? })` | Toggles the task list container on the current selection. Accepts an optional `keepMarks` to retain active formatting marks, and `checked` to set the initial checked state of the new task items. |
| `toggleTaskChecked({ pos? })` | Toggles the checked state of the active task item or the task item at the given document position. |

```ts
// Toggle task list on selection
editor.commands.toggleTaskList();

// Toggle task list and seed new items as checked
editor.commands.toggleTaskList({ checked: true });

// Toggle task list while keeping active marks
editor.commands.toggleTaskList({ keepMarks: true });

// Toggle check state of current item
editor.commands.toggleTaskChecked();
```

## Keyboard shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Toggle Task List | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>7</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>7</kbd> |
| Toggle Checked State | <kbd>Ctrl</kbd> + <kbd>Enter</kbd> | <kbd>⌘</kbd> + <kbd>Enter</kbd> |

## Input rules

Type the following at the start of a line to convert the block into a task list:

* `-[ ] ` creates an unchecked task item
* `-[x] ` creates a checked task item
