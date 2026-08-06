---
layout: post
title: State Persistence in React Rich Text Editor SDK | Syncfusion
description: Persist state across page refreshes for the React Rich Text Editor, Block Editor, and Markdown Editor using enablePersistence and localStorage.
control: Common
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# State Persistence in the React Rich Text Editor SDK

Every editor in the React Rich Text Editor SDK — **Rich Text Editor**, **Block Editor**, and **Markdown Editor** — can persist supported state across page refreshes and navigation. Enable it by setting the `enablePersistence` property to `true` on the editor instance. When enabled, the editor serializes state to `localStorage` during the page-unload lifecycle and restores it when the editor initializes. Persisted keys are namespaced by component and instance.

To reset persisted state, remove the matching key from `localStorage` or set `enablePersistence` back to `false`.

## Enable persistence per editor

The pattern is the same for all three editors — only the editor component and its injected services differ.

{% tabcontents %}

{% tabcontent Rich Text Editor %}

```tsx
import {
  RichTextEditorComponent, Inject, Toolbar, Image, Link, HtmlEditor, QuickToolbar
} from '@syncfusion/ej2-react-richtexteditor';

export default function App() {
  return (
    <RichTextEditorComponent enablePersistence={true}>
      <p>Persisted Rich Text Editor content.</p>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
  );
}
```

{% endtabcontent %}

{% tabcontent Block Editor %}

```tsx
import { BlockEditorComponent, ParagraphBlock, HeadingBlock, ListBlock } from '@syncfusion/ej2-react-blockeditor';

export default function App() {
  return (
    <BlockEditorComponent enablePersistence={true} blocks={[ParagraphBlock, HeadingBlock, ListBlock]}>
      <p>Persisted Block Editor content.</p>
    </BlockEditorComponent>
  );
}
```

{% endtabcontent %}

{% tabcontent Markdown Editor %}

```tsx
import {
  MarkdownEditorComponent, Inject, Toolbar, Image, Link, MarkdownFormatter
} from '@syncfusion/ej2-react-markdowneditor';

export default function App() {
  return (
    <MarkdownEditorComponent enablePersistence={true}>
      <p>Persisted Markdown Editor content.</p>
      <Inject services={[Toolbar, Image, Link, MarkdownFormatter]} />
    </MarkdownEditorComponent>
  );
}
```

{% endtabcontent %}

{% endtabcontents %}

## Persisted properties per editor

The table below lists the properties each editor in the SDK persists when `enablePersistence` is `true`.

| Component | Persisted properties |
| --- | --- |
| Rich Text Editor | `value` (current HTML content) |
| Block Editor | `value` (current block data) |
| Markdown Editor | `value` (current Markdown content) |

> The Rich Text Editor, Block Editor, and Markdown Editor each persist the user's content automatically. To persist additional editor settings (such as toolbar layout), use your own state-management layer or `localStorage` keys.

## Resetting persisted state

```ts
// Remove the key for the editor you want to reset.
// The key is namespaced by component and instance.
localStorage.removeItem('ej2-richtexteditor-persist-data-0');
localStorage.removeItem('ej2-blockeditor-persist-data-0');
localStorage.removeItem('ej2-markdowneditor-persist-data-0');
```

## See also

* [Quick Start for the React Rich Text Editor SDK](../components/rich-text-editor/quick-start)
* [Block Editor — Getting Started](../components/block-editor/getting-started)
* [Markdown Editor — Getting Started](../components/markdown-editor/getting-started)
