# Keyboard Shortcuts in TypeScript Headless Editor

Headless Editor ships with a set of default keyboard shortcuts for selection, navigation, history, and formatting. Extensions can add their own shortcuts.

## Table of Contents
- [All keyboard shortcuts](#all-keyboard-shortcuts)
- [How shortcuts are matched](#how-shortcuts-are-matched)
- [Disabling shortcuts](#disabling-shortcuts)
- [Custom keyboard shortcuts](#custom-keyboard-shortcuts)
- [Keyboard accessibility](#keyboard-accessibility)
- [Focus management](#focus-management)

## All keyboard shortcuts

The below table lists the default shortcuts that are available in the editor. Shortcuts marked as "always available" come from the editor by default and work without any extension. Shortcuts under a specific feature require that feature's extension to be registered.

### Selection and navigation

These shortcuts are always available.

| Action | Windows | Mac |
|--------|---------|-----|
| Move to start of line | <kbd>Home</kbd> | <kbd>Home</kbd> |
| Move to end of line | <kbd>End</kbd> | <kbd>End</kbd> |
| Move to start of document | <kbd>Ctrl</kbd> + <kbd>Home</kbd> | <kbd>⌘</kbd> + <kbd>Home</kbd> |
| Move to end of document | <kbd>Ctrl</kbd> + <kbd>End</kbd> | <kbd>⌘</kbd> + <kbd>End</kbd> |
| Select all | <kbd>Ctrl</kbd> + <kbd>A</kbd> | <kbd>⌘</kbd> + <kbd>A</kbd> |
| Insert new line / split block | <kbd>Enter</kbd> | <kbd>Enter</kbd> |

### History

These shortcuts require the `undoRedo` extension.

| Action | Windows | Mac |
|--------|---------|-----|
| Undo | <kbd>Ctrl</kbd> + <kbd>Z</kbd> | <kbd>⌘</kbd> + <kbd>Z</kbd> |
| Redo | <kbd>Ctrl</kbd> + <kbd>Y</kbd> | <kbd>⌘</kbd> + <kbd>Y</kbd> |

### Formatting

These shortcuts require the corresponding formatting extension.

| Action | Windows | Mac |
|--------|---------|-----|
| Bold | <kbd>Ctrl</kbd> + <kbd>B</kbd> | <kbd>⌘</kbd> + <kbd>B</kbd> |
| Italic | <kbd>Ctrl</kbd> + <kbd>I</kbd> | <kbd>⌘</kbd> + <kbd>I</kbd> |
| Underline | <kbd>Ctrl</kbd> + <kbd>U</kbd> | <kbd>⌘</kbd> + <kbd>U</kbd> |
| Toggle Strikethrough | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>X</kbd> |
| Toggle Subscript | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>,</kbd> | <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>,</kbd> |
| Toggle Superscript | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>.</kbd> | <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>.</kbd> |

### Lists

These shortcuts require the `list` extension (or a listKeyMap extension) to be registered. The list keymap is added automatically when a list extension is present.

| Action | Windows | Mac |
|--------|---------|-----|
| Indent list item | <kbd>Tab</kbd> | <kbd>Tab</kbd> |
| Outdent list item | <kbd>Shift</kbd> + <kbd>Tab</kbd> | <kbd>⇧</kbd> + <kbd>Tab</kbd> |
| Split list item | <kbd>Enter</kbd> | <kbd>Enter</kbd> |
| Delete at start of empty list item | <kbd>Backspace</kbd> | <kbd>Backspace</kbd> |
| Delete word at start of list item | <kbd>Ctrl</kbd> + <kbd>Backspace</kbd> | <kbd>⌥</kbd> + <kbd>Backspace</kbd> |
| Delete at end of empty list item | <kbd>Delete</kbd> | <kbd>Delete</kbd> |
| Delete word at end of list item | <kbd>Ctrl</kbd> + <kbd>Delete</kbd> | <kbd>⌥</kbd> + <kbd>Delete</kbd> |

`Tab` and `Shift+Tab` for list indent only apply when the cursor is inside a list item. Outside a list, the same `Tab` key may be handled by `indentOutdentExtension` if `enableTabKey` is `true`.

### Block shortcuts

These shortcuts require the corresponding extension.

| Action | Windows | Mac |
|--------|---------|-----|
| Heading 1 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>1</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>1</kbd> |
| Heading 2 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>2</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>2</kbd> |
| Heading 3 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>3</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>3</kbd> |
| Heading 4 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>4</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>4</kbd> |
| Heading 5 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>5</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>5</kbd> |
| Heading 6 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>6</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>6</kbd> |
| Convert to Paragraph | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>P</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>P</kbd> |
| Toggle Block Quote | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Q</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>Q</kbd> |

### Blocks via input rules

Block shortcuts in Headless Editor are surfaced through **input rules** rather than raw key bindings. The text you type (followed by a space) is converted to a block when the rule matches.

| Action | Pattern | Requires |
|--------|---------|----------|
| Heading level 1 | `# ` at the start of a line | `heading` extension |
| Heading level 2 | `## ` at the start of a line | `heading` extension |
| Heading level 3 | `### ` at the start of a line | `heading` extension |
| Heading level 4 | `#### ` at the start of a line | `heading` extension |
| Heading level 5 | `##### ` at the start of a line | `heading` extension |
| Heading level 6 | `###### ` at the start of a line | `heading` extension |
| Bullet list | `- ` or `* ` at the start of a line | `list` extension |
| Ordered list | `1. ` at the start of a line | `list` extension |
| Task list | `[] ` or `[ ] ` at the start of a line | `taskList` extension |
| Blockquote | `> ` at the start of a line | `blockquote` extension |
| Code block | ```` ``` ```` at the start of a line | `codeBlock` extension |
| Horizontal rule | `---`, `***`, or `___` on an empty line | `horizontalRule` extension |
| Bold | `**text**` or `__text__` | `bold` extension |
| Italic | `*text*` or `_text_` | `italic` extension |
| Underline | `++text++` | `underline` extension |
| Strikethrough | `~~text~~` | `strikethrough` extension |
| Superscript | `^text^` | `superscript` extension |
| Subscript | `,,text,,` | `subscript` extension |
| Inline code | `` `text` `` | `inlineCode` extension |
| Link | `[label](url)` | `link` extension |

Input rules are enabled by default. They can be controlled by `enableInputRules` property on `EditorConfig`.

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

Disabling a base keymap shortcut is not supported. If you need to override a base key for a single editor instance, write a custom extension that contributes a higher-priority handler for that key and let the framework's fallback chain decide what runs.

## Custom keyboard shortcuts

Use the `keyboardShortcuts` field on `ExtensionConfig` to bind a key combination to a command. When the user presses the key, the editor runs the command and uses the return value to decide whether to swallow the keystroke.

### What you write

```typescript
keyboardShortcuts?: (this: ExtensionScope<TOptions>) => Record<string, () => boolean>
```

The option returns a map from key name to handler. Each handler runs a command and returns `true` when it handled the key, or `false` to let the next handler try.

### Key names

Key names follow the same convention used elsewhere in the Headless Editor:

| Pattern | Meaning |
|---------|---------|
| `Mod-z` | <kbd>Ctrl</kbd>+<kbd>Z</kbd> on Windows / Linux, <kbd>⌘</kbd>+<kbd>Z</kbd> on macOS. |
| `Mod-Shift-z` | Adds <kbd>Shift</kbd>. |
| `Mod-Alt-Enter` | Adds <kbd>Alt</kbd> / <kbd>Option</kbd>. |
| `Enter`, `Tab`, `Backspace`, `Delete`, `Escape` | Named keys. |
| `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight` | Arrow keys. |

The `Mod-` prefix lets the same binding work cross-platform without writing two entries.

### Handler signature

A handler is a zero-arg function that returns `true` when it handled the key, or `false` to let the next handler run:

```typescript
() => boolean
```

Return `true` after a successful command so the editor knows the key was used. Return `false` if you want the key event to keep flowing to other handlers.

### Example: an extra `Mod-Shift-c` shortcut

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

### Shortcut conflicts

When two extensions register the same key, the editor dispatches them in registration order. The first handler that returns `true` consumes the key. To opt out, return `false` from your handler and let the next extension handle the key.

### Custom input rules

Use the `inputRules` field on `ExtensionConfig` to turn a short typing pattern into a richer editor action. For example, typing `**word**` in plain text and watching it become bold.

```typescript
inputRules?: (this: ExtensionScope<TOptions>) => readonly InputRuleDefinition[]
```

The contributor returns the list of input rule definitions the extension registers. Each rule matches a pattern against the text immediately before the cursor; when the pattern matches, the rule's handler runs and mutates state through `dispatchCommand`.

#### `InputRuleDefinition` shape

| Field | Type | Description |
|-------|------|-------------|
| `id` | `string` | Unique rule identifier. Useful for debugging and analytics. |
| `pattern` | `RegExp` | Pattern tested against the text before the cursor. Must end with `$`. |
| `handler` | `(ctx: InputRuleContext) => void` | Invoked when the pattern matches. |
| `priority` | `number` | Optional. Higher rules run earlier. |
| `label` | `string` | Optional. Human-readable label for tooling. |
| `allowUndo` | `boolean` | Optional. Whether the resulting change participates in undo/redo. |

#### `InputRuleContext` shape

| Field | Description |
|-------|-------------|
| `match` | The `RegExpExecArray` produced by `pattern.exec`. |
| `start` | Start position of the match in the document. |
| `end` | End position of the match in the document. |
| `nodeAt` | The `EditorNode` at the cursor, or `null` if unavailable. |
| `selection` | The current editor selection. |
| `dispatchCommand` | Call to mutate state from inside a handler. |

Inside a handler, call `dispatchCommand(commandName, payload)` to mutate the document:

```typescript
dispatchCommand('wrapInHeading', { level: 1 });
```

The pattern must end with `$` so it only matches when the user has just typed the closing characters of the trigger.

#### Example: a `**bold**` input rule

```typescript
import { defineExtension } from '@syncfusion/ej2-headless-editor';

const boldStarsExtension = defineExtension({
    name: 'bold-stars',
    inputRules() {
        return [
            {
                id: 'mark:bold-stars',
                pattern: /\*\*([^*]+)\*\*$/,
                priority: 100,
                handler(ctx) {
                    const text = ctx.match[1];
                    ctx.dispatchCommand('applyBold', { text });
                }
            }
        ];
    }
});
```

The handler extracts the captured text and dispatches a command, which applies bold to the matched range.

## Keyboard accessibility

The editor supports keyboard shortcuts for formatting, headings, lists, links, undo, and redo. Custom shortcuts are defined through an extension's `keyboardShortcuts` contributor.

```ts
import { HeadlessEditor, basicExtensions, defineExtension } from '@syncfusion/ej2-headless-editor';

const customShortcutExtension = defineExtension({
    name: 'custom-shortcuts',

    keyboardShortcuts() {
        return {
            'Mod-Alt-b': () => this.editor.commands.toggleBold()
        };
    }
});

const editor: HeadlessEditor = HeadlessEditor.create({
  extensions: [basicExtensions, customShortcutExtension]
});
```

Use `Mod` for `Ctrl` on Windows and Linux and `Cmd` on macOS.

## Focus management

Use `focus` and `blur` callbacks on `EditorConfig` to respond to focus changes. The same-named lifecycle callbacks are wired to public events on the editor instance, and can also be subscribed to at runtime through `editor.on(eventName, handler)`.

```ts
const editor = HeadlessEditor.create({
    extensions: [basicExtensions],
    focus: () => {
        console.log('Editor focused');
    },
    blur: () => {
        console.log('Editor blurred');
    }
});
```

The same events can be subscribed to after creation:

```ts
editor.on('focus', () => {
    console.log('Editor focused');
});

editor.on('blur', () => {
    console.log('Editor blurred');
});
```

Use `autofocus` to set the initial caret position. Use `autoSaveSelectionOnBlur` to save the selection when the editor loses focus.
