---
layout: post
title: Custom Plugins in JavaScript Headless Editor | Syncfusion
description: Learn how to contribute custom ProseMirror plugins to the JavaScript Headless Editor to observe and react to editor activity.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Custom Plugins in JavaScript Headless Editor

Use the `plugins` field on `ExtensionConfig` to add a long-lived observer to the editor. A plugin is the right home for behavior that has to follow the editor over time, like logging, focus tracking, or content change reactions.

## What you write

The `plugins` contributor is a function that returns an array of ProseMirror plugins.

```js
plugins: function () {
  return [];
}
```

The option returns the list of plugins the extension adds. Each entry is a `Plugin` instance.

## Import plugin

When using the JavaScript global-script platform, the ProseMirror `Plugin` constructor is available through the Headless Editor global namespace.

## Example: a focus-tracker plugin

The following plugin watches the editor's focus and blur events and logs them. It is mounted by the editor and lives for the life of the editor instance.

```js
var focusTrackerExtension = ej.headlesseditor.defineExtension({
  name: 'focus-tracker',
  plugins: function () {
    return [
      new ej.headlesseditor.Plugin({
        view: function (editorView) {
          var onFocus = function () {
            console.log('editor focused');
          };
          var onBlur = function () {
            console.log('editor blurred');
          };
          editorView.dom.addEventListener('focus', onFocus);
          editorView.dom.addEventListener('blur', onBlur);

          return {
            destroy: function () {
              editorView.dom.removeEventListener('focus', onFocus);
              editorView.dom.removeEventListener('blur', onBlur);
            }
          };
        }
      })
    ];
  }
});
```

## When to ship a plugin

| Use `plugins` when | Use `addExtensions` when |
|---------------------|---------------------------|
| You need to observe or react to editor activity over time. | You only need to add nodes, marks, commands, or shortcuts. |
| The lifetime of the work is tied to the editor. | The lifetime of the work is per-extension. |
| You are wrapping a third-party library that needs to be present alongside the editor. | You are building a small extension. |

I> A plugin that needs to change the document must dispatch a command through `editor.execute(name, payload)` rather than mutating state on its own.
