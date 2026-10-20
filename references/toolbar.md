# Toolbar in Syncfusion JavaScript Modern Rich Text Editor

The main toolbar is the primary interaction surface for formatting commands, and its layout and contents are fully configurable through `toolbarSettings`. This page covers the built-in items, layout, floating behaviour, custom items, the block-format toolbar identifiers, and the key-bindings customisation point.

## Table of contents

- [Toolbar items and types](#toolbar-items-and-types)
- [Layout configuration](#layout-configuration)
- [Floating toolbar](#floating-toolbar)
- [Block-format toolbar identifiers](#block-format-toolbar-identifiers)
- [Custom toolbar items](#custom-toolbar-items)
- [Configuring keyboard shortcuts](#configuring-keyboard-shortcuts)
- [Updating toolbar items at runtime](#updating-toolbar-items-at-runtime)
- [API references](#api-references)

## Toolbar items and types

Set `toolbarSettings.items` to the ordered list of buttons (and `'|'` separators) you want to show. The default set already covers the common cases, so you only need to set this when you want to trim it down or add other built-in tools.

If you don't want a toolbar at all — for example, when the editor is driven entirely by your own UI — set `toolbarSettings.enable` to `false` and no toolbar is rendered; the editor stays fully usable programmatically.

> Below are the default toolbar items:
> `['Bold','Italic','Underline','Strikethrough','|','Formats','Alignment','BulletList','NumberedList','|','Link','Image','Table','|','Undo','Redo']`

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI( {
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', 'Strikethrough', '|', 'Formats', 'Alignment', 'BulletList', 'NumberedList', '|', 'Link', 'Image', 'Table', '|', 'Undo', 'Redo'],
        type: 'MultiRow',
        position: 'Top',
        enableFloating: true,
        floatingOffset: 0,
        itemClicked: function (args: any) {
            console.log('Toolbar item clicked:', args);
        },
        updatedToolbarStatus: function (args: any) {
            console.log('Toolbar status updated:', args);
        }
    }
} );
editor.appendTo( '#editor' );
```

### Available toolbar items

The built-in items you can list in `toolbarSettings.items`:

- **History** — `Undo`, `Redo`
- **Text formatting** — `Bold`, `Italic`, `Underline`, `Strikethrough`, `Subscript`, `Superscript`, `InlineCode`, `ClearFormat`
- **Font and color** — `FontName`, `FontSize`, `FontColor`, `BackgroundColor`
- **Structure** — `Formats`, `Paragraph`, `Quote`, `Callout`, `CodeBlock`, `Indent`, `Outdent`, `HorizontalLine`
- **Alignment** — `Alignment`, `AlignLeft`, `AlignCenter`, `AlignRight`, `AlignJustify`
- **Lists** — `BulletFormatList`, `BulletList`, `NumberFormatList`, `NumberedList`
- **Insert** — `Link`, `Image`, `Table`

## Layout configuration

### Type

When your item list is longer than the available width, `toolbarSettings.type` controls how overflow items are displayed. The default value is `'Auto'`, which automatically uses `'Expanded'` mode on web/desktop devices and `'Scrollable'` mode on mobile devices. In `'Expanded'` mode, all toolbar items remain visible by expanding the toolbar to accommodate the available commands without introducing horizontal scrolling. Use `'Scrollable'` to always enable horizontal scrolling, or use `'MultiRow'` to wrap overflow items onto additional rows.

### Position

By default the toolbar sits at the top of the editor (`toolbarSettings.position: 'Top'`); set it to `'Bottom'` if your layout calls for the toolbar underneath the content instead.

## Floating toolbar

For a long document, losing the toolbar off-screen as the user scrolls down is disruptive. `toolbarSettings.enableFloating` is `true` by default, so the toolbar automatically detaches and sticks in place once the editor scrolls out of view. Set it to `false` if you'd rather the toolbar just scroll away with the content. If your page includes a sticky header, use `toolbarSettings.floatingOffset` to add a top offset (in pixels) and prevent the floating toolbar from overlapping the header. The default value is `0`.

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';
import { CheckBox } from '@syncfusion/ej2-buttons';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

const editor: RichTextEditorUI = new RichTextEditorUI({
    width: '70%',
    toolbarSettings: {
        items: [
            'Undo', 'Redo', '|',
            'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
            'FontColor', 'BackgroundColor', '|',
            'Formats', 'Alignment', '|',
            'Table', 'Image', 'Link', '|',
            'FontName', 'FontSize', '|',
            'NumberFormatList', 'BulletFormatList', '|',
            'Subscript', 'Superscript'
        ],
        type: 'Expanded',
        position: 'Top'
    }
});
editor.appendTo('#editor');

const toolbarTypeData: Array<{ text: string; value: string }> = [
    { text: 'Expanded', value: 'Expanded' },
    { text: 'MultiRow', value: 'MultiRow' },
    { text: 'Scrollable', value: 'Scrollable' }
];

const toolbarPositionData: Array<{ text: string; value: string }> = [
    { text: 'Top', value: 'Top' },
    { text: 'Bottom', value: 'Bottom' }
];

const toolbarTypeDropdown: DropDownList = new DropDownList({
    dataSource: toolbarTypeData,
    fields: { text: 'text', value: 'value' },
    value: 'Expanded',
    popupHeight: '200px',
    floatLabelType: 'Auto',
    change: function (args: any) {
        editor.toolbarSettings.type = args.value;
        editor.dataBind();
    }
});

toolbarTypeDropdown.appendTo('#toolbarType');

const toolbarPositionDropdown: DropDownList = new DropDownList({
    dataSource: toolbarPositionData,
    fields: { text: 'text', value: 'value' },
    value: 'Top',
    popupHeight: '150px',
    floatLabelType: 'Auto',
    change: function (args: any) {
        editor.toolbarSettings.position = args.value;
        editor.dataBind();
    }
});

toolbarPositionDropdown.appendTo('#toolbarPosition');

const float: CheckBox = new CheckBox({
    checked: true,
    label: 'Enable Floating',
    change: function (args: any) {
        editor.toolbarSettings.enableFloating = args.checked;
        editor.dataBind();
    }
});

float.appendTo('#float');
```

## Block-format toolbar identifiers

Block formats in the Modern Rich Text Editor change the block-level structure of the document rather than inline text. The editor exposes block formats through two public surfaces: built-in toolbar identifiers in `toolbarSettings.items`, and slash-command entries in `slashCommandSettings.items`. There is no separate public `format` configuration object — every block format is wired through one of those two arrays.

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

The block-format toolbar identifiers map to:

- **Paragraph** — toolbar `Paragraph`, slash command `Paragraph`, command `paragraph`.
- **Heading 1–4** — toolbar `Heading 1` … `Heading 4`, slash commands `Heading 1` … `Heading 4`, commands `heading1` … `heading4`.

Headings and paragraph can also be reached through the `Formats` dropdown toolbar item, which exposes `Paragraph` and `Heading 1`–`Heading 4` as a single control.

## Custom toolbar items

Alongside the built-in strings, `toolbarSettings.items` also accepts item objects for tools of your own. Give each one an `actionId` — a unique identifier you'll check for in the `itemClicked` handler — plus the usual presentation properties (`prefixIcon`/`suffixIcon`, `tooltipText`, `align`, `cssClass`, `disabled`, and so on, the same set the underlying EJ2 Toolbar item model uses).

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: [
            'Bold', 'Italic', 'Underline', '|',
            {
                id: 'WordCount',
                actionId: 'wordCount',
                prefixIcon: 'e-icons e-numbering-list',
                tooltipText: 'Word count',
                align: 'Left'
            },
            '|', 'Undo', 'Redo'
        ],
        itemClicked: (args: any): void => {
            if (args.item) {
                const words: number = editor.getText().trim().split(/\s+/).filter(Boolean).length;
                alert('Word count: ' + words);
            }
        }
    }
});

editor.appendTo('#editor');
```

### itemClicked event

Listen for `itemClicked` to know whenever any toolbar button is clicked, before its command runs — this is also how you handle a custom item's action, since custom items don't have a built-in command of their own. The event args' `item` field is the toolbar item's model, so check `args.item.actionId` to identify which custom item was clicked.

### updatedToolbarStatus event

The `updatedToolbarStatus` event is raised after the toolbar synchronizes its visual state with the current editor selection or cursor formatting. Its event arguments provide the active inline marks, block-level formats, and resolved font and color styles.

## Configuring keyboard shortcuts

You can override default shortcut key combinations or assign custom combinations using the `keyBindings` property on `toolbarSettings`.

Syntax rules:

- Modifiers and key values are separated with a `+` symbol (e.g., `'ctrl+alt+k'`).
- Supported modifier tokens: `ctrl`, `shift`, `alt`, and `meta`.
- Key values can be written in lowercase (e.g., `'ctrl+b'`).
- The Modern Rich Text Editor automatically updates corresponding toolbar button tooltips and accessibility attributes to match your custom key bindings.

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI( {
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', 'Strikethrough', '|', 'BulletList', 'NumberedList', '|', 'Link', 'Image', 'Table', 'CodeBlock', '|', 'Undo', 'Redo'],
        keyBindings: {
            link: 'ctrl+alt+k',
            image: 'ctrl+alt+i',
            'code-block': 'ctrl+shift+c'
        }
    }
});
editor.appendTo( '#editor' );
```

## Updating toolbar items at runtime

If your toolbar needs to change based on application state — for example, showing a different set of tools depending on the user's permissions — call `editor.updateToolbarItems(updates)` with a batch of add/remove/reorder operations. The editor reconciles only what actually changed rather than re-rendering the whole toolbar, so things like an open dropdown or current focus aren't disrupted.

```ts
editor.updateToolbarItems([
    { action: 'add', item: 'Italic', index: 1 }
]);
```

## API references

API types that back the toolbar surface, sourced from the Syncfusion EJ2 TypeScript API reference for `@syncfusion/ej2-richtexteditor-ui`.

### `AlignmentCommandBuilder`

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/alignmentcommandbuilder>

Builder for text alignment command.

#### Methods

- `align` — Set the text alignment. Returns `this`.
- `apply` — Execute the alignment command with set options. Returns `void`.

### `HorizontalRuleCommandBuilder`

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/horizontalrulecommandbuilder>

Builder for horizontal line command.

#### Methods

- `apply` — Executes the toggle command. Returns `void`.

### `FormattingStateService`

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/formattingstateservice>

Service for querying and caching the editor's formatting state. Ensures formatting state is queried only once per command, and the result is shared to both toolbar and quick-toolbar modules.

#### Methods

- `getCurrentState` — Returns the most recently cached formatting state. Returns `FormattingState | null`.
- `refreshFormattingState(editorCore)` — Queries the current formatting state from the editor and caches it. This is the single query point for all toolbar UI updates.

  | Parameter | Type | Description |
  | --- | --- | --- |
  | `editorCore` | `EditorCore` | The editor core instance |

  Returns `FormattingState`.
### Toolbar runtime key bindings

The enum that backs the `keyBindings` configuration on `toolbarSettings`, sourced from the Syncfusion EJ2 TypeScript API reference for `@syncfusion/ej2-richtexteditor-ui`.

### `EditorKeyBindingAction`

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/editorkeybindingaction>

Enum members:

- `toolbar-focus`
- `link`
- `image`
- `audio`
- `video`
- `table`
- `undo`
- `redo`
- `bold`
- `italic`
- `underline`
- `strikethrough`
- `superscript`
- `subscript`
- `indents`
- `outdents`
- `clear-format`
- `ordered-list`
- `unordered-list`
- `checklist`
- `inlinecode`
- `uppercase`
- `lowercase`
- `code-block`
