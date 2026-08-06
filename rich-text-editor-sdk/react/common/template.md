---
layout: post
title: Templates in React Rich Text Editor SDK | Syncfusion
description: Use templates to customize the React Rich Text Editor, Block Editor, and Markdown Editor — layout, content rendering, and performance with stateless templates.
control: Common
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Templates in the React Rich Text Editor SDK

Templates let you customize the layout, content, and toolbar of every editor in the React Rich Text Editor SDK — **Rich Text Editor**, **Block Editor**, and **Markdown Editor** — without changing the component's public API. They are React functions that receive a `props` object and return a React element.

The shape of `props` depends on the editor and the template type:

- **Rich Text Editor** — `template` on a toolbar item; `props` is the item's config object.
- **Block Editor** — `template` on a block definition; `props` is the block's data.
- **Markdown Editor** — `template` on a toolbar item; `props` is the item's config object.

Templates should return valid React elements, avoid side effects, and sanitize any raw HTML to prevent XSS. The example below shows a simple custom template function used in the Rich Text Editor:

```tsx
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function rteTemplate(props: { ShipCountry: string }) {
  return (
    <div className="custom">
      <ButtonComponent>{props.ShipCountry}</ButtonComponent>
    </div>
  );
}
```

## Templates per editor

Each editor in the SDK exposes its own template surface. Pick the tab for the editor you use.

{% tabcontents %}

{% tabcontent Rich Text Editor %}

Use `template` on a toolbar item to render custom markup. The template receives the toolbar item's config and returns a React element.

```tsx
import {
  RichTextEditorComponent, Inject, Toolbar, HtmlEditor
} from '@syncfusion/ej2-react-richtexteditor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function rteToolbarTemplate(props: { text: string }) {
  return <ButtonComponent>{props.text}</ButtonComponent>;
}

export default function App() {
  const items = [
    { text: 'Bold', template: rteToolbarTemplate, click: () => {/* … */} }
  ];
  return (
    <RichTextEditorComponent toolbarSettings={{ items }}>
      <p>Rich Text Editor with a custom toolbar item.</p>
      <Inject services={[Toolbar, HtmlEditor]} />
    </RichTextEditorComponent>
  );
}
```

{% endtabcontent %}

{% tabcontent Block Editor %}

Use `template` on a custom block definition to render the block's content. The template receives the block's data and returns a React element.

```tsx
import { BlockEditorComponent, BlockModel } from '@syncfusion/ej2-react-blockeditor';

function customBlockTemplate(props: { label: string }) {
  return <div className="custom-block">{props.label}</div>;
}

const CustomBlock: BlockModel = {
  type: 'Custom',
  template: customBlockTemplate
};

export default function App() {
  return (
    <BlockEditorComponent blocks={[CustomBlock]}>
      <div data-type="Custom" data-label="Hello Block" />
    </BlockEditorComponent>
  );
}
```

{% endtabcontent %}

{% tabcontent Markdown Editor %}

Use `template` on a toolbar item to render custom markup. The template receives the toolbar item's config and returns a React element.

```tsx
import {
  MarkdownEditorComponent, Inject, Toolbar, MarkdownFormatter
} from '@syncfusion/ej2-react-markdowneditor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function mdToolbarTemplate(props: { text: string }) {
  return <ButtonComponent>{props.text}</ButtonComponent>;
}

export default function App() {
  const items = [
    { text: 'Bold', template: mdToolbarTemplate, click: () => {/* … */} }
  ];
  return (
    <MarkdownEditorComponent toolbarSettings={{ items }}>
      <p>Markdown Editor with a custom toolbar item.</p>
      <Inject services={[Toolbar, MarkdownFormatter]} />
    </MarkdownEditorComponent>
  );
}
```

{% endtabcontent %}

{% endtabcontents %}

## Stateless templates

Templates that do not rely on local component state can be excluded from React state-driven re-renders to improve performance. Pass the exact template property names to `statelessTemplates`:

```tsx
<RichTextEditorComponent statelessTemplates={['toolbarTemplate']} />
```

> Do not mark state-dependent templates as stateless, since they will not update when state changes. When templates render interactive elements, include ARIA attributes and keyboard focus handling; sanitize any injected HTML for accessibility and security.

## See also

* [Quick Start for the React Rich Text Editor SDK](../components/rich-text-editor/quick-start)
* [Block Editor — Getting Started](../components/block-editor/getting-started)
* [Markdown Editor — Getting Started](../components/markdown-editor/getting-started)
