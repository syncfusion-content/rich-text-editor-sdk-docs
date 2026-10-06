---
layout: post
title: Collapsible Extension in Angular Headless Editor | Syncfusion
description: Learn how to configure the Collapsible extension in the Angular Headless Editor, including expandable sections, toggle commands, and keyboard navigation.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdkappliesto: UI Component Suite, Rich Text Editor SDK
---

# Collapsible in Angular Headless Editor

The `collapsibleExtension` registers the `collapsible` block container along with `collapsibleHeader` and `collapsibleBody` child nodes for rendering expandable and collapsible content sections.

## Register the extension

```html
<div #editor></div>
```

```ts
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { HeadlessEditor, collapsibleExtension } from '@syncfusion/ej2-headless-editor';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html'
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('editor') editorRef!: ElementRef<HTMLDivElement>;
  private editor!: HeadlessEditor;

  ngAfterViewInit(): void {
    this.editor = HeadlessEditor.create({ extensions: [collapsibleExtension] });
    this.editor.mount(this.editorRef.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.editor) {
      this.editor.destroy();
    }
  }
}
```

I> The editor automatically registers `collapsibleKeymapExtension` when `collapsibleExtension` is registered, so <kbd>Enter</kbd>, <kbd>Backspace</kbd>, and <kbd>Delete</kbd> handling inside collapsible sections is enabled without an extra import.

## Node attributes

### collapsible

| Attribute | Description | Default |
|-----------|-------------|---------|
| `collapsed` | When `true`, the body content is collapsed and hidden. When `false`, the body is expanded and visible. | `false` |

`collapsibleHeader` and `collapsibleBody` nodes do not expose additional attributes.

## Configure collapsible options

The `collapsible` extension exposes an `htmlAttributes` option that adds custom HTML attributes to the outer collapsible `<div>` container. The `data-type` and `data-collapsed` attributes are always applied. It defaults to an empty object.

```html
<div #editor></div>
```

```ts
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { HeadlessEditor, collapsibleExtension } from '@syncfusion/ej2-headless-editor';

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
        collapsibleExtension.configure({
          htmlAttributes: { class: 'custom-collapsible' }
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
| `toggleCollapsible({ triggerType, level? })` | Wraps the current block in a collapsible, or unwraps it if the selection is already inside one. `triggerType` selects the block type of the collapsible trigger child: `heading` or `paragraph`. When `triggerType` is `heading`, `level` sets the heading level (1 to 6) and defaults to `1`. |
| `collapse({ pos? })` | Sets `collapsed` to `true` on the nearest collapsible ancestor. Pass an explicit document `pos` to target a specific collapsible (used by custom NodeViews). |
| `expand({ pos? })` | Sets `collapsed` to `false` on the nearest collapsible ancestor. Pass an explicit document `pos` to target a specific collapsible (used by custom NodeViews). |

```ts
// Wrap the current block as a heading-triggered collapsible (level 1)
this.editor.commands.toggleCollapsible({ triggerType: 'heading', level: 2 });

// Wrap the current block as a paragraph-triggered collapsible
this.editor.commands.toggleCollapsible({ triggerType: 'paragraph' });

// Collapse the nearest collapsible
this.editor.commands.collapse();

// Expand the nearest collapsible
this.editor.commands.expand();
```

## Keyboard shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Toggle Collapsible (paragraph trigger) | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>[</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>[</kbd> |
| Collapse nearest collapsible | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>,</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>,</kbd> |
| Expand nearest collapsible | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>.</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>.</kbd> |

I> To create a heading-triggered collapsible via keyboard, call `toggleCollapsible({ triggerType: 'heading', level: N })` programmatically. The `Mod-Alt-[` shortcut always toggles a paragraph-triggered collapsible.