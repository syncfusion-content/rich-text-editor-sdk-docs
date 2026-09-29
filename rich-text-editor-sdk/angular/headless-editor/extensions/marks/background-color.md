---
layout: post
title: Background Color Mark in Angular Headless Editor | Syncfusion
description: Learn how to configure the Background Color mark in the Angular Headless Editor, including setHighlight, unsetHighlight commands, and HTML output.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Background Color Mark in Angular Headless Editor

The `backgroundColorExtension` registers the `backgroundColor` capability, which applies a background highlight to text. Color values are stored using the shared `textStyle` mark, allowing background color to coexist with other text style attributes such as font family, font size, and font color. It contributes the `setHighlight` and `unsetHighlight` commands.

Supported color formats include hex values (`#ffff00`), RGB/RGBA values (`rgb(255, 255, 0)`), and named CSS colors (`yellow`).

## Register the extension

```html
<div #editor></div>
```

```ts
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { HeadlessEditor, backgroundColorExtension } from '@syncfusion/ej2-headless-editor';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html'
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('editor') editorRef!: ElementRef<HTMLDivElement>;
  private editor!: HeadlessEditor;

  ngAfterViewInit(): void {
    this.editor = HeadlessEditor.create({ extensions: [backgroundColorExtension] });
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
|---------|-------------|
| `setHighlight({ color })` | Applies the specified background color to the current selection. |
| `unsetHighlight()` | Removes the background color from the current selection. |

```ts
// Apply yellow highlight to the current selection
this.editor.commands.setHighlight({ color: '#ffff00' });

// Remove the highlight from the current selection
this.editor.commands.unsetHighlight();
```