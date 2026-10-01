---
layout: post
title: Custom Keyboard Shortcuts in React Headless Editor | Syncfusion
description: Learn how to bind custom keyboard shortcuts to commands in the Headless Editor, including key names and conflict handling.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Custom Keyboard Shortcuts in React Headless Editor

Use the `keyboardShortcuts` field on `ExtensionConfig` to bind a key combination to a command. When the user presses the key, the editor runs the command and uses the return value to decide whether to swallow the keystroke.

## What you write

```typescript
keyboardShortcuts?: (this: ExtensionScope<TOptions>) => Record<string, () => boolean>
```

The option returns a map from key name to handler. Each handler runs a command and returns `true` when it handled the key, or `false` to let the next handler try.

## Key names

Key names follow the same convention used elsewhere in the Headless Editor:

| Pattern | Meaning |
|---------|---------|
| `Mod-z` | <kbd>Ctrl</kbd>+<kbd>Z</kbd> on Windows / Linux, <kbd>⌘</kbd>+<kbd>Z</kbd> on macOS. |
| `Mod-Shift-z` | Adds <kbd>Shift</kbd>. |
| `Mod-Alt-Enter` | Adds <kbd>Alt</kbd> / <kbd>Option</kbd>. |
| `Enter`, `Tab`, `Backspace`, `Delete`, `Escape` | Named keys. |
| `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight` | Arrow keys. |

The `Mod-` prefix lets the same binding work cross-platform without writing two entries.

## Handler signature

A handler is a zero-arg function that returns `true` when it handled the key, or `false` to let the next handler run:

```typescript
() => boolean
```

Return `true` after a successful command so the editor knows the key was used. Return `false` if you want the key event to keep flowing to other handlers.

## Example: an extra `Mod-Shift-c` shortcut

The editor already ships with a `toggleBold` command. Bind a custom shortcut to it without touching the built-in `Mod-b` binding:

```typescript
import { defineExtension } from '@syncfusion/ej2-headless-editor';

const extraShortcutsExtension = defineExtension({
    name: 'extra-shortcuts',
    keyboardShortcuts() {
        return {
            'Mod-Shift-c': () => this.editor.commands.toggleBold()
        };
    }
});
```

Both `Mod-b` (built-in) and `Mod-Shift-c` (this extension) toggle bold.

## Shortcut conflicts

When two extensions register the same key, the editor dispatches them in registration order. The first handler that returns `true` consumes the key. To opt out, return `false` from your handler and let the next extension handle the key.

## Merging with `extend`

When you call `extend` on an extension that already defines shortcuts, the editor merges the two maps. Override keys win; the base extension's keys are preserved. See [Extend an Extension](extend) for the full merge semantics.
