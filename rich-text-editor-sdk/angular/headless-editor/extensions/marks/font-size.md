---
layout: post
title: Font Size Mark in Angular Headless Editor | Syncfusion
description: Learn how to configure the Font Size mark in the Angular Headless Editor, including setFontSize, unsetFontSize commands, and HTML output.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Font Size Mark in Angular Headless Editor

The `fontSizeExtension` registers the `fontSize` capability, which applies a font size to text. Size values are stored using the shared `textStyle` mark, allowing font size to coexist with other text style attributes such as font family, font color, and background color. It contributes the `setFontSize` and `unsetFontSize` commands.

Supported size formats include absolute units (`14px`, `12pt`), relative units (`1.2em`, `0.9rem`, `150%`), and CSS keywords (`small`, `medium`, `large`, `x-large`).

## Register the extension

```html
<div #editor></div>
```

```ts
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { HeadlessEditor, fontSizeExtension } from '@syncfusion/ej2-headless-editor';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html'
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('editor') editorRef!: ElementRef<HTMLDivElement>;
  private editor!: HeadlessEditor;

  ngAfterViewInit(): void {
    this.editor = HeadlessEditor.create({ extensions: [fontSizeExtension] });
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
| `setFontSize({ size })` | Applies the specified font size to the current selection. |
| `unsetFontSize()` | Removes the font size from the current selection. |

```ts
// Apply 14px font size to the current selection
this.editor.commands.setFontSize({ size: '14px' });

// Remove the font size from the current selection
this.editor.commands.unsetFontSize();
```