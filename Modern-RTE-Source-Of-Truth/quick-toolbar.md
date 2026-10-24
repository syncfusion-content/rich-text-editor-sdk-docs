# Quick Toolbar in TypeScript Modern Rich Text Editor

The **Quick Toolbar** is a contextual popup toolbar that appears next to the current selection inside the editable area, giving fast access to the most relevant commands without moving focus to the top of the editor. It is wired through `quickToolbarSettings` on `RichTextEditorUI`.

The Modern Rich Text Editor exposes the Quick Toolbar through one configuration object with five sub-surfaces:

| Property | Type | Default | Purpose |
| --- | --- | --- | --- |
| `enable` | `boolean` | `true` | Master switch for all quick toolbars. |
| `enableAppendToBody` | `boolean` | `false` | Mounts the popup to the document body to escape clipping inside narrow or scroll-constrained containers. |
| `text` | `ToolbarItem[]` | `null` | Items shown when text is selected. |
| `image` | `ImageQuickToolbarItem[]` | `['AltText', 'Caption', '`&#124;`', 'Align', 'Display', 'WrapText', '`&#124;`', 'Dimension', 'Replace', 'Remove']` | Items shown when an image is selected. |
| `link` | `LinkQuickToolbarItem[]` | `['Open', 'Copy', 'Edit', 'Remove']` | Items shown when the caret is inside a link. |
| `table` | `TableQuickToolbarItem[]` | `['Header', 'Remove', '`&#124;`', 'Row', 'Column', '`&#124;`', 'CellBackgroundColor', 'Align', 'VerticalAlign']` | Items shown when the caret is inside a table. |

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    quickToolbarSettings: {
        enable: true,
        text: [
            'Undo', 'Redo', '|',
            'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
            'FontColor', 'BackgroundColor', '|',
            'Formats', '|',
            'NumberedList', 'BulletList'
        ],
        image: ['AltText', 'Caption', '|', 'Align', 'Display', 'WrapText', '|', 'Dimension', 'Replace', 'Remove'],
        link:  ['Open', 'Copy', 'Edit', 'Remove'],
        table: ['Header', 'Remove', '|', 'Row', 'Column', '|', 'CellBackgroundColor', 'Align', 'VerticalAlign']
    },
    placeholder: 'Type something ...'
});

editor.appendTo('#editor');
```

When `quickToolbarSettings.enable` is `true` and at least one of `text`, `image`, `link`, or `table` is non-empty, the corresponding popup is built and bound to the relevant editor surface. Any sub-surface whose array is empty (or `null`) is **not** instantiated — set `text` to `null` to disable the text quick toolbar while keeping the image / link / table ones.

> **Note:** Inline mode can be achieved by disabling the main toolbar and
> adding the text quick-toolbar items on the `quickToolbarSettings.text`
> surface:
>
> ```ts
> const editor: RichTextEditorUI = new RichTextEditorUI({
>     toolbarSettings: { enable: false },
>     quickToolbarSettings: {
>         enable: true,
>         text: [
>             'Bold', 'Italic', 'Underline', '|',
>             'Formats', 'Alignment', '|',
>             'NumberedList', 'BulletList', '|',
>             'Undo', 'Redo'
>         ]
>     }
> });
>
> editor.appendTo('#editor');
> ```

---

## Enable Append To Body

`enableAppendToBody` controls whether the quick toolbar popup is mounted on `document.body` or on the editor container.

- When set to `true`, the popup is appended to the document body and remains visible over the editor area.
- When set to `false` (default), the popup is appended to the editor area and always remains inside the editor area.

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    quickToolbarSettings: {
        enable: true,
        enableAppendToBody: true,
        text: ['Bold', 'Italic', 'Underline', '|', 'Formats', '|', 'NumberedList', 'BulletList'],
        image: ['AltText', 'Caption', 'Align', 'Display', 'WrapText', '|', 'Dimension', 'Replace', 'Remove'],
        link:  ['Open', 'Copy', 'Edit', 'Remove'],
        table: ['Header', 'Remove', '|', 'Row', 'Column', '|', 'CellBackgroundColor', 'Align', 'VerticalAlign']
    }
});

editor.appendTo('#editor');
```

> With `enableAppendToBody: true`, the popup is parented to `document.body` and its visibility is clamped to the editor's bounds — the popup hides itself off-screen when the target block scrolls out of the editor's visible region.

---

## Text Quick Toolbar

`text` is the array of items shown when a non-collapsed text selection exists inside the editor. The popup opens on `mouseup` and `keyup` (when a non-collapsed selection exists), and closes on `Escape`, on outside interaction, or on `selectionchange` that empties the selection.

The default is `null`, which means the Text Quick Toolbar is **not** rendered unless you supply a non-empty `text` array. The Text Quick Toolbar is the only quick-toolbar surface that accepts the full `ToolbarItem` union — built-in identifiers, built-in-with-config objects, custom items, and the `'|'` separator.

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    quickToolbarSettings: {
        enable: true,
        text: [
            'Undo', 'Redo', '|',
            'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
            'FontColor', 'BackgroundColor', '|',
            'Formats', '|',
            'NumberedList', 'BulletList'
        ]
    }
});

editor.appendTo('#editor');
```

### When the Text Quick Toolbar opens

The Text Quick Toolbar opens under three triggers:

- **Mouse selection (`mouseup`)** — after the user finishes a drag-select inside the editable area.
- **Keyboard selection (`keyup`)** — when the user extends a selection with Shift + arrow keys.
- **Triple-click (`trippleclick`)** — when the user triple-clicks a word or block; the toolbar opens centred above the block.

The popup is dismissed on:

- `Escape` key.
- Editor blur (configurable).

For customising the items that appear in the Text Quick Toolbar (built-in identifiers, built-in-with-config objects, custom items, separators).
---

## Custom Toolbar Item

A **Custom Toolbar Item** is a user-supplied toolbar entry that does not map to a built-in editor command. It is declared through the `CustomToolbarItem` interface and is dispatched through the editor's `toolbarSettings.itemClicked` event.

The Text Quick Toolbar `quickToolbarSettings.text` accepts the full `ToolbarItem` union — built-in identifiers, built-in-with-config objects, custom items, and the `'|'` separator. The item shapes that can be mixed into any Text Quick Toolbar array are:

| Item form | Example | Purpose |
| --- | --- | --- |
| Built-in identifier | `'Bold'` | Use the editor's built-in handler. |
| Built-in with config | `{ item: 'Bold', align: 'Right' }` | Override the label of a built-in. |
| Custom item | `{ actionId: 'save', id: 'save', text: 'Save' }` | Wire a user-defined action (this section). |
| Separator | &#124; | Visual divider between groups. |

Add `actionId` (and optional shortcut labels) to the toolbar item to make it route through `toolbarSettings.itemClicked`.

```ts
export interface CustomToolbarItem extends ItemModel {
    actionId: string;
    windowsShortcutText?: string;
    macShortcutText?: string;
}
```

| Field | Type | Required | Purpose |
| --- | --- | --- | --- |
| `actionId` | `string` | Yes | Stable identifier — read off the clicked item in `toolbarSettings.itemClicked` to route the action. |
| `windowsShortcutText` | `string` | No | Tooltip text for the Windows keyboard shortcut. |
| `macShortcutText` | `string` | No | Tooltip text for the macOS keyboard shortcut. |

Any other field inherited from `ItemModel` (`text`, `id`, `iconCss`, `prefixIcon`, `tooltipText`, `htmlAttributes`, etc.) is also accepted.

A custom item can appear in any of the four quick-toolbar arrays — `text`, `image`, `link`, `table` — because each of those arrays is a union that includes `CustomToolbarItem`.

The click is delivered through `toolbarSettings.itemClicked` with the following args shape:

```ts
interface ToolbarItemClickedEventArgs {
    item?: ToolbarItemModel;   // the clicked item (custom `actionId` is preserved)
    event?: Event;             // the originating DOM event
    dataIndex?: number;
}
```

`ToolbarItemClickedEventArgs` is defined in `@syncfusion/ej2-richtexteditor-ui`'s toolbar settings model and is the declared type of the `toolbarSettings.itemClicked` event handler. If your import surface only re-exports it indirectly, declare the handler args shape inline (the type is structural).

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

// The args shape is `{ item: ToolbarItemModel, event: Event }`.
// `ToolbarItemClickedEventArgs` lives in the toolbar-settings model file and
// is the canonical handler-arg type — declared inline here for portability.
interface ClickedArgs {
    item?: { id?: string; actionId?: string };
    event?: Event;
}

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        itemClicked: (args: ClickedArgs): void => {
            if (args.item && args.item.actionId === 'uppercase') {
                // dispatch the `uppercase` command through the fluent builder
                editor.commands().uppercase().apply();
            }
        }
    },
    quickToolbarSettings: {
        enable: true,
        text: [
            'Bold', 'Italic', 'Underline', '|',
            {
                actionId: 'uppercase',
                id: 'uppercase',
                text: 'UPPERCASE',
                tooltipText: 'Transform selection to UPPERCASE',
                windowsShortcutText: 'Ctrl + Shift + U',
                macShortcutText: '⇧ ⌘ U'
            },
            '|',
            'NumberedList', 'BulletList'
        ]
    }
});

editor.appendTo('#editor');
```

> `actionId` is the routing key. `toolbarSettings.itemClicked` is fired for every toolbar item (main and quick) — branch on `args.item.actionId` to dispatch the right command or run your custom handler. The public top-level `itemClick` event you may see in older guides does not exist on `RichTextEditorUI`; the public surface is `toolbarSettings.itemClicked`.

### Custom items in image / link / table quick toolbars

Custom items are accepted by `image`, `link`, and `table` as well. The `link` and `image` arrays are unions that include `CustomToolbarItem`, so the same shape works in every quick-toolbar context.

---

## Available Items

The built-in quick-toolbar items are declared as typed unions. Each quick-toolbar surface accepts a different union — the union narrows the available identifiers per surface so the compiler flags unsupported items.

### Link Quick Toolbar items

```ts
type LinkQuickToolbarItem = 'Open' | 'Copy' | 'Edit' | 'Remove' | '|' | CustomToolbarItem;
```

| Identifier | Behavior |
| --- | --- |
| `Open` | Opens the link `href` in a new tab using the configured `target`. |
| `Copy` | Copies the link `href` to the clipboard. |
| `Edit` | Opens the Insert-Link dialog pre-filled with the current link. |
| `Remove` | Removes the link while keeping the link text. |
|  &#124; | Visual separator used to split action groups inside the popup. |
| `CustomToolbarItem` | A user-defined item routed through `toolbarSettings.itemClicked`. |

### Table Quick Toolbar items

```ts
type TableQuickToolbarItem = 'Row' | 'Column' | 'Header' | 'CellBackgroundColor' | 'VerticalAlign' | 'Align' | 'Remove' | '|' | CustomToolbarItem;
```

| Identifier | Behavior |
| --- | --- |
| `Row` | Opens the row sub-popup (insert above / below, delete row). |
| `Column` | Opens the column sub-popup (insert left / right, delete column). |
| `Header` | Toggles the table header row. |
| `CellBackgroundColor` | Opens the background-color picker for the active cell. |
| `VerticalAlign` | Opens the vertical-align picker (top / middle / bottom). |
| `Align` | Opens the horizontal-align picker (left / center / right). |
| `Remove` | Deletes the table. |
|  &#124; | Visual separator. |
| `CustomToolbarItem` | A user-defined item routed through `toolbarSettings.itemClicked`. |

### Image Quick Toolbar items

```ts
type ImageQuickToolbarItem = 'AltText' | 'Caption' | 'Align' | 'Display' | 'WrapText' | 'Dimension' | 'Replace' | 'Remove' | '|' | CustomToolbarItem;
```

| Identifier | Behavior |
| --- | --- |
| `AltText` | Opens the Alt-Text editor for the selected image. |
| `Caption` | Toggles the image caption. |
| `Align` | Opens the alignment picker (left / center / right). |
| `Display` | Toggles the image display mode (`inline` / `block`). |
| `WrapText` | Toggles text-wrap around the image. |
| `Dimension` | Opens the dimension editor (width / height). |
| `Replace` | Opens the file picker to replace the image source. |
| `Remove` | Deletes the image. |
|  &#124; | Visual separator. |
| `CustomToolbarItem` | A user-defined item routed through `toolbarSettings.itemClicked`. |

### Text Quick Toolbar items

The Text Quick Toolbar accepts the full `ToolbarItem` union — every built-in toolbar identifier, built-in-with-config objects, custom items, and the `'|'` separator.

| Identifier | Behavior |
| --- | --- |
| `Bold`, `Italic`, `Underline`, `Strikethrough` | Toggle inline marks. |
| `Subscript`, `Superscript` | Toggle inline marks. |
| `UpperCase`, `LowerCase` | Transform the selection. |
| `InlineCode` | Toggle inline code mark. |
| `HorizontalLine` | Insert a horizontal rule at the cursor. |
| `Formats` | Open the paragraph / heading dropdown. |
| `FontSize`, `FontColor`, `BackgroundColor`, `FontName` | Open the matching picker. |
| `BulletList`, `NumberedList`, `NumberFormatList`, `BulletFormatList`, `Checklist` | List controls. |
| `Alignment` | Open the alignment picker. |
| `Quote`, `CodeBlock`, `Callout` | Block-format split buttons. |
| `Link`, `Image`, `Table` | Insert-link / image / table popups. |
| `ClearFormat` | Remove inline marks from the selection. |
| `Paragraph`, `Heading 1`–`Heading 4` | Block-format converters. |
| `Indent`, `Outdent` | Indent controls. |
| `AlignLeft`, `AlignCenter`, `AlignRight`, `AlignJustify` | Direct alignment controls. |
| `CalloutInfo`, `CalloutSuccess`, `CalloutWarning`, `CalloutError`, `CalloutNote` | Callout-variant children of the `Callout` split button. |
| &#124; | Visual separator. |

> Built-in identifiers can also be wrapped in a `BuiltInToolbarItemConfig` to override the visible label: `{ item: 'Bold', align: 'Right' }`.
