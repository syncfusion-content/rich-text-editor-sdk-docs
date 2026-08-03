---
layout: post
title: Right-to-Left Support in React Rich Text Editor SDK | Syncfusion
description: Learn how to enable Right-to-Left (RTL) layout support in the Syncfusion React Rich Text Editor, Block Editor, and Markdown Editor for languages like Arabic and Hebrew.
platform: rich-text-editor-sdk
control: Right-to-Left
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Right-to-Left (RTL) Support in the React Rich Text Editor SDK

Right-to-Left (RTL) layout support is essential for applications that serve users who read and write in languages such as **Arabic, Hebrew, and Persian**. RTL rendering ensures that the editor's UI elements, text alignment, icon positioning, and navigation patterns all flow in the natural reading direction of these languages, providing an intuitive and culturally appropriate user experience.

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Rich Text Editor SDK provides built-in RTL support through the `enableRtl` property. When set to `true`, the property applies the `e-rtl` CSS class to the component, automatically rendering all internal elements and layout structures in a right-to-left direction. This affects text alignment, icon positioning, navigation flow, and component-specific layouts without requiring manual CSS adjustments.

`enableRtl` is available on the **Rich Text Editor**, **Block Editor**, and **Markdown Editor** components.

## Enable RTL for the React Rich Text Editor

```tsx
import { RichTextEditorComponent, Inject, Toolbar, HtmlEditor } from '@syncfusion/ej2-react-richtexteditor';

export default function App() {
  return (
    <RichTextEditorComponent enableRtl={true}>
      <p>مرحبًا بك في محرر النصوص الغنية.</p>
      <Inject services={[Toolbar, HtmlEditor]} />
    </RichTextEditorComponent>
  );
}
```

## Enable RTL for the React Block Editor

```tsx
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';

export default function App() {
  return (
    <BlockEditorComponent enableRtl={true} blocks={[
      { type: 'Heading', level: 1, content: 'مرحبًا' },
      { type: 'Paragraph', content: 'هذه كتلة فقرة.' }
    ]} />
  );
}
```

## Enable RTL for the React Markdown Editor

```tsx
import { RichTextEditorComponent, Inject, Toolbar, MarkdownEditor } from '@syncfusion/ej2-react-richtexteditor';

export default function App() {
  return (
    <RichTextEditorComponent enableRtl={true} editorMode="Markdown">
      <Inject services={[Toolbar, MarkdownEditor]} />
    </RichTextEditorComponent>
  );
}
```

## Enable RTL globally for all Syncfusion<sup style="font-size:70%">&reg;</sup> components

To enable RTL for **every** Syncfusion<sup style="font-size:70%">&reg;</sup> React component in your app, set `enableRtl` once at the application root using `L10n` and the React tree-level configuration, or apply the `e-rtl` class to the `<body>` element:

```tsx
// In your main entry file (src/main.tsx or src/index.tsx)
import { registerLicense } from '@syncfusion/ej2-base';
import { createRoot } from 'react-dom/client';
import App from './App';

// Apply RTL globally
document.body.classList.add('e-rtl');

createRoot(document.getElementById('root')!).render(<App />);
```

For per-component control (for example, RTL only inside the editor), set `enableRtl={true}` on individual component instances as shown above.

## See also

* [Accessibility](./accessibility)
* [Globalization overview](./globalization/overview)
* [Quick Start for React Rich Text Editor](../react/rich-text-editor/quick-start)
