# Inline Formatting in Syncfusion JavaScript Modern Rich Text Editor

The Modern Rich Text Editor ships a curated set of inline formats that apply character-level marks to the selected text without changing the surrounding block. The toolbar palette exposes these formats through built-in items, and the same formats are reachable from code through the fluent `editor.commands().<builder>().<setter>().apply()` chain.

This page covers every inline format the component supports, the toolbar item that triggers it, how it is exposed in code, the configuration options for the inline dropdowns and color pickers, and the keyboard shortcuts for the text-formatting actions.

## Table of contents

- [Available inline formats](#available-inline-formats)
- [Toggle text styles](#toggle-text-styles)
- [Font and styling](#font-and-styling)
- [Color commands](#color-commands)
- [Typography commands](#typography-commands)
- [Font family](#font-family)
- [Font size](#font-size)
- [Font and background color](#font-and-background-color)
- [Clear all inline formatting](#clear-all-inline-formatting)
- [Programmatic end-to-end example](#programmatic-end-to-end-example)
- [Keyboard shortcuts](#keyboard-shortcuts)
- [API references](#api-references)

## Available inline formats

| Name | Summary | Initialization |
| --- | --- | --- |
| Bold | Makes the selected text thicker and darker. | `toolbarSettings: { items: ['Bold'] }` |
| Italic | Slants the selected text to the right. | `toolbarSettings: { items: ['Italic'] }` |
| Underline | Adds a line beneath the selected text. | `toolbarSettings: { items: ['Underline'] }` |
| StrikeThrough | Applies a line through the selected text. | `toolbarSettings: { items: ['StrikeThrough'] }` |
| SubScript | Positions the selected text slightly below the normal line. | `toolbarSettings: { items: ['SubScript'] }` |
| SuperScript | Positions the selected text slightly above the normal line. | `toolbarSettings: { items: ['SuperScript'] }` |
| LowerCase | Converts the selected text to lowercase. | `toolbarSettings: { items: ['LowerCase'] }` |
| UpperCase | Converts the selected text to uppercase. | `toolbarSettings: { items: ['UpperCase'] }` |
| InlineCode | Formats the selected text as inline code. | `toolbarSettings: { items: ['InlineCode'] }` |
| FontName | Defines the font family applied to the selected text. | `toolbarSettings: { items: ['FontName'] }` |
| FontSize | Defines the font size applied to the selected text. | `toolbarSettings: { items: ['FontSize'] }` |
| FontColor | Applies a foreground color to the selected text. | `toolbarSettings: { items: ['FontColor'] }` |
| BackgroundColor | Applies a highlight (background) color to the selected text. | `toolbarSettings: { items: ['BackgroundColor'] }` |
| ClearFormat | Removes all inline formatting from the selected text. | `toolbarSettings: { items: ['ClearFormat'] }` |

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: [ 'Bold', 'Italic', 'Underline', 'Strikethrough', 'Subscript', 'Superscript', 'LowerCase', 'UpperCase', '|', 'InlineCode', '|', 'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|', 'ClearFormat'
      ]
    },
    placeholder: 'Type something ...'
  },
);

editor.appendTo('#editor');
```

## Toggle text styles

The toggle styles include `Bold`, `Italic`, `Underline`, `StrikeThrough`, `SubScript`, `SuperScript`, `LowerCase`, `UpperCase`, and `InlineCode`. They carry no value payload — clicking the toolbar item, or invoking the command without arguments, flips the mark for the selection or sets the active typing mark for a collapsed caret.

## Font and styling

The `FontName`, `FontSize`, `FontColor`, and `BackgroundColor` toolbar items are bound to a `FontName` dropdown, a `FontSize` dropdown, and the foreground and background Color Picker controls respectively. Each accepts a typed payload and the empty string removes the corresponding mark from the selection.

## Color commands

The Modern Rich Text Editor exposes every inline format through two equivalent surfaces — a toolbar click and the fluent `editor.commands().<builder>().<setter>().apply()` chain. Both routes converge on the same `actionBegin` / `actionComplete` pipeline and share identical cancellation and history semantics.

Toggle commands carry no payload. They flip the mark for the selection or set the active typing mark for a collapsed caret.

### Fluent builder

```ts
editor.commands().bold().apply();
editor.commands().italic().apply();
editor.commands().underline().apply();
editor.commands().strikethrough().apply();
editor.commands().subscript().apply();
editor.commands().superscript().apply();
editor.commands().inlineCode().apply();
editor.commands().clearFormat().apply();
editor.commands().uppercase().apply();
editor.commands().lowercase().apply();
```

Both color commands share the `ColorCommand { color: string }` payload. An empty string removes the corresponding mark from the selection.

### Apply a color

```ts
editor.commands().fontColor().color('#DC2626').apply();
editor.commands().backgroundColor().color('rgba(255, 247, 199, 1)').apply();
```

### Remove a color

```ts
editor.commands().fontColor().color('').apply();
editor.commands().backgroundColor().color('').apply();
```

The empty-string signal is the documented convention for removing a color mark. Any other "no color" string is treated as a literal color.

## Typography commands

### Font size

```ts
editor.commands().fontSize().size('16px').apply();
editor.commands().fontSize().size('').apply(); // remove the font size
```

`size` accepts any CSS size string — `'12px'`, `'1.5em'`, `'small'`, `'120%'`. The default dropdown item sends `{ size: 'Default' }`, which is treated as remove the font size.

### Font family

```ts
editor.commands().fontName().family('Georgia, serif').apply();
editor.commands().fontName().family('').apply(); // remove the font family
```

The toolbar item label is `FontName`, but the command name and mark type are both `fontFamily`. The fluent builder is exposed as `.fontName()` to match the toolbar label.

## Font family

The Rich Text Editor initializes with a default font family, which inherits the font family of the parent element. You can change the font for selected text using the font family dropdown in the toolbar. When the default font family is selected, the toolbar displays `Font Name`. For other font families, the toolbar shows the name of the selected font.

### Built-in font family

You can add the `FontName` tool to the Modern Rich Text Editor toolbar using the `toolbarSettings` items property.

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: ['FontName']
    },
    placeholder: 'Type something ...'
});

editor.appendTo('#editor');
```

### Custom font family

The Modern Rich Text Editor supports providing custom fonts along with the existing list. To add additional font names to the font dropdown, configure the `items` field of the `fontFamily` property.

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: ['FontName']
    },
    placeholder: 'Type something ...',
    fontFamily: {
        items: [
            { text: 'Default', value: 'Default' },
            { text: 'Segoe UI', value: 'Segoe UI, sans-serif' },
            { text: 'Roboto', value: 'Roboto, sans-serif' },
            { text: 'Georgia', value: 'Georgia, serif' },
            { text: 'Courier New', value: 'Courier New, monospace' }
        ]
    }
});

editor.appendTo('#editor');
```

### Google font support

To use web fonts in the Modern Rich Text Editor, the web fonts do not need to be present on the local machine. To add web fonts to the editor, refer the web font links in your page and add the font names to the `fontFamily` property.

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: ['FontName']
    },
    fontFamily: {
        items: [
            { text: 'Default', value: 'Default' },
            { text: 'Roboto', value: 'Roboto, sans-serif' },
            { text: 'Great Vibes', value: '"Great Vibes", cursive' }
        ]
    }
});
editor.appendTo('#editor');
```

The following web font links are referenced in the page.

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Great+Vibes">
```

## Font size

The Modern Rich Text Editor initializes with a default font size, which inherits the font size of the parent element. You can change the size for the selected text using the font size dropdown in the toolbar. When the default font size is selected, the toolbar displays `Font Size`. For other font sizes, the toolbar shows the selected size.

### Built-in font size

You can add the `FontSize` tool to the Modern Rich Text Editor toolbar using the `toolbarSettings` items property.

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: ['FontSize']
    },
    placeholder: 'Type something ...'
});

editor.appendTo('#editor');
```

### Custom font size

The Modern Rich Text Editor supports providing custom sizes along with the existing list. To add additional sizes to the font size dropdown, configure the `items` field of the `fontSize` property.

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: ['FontSize']
    },
    placeholder: 'Type something ...',
    fontSize: {
        items: [
            { text: 'Default', value: 'Default' },
            { text: '10', value: '10px' },
            { text: '12', value: '12px' },
            { text: '14', value: '14px' },
            { text: '16', value: '16px' },
            { text: '18', value: '18px' },
            { text: '24', value: '24px' },
            { text: '32', value: '32px' }
        ]
    }
});

editor.appendTo('#editor');
```

## Font and background color

You can add the `FontColor` and `BackgroundColor` tools to the Modern Rich Text Editor toolbar using the `toolbarSettings` `items` property.

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: ['FontColor', 'BackgroundColor']
    },
    placeholder: 'Type something ...'
});

editor.appendTo('#editor');
```

### Custom font and background colors

The `FontColor` and `BackgroundColor` properties offer two modes — `Picker` and `Palette`. The `Palette` mode provides a predefined set of colors, while the `Picker` mode includes a color scheme to choose custom colors. You can switch between these options using the `modeSwitcher` feature.

The number of columns in the color palette for both `FontColor` and `BackgroundColor` can be configured using the `columns` property. The `default` property specifies the default color that is applied when no color is explicitly selected by the user.

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: ['FontColor', 'BackgroundColor']
    },
    fontColor: {
        default: '#DC2626',
        mode: 'Palette',
        columns: 5,
        modeSwitcher: true
    },
    backgroundColor: {
        default: '#FFF7C7',
        mode: 'Picker',
        columns: 5,
        modeSwitcher: false
    }
});

editor.appendTo('#editor');
```

## Clear all inline formatting

The `ClearFormat` toolbar item strips every inline mark (bold, italic, underline, strikethrough, subscript, superscript, code, color, highlight, font size, and font family) from the current selection without altering the block structure. For a programmatic equivalent, use `clearFormat` from the [Commands](#fluent-builder) section.

## Programmatic end-to-end example

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: [
            'Bold', 'Italic', 'Underline', 'Strikethrough',
            '|',
            'FontSize', 'FontName', 'FontColor', 'BackgroundColor',
            '|',
            'InlineCode', 'ClearFormat'
        ]
    },
    placeholder: 'Type something ...'
});

editor.appendTo('#editor');

(document.getElementById('boldBtn') as HTMLButtonElement).onclick = () => {
    editor.commands().bold().apply();
};

(document.getElementById('underlineBtn') as HTMLButtonElement).onclick = () => {
    editor.commands().underline().apply();
};

(document.getElementById('fontSizeBtn') as HTMLButtonElement).onclick = () => {
    editor.commands().fontSize().size('18px').apply();
};

(document.getElementById('fontColorBtn') as HTMLButtonElement).onclick = () => {
    editor.commands().fontColor().color('#00A3FF').apply();
};

(document.getElementById('highlightBtn') as HTMLButtonElement).onclick = () => {
    editor.commands().backgroundColor().color('#FFF7C7').apply();
};

(document.getElementById('clearFormatBtn') as HTMLButtonElement).onclick = () => {
    editor.commands().clearFormat().apply();
};
```

```html
<body>
    <div id='container'>
        <div class="external-toolbar">
            <button id="boldBtn">Bold</button>
            <button id="underlineBtn">Underline</button>
            <button id="fontSizeBtn">18px Font Size</button>
            <button id="fontColorBtn">Blue Font Color</button>
            <button id="highlightBtn">Highlight</button>
            <button id="clearFormatBtn">Clear Format</button>
        </div>
        <div id='editor'></div>
    </div>
</body>
<script type="module" src="index.ts"></script>
```

## Keyboard shortcuts

The Modern Rich Text Editor provides the following built-in keyboard shortcuts for text formatting and styling. Modifier keys use the standard cross-platform convention — `Ctrl` on Windows and Linux, `Cmd (⌘)` on macOS.

| Action | Windows / Linux | macOS | Description |
| --- | --- | --- | --- |
| Bold | <kbd>Ctrl</kbd> + <kbd>B</kbd> | <kbd>⌘</kbd> + <kbd>B</kbd> | Toggles bold styling on the selected text. |
| Italic | <kbd>Ctrl</kbd> + <kbd>I</kbd> | <kbd>⌘</kbd> + <kbd>I</kbd> | Toggles italic styling on the selected text. |
| Underline | <kbd>Ctrl</kbd> + <kbd>U</kbd> | <kbd>⌘</kbd> + <kbd>U</kbd> | Applies or removes underline formatting. |
| Strikethrough | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>S</kbd> | Strikes through the selected text. |
| Subscript | <kbd>Ctrl</kbd> + <kbd>=</kbd> | <kbd>⌘</kbd> + <kbd>=</kbd> | Converts the selected text to subscript. |
| Superscript | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>=</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>=</kbd> | Converts the selected text to superscript. |
| Inline Code | <kbd>Ctrl</kbd> + <kbd>E</kbd> | <kbd>⌘</kbd> + <kbd>E</kbd> | Formats the selected text as inline code. |
| Clear Format | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>R</kbd> | Clears inline formatting from the selection. |
| Uppercase | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>U</kbd> | Transforms the selection to uppercase. |
| Lowercase | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>L</kbd> | Transforms the selection to lowercase. |

To override or remap a shortcut, use the `keyBindings` property on `toolbarSettings` — see [toolbar.md](toolbar.md) → *Configuring keyboard shortcuts*.


## API references

API types that back the inline-formatting surface, sourced from the Syncfusion EJ2 TypeScript API reference for `@syncfusion/ej2-richtexteditor-ui`.

### `ColorCommandBuilder`

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/colorcommandbuilder>

Builder for color commands (`fontColor`, `backgroundColor`).

#### Methods

- `apply` — Execute the color command with set options. Returns `void`.
- `color(colorValue)` — Set the color value.

  | Parameter | Type | Description |
  | --- | --- | --- |
  | `colorValue` | `string` | The color value to set |

  Returns `this`.

### `FontFamilyCommandBuilder`

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/fontfamilycommandbuilder>

Builder for font family command.

#### Methods

- `apply` — Execute the font family command with set options. Returns `void`.
- `family(fontName)` — Set the font family name.

  | Parameter | Type | Description |
  | --- | --- | --- |
  | `fontName` | `string` | The font family name to set |

  Returns `this`.

### `FontSizeCommandBuilder`

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/fontsizecommandbuilder>

Builder for font size command.

#### Methods

- `apply` — Execute the font size command with set options. Returns `void`.
- `size(sizeValue)` — Set the font size.

  | Parameter | Type | Description |
  | --- | --- | --- |
  | `sizeValue` | `string` | The font size value to set |

  Returns `this`.

### `ToggleCommandBuilder`

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/togglecommandbuilder>

Base builder for toggle commands (`bold`, `italic`, etc.).

#### Methods

- `apply` — Executes the toggle command. Returns `void`.

### `CommandExecutor`

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/commandexecutor>

Command executor providing chainable builders for all supported commands. The public surface accessed through `editor.commands().*`.

#### Methods

| Method | Returns |
| --- | --- |
| `backgroundColor()` | `ColorCommandBuilder` |
| `blockQuote()` | `ToggleCommandBuilder` |
| `bold()` | `ToggleCommandBuilder` |
| `bulletList()` | `ListCommandBuilder` |
| `callout()` | `CalloutCommandBuilder` |
| `clearFormat()` | `ToggleCommandBuilder` |
| `codeBlock()` | `CodeBlockCommandBuilder` |
| `collapsible()` | `CollapsibleCommandBuilder` |
| `fontColor()` | `ColorCommandBuilder` |
| `fontName()` | `FontFamilyCommandBuilder` |
| `fontSize()` | `FontSizeCommandBuilder` |
| `heading1()` | `ToggleCommandBuilder` |
| `heading2()` | `ToggleCommandBuilder` |
| `heading3()` | `ToggleCommandBuilder` |
| `heading4()` | `ToggleCommandBuilder` |
| `horizontalRule()` | `HorizontalRuleCommandBuilder` |
| `indent()` | `ToggleCommandBuilder` |
| `inlineCode()` | `ToggleCommandBuilder` |
| `italic()` | `ToggleCommandBuilder` |
| `link()` | `LinkCommandBuilder` |
| `lowercase()` | `ToggleCommandBuilder` |
| `numberedList()` | `ListCommandBuilder` |
| `outdent()` | `ToggleCommandBuilder` |
| `paragraph()` | `ToggleCommandBuilder` |
| `redo()` | `ToggleCommandBuilder` |
| `setListStyle()` | `ListStyleCommandBuilder` |
| `setTextAlign()` | `AlignmentCommandBuilder` |
| `strikethrough()` | `ToggleCommandBuilder` |
| `subscript()` | `ToggleCommandBuilder` |
| `superscript()` | `ToggleCommandBuilder` |
| `toggleTaskList()` | `ChecklistCommandBuilder` |
| `underline()` | `ToggleCommandBuilder` |
| `undo()` | `ToggleCommandBuilder` |
| `uppercase()` | `ToggleCommandBuilder` |
