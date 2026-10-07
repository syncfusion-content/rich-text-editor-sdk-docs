---
layout: post
title: Nodes and Marks Preview | Angular Headless Editor | Syncfusion
description: A preview that exercises the block nodes and inline marks in the Angular Headless Editor, including callout, collapsible, superscript, subscript, and link.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Nodes and Marks Preview

This example demonstrates the built-in **nodes** and **marks** available in the Angular Headless Editor. It includes common text blocks, lists, tables, callouts, collapsible content, and text formatting such as bold, italic, underline, strikethrough, superscript, subscript, inline code, and links.

## Extensions used

The example uses the following extensions:

| Extension              | Description                                       |
| ---------------------- | ------------------------------------------------- |
| `basicExtensions`      | Includes the commonly used nodes and marks.       |
| `tableExtension`       | Adds table support.                               |
| `calloutExtension`     | Adds the callout block.                           |
| `collapsibleExtension` | Adds collapsible content.                         |
| `subscriptExtension`   | Adds the subscript mark.                          |
| `superscriptExtension` | Adds the superscript mark.                        |
| `linkExtension`        | Adds the link mark.                               |

## Nodes

The example demonstrates the following nodes:

| Node             | Description                              |
| ---------------- | ---------------------------------------- |
| `document`       | Defines the root of the document.        |
| `paragraph`      | Adds a paragraph for regular text.       |
| `heading`        | Adds headings from level 1 to 6.         |
| `blockquote`     | Adds a block quote.                      |
| `codeBlock`      | Adds a multi-line code block.            |
| `horizontalRule` | Adds a horizontal divider.               |
| `hardBreak`      | Adds a line break within text.           |
| `bulletList`     | Adds an unordered list.                  |
| `orderedList`    | Adds an ordered list.                    |
| `taskList`       | Adds a checklist.                        |
| `table`          | Adds tables with rows and cells.         |
| `callout`        | Adds a highlighted info box.             |
| `collapsible`    | Adds expandable and collapsible content. |

The `text` node is also included for text content.

## Marks

The example demonstrates the following marks:

| Mark            | Description                       |
| --------------- | --------------------------------- |
| `bold`          | Makes text bold.                  |
| `italic`        | Makes text italic.                |
| `underline`     | Underlines text.                  |
| `strikethrough` | Adds a strikethrough to text.     |
| `code`          | Formats text as inline code.      |
| `superscript`   | Raises text above the baseline.   |
| `subscript`     | Lowers text below the baseline.   |
| `link`          | Adds a hyperlink to text.         |

## Preview sample

The following example registers the required extensions and loads sample content into the editor.

```html
<div #editor></div>
```

```ts
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import {
  HeadlessEditor,
  basicExtensions,
  tableExtension,
  calloutExtension,
  collapsibleExtension,
  subscriptExtension,
  superscriptExtension,
  linkExtension,
  type DocumentRoot,
  TextNode
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
    const initialDocument: DocumentRoot = {
      type: 'document',
      schemaVersion: 1,
      attrs: {},
      children: [
          {
              type: 'heading', attrs: { level: 2, align: null, indent: 0 },
              children: [{ type: 'text', text: 'Headless Editor Demo', attrs: {}, children: [], marks: [] } as TextNode],
              marks: []
          },
          {
              type: 'paragraph', attrs: { align: null, indent: 0 },
              children: [
                  { type: 'text', text: 'A short tour of the ', attrs: {}, children: [], marks: [] }  as TextNode,
                  { type: 'text', text: 'block nodes', attrs: {}, children: [], marks: [{ type: 'bold', attrs: {} }] }  as TextNode,
                  { type: 'text', text: ' and ', attrs: {}, children: [], marks: [] },
                  { type: 'text', text: 'inline marks', attrs: {}, children: [], marks: [{ type: 'italic', attrs: {} }] }  as TextNode,
                  { type: 'text', text: ' you can register through the built-in extensions.', attrs: {}, children: [], marks: [] }  as TextNode
              ],
              marks: []
          },
          {
              type: 'heading', attrs: { level: 3, align: null, indent: 0 },
              children: [{ type: 'text', text: 'Blockquote', attrs: {}, children: [], marks: [] }  as TextNode],
              marks: []
          },
          {
              type: 'blockquote', attrs: {},
              children: [{
                  type: 'paragraph', attrs: { align: null, indent: 0 },
                  children: [{ type: 'text', text: 'Blockquote blocks are used for quoted passages.', attrs: {}, children: [], marks: [] } as TextNode],
                  marks: []
              }],
              marks: []
          },
          {
              type: 'heading', attrs: { level: 3, align: null, indent: 0 },
              children: [{ type: 'text', text: 'Lists', attrs: {}, children: [], marks: [] } as TextNode],
              marks: []
          },
          {
              type: 'bulletList', attrs: {},
              children: [
                  { type: 'listItem', attrs: {}, children: [{
                      type: 'paragraph', attrs: { align: null, indent: 0 },
                      children: [{ type: 'text', text: 'Bullet item one', attrs: {}, children: [], marks: [] } as TextNode],
                      marks: []
                  }], marks: [] },
                  { type: 'listItem', attrs: {}, children: [{
                      type: 'paragraph', attrs: { align: null, indent: 0 },
                      children: [{ type: 'text', text: 'Bullet item two', attrs: {}, children: [], marks: [] } as TextNode],
                      marks: []
                  }], marks: [] }
              ],
              marks: []
          },
          {
              type: 'orderedList', attrs: {},
              children: [
                  { type: 'listItem', attrs: {}, children: [{
                      type: 'paragraph', attrs: { align: null, indent: 0 },
                      children: [{ type: 'text', text: 'Step one', attrs: {}, children: [], marks: [] } as TextNode],
                      marks: []
                  }], marks: [] },
                  { type: 'listItem', attrs: {}, children: [{
                      type: 'paragraph', attrs: { align: null, indent: 0 },
                      children: [{ type: 'text', text: 'Step two', attrs: {}, children: [], marks: [] } as TextNode],
                      marks: []
                  }], marks: [] }
              ],
              marks: []
          },
          {
              type: 'taskList', attrs: {},
              children: [
                  { type: 'taskItem', attrs: { checked: true }, children: [{
                      type: 'paragraph', attrs: { align: null, indent: 0 },
                      children: [{ type: 'text', text: 'Reviewed demo', attrs: {}, children: [], marks: [] } as TextNode],
                      marks: []
                  }], marks: [] },
                  { type: 'taskItem', attrs: { checked: false }, children: [{
                      type: 'paragraph', attrs: { align: null, indent: 0 },
                      children: [{ type: 'text', text: 'Add a custom extension', attrs: {}, children: [], marks: [] } as TextNode],
                      marks: []
                  }], marks: [] }
              ],
              marks: []
          },
          {
              type: 'heading', attrs: { level: 3, align: null, indent: 0 },
              children: [{ type: 'text', text: 'Callout', attrs: {}, children: [], marks: [] } as TextNode],
              marks: []
          },
          {
              type: 'callout', attrs: { variant: 'info' },
              children: [{
                  type: 'paragraph', attrs: { align: null, indent: 0 },
                  children: [{ type: 'text', text: 'Callouts draw attention to a section of the document.', attrs: {}, children: [], marks: [] } as TextNode],
                  marks: []
              }],
              marks: []
          },
          {
              type: 'heading', attrs: { level: 3, align: null, indent: 0 },
              children: [{ type: 'text', text: 'Code block', attrs: {}, children: [], marks: [] } as TextNode],
              marks: []
          },
          {
              type: 'codeBlock', attrs: { language: 'typescript' },
              children: [{ type: 'text', text: "const editor = HeadlessEditor.create({ extensions: [basicExtensions] });", attrs: {}, children: [], marks: [] } as TextNode],
              marks: []
          },
          {
              type: 'heading', attrs: { level: 3, align: null, indent: 0 },
              children: [{ type: 'text', text: 'Inline marks', attrs: {}, children: [], marks: [] } as TextNode],
              marks: []
          },
          {
              type: 'paragraph', attrs: { align: null, indent: 0 },
              children: [
                  { type: 'text', text: 'Use ', attrs: {}, children: [], marks: [] } as TextNode,
                  { type: 'text', text: 'bold', attrs: {}, children: [], marks: [{ type: 'bold', attrs: {} }] } as TextNode,
                  { type: 'text', text: ', ', attrs: {}, children: [], marks: [] },
                  { type: 'text', text: 'italic', attrs: {}, children: [], marks: [{ type: 'italic', attrs: {} }] } as TextNode,
                  { type: 'text', text: ', and ', attrs: {}, children: [], marks: [] },
                  { type: 'text', text: 'underline', attrs: {}, children: [], marks: [{ type: 'underline', attrs: {} }] } as TextNode,
                  { type: 'text', text: ' for emphasis; ', attrs: {}, children: [], marks: [] },
                  { type: 'text', text: 'strikethrough', attrs: {}, children: [], marks: [{ type: 'strikethrough', attrs: {} }] } as TextNode,
                  { type: 'text', text: ' marks removals. E = mc', attrs: {}, children: [], marks: [] },
                  { type: 'text', text: '2', attrs: {}, children: [], marks: [{ type: 'superscript', attrs: {} }] } as TextNode,
                  { type: 'text', text: ', H', attrs: {}, children: [], marks: [] },
                  { type: 'text', text: '2', attrs: {}, children: [], marks: [{ type: 'subscript', attrs: {} }] } as TextNode,
                  { type: 'text', text: 'O. Inline ', attrs: {}, children: [], marks: [] },
                  { type: 'text', text: 'code', attrs: {}, children: [], marks: [{ type: 'code', attrs: {} }] } as TextNode,
                  { type: 'text', text: ' and ', attrs: {}, children: [], marks: [] } as TextNode,
                  { type: 'text', text: 'links', attrs: {}, children: [], marks: [{
                      type: 'link', attrs: { href: 'https://ej2.syncfusion.com/documentation/block-editor/getting-started', title: null, target: null, rel: null }
                  }] },
                  { type: 'text', text: ' round out the set.', attrs: {}, children: [], marks: [] }
              ],
              marks: []
          },
          {
              type: 'heading', attrs: { level: 3, align: null, indent: 0 },
              children: [{ type: 'text', text: 'Table block', attrs: {}, children: [], marks: [] } as TextNode],
              marks: []
          },
          {
              type: 'table', attrs: {},
              children: [
                  { type: 'tableRow', attrs: {}, children: [
                      { type: 'tableHeader', attrs: { colspan: 1, rowspan: 1, colwidth: null, align: null, verticalAlign: null, backgroundColor: null, color: null, borderColor: null },
                        children: [{ type: 'paragraph', attrs: { align: null, indent: 0 },
                          children: [{ type: 'text', text: 'Name', attrs: {}, children: [], marks: [] } as TextNode], marks: [] }], marks: [] },
                      { type: 'tableHeader', attrs: { colspan: 1, rowspan: 1, colwidth: null, align: null, verticalAlign: null, backgroundColor: null, color: null, borderColor: null },
                        children: [{ type: 'paragraph', attrs: { align: null, indent: 0 },
                          children: [{ type: 'text', text: 'Role', attrs: {}, children: [], marks: [] } as TextNode], marks: [] }], marks: [] }
                  ], marks: [] },
                  { type: 'tableRow', attrs: {}, children: [
                      { type: 'tableCell', attrs: { colspan: 1, rowspan: 1, colwidth: null, align: null, verticalAlign: null, backgroundColor: null, color: null, borderColor: null },
                        children: [{ type: 'paragraph', attrs: { align: null, indent: 0 },
                          children: [{ type: 'text', text: 'Selma Rose', attrs: {}, children: [], marks: [] } as TextNode], marks: [] }], marks: [] },
                      { type: 'tableCell', attrs: { colspan: 1, rowspan: 1, colwidth: null, align: null, verticalAlign: null, backgroundColor: null, color: null, borderColor: null },
                        children: [{ type: 'paragraph', attrs: { align: null, indent: 0 },
                          children: [{ type: 'text', text: 'Lead designer', attrs: {}, children: [], marks: [] } as TextNode], marks: [] }], marks: [] }
                  ], marks: [] },
                  { type: 'tableRow', attrs: {}, children: [
                      { type: 'tableCell', attrs: { colspan: 1, rowspan: 1, colwidth: null, align: null, verticalAlign: null, backgroundColor: null, color: null, borderColor: null },
                        children: [{ type: 'paragraph', attrs: { align: null, indent: 0 },
                          children: [{ type: 'text', text: 'Andrew James', attrs: {}, children: [], marks: [] } as TextNode], marks: [] }], marks: [] },
                      { type: 'tableCell', attrs: { colspan: 1, rowspan: 1, colwidth: null, align: null, verticalAlign: null, backgroundColor: null, color: null, borderColor: null },
                        children: [{ type: 'paragraph', attrs: { align: null, indent: 0 },
                          children: [{ type: 'text', text: 'Engineer', attrs: {}, children: [], marks: [] } as TextNode], marks: [] }], marks: [] }
                  ], marks: [] }
              ],
              marks: []
          },
          {
              type: 'heading', attrs: { level: 3, align: null, indent: 0 },
              children: [{ type: 'text', text: 'Collapsible block', attrs: {}, children: [], marks: [] } as TextNode],
              marks: []
          },
          {
              type: 'collapsible', attrs: { collapsed: false },
              children: [
                  { type: 'collapsibleHeader', attrs: {}, children: [{
                      type: 'paragraph', attrs: { align: null, indent: 0 },
                      children: [{ type: 'text', text: 'Click to expand', attrs: {}, children: [], marks: [{ type: 'bold', attrs: {} }] } as TextNode],
                      marks: []
                  }], marks: [] },
                  { type: 'collapsibleBody', attrs: {}, children: [{
                      type: 'paragraph', attrs: { align: null, indent: 0 },
                      children: [{ type: 'text', text: 'This is a toggle block. Useful for FAQs or detailed sections.', attrs: {}, children: [], marks: [] } as TextNode],
                      marks: []
                  }], marks: [] }
              ],
              marks: []
          },
          {
              type: 'heading', attrs: { level: 3, align: null, indent: 0 },
              children: [{ type: 'text', text: 'Divider', attrs: {}, children: [], marks: [] } as TextNode],
              marks: []
          },
          {
              type: 'horizontalRule', attrs: {}, children: [], marks: []
          },
          {
              type: 'paragraph', attrs: { align: null, indent: 0 },
              children: [
              ],
              marks: []
          }
      ],
      marks: []
  };

    this.editor = HeadlessEditor.create({
      document: initialDocument,
      extensions: [
        basicExtensions,
        tableExtension,
        collapsibleExtension,
        calloutExtension,
        subscriptExtension,
        superscriptExtension,
        linkExtension
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