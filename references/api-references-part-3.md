# API Reference (Part 3) in Syncfusion JavaScript Modern Rich Text Editor

This file consolidates the third batch of API documentation pages for the Syncfusion JavaScript Modern Rich Text Editor (`RichTextEditorUI`) sourced from the Syncfusion EJ2 TypeScript API reference. Pages 37–57 below continue from `api-references.md` (Part 1, pages 1–18) and `api-references-part-2.md` (Part 2, pages 19–36).

## Table of contents

- [ChangeEventArgs](#changeeventargs)
- [CustomFormatListItem](#customformatlistitem)
- [UpdatedToolbarStatusEventArgs](#updatedtoolbarstatuseventargs)
- [itemClickEventArgs](#itemclickeventargs)
- [ValueFormat](#valueformat)
- [BackgroundColor](#backgroundcolor)
- [FontColor](#fontcolor)
- [BackgroundColorModel](#backgroundcolormodel)
- [FontColorModel](#fontcolormodel)
- [ColorModeType](#colormodetype)
- [ColorPickerType](#colorpickertype)
- [ImageSettings](#imagesettings)
- [ImageDisplayMode](#imagedisplaymode)
- [ImageSaveFormat](#imagesaveformat)
- [ImageSettingsModel](#imagesettingsmodel)
- [InteractionSettings](#interactionsettings)
- [InteractionSettingsModel](#interactionsettingsmodel)
- [EditorKeyBindingAction](#editorkeybindingaction)
- [LinkSettings](#linksettings)
- [LinkSettingsModel](#linksettingsmodel)
- [ListSettings](#listsettings)

## ChangeEventArgs

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/changeeventargs>

### Properties

#### `action`

`DocumentChangeAction`

Semantic action describing the nature of the change.

- `'Insertion'` — Content was added (typing, paste, insert command).
- `'Deletion'` — Content was removed (backspace, delete, remove command).
- `'Moved'` — Content was relocated (drag-drop, reorder, move command).
- `'Replaced'` — Content was swapped (find-replace, transform).
- `'Update'` — Attributes or formatting changed without structural change (heading level, text color).
- `'Unknown'` — Transaction too complex to categorize; examine `affectedNodes` for details.

#### `affectedNodes`

`EditorNode[]`

All Headless Editor nodes touched by this transaction. Populated based on action:

- `'Insertion'` — Newly inserted nodes and their ancestors.
- `'Deletion'` — Nodes that existed before deletion (for archival/undo preview).
- `'Moved'` — Relocated nodes.
- `'Replaced'` — Both old and new nodes.
- `'Update'` — Mutated nodes.
- `'Unknown'` — All nodes with changes (best effort).

#### `document`

`EditorDocument`

The document state after the change.

#### `selection`

`Selection`

The selection state after the change.

## CustomFormatListItem

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/customformatlistitem>

Custom dropdown item.

### Properties

#### `listType`

`string`

Custom CSS list-style-type value.

#### `text`

`string`

Text displayed in dropdown.

## UpdatedToolbarStatusEventArgs

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/updatedtoolbarstatuseventargs>

Event arguments for the `updatedToolbarStatus` event raised after the toolbar synchronizes its visual state (active buttons, dropdown values, color pickers) with the current editor selection / cursor formatting.

### Properties

#### `activeMarks`

`Object`

Snapshot of the active marks at the current selection.

#### `blockFormats`

`Object`

Snapshot of block-level formats at the current selection.

#### `styles`

`Object`

Resolved font / color values at the current selection.

## itemClickEventArgs

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/itemclickeventargs>

Event arguments for the `itemClick` event raised when a toolbar item is clicked.

### Properties

#### `actionId`

`string`

The action/command ID for the clicked item.

#### `item`

`ToolbarItem`

The toolbar item configuration.

#### `itemId`

`string`

Stable ID of the toolbar item that was clicked.

#### `originalEvent`

`MouseEvent | KeyboardEvent`

The originating DOM event.

## ValueFormat

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/valueformat>

Allowed value formats.

- `'html'` — value is an HTML string.
- `'json'` — value is an `EditorDocument` object.

Enum members:

- `html`
- `json`

## BackgroundColor

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/backgroundcolor>

Defines the configuration for the background color (text highlight color) picker.

### Properties

#### `columns`

`number`

Specifies the number of columns in the color palette.

Defaults to `5`.

#### `default`

`string`

Specifies the default background color.

Defaults to `'#FFF7C7'`.

#### `mode`

`ColorModeType`

Specifies the color mode.

Defaults to `'Palette'`.

#### `modeSwitcher`

`boolean`

Enables or disables the mode switcher button.

Defaults to `false`.

#### `preset`

`{ [key: string]: string[] }`

Specifies custom color codes keyed by group label.

Defaults to:

```text
{
  Custom: [
    '#000000', '#FFFFFF', '#FCE3E0', '#FFEDD4', '#EBF7D1', '#FFF7C7',
    '#DBF5E0', '#D6F5EB', '#D4F2F2', '#D4F0FA', '#DBEBFC', '#E0E5FC',
    '#E5E3FC', '#EDE0FC', '#F2E0FC', '#FAE0F2', '#FCE0E8', '#FCE0E3',
    '#F5EBDE', '#F7F2E0', '#F0F2DB', '#E5EBF0', '#EDEDED', '#E0E0E5',
    '#DEE0EB'
  ]
}
```

#### `showRecentColors`

`boolean`

Indicates whether the recent colors section is shown in the picker.

Defaults to `true`.

## FontColor

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/fontcolor>

Defines the configuration for the font color picker. Controls the default color, color palette, mode, number of columns, mode switcher, and recent-colors visibility shown in the `FontColor` toolbar item.

### Properties

#### `columns`

`number`

Specifies the number of columns in the color palette.

Defaults to `5`.

#### `default`

`string`

Specifies the default font color.

Defaults to `'#DC2626'`.

#### `mode`

`ColorModeType`

Specifies the color mode.

Defaults to `'Palette'`.

#### `modeSwitcher`

`boolean`

Enables or disables the mode switcher button.

Defaults to `false`.

#### `preset`

`{ [key: string]: string[] }`

Specifies custom color codes keyed by group label.

Defaults to:

```text
{
  Custom: [
    '#000000', '#FFFFFF', '#DC2626', '#B8590D', '#8C7000', '#5B21B6',
    '#4D700F', '#1F7333', '#146B52', '#0D6666', '#0A6185', '#1A5499',
    '#2640A6', '#383399', '#612E9E', '#732494', '#941F6B', '#9E2447',
    '#992938', '#704724', '#7A612E', '#5C611F', '#404C61', '#4D4D4D',
    '#242947'
  ]
}
```

#### `showRecentColors`

`boolean`

Indicates whether the recent colors section is shown in the picker.

Defaults to `true`.

## BackgroundColorModel

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/backgroundcolormodel>

Interface for the class `BackgroundColor`.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| `columns` | `number` | Specifies the number of columns in the color palette. |
| `default` | `string` | Specifies the default background color. |
| `mode` | `ColorModeType` | Specifies the color mode. |
| `modeSwitcher` | `boolean` | Enables or disables the mode switcher button. |
| `preset` | `{ [key: string]: string[] }` | Specifies custom color codes keyed by group label. |
| `showRecentColors` | `boolean` | Indicates whether the recent colors section is shown in the picker. |

## FontColorModel

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/fontcolormodel>

Interface for the class `FontColor`.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| `columns` | `number` | Specifies the number of columns in the color palette. |
| `default` | `string` | Specifies the default font color. |
| `mode` | `ColorModeType` | Specifies the color mode. |
| `modeSwitcher` | `boolean` | Enables or disables the mode switcher button. |
| `preset` | `{ [key: string]: string[] }` | Specifies custom color codes keyed by group label. |
| `showRecentColors` | `boolean` | Indicates whether the recent colors section is shown in the picker. |

## ColorModeType

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/colormodetype>

Enumerates the color picker display modes supported by the font color and background color pickers.

- `Palette` — Renders a fixed swatch grid.
- `Picker` — Renders an inline color picker only (no palette).

Enum members:

- `Palette`
- `Picker`

## ColorPickerType

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/colorpickertype>

Identifies which editor color picker triggered an event or is being referenced in a payload.

Enum members:

- `FontColor`
- `BackgroundColor`

## ImageSettings

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/imagesettings>

Configures the image settings of the RichTextEditor.

### Properties

#### `allowedTypes`

`string[]`

Specifies the image file extensions that can be selected, dropped, pasted, or uploaded. API names use TypeScript camel casing.

Defaults to `['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp']`.

#### `dimension`

`ImageDimensionOptions`

Specifies the default and permitted dimensions of an image.

Defaults to `{ width: 'auto', height: 'auto', minWidth: 0, maxWidth: null, minHeight: 0, maxHeight: null }`.

#### `display`

`ImageDisplayMode`

Specifies how an image is positioned in the editor content. Possible values are:

- `inline` — Places the image within the current text flow.
- `break` — Places the image on a separate line.

Defaults to `'inline'`.

#### `imageUrl`

`string | null`

Specifies the public base URL used to resolve uploaded image names returned by the server. For example, when `imageUrl` is `/uploads/images/` and the server returns `sample.png`, the resulting source is `/uploads/images/sample.png`.

Defaults to `null`.

#### `maxFileSize`

`number`

Specifies the maximum permitted image file size, in bytes.

Defaults to `30000000`.

#### `removeUrl`

`string | null`

Specifies the server endpoint used to remove an uploaded image.

Defaults to `null`.

#### `resize`

`boolean`

Specifies whether users can resize images in the editor.

Defaults to `true`.

#### `saveFormat`

`ImageSaveFormat`

Specifies how local images are represented when an upload endpoint is not configured. Possible values are:

- `Blob` — Creates a temporary object URL for the image.
- `Base64` — Embeds the image as a Base64 data URL.

Defaults to `'Blob'`.

#### `uploadUrl`

`string | null`

Specifies the server endpoint used to upload image files. When this property is not configured, the editor uses `saveFormat` to create a local image source.

Defaults to `null`.

## ImageDisplayMode

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/imagedisplaymode>

Default display mode for inserted images.

- `'inline'` — Places the image within the current text flow.
- `'break'` — Places the image on a separate line.

Enum members:

- `inline`
- `break`

## ImageSaveFormat

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/imagesaveformat>

Local representation chosen for the next image insertion when the editor uses a local proxy source (no `uploadUrl`).

Enum members:

- `Blob`
- `Base64`

## ImageSettingsModel

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/imagesettingsmodel>

Interface for the class `ImageSettings`.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| `allowedTypes` | `string[]` | Specifies the image file extensions that can be selected, dropped, pasted, or uploaded. API names use TypeScript camel casing. |
| `dimension` | `ImageDimensionOptions` | Specifies the default and permitted dimensions of an image. |
| `display` | `ImageDisplayMode` | Specifies how an image is positioned in the editor content. Possible values are: `inline` (places the image within the current text flow); `break` (places the image on a separate line). |
| `imageUrl` | `string \| null` | Specifies the public base URL used to resolve uploaded image names returned by the server. For example, when `imageUrl` is `/uploads/images/` and the server returns `sample.png`, the resulting source is `/uploads/images/sample.png`. |
| `maxFileSize` | `number` | Specifies the maximum permitted image file size, in bytes. |
| `removeUrl` | `string \| null` | Specifies the server endpoint used to remove an uploaded image. |
| `resize` | `boolean` | Specifies whether users can resize images in the editor. |
| `saveFormat` | `ImageSaveFormat` | Specifies how local images are represented when an upload endpoint is not configured. Possible values are: `Blob` (creates a temporary object URL for the image); `Base64` (embeds the image as a Base64 data URL). |
| `uploadUrl` | `string \| null` | Specifies the server endpoint used to upload image files. When this property is not configured, the editor uses `saveFormat` to create a local image source. |

## InteractionSettings

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/interactionsettings>

Configures the Intereactions settings of the RichTextEditor.

### Properties

#### `enableAutoFormat`

`boolean`

Specifies whether Markdown-style auto formatting is enabled while typing. When `true`, supported Markdown-style syntax entered at the beginning of a block is converted into the corresponding editor structure (for example `#`, `##`, `>`, `-`, `1.`, ` ``` `).

Defaults to `true`.

#### `enableTabKeyIndent`

`boolean`

Specifies whether the Tab and Shift+Tab keys can be used for indentation. When `true`:

- `Tab` at the beginning of a supported block indents the block.
- `Shift+Tab` at the beginning of a supported block outdents the block.
- `Tab` in the middle of a block inserts tab spacing at the cursor position.

If the current selection does not support indentation or tab spacing, normal browser focus navigation is preserved.

When `false`, Tab and Shift+Tab do not trigger editor indentation.

Defaults to `true`.

## InteractionSettingsModel

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/interactionsettingsmodel>

Interface for the class `InteractionSettings`.

### Properties

#### `enableAutoFormat`

`boolean`

Specifies whether Markdown-style auto formatting is enabled while typing. When `true`, supported Markdown-style syntax entered at the beginning of a block is converted into the corresponding editor structure (for example `#`, `##`, `>`, `-`, `1.`, ` ``` `).

#### `enableTabKeyIndent`

`boolean`

Specifies whether the Tab and Shift+Tab keys can be used for indentation. When `true`:

- `Tab` at the beginning of a supported block indents the block.
- `Shift+Tab` at the beginning of a supported block outdents the block.
- `Tab` in the middle of a block inserts tab spacing at the cursor position.

If the current selection does not support indentation or tab spacing, normal browser focus navigation is preserved.

When `false`, Tab and Shift+Tab do not trigger editor indentation.

## EditorKeyBindingAction

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

## LinkSettings

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/linksettings>

Configures the link settings of the RichTextEditor.

### Properties

#### `allowedProtocols`

`string[]`

Specifies the list of allowed protocols for link URLs. URLs with a protocol outside this list are rejected. Relative URLs, query strings, and fragments skip this validation.

Defaults to `['http', 'https', 'mailto', 'tel']`.

#### `autoPrependProtocol`

`boolean`

Specifies whether to automatically prepend a protocol (such as `https://`) to URLs that do not contain one.

Defaults to `true`.

#### `defaultProtocol`

`string`

Specifies the protocol to prepend when `autoPrependProtocol` is enabled and the URL lacks a protocol.

Defaults to `'https'`.

#### `defaultTarget`

`string`

Specifies the default target for newly created links. Possible values: `''`, `'_self'`, `'_blank'`, `'_parent'`, `'_top'`.

Defaults to `'_blank'`.

#### `linkOnPaste`

`boolean`

Specifies whether pasting a URL over selected text converts it into a link.

Defaults to `true`.

## LinkSettingsModel

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/linksettingsmodel>

Interface for the class `LinkSettings`.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| `allowedProtocols` | `string[]` | Specifies the list of allowed protocols for link URLs. URLs with a protocol outside this list are rejected. Relative URLs, query strings, and fragments skip this validation. |
| `autoPrependProtocol` | `boolean` | Specifies whether to automatically prepend a protocol (such as `https://`) to URLs that do not contain one. |
| `defaultProtocol` | `string` | Specifies the protocol to prepend when `autoPrependProtocol` is enabled and the URL lacks a protocol. |
| `defaultTarget` | `string` | Specifies the default target for newly created links. Possible values: `''`, `'_self'`, `'_blank'`, `'_parent'`, `'_top'`. |
| `linkOnPaste` | `boolean` | Specifies whether pasting a URL over selected text converts it into a link. |

## ListSettings

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/listsettings>

### Properties

#### `bulletFormatListItems`

`BulletFormatListItem[]`

Defines the items displayed in the `BulletFormatList` dropdown.

Defaults to `BulletFormatLists`.

#### `numberFormatListItems`

`NumberFormatListItem[]`

Defines the items displayed in the `NumberFormatList` dropdown.

Defaults to `NumberFormatLists`.