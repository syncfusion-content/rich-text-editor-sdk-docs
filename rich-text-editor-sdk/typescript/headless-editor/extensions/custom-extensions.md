---
layout: post
title: Custom Extensions in TypeScript Headless Editor | Syncfusion
description: Learn how to build custom extensions for the TypeScript Headless Editor, including defining, configuring, and extending extension capabilities.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
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

## Section map

| Page | Covers |
|------|--------|
| [Define an Extension](custom-extensions/define-extension) | `defineExtension` factory, naming, and registration. |
| [Configure an Extension](custom-extensions/configure) | The `configure(options)` method. |
| [Extend an Extension](custom-extensions/extend) | The `extend(overrides)` method. |
| [Extension Options](custom-extensions/options) | The shared `ExtensionOptions` interface and the `defineOptions` factory. |
| [Extension Lifecycle](custom-extensions/lifecycle) | `onRegister`, `onReady`, and `onDestroy` and the order in which they fire. |
| [Extension Priority](custom-extensions/priority) | The `priority` field and the values to use for filler blocks and recursive containers. |
| [Custom Nodes](custom-extensions/custom-nodes) | Contributing a node via the `nodes` contributor. |
| [Custom Marks](custom-extensions/custom-marks) | Contributing a mark via the `marks` contributor. |
| [Custom Attributes](custom-extensions/custom-attributes) | Reusable `AttributeDefinition` defaults. |
| [Custom Commands](custom-extensions/custom-commands) | Contributing commands and reaching them through `editor.commands.*`. |
| [Custom Plugins](custom-extensions/custom-plugins) | The `plugins` contributor. |
| [Custom Keyboard Shortcuts](custom-extensions/custom-keyboard-shortcuts) | The `keyboardShortcuts` contributor and the merge behavior in `extend`. |
| [Custom Input Rules](custom-extensions/custom-input-rules) | The `inputRules` contributor and the `InputRuleDefinition` shape. |
| [Custom DOM Specifications](custom-extensions/custom-dom-specs) | The `domSpecs` contributor and the `DOMOutputDescriptor` shape. |
| [Custom Node Views](custom-extensions/custom-node-views) | The `nodeViews` contributor and the `NodeViewDescriptor` lifecycle. |
| [Add Node View to Existing Node](custom-extensions/add-node-view) | Layering product UI on top of a built-in extension's NodeView. |
| [Document Variable Example](custom-extensions/variable-extension) | A runnable Document Variable extension that exercises seven contributors in one preview. |
| [Real-World Example](custom-extensions/example) | One end-to-end example exercising every contributor in this section. |
