---
layout: post
title: Editing Extensions in Angular Headless Editor | Syncfusion
description: Learn about the editing extensions available in the Angular Headless Editor, including undo and redo, placeholder, text alignment, and indent and outdent.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Editing Extensions in Angular Headless Editor

Editing extensions add the commands, keyboard shortcuts, and runtime behavior that make the editor interactive: history navigation, hint text, alignment, and indentation.

## Editing extension list

| Extension | Covers |
|-----------|--------|
| [Undo and Redo](editing/undo-redo) | History stack, `undo` and `redo` commands, `Ctrl/Cmd+Z` and `Ctrl/Cmd+Y` shortcuts. |
| [Placeholder](editing/placeholder) | Hint text in empty nodes with configurable visibility and styling. |
| [Text Alignment](editing/text-align) | `setTextAlign` and `unsetTextAlign` commands, `Ctrl/Cmd+Shift+L/E/R/J` shortcuts. |
| [Indent and Outdent](editing/indent-outdent) | `indent` and `outdent` commands, shape-aware <kbd>Tab</kbd> and <kbd>Shift</kbd>+<kbd>Tab</kbd> handling. |

## Preview sample

The example below mounts an editor with the editing extensions enabled.

```html
<div #editor></div>
```

```ts
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import {
  HeadlessEditor,
  textAlignExtension,
  indentOutdentExtension,
  placeholderExtension
} from '@syncfusion/ej2-headless-editor';

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
        textAlignExtension,
        indentOutdentExtension,
        placeholderExtension
      ],
      enableTabKey: true
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
