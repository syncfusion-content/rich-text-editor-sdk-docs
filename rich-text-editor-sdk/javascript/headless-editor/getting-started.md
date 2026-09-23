---
layout: post
title: Getting Started with JavaScript Headless Editor | Syncfusion
description: Learn how to get started with the JavaScript Headless Editor and explore setup, configuration, and core feature examples.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Getting started in JavaScript Headless Editor

The Essential JS 2 for JavaScript (global script) is an ES5-formatted pure JavaScript framework that can be directly used in the latest web browsers.

## Dependencies

The following list of dependencies are required to use the `Headless Editor` library in the application.

```javascript
|-- @syncfusion/ej2-headless-editor
    |-- @syncfusion/ej2-base
    |-- prosemirror-history
    |-- prosemirror-commands
    |-- prosemirror-inputrules
    |-- prosemirror-keymap
    |-- prosemirror-model
    |-- prosemirror-schema-basic
    |-- prosemirror-schema-list
    |-- prosemirror-state
    |-- prosemirror-transform
    |-- prosemirror-view
    |-- prosemirror-tables

```
## Setup for local development

Refer to the following steps to set up your local environment.

**Step 1:** Create an app folder `my-app` for Essential JS 2 JavaScript controls.

**Step 2:** Create a `my-app/resources` folder to store local script and style files.

**Step 3:** Open Visual Studio Code and create `my-app/index.js` and `my-app/index.html` files for initializing the Essential JS 2 Headless Editor library.

## Adding Headless Editor styles

Add the following styles inside the `my-app/index.html` file to include the `tailwind3` theme styles:

{% tabs %}
{% highlight html tabtitle="index.html" %}


<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-base/styles/tailwind3.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-headless-editor/styles/tailwind3.css" rel="stylesheet">

{% endhighlight %}
{% endtabs %}

I> Ensure that all Headless Editor theme style files are loaded in the exact order shown above. The order is important because these styles have dependencies, and loading them incorrectly may cause styling issues in the controls. You can also refer to the [themes section](https://ej2.syncfusion.com/documentation/appearance/theme) for details about built-in themes and CSS references for individual controls.

## Adding Headless Editor scripts

Add the following scripts inside the `my-app/index.html` file to include the Headless Editor functionality:

{% tabs %}
{% highlight html tabtitle="index.html" %}

<script src="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-headless-editor/dist/global/ej2-headless-editor.min.js" type="text/javascript"></script>

{% endhighlight %}
{% endtabs %}

I> Ensure that all Headless Editor script files are loaded in the correct order and included before initializing the control. The order is important because the scripts have dependencies, and loading them incorrectly may prevent the Headless Editor from working properly or cause runtime errors. Make sure the required base and dependent scripts are included along with the Headless Editor script.

## Adding Headless Editor library

Add the Headless Editor library to the application as follows. Place the target element in **index.html** and the initialization code in **index.js** using the sample below.

> Add a target element such as `<div id="editor"></div>` in `index.html` before calling `mount()` in `index.js`.

The Headless Editor can be initialized on a `div` element, as shown below:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/headless-editor/getting-started/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/headless-editor/getting-started/index.html %}
{% endhighlight %}
{% endtabs %}

## Run the Application

Run the `index.html` file through a local web server (for example, `npx http-server` or VS Code Live Server). Opening the file directly with `file://` may break script loading.

The Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Headless Editor is displayed as shown below.

![Syncfusion JavaScript Headless Editor output](images/getting-started.png)
