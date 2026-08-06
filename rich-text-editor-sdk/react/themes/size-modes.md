---
layout: post
title: Size Modes in React Rich Text Editor SDK | Syncfusion
description: Learn about size modes (normal and touch) for the Syncfusion React Rich Text Editor SDK and how to enable and customize them.
platform: rich-text-editor-sdk
control: Size Modes
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Size Modes

Syncfusion<sup style="font-size:70%">&reg;</sup> React Rich Text Editor SDK components — **Rich Text Editor**, **Block Editor**, and **Markdown Editor** — provide two size modes to support consistent experiences across devices: **normal** (default) and **touch** (bigger). These modes adapt the interface for mouse/keyboard and touch interactions, enhancing usability and accessibility.

Each complete theme stylesheet includes styles for both modes, which increases the file size. Optimized (`lite`) stylesheets include only the normal size mode and ship with each editor's `index-lite.css`.

## Overview of size modes

Size modes modify control dimensions, spacing, and tap/click target areas to suit different input methods:

- **Normal mode** — default, optimized for mouse and keyboard input with standard control sizes.
- **Touch mode (bigger)** — increases control sizes and spacing for finger-target accuracy on touch-enabled and mobile devices.

## Enable size mode for the application

Add the `e-bigger` class to the `<body>` element in `index.html` to enable touch mode across the entire application:

```html
<body class="e-bigger">
  ...
</body>
```

## Enable size mode for an editor

Apply the `e-bigger` class to an editor's container element, or assign it through the component's `cssClass` property.

{% tabcontents %}

{% tabcontent Rich Text Editor %}

```tsx
import {
  RichTextEditorComponent, Inject, Toolbar, HtmlEditor
} from '@syncfusion/ej2-react-richtexteditor';

export default function App() {
  return (
    <RichTextEditorComponent cssClass="e-bigger">
      <p>Type or paste your content here.</p>
      <Inject services={[Toolbar, HtmlEditor]} />
    </RichTextEditorComponent>
  );
}
```

{% endtabcontent %}

{% tabcontent Block Editor %}

```tsx
import { BlockEditorComponent, ParagraphBlock } from '@syncfusion/ej2-react-blockeditor';

export default function App() {
  return (
    <BlockEditorComponent cssClass="e-bigger" blocks={[ParagraphBlock]}>
      <p>Start writing your content...</p>
    </BlockEditorComponent>
  );
}
```

{% endtabcontent %}

{% tabcontent Markdown Editor %}

```tsx
import {
  MarkdownEditorComponent, Inject, Toolbar, MarkdownFormatter
} from '@syncfusion/ej2-react-markdowneditor';

export default function App() {
  return (
    <MarkdownEditorComponent cssClass="e-bigger">
      <p>Type or paste your content here.</p>
      <Inject services={[Toolbar, MarkdownFormatter]} />
    </MarkdownEditorComponent>
  );
}
```

{% endtabcontent %}

{% endtabcontents %}

## Change size mode at runtime

Toggle the `e-bigger` class on the document `<body>` element to switch the application between touch and normal modes without re-render.

To switch size mode for a single editor at runtime, dynamically add or remove the `e-bigger` class from the editor's container, or update its `cssClass` property.

## Customize font size and family

Override styles on the `.e-control` class and its descendants for global text size:

```css
.e-control, .e-control [class^='e-'], .e-control [class*=' e-'] {
  font-size: 1rem;
}
```

To change the font family for all editors in the SDK:

```css
.e-control {
  font-family: Arial !important;
}
```

## See also

* [Built-in Themes](./built-in-themes)
* [Icons](./icons)
* [Migration to Theme Packages](./migration-to-theme-packages)
