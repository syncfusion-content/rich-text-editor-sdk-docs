---
layout: post
title: React Rich Text Editor SDK getting started with Remix | Syncfusion
description: Step-by-step guide to integrating the Syncfusion React Rich Text Editor in a Remix (React Router) application.
control: Remix
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Getting Started with the React Rich Text Editor in Remix

This guide integrates the Syncfusion<sup style="font-size:70%">&reg;</sup> React Rich Text Editor into a [Remix](https://remix.run/) application. Modern Remix projects are scaffolded with the React Router CLI.

## Create the Remix application

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx create-react-router@latest my-remix-rte

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn create react-router@latest my-remix-rte

{% endhighlight %}
{% endtabs %}

```text
dir   :: Where should we create your new project? · my-remix-rte
        Using basic template · See https://remix.run/guides/templates for more
        ✔ Template copied
git   :: Initialize a new git repository? · No
deps  :: Install dependencies with npm? · Yes
skill :: Include the React Router agent skill? . Yes or No
```

```bash
cd my-remix-rte
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

Add the Rich Text Editor stylesheet to **app/routes/home.tsx** (or your global CSS):

```css
/* Rich Text Editor */
@import "@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css";
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

## Add the Rich Text Editor

Update **app/routes/home.tsx** with `RichTextEditorComponent` and the services it needs.

```tsx
import type { MetaFunction } from "react-router";
import { RichTextEditorComponent, Inject, Toolbar, Image, Link, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-react-richtexteditor';

export const meta: MetaFunction = () => [
  { title: "Syncfusion Rich Text Editor in Remix" },
];

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

- [Quick Start for the React Rich Text Editor SDK](../components/rich-text-editor/quick-start)
- [Feature Module Injection](../components/rich-text-editor/module)
- [Built-in Themes](../themes/built-in-themes)
