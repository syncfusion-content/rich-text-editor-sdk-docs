---
layout: post
title: Keyboard Shortcuts in TypeScript Headless Editor | Syncfusion
description: A reference for the default keyboard shortcuts in the TypeScript Headless Editor and how extensions contribute their own.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Keyboard Shortcuts

Headless Editor ships with a set of default keyboard shortcuts for selection, navigation, history, and formatting. Extensions can add more. This page lists the default shortcuts, explains how the keymap is assembled, and shows how to opt out of unwanted shortcuts.

If you are not yet familiar with the editor instance, see the **Editor** page first.

## All keyboard shortcuts

The tables below list the default shortcuts that are available in the editor. Shortcuts marked as "always available" come from the base keymap and work without any extension. Shortcuts under a specific feature require that feature's extension to be registered.

### Selection and navigation

These shortcuts are always available.

| Action | Windows | Mac |
|--------|---------|-----|
| Move cursor left | <kbd>←</kbd> | <kbd>←</kbd> |
| Move cursor right | <kbd>→</kbd> | <kbd>→</kbd> |
| Move cursor up | <kbd>↑</kbd> | <kbd>↑</kbd> |
| Move cursor down | <kbd>↓</kbd> | <kbd>↓</kbd> |
| Move to start of line | <kbd>Home</kbd> | <kbd>Home</kbd> |
| Move to end of line | <kbd>End</kbd> | <kbd>End</kbd> |
| Move to start of document | <kbd>Ctrl</kbd> + <kbd>Home</kbd> | <kbd>⌘</kbd> + <kbd>Home</kbd> |
| Move to end of document | <kbd>Ctrl</kbd> + <kbd>End</kbd> | <kbd>⌘</kbd> + <kbd>End</kbd> |
| Select all | <kbd>Ctrl</kbd> + <kbd>A</kbd> | <kbd>⌘</kbd> + <kbd>A</kbd> |
| Delete character before cursor | <kbd>Backspace</kbd> | <kbd>Backspace</kbd> |
| Delete character after cursor | <kbd>Delete</kbd> | <kbd>Delete</kbd> |
| Delete word before cursor | <kbd>Ctrl</kbd> + <kbd>Backspace</kbd> | <kbd>⌥</kbd> + <kbd>Backspace</kbd> |
| Delete word after cursor | <kbd>Ctrl</kbd> + <kbd>Delete</kbd> | <kbd>⌥</kbd> + <kbd>Delete</kbd> |
| Insert new line / split block | <kbd>Enter</kbd> | <kbd>Enter</kbd> |

### History

These shortcuts require the `undoRedo` extension. They are part of `basicExtensions`.

| Action | Windows | Mac |
|--------|---------|-----|
| Undo | <kbd>Ctrl</kbd> + <kbd>Z</kbd> | <kbd>⌘</kbd> + <kbd>Z</kbd> |
| Redo | <kbd>Ctrl</kbd> + <kbd>Y</kbd> | <kbd>⌘</kbd> + <kbd>Y</kbd> |

### Formatting

These shortcuts require the corresponding formatting extension. They are part of `basicExtensions`.

| Action | Windows | Mac |
|--------|---------|-----|
| Bold | <kbd>Ctrl</kbd> + <kbd>B</kbd> | <kbd>⌘</kbd> + <kbd>B</kbd> |
| Italic | <kbd>Ctrl</kbd> + <kbd>I</kbd> | <kbd>⌘</kbd> + <kbd>I</kbd> |
| Underline | <kbd>Ctrl</kbd> + <kbd>U</kbd> | <kbd>⌘</kbd> + <kbd>U</kbd> |

### Lists

These shortcuts require the `list` extension (or a list-family extension) to be registered. The list keymap is added automatically when a list extension is present.

| Action | Windows | Mac |
|--------|---------|-----|
| Indent list item (sink) | <kbd>Tab</kbd> | <kbd>Tab</kbd> |
| Outdent list item (lift) | <kbd>Shift</kbd> + <kbd>Tab</kbd> | <kbd>⇧</kbd> + <kbd>Tab</kbd> |
| Split list item | <kbd>Enter</kbd> | <kbd>Enter</kbd> |
| Delete at start of empty list item | <kbd>Backspace</kbd> | <kbd>Backspace</kbd> |
| Delete word at start of list item | <kbd>Ctrl</kbd> + <kbd>Backspace</kbd> | <kbd>⌥</kbd> + <kbd>Backspace</kbd> |
| Delete at end of empty list item | <kbd>Delete</kbd> | <kbd>Delete</kbd> |
| Delete word at end of list item | <kbd>Ctrl</kbd> + <kbd>Delete</kbd> | <kbd>⌥</kbd> + <kbd>Delete</kbd> |

`Tab` and `Shift+Tab` for list indent only apply when the cursor is inside a list item. Outside a list, the same `Tab` key may be handled by `indentOutdentExtension` if `enableTabKey` is `true`.

### Blocks via input rules

Block shortcuts in Headless Editor are surfaced through **input rules** rather than raw keybindings. The text you type is converted to a block when the rule matches.

| Action | Pattern | Requires |
|--------|---------|----------|
| Heading level 1 | `# ` at the start of a line | `heading` extension |
| Heading level 2 | `## ` at the start of a line | `heading` extension |
| Heading level 3 | `### ` at the start of a line | `heading` extension |
| Bullet list | `- ` or `* ` at the start of a line | `list` extension |
| Ordered list | `1. ` at the start of a line | `list` extension |
| Task list | `[] ` or `[ ] ` at the start of a line | `taskList` extension |
| Blockquote | `> ` at the start of a line | `blockquote` extension |
| Code block | ```` ``` ```` at the start of a line | `codeBlock` extension |
| Bold | `**text**` or `__text__` | `bold` extension |
| Italic | `*text*` or `_text_` | `italic` extension |
| Inline code | `` `text` `` | `inlineCode` extension |

Input rules are enabled by default. They are controlled by `enableInputRules` on `EditorConfig`.

## How shortcuts are matched

The editor assembles a single keymap from two sources:

1. A **base keymap** of selection, navigation, and editing shortcuts that are always available.
2. **Extension-contributed shortcuts** that extensions register through their `keyboardShortcuts()` method.

When both sources define the same key, the editor runs the extension handlers first, in priority order, and the base handler is the **fallback**. If every extension handler returns `false`, the base handler runs. This guarantees that extensions cannot silently break `Enter`, `Backspace`, `Delete`, or any other base key.

## Disabling shortcuts

A small number of config options let you opt out of editor behavior that may collide with your application's shortcuts.

| Config option | Effect |
|---------------|--------|
| `enableInputRules` (`true` by default) | When `false`, markdown-style input rules are disabled. The `**bold**`, `# heading`, and similar patterns are no longer converted into formatted content. |
| `enableTabKey` (`true` by default) | When `false`, `Tab` and `Shift+Tab` are not used by the editor. The `indentOutdentExtension` is not auto-registered. |

```typescript
import { HeadlessEditor, basicExtensions } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [basicExtensions],
    enableInputRules: false,
    enableTabKey: false
});
```

Disabling a base keymap shortcut is not supported. If you need to override a base key for a single editor instance, write a custom extension that contributes a higher-priority handler for that key and let the framework's fallback chain decide what runs.

## Adding your own shortcuts

Custom extensions can contribute their own shortcuts through the `keyboardShortcuts()` method. The framework merges them with the base keymap, runs extension handlers first, and falls back to the base handler when no extension consumes the key. See the **Custom Extensions** section for the full contract.

## What's next

Now that you know how the editor's keys are wired, see how to listen for everything else that happens:

- **Events** — subscribe to `contentChanged`, `documentChanged`, `selectionChanged`, and more.
- **Commands** — back to the typed command facade.