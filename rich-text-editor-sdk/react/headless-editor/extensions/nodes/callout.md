---
layout: post
title: Callout Extension in React Headless Editor | Syncfusion
description: Learn how to configure the Callout extension in the React Headless Editor, including callout variants, toggle commands, shortcuts, and input rules.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Callout in React Headless Editor

The `calloutExtension` registers the `callout` block container node for rendering highlighted message boxes such as informational notes, warnings, errors, success and tips.

## Register the extension

```tsx
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/nodes/callout/app.tsx %}
```

## Node attributes

| Attribute | Description |
|-----------|--------------|
| `variant` | Visual style variant of the callout: `info`, `warning`, `note`, `success`, `error`, or `tip`. Defaults to `info`. |

## Configure callout options

The `callout` extension provides options to set the default variant and add custom HTML attributes:

| Option | Description | Default |
|--------|-------------|---------|
| `defaultVariant` | Default variant used when creating a callout without specifying one. | `'info'` |
| `htmlAttributes` | Custom HTML attributes applied to the outer callout container element. | `{}` |

Use `.configure()` to apply custom settings:

```tsx
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/nodes/callout/configure.tsx %}
```

## Commands

| Command | Description |
|---------|--------------|
| `toggleCallout({ variant? })` | Toggles a callout wrapper around the current block or selection. Accepts an optional `variant` (`info`, `warning`, `note`, `success`, `error`, or `tip`). If already inside a callout, unwraps the content. |

```ts
// Toggle with default variant
editor.commands.toggleCallout();

// Toggle with a warning variant
editor.commands.toggleCallout({ variant: 'warning' });
editor.mount(document.getElementById('editor') as HTMLElement);
```

## Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Toggle Callout | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>C</kbd> |

## Input rules

Type the following triggers followed by a space at the start of a line to wrap the current block in a callout:

* `!!!` creates an `info` callout
* `:::` creates a `note` callout