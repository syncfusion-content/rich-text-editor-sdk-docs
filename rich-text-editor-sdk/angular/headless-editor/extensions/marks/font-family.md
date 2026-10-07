---
layout: post
title: Font Family Mark in Angular Headless Editor | Syncfusion
description: Learn how to configure the Font Family mark in the Angular Headless Editor, including setFontFamily and unsetFontFamily commands.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Font Family Mark in Angular Headless Editor

The `fontFamilyExtension` registers the `fontFamily` capability, which applies a font family to text. Family values are stored using the shared `textStyle` mark, allowing font family to coexist with other text style attributes such as font size, font color, and background color. It contributes the `setFontFamily` and `unsetFontFamily` commands. Family names that contain spaces are automatically wrapped in double quotes in the generated CSS.

## Register the extension

```html
<div #editor></div>
```

```ts
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { HeadlessEditor, fontFamilyExtension } from '@syncfusion/ej2-headless-editor';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html'
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('editor') editorRef!: ElementRef<HTMLDivElement>;
  private editor!: HeadlessEditor;

  ngAfterViewInit(): void {
    this.editor = HeadlessEditor.create({ extensions: [fontFamilyExtension] });
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
| `setFontFamily({ family })` | Applies the specified font family to the current selection. |
| `unsetFontFamily()` | Removes the font family from the current selection. |

```ts
// Apply Arial to the current selection
this.editor.commands.setFontFamily({ family: 'Arial' });

// Apply a font stack with fallback
this.editor.commands.setFontFamily({ family: '"Helvetica Neue", Arial, sans-serif' });

// Remove the font family from the current selection
this.editor.commands.unsetFontFamily();
```