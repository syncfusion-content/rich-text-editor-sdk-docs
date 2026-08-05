---
layout: post
title: React Rich Text Editor SDK getting started with Next.js | Syncfusion
description: Step-by-step guide to integrating the Syncfusion React Rich Text Editor SDK — Rich Text Editor, Block Editor, and Markdown Editor — into a Next.js application.
control: Next.js
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Getting Started with the React Rich Text Editor SDK in Next.js

This guide integrates the Syncfusion<sup style="font-size:70%">&reg;</sup> React Rich Text Editor SDK — **Rich Text Editor**, **Block Editor**, and **Markdown Editor** — into a [Next.js](https://nextjs.org/) app.

## Prerequisites

- [Node.js 18.17.0](https://nodejs.org/en) or later (LTS recommended).
- Compatible with macOS, Windows, and Linux.

## Create a Next.js application

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx create-next-app@latest

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn create next-app

{% endhighlight %}
{% endtabs %}

```text
√ What is your project named? ... my-nextjs-rte
? Would you like to use the recommended Next.js defaults?
>   Yes, use recommended defaults - TypeScript, ESLint, Tailwind CSS, App Router
    No, reuse previous settings
    No, customize settings
```

```bash
cd my-nextjs-rte
```

## Install the SDK packages

Install every editor at once:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-react-richtexteditor @syncfusion/ej2-react-blockeditor @syncfusion/ej2-react-markdowneditor

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-react-richtexteditor @syncfusion/ej2-react-blockeditor @syncfusion/ej2-react-markdowneditor

{% endhighlight %}
{% endtabs %}

Or pick only the editors you need.

## Import the theme

Install the [Tailwind 3 theme](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme):

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% endtabs %}

Replace **app/globals.css** with the stylesheet for each editor you use:

```css
/* Rich Text Editor */
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css";

/* Block Editor */
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/block-editor/index.css";

/* Markdown Editor */
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/markdown-editor/index.css";
```

For other theme options (CDN, Theme Studio), see the [themes](../themes/built-in-themes) page.

## Add the editors

The App Router requires a client component (`'use client'`). Each editor is mounted as a standalone component and needs its own `Inject` services.

### Rich Text Editor — app/page.tsx

```tsx
'use client';
import {
  RichTextEditorComponent,
  Inject,
  Toolbar,
  Image,
  Link,
  HtmlEditor,
  QuickToolbar
} from '@syncfusion/ej2-react-richtexteditor';

export default function Home() {
  return (
    <RichTextEditorComponent>
      <p>The Rich Text Editor is a WYSIWYG editing control that creates and edits rich content.</p>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
  );
}
```

### Block Editor — app/page.tsx

```tsx
'use client';
import { BlockEditorComponent, ParagraphBlock, HeadingBlock, ListBlock, DividerBlock, ChecklistBlock, ImageBlock, TableBlock, CodeBlock, QuoteBlock, CalloutBlock, AttachFileBlock, MentionBlock } from '@syncfusion/ej2-react-blockeditor';

export default function Home() {
  return (
    <BlockEditorComponent blocks={[ParagraphBlock, HeadingBlock, ListBlock, DividerBlock, ChecklistBlock, ImageBlock, TableBlock, CodeBlock, QuoteBlock, CalloutBlock, AttachFileBlock, MentionBlock]}>
      <p>Start writing your content...</p>
    </BlockEditorComponent>
  );
}
```

### Markdown Editor — app/page.tsx

```tsx
'use client';
import { MarkdownEditorComponent, Inject, Toolbar, Image, Link, MarkdownFormatter } from '@syncfusion/ej2-react-markdowneditor';

export default function Home() {
  return (
    <MarkdownEditorComponent>
      <p>The Markdown Editor is a WYSIWYG editing control that creates and edits Markdown content.</p>
      <Inject services={[Toolbar, Image, Link, MarkdownFormatter]} />
    </MarkdownEditorComponent>
  );
}
```

> Mount each editor on a separate route or section. The three editors are independent — use one, two, or all three.

## Run the application

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run dev

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn run dev

{% endhighlight %}
{% endtabs %}

## See also

- [Quick Start for the React Rich Text Editor SDK](../rich-text-editor/quick-start)
- [Block Editor — Getting Started](../block-editor/getting-started)
- [Markdown Editor — Getting Started](../markdown-editor/getting-started)
- [Feature Module Injection](../rich-text-editor/module)
