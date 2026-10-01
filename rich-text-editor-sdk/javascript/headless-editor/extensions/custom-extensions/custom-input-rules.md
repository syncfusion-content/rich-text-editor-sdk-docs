---
layout: post
title: Custom Input Rules in JavaScript Headless Editor | Syncfusion
description: Learn how to define custom input rules for the Headless Editor, including patterns, handlers, and the dispatchCommand contract.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Custom Input Rules in JavaScript Headless Editor

Use the `inputRules` field on `ExtensionConfig` to turn a short typing pattern into a richer editor action. For example, typing `**word**` in plain text and watching it become bold.

## What you write

```js
inputRules: function () {
  return [
    // Input rule definitions
  ];
}
```

The contributor returns the list of input rule definitions the extension registers. Each rule matches a pattern against the text immediately before the cursor; when the pattern matches, the rule's handler runs and mutates state through `dispatchCommand`.

## `InputRuleDefinition` shape

| Field       | Type      | Description                                                           |
| ----------- | --------- | --------------------------------------------------------------------- |
| `id`        | `string`  | Unique rule identifier. Useful for debugging and analytics.           |
| `pattern`   | `RegExp`  | Pattern tested against the text before the cursor. Must end with `$`. |
| `handler`   | function  | Invoked when the pattern matches.                                     |
| `priority`  | `number`  | Optional. Higher rules run earlier.                                   |
| `label`     | `string`  | Optional. Human-readable label for tooling.                           |
| `allowUndo` | `boolean` | Optional. Whether the resulting change participates in undo/redo.     |

## `InputRuleContext` shape

| Field             | Description                                               |
| ----------------- | --------------------------------------------------------- |
| `match`           | The `RegExpExecArray` produced by `pattern.exec`.         |
| `start`           | Start position of the match in the document.              |
| `end`             | End position of the match in the document.                |
| `nodeAt`          | The `EditorNode` at the cursor, or `null` if unavailable. |
| `selection`       | The current editor selection.                             |
| `dispatchCommand` | Call to mutate state from inside a handler.               |

## Mutating state

Inside a handler, call `dispatchCommand(commandName, payload)` to mutate the document:

```js
dispatchCommand('wrapInHeading', { level: 1 });
```

The pattern must end with `$` so it only matches when the user has just typed the closing characters of the trigger.

## Example: a `**bold**` input rule

```js id="7s6p4a"
var boldStarsExtension = ej.headlesseditor.defineExtension({
  name: 'bold-stars',
  inputRules: function () {
    return [
      {
        id: 'mark:bold-stars',
        pattern: /\*\*([^*]+)\*\*$/,
        priority: 100,
        handler: function (ctx) {
          var text = ctx.match[1];
          ctx.dispatchCommand('applyBold', { text: text });
        }
      }
    ];
  }
});
```

The handler extracts the captured text and dispatches a command, which applies bold to the matched range.
