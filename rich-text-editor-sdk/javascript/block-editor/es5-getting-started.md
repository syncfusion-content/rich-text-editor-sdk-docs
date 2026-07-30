---
layout: post
title: Es5 getting started with JavaScript Block Editor | Syncfusion
description:  Checkout and learn about Es5 getting started with JavaScript Block Editor control of Syncfusion Essential JS 2 and more details.
canonical_url: "https://www.syncfusion.com/rich-text-editor-sdk/javascript-block-editor"
platform: ej2-javascript
control: Es5 getting started
publishingplatform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# ES5 getting started in JavaScript Block Editor control

The Essential JS 2 for JavaScript (global script) is an ES5-formatted pure JavaScript framework that can be used directly in modern web browsers.

## Dependencies

The list of dependencies required to use the BlockEditor control in your application is given as follows:

```js
|-- @syncfusion/ej2-blockeditor
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-inputs

```

## Setup for local development

Refer to the following steps to set up your local environment.

**Step 1:** Create an app folder `my-app` for Essential JS 2 JavaScript controls.

**Step 2:** Create a my-app/resources folder if you want to host local scripts and styles. Otherwise, you can use the CDN URLs shown below directly in the HTML page.

**Step 3:** Open Visual Studio Code and create `my-app/index.js` and `my-app/index.html` files for initializing the Essential JS 2 Block Editor control.

## Adding Block Editor styles

Add the following styles inside the `my-app/index.html` file to include the `tailwind3` theme styles:

{% tabs %}
{% highlight html tabtitle="index.html" %}

<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-base/styles/tailwind3.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-buttons/styles/tailwind3.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-inputs/styles/tailwind3.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-navigations/styles/tailwind3.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-popups/styles/tailwind3.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-dropdowns/styles/tailwind3.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-splitbuttons/styles/tailwind3.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-blockeditor/styles/tailwind3.css" rel="stylesheet">

{% endhighlight %}
{% endtabs %}

I> Ensure that all Block Editor theme style files are loaded in the exact order shown above. The order is important because these styles have dependencies, and loading them incorrectly may cause styling issues in the controls. You can also refer to the [themes section](https://ej2.syncfusion.com/documentation/appearance/theme) for details about built-in themes and CSS references for individual controls.

## Adding Block Editor scripts

Add the following scripts inside the `my-app/index.html` file to include the Block Editor functionality:

{% tabs %}
{% highlight html tabtitle="index.html" %}

<script src="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-blockeditor/dist/global/ej2-blockeditor.min.js" type="text/javascript"></script>

{% endhighlight %}
{% endtabs %}

I> Ensure that all Block Editor script files are loaded in the correct order and included before initializing the control. The order is important because the scripts have dependencies, and loading them incorrectly may prevent the Block Editor from working properly or cause runtime errors.

Make sure the required base and dependent scripts are included along with the Block Editor script.

## Adding Block Editor control

To get started, add Block Editor control in `index.js` and `index.html` files.

Block Editor can be initialized on a div element as shown below

{% tabs %}
{% highlight js tabtitle="index.js" %}
var blockeditor = new ej.blockeditor.BlockEditor({ }); 
blockeditor.appendTo('#blockeditor_default');
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 - BlockEditor</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta name="description" content="Essential JS 2">
    <meta name="author" content="Syncfusion">

    <!-- Essential JS 2 Block Editor's dependent tailwind3 theme -->
    <link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-base/styles/tailwind3.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-buttons/styles/tailwind3.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-popups/styles/tailwind3.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-inputs/styles/tailwind3.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-navigations/styles/tailwind3.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-splitbuttons/styles/tailwind3.css" rel="stylesheet"/>
    <link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-dropdowns/styles/tailwind3.css" rel="stylesheet">
    <link href="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/ej2-blockeditor/styles/tailwind3.css" rel="stylesheet" />

     <!-- Essential JS 2 all script -->
    <script src="https://cdn.syncfusion.com/ej2/{{site.ej2version}}/dist/ej2.min.js" type="text/javascript"></script>
</head>

<body>
    <div id="blockeditor_default"></div>
    <script src="index.js" type="text/javascript"></script>
</body>

</html>
{% endhighlight %}
{% endtabs %}


{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/getting-started" %}

## Run the application

Now, run the index.html in web browser, it will render the Essential JS 2 Block Editor control.

> You can refer to our [JavaScript Block Editor](https://www.syncfusion.com/rich-text-editor-sdk/javascript-block-editor) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Block Editor example](https://ej2.syncfusion.com/javascript/demos/#/tailwind3/block-editor/overview.html) that shows how to render the block editor.
