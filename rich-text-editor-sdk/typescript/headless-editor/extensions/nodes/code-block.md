---
layout: post
title: Code Block Extension in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the Code Block extension in the TypeScript Headless Editor, including language settings, tab indentation, shortcuts, and input rules.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Code Block in TypeScript Headless Editor

The `codeBlockExtension` registers the `codeBlock` node for displaying preformatted code snippets rendered as `<pre><code>`.

## Register the extension

```html
<div id="editor"></div>
```

```ts
import { HeadlessEditor, codeBlockExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [codeBlockExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

## Node attributes

| Attribute | Description |
|-----------|--------------|
| `language` | Programming language identifier for syntax styling (such as `javascript`, `typescript`, `csharp`, `html`). Defaults to `'plaintext'`. |

## Configure code block options

The `codeBlock` extension provides several options for indentation, language prefixes, and exit behavior:

| Option | Description | Default Value |
|--------|-------------|---------------|
| `defaultLanguage` | Fallback language applied when no language is specified. | `'plaintext'` |
| `languageClassPrefix` | Class prefix prepended to the language name on the `<code>` element (for example, `language-typescript`). Set to `null` to disable. | `'language-'` |
| `enableTabIndentation` | Enables indenting with <kbd>Tab</kbd> and outdenting with <kbd>Shift</kbd> + <kbd>Tab</kbd> within the code block. | `false` |
| `tabSize` | Number of spaces inserted per <kbd>Tab</kbd> press when tab indentation is enabled. | `4` |
| `exitOnTripleEnter` | Exits the code block into a new paragraph after pressing <kbd>Enter</kbd> three times. | `true` |
| `exitOnArrowUp` | Exits upward into a preceding block when pressing <kbd>Arrow Up</kbd> at the start of the block. | `true` |
| `exitOnArrowDown` | Exits downward into a following block when pressing <kbd>Arrow Down</kbd> at the end of the block. | `true` |
| `htmlAttributes` | Custom HTML attributes applied to the outer `<pre>` element. | `{}` |

Use `.configure()` to apply custom settings:

```html
<div id="editor"></div>
```

```ts
import { HeadlessEditor, codeBlockExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        codeBlockExtension.configure({
            defaultLanguage: 'typescript',
            enableTabIndentation: true,
            tabSize: 2
        })
    ]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

## Commands

| Command | Description |
|---------|--------------|
| `setCodeBlock({ language? })` | Converts the current block into a code block with an optional language. |
| `toggleCodeBlock({ language? })` | Toggles the code block format on the current block or selection. |
| `setCodeBlockLanguage({ language })` | Updates the programming language attribute of the active code block. |
| `indentCodeBlock({ tabSize? })` | Indents the current line inside the code block by the specified number of spaces. |
| `outdentCodeBlock({ tabSize? })` | Outdents the current line inside the code block by the specified number of spaces. |
| `clearCodeBlock()` | Clears the code block formatting, converting it back to a standard paragraph. |
| `exitCode()` | Exits the code block and creates a new paragraph below it. |

```ts
// Convert block to a TypeScript code block
editor.commands.setCodeBlock({ language: 'typescript' });

// Change the active code block's language
editor.commands.setCodeBlockLanguage({ language: 'javascript' });
editor.mount(document.getElementById('editor') as HTMLElement);
```

## Keyboard shortcuts

| Action | Shortcut | Condition |
|--------|----------|-----------|
| Toggle Code Block | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>C</kbd> / <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>C</kbd> | Global |
| Indent Line | <kbd>Tab</kbd> | Inside code block (`enableTabIndentation: true`) |
| Outdent Line | <kbd>Shift</kbd> + <kbd>Tab</kbd> | Inside code block (`enableTabIndentation: true`) |
| Exit Block | <kbd>Enter</kbd> (3 times) | At end of code block (`exitOnTripleEnter: true`) |
| Exit Upward | <kbd>↑</kbd> | First line of code block (`exitOnArrowUp: true`) |
| Exit Downward | <kbd>↓</kbd> | Last line of code block (`exitOnArrowDown: true`) |
| Convert to Paragraph | <kbd>Backspace</kbd> | On an empty code block at the document start |

## Input rules

Type triple backticks or triple tildes at the start of a line, optionally followed by a language identifier and a space or newline:

* ```` ```ts ```` followed by space creates a code block with language set to `typescript`
* ```` ``` ```` followed by space creates a code block with the default language
* `~~~csharp ` followed by space creates a code block with language set to `csharp`
