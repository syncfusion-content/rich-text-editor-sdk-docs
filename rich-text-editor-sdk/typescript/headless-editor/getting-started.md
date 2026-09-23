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

## Adding Headless Editor packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install the Headless Editor control, use the following command:

```bash
npm install @syncfusion/ej2-headless-editor
```

## Adding CSS reference

Syncfusion provides multiple themes for the Headless Editor control. To apply the Tailwind 3 theme, install the corresponding theme package using the following command:

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

The installed theme package provides the required styles for the Syncfusion controls. The Tailwind 3 theme styles are included in the TypeScript sample.

I> Ensure that the Headless Editor theme styles are loaded before initializing the control. The order is important because the styles have dependencies, and loading them incorrectly may cause styling issues in the control. You can also refer to the [themes section](https://ej2.syncfusion.com/documentation/appearance/theme) for details about built-in themes and CSS references for individual controls.

## Adding Headless Editor library

Now, you can start adding the Headless Editor library to the application. For getting started, add the Headless Editor initialization code in the **src/main.ts** file and add the target element in the **index.html** file using the following sample.

> Add a target element such as `<div id="editor"></div>` in `index.html` before calling `mount()` in `main.ts`.

The Headless Editor can be initialized on a `div` element, as shown below:

{% tabs %}

{% highlight ts tabtitle="main.ts" %}

{% include code-snippet/rich-text-editor-sdk/typescript/headless-editor/getting-started/index.ts %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/typescript/headless-editor/getting-started/index.html %}

{% endhighlight %}

{% endtabs %}

## Run the Application

Use the following command to run the application in the browser.

```bash
npm run dev
```

The Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript Headless Editor is displayed in the browser as shown below.

![Syncfusion TypeScript Headless Editor output](images/getting-started.png)
