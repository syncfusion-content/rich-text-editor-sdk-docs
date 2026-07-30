---
layout: post
title: Getting started in Vue Block Editor component | Syncfusion
description: Learn here all about Getting started in Syncfusion Vue Block Editor component of Syncfusion Essential JS 2 and more.
canonical_url: "https://www.syncfusion.com/rich-text-editor-sdk/vue-block-editor"
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Getting Started with the Vue Block Editor component in Vue 2

This section explains how to create a simple Block Editor and configure its available functionalities in the Vue environment.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Block Editor packages

All Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages are published on [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). Install the Vue Block Editor package by running the following command:

```bash
npm install @syncfusion/ej2-vue-blockeditor --save
```
or

```bash
yarn add @syncfusion/ej2-vue-blockeditor
```

## Adding CSS reference

Syncfusion provides multiple themes for the Block Editor component. For a complete list of available themes, refer to the [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme#theme-packages).

To apply the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme, install the corresponding theme package by using the following command:

```bash
npm install @syncfusion/ej2-tailwind3-theme --save
```

Then add the following CSS reference to the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/blockeditor/index.css";
</style>

{% endhighlight %}
{% endtabs %}

## Adding Block Editor component

The Block Editor code should be added in the **src/App.vue** file, using either the Composition API or the Options API.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/block-editor/getting-started/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/block-editor/getting-started/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/block-editor/getting-started/index" %}

## Run the application

Use the following command to run the application in the browser.

```bash
npm run serve
```

or

```bash
yarn run serve
```

For migrating from Vue 2 to Vue 3, refer to the [`migration`](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-vue-cli#migration-from-vue-2-to-vue-3) documentation.
