---
layout: post
title: Superscript Mark in Angular Headless Editor | Syncfusion
description: Learn how to configure the Superscript mark in the Angular Headless Editor, including attributes, commands, keyboard shortcuts, and input rules.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Superscript Mark in Angular Headless Editor

The `superscriptExtension` registers the `superscript` mark, which applies superscript formatting to text and renders the content as a `<sup>` element. It contributes the `toggleSuperscript` command, a keyboard shortcut for toggling superscript, and input rules that convert `^text^` into superscript as the user types.

## Register the extension

```html
<div #editor></div>
```

```ts
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { HeadlessEditor, superscriptExtension } from '@syncfusion/ej2-headless-editor';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html'
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('editor') editorRef!: ElementRef<HTMLDivElement>;
  private editor!: HeadlessEditor;

  ngAfterViewInit(): void {
    this.editor = HeadlessEditor.create({ extensions: [superscriptExtension] });
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

The `superscript` extension exposes an `htmlAttributes` option that adds custom HTML attributes to every rendered `<sup>` element. Use `.configure()` to set it:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `htmlAttributes` | `Record<string, string>` | `{}` | Custom HTML attributes applied to the rendered `<sup>` element. |

```html
<div #editor></div>
```

```ts
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { HeadlessEditor, superscriptExtension } from '@syncfusion/ej2-headless-editor';

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
        superscriptExtension.configure({
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
| `toggleSuperscript()` | Toggles superscript formatting on the current selection. |

```ts
this.editor.commands.toggleSuperscript();
```

## Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Toggle Superscript | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>.</kbd> | <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>.</kbd> |

## Input rules

The Superscript mark supports `^text^` syntax for inline conversion.

```text
Type:    ^2^
Result:  <sup>2</sup>
```