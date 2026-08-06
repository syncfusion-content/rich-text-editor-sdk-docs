---
layout: post
title: Drag and Drop in React Rich Text Editor SDK | Syncfusion
description: Enable drag-and-drop interactions in the React Rich Text Editor, Block Editor, and Markdown Editor using Draggable and Droppable utilities.
control: Common
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Drag and Drop in the React Rich Text Editor SDK

Drag and drop lets users select one or more items and move them to a different location or onto another interface element using mouse, touch, or pen input. The React Rich Text Editor SDK — **Rich Text Editor**, **Block Editor**, and **Markdown Editor** — exposes the same drag-and-drop foundation through Syncfusion's core utilities: [`Draggable`](https://ej2.syncfusion.com/documentation/api/base/draggable/) and [`Droppable`](https://ej2.syncfusion.com/documentation/api/base/droppable/) from `@syncfusion/ej2-base`.

Use these utilities to add custom drag handles, reorder blocks, validate drop targets, or build palette-style block pickers across all three editors.

```bash
npm install @syncfusion/ej2-base --save
```

```ts
import { Draggable, Droppable } from '@syncfusion/ej2-base';
```

## Draggable

The [`Draggable`](https://ej2.syncfusion.com/documentation/api/base/draggable/) utility converts any DOM element into a draggable item. Each editor in the SDK renders its content inside an element you can target — pass the editor's content selector (or any custom element inside the editor) to `Draggable` to attach the behavior.

The snippets below show the same pattern for each editor. The `target` differs because each editor has its own content wrapper; the API usage is identical.

{% tabcontents %}

{% tabcontent Rich Text Editor %}

```ts
import { Draggable } from '@syncfusion/ej2-base';
import {
  RichTextEditorComponent, Inject, Toolbar, HtmlEditor
} from '@syncfusion/ej2-react-richtexteditor';

export default function App() {
  return (
    <RichTextEditorComponent>
      <p>Drag this paragraph to a new position.</p>
      <Inject services={[Toolbar, HtmlEditor]} />
    </RichTextEditorComponent>
  );
}

// After mount, attach Draggable to the editor's content area.
new Draggable(document.querySelector('.e-rte-content .e-content') as HTMLElement, {
  clone: false
});
```

{% endtabcontent %}

{% tabcontent Block Editor %}

```ts
import { Draggable } from '@syncfusion/ej2-base';
import { BlockEditorComponent, ParagraphBlock } from '@syncfusion/ej2-react-blockeditor';

export default function App() {
  return (
    <BlockEditorComponent blocks={[ParagraphBlock]}>
      <p>Drag this block to a new position.</p>
    </BlockEditorComponent>
  );
}

// After mount, attach Draggable to the Block Editor's content area.
new Draggable(document.querySelector('.e-blockeditor .e-content') as HTMLElement, {
  clone: false
});
```

{% endtabcontent %}

{% tabcontent Markdown Editor %}

```ts
import { Draggable } from '@syncfusion/ej2-base';
import {
  MarkdownEditorComponent, Inject, Toolbar, MarkdownFormatter
} from '@syncfusion/ej2-react-markdowneditor';

export default function App() {
  return (
    <MarkdownEditorComponent>
      <p>Drag this section to a new position.</p>
      <Inject services={[Toolbar, MarkdownFormatter]} />
    </MarkdownEditorComponent>
  );
}

// After mount, attach Draggable to the Markdown Editor's content area.
new Draggable(document.querySelector('.e-md-editor .e-content') as HTMLElement, {
  clone: false
});
```

{% endtabcontent %}

{% endtabcontents %}

### Clone the draggable element

Set [`clone`](https://ej2.syncfusion.com/documentation/api/base/draggable/#clone) to `true` to render a copy that follows the cursor while the original stays in place. Useful for palette-style block pickers in the Block Editor, or for inserting reusable content snippets into the Rich Text Editor and Markdown Editor.

The pattern is the same for all three editors — only the target selector changes.

### Drag area

Constrain movement to a container by setting [`dragArea`](https://ej2.syncfusion.com/documentation/api/base/draggable/#dragarea) to a CSS selector or DOM element. Use this to keep blocks within the editor's content region and prevent drops outside the editing area.

## Droppable

A droppable zone accepts and responds to draggable elements released over it. The [`Droppable`](https://ej2.syncfusion.com/documentation/api/base/droppable/) utility converts any DOM element into a valid drop target.

When a draggable is released over a droppable, the [`drop`](https://ej2.syncfusion.com/documentation/api/base/droppable/#drop) event fires with the dropped element, the target, and the original drag source. Use the event to append elements, update data models, or apply visual feedback.

The pattern works the same way on any editor's content wrapper — pick the tab for the editor you use.

{% tabcontents %}

{% tabcontent Rich Text Editor %}

```ts
import { Droppable } from '@syncfusion/ej2-base';
import {
  RichTextEditorComponent, Inject, Toolbar, HtmlEditor
} from '@syncfusion/ej2-react-richtexteditor';

export default function App() {
  return (
    <RichTextEditorComponent>
      <p id="drop-target">Drop content here.</p>
      <Inject services={[Toolbar, HtmlEditor]} />
    </RichTextEditorComponent>
  );
}

// After mount, make the inner element a drop target.
new Droppable(document.querySelector('#drop-target') as HTMLElement);
```

{% endtabcontent %}

{% tabcontent Block Editor %}

```ts
import { Droppable } from '@syncfusion/ej2-base';
import { BlockEditorComponent, ParagraphBlock } from '@syncfusion/ej2-react-blockeditor';

export default function App() {
  return (
    <BlockEditorComponent blocks={[ParagraphBlock]}>
      <p id="drop-target">Drop a block here.</p>
    </BlockEditorComponent>
  );
}

// After mount, make the inner element a drop target.
new Droppable(document.querySelector('#drop-target') as HTMLElement);
```

{% endtabcontent %}

{% tabcontent Markdown Editor %}

```ts
import { Droppable } from '@syncfusion/ej2-base';
import {
  MarkdownEditorComponent, Inject, Toolbar, MarkdownFormatter
} from '@syncfusion/ej2-react-markdowneditor';

export default function App() {
  return (
    <MarkdownEditorComponent>
      <p id="drop-target">Drop content here.</p>
      <Inject services={[Toolbar, MarkdownFormatter]} />
    </MarkdownEditorComponent>
  );
}

// After mount, make the inner element a drop target.
new Droppable(document.querySelector('#drop-target') as HTMLElement);
```

{% endtabcontent %}

{% endtabcontents %}

## See also

* [Quick Start for the React Rich Text Editor SDK](../components/rich-text-editor/quick-start)
* [Block Editor — Getting Started](../components/block-editor/getting-started)
* [Markdown Editor — Getting Started](../components/markdown-editor/getting-started)
