---
layout: post
title: React Rich Text Editor SDK getting started with Gatsby | Syncfusion
description: Step-by-step guide to integrating the Syncfusion React Rich Text Editor in a Gatsby project.
control: Gatsby
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Getting Started with the React Rich Text Editor in Gatsby

This guide integrates the Syncfusion<sup style="font-size:70%">&reg;</sup> React Rich Text Editor into a [Gatsby](https://www.gatsbyjs.com) project.

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

Create **src/pages/style.css** and import the Rich Text Editor stylesheet:

```css
/* Rich Text Editor */
@import "../../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css";
```

For other theme options (CDN, Theme Studio), see the [themes](../themes/built-in-themes) page.

## Add the Rich Text Editor

Replace **src/pages/index.tsx** with `RichTextEditorComponent` and the services it needs.

```tsx
import * as React from 'react';
import { RichTextEditorComponent, Inject, Toolbar, Image, Link, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-react-richtexteditor';
import './style.css';

export default function IndexPage() {
  return (
    <RichTextEditorComponent>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
  );
}
```

## Run the project

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run develop

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn run develop

{% endhighlight %}
{% endtabs %}

The Syncfusion® React Rich Text Editor is displayed in the browser as shown below.

![Syncfusion React Rich Text Editor output](../images/rte-framework-wise.png)

## See also

- [Quick Start for the React Rich Text Editor SDK](../components/rich-text-editor/quick-start)
- [Feature Module Injection](../components/rich-text-editor/module)
- [Built-in Themes](../themes/built-in-themes)
