---
layout: post
title: Custom Extensions in TypeScript Headless Editor | Syncfusion
description: Learn how to build custom extensions for the TypeScript Headless Editor, including defining, configuring, and extending extension capabilities.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdkappliesto: UI Component Suite, Rich Text Editor SDK
---

# Custom Extensions in TypeScript Headless Editor

When the built-in extensions don't cover your scenario, you can build your own. A custom extension adds a new node type, a new mark, a custom command, a keyboard shortcut, an input rule, a plugin, a DOM spec, or a node view — and you can mix any of them together.

Start from the `defineExtension` factory and an `ExtensionConfig` object that describes what you want the extension to contribute.

## When to write a custom extension

Use a custom extension when the built-in extensions cannot express the behavior you need. Common cases include a new block type, a new mark, a custom shortcut, a custom input rule, or a NodeView that renders a built-in node with extra product UI.

## What an extension can contribute

| Contributor | Purpose |
|-------------|---------|
| `name` | Unique identifier for the extension within an editor instance. |
| `priority` | Controls the order in which the extension's nodes are added to the schema. Defaults to `50`. |
| `defineOptions` | Factory that returns the extension's default option values. |
| `addExtensions` | Contribute additional extensions (composition). |
| `nodes` | Contribute node type definitions. |
| `marks` | Contribute mark type definitions. |
| `commands` | Contribute command definitions. |
| `keyboardShortcuts` | Contribute keyboard shortcut handlers. |
| `inputRules` | Contribute input rule definitions. |
| `plugins` | Contribute editor plugins. |
| `domSpecs` | Contribute DOM rendering specs for nodes and marks. |
| `nodeViews` | Contribute NodeView factories for nodes. |
| `onRegister` | Lifecycle hook called after successful registration. |
| `onReady` | Lifecycle hook called after editor startup completion. |
| `onDestroy` | Lifecycle hook called during editor destruction. |

## What an extension cannot do

- Mutate its own definition after creation; `ExtensionDefinition` is immutable.
- Mutate document state outside of a command handler or input rule handler. Use `editor.commands.*` for all state mutations.
