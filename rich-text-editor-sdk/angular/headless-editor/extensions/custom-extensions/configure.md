---
layout: post
title: Configure an Extension in Angular Headless Editor | Syncfusion
description: Learn how to customize an extension's options with the configure method and how the merge behavior affects defaults.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Configure an Extension in Angular Headless Editor

Use `ExtensionDefinition.configure(options)` to change an extension's option values without rebuilding the extension from scratch. The call returns a new extension with the supplied options layered on top of the defaults.

## Signature

```ts
configure(options: Partial<TOptions>): ExtensionDefinition<TOptions>
```

`TOptions` is the extension's option shape. The `configure` method only affects the option values; every other contributor (`nodes`, `marks`, `commands`, `keyboardShortcuts`, and so on) is inherited unchanged from the base definition.

## How the merge works

`configure` merges the supplied options over the defaults returned by `defineOptions`. The merge is shallow; nested objects are not deep-merged.

```ts
const baseExtension = defineExtension({
    name: 'counter',
    defineOptions: () => ({ start: 0, step: 1, max: 10 })
});

const zeroStepExtension = baseExtension.configure({ step: 0 });
// zeroStepExtension has: { start: 0, step: 0, max: 10 }
```

## New definition per call

`configure` returns a new `ExtensionDefinition`. The original definition is unchanged, so a base extension can be customized differently for different editors.

```ts
const baseExtension = defineExtension({
    name: 'counter',
    defineOptions: () => ({ start: 0, step: 1 })
});

const themedExtension = baseExtension.configure({ step: 5 });

baseExtension.config.defineOptions?.().step; // 1
themedExtension.config.defineOptions?.().step; // 5
```

## Configure vs extend

| Use `configure` when | Use `extend` when |
|----------------------|---------------------|
| You only want to change option values. | You want to add, replace, or remove a contributor. |
| You want defaults to be inherited. | You want a new `nodes`, `marks`, `commands`, etc. |

## Example: changing the `htmlAttributes` default

Most built-in extensions expose an `htmlAttributes` option through the shared `ExtensionOptions` interface. Pass a partial set of attributes and the rest of the defaults are preserved.

```html
<div #editor></div>
```
```ts
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { HeadlessEditor, paragraphExtension } from '@syncfusion/ej2-headless-editor';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html'
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('editor') editorRef!: ElementRef<HTMLDivElement>;
  private editor!: HeadlessEditor;

  ngAfterViewInit(): void {
    const themedBasicExtensions = paragraphExtension.configure({
        htmlAttributes: { class: 'dark-theme' }
    });

    this.editor = HeadlessEditor.create({
        extensions: [themedBasicExtensions]
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