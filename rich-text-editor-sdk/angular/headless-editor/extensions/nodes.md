---
layout: post
title: Node Extensions in Angular Headless Editor | Syncfusion
description: Learn about the node extensions available in the Angular Headless Editor for registering block, inline, and leaf nodes in the editor schema.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Node Extensions in Angular Headless Editor

Node extensions register the schema nodes used by the editor to model content. Every node type — block, inline, or leaf — is contributed by an extension you register when creating an editor.

## Node groups

| Group | Extensions |
|-------|------------|
| Fundamental | [Document](nodes/document), [Text](nodes/text), [Paragraph](nodes/paragraph) |
| Headings and Blocks | [Heading](nodes/heading), [Block Quote](nodes/blockquote), [Callout](nodes/callout), [Code Block](nodes/code-block), [Horizontal Rule](nodes/horizontal-rule), [Hard Break](nodes/hard-break) |
| Lists | [Bullet List](nodes/bullet-list), [Ordered List](nodes/ordered-list), [Task List](nodes/task-list) |
| Tables | [Table](nodes/table) |
| Media | [Image](nodes/image) |
| Collapsible Content | [Collapsible](nodes/collapsible) |

## Preview sample

The example below mounts an editor with all available node extensions.

```html
<div #editor></div>
```

```ts
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import {
  HeadlessEditor,
  basicExtensions,
  tableExtension,
  imageExtension,
  collapsibleExtension
} from '@syncfusion/ej2-headless-editor';

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
        basicExtensions,
        tableExtension,
        imageExtension,
        collapsibleExtension
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
