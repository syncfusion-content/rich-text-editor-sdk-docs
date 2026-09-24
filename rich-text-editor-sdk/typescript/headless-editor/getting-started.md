---
layout: post
title: Getting Started with TypeScript Headless Editor | Syncfusion
description: Learn how to get started with the TypeScript Headless Editor and explore setup, configuration, and core feature examples.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Getting started in TypeScript Headless Editor

The TypeScript Headless Editor is an editor control that provides a headless editing experience for creating, editing, and formatting content. This section explains the steps to create a simple Headless Editor and demonstrate the basic usage of the Headless Editor control using a Vite-based TypeScript project scaffolded with the latest Vite version.

## Prerequisites

This guide uses Vite as the bundler and development environment. Install Node.js `24.13.0` or higher before proceeding. For detailed information about Vite's capabilities and configuration options, refer to the [Vite documentation](https://vite.dev/).

## Create a TypeScript application

To set up a TypeScript application, run the following command.

```bash
npm create vite@latest my-app -- --template vanilla-ts
```

This command will prompt you to install the required packages and start the application. Select the options as shown below.

![Headless Editor Initial setup](./images/svelte-ts/npm_setup.png)

As Syncfusion packages are not installed yet, currently, the `No` option will be selected. Then, navigate to the project directory and install the dependencies using the following commands:

```bash
cd my-app
npm install
```

## Adding Syncfusion<sup style="font-size:70%">®</sup> Headless Editor packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install the Headless Editor package, use the following command:

```bash
npm install @syncfusion/ej2-headless-editor
```

The Headless Editor package provides the editor library and its required dependencies, including the ProseMirror packages used by the editor.

## Adding CSS reference

Syncfusion provides multiple themes for the Headless Editor. For a complete list of available themes, refer to the [themes packages](https://ej2.syncfusion.com/documentation/appearance/theme#theme-packages).

To apply the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme, install the corresponding theme package by using the following command:

```bash
npm install @syncfusion/ej2-tailwind3-theme --save
```

Then add the following CSS reference to the `src/style.css` file:

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/headless-editor/index.css";

{% endhighlight %}
{% endtabs %}

I> To apply the application-specific styles correctly, import `./style.css` into **src/main.ts**, remove the default Vite styles from **src/style.css**, and keep the Headless Editor styles shown above. You can also refer to the [themes section](https://ej2.syncfusion.com/documentation/appearance/theme) for details about built-in themes and CSS references for individual controls.

## Adding Headless Editor library

To get started, add the Headless Editor library in the `main.ts` and `index.html` files. The Headless Editor can be initialized on a `div` element and mounted to the target element.

{% tabs %}
{% highlight ts tabtitle="main.ts" %}

import './style.css';
import { HeadlessEditor, basicExtensions, placeholderExtension } from '@syncfusion/ej2-headless-editor';

const headlessEditor = HeadlessEditor.create({
    extensions: [basicExtensions, placeholderExtension]
});

const container = document.getElementById('headless-editor');

if (container) {
    headlessEditor.mount(container);
}

{% endhighlight %}
{% highlight css tabtitle="style.css" %}

@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/headless-editor/index.css";

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Syncfusion TypeScript Headless Editor</title>
</head>

<body>
    <div id="container">
        <div id="headless-editor"></div>
    </div>
    <script type="module" src="/src/main.ts"></script>
</body>

</html>

{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/headless-editor/getting-started/" %}

## Run the application

Use the following command to run the application in the browser.

```bash
npm run dev
```

The Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript Headless Editor is displayed as shown below.

![Syncfusion TypeScript Headless Editor output](images/getting-started.png)

## See Also

**Live examples:**

* `Syncfusion TypeScript Headless Editor demos`

N> You can refer to our `TypeScript Headless Editor` feature tour page for its feature representations. You can also explore our `TypeScript Headless Editor example` that shows how to render the headless editor.