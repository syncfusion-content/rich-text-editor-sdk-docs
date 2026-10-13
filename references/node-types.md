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

```html
<div id="editor"></div>
```

```ts
import { HeadlessEditor, tableExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [tableExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

### Node attributes

#### tableCell and tableHeader

| Attribute | Description | Default |
|-----------|-------------|---------|
| `colspan` | Number of columns the cell spans. | `1` |
| `rowspan` | Number of rows the cell spans. | `1` |
| `colwidth` | Comma-separated column widths in pixels (for example, `120,200,80`). | `null` |
| `align` | Horizontal text alignment of the cell (`left`, `center`, or `right`). | `null` |
| `verticalAlign` | Vertical text alignment of the cell (`top`, `middle`, or `bottom`). | `null` |
| `backgroundColor` | CSS color value for the cell background. | `null` |
| `color` | CSS color value for the cell text. | `null` |
| `borderColor` | CSS color value for the cell border. | `null` |

### Configure table options

The `table` extension exposes options that control table behavior:

| Option | Description | Default |
|--------|-------------|---------|
| `resize` | When `true`, table columns can be resized by dragging the column separator handles in the header row. | `true` |

```html
<div id="editor"></div>
```

```ts
import { HeadlessEditor, tableExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        tableExtension.configure({
            resize: true
        })
    ]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

### Commands

#### Table structure

| Command | Description |
|---------|-------------|
| `insertTable({ rows, columns })` | Inserts a new table at the current cursor position with the specified number of `rows` and `columns` (minimum 1). Each cell is initialized with an empty paragraph. |
| `deleteTable()` | Removes the table under the cursor from the document. |
| `insertRowBefore()` | Inserts a new empty row above the current row. |
| `insertRowAfter()` | Inserts a new empty row below the current row. |
| `deleteRow()` | Removes the table row under the cursor. |
| `insertColumnBefore()` | Inserts a new empty column to the left of the current column. |
| `insertColumnAfter()` | Inserts a new empty column to the right of the current column. |
| `deleteColumn()` | Removes the table column under the cursor. |

#### Cell content and formatting

| Command | Description |
|---------|-------------|
| `insertParagraphInCell()` | Inserts a new paragraph block inside the current table cell without splitting the cell structure. Bound to <kbd>Enter</kbd> inside a cell. |
| `setCellAttribute({ attribute, value })` | Sets an arbitrary attribute on the cell(s) in the current selection. Common attributes include `colspan`, `rowspan`, `colwidth`, `align`, `verticalAlign`, `backgroundColor`, `color`, and `borderColor`. |
| `toggleHeaderRow()` | Toggles the row containing the cursor between a body row and a header row. |
| `toggleHeaderColumn()` | Toggles the column containing the cursor between body cells and header cells. |

#### Cell navigation

| Command | Description |
|---------|-------------|
| `moveToNextCell()` | Moves the cursor to the next table cell. If the cursor is in the last cell, a new row is appended automatically. |
| `moveToPreviousCell()` | Moves the cursor to the previous table cell. |

```ts
// Insert a 3x3 table at the cursor
editor.commands.insertTable({ rows: 3, columns: 3 });

// Add a new row below the current row
editor.commands.insertRowAfter();

// Convert the current row into a header row
editor.commands.toggleHeaderRow();

// Apply background color to the selected cells
editor.commands.setCellAttribute({ attribute: 'backgroundColor', value: '#f0f8ff' });

// Move to the next cell
editor.commands.moveToNextCell();
```

### Keyboard shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Move to Next Cell | <kbd>Tab</kbd> | <kbd>Tab</kbd> |
| Move to Previous Cell | <kbd>Shift</kbd> + <kbd>Tab</kbd> | <kbd>Shift</kbd> + <kbd>Tab</kbd> |
| Insert Paragraph in Cell | <kbd>Enter</kbd> | <kbd>Enter</kbd> |

## Image

The `imageExtension` registers the `image` block and `imageInline` inline nodes for rendering images as `<figure>` with `<img>` (block) or `<img>` (inline) elements.

### Register the extension

```html
<div id="editor"></div>
```

```ts
import { HeadlessEditor, imageExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [imageExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

### Node attributes

The `image` and `imageInline` nodes share the same attribute set:

| Attribute | Description | Default |
|-----------|-------------|---------|
| `src` | Image source URL (HTTP, HTTPS, or data URI). | `''` |
| `alt` | Alternative text displayed when the image fails to load (accessibility). | `''` |
| `title` | Tooltip text shown on hover. | `''` |
| `width` | Image width in pixels. | `null` |
| `height` | Image height in pixels. | `null` |
| `display` | Display mode: `block` (standalone figure) or `inline` (flows with text). | `'block'` |
| `align` | Horizontal alignment for block images (`left`, `center`, `right`, or `none`). | `'none'` |
| `wrap` | Text wrapping for block images (`left`, `right`, or `none`). | `'none'` |
| `caption` | Whether the image renders an editable caption. | `false` |

### Configure image options

The `image` extension exposes options for default image behavior, persistence, and resize handles:

| Option | Description | Default |
|--------|-------------|---------|
| `allowBase64` | Allow pasted or dropped images to keep their base64 payload as `src`. | `true` |
| `htmlAttributes` | Static HTML attributes merged onto every inserted `<img>` element. | `{}` |
| `saveFormat` | Persistence format for image references: `blob` (Blob URL) or `base64` (inline data URI). | `'blob'` |
| `display` | Default display mode for newly inserted images. | `'block'` |
| `align` | Default horizontal alignment for newly inserted images. | `'none'` |
| `wrap` | Default text wrapping for newly inserted images. | `'none'` |
| `resize` | Configure image resizing. Set to `false` to disable drag handles, or provide an `ImageResizeOptions` object. | `{ enabled: true, alwaysPreserveAspectRatio: true }` |

`ImageResizeOptions` accepts the following fields:

| Field | Description | Default |
|-------|-------------|---------|
| `enabled` | When `true`, drag-to-resize handles are rendered on image node views. | `true` |
| `alwaysPreserveAspectRatio` | When `true`, the engine preserves the aspect ratio on every handle. When `false`, holding <kbd>Shift</kbd> toggles aspect lock interactively. | `true` |
| `directions` | Whitelist of resize directions to render handles for (for example, `top-left`, `top-right`, `bottom-left`, `bottom-right`). | All four corners |
| `minWidth` | Minimum allowed width in pixels during a resize drag. | `8` |
| `minHeight` | Minimum allowed height in pixels during a resize drag. | `8` |

```html
<div id="editor"></div>
```

```ts
import { HeadlessEditor, imageExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        imageExtension.configure({
            display: 'block',
            align: 'none',
            wrap: 'none',
            resize: {
                enabled: true,
                directions: ['bottom-right'],
                alwaysPreserveAspectRatio: true,
                minWidth: 50,
                minHeight: 50
            }
        })
    ]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

### Commands

#### Insert and remove

| Command | Description |
|---------|-------------|
| `insertImage(payload)` | Inserts one or more images at the current cursor position. Accepts a single `InsertImagePayload` or an array of payloads for batch insertion. |
| `removeImage()` | Removes the selected image from the document. |
| `updateImage(payload)` | Updates properties of the selected image. Each payload field is optional; only supplied fields are applied. |

`InsertImagePayload` accepts the following fields:

| Field | Type | Description |
|-------|------|-------------|
| `src` | `string` | Image source URL (HTTP, HTTPS, or data URI). Required. |
| `alt` | `string` | Alternative text for accessibility. |
| `title` | `string` | Tooltip text. |
| `width` | `number` | Image width in pixels. |
| `height` | `number` | Image height in pixels. |
| `display` | `'block'` \| `'inline'` | Display mode for the new image. |
| `align` | `'left'` \| `'center'` \| `'right'` \| `'none'` | Horizontal alignment. |
| `wrap` | `'left'` \| `'right'` \| `'none'` | Text wrapping. |
| `caption` | `string` | Caption text rendered below the image. |
| `attributes` | `Record<string, string>` | Custom HTML attributes (for example, `data-*`, `class`). |

`UpdateImagePayload` accepts `src`, `alt`, `title`, `width`, `height`, and `attributes`.

#### Layout and dimension

| Command | Description |
|---------|-------------|
| `setImageAlign({ align })` | Sets the horizontal alignment of the selected image. Accepted values: `left`, `center`, `right`, `none`. Clears any active text wrapping. |
| `setImageWrap({ wrap })` | Sets the text wrapping of the selected image. Accepted values: `left`, `right`, `none`. Clears any active alignment when wrapping is enabled. |
| `setImageDisplay({ mode })` | Converts the selected image between block and inline display modes. Accepted values: `block`, `inline`. |
| `setImageDimension({ width?, height? })` | Updates the `width` and `height` attributes of the selected image. Pass `null` to clear a dimension. |

#### Captions

| Command | Description |
|---------|-------------|
| `addCaption({ caption? })` | Adds an editable caption to the selected image. When the selection is an inline image, it is first converted to a block image. Accepts an optional `caption` string; if omitted or empty, the placeholder text `Insert caption` is used and the cursor is placed inside the caption. |
| `removeCaption()` | Removes the caption text and disables the `caption` attribute on the selected image. |
| `toggleCaption({ caption? })` | Toggles the caption on the selected image. When a caption already exists, it is removed; otherwise, a new one is added. Accepts the same optional `caption` payload as `addCaption` to seed the new caption text. |

The optional `caption` payload for `addCaption` and `toggleCaption` is `CaptionPayload`:

| Field | Type | Description |
|-------|------|-------------|
| `caption` | `string` | Initial text for the new caption. When omitted or whitespace-only, the placeholder text `Insert caption` is used. |

```ts
// Insert a single block image
editor.commands.insertImage({
    src: 'https://example.com/photo.png',
    alt: 'Example photo',
    width: 400,
    height: 300,
    display: 'block'
});

// Insert multiple images at once
editor.commands.insertImage([
    { src: 'image1.png', alt: 'First image' },
    { src: 'image2.png', alt: 'Second image' }
]);

// Update the alt text of the selected image
editor.commands.updateImage({ alt: 'Updated alt text' });

// Float the selected image to the left with text wrapping
editor.commands.setImageWrap({ wrap: 'left' });

// Resize the selected image programmatically
editor.commands.setImageDimension({ width: 600, height: 400 });

// Convert the selected image to inline display
editor.commands.setImageDisplay({ mode: 'inline' });

// Add a caption with custom text
editor.commands.addCaption({ caption: 'Sunset over the lake' });

// Add a caption with the default placeholder text
editor.commands.addCaption();

// Toggle a caption, seeding it with text when adding
editor.commands.toggleCaption({ caption: 'Figure 1' });
```

### Resize events

When `resize.enabled` is `true`, the extension emits lifecycle events during user drag interactions:

| Event | Payload |
|-------|---------|
| `resize-start` | Initial dimensions and event coordinates. |
| `resizing` | Updated dimensions as the drag progresses. |
| `resize-stop` | Final dimensions when the drag completes. |

The final `width` and `height` are persisted to the image attributes when resizing is completed.

## Callout

The `calloutExtension` registers the `callout` block container node for rendering highlighted message boxes such as informational notes, warnings, errors, success and tips.

### Register the extension

```html
<div id="editor"></div>
```

```ts
import { HeadlessEditor, calloutExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [calloutExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

### Node attributes

| Attribute | Description |
|-----------|-------------|
| `variant` | Visual style variant of the callout: `info`, `warning`, `note`, `success`, `error`, or `tip`. Defaults to `info`. |

### Configure callout options

The `callout` extension provides options to set the default variant and add custom HTML attributes:

| Option | Description | Default |
|--------|-------------|---------|
| `defaultVariant` | Default variant used when creating a callout without specifying one. | `'info'` |
| `htmlAttributes` | Custom HTML attributes applied to the outer callout container element. | `{}` |

Use `.configure()` to apply custom settings:

```html
<div id="editor"></div>
```

```ts
import { HeadlessEditor, calloutExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        calloutExtension.configure({
            defaultVariant: 'note',
            htmlAttributes: { class: 'custom-callout' }
        })
    ]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

### Commands

| Command | Description |
|---------|-------------|
| `toggleCallout({ variant? })` | Toggles a callout wrapper around the current block or selection. Accepts an optional `variant` (`info`, `warning`, `note`, `success`, `error`, or `tip`). If already inside a callout, unwraps the content. |

```ts
// Toggle with default variant
editor.commands.toggleCallout();

// Toggle with a warning variant
editor.commands.toggleCallout({ variant: 'warning' });
```

### Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Toggle Callout | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>C</kbd> |

### Input rules

Type the following triggers followed by a space at the start of a line to wrap the current block in a callout:

* `!!!` creates an `info` callout
* `:::` creates a `note` callout

## Collapsible

The `collapsibleExtension` registers the `collapsible` block node for expandable sections.

### Register the extension

```html
<div id="editor"></div>
```

```ts
import { HeadlessEditor, collapsibleExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [collapsibleExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

> The editor automatically registers `collapsibleKeymapExtension` when `collapsibleExtension` is registered, so <kbd>Enter</kbd>, <kbd>Backspace</kbd>, and <kbd>Delete</kbd> handling inside collapsible sections is enabled without an extra import.

### Node attributes

#### collapsible

| Attribute | Description | Default |
|-----------|-------------|---------|
| `collapsed` | When `true`, the body content is collapsed and hidden. When `false`, the body is expanded and visible. | `false` |

`collapsibleHeader` and `collapsibleBody` nodes do not expose additional attributes.

### Configure collapsible options

The `collapsible` extension exposes an `htmlAttributes` option that adds custom HTML attributes to the outer collapsible `<div>` container. The `data-type` and `data-collapsed` attributes are always applied. It defaults to an empty object.

```html
<div id="editor"></div>
```

```ts
import { HeadlessEditor, collapsibleExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        collapsibleExtension.configure({
            htmlAttributes: { class: 'custom-collapsible' }
        })
    ]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

### Commands

| Command | Description |
|---------|-------------|
| `toggleCollapsible({ triggerType, level? })` | Wraps the current block in a collapsible, or unwraps it if the selection is already inside one. `triggerType` selects the block type of the collapsible trigger child: `heading` or `paragraph`. When `triggerType` is `heading`, `level` sets the heading level (1 to 6) and defaults to `1`. |
| `collapse({ pos? })` | Sets `collapsed` to `true` on the nearest collapsible ancestor. Pass an explicit document `pos` to target a specific collapsible (used by custom NodeViews). |
| `expand({ pos? })` | Sets `collapsed` to `false` on the nearest collapsible ancestor. Pass an explicit document `pos` to target a specific collapsible (used by custom NodeViews). |

```ts
// Wrap the current block as a heading-triggered collapsible (level 1)
editor.commands.toggleCollapsible({ triggerType: 'heading', level: 2 });

// Wrap the current block as a paragraph-triggered collapsible
editor.commands.toggleCollapsible({ triggerType: 'paragraph' });

// Collapse the nearest collapsible
editor.commands.collapse();

// Expand the nearest collapsible
editor.commands.expand();
```

### Keyboard shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Toggle Collapsible (paragraph trigger) | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>[</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>[</kbd> |
| Collapse nearest collapsible | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>,</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>,</kbd> |
| Expand nearest collapsible | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>.</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>.</kbd> |

> To create a heading-triggered collapsible via keyboard, call `toggleCollapsible({ triggerType: 'heading', level: N })` programmatically. The `Mod-Alt-[` shortcut always toggles a paragraph-triggered collapsible.
