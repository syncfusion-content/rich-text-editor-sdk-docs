---
layout: post
title: Getting started with TypeScript  Markdown Editor | Syncfusion
description:  Checkout and learn about Getting started with TypeScript Markdown Editor control of Syncfusion Essential JS 2 and more details.
platform: rich-text-editor-sdk
control: Getting started 
publishingplatform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Getting started in TypeScript Markdown Editor control

The Syncfusion TypeScript Markdown Editor is a web-based editor that enables users to create, edit, and format Markdown content with features such as table support and structured content formatting. This section explains the steps to create a simple Markdown Editor and demonstrates the basic usage of the Markdown Editor control using a Vite-based TypeScript project scaffolded with Vite latest Vite version.

## Prerequisites

This guide uses Vite as the bundler and development environment. Install Node.js `24.13.0` or `higher` before proceeding. For detailed information about Vite’s capabilities and configuration options, refer to the [Vite documentation](https://vitejs.dev/).

## Create a TypeScript application.

To set up a TypeScript application, run the following command.

```bash
npm create vite@latest my-app -- --template vanilla-ts
```
This command will prompt you to install the required packages and start the application. Select the options as shown below.

![Markdown Editor Initial setup](images/npm_setup.png)

As Syncfusion packages are not installed yet, currently, the `No` option will be selected. Then, navigate to the project directory and install the dependencies using the following commands:

```bash
cd my-app
npm install
```

## Add Syncfusion JavaScript packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install the Markdown Editor control, use the following command

```bash
npm install @syncfusion/ej2-richtexteditor
```

## Adding CSS reference

Syncfusion provides multiple themes for the Rich Text Editor control. For a complete list of available themes, refer to the [themes packages](https://ej2.syncfusion.com/documentation/appearance/theme#theme-packages).

To apply the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme, install the corresponding theme package using the following command:

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

The installed theme package includes an `index.css` file that automatically imports all the required dependency styles. Import the following stylesheet into `src/style.css`.

```css
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css';
```

I> To apply the application-specific styles correctly, import **style.css** into **src/main.ts** and remove all the default styles from **src/style.css** and use the Rich Text Editor styles provided above.

## Module Injection

The following modules provide the basic features of the Markdown Editor.

* `Toolbar` - Inject this module to use the Toolbar feature.
* `Link` - Inject this module to use the link feature in Markdown Editor.
* `Image`- Inject this module to use the image feature in Markdown Editor.
* `MarkdownEditor` - Inject this module to use the Rich Text Editor as Markdown editor.

These modules should be injected into the Rich Text Editor using the `RichTextEditor.Inject` method as demonstrated in the following example:

{% tabs %}
{% highlight ts hl_lines="3" tabtitle="app.ts" %}

import './style.css';
import { RichTextEditor, Toolbar, Link, Image, MarkdownEditor } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, MarkdownEditor);

let editor: RichTextEditor = new RichTextEditor({
    editorMode: 'Markdown'
});
editor.appendTo('#editor');

{% endhighlight %}
{% endtabs %}

T> Additional feature modules are available [here](https://ej2.syncfusion.com/documentation/rich-text-editor/module)

## Adding Markdown Editor control

Now, you can start adding the Markdown Editor control to the application. For getting started, add the Markdown Editor initialization code in the **src/main.ts** file and add the target element in the **index.html** file using the following sample.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import './style.css';
import { RichTextEditor, Toolbar, Link, Image, MarkdownEditor } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, MarkdownEditor);

let editor: RichTextEditor = new RichTextEditor({
    editorMode: 'Markdown'
});
editor.appendTo('#editor');

{% endhighlight %}

{% highlight css tabtitle="style.css" %}

@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css';

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Essential JS 2 Markdown Editor</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
     <div id="editor"></div>
     <script type="module" src="/src/main.ts"></script>
</body>
</html>

{% endhighlight %}

{% endtabs %}


## Run the application

Use the following command to run the application.

```bash
npm run dev
```
The Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript Markdown Editor is displayed in the browser as shown below.

![Syncfusion TypeScript Markdown Editor output](images/getting-started.png)

## See Also

**Documentation:**

* [How to change the editor type](./editor-modes)
* [How to render the iframe](./iframe)
* [How to render the toolbar in inline mode](./inline-mode)
* [Accessibility in Markdown Editor](./accessibility)
* [Keyboard support in Markdown Editor](./keyboard-support)
* [Globalization in Rich Text Editor](../rich-text-editor/globalization)

**Live examples:**

* [How to insert Emoticons](https://ej2.syncfusion.com/javascript/demos/#/tailwind3/rich-text-editor/insert-emoticons)
* [Blog posting using Rich Text Editor](https://ej2.syncfusion.com/javascript/demos/#/tailwind3/rich-text-editor/blog-posting)
* [Reactive Form with Rich Text Editor](https://ej2.syncfusion.com/javascript/demos/#/tailwind3/rich-text-editor/reactive-form)
