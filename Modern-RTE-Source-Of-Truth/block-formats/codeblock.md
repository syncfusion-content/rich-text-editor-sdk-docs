# Code Block in TypeScript Modern Rich Text Editor

A code block inserts a `<pre>` element at the current selection and tags it with a language identifier for syntax highlighting. Code blocks are reached through the `CodeBlock` built-in toolbar identifier in the Modern Rich Text Editor. There is no slash-command entry for the code block; users reach it through the toolbar or through the `codeBlock` command.

## Commands support

The `codeBlock` command accepts a `CodeBlockCommand` payload (`{ language: string }`). The `language` value is the language identifier applied to the block — common values include `"javascript"`, `"typescript"`, `"html"`, `"css"`, `"python"`, and `"plaintext"`. An empty string applies a plain code block with no specific language annotation.

| Command | Payload | Toolbar item | Keyboard shortcut |
| --- | --- | --- | --- |
| `codeBlock` | `CodeBlockCommand` (`{ language: string }`) | `CodeBlock` | `Ctrl+Shift+B` (Windows) / `⌘ ⇧ B` (macOS) |

Add the `CodeBlock` toolbar item next to the other block-format buttons to expose the command.

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: [
            'Bold', 'Italic', 'Underline', '|',
            'Formats', 'Alignment', '|',
            'CodeBlock', 'Quote', 'HorizontalLine', '|',
            'Undo', 'Redo'
        ]
    },
    placeholder: 'Insert code snippets...'
});

editor.appendTo('#editor');
```
