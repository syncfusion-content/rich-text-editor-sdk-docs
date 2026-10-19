# Text Formats in TypeScript Modern Rich Text Editor

Block formats in the Modern Rich Text Editor change the block-level structure of the document rather than inline text. The editor exposes block formats through two public surfaces: built-in toolbar identifiers in `toolbarSettings.items`, and slash-command entries in `slashCommandSettings.items`. There is no separate public `format` configuration object — every block format is wired through one of those two arrays.

## Configuring block formats

Use the built-in toolbar identifiers from `BuiltInToolbarItem` to add block formats to the editor toolbar. The following example adds `Quote`, `CodeBlock`, `HorizontalLine`, and the `Callout` split-button alongside the default formatting controls.

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: [
            'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
            'Formats', 'Alignment', 'BulletList', 'NumberedList', '|',
            'Quote', 'CodeBlock', 'HorizontalLine', 'Callout', '|',
            'Undo', 'Redo'
        ]
    },
    placeholder: 'Type something...'
});

editor.appendTo('#editor');
```

To expose the same block formats through the slash-command popup, set `slashCommandSettings.enable` to `true` and list the matching entries in `slashCommandSettings.items`. The popup reuses the toolbar identifiers for formats that share a name and adds dedicated entries for the callout variants and collapsible headings.

```ts
import { RichTextEditorUI, SlashCommand } from '@syncfusion/ej2-richtexteditor-ui';

RichTextEditorUI.Inject(SlashCommand);

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: ['Formats', 'Alignment', 'Quote', 'CodeBlock', 'HorizontalLine', 'Callout']
    },
    slashCommandSettings: {
        enable: true,
        items: [
            'Paragraph',
            'Heading 1', 'Heading 2', 'Heading 3', 'Heading 4',
            'Blockquote',
            'Info', 'Success', 'Warning', 'Error', 'Note',
            'Collapsible Paragraph',
            'Collapsible Heading 1', 'Collapsible Heading 2',
            'Collapsible Heading 3', 'Collapsible Heading 4'
        ]
    }
});

editor.appendTo('#editor');
```

## Supported formats

The editor recognizes the following block-level formats. Each entry lists the toolbar identifier (where one exists) and the slash-command identifier (where one exists).

### Paragraph and headings

- **Paragraph** — toolbar `Paragraph`, slash command `Paragraph`, command `paragraph`.
- **Heading 1–4** — toolbar `Heading 1` … `Heading 4`, slash commands `Heading 1` … `Heading 4`, commands `heading1` … `heading4`.

Headings and paragraph can also be reached through the `Formats` dropdown toolbar item, which exposes `Paragraph` and `Heading 1`–`Heading 4` as a single control.

### Block quote

Wraps the current block in a `<blockquote>`. Toolbar `Quote`, slash command `Blockquote`, command `blockQuote`. 

### Code block

Inserts a `<pre>` block with optional language annotation. Toolbar `CodeBlock`, command `codeBlock` with payload `CodeBlockCommand` (`{ language: string }`).

### Horizontal line

Inserts an `<hr>` element at the cursor. Toolbar `HorizontalLine`, command `horizontalRule`.

### Callouts

Five variants: `Info`, `Success`, `Warning`, `Error`, `Note`. Each variant is available through the `Callout` split-button toolbar item (which exposes all five together) and through matching slash-command entries. The variants cannot be wired as separate top-level toolbar buttons; the public `callout` command only fires through the `Callout` split-button child or through a slash-command selection. All variants funnel through the `callout` command with payload `CalloutCommand` (`{ callout: 'info' | 'success' | 'warning' | 'error' | 'note' }`). 

### Collapsible headings

Five entries: `Collapsible Paragraph`, `Collapsible Heading 1` … `Collapsible Heading 4`. Collapsible sections are reached **only** through the slash-command popup — there is no dedicated public toolbar item. 

## Commands support

The block-format commands are dispatched through the editor's command pipeline. The following table maps each command to its payload shape and effect.

| Command | Payload | Effect |
| --- | --- | --- |
| `paragraph` | — | Converts the current block to a paragraph. |
| `heading1` | — | Converts the current block to a level-1 heading. |
| `heading2` | — | Converts the current block to a level-2 heading. |
| `heading3` | — | Converts the current block to a level-3 heading. |
| `heading4` | — | Converts the current block to a level-4 heading. |
| `blockQuote` | — | Toggles blockquote on the current block. |
| `codeBlock` | `CodeBlockCommand` (`{ language: string }`) | Inserts or converts to a code block with the given language. |
| `horizontalRule` | — | Inserts a horizontal rule at the cursor. |
| `callout` | `CalloutCommand` (`{ callout: 'info'  `&#124;` 'success'  `&#124;` 'warning'  `&#124;` 'error'  `&#124;` 'note' }`) | Toggles a callout block of the given variant. |
| `collapsible` | `ToggleCollapsiblePayload` (`{ triggerType: 'paragraph'  `&#124;` 'heading', level?: 1  `&#124;` 2  `&#124;` 3  `&#124;` 4 }`) | Toggles a collapsible section of the given type and level. |

All command names above are members of `EditorCommandMap` and are dispatched by the editor when the matching toolbar identifier or slash-command entry is activated.
