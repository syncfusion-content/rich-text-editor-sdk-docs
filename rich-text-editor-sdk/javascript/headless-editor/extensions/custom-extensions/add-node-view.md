---
layout: post
title: Customize Existing Node UI in JavaScript Headless Editor | Syncfusion
description: Learn how to layer a product UI on top of a built-in Javascript Headless Editor node using the addNodeView extension option.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Add a Node View to an Existing Node in Javascript Headless Editor

Built-in extensions expose an `addNodeView` option so the consuming product can layer its own UI on top of the extension's underlying node structure. The extension keeps ownership of the schema and the data; the product contributes the user-facing wrapper.

## What you write

```js
addNodeView: function () {
  return {
    image: function (args) {
      return {
        dom: // Define your custom UI here
      };
    }
  };
}
```

## When to use `addNodeView` instead of `nodeViews`

| Use `addNodeView` when                                 | Use `nodeViews` when                      |
| ------------------------------------------------------ | ----------------------------------------- |
| You are extending an existing built-in extension.      | You are defining a new node from scratch. |
| The extension already provides a schema.               | You contribute both schema and render.    |
| You want the extension to keep ownership of structure. | The node is fully yours.                  |

## Example: layering a custom UI on a built-in node

A product can mount its own DOM around a built-in node by passing a factory through `addNodeView`. The factory receives the node and returns the DOM the editor should display.

```js
var editor = ej.headlesseditor.HeadlessEditor.create({
  enableTabKey: true,
  imageExtension: {
    addNodeView: function () {
      return {
        image: function (args) {
          return {
            dom: // Define your custom UI here
          };
        }
      };
    }
  }
});
```
