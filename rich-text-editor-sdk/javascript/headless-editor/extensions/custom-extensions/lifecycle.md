---
layout: post
title: Extension Lifecycle in JavaScript Headless Editor | Syncfusion
description: Learn the extension lifecycle hooks (onRegister, onReady, onDestroy) in JavaScript Headless Editor and the order in which they fire.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Extension Lifecycle in JavaScript Headless Editor

Every custom extension moves through three lifecycle phases during the editor's life: registration, ready, and destruction. Hooks let you run code at the boundary of each phase.

## Lifecycle hooks

Three hooks are available on `ExtensionConfig`.

| Hook | When it fires | Typical use |
|------|---------------|-------------|
| `onRegister` | After the extension has been registered with the editor. | Validate config, prepare internal state. |
| `onReady` | After the editor is fully started. | Start background tasks, register listeners. |
| `onDestroy` | During editor destruction, in reverse registration order. | Release listeners, flush pending state. |

All three hooks are optional. If a hook is not implemented, the extension simply moves to the next phase.

## Order of execution

When an editor starts up:

1. Each extension is registered. `onRegister` fires in registration order.
2. The editor finishes starting up. `onReady` fires in registration order.

When the editor is destroyed:

1. `onDestroy` fires in reverse registration order, so the most recently registered extension cleans up first.

## Example

```js
var analyticsExtension = ej.headlesseditor.defineExtension({
  name: 'analytics',
  onRegister: function () {
    console.log('analytics registered');
  },
  onReady: function () {
    // Start a heartbeat or register a contentChanged listener
  },
  onDestroy: function () {
    // Flush pending analytics, remove listeners
  }
});
```

## Failure handling

If an extension fails to start up because of an invalid configuration, the editor surfaces the error. Other extensions are not affected. Use `onRegister` to surface configuration errors early so they are caught before the editor finishes starting up.
