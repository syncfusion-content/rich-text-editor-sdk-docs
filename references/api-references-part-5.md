# API Reference (Part 5) in Syncfusion JavaScript Modern Rich Text Editor

This file consolidates the fifth batch of API documentation pages for the Syncfusion JavaScript Modern Rich Text Editor (`RichTextEditorUI`) sourced from the Syncfusion EJ2 TypeScript API reference. Pages 81–104 below continue from `api-references.md` (Part 1), `api-references-part-2.md` (Part 2), `api-references-part-3.md` (Part 3), and `api-references-part-4.md` (Part 4).

## Table of contents

- [BuiltInToolbarItemConfig](#builtintoolbaritemconfig)
- [CustomToolbarItem](#customtoolbaritem)
- [DisableToolbarItem](#disabletoolbaritem)
- [EnableToolbarItem](#enabletoolbaritem)
- [FontFamilyItem](#fontfamilyitem)
- [FontSizeItem](#fontsizeitem)
- [HideToolbarItem](#hidetoolbaritem)
- [RemoveToolbarItem](#removetoolbaritem)
- [ShowToolbarItem](#showtoolbaritem)
- [BuiltInToolbarItem](#builtintoolbaritem)
- [ImageQuickToolbarItem](#imagequicktoolbaritem)
- [LinkQuickToolbarItem](#linkquicktoolbaritem)
- [TableQuickToolbarItem](#tablequicktoolbaritem)
- [ToolbarItem](#toolbaritem)
- [ToolbarItemUpdate](#toolbaritemupdate)
- [ToolbarPosition](#toolbarposition)
- [ToolbarType](#toolbartype)
- [RichTextEditorUIModel](#richtexteditoruimodel)
- [EditorDocument](#editordocument)
- [BlockNode](#blocknode)
- [EditorMark](#editormark)
- [InlineNode](#inlinenode)
- [TextAlignment](#textalignment)
- [StaticFunctions](#staticfunctions)

## BuiltInToolbarItemConfig

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/builtintoolbaritemconfig>

Configuration for a built-in toolbar item. Helps align built-in items with `ItemModel` properties.

### Properties

#### `align`

`ItemAlign`

Specifies the location for aligning Toolbar items on the Toolbar. Each command will be aligned according to the `align` property.

- `Left` — To align commands to the left side of the Toolbar.
- `Center` — To align commands at the center of the Toolbar.
- `Right` — To align commands to the right side of the Toolbar.

```ts
let toolbar: Toolbar = new Toolbar({
    items: [
        { text: "Home" },
        { text: "My Home Page", align: 'Center' },
        { text: "Search", align: 'Right' },
        { text: "Settings", align: 'Right' }
    ]
});
toolbar.appendTo('#element');
```

#### `cssClass`

`string`

Defines single/multiple classes (separated by space) to be used for customization of commands.

#### `disabled`

`boolean`

Specifies whether an item should be disabled or not.

#### `htmlAttributes`

`{ [key: string]: string }`

Defines `htmlAttributes` used to add custom attributes to Toolbar command. Supports HTML attributes such as `style`, `class`, etc.

#### `id`

`string`

Specifies the unique ID to be used with button or input element of Toolbar items.

#### `item`

`BuiltInToolbarItem`

The built-in toolbar item name.

#### `overflow`

`OverflowOption`

Specifies the Toolbar command display area when an element's content is too large to fit available space. This is applicable only to popup mode.

- `Show` — Always shows the item as the primary priority on the Toolbar.
- `Hide` — Always shows the item as the secondary priority on the popup.
- `None` — No priority for display, and as per normal order moves to popup when content exceeds.

#### `prefixIcon`

`string`

Defines single/multiple classes separated by space used to specify an icon for the button. The icon will be positioned before the text content if text is available, otherwise the icon alone will be rendered.

#### `showAlwaysInPopup`

`boolean`

Defines the priority of items to display it in popup always. It allows to maintain toolbar item on popup always but it does not work for toolbar priority items.

#### `showTextOn`

`DisplayMode`

Specifies where the button text will be displayed on popup mode of the Toolbar.

- `Toolbar` — Text will be displayed on Toolbar only.
- `Overflow` — Text will be displayed only when content overflows to popup.
- `Both` — Text will be displayed on popup and Toolbar.

#### `suffixIcon`

`string`

Defines single/multiple classes separated by space used to specify an icon for the button. The icon will be positioned after the text content if text is available.

#### `tabIndex`

`number`

Specifies the tab order of the Toolbar items. When positive values assigned, it allows to switch focus to the next/previous toolbar items with Tab/ShiftTab keys. By default, user can able to switch between items only via arrow keys. If the value is set to 0 for all tool bar items, then tab switches based on element order.

#### `template`

`string | Object | Function`

Specifies the HTML element/element ID as a string that can be added as a Toolbar command.

```ts
items: [{ template: '<input placeholder="Search"/>' }, { template: '#checkbox1' }]
```

#### `text`

`string`

Specifies the text to be displayed on the Toolbar button.

#### `tooltipText`

`string`

Specifies the text to be displayed on hovering the Toolbar button.

#### `type`

`ItemType`

Specifies the types of command to be rendered in the Toolbar.

- `Button` — Creates the Button control with its given properties like `text`, `prefixIcon`, etc.
- `Separator` — Adds a horizontal line that separates the Toolbar commands.
- `Input` — Creates an input element that is applicable to template rendering with Syncfusion controls like DropDownList, AutoComplete, etc.

#### `visible`

`boolean`

Specifies whether an item should be hidden or not.

#### `width`

`number | string`

Specifies the width of the Toolbar button commands.

### Events

#### `click`

`EmitType<ClickEventArgs>`

Event triggers when click the toolbar item.

## CustomToolbarItem

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/customtoolbaritem>

Custom toolbar item with user-defined action.

### Properties

#### `actionId`

`string`

Unique identifier for the custom toolbar item. Used to distinguish items and handle `itemClick` events.

#### `align`

`ItemAlign`

Specifies the location for aligning Toolbar items on the Toolbar.

- `Left` — To align commands to the left side of the Toolbar.
- `Center` — To align commands at the center of the Toolbar.
- `Right` — To align commands to the right side of the Toolbar.

#### `cssClass`

`string`

Defines single/multiple classes (separated by space) to be used for customization of commands.

#### `disabled`

`boolean`

Specifies whether an item should be disabled or not.

#### `htmlAttributes`

`{ [key: string]: string }`

Defines `htmlAttributes` used to add custom attributes to Toolbar command.

#### `id`

`string`

Specifies the unique ID to be used with button or input element of Toolbar items.

#### `macShortcutText`

`string`

Keyboard shortcut tooltip for macOS.

#### `overflow`

`OverflowOption`

Specifies the Toolbar command display area when content is too large to fit available space. Applicable only to popup mode.

- `Show` — Primary priority on the Toolbar.
- `Hide` — Secondary priority on the popup.
- `None` — No priority.

#### `prefixIcon`

`string`

Defines single/multiple classes separated by space used to specify an icon for the button. The icon will be positioned before the text content if text is available, otherwise the icon alone will be rendered.

#### `showAlwaysInPopup`

`boolean`

Defines the priority of items to display it in popup always. Does not work for toolbar priority items.

#### `showTextOn`

`DisplayMode`

- `Toolbar` — Text on Toolbar only.
- `Overflow` — Text on overflow only.
- `Both` — Text on popup and Toolbar.

#### `suffixIcon`

`string`

Defines single/multiple classes separated by space used to specify an icon for the button. The icon will be positioned after the text content if text is available.

#### `tabIndex`

`number`

Specifies the tab order of the Toolbar items. Supports positive values to enable Tab/ShiftTab key navigation; `0` switches based on element order.

#### `template`

`string | Object | Function`

Specifies the HTML element/element ID as a string that can be added as a Toolbar command.

#### `text`

`string`

Specifies the text to be displayed on the Toolbar button.

#### `tooltipText`

`string`

Specifies the text to be displayed on hovering the Toolbar button.

#### `type`

`ItemType`

- `Button` — Button control with its given properties.
- `Separator` — Horizontal line separator.
- `Input` — Input element for Syncfusion controls (DropDownList, AutoComplete, etc.).

#### `visible`

`boolean`

Specifies whether an item should be hidden or not.

#### `width`

`number | string`

Specifies the width of the Toolbar button commands.

#### `windowsShortcutText`

`string`

Keyboard shortcut tooltip for Windows.

### Events

#### `click`

`EmitType<ClickEventArgs>`

Event triggers when click the toolbar item.

## DisableToolbarItem

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/disabletoolbaritem>

Disables a toolbar item by ID.

### Properties

#### `itemId`

`string`

Stable ID of the item to disable.

## EnableToolbarItem

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/enabletoolbaritem>

Enables a toolbar item by ID.

### Properties

#### `itemId`

`string`

Stable ID of the item to enable.

## FontFamilyItem

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/fontfamilyitem>

Typed interface for font family dropdown items. Represents a single font family option with family name and editor command.

### Properties

#### `command`

`string`

Editor command to execute (must be `'fontName'`).

#### `id`

`string`

Unique identifier for the dropdown menu item.

#### `text`

`string`

Display text for the item (e.g., `'Arial'`).

#### `value`

`string`

Font family value payload with font name (e.g., `{ family: 'Arial' }`).

## FontSizeItem

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/fontsizeitem>

Typed interface for font size dropdown items. Represents a single font size option with numeric value and editor command.

### Properties

#### `command`

`string`

Editor command to execute (must be `'fontSize'`).

#### `id`

`string`

Unique identifier for the dropdown menu item.

#### `text`

`string`

Display text for the item (e.g., `'14'`).

#### `value`

`string`

Font size value payload with CSS unit (e.g., `{ size: '14px' }`).

## HideToolbarItem

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/hidetoolbaritem>

Hides a toolbar item by ID.

### Properties

#### `itemId`

`string`

Stable ID of the item to hide.

## RemoveToolbarItem

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/removetoolbaritem>

Removes a toolbar item by ID.

### Properties

#### `index`

`number`

Index of the item to remove.

#### `itemId`

`string`

Stable ID of the item to remove.

## ShowToolbarItem

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/showtoolbaritem>

Shows a toolbar item by ID.

### Properties

#### `itemId`

`string`

Stable ID of the item to show.

## BuiltInToolbarItem

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/builtintoolbaritem>

Built-in toolbar item names for common editor commands.

### Enum members

`Undo`, `Redo`, `Bold`, `Italic`, `Underline`, `Strikethrough`, `Subscript`, `Superscript`, `UpperCase`, `LowerCase`, `HorizontalLine`, `InlineCode`, `Formats`, `FontSize`, `FontColor`, `BackgroundColor`, `FontName`, `BulletList`, `NumberedList`, `NumberFormatList`, `BulletFormatList`, `Checklist`, `Alignment`, `Quote`, `CodeBlock`, `Callout`, `Link`, `Image`, `Table`, `ClearFormat`, `Heading 1`, `Heading 2`, `Heading 3`, `Heading 4`, `Paragraph`, `Indent`, `Outdent`, `AlignLeft`, `AlignCenter`, `AlignRight`, `AlignJustify`, `CalloutInfo`, `CalloutSuccess`, `CalloutWarning`, `CalloutError`, `CalloutNote`.

## ImageQuickToolbarItem

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/imagequicktoolbaritem>

Built-in items exposed by the Image Quick Toolbar.

### Enum members

`AltText`, `Caption`, `Align`, `Display`, `WrapText`, `Dimension`, `Replace`, `Remove`, `|`, `CustomToolbarItem`.

## LinkQuickToolbarItem

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/linkquicktoolbaritem>

Built-in items exposed by the Link Quick Toolbar.

### Enum members

`Open`, `Copy`, `Edit`, `Remove`, `|`, `CustomToolbarItem`.

## TableQuickToolbarItem

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/tablequicktoolbaritem>

Built-in items exposed by the Table Quick Toolbar.

### Enum members

`Row`, `Column`, `Header`, `CellBackgroundColor`, `VerticalAlign`, `Align`, `Remove`, `|`, `CustomToolbarItem`.

## ToolbarItem

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/toolbaritem>

Union type for toolbar items. Accepts built-in items by name, custom configurations, custom items, or separators.

### Union members

`BuiltInToolbarItem`, `BuiltInToolbarItemConfig`, `CustomToolbarItem`, `|`.

## ToolbarItemUpdate

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/toolbaritemupdate>

Discriminated union for toolbar item update operations. Used during reconciliation of items array changes and direct toolbar updates.

### Union members

`AddToolbarItem`, `RemoveToolbarItem`, `ShowToolbarItem`, `HideToolbarItem`, `EnableToolbarItem`, `DisableToolbarItem`.

## ToolbarPosition

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/toolbarposition>

Defines the toolbar vertical position relative to editor.

### Enum members

`Top`, `Bottom`.

## ToolbarType

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/toolbartype>

Defines the toolbar overflow and layout behavior.

### Enum members

`Auto`, `Expanded`, `MultiRow`, `Scrollable`.

## RichTextEditorUIModel

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/richtexteditoruimodel>

Interface for a class `RichTextEditorUI`. The full configuration model for the editor root component.

### Properties

#### `backgroundColor`

`BackgroundColorModel`

Configures the background color (text highlight color) picker settings in the Rich Text Editor. This property controls the color palette, default background color selection, color picker mode (`Palette` or `Picker`), number of columns in the palette, mode switcher visibility, and recent colors functionality. Uses the same configuration shape as `fontColor`.

#### `cssClass`

`string`

Specifies custom CSS classes to be applied to the Rich Text Editor root element. Multiple classes can be separated by spaces to apply multiple CSS classes for custom styling.

#### `enable`

`boolean`

Enable or disable the Rich Text Editor. When set to `false`, the editor becomes non-interactive and all toolbar items are disabled. The editable area remains visible but input is prevented.

#### `enablePersistence`

`boolean`

Enables persistence for the Editor state. When set to `true`, the editor state (including content) is persisted across page reloads using the browser's local storage.

#### `enableRtl`

`boolean`

Enables right-to-left (RTL) text direction for the Rich Text Editor. When set to `true`, the editor layout, toolbar, and content direction are flipped to support RTL languages like Arabic and Hebrew.

#### `fontColor`

`FontColorModel`

Configures the font color picker settings in the Rich Text Editor. This property controls the color palette, default color selection, color picker mode (`Palette` or `Picker`), number of columns in the palette, mode switcher visibility, and recent colors functionality shown in the FontColor toolbar item.

#### `fontFamily`

`FontFamilyModel`

Defines the font family settings of the Rich Text Editor. Configures the font family dropdown items, default font family selection, and the width of the font family dropdown in the toolbar.

```ts
const editor: RichTextEditorUI = new RichTextEditorUI({
    fontFamily: {
        width: "72px",
        items: [
            { text: 'Default', value: 'Default' },
            { text: 'Arial', value: 'Arial' },
            { text: 'Helvetica', value: 'Helvetica' },
            { text: 'Times New Roman', value: 'Times New Roman' },
            { text: 'Courier New', value: 'Courier New' }
        ]
    },
    toolbarSettings: { items: ['FontName'] }
});
editor.appendTo("#editor");
```

#### `fontSize`

`FontSizeModel`

Defines the font size settings of the Rich Text Editor. Configures the font size dropdown items, default font size selection, and the width of the font size dropdown in the toolbar.

```ts
const editor: RichTextEditorUI = new RichTextEditorUI({
    fontSize: {
        width: "60px",
        items: [
            { text: 'Default', value: 'Default' },
            { text: '8', value: '8px' },
            { text: '10', value: '10px' },
            { text: '12', value: '12px' },
            { text: '14', value: '14px' },
            { text: '16', value: '16px' },
            { text: '18', value: '18px' },
            { text: '24', value: '24px' }
        ]
    },
    toolbarSettings: { items: ['FontSize'] }
});
editor.appendTo("#editor");
```

#### `format`

`FormatModel`

Defines the Format toolbar item configuration for the Rich Text Editor. This property controls the formatting options available in the Format dropdown menu in the toolbar.

#### `height`

`string | number`

Sets the Rich Text Editor height. The height can be specified in pixels, percentages, or other valid CSS units. When set to `'auto'`, the height adjusts automatically based on the content.

#### `htmlAttributes`

`{ [key: string]: string }`

Sets custom HTML attributes on the Rich Text Editor root element. This property accepts a key-value pair object where keys are attribute names and values are attribute values.

#### `imageSettings`

`ImageSettingsModel`

Configures image upload, validation, storage, display, dimensions, and resize behavior in the Rich Text Editor. This property controls all aspects of image handling including file type validation, size restrictions, server endpoints for upload and removal, storage format, display mode, and resize capabilities.

Properties:

- `allowedTypes` — Image file extensions that may be selected, dropped, pasted, or uploaded. Defaults to `['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp']`.
- `maxFileSize` — Maximum image file size in bytes. Defaults to `30000000` (30 MB).
- `uploadUrl` — Server endpoint used to upload image files via POST request. When `null`, `editor.uploadFile()` fails with `fileUploadFailed` event.
- `removeUrl` — Server endpoint used to remove a previously uploaded image from the server.
- `imageUrl` — Base URL for resolving uploaded image names returned by the server into full image URLs.
- `saveFormat` — Storage format for inserted images: `'Blob'` (object URL) or `'Base64'` (data URI). Defaults to `'Blob'`.
- `display` — Display mode for images: `'inline'` (within text flow) or `'break'` (block-level). Defaults to `'inline'`.
- `dimension` — Plain object with `width`, `height`, `minWidth`, `maxWidth`, `minHeight`, `maxHeight` properties. Replace the whole object on update.
- `resize` — Whether users may resize images in the editor. Defaults to `true`.

#### `interactionSettings`

`InteractionSettingsModel`

Configures editor interaction behaviors and user interaction preferences. These settings control interaction behavior only and must not change the persisted document format or content structure. They affect how the editor responds to user actions like typing, pasting, and keyboard events.

#### `keyBindings`

`EditorKeyBindingMap`

Overrides the registered editor keyboard bindings. On macOS, configured `ctrl` modifiers are mapped to the equivalent Command modifier automatically; separate Mac bindings are not required.

#### `linkSettings`

`LinkSettingsModel`

Defines the Link settings of the Editor. The link settings govern how hyperlinks are created, normalized, and validated within the editable area — covering automatic link creation when a URL is pasted over selected text, the default target applied to newly created links, protocol normalization for external URLs, and validation of accepted protocols.

Use this property to:

- Toggle automatic link creation on paste via `LinkSettings.linkOnPaste`.
- Configure the default target for newly created links via `LinkSettings.defaultTarget`.
- Control protocol normalization for URLs missing a protocol via `LinkSettings.autoPrependProtocol` and `LinkSettings.defaultProtocol`.
- Restrict accepted URL protocols via `LinkSettings.allowedProtocols` to guard against unsafe schemes such as `javascript:`.

```ts
const editor: RichTextEditorUI = new RichTextEditorUI({
    linkSettings: {
        linkOnPaste: false,
        defaultTarget: "_self",
        allowedProtocols: ["http", "https", "mailto", "tel"],
        defaultProtocol: "http",
        autoPrependProtocol: true
    }
});
editor.appendTo("#editor");
```

#### `listSettings`

`ListSettingsModel`

Defines the List settings of the Rich Text Editor. This property controls the items shown in the NumberFormatList and BulletFormatList toolbar dropdowns, allowing customization of available list formatting options.

#### `locale`

`string`

Sets the locale (language and region) for the Rich Text Editor. This affects the language of toolbar tooltips, placeholder text, dialog labels, and error messages displayed in the editor.

#### `placeholder`

`string`

Sets the placeholder text displayed in the editor's editable area when it is empty. The placeholder provides a hint to users about the expected content or format.

#### `quickToolbarSettings`

`QuickToolbarSettingsModel`

Defines the Quick Toolbar settings of the Rich Text Editor. The quick toolbar is a contextual popup toolbar that appears next to the current text selection within the editable area, providing fast access to the most relevant formatting commands without moving focus back to the main toolbar.

Use this property to:

- Toggle the quick toolbar on or off via `QuickToolbarSettings.enable`.
- Configure the items displayed on text selection via `QuickToolbarSettings.text`.
- Control popup attachment via `QuickToolbarSettings.enableAppendToBody` to avoid clipping inside narrow or scroll-constrained containers.
- Configure the items displayed for selected images via `QuickToolbarSettings.image`.
- Configure the items displayed for selected links via `QuickToolbarSettings.link`.
- Configure the items displayed for selected tables via `QuickToolbarSettings.table`.

#### `readonly`

`boolean`

Enable or disable the read-only mode for the Rich Text Editor. When set to `true`, the editor content becomes read-only and toolbar items are disabled, preventing user input while maintaining visibility of the editor and its content.

#### `saveInterval`

`number`

Specifies the idle interval in milliseconds before autosave commits dirty (unsaved) content. This property only has an effect when `enableAutoSave` is set to `true`. When the user remains idle for this duration, the editor content is automatically saved.

#### `slashCommandSettings`

`SlashCommandSettingsModel`

Configures the slash command settings of the Rich Text Editor. Typing `/` in the editor content opens an inline command popup with predefined and custom formatting items. This feature enables quick access to block-level formatting commands without accessing the main toolbar.

Properties:

- `enable` — Specifies whether the slash command feature is enabled or disabled.
- `items` — An array specifying the items displayed in the slash command popup (e.g., `'Paragraph'`, `'Heading 1'`, `'BulletList'`).
- `popupWidth` — Width of the slash command popup. Accepts pixels, numbers, or percentages.
- `popupHeight` — Height of the slash command popup. Accepts pixels, numbers, or percentages.

#### `tableSettings`

`TableSettingsModel`

Configures the Table insertion feature. Controls whether table cells can be resized after insertion.

#### `toolbarSettings`

`ToolbarSettingsModel`

Defines the Toolbar settings of the Rich Text Editor. This property controls the toolbar configuration, including the items displayed, their grouping, and visibility. Use this to customize toolbar appearance and behavior based on your application's requirements.

```ts
const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        enable: true,
        items: [
            'Undo', 'Redo', '|',
            'Bold', 'Italic', 'Underline', 'Strikethrough', 'InlineCode', '|',
            'Link', 'Image', 'Table', 'CodeBlock', 'HorizontalLine', 'Quote', '|',
            'Formats', 'Alignment', 'Callout', '|',
            'BulletFormatList', 'NumberFormatList', 'Checklist', '|',
            'Outdent', 'Indent', '|',
            'FontColor', 'BackgroundColor', 'FontName', 'FontSize', '|',
            'LowerCase', 'UpperCase', '|',
            'Superscript', 'Subscript', '|',
            'ClearFormat'
        ],
        type: 'Auto',
        position: 'Top',
        enableFloating: true,
        floatingOffset: 0
    }
});
editor.appendTo("#editor");
```

#### `undoRedoSteps`

`number`

Specifies the maximum number of undo history steps stored in the editor. Each step corresponds to a user action or batch of compatible adjacent actions. Increasing this value allows more undo actions at the cost of increased memory.

#### `undoRedoTimer`

`number`

Specifies the time interval in milliseconds used by the editor to group compatible adjacent changes into a single undo/redo step. Changes that occur within this interval are grouped together, creating a single undoable action. This improves the user experience by preventing excessive undo steps for rapid consecutive changes.

#### `value`

`string | EditorDocument`

Editor content. The accepted type depends on `valueFormat`:

- `'html'` — an HTML string.
- `'json'` — an `EditorDocument` object.

#### `valueFormat`

`ValueFormat`

Specifies the format used by the `value` property and getter methods. Controls how the editor content is serialized and deserialized.

- `html` — The value is an HTML string representation of the editor content.
- `json` — The value is an `EditorDocument` object representing the document structure.

#### `width`

`string | number`

Sets the Rich Text Editor width. The width can be specified in pixels, percentages, or other valid CSS units. When set to `'100%'`, the editor expands to fill its parent container width.

### Events

#### `actionBegin`

`EmitType<ActionBeginEventArgs>`

Raised before an action-driven mutation is executed. This event allows prevention of user actions like formatting changes by setting `args.cancel = true`.

#### `actionComplete`

`EmitType<ActionCompleteEventArgs>`

Raised after an accepted action-driven mutation has been successfully processed and applied to the document. This event fires only when the action is not cancelled in the `actionBegin` event.

#### `beforeDialogClose`

`EmitType<BeforeDialogCloseEventArgs>`

This event triggers before a dialog is closed. Cancel this event to prevent the dialog from closing by setting the `cancel` argument to `true`. `source` identifies the editor feature that owns the dialog, such as `Link`, `Image`, or `Table`.

#### `beforeDialogOpen`

`EmitType<BeforeDialogOpenEventArgs>`

This event triggers before a dialog is opened. Cancel this event to prevent the dialog from opening by setting the `cancel` argument to `true`. `source` identifies the editor feature that owns the dialog, such as `Link`, `Image`, or `Table`.

#### `beforeFileDrop`

`EmitType<BeforeFileDropEventArgs>`

Raised before drop/paste-inserted files are routed through the typed command pipeline. Set `args.cancel = true` to keep the document untouched. The event args are `BeforeFileDropEventArgs`.

#### `beforeFileUpload`

`EmitType<BeforeFileUploadEventArgs>`

Triggers before a file is uploaded to the server. Cancel this event to prevent the upload by setting the `cancel` argument to `true`. The `source` field identifies the feature that owns the upload, such as `Image`. See `BeforeFileUploadEventArgs` for the complete list of event arguments.

#### `blur`

`EmitType<BlurEventArgs>`

Raised when focus leaves the Rich Text Editor shell. This event fires when the user moves focus away from the editor to another element.

#### `change`

`EmitType<ChangeEventArgs>`

Raised when a dirty (modified) value is committed to the document. This event fires on blur (when focus leaves the editor) or on autosave if autosave is enabled.

#### `created`

`EmitType<Object>`

Raised when the Rich Text Editor has completed initialization and is ready for user interaction. At this point, all internal modules have been initialized and the editor is fully operational.

#### `destroyed`

`EmitType<Object>`

Raised when the Rich Text Editor has been destroyed. This event fires after all resources have been cleaned up and the Rich Text Editor is no longer functional.

#### `fileRemoving`

`EmitType<FileRemovingEventArgs>`

Triggers before a previously-uploaded image is removed (client-side `URL.revokeObjectURL` for `saveFormat: 'Blob'`, or before the `removeUrl` POST is sent for server-side removal). Set `args.cancel = true` to keep the image in place; both the Blob revocation and the `removeUrl` POST will be skipped. The event args are `FileRemovingEventArgs`.

#### `fileSelected`

`EmitType<FileSelectedEventArgs>`

Triggers when files are selected for upload. See `FileSelectedEventArgs` for the complete list of event arguments.

#### `fileUploadFailed`

`EmitType<FileUploadFailedEventArgs>`

This event triggers when there is an error during media upload. See `FileUploadFailedEventArgs` for the complete list of event arguments.

#### `fileUploadSuccess`

`EmitType<FileUploadSuccessEventArgs>`

This event triggers when file has been successfully uploaded to the server side. See `FileUploadSuccessEventArgs` for the complete list of event arguments.

#### `fileUploading`

`EmitType<FileUploadingEventArgs>`

Triggers while a file is being uploaded to the server.

#### `focus`

`EmitType<FocusEventArgs>`

Raised when the Rich Text Editor receives focus.

## EditorDocument

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/editordocument>

Public document model — the same shape used for `value` when `valueFormat` is `'json'`. Always has `type: 'doc'` and may have any registered block-level children.

### Properties

#### `attrs`

`Record<string, any>`

Node attributes (alignment, indent, color, etc.).

#### `children`

`BlockNode[]`

Child block nodes in the document.

#### `marks`

`EditorMark[]`

Marks applied to this node (for block-level mark support).

#### `schemaVersion`

`number`

Schema version — used for future migration handling.

## BlockNode

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/blocknode>

Block-level node union — built-in plus registered custom block nodes.

### Union members

`ParagraphNode`, `HeadingNode`, `BlockquoteNode`, `CodeBlockNode`, `OrderedListNode`, `BulletListNode`.

## EditorMark

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/editormark>

Inline formatting marks — built-in plus registered custom marks.

### Union members

`BoldMark`, `ItalicMark`, `UnderlineMark`, `StrikeMark`, `SubscriptMark`, `SuperscriptMark`, `CodeMark`, `LinkMark`, `TextColorMark`, `BackgroundColorMark`.

## InlineNode

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/inlinenode>

Inline-level node union — built-in plus registered custom inline nodes.

### Union members

`TextNode`, `HardBreakNode`.

## TextAlignment

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/textalignment>

Text alignment values applied to block-level nodes.

### Enum members

`left`, `center`, `right`, `justify`.

## StaticFunctions

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/staticfunctions>

Root static functions of the `RichTextEditorUI` component.

### `reconcileToolbarItems`

Reconciles two toolbar item collections. Detects added and removed items and returns the required update operations.

| Parameter | Type | Description |
| --- | --- | --- |
| `newItems` | `ToolbarItem[]` | The updated toolbar items |
| `oldItems` | `ToolbarItem[]` | The previous toolbar items |

Returns `ToolbarItemUpdate[]`.
