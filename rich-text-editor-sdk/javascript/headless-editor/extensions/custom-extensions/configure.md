---
layout: post
title: Configure an Extension in JavaScript Headless Editor | Syncfusion
description: Learn how to customize an extension's options with the configure method and how the merge behavior affects defaults in JavaScript Headless Editor.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Configure an Extension in JavaScript Headless Editor

Use `ExtensionDefinition.configure(options)` to change an extension's option values without rebuilding the extension from scratch. The call returns a new extension with the supplied options layered on top of the defaults.

## Signature

```js
configure(options)
```

`options` contains the extension's option values. The `configure` method only affects the option values; every other contributor (`nodes`, `marks`, `commands`, `keyboardShortcuts`, and so on) is inherited unchanged from the base definition.

## How the merge works

`configure` merges the supplied options over the defaults returned by `defineOptions`. The merge is shallow; nested objects are not deep-merged.

```js
var baseExtension = ej.headlesseditor.defineExtension({
  name: 'counter',
  defineOptions: function () {
    return { start: 0, step: 1, max: 10 };
  }
});

var zeroStepExtension = baseExtension.configure({ step: 0 });
// zeroStepExtension has: { start: 0, step: 0, max: 10 }
```

## New definition per call

`configure` returns a new `ExtensionDefinition`. The original definition is unchanged, so a base extension can be customized differently for different editors.

```js
var baseExtension = ej.headlesseditor.defineExtension({
  name: 'counter',
  defineOptions: function () {
    return { start: 0, step: 1 };
  }
});

var themedExtension = baseExtension.configure({ step: 5 });

baseExtension.config.defineOptions?.().step; // 1
themedExtension.config.defineOptions?.().step; // 5
```

## Configure vs extend

| Use `configure` when                   | Use `extend` when                                  |
| -------------------------------------- | -------------------------------------------------- |
| You only want to change option values. | You want to add, replace, or remove a contributor. |
| You want defaults to be inherited.     | You want a new `nodes`, `marks`, `commands`, etc.  |

## Example: changing the htmlAttributes default

Most built-in extensions expose an `htmlAttributes` option through the shared `ExtensionOptions` interface. Pass a partial set of attributes and the rest of the defaults are preserved.

```html
<div id="editor"></div>
```

```js
var themedBasicExtensions = ej.headlesseditor.paragraphExtension.configure({
  htmlAttributes: { class: 'dark-theme' }
});

var editor = ej.headlesseditor.HeadlessEditor.create({
  extensions: [themedBasicExtensions]
});
editor.mount(document.getElementById('editor'));
```
