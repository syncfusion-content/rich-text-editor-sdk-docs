---
layout: post
title: Quick Toolbar in TypeScript Modern Rich Text Editor | Syncfusion
description: Learn how to configure the contextual quick toolbar in the TypeScript Modern Rich Text Editor, including inline mode, append-to-body, text quick toolbar items, custom items, and available built-in items.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Quick Toolbar in TypeScript Modern Rich Text Editor

The **Quick Toolbar** is a contextual popup toolbar that appears next to the
current selection inside the editable area, giving fast access to the most
relevant commands without moving focus to the top of the editor. It is wired
through `quickToolbarSettings` on `RichTextEditorUI`.

The Modern Rich Text Editor exposes the Quick Toolbar through one
configuration object with five sub-surfaces:

| Property | Type | Default | Purpose |
| --- | --- | --- | --- |
| `enable` | `boolean` | `true` | Master switch for all quick toolbars. |
| `enableAppendToBody` | `boolean` | `false` | Mounts the popup to the document body to escape clipping inside narrow or scroll-constrained containers. |
| `text` | `ToolbarItem[]` | `null` | Items shown when text is selected. |
| `image` | `ImageQuickToolbarItem[]` | `['AltText', 'Caption', '\|', 'Align', 'Display', 'WrapText', '\|', 'Dimension', 'Replace', 'Remove']` | Items shown when an image is selected. |
| `link` | `LinkQuickToolbarItem[]` | `['Open', 'Copy', 'Edit', 'Remove']` | Items shown when the caret is inside a link. |
| `table` | `TableQuickToolbarItem[]` | `['Header', 'Remove', '\|', 'Row', 'Column', '\|', 'CellBackgroundColor', 'Align', 'VerticalAlign']` | Items shown when the caret is inside a table. |

{% tabs %}

{% highlight ts tabtitle="main.ts" %}

{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/quicktoolbar-settings/index.ts %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/quicktoolbar-settings/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/quicktoolbar-settings/" %}

When `quickToolbarSettings.enable` is `true` and at least one of `text`,
`image`, `link`, or `table` is non-empty, the corresponding popup is built
and bound to the relevant editor surface. Any sub-surface whose array is
empty (or `null`) is **not** instantiated — set `text` to `null` to disable
the text quick toolbar while keeping the image / link / table ones.

---

## 1. Inline Mode

The Modern Rich Text Editor uses an internal `Inline` mode for the quick
toolbar that appears when the caret is inside an inline element (such as a
link). `Inline` is one of the seven `QuickToolbarType` identifiers that the
editor dispatches:

```ts
type QuickToolbarType = 'Audio' | 'Image' | 'Inline' | 'Link' | 'Table' | 'Text' | 'Video';
```

For a public configuration, `Inline` is reached through `link` — when the
caret enters an `<a>` element, the **Link Quick Toolbar** opens in inline
mode and is positioned directly above the link text. The popup uses the
same tip-pointer logic as the text quick toolbar (top-position collision
flipping) and is governed entirely by `quickToolbarSettings.link`.

To wire an inline-mode quick toolbar on a link, configure `link` with the
built-in link items and the editor handles the rest. The following example
enables the default link items and a couple of formatting actions that ride
along with the link popup when text is selected inside a link.

```ts
const editor: RichTextEditorUI = new RichTextEditorUI({
    quickToolbarSettings: {
        enable: true,
        link: ['Open', 'Copy', 'Edit', 'Remove']
    }
});

editor.appendTo('#editor');
```

> `Inline` mode is not user-configurable as a separate toolbar — it is the
> collision-positioning mode that the editor applies to the Link Quick
> Toolbar. Configure `link` (see section 5) to control the inline-mode
> items.

---

## 2. Enable Append To Body

`enableAppendToBody` controls whether the quick toolbar popup is mounted on
the editor's parent (`[aria-current="false"]`) or directly on
`document.body`. When `true`, the popup escapes the editor's overflow
context and is z-index-positioned by the browser instead of by the popup
component.

```ts
@Property(false)
public enableAppendToBody: boolean;
```

Use `enableAppendToBody: true` when:

- The editor sits inside a container with `overflow: hidden` or
  `overflow: auto` and the popup is clipped.
- The editor sits inside a narrow scrollable column and the popup's
  fixed-within-parent position collides with neighbouring panels.
- You need the popup to overlay floating panels or modals whose stacking
  context sits above the editor.

Use `enableAppendToBody: false` (default) when:

- The editor has its own scrollable parent and you want the popup to
  scroll naturally with it.
- You need the popup to be constrained by the editor's clip region.

{% tabs %}

{% highlight ts tabtitle="main.ts" %}

{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/quicktoolbar-settings-append-to-body/index.ts %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/quicktoolbar-settings-append-to-body/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/quicktoolbar-settings-append-to-body/" %}

> With `enableAppendToBody: true`, the popup is parented to
> `document.body` and its visibility is clamped to the editor's bounds — the
> popup hides itself off-screen when the target block scrolls out of the
> editor's visible region.

---

## 3. Text Quick Toolbar

`text` is the array of items shown when a non-collapsed text selection
exists inside the editor. The popup opens on `mouseup` and `keyup` (when a
non-collapsed selection exists), and closes on `Escape`, on outside
interaction, or on `selectionchange` that empties the selection.

```ts
@Property(null)
public text: ToolbarItem[];
```

The default is `null`, which means the Text Quick Toolbar is **not**
rendered unless you supply a non-empty `text` array. The Text Quick Toolbar
is the only quick-toolbar surface that accepts the full `ToolbarItem`
union — built-in identifiers, built-in-with-config objects, custom items,
and the `'|'` separator.

{% tabs %}

{% highlight ts tabtitle="main.ts" %}

{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/quicktoolbar-settings-text/index.ts %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/quicktoolbar-settings-text/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/quicktoolbar-settings-text/" %}

### When the Text Quick Toolbar opens

The Text Quick Toolbar opens under three triggers:

- **Mouse selection (`mouseup`)** — after the user finishes a drag-select
  inside the editable area.
- **Keyboard selection (`keyup`)** — when the user extends a selection with
  Shift + arrow keys.
- **Triple-click (`trippleclick`)** — when the user triple-clicks a word
  or block; the toolbar opens centred above the block.

The popup is dismissed on:

- `Escape` key.
- Outside mouse-down that does not hit the toolbar or the editor.
- `selectionchange` that collapses the selection to a caret.
- Editor blur (configurable).

### Customising the items

`text` accepts any of the `ToolbarItem` union members:

| Item form | Example | Purpose |
| --- | --- | --- |
| Built-in identifier | `'Bold'` | Use the editor's built-in handler. |
| Built-in with config | `{ item: 'Bold', text: 'Make Bold' }` | Override the label of a built-in. |
| Custom item | `{ actionId: 'save', id: 'save', text: 'Save' }` | Wire a user-defined action (see section 4). |
| Separator | `'\|'` | Visual divider between groups. |

See [Available Items](#5-available-items) for the full built-in catalog.

---

## 4. Custom Toolbar Item

A **Custom Toolbar Item** is a user-supplied toolbar entry that does not map to a
built-in editor command. It is declared through the `CustomToolbarItem`
interface and is dispatched through the editor's `toolbarSettings.itemClicked`
event.

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

Any other field inherited from `ItemModel` (`text`, `id`, `iconCss`,
`prefixIcon`, `tooltipText`, `htmlAttributes`, etc.) is also accepted.

A custom item can appear in any of the four quick-toolbar arrays —
`text`, `image`, `link`, `table` — because each of those arrays is a
union that includes `CustomToolbarItem`.

The click is delivered through `toolbarSettings.itemClicked` with the
following args shape:

```ts
interface ToolbarItemClickedEventArgs {
    item?: ToolbarItemModel;   // the clicked item (custom `actionId` is preserved)
    event?: Event;             // the originating DOM event
    dataIndex?: number;
}
```

`ToolbarItemClickedEventArgs` is defined in
`@syncfusion/ej2-richtexteditor-ui`'s toolbar settings model and is the
declared type of the `toolbarSettings.itemClicked` event handler. If your
import surface only re-exports it indirectly, declare the handler arg shape
inline (the type is structural).

{% tabs %}

{% highlight ts tabtitle="main.ts" %}

{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/quicktoolbar-settings-custom-item/index.ts %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/quicktoolbar-settings-custom-item/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/quicktoolbar-settings-custom-item/" %}

> `actionId` is the routing key. `toolbarSettings.itemClicked` is fired for
> every toolbar item (main and quick) — branch on
> `args.item.actionId` to dispatch the right command or run your custom
> handler. The public top-level `itemClick` event you may see in older
> guides does not exist on `RichTextEditorUI`; the public surface is
> `toolbarSettings.itemClicked`.

### Custom items in image / link / table quick toolbars

Custom items are accepted by `image`, `link`, and `table` as well. The
`link` and `image` arrays are unions that include `CustomToolbarItem`, so
the same shape works in every quick-toolbar context.

---

## 5. Available Items

The built-in quick-toolbar items are declared as typed unions in
`src/richtexteditor-ui/model/toolbar.types.ts`. Each quick-toolbar surface
accepts a different union — the union narrows the available identifiers
per surface so the compiler flags unsupported items.

### Link Quick Toolbar items (`LinkQuickToolbarItem`)

```ts
type LinkQuickToolbarItem = 'Open' | 'Copy' | 'Edit' | 'Remove' | '|' | CustomToolbarItem;
```

| Identifier | Behaviour |
| --- | --- |
| `Open` | Opens the link `href` in a new tab using the configured `target`. |
| `Copy` | Copies the link `href` to the clipboard. |
| `Edit` | Opens the Insert-Link dialog pre-filled with the current link. |
| `Remove` | Removes the link while keeping the link text. |
| `\|` | Visual separator used to split action groups inside the popup. |
| `CustomToolbarItem` | A user-defined item routed through `toolbarSettings.itemClicked`. |

### Table Quick Toolbar items (`TableQuickToolbarItem`)

```ts
type TableQuickToolbarItem = 'Row' | 'Column' | 'Header' | 'CellBackgroundColor' | 'VerticalAlign' | 'Align' | 'Remove' | '|' | CustomToolbarItem;
```

| Identifier | Behaviour |
| --- | --- |
| `Row` | Opens the row sub-popup (insert above / below, delete row). |
| `Column` | Opens the column sub-popup (insert left / right, delete column). |
| `Header` | Toggles the table header row. |
| `CellBackgroundColor` | Opens the background-color picker for the active cell. |
| `VerticalAlign` | Opens the vertical-align picker (top / middle / bottom). |
| `Align` | Opens the horizontal-align picker (left / center / right). |
| `Remove` | Deletes the table. |
| `\|` | Visual separator. |
| `CustomToolbarItem` | A user-defined item routed through `toolbarSettings.itemClicked`. |

### Image Quick Toolbar items (`ImageQuickToolbarItem`)

```ts
type ImageQuickToolbarItem = 'AltText' | 'Caption' | 'Align' | 'Display' | 'WrapText' | 'Dimension' | 'Replace' | 'Remove' | '|' | CustomToolbarItem;
```

| Identifier | Behaviour |
| --- | --- |
| `AltText` | Opens the Alt-Text editor for the selected image. |
| `Caption` | Toggles the image caption. |
| `Align` | Opens the alignment picker (left / center / right). |
| `Display` | Toggles the image display mode (`inline` / `block`). |
| `WrapText` | Toggles text-wrap around the image. |
| `Dimension` | Opens the dimension editor (width / height). |
| `Replace` | Opens the file picker to replace the image source. |
| `Remove` | Deletes the image. |
| `\|` | Visual separator. |
| `CustomToolbarItem` | A user-defined item routed through `toolbarSettings.itemClicked`. |

### Text Quick Toolbar items (`ToolbarItem`)

The Text Quick Toolbar accepts the full `ToolbarItem` union — every built-in
toolbar identifier, built-in-with-config objects, custom items, and the
`'|'` separator.

```ts
type ToolbarItem = BuiltInToolbarItem | BuiltInToolbarItemConfig | CustomToolbarItem | '|';
```

| Identifier | Behaviour |
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
| `\|` | Visual separator. |
| `CustomToolbarItem` | A user-defined item routed through `toolbarSettings.itemClicked`. |

> Built-in identifiers can also be wrapped in a
> `BuiltInToolbarItemConfig` to override the visible label:
> `{ item: 'Bold', text: 'Make Bold' }`.

---

## See also

* [Getting Started](getting-started.md) — set up the Modern Rich Text Editor
  in a TypeScript project and render the base `RichTextEditorUI` instance.
* [Migration](migration.md) — map legacy `RichTextEditor` settings over to
  the Modern `RichTextEditorUI` surface and the new `commands()` builder.
* [Inline Formats](inline-formats/options.md) — the `Bold`, `Italic`,
  `FontColor`, `BackgroundColor`, `Formats`, and other identifiers that the
  Text Quick Toolbar re-uses.
* [Table](table.md) — the Table Quick Toolbar rides on top of the
  `Table` toolbar item; this page covers the matching insert / resize
  behaviour.

