# Node Types in TypeScript Headless Editor

The TypeScript Headless Editor ships with built-in block and inline node types, each contributed by its own extension. The preset `basicExtensions` includes `document`, `paragraph`, `heading`, `blockquote`, `text`, `codeBlock`, `inlineCode`, `horizontalRule`, `hardBreak`, `list`, `taskList`, and `undoRedo`; other nodes such as `table`, `image`, `callout`, and `collapsible` are registered individually as needed.

> **See also:** [api-references-part-2.md](api-references-part-2.md) for the payload types used by node commands: `InsertTablePayload`, `InsertImagePayload`, `SetHeadingPayload`, `IndentCodeBlockPayload`, `OutdentCodeBlockPayload`, `CollapsePayload`, `ExpandPayload`, `ToggleTaskCheckedPayload`, `ToggleTaskListPayload`, plus the extension options `CodeBlockOptions` (defaultLanguage, languageClassPrefix, enableTabIndentation, tabSize, exitOnTripleEnter, exitOnArrowUp, exitOnArrowDown), `TableOptions` (resize), `CalloutExtensionOptions` (defaultVariant, htmlAttributes), `CollapsibleExtensionOptions`, `PlaceholderOptions`, `ImageOptions` (align, display, wrap, saveFormat, allowBase64), and the image enums `ImageAlign` / `ImageDisplayMode` / `ImageWrap` / `ImageUIPlacement` / `SaveFormatType`. The `TaskListExtensionOptions` and `CalloutVariant` types are also documented there.

## Table of Contents
- [Document Node](#document-node)
- [Paragraph](#paragraph)
- [Heading](#heading)
- [Block Quote](#block-quote)
- [Code Block](#code-block)
- [Bullet List and Ordered List](#bullet-list-and-ordered-list)
- [Task List](#task-list)
- [Text Node](#text-node)
- [Hard Break](#hard-break)
- [Horizontal Rule](#horizontal-rule)
- [Table](#table)
- [Image](#image)
- [Callout](#callout)
- [Collapsible](#collapsible)

## Document Node

The `documentExtension` registers the root `document` node of the editor schema. Every Headless Editor instance requires exactly one `document` node, which acts as the top-level container that wraps all block-level content, such as paragraphs, headings, lists, and tables.

### Register the extension

The `document` extension has no configurable options. Add it to the `extensions` array when initializing the editor.

```html
<div id="editor"></div>
```

```ts
import { HeadlessEditor, documentExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [documentExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

> The Headless Editor automatically adds the required `document` and `text` extensions if they are not registered. Explicit registration is supported but not required for a valid schema.

## Paragraph

The `paragraphExtension` registers the `paragraph` block node, which is the default block type used for standard body text.

### Register the extension

```html
<div id="editor"></div>
```

```ts
import { HeadlessEditor, paragraphExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [paragraphExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

### Node attributes

| Attribute | Description |
|-----------|-------------|
| `align` | Text alignment of the paragraph (`left`, `center`, `right`, or `justify`). No alignment is applied by default. Managed through the Text Alignment extension's commands. |
| `indent` | Indent level of the paragraph, rendered as `margin-left` in steps of 20px. Defaults to `0` (no indent). Managed through the Indent and Outdent extension's commands. |

### Configure the extension

The `paragraph` extension exposes an `htmlAttributes` option that adds custom HTML attributes to every rendered `<p>` element. Use `.configure()` to set it:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `htmlAttributes` | `Record<string, string>` | `{}` | Custom HTML attributes applied to the rendered `<p>` element. |

```ts
import { HeadlessEditor, paragraphExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        paragraphExtension.configure({
            htmlAttributes: { class: 'my-custom-class' }
        })
    ]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

### Commands

| Command | Description |
|---------|-------------|
| `setParagraph()` | Converts the current block into a paragraph. If the source block had `align` or `indent` attributes, they are preserved on the resulting paragraph. |

```ts
editor.commands.setParagraph();
```

### Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Convert to Paragraph | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>P</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>P</kbd> |

## Heading

The `headingExtension` registers the `heading` block node, which renders semantic HTML headings (`<h1>` through `<h6>`).

### Register the extension

```html
<div id="editor"></div>
```

```ts
import { HeadlessEditor, headingExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [headingExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

### Node attributes

| Attribute | Description |
|-----------|-------------|
| `level` | Heading level from `1` to `6`, mapping to HTML tags `<h1>` through `<h6>`. Defaults to `1`. |
| `align` | Text alignment of the heading (`left`, `center`, `right`, or `justify`). No alignment is applied by default. Managed through the Text Alignment extension's commands. |
| `indent` | Indent level of the heading, rendered as `margin-left` in steps of 20px. Defaults to `0` (no indent). Managed through the Indent and Outdent extension's commands. |

### Configure the extension

The `heading` extension exposes an `htmlAttributes` option that adds custom HTML attributes to every rendered `<h1>` through `<h6>` element. Use `.configure()` to set it:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `htmlAttributes` | `Record<string, string>` | `{}` | Custom HTML attributes applied to the rendered heading element. |

```ts
import { HeadlessEditor, headingExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        headingExtension.configure({
            htmlAttributes: { class: 'custom-heading' }
        })
    ]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

### Commands

| Command | Description |
|---------|-------------|
| `setHeading({ level })` | Converts the current block into a heading at the specified level (`1` to `6`). Existing block attributes like `align` and `indent` are preserved. |

```ts
// Convert the current block to an <h2>
editor.commands.setHeading({ level: 2 });
```

### Keyboard shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Heading 1 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>1</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>1</kbd> |
| Heading 2 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>2</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>2</kbd> |
| Heading 3 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>3</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>3</kbd> |
| Heading 4 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>4</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>4</kbd> |
| Heading 5 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>5</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>5</kbd> |
| Heading 6 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>6</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>6</kbd> |

### Input rules

Type `#` to `######` followed by a space at the start of a line to convert the block into the corresponding heading level:

* `# ` creates an `<h1>`
* `## ` creates an `<h2>`
* `### ` creates an `<h3>`
* `#### ` creates an `<h4>`
* `##### ` creates an `<h5>`
* `###### ` creates an `<h6>`

## Block Quote

The `blockquoteExtension` registers the `blockquote` block container node, which renders quoted content inside a semantic `<blockquote>` tag.

### Register the extension

```html
<div id="editor"></div>
```

```ts
import { HeadlessEditor, blockquoteExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [blockquoteExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

### Configure the extension

The `blockquote` extension exposes an `htmlAttributes` option that adds custom HTML attributes to every rendered `<blockquote>` element. Use `.configure()` to set it:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `htmlAttributes` | `Record<string, string>` | `{}` | Custom HTML attributes applied to the rendered `<blockquote>` element. |

```ts
import { HeadlessEditor, blockquoteExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        blockquoteExtension.configure({
            htmlAttributes: { class: 'custom-quote' }
        })
    ]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

### Commands

| Command | Description |
|---------|-------------|
| `toggleBlockQuote()` | Toggles the block quote wrapper on the current block or selection. If the selection is already inside a block quote, it unwraps the content back to regular blocks. |

```ts
editor.commands.toggleBlockQuote();
```

### Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Toggle Block Quote | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Q</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>Q</kbd> |

### Input rules

Type `>` followed by a space at the start of an empty line to wrap the current block in a block quote.

## Code Block

The `codeBlockExtension` registers the `codeBlock` node for displaying preformatted code snippets rendered as `<pre><code>`.

### Register the extension

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

### Node attributes

| Attribute | Description |
|-----------|-------------|
| `language` | Programming language identifier for syntax styling (such as `javascript`, `typescript`, `csharp`, `html`). Defaults to `'plaintext'`. |

### Configure the extension

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

### Commands

| Command | Description |
|---------|-------------|
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
```

### Keyboard shortcuts

| Action | Shortcut | Condition |
|--------|----------|-----------|
| Toggle Code Block | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>C</kbd> / <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>C</kbd> | Global |
| Indent Line | <kbd>Tab</kbd> | Inside code block (`enableTabIndentation: true`) |
| Outdent Line | <kbd>Shift</kbd> + <kbd>Tab</kbd> | Inside code block (`enableTabIndentation: true`) |
| Exit Block | <kbd>Enter</kbd> (3 times) | At end of code block (`exitOnTripleEnter: true`) |
| Exit Upward | <kbd>↑</kbd> | First line of code block (`exitOnArrowUp: true`) |
| Exit Downward | <kbd>↓</kbd> | Last line of code block (`exitOnArrowDown: true`) |
| Convert to Paragraph | <kbd>Backspace</kbd> | On an empty code block at the document start |

### Input rules

Type triple backticks or triple tildes at the start of a line, optionally followed by a language identifier and a space or newline:

* ```` ```typescript ```` followed by space creates a code block with language set to `typescript`
* ```` ``` ```` followed by space creates a code block with the default language
* `~~~csharp ` followed by space creates a code block with language set to `csharp`

## Bullet List and Ordered List

The `listExtension` provides built-in support for unordered bullet lists (`<ul>`) and list items (`<li>`). The same extension also provides built-in support for numbered lists (`<ol>`) and list items (`<li>`).

### Register the extension

```html
<div id="editor"></div>
```

```ts
import { HeadlessEditor, listExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [listExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

> The editor automatically registers `listKeymapExtension` whenever `listExtension` or `taskListExtension` is registered, so list navigation keys (<kbd>Tab</kbd>, <kbd>Shift</kbd> + <kbd>Tab</kbd>, <kbd>Enter</kbd>, and <kbd>Backspace</kbd>) are enabled without an extra import.

### Bullet list node attributes

| Attribute | Description |
|-----------|-------------|
| `listStyleType` | Bullet style applied to the list (`disc`, `circle`, or `square`). Rendered as an inline `list-style-type` CSS style. Defaults to `disc`. |

### Ordered list node attributes

| Attribute | Description |
|-----------|-------------|
| `order` | Starting number of the list, rendered as the HTML `start` attribute on `<ol>`. Defaults to `1`. |
| `listStyleType` | Numbering style format (`decimal`, `lower-alpha`, `upper-alpha`, `lower-roman`, `upper-roman`). Rendered as inline `list-style-type` CSS. Defaults to `decimal`. |

### Configure the extension

The `list` extension supports custom HTML attributes for both the list container (`<ul>` or `<ol>`) and its items (`<li>`):

| Option | Description | Default |
|--------|-------------|---------|
| `htmlAttributes` | Custom HTML attributes applied to the outer list element. | `{}` |
| `itemHtmlAttributes` | Custom HTML attributes applied to every child `<li>` element. | `{}` |

```ts
import { HeadlessEditor, listExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        listExtension.configure({
            htmlAttributes: { class: 'custom-list' },
            itemHtmlAttributes: { class: 'custom-list-item' }
        })
    ]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

### Commands

| Command | Description |
|---------|-------------|
| `toggleBulletList({ listStyleType?, keepMarks? })` | Toggles the bullet list format on the current block or selection. Accepts an optional `listStyleType` (`disc`, `circle`, `square`) to toggle directly into that style or switch an existing list's style, and `keepMarks` to retain active formatting marks. |
| `setBulletListType({ listStyleType })` | Changes the bullet style (`disc`, `circle`, `square`) of the current bullet list. |
| `toggleOrderedList({ listStyleType?, keepMarks? })` | Toggles the ordered list format on the current block or selection. Accepts an optional `listStyleType` (`decimal`, `lower-alpha`, `upper-alpha`, `lower-roman`, `upper-roman`) to toggle directly into that numbering style or update an existing list's style, and `keepMarks` to retain active formatting marks. |
| `setOrderedListType({ listStyleType })` | Sets the numbering format (`decimal`, `lower-alpha`, `upper-alpha`, `lower-roman`, `upper-roman`) for the active list. |
| `indentListItem()` | Indents the active list item to create a nested sub-list. |
| `outdentListItem()` | Outdents the active list item to the parent list level or converts it back to a standard block. |

```ts
// Toggle default bullet list (disc)
editor.commands.toggleBulletList();

// Toggle bullet list with a specific style (e.g., circle)
editor.commands.toggleBulletList({ listStyleType: 'circle' });

// Toggle default ordered list (decimal)
editor.commands.toggleOrderedList();

// Toggle ordered list with a specific numbering format (e.g., lower-alpha)
editor.commands.toggleOrderedList({ listStyleType: 'lower-alpha' });

// Set numbering style on an existing list
editor.commands.setOrderedListType({ listStyleType: 'lower-roman' });
```

### Keyboard shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Toggle Bullet List | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>8</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>8</kbd> |
| Toggle Ordered List | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>9</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>9</kbd> |
| Indent Item | <kbd>Tab</kbd> | <kbd>Tab</kbd> |
| Outdent Item | <kbd>Shift</kbd> + <kbd>Tab</kbd> | <kbd>Shift</kbd> + <kbd>Tab</kbd> |

### Input rules

* Type `-`, `*`, or `+` followed by a space at the start of a line to convert the block into a bullet list.
* Type `1.` followed by a space at the start of a line to convert the block into an ordered list starting at number 1.

## Task List

The `taskListExtension` registers the `taskList` container and `taskItem` nodes for rendering checkable to-do lists.

### Register the extension

```html
<div id="editor"></div>
```

```ts
import { HeadlessEditor, taskListExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [taskListExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

> The editor automatically registers `listKeymapExtension` whenever `listExtension` or `taskListExtension` is registered, so list navigation keys (<kbd>Tab</kbd>, <kbd>Shift</kbd> + <kbd>Tab</kbd>, <kbd>Enter</kbd>, and <kbd>Backspace</kbd>) are enabled without an extra import.

### Node attributes

| Attribute | Description |
|-----------|-------------|
| `checked` | Boolean state of the task item checkbox (`true` or `false`). Defaults to `false`. |

### Configure the extension

The `task-list` extension supports configuring container attributes, item attributes, and nested list structure:

| Option | Description | Default Value |
|--------|-------------|---------------|
| `nested` | When `true`, allows nested blocks (sub-lists, quotes) inside task items. When `false`, restricts items to paragraphs only. | `true` |
| `htmlAttributes` | Custom HTML attributes applied to the `<ul data-type="taskList">` element. | `{}` |
| `itemHtmlAttributes` | Custom HTML attributes applied to each `<li data-type="taskItem">` element. | `{}` |

```ts
import { HeadlessEditor, taskListExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        taskListExtension.configure({
            nested: true,
            htmlAttributes: { class: 'custom-task-list' }
        })
    ]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

### Commands

| Command | Description |
|---------|-------------|
| `toggleTaskList({ keepMarks?, checked? })` | Toggles the task list container on the current selection. Accepts an optional `keepMarks` to retain active formatting marks, and `checked` to set the initial checked state of the new task items. |
| `toggleTaskChecked({ pos? })` | Toggles the checked state of the active task item or the task item at the given document position. |

```ts
// Toggle task list on selection
editor.commands.toggleTaskList();

// Toggle task list and seed new items as checked
editor.commands.toggleTaskList({ checked: true });
```

### Input rules

Type `[]` or `[ ]` followed by a space at the start of a line to create a task list with an unchecked item.

## Text Node

The `textExtension` registers the inline `text` node used to represent plain textual content. The `text` node is used inside block nodes such as paragraphs, headings, and blockquotes, and is a mandatory part of the editor schema.

### Register the extension

The `text` extension has no configurable options. Add it to the `extensions` array when initializing the editor.

```ts
import { HeadlessEditor, textExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [textExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

> The Headless Editor automatically adds the required `document` and `text` extensions if they are not registered. Marks such as bold, italic, or links are applied on top of `text` nodes.

## Hard Break

The `hardBreakExtension` registers the `hard_break` inline node, which inserts a semantic `<br>` line break within the current text flow without splitting the parent block.

### Register the extension

```html
<div id="editor"></div>
```

```ts
import { HeadlessEditor, hardBreakExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [hardBreakExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

### Commands

| Command | Description |
|---------|-------------|
| `setHardBreak()` | Inserts a hard break at the current cursor position. |

```ts
editor.commands.setHardBreak();
```

### Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Insert Hard Break | <kbd>Shift</kbd> + <kbd>Enter</kbd> | <kbd>⇧</kbd> + <kbd>Enter</kbd> |

## Horizontal Rule

The `horizontalRuleExtension` registers the `horizontalRule` leaf node for visual dividers rendered as semantic `<hr>` elements.

### Register the extension

```ts
import { HeadlessEditor, horizontalRuleExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [horizontalRuleExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

### Configure the extension

The `horizontalRule` extension exposes an `htmlAttributes` option that adds custom HTML attributes to rendered `<hr>` elements. It defaults to an empty object.

```ts
import { HeadlessEditor, horizontalRuleExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        horizontalRuleExtension.configure({
            htmlAttributes: { class: 'custom-divider' }
        })
    ]
});
```

### Commands

| Command | Description |
|---------|-------------|
| `setHorizontalRule()` | Inserts a horizontal rule at the current cursor position. When the current block is empty, the empty block is replaced with the rule. Otherwise, the rule is inserted below the target block at the cursor position. |

```ts
editor.commands.setHorizontalRule();
```

### Input rules

Type any of the following sequences on an empty line to insert a horizontal rule:

* `---` (three hyphens)
* `***` (three asterisks)
* `___` (three underscores)

## Table

The `tableExtension` registers the `table`, `tableRow`, `tableCell`, and `tableHeader` block container nodes for rendering and editing tables as `<table>`, `<tr>`, `<td>`, and `<th>`.

### Register the extension

```ts
import { HeadlessEditor, tableExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [tableExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

> Refer to the [Table extension UG](https://help.syncfusion.com/rich-text-editor-sdk/typescript/headless-editor/extensions/nodes/table) for the full options, commands, and shortcuts, including row and column management, cell formatting, and navigation.

## Image

The `imageExtension` registers the `image` block and `imageInline` inline nodes for rendering images as `<figure>` with `<img>` (block) or `<img>` (inline) elements.

### Register the extension

```ts
import { HeadlessEditor, imageExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [imageExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

> Refer to the [Image extension UG](https://help.syncfusion.com/rich-text-editor-sdk/typescript/headless-editor/extensions/nodes/image) for the full options, including display modes, alignment, wrapping, captions, and resize behavior.

## Callout

The `calloutExtension` registers the `callout` block container node for rendering highlighted message boxes such as informational notes, warnings, errors, success and tips.

### Register the extension

```ts
import { HeadlessEditor, calloutExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [calloutExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

> Refer to the [Callout extension UG](https://help.syncfusion.com/rich-text-editor-sdk/typescript/headless-editor/extensions/nodes/callout) for the full options, including callout variants, toggle commands, shortcuts, and input rules.

## Collapsible

The `collapsibleExtension` registers the `collapsible` block node for expandable sections.

### Register the extension

```ts
import { HeadlessEditor, collapsibleExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [collapsibleExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

> Refer to the [Collapsible extension UG](https://help.syncfusion.com/rich-text-editor-sdk/typescript/headless-editor/extensions/nodes/collapsible) for the full options, including expandable sections, toggle commands, and keyboard navigation.
