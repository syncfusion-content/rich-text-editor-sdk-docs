---
layout: post
title: Extend an Extension in JavaScript Headless Editor | Syncfusion
description: Learn how to override extension configuration in the JavaScript Headless Editor with the extend method, including the keyboard shortcut merge behavior.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdkappliesto: UI Component Suite, Rich Text Editor SDK
---

# Extend an Extension in JavaScript Headless Editor

Use `ExtensionDefinition.extend(overrides)` to add, replace, or remove a contributor without rebuilding the extension from scratch. The call returns a new extension with the overrides applied.

## Signature

`extend` accepts an object containing the extension configuration fields to override and returns a new `ExtensionDefinition`.

```js
extension.extend(overrides)
```

Unlike `configure`, which only replaces option values, `extend` can override any field in `ExtensionConfig` — including the contributor functions and lifecycle hooks.

## Basic example

```js
var baseExtension = ej.headlesseditor.defineExtension({
  name: 'counter',
  commands: function () {
    return [
      {
        name: 'increment',
        execute: function () { /* ... */ }
      }
    ];
  }
});

var loggedExtension = baseExtension.extend({
  onRegister: function () {
    console.log('counter registered');
  }
});
```

`loggedExtension` inherits `name`, the `commands` contributor, and any other fields, but adds an `onRegister` hook.

## New definition per call

`extend` returns a new `ExtensionDefinition`. The original definition is unchanged.

```js
var baseExtension = ej.headlesseditor.defineExtension({ name: 'counter' });
var prioritizedExtension = baseExtension.extend({ priority: 10 });

baseExtension.config.priority;         // undefined
prioritizedExtension.config.priority; // 10
```

## Special case: `keyboardShortcuts` merging

`keyboardShortcuts` is merged rather than replaced when both the base and the override define it. The override is applied on top of the base, so the override can add or replace individual bindings without losing the base's bindings.

```js
var baseExtension = ej.headlesseditor.defineExtension({
  name: 'demo',
  keyboardShortcuts: function () {
    return {
      'Mod-a': function () { /* select all */ return true; },
      'Mod-b': function () { /* bold */ return true; }
    };
  }
});

var customExtension = baseExtension.extend({
  keyboardShortcuts: function () {
    return {
      'Mod-c': function () { /* copy */ return true; }
    };
  }
});

// customExtension.keyboardShortcuts() returns:
//   { 'Mod-a': ..., 'Mod-b': ..., 'Mod-c': ... }
```
