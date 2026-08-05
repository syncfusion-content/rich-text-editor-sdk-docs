---
layout: post
title: React Rich Text Editor SDK getting started with Gatsby | Syncfusion
description: Step-by-step guide to integrating the Syncfusion React Rich Text Editor SDK — Rich Text Editor, Block Editor, and Markdown Editor — into a Gatsby project.
control: Gatsby
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Getting Started with the React Rich Text Editor SDK in Gatsby

This guide integrates the Syncfusion<sup style="font-size:70%">&reg;</sup> React Rich Text Editor SDK — **Rich Text Editor**, **Block Editor**, and **Markdown Editor** — into a [Gatsby](https://www.gatsbyjs.com) project.

## Prerequisites

- [Node.js](https://nodejs.org/en) 18 or higher.
- See the [system requirements](../../common/system-requirements) for supported platforms.

## Set up the Gatsby project

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm create gatsby@latest

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn create gatsby

{% endhighlight %}
{% endtabs %}

```text
√ What would you like to call your site? · my-gatsby-rte
√ What would you like to name the folder where your site will be created? · my-gatsby-rte
√ Will you be using JavaScript or TypeScript? · TypeScript
√ Will you be using a CMS? · No (or I'll add it later)
√ Would you like to install a styling system? · No (or I'll add it later)
√ Would you like to install additional features with other plugins? · No items were selected
Shall we do this? (Y/n) » Yes
```

```bash
cd my-gatsby-rte
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
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% endtabs %}

Create **src/pages/style.css** and import the stylesheet for each editor you use:

```css
/* Rich Text Editor */
@import "../../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css";

/* Block Editor */
@import "../../node_modules/@syncfusion/ej2-tailwind3-theme/styles/block-editor/index.css";

/* Markdown Editor */
@import "../../node_modules/@syncfusion/ej2-tailwind3-theme/styles/markdown-editor/index.css";
```

For other theme options (CDN, Theme Studio), see the [themes](../themes/built-in-themes) page.

## Add the editors

Replace **src/pages/index.tsx** with the editor you want. Each editor is mounted as a standalone component and needs its own `Inject` services.

### Rich Text Editor

```tsx
import * as React from 'react';
import {
  RichTextEditorComponent,
  Inject,
  Toolbar,
  Image,
  Link,
  HtmlEditor,
  QuickToolbar
} from '@syncfusion/ej2-react-richtexteditor';
import './style.css';

export default function IndexPage() {
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
import * as React from 'react';
import { BlockEditorComponent, ParagraphBlock, HeadingBlock, ListBlock, DividerBlock, ChecklistBlock, ImageBlock, TableBlock, CodeBlock, QuoteBlock, CalloutBlock, AttachFileBlock, MentionBlock } from '@syncfusion/ej2-react-blockeditor';
import './style.css';

export default function IndexPage() {
  return (
    <BlockEditorComponent blocks={[ParagraphBlock, HeadingBlock, ListBlock, DividerBlock, ChecklistBlock, ImageBlock, TableBlock, CodeBlock, QuoteBlock, CalloutBlock, AttachFileBlock, MentionBlock]}>
      <p>Start writing your content...</p>
    </BlockEditorComponent>
  );
}
```

### Markdown Editor

```tsx
import * as React from 'react';
import { MarkdownEditorComponent, Inject, Toolbar, Image, Link, MarkdownFormatter } from '@syncfusion/ej2-react-markdowneditor';
import './style.css';

export default function IndexPage() {
  return (
    <MarkdownEditorComponent>
      <p>The Markdown Editor is a WYSIWYG editing control that creates and edits Markdown content.</p>
      <Inject services={[Toolbar, Image, Link, MarkdownFormatter]} />
    </MarkdownEditorComponent>
  );
}
```

> Mount each editor on a separate page or section. The three editors are independent — use one, two, or all three.

## Run the project

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run develop

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn run develop

{% endhighlight %}
{% endtabs %}

## See also

- [Quick Start for the React Rich Text Editor SDK](../rich-text-editor/quick-start)
- [Block Editor — Getting Started](../block-editor/getting-started)
- [Markdown Editor — Getting Started](../markdown-editor/getting-started)
- [Feature Module Injection](../rich-text-editor/module)
