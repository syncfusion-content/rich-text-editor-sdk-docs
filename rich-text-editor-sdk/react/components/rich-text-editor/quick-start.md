---
layout: post
title: Quick Start with React Rich Text Editor | Syncfusion
description: Get started with the Syncfusion React Rich Text Editor in minutes—install the package, add the component, set content, configure the toolbar, and run.
canonical_url: "https://www.syncfusion.com/rich-text-editor-sdk/react-rich-text-editor"
platform: rich-text-editor-sdk
control: Quick Start
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Quick Start

This quick start walks you through creating a working React Rich Text Editor in a few minutes: install the package, add the component, set its content, configure the toolbar, and run the app. All code samples use **TypeScript**.

> Looking for a deeper, step-by-step setup (Vite/Next.js/Remix options, module details)? See [Getting Started](./getting-started).

## Prerequisites

- [Node.js](https://nodejs.org/en/) 18 or higher.
- A React application. If you don't have one, create it with Vite:

  ```bash
  npm create vite@latest my-app -- --template react-ts
  cd my-app
  npm install
  ```

## Step 1 — Install the package

Install the React Rich Text Editor package from npm:

```bash
npm install @syncfusion/ej2-react-richtexteditor
```

## Step 2 — Add the theme

Install a theme package and import the Rich Text Editor stylesheet into `src/App.css`:

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

```css
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css';
```

## Step 3 — Add the component

Replace the contents of `src/App.tsx` with the following. The `Inject` component wires up the feature modules the editor needs (Toolbar, Link, Image, HtmlEditor, QuickToolbar):

```tsx
import { RichTextEditorComponent, Inject, Toolbar, Image, Link, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-react-richtexteditor';
import './App.css';

export default function App() {
  return (
    <RichTextEditorComponent>
      <p>The Rich Text Editor is a WYSIWYG editing control that creates and edits rich content.</p>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
  );
}
```

## Step 4 — Set the content

Provide initial content with the `value` property, or bind it to state:

```tsx
import { useState } from 'react';
import { RichTextEditorComponent, Inject, Toolbar, Image, Link, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-react-richtexteditor';
import './App.css';

export default function App() {
  const [value, setValue] = useState<string>('<p>Start typing your <b>rich</b> content…</p>');

  return (
    <RichTextEditorComponent value={value} change={(e: { value: string }) => setValue(e.value)}>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
  );
}
```

## Step 5 — Configure the toolbar

Customize which tools appear using `toolbarSettings`:

```tsx
const toolbarSettings: object = {
  items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', '|',
          'CreateLink', 'Image', '|', 'Undo', 'Redo']
};

<RichTextEditorComponent toolbarSettings={toolbarSettings}>
  <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
</RichTextEditorComponent>
```

## Step 6 — Run the application

```bash
npm run dev
```

Open the printed local URL (for example, `http://localhost:5173`) to see the Rich Text Editor.

## Next steps

- [Managing Editor Value](./editor-value)
- [Toolbar Types](./toolbar/toolbar-types)
- [Built-in Tools](./tools/built-in-tools)
- [Feature Module Injection](./module)
- [API Reference](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/)
