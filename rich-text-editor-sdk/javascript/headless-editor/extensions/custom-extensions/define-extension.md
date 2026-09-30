---
layout: post
title: Define an Extension in JavaScript Headless Editor | Syncfusion
description: Learn how to define a custom extension for the JavaScript Headless Editor using the defineExtension factory and ExtensionConfig.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Define an Extension in JavaScript Headless Editor

Use the `defineExtension` factory to build a custom extension from an `ExtensionConfig`.

## Accessing `defineExtension`

In the JavaScript global-script platform, access `defineExtension` through the `ej.headlesseditor` namespace.

```js
ej.headlesseditor.defineExtension
```

## Signature

`defineExtension` accepts an extension configuration object and returns an extension definition.

```js
ej.headlesseditor.defineExtension(config)
```

Extension options can be supplied through `defineOptions`, `configure`, and `extend`.

## The minimum config

The only required field is `name`. Every other field is optional.

```js
var greetingExtension = ej.headlesseditor.defineExtension({
  name: 'greeting'
});
```

The factory requires a non-empty `name`. Passing an empty or whitespace-only string throws an error.

```js
ej.headlesseditor.defineExtension({ name: '   ' });
// throws: Error: Extension name cannot be empty.
```

Other contributors are not validated here; pass valid shapes to avoid editor startup errors.

## The returned definition

| Property | Type | Description |
|----------|------|-------------|
| `name` | `string` | The unique extension identifier. |
| `configure(options)` | method | Returns a new `ExtensionDefinition` with merged option defaults. |
| `extend(overrides)` | method | Returns a new `ExtensionDefinition` with overridden configuration. |

## Reusing across editors

A defined extension can be registered with multiple editors. `configure` and `extend` return a new definition each time; the original is not modified, so the same base extension can be customized differently for different editors.

```js
var base = ej.headlesseditor.defineExtension({ name: 'demo' });
var themed = base.configure({ htmlAttributes: { class: 'dark' } });
```

## Registering a defined extension

Pass the returned `ExtensionDefinition` to `HeadlessEditor.create`:

```js
var counterExtension = ej.headlesseditor.defineExtension({
  name: 'counter',
  commands: function () {
    return [
      {
        name: 'incrementCounter',
        execute: function () { /* ... */ }
      }
    ];
  }
});

var editor = ej.headlesseditor.HeadlessEditor.create({
  extensions: [counterExtension]
});
```
