---
layout: post
title: Getting Started with Vue Headless Editor | Syncfusion
description: Learn how to get started with the Vue Headless Editor and explore setup, configuration, and core feature examples.
canonical_url: "https://www.syncfusion.com/rich-text-editor-sdk/vue-headless-editor"
control: Headless Editor
platform: ej2-vue
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Getting Started with Vue Headless Editor

This section explains how to create a simple Headless Editor and configure its available functionalities in a Vue 2 environment. It requires the `@syncfusion/ej2-headless-editor` package and Vue 2.6 or higher.For Vue 3, see the [Getting Started with Vue 3](vue-3-getting-started.md) page.

## Prerequisites

- [System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)
- Node.js and npm (or Yarn) installed on your machine.

## Create a Vue Application

To generate a Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org/#getting-started) command. If Vue CLI is not installed yet, run the first command below.

```bash
npm install -g @vue/cli
vue create quickstart
```

or

```bash
yarn global add @vue/cli
vue create quickstart
```

When creating a new project, choose the option `Default ([Vue 2] babel, eslint)` from the menu.

<img src="https://ej2.syncfusion.com/vue/documentation/appearance/images/vue2-terminal.png" alt="Selecting the Vue 2 preset during project creation">

Navigate to the project directory:

```bash
cd quickstart
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Headless Editor package

All Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages are published on [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). Install the Vue Headless Editor package by running the following command:

```bash
npm install @syncfusion/ej2-headless-editor --save
```
or

```bash
yarn add @syncfusion/ej2-headless-editor
```

## Adding CSS reference

Syncfusion provides multiple themes for the Headless Editor. For a complete list of available themes, refer to the [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme#theme-packages).

To apply the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme, install the corresponding theme package by using the following command:

```bash
npm install @syncfusion/ej2-tailwind3-theme --save
```

Then add the following CSS reference to the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/headless-editor/index.css";
</style>

{% endhighlight %}
{% endtabs %}

## Adding Headless Editor library

The Headless Editor code should be added in the **src/App.vue** file.

The Headless Editor can be initialized and mounted to a target element as shown below:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/headless-editor/getting-started/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/headless-editor/getting-started/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/headless-editor/getting-started/index" %}

## Run the application

Use the following command to run the application in the browser.

```bash
npm run serve
```

or

```bash
yarn run serve
```

## See also

For additional Vue examples and related topics, see the [Vue documentation](https://ej2.syncfusion.com/vue/documentation).

You can also explore the [Vue Headless Editor example](https://ej2.syncfusion.com/vue/demos/) that shows how to render the Headless Editor.
