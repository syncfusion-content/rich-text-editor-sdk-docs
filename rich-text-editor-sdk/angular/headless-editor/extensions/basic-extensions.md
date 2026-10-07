---
layout: post
title: Basic Extensions Preset in Angular Headless Editor | Syncfusion
description: Learn about the basic extensions preset in the Angular Headless Editor and the extensions it composes for general-purpose document editing.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Basic Extensions in Angular Headless Editor

`basicExtensions` is a preset that includes commonly used built-in extensions for general-purpose document editing. Use it as a drop-in preset instead of registering each extension individually.

## Register the preset

```html
<div #editor></div>
```

```ts
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { HeadlessEditor, basicExtensions } from '@syncfusion/ej2-headless-editor';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html'
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('editor') editorRef!: ElementRef<HTMLDivElement>;
  private editor!: HeadlessEditor;

  ngAfterViewInit(): void {
    this.editor = HeadlessEditor.create({ extensions: [basicExtensions] });
    this.editor.mount(this.editorRef.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.editor) {
      this.editor.destroy();
    }
  }
}
```

All commands, keyboard shortcuts, and input rules contributed by the composed extensions become available immediately:

```ts
this.editor.commands.toggleBold();
this.editor.commands.setHeading({ level: 2 });
this.editor.commands.undo();
```

## Extensions included in the preset

| Category | Extensions |
|----------|------------|
| Document structure | `document`, `paragraph`, `heading`, `blockquote`, `text` |
| Code support | `codeBlock`, `inlineCode` |
| Visual separators | `horizontalRule`, `hardBreak` |
| Lists | `list`, `listKeymap`, `taskList` |
| Text formatting | `bold`, `italic`, `underline`, `strikethrough` |
| History management | `undoRedo` |

I> `basicExtensions` does not include every available node extension, such as `table`, `image`, or `collapsible`. Register those extensions individually alongside `basicExtensions` if your application needs them.

## Adding extensions alongside the preset

You can combine `basicExtensions` with additional individual extensions:

```html
<div #editor></div>
```

```ts
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { HeadlessEditor, basicExtensions, tableExtension, imageExtension } from '@syncfusion/ej2-headless-editor';

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
      extensions: [basicExtensions, tableExtension, imageExtension]
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

## Registering extensions individually

If you need full control over which node types and behavior are available, register the required extensions individually instead of using the preset:

```html
<div #editor></div>
```

```ts
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { HeadlessEditor, documentExtension, paragraphExtension, textExtension } from '@syncfusion/ej2-headless-editor';

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
      extensions: [documentExtension, paragraphExtension, textExtension]
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

Note that `document` and `text` are mandatory for a valid schema, The Headless Editor automatically adds the required `document` and `text` extensions if they are not registered.
