---
layout: post
title: Callout Extension in Angular Headless Editor | Syncfusion
description: Learn how to configure the Callout extension in the Angular Headless Editor, including callout variants, toggle commands, shortcuts, and input rules.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdkappliesto: UI Component Suite, Rich Text Editor SDK
---

# Callout in Angular Headless Editor

The `calloutExtension` registers the `callout` block container node for rendering highlighted message boxes such as informational notes, warnings, errors, success and tips.

## Register the extension

```html
<div #editor></div>
```

```ts
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { HeadlessEditor, calloutExtension } from '@syncfusion/ej2-headless-editor';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html'
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('editor') editorRef!: ElementRef<HTMLDivElement>;
  private editor!: HeadlessEditor;

  ngAfterViewInit(): void {
    this.editor = HeadlessEditor.create({ extensions: [calloutExtension] });
    this.editor.mount(this.editorRef.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.editor) {
      this.editor.destroy();
    }
  }
}
```

## Node attributes

| Attribute | Description |
|-----------|--------------|
| `variant` | Visual style variant of the callout: `info`, `warning`, `note`, `success`, `error`, or `tip`. Defaults to `info`. |

## Configure callout options

The `callout` extension provides options to set the default variant and add custom HTML attributes:

| Option | Description | Default |
|--------|-------------|---------|
| `defaultVariant` | Default variant used when creating a callout without specifying one. | `'info'` |
| `htmlAttributes` | Custom HTML attributes applied to the outer callout container element. | `{}` |

Use `.configure()` to apply custom settings:

```html
<div #editor></div>
```

```ts
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { HeadlessEditor, calloutExtension } from '@syncfusion/ej2-headless-editor';

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
        calloutExtension.configure({
          defaultVariant: 'note',
          htmlAttributes: { class: 'custom-callout' }
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
| `toggleCallout({ variant? })` | Toggles a callout wrapper around the current block or selection. Accepts an optional `variant` (`info`, `warning`, `note`, `success`, `error`, or `tip`). If already inside a callout, unwraps the content. |

```ts
// Toggle with default variant
this.editor.commands.toggleCallout();

// Toggle with a warning variant
this.editor.commands.toggleCallout({ variant: 'warning' });
```

## Keyboard shortcut

Refer to the source documentation for the keyboard shortcut details associated with the callout extension.