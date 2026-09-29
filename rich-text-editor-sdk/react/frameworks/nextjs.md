---
layout: post
title: React Rich Text Editor SDK getting started with Next.js | Syncfusion
description: Integrate the Syncfusion React Rich Text Editor into a Next.js application — install, theme, and add the editor in a client component.
control: Next.js
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Getting Started with the React Rich Text Editor in Next.js

This guide integrates the Syncfusion<sup style="font-size:70%">&reg;</sup> React Rich Text Editor into a [Next.js](https://nextjs.org/) application.

## Create a Next.js application

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx create-next-app@latest

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn create next-app

{% endhighlight %}
{% endtabs %}

```bash
√ What is your project named? ... my-nextjs-rte
? Would you like to use the recommended Next.js defaults?
>   Yes, use recommended defaults - TypeScript, ESLint, Tailwind CSS, App Router
    No, reuse previous settings
    No, customize settings
```

```bash
cd my-nextjs-rte
```

## Install the Rich Text Editor and theme

Install the editor package and the Tailwind 3 theme in a single command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-react-richtexteditor @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-react-richtexteditor @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% endtabs %}

## Import the theme

Replace **app/globals.css** with the Rich Text Editor stylesheet:

```css
/* Rich Text Editor */
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css";
```

For other theme options (CDN, Theme Studio), see the [themes](../themes/built-in-themes) page.

## Add the Rich Text Editor

The App Router requires a client component (`'use client'`). Mount `RichTextEditorComponent` and inject the services it needs.

**app/page.tsx**

```typescript
'use client';
import { RichTextEditorComponent, Inject, Toolbar, Image, Link, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-react-richtexteditor';

export default function Home() {
  return (
    <RichTextEditorComponent>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
  );
}
```

## Run the application

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run dev

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn run dev

{% endhighlight %}
{% endtabs %}

The Syncfusion® React Rich Text Editor is displayed in the browser as shown below.

![Syncfusion React Rich Text Editor output](../images/rte-framework-wise.png)

## See also

- [Syncfusion Rich Text Editor Demos in Next.js](https://ej2.syncfusion.com/nextjs/demos/bootstrap5/rich-text-editor/tools)
- [Quick Start for the React Rich Text Editor SDK](../rich-text-editor/getting-started)
- [Feature Module Injection](../rich-text-editor/module)
- [Built-in Themes](../themes/built-in-themes)
