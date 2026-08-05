---
layout: post
title: React Rich Text Editor SDK getting started with Remix | Syncfusion
description: Step-by-step guide to integrating the Syncfusion React Rich Text Editor SDK — Rich Text Editor, Block Editor, and Markdown Editor — into a Remix (React Router) application.
control: Remix
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Getting Started with the React Rich Text Editor SDK in Remix

This guide integrates the Syncfusion<sup style="font-size:70%">&reg;</sup> React Rich Text Editor SDK — **Rich Text Editor**, **Block Editor**, and **Markdown Editor** — into a [Remix](https://remix.run/) app. Modern Remix projects are scaffolded with the React Router CLI.

## Prerequisites

- [Node.js](https://nodejs.org/en) 18 or higher.
- See the [system requirements](../../common/system-requirements) for supported platforms.

## Create the Remix application

```bash
npx create-react-router@latest quick-start
```

```text
dir  :: Where should we create your new project? · quick-start
        Using basic template · See https://remix.run/guides/templates for more
        ✔ Template copied
git  :: Initialize a new git repository? · No
deps :: Install dependencies with npm? · Yes
```

```bash
cd quick-start
```

## Install the SDK packages

Install every editor at once:

```bash
npm install @syncfusion/ej2-react-richtexteditor @syncfusion/ej2-react-blockeditor @syncfusion/ej2-react-markdowneditor
```

Or pick only the editors you need.

## Import the theme

Install the [Tailwind 3 theme](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme):

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

Add the stylesheet for each editor you use to **app/routes/home.tsx** (or your global CSS):

```css
/* Rich Text Editor */
@import "@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css";

/* Block Editor */
@import "@syncfusion/ej2-tailwind3-theme/styles/block-editor/index.css";

/* Markdown Editor */
@import "@syncfusion/ej2-tailwind3-theme/styles/markdown-editor/index.css";
```

For other theme options (CDN, Theme Studio), see the [themes](../themes/built-in-themes) page.

## Configure server-side rendering

For Syncfusion React packages to work with Remix's SSR pipeline (powered by Vite), update **vite.config.ts** to bundle Syncfusion modules:

```ts
import { defineConfig } from "vite";

export default defineConfig({
  ssr: {
    noExternal: [/@syncfusion/]
  },
});
```

## Add the editors

Update **app/routes/home.tsx** with the editor you want. Each editor is mounted as a standalone component and needs its own `Inject` services.

### Rich Text Editor

```tsx
import type { MetaFunction } from "react-router";
import {
  RichTextEditorComponent,
  Inject,
  Toolbar,
  Image,
  Link,
  HtmlEditor,
  QuickToolbar
} from '@syncfusion/ej2-react-richtexteditor';

export const meta: MetaFunction = () => [
  { title: "Syncfusion Rich Text Editor in Remix" },
];

export default function Home() {
  return (
    <RichTextEditorComponent>
      <p>The Rich Text Editor is a WYSIWYG editing control that creates and edits rich content.</p>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
  );
}
```

### Block Editor

```tsx
import type { MetaFunction } from "react-router";
import { BlockEditorComponent, ParagraphBlock, HeadingBlock, ListBlock, DividerBlock, ChecklistBlock, ImageBlock, TableBlock, CodeBlock, QuoteBlock, CalloutBlock, AttachFileBlock, MentionBlock } from '@syncfusion/ej2-react-blockeditor';

export const meta: MetaFunction = () => [
  { title: "Syncfusion Block Editor in Remix" },
];

export default function Home() {
  return (
    <BlockEditorComponent blocks={[ParagraphBlock, HeadingBlock, ListBlock, DividerBlock, ChecklistBlock, ImageBlock, TableBlock, CodeBlock, QuoteBlock, CalloutBlock, AttachFileBlock, MentionBlock]}>
      <p>Start writing your content...</p>
    </BlockEditorComponent>
  );
}
```

### Markdown Editor

```tsx
import type { MetaFunction } from "react-router";
import { MarkdownEditorComponent, Inject, Toolbar, Image, Link, MarkdownFormatter } from '@syncfusion/ej2-react-markdowneditor';

export const meta: MetaFunction = () => [
  { title: "Syncfusion Markdown Editor in Remix" },
];

export default function Home() {
  return (
    <MarkdownEditorComponent>
      <p>The Markdown Editor is a WYSIWYG editing control that creates and edits Markdown content.</p>
      <Inject services={[Toolbar, Image, Link, MarkdownFormatter]} />
    </MarkdownEditorComponent>
  );
}
```

> Mount each editor on a separate route. The three editors are independent — use one, two, or all three.

## Run the application

```bash
npm run dev
```

Production build and serve:

```bash
npm run build
npm run start
```

## See also

- [Quick Start for the React Rich Text Editor SDK](../rich-text-editor/quick-start)
- [Block Editor — Getting Started](../block-editor/getting-started)
- [Markdown Editor — Getting Started](../markdown-editor/getting-started)
- [Feature Module Injection](../rich-text-editor/module)
