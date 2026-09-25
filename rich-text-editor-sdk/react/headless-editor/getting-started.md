---
layout: post
title: Getting Started with React Headless Editor | Syncfusion
description: Learn how to get started with the React Headless Editor and explore setup, configuration, and core feature examples.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Getting started in React Headless Editor

The React Headless Editor component is a powerful rich text editing solution that provides a framework-integrated way to create and manage editable content in React applications.

## Dependencies

The following dependencies are required to use the `Headless Editor` component in the application.

```javascript
|-- @syncfusion/ej2-react-headless-editor
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

**Step 1:** Create a React application using Vite.

```bash
npm create vite@latest my-app -- --template react-ts
```

**Step 2:** Navigate to the application directory and install the required packages.

```bash
cd my-app
npm install
npm install @syncfusion/ej2-react-headless-editor
```

## Adding Headless Editor styles

Import the required Headless Editor theme styles into the application. Add the following styles to the `src/App.css` file:

```css
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/base.css';
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/headless-editor/index.css';
```

I> Ensure that all Headless Editor theme style files are loaded in the exact order shown above. The order is important because these styles have dependencies, and loading them incorrectly may cause styling issues in the control. You can also refer to the [themes section](https://ej2.syncfusion.com/documentation/appearance/theme) for details about built-in themes and CSS references for individual controls.

## Adding Headless Editor component

Import the `HeadlessEditor` from the `@syncfusion/ej2-headless-editor` package and add it to the application.

The Headless Editor can be initialized using the React component, as shown below:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/getting-started/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/getting-started/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

## Run the Application

Run the application using the following command:

```bash
npm run dev
```

The Syncfusion<sup style="font-size:70%">®</sup> React Headless Editor is displayed as shown below.

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/headless-editor/getting-started" %}

## See Also

**Live examples:**

* `Syncfusion React Headless Editor demos`

N> You can refer to our `React Headless Editor` feature tour page for its feature representations. You can also explore our `React Headless Editor example` that shows how to render the headless editor.
