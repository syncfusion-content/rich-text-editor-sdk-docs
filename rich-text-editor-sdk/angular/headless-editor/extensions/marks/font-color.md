---
layout: post
title: Font Color Mark in Angular Headless Editor | Syncfusion
description: Learn how to configure the Font Color mark in the Angular Headless Editor, including setColor, unsetColor commands, and HTML output.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Font Color Mark in Angular Headless Editor

The `fontColorExtension` registers the `fontColor` capability, which applies a foreground color to text. Color values are stored using the shared `textStyle` mark, allowing color to coexist with other text style attributes such as font family, font size, and background color. It contributes the `setColor` and `unsetColor` commands.

Supported color formats include hex values (`#ff0000`), RGB/RGBA values (`rgb(255, 0, 0)`), and named CSS colors.

## Register the extension

```html
<div #editor></div>
```

```ts
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { HeadlessEditor, fontColorExtension } from '@syncfusion/ej2-headless-editor';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html'
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('editor') editorRef!: ElementRef<HTMLDivElement>;
  private editor!: HeadlessEditor;

  ngAfterViewInit(): void {
    this.editor = HeadlessEditor.create({ extensions: [fontColorExtension] });
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
| `setColor({ color })` | Applies the specified color to the current selection. |
| `unsetColor()` | Removes the font color from the current selection. |

```ts
// Apply red color to the current selection
this.editor.commands.setColor({ color: '#ff0000' });

// Remove the font color from the current selection
this.editor.commands.unsetColor();
```