# Inline Format Commands in TypeScript Modern Rich Text Editor

The Modern Rich Text Editor exposes every inline format through two equivalent surfaces — a toolbar click and the fluent `editor.commands().<builder>().<setter>().apply()` chain. Both routes converge on the same `actionBegin` / `actionComplete` pipeline and share identical cancellation and history semantics.

## Toggle text-style commands

Toggle commands carry no payload. They flip the mark for the selection or set the active typing mark for a collapsed caret.

## Fluent builder

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

## Color commands

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