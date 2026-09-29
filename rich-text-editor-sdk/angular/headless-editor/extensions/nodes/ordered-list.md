---
layout: post
title: Ordered List Extension in Angular Headless Editor | Syncfusion
description: Learn how to configure the Ordered List extension in the Angular Headless Editor, including start numbering, numbering formats, and commands.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Ordered List in Angular Headless Editor

The `listExtension` provides built-in support for numbered lists (`<ol>`) and list items (`<li>`).

## Register the extension

```html
<div #editor></div>
```

```ts
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { HeadlessEditor, listExtension } from '@syncfusion/ej2-headless-editor';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html'
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('editor') editorRef!: ElementRef<HTMLDivElement>;
  private editor!: HeadlessEditor;

  ngAfterViewInit(): void {
    this.editor = HeadlessEditor.create({ extensions: [listExtension] });
    this.editor.mount(this.editorRef.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.editor) {
      this.editor.destroy();
    }
  }
}
```

I> The editor automatically registers `listKeymapExtension` whenever `listExtension` or `taskListExtension` is registered, so list navigation keys (<kbd>Tab</kbd>, <kbd>Shift</kbd> + <kbd>Tab</kbd>, <kbd>Enter</kbd>, and <kbd>Backspace</kbd>) are enabled without an extra import.

## Node attributes

| Attribute | Description |
|-----------|--------------|
| `order` | Starting number of the list, rendered as the HTML `start` attribute on `<ol>`. Defaults to `1`. |
| `listStyleType` | Numbering style format (`decimal`, `lower-alpha`, `upper-alpha`, `lower-roman`, `upper-roman`). Rendered as inline `list-style-type` CSS. Defaults to `decimal`. |

## Configure list options

The `list` extension supports custom HTML attributes for both the list container (`<ol>`) and its items (`<li>`):

| Option | Description | Default |
|--------|-------------|---------|
| `htmlAttributes` | Custom HTML attributes applied to the outer `<ol>` element. | `{}` |
| `itemHtmlAttributes` | Custom HTML attributes applied to every child `<li>` element. | `{}` |

```html
<div #editor></div>
```

```ts
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { HeadlessEditor, listExtension } from '@syncfusion/ej2-headless-editor';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html'
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('editor') editorRef!: ElementRef<HTMLDivElement>;
  private editor!: HeadlessEditor;

  ngAfterViewInit(): void {
    this.editor = HeadlessEditor.create({
      extensions: [
        listExtension.configure({
          htmlAttributes: { class: 'custom-ordered-list' },
          itemHtmlAttributes: { class: 'custom-list-item' }
        })
      ]
    });
    this.editor.mount(this.editorRef.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.editor) {
      this.editor.destroy();
    }
  }
}
```

## Commands

| Command | Description |
|---------|--------------|
| `toggleOrderedList({ listStyleType?, keepMarks? })` | Toggles the ordered list format on the current block or selection. Accepts an optional `listStyleType` (`decimal`, `lower-alpha`, `upper-alpha`, `lower-roman`, `upper-roman`) to toggle directly into that numbering style or update an existing list's style, and `keepMarks` to retain active formatting marks. |
| `setOrderedListType({ listStyleType })` | Sets the numbering format (`decimal`, `lower-alpha`, `upper-alpha`, `lower-roman`, `upper-roman`) for the active list. |
| `indentListItem()` | Indents the active list item to create a nested sub-list. |
| `outdentListItem()` | Outdents the active list item to the parent list level or converts it back to a standard block. |

```ts
// Toggle default ordered list (decimal)
this.editor.commands.toggleOrderedList();

// Toggle directly with a specific numbering format (e.g., lower-alpha)
this.editor.commands.toggleOrderedList({ listStyleType: 'lower-alpha' });

// Set numbering style on an existing list
this.editor.commands.setOrderedListType({ listStyleType: 'lower-roman' });

// Indent active item
this.editor.commands.indentListItem();
```

## Keyboard shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Toggle Ordered List | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>9</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>9</kbd> |
| Indent Item | <kbd>Tab</kbd> | <kbd>Tab</kbd> |
| Outdent Item | <kbd>Shift</kbd> + <kbd>Tab</kbd> | <kbd>Shift</kbd> + <kbd>Tab</kbd> |

## Input rules

Type `1.` followed by a space at the start of a line to convert the block into an ordered list starting at number 1.