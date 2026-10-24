# Toolbar Types in TypeScript Modern Rich Text Editor

The main toolbar is the primary interaction surface for formatting commands, and its layout and contents are fully configurable through `toolbarSettings`.

## Items & Types

### Toolbar items

Set `toolbarSettings.items` to the ordered list of buttons (and `'|'` separators) you want to show. The default set already covers the common cases, so you only need to set this when you want to trim it down or add other built-in tools.

If you don't want a toolbar at all — for example, when the editor is driven entirely by your own UI — set `toolbarSettings.enable` to `false` and no toolbar is rendered; the editor stays fully usable programmatically.

> **Note**: Below are the default toolbar items:
`['Bold','Italic','Underline','Strikethrough','|','Formats','Alignment','BulletList','NumberedList','|','Link','Image','Table','|','Undo','Redo']`

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

#### Available toolbar items

The built-in items you can list in `toolbarSettings.items`:

* **History** — `Undo`, `Redo`
* **Text formatting** — `Bold`, `Italic`, `Underline`, `Strikethrough`, `Subscript`, `Superscript`, `InlineCode`, `ClearFormat`
* **Font and color** — `FontName`, `FontSize`, `FontColor`, `BackgroundColor`
* **Structure** — `Formats`, `Paragraph`, `Quote`, `Callout`, `CodeBlock`, `Indent`, `Outdent`, `HorizontalLine`
* **Alignment** — `Alignment`, `AlignLeft`, `AlignCenter`, `AlignRight`, `AlignJustify`
* **Lists** — `BulletFormatList`, `BulletList`, `NumberFormatList`, `NumberedList`
* **Insert** — `Link`, `Image`, `Table`

### Layout configuration

#### Type

When your item list is longer than the available width, `toolbarSettings.type` controls how overflow items are displayed. The default value is `'Auto'`, which automatically uses `'Expanded'` mode on web/desktop devices and `'Scrollable'` mode on mobile devices. In `'Expanded'` mode, all toolbar items remain visible by expanding the toolbar to accommodate the available commands without introducing horizontal scrolling. Use `'Scrollable'` to always enable horizontal scrolling, or use `'MultiRow'` to wrap overflow items onto additional rows.

#### Position

By default the toolbar sits at the top of the editor (`toolbarSettings.position: 'Top'`); set it to `'Bottom'` if your layout calls for the toolbar underneath the content instead.

### Floating Toolbar

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

```html
<html lang="en">

<head>
    <title>Syncfusion Typescript Modern Editor</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Typescript UI Controls">
    <meta name="author" content="Syncfusion">
</head>
    <body>
        <div id='container'>
            <div style="display: flex; gap: 15px;">
        <div id="editor"></div>
        <div class="property-section">
            <div class="property-section">
                <p style="margin-bottom: 15px;">Properties</p>
                <div id="property" title="Properties" class="editor-toolbar-properties">
                    <div class="form-group" style="margin-bottom: 15px;">
                        <label class="form-label property-label">Toolbar Type</label>
                        <input type="text" id="toolbarType" name="toolbarType" class="form-control" />
                    </div>
    
                    <div class="form-group" style="margin-bottom: 15px;">
                        <label class="form-label property-label">Toolbar Position</label>
                        <input type="text" id="toolbarPosition" name="toolbarPosition" class="form-control" />
                    </div>
    
                    <div class="form-group">
                        <input type="checkbox" id="float" checked="false">
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    </body>
      <script type="module" src="index.ts"></script>
</html>
```
