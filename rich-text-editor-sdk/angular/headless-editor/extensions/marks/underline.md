---
layout: post
title: Underline Mark in Angular Headless Editor | Syncfusion
description: Learn how to configure the Underline mark in the Angular Headless Editor, including attributes, commands, keyboard shortcuts, and input rules.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdkappliesto: UI Component Suite, Rich Text Editor SDK
---

# Underline Mark in Angular Headless Editor

The `underlineExtension` registers the `underline` mark, which applies underline formatting to text and renders the content as a `<u>` element. It contributes the `toggleUnderline` command, a keyboard shortcut for toggling underline, and input rules that convert `++text++` into underline as the user types.

## Register the extension

```html
<div #editor></div>
```

```ts
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { HeadlessEditor, underlineExtension } from '@syncfusion/ej2-headless-editor';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html'
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('editor') editorRef!: ElementRef<HTMLDivElement>;
  private editor!: HeadlessEditor;

  ngAfterViewInit(): void {
    this.editor = HeadlessEditor.create({ extensions: [underlineExtension] });
    this.editor.mount(this.editorRef.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.editor) {
      this.editor.destroy();
    }
  }
}
```

## Configure the extension

The `underline` extension exposes an `htmlAttributes` option that adds custom HTML attributes to every rendered `<u>` element. Use `.configure()` to set it:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `htmlAttributes` | `Record<string, string>` | `{}` | Custom HTML attributes applied to the rendered `<u>` element. |

```html
<div #editor></div>
```

```ts
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { HeadlessEditor, underlineExtension } from '@syncfusion/ej2-headless-editor';

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
        underlineExtension.configure({
          htmlAttributes: { class: 'my-custom-class' }
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
|---------|-------------|
| `toggleUnderline()` | Toggles underline formatting on the current selection. |

```ts
this.editor.commands.toggleUnderline();
```

## Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Toggle Underline | <kbd>Ctrl</kbd> + <kbd>U</kbd> | <kbd>⌘</kbd> + <kbd>U</kbd> |

## Input rules

The Underline mark supports `++text++` syntax for inline conversion.

```text
Type:    ++draft++
Result:  <u>draft</u>
```