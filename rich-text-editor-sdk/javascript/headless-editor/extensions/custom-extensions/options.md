---
layout: post
title: Extension Options in JavaScript Headless Editor | Syncfusion
description: Learn how to declare and consume extension options, including the shared ExtensionOptions interface and the defineOptions factory in JavaScript Headless Editor.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdkappliesto: UI Component Suite, Rich Text Editor SDK
---

# Extension Options in JavaScript Headless Editor

Extension options let consumers of an extension customize its behavior without writing a fork. Declare them with the `defineOptions` factory on the extension config; read them at runtime through `ExtensionScope.options`.

## Shared `ExtensionOptions` interface

The Headless Editor publishes a shared `ExtensionOptions` interface that most built-in extensions use. It contains a single optional field, `htmlAttributes`, which is merged onto the rendered DOM element.

| Field | Type | Description |
|-------|------|-------------|
| `htmlAttributes` | `Readonly<Record<string, string>>` | HTML attributes (class, data-*, etc.) applied to the rendered DOM element. |

Extensions are free to extend `ExtensionOptions` with their own fields, or to use a different options object.

## Declaring options

Use the `defineOptions` factory on the extension config to return the default option values:

```js
var counterExtension = ej.headlesseditor.defineExtension({
  name: 'counter',
  defineOptions: function () {
    return {
      start: 0,
      step: 1,
      max: 10,
      htmlAttributes: { class: 'counter' }
    };
  }
});
```

`defineOptions` is called when the editor starts up. The returned object is treated as the default; consumers override values through `configure`.

## Defining custom option values

In JavaScript, options are defined directly as properties of the object returned by `defineOptions`. The same option names are available through `configure`, `extend`, and the runtime `ExtensionScope.options` field.

```js
var counterExtension = ej.headlesseditor.defineExtension({
  name: 'counter',
  defineOptions: function () {
    return {
      start: 0,
      step: 1,
      max: 10
    };
  }
});
```

`configure` accepts an object containing the option values to override.

## Reading options at runtime

Inside any contributor, read the current options through the `ExtensionScope` passed as `this`:

```js
var counterExtension = ej.headlesseditor.defineExtension({
  name: 'counter',
  defineOptions: function () {
    return { start: 0, step: 1, max: 10 };
  },
  commands: function () {
    var options = this.options || {};
    var start = options.start;
    var step = options.step;

    return [
      {
        name: 'increment',
        execute: function () {
          // Use `start` and `step` here
        }
      }
    ];
  }
});
```

The `this.options` field is read-only. To change an option at runtime, expose a command or use the editor's command facade.

## Customizing options with `configure`

Consumers customize options with `configure`, which shallow-merges the supplied options over the defaults:

```js
var customCounter = counterExtension.configure({
  start: 100,
  step: 5
});

// customCounter now has: { start: 100, step: 5, max: 10 }
```
