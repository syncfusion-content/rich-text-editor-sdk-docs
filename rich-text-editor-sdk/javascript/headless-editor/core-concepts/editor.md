---
layout: post
title: Editor in JavaScript Headless Editor | Syncfusion
description: Learn how to create, mount, configure, and dispose a HeadlessEditor instance in the JavaScript Headless Editor.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Editor in JavaScript Headless Editor

The `HeadlessEditor` class is the single entry point for the Headless Editor. You create one with `HeadlessEditor.create()`, mount it into a DOM container, interact with it through commands, observe it through events, and dispose it with `destroy()`.

## Creating an editor

Use the static `HeadlessEditor.create()` method to instantiate the editor. The constructor is internal, and `create()` is the only public way to obtain an instance.

```js
var editor = ej.headlesseditor.HeadlessEditor.create({
  extensions: [ej.headlesseditor.basicExtensions]
});
```

The `create()` call returns a fully initialized editor that is ready to mount. It is not attached to the DOM until you call `mount()`.

## Editor configuration

`HeadlessEditor.create()` accepts an `EditorConfig` object that controls initial content, extensions, behavior toggles, lifecycle hooks, and integrations.

### Initial content and extensions

Use `document` or `content` to provide a starting document, and `extensions` to enable features such as bold, headings, lists, and tables.

```js
var editor = ej.headlesseditor.HeadlessEditor.create({
  content: '<h1>Welcome</h1><p>Start typing...</p>',
  extensions: [ej.headlesseditor.basicExtensions]
});
```

### Behavior toggles

| Property | Purpose |
|----------|---------|
| `autofocus` | Focus the editor automatically when it is mounted. |
| `readOnly` | Render the editor in read-only mode. |
| `enableInputRules` | Enable markdown-style autoformatting (default `true`). |
| `enableTabKey` | Enable Tab and Shift+Tab behavior (default `true`). |
| `autoSaveSelectionOnBlur` | Save the selection when the editor loses focus. |

```js
var editor = ej.headlesseditor.HeadlessEditor.create({
  extensions: [ej.headlesseditor.basicExtensions],
  autofocus: 'start',
  readOnly: false,
  enableInputRules: true
});
```

### Lifecycle hooks

`EditorConfig` exposes lifecycle callbacks such as `created`, `destroyed`, `contentChanged`, `selectionChanged`, `focus`, and `blur`. These are wired to the same-named public events on the editor instance.

```js
var editor = ej.headlesseditor.HeadlessEditor.create({
  extensions: [ej.headlesseditor.basicExtensions],
  created: function () {
    console.log('Editor is ready.');
  },
  contentChanged: function (args) {
    console.log('Document changed.');
  }
});
```

For the full list of events and their payloads, see the `Events` api.

## Mounting and unmounting

Use `mount()` to attach the editor to a DOM container, and `unmount()` to detach it.

```js
var container = document.getElementById('editor');

editor.mount(container);
```

```js
editor.unmount();
```

After `unmount()`, the editor's state, including the document, selection, and history, is preserved. You can re-attach the same instance to the same container or to a different one by calling `mount()` again.

## Disposing an editor

Use `destroy()` to release the editor and all of its resources. After `destroy()` the instance is unusable; create a new one with `HeadlessEditor.create()` if you need another editor.

```js
editor.destroy();
```

`destroy()` is safe to call more than once. The recommended pattern is to destroy the editor in a teardown hook such as the `beforeunload` event, a route change, or a component-disposal lifecycle method.

## Updating configuration after creation

A small set of behavior toggles can be updated at runtime with `setOptions()`. Updates take effect immediately on the live editor.

```js
editor.setOptions({
  readOnly: true,
  autoSaveSelectionOnBlur: true
});
```

The properties supported by `setOptions()` are:

| Property | Effect |
|----------|--------|
| `readOnly` | Switches the editor in and out of read-only mode. |
| `autofocus` | Updates the autofocus behavior for the next mount. |
| `autoSaveSelectionOnBlur` | Enables or disables selection auto-save. |
| `enableInputRules` | Enables or disables markdown-style input rules. |

Structural properties such as `document`, `content`, `extensions`, and `clipboard` cannot be changed after creation. To change them, destroy the editor and create a new one.
