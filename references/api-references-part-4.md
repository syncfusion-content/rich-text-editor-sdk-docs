# API Reference (Part 4) in Syncfusion JavaScript Modern Rich Text Editor

This file consolidates the fourth batch of API documentation pages for the Syncfusion JavaScript Modern Rich Text Editor (`RichTextEditorUI`) sourced from the Syncfusion EJ2 TypeScript API reference. Pages 58–80 below continue from `api-references.md` (Part 1), `api-references-part-2.md` (Part 2), and `api-references-part-3.md` (Part 3).

## Table of contents

- [BulletFormatList](#bulletformatlist)
- [CustomFormatListItem (duplicate link)](#customformatlistitem-duplicate-link)
- [NumberFormatList](#numberformatlist)
- [BulletFormatListItem](#bulletformatlistitem)
- [NumberFormatListItem](#numberformatlistitem)
- [ListSettingsModel](#listsettingsmodel)
- [QuickToolbarSettings](#quicktoolbarsettings)
- [QuickToolbarSettingsModel](#quicktoolbarsettingsmodel)
- [SlashCommandSettings](#slashcommandsettings)
- [SlashCommandType](#slashcommandtype)
- [SlashCommandSettingsModel](#slashcommandsettingsmodel)
- [TableSettings](#tablesettings)
- [TableSettingsModel](#tablesettingsmodel)
- [FontFamily](#fontfamily)
- [FontSize](#fontsize)
- [Format](#format)
- [ToolbarSettings](#toolbarsettings)
- [ToolbarItemClickedEventArgs](#toolbaritemclickedeventargs)
- [FontFamilyModel](#fontfamilymodel)
- [FontSizeModel](#fontsizemodel)
- [FormatModel](#formatmodel)
- [ToolbarSettingsModel](#toolbarsettingsmodel)
- [AddToolbarItem](#addtoolbaritem)

## BulletFormatList

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/bulletformatlist>

Reusable definition of a bulleted (unordered) list style. Mirrors the CSS `list-style-type` value of the same name and is the canonical mapping consumed by the toolbar layer when rendering a "Bullet List" dropdown.

### Properties

#### `command`

`string`

Editor command name dispatched when the entry is selected.

#### `id`

`string`

Stable identifier used by the toolbar renderer.

#### `listType`

`BulletListType`

Underlying list-style type passed to the headless editor.

#### `text`

`string`

Display label shown in the toolbar dropdown.

## CustomFormatListItem (duplicate link)

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/customformatlistitem>

> This page is the same URL as page 38 (Part 3, `customformatlistitem`). It is included here per the link batch you provided. Content is identical to Part 3.

Custom dropdown item.

### Properties

#### `listType`

`string`

Custom CSS `list-style-type` value.

#### `text`

`string`

Text displayed in dropdown.

## NumberFormatList

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/numberformatlist>

Reusable definition of a numbered (ordered) list style. Mirrors the CSS `list-style-type` value of the same name and is the canonical mapping consumed by the toolbar layer when rendering a "Numbered List" dropdown.

### Properties

#### `command`

`string`

Editor command name dispatched when the entry is selected.

#### `id`

`string`

Stable identifier used by the toolbar renderer.

#### `listType`

`NumberListType`

Underlying list-style type passed to the headless editor.

#### `text`

`string`

Display label shown in the toolbar dropdown.

## BulletFormatListItem

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/bulletformatlistitem>

Union of `BulletListType` and `CustomFormatListItem`.

## NumberFormatListItem

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/numberformatlistitem>

Union of `NumberListType` and `CustomFormatListItem`.

## ListSettingsModel

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/listsettingsmodel>

Interface for the class `ListSettings`.

### Properties

#### `bulletFormatListItems`

`BulletFormatListItem[]`

Defines the items displayed in the BulletFormatList dropdown.

#### `numberFormatListItems`

`NumberFormatListItem[]`

Defines the items displayed in the NumberFormatList dropdown.

## QuickToolbarSettings

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/quicktoolbarsettings>

Configures the quick toolbar settings of the RichTextEditor.

### Properties

#### `enable`

`boolean`

Specifies whether the quick toolbar is enabled in the RichTextEditor.

**Defaults to `true`.**

#### `enableAppendToBody`

`boolean`

Specifies whether to append the quick toolbar popup to the document body instead of the editor container. Enable this to avoid clipping in containers with constrained width or overflow. Disable it to keep the popup positioned within the editor container.

**Defaults to `false`.**

#### `image`

`ImageQuickToolbarItem[]`

Specifies the toolbar items shown when an image is selected.

**Defaults to `['AltText', 'Caption', '|', 'Align', 'Display', 'WrapText', '|', 'Dimension', 'Replace', 'Remove']`.**

#### `link`

`LinkQuickToolbarItem[]`

Specifies the toolbar items shown when the cursor is inside a link. If no items are configured, the link quick toolbar is not initialized. Default order: Open, Copy, Edit, Remove.

**Defaults to `['OpenLink', 'CopyLink', 'EditLink', 'RemoveLink']`.**

#### `table`

`TableQuickToolbarItem[]`

Items displayed in the Table Quick Toolbar.

**Defaults to `['Header', 'Remove', '|', 'Row', 'Column', '|', 'CellBackgroundColor', 'Align', 'VerticalAlign']`.**

#### `text`

`ToolbarItem[]`

Specifies the toolbar items shown when text is selected. If no items are configured, the text quick toolbar is not rendered.

**Defaults to `null`.**

## QuickToolbarSettingsModel

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/quicktoolbarsettingsmodel>

Interface for the class `QuickToolbarSettings`.

### Properties

#### `enable`

`boolean`

Specifies whether the quick toolbar is enabled in the RichTextEditor.

#### `enableAppendToBody`

`boolean`

Specifies whether to append the quick toolbar popup to the document body instead of the editor container. Enable this to avoid clipping in containers with constrained width or overflow. Disable it to keep the popup positioned within the editor container.

#### `image`

`ImageQuickToolbarItem[]`

Specifies the toolbar items shown when an image is selected.

#### `link`

`LinkQuickToolbarItem[]`

Specifies the toolbar items shown when the cursor is inside a link. If no items are configured, the link quick toolbar is not initialized. Default order: Open, Copy, Edit, Remove.

#### `table`

`TableQuickToolbarItem[]`

Items displayed in the Table Quick Toolbar.

#### `text`

`ToolbarItem[]`

Specifies the toolbar items shown when text is selected. If no items are configured, the text quick toolbar is not rendered.

## SlashCommandSettings

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/slashcommandsettings>

Configures the slash command settings of the RichTextEditor.

### Properties

#### `enable`

`boolean`

Specifies whether to enable or disable the slash command in the editor.

**Defaults to `false`.**

#### `items`

`[]`

Defines the items to be displayed in the slash command popup.

**Defaults to `['Paragraph', 'Heading 1', 'Heading 2', 'Heading 3', 'Heading 4', 'NumberedList', 'BulletList', 'Checklist', 'Blockquote', 'Table', 'Link', 'Image', 'Collapsible Paragraph', 'Collapsible Heading 1', 'Collapsible Heading 2', 'Collapsible Heading 3', 'Collapsible Heading 4', 'Info', 'Warning', 'Error', 'Success', 'Note']`.**

#### `popupHeight`

`string | number`

Specifies the height of the slash command popup. Can be defined in pixels, numbers, or percentages. A numeric value is treated as pixels.

**Defaults to `'320px'`.**

#### `popupWidth`

`string | number`

Specifies the width of the slash command popup. Can be defined in pixels, numbers, or percentages. A numeric value is treated as pixels.

**Defaults to `'300px'`.**

### Events

#### `itemSelect`

`EmitType<SlashCommandItemSelectArgs>`

Raised when a slash command item is selected from the slash command popup. Set `args.cancel` to `true` inside the handler to prevent the default command execution. The event args are of type `SlashCommandItemSelectArgs`.

## SlashCommandType

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/slashcommandtype>

Defines the type of the slash command item.

- `Inline`
- `Basic Block`
- `Media`

## SlashCommandSettingsModel

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/slashcommandsettingsmodel>

Interface for the class `SlashCommandSettings`.

### Properties

#### `enable`

`boolean`

Specifies whether to enable or disable the slash command in the editor.

#### `items`

`[]`

Defines the items to be displayed in the slash command popup.

#### `popupHeight`

`string | number`

Specifies the height of the slash command popup. Can be defined in pixels, numbers, or percentages. A numeric value is treated as pixels.

#### `popupWidth`

`string | number`

Specifies the width of the slash command popup. Can be defined in pixels, numbers, or percentages. A numeric value is treated as pixels.

### Events

#### `itemSelect`

`EmitType<SlashCommandItemSelectArgs>`

Raised when a slash command item is selected from the slash command popup. Set `args.cancel` to `true` inside the handler to prevent the default command execution. The event args are of type `SlashCommandItemSelectArgs`.

## TableSettings

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/tablesettings>

Configures the table insertion behavior of the Rich Text Editor.

### Properties

#### `resize`

`boolean`

Enables table resize drag handles when new tables are inserted into the editor.

**Defaults to `true`.**

## TableSettingsModel

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/tablesettingsmodel>

Interface for the class `TableSettings`.

### Properties

#### `resize`

`boolean`

Enables table resize drag handles when new tables are inserted into the editor.

## FontFamily

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/fontfamily>

Font family settings for the editor. Configures the font family dropdown control within the toolbar.

### Properties

#### `items`

`FontFamilyItem[]`

Specifies the default font family items for the dropdown. Each item includes `id`, `text`, `command`, and typed value payload.

**Defaults to `DEFAULT_FONT_FAMILY_ITEMS`.**

#### `width`

`string`

Specifies the width of the dropdown content area.

**Defaults to `'72px'`.**

## FontSize

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/fontsize>

Font size settings for the editor. Configures the font size dropdown control within the toolbar.

### Properties

#### `items`

`FontSizeItem[]`

Specifies the default font size items for the dropdown. Each item includes `id`, `text`, `command`, and typed value payload.

**Defaults to `DEFAULT_FONT_SIZE_ITEMS`.**

#### `width`

`string`

Specifies the width of the dropdown content area.

**Defaults to `'60px'`.**

## Format

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/format>

Configuration for the Format toolbar item.

### Properties

#### `items`

`ToolbarSubItem[]`

Specifies the items displayed in the Format dropdown.

**Defaults to `DEFAULT_FORMAT_ITEMS`.**

#### `width`

`string`

Specifies the width of the Format dropdown.

**Defaults to `'75px'`.**

## ToolbarSettings

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/toolbarsettings>

Configures the Toolbar settings of the RichTextEditor.

### Properties

#### `enable`

`boolean`

Specifies whether to render the Toolbar in the Editor.

**Defaults to `true`.**

#### `enableFloating`

`boolean`

Whether the toolbar remains visible while its scroll owner is scrolled.

**Defaults to `true`.**

#### `floatingOffset`

`number`

Non-negative vertical offset, in pixels, applied while floating.

**Defaults to `0`.**

#### `items`

`ToolbarItem[]`

Defines the items displayed in the toolbar.

**Defaults to `['Bold', 'Italic', 'Underline', 'Strikethrough', '|', 'Formats', 'Alignment', 'BulletList', 'NumberedList', '|', 'Link', 'Image', 'Table', '|', 'Undo', 'Redo']`.**

#### `position`

`ToolbarPosition`

Defines whether the toolbar is rendered above or below the editor.

**Defaults to `'Top'`.**

#### `type`

`ToolbarType`

Defines the toolbar overflow and layout behavior.

**Defaults to `'Auto'`.**

### Events

#### `itemClicked`

`EmitType<ToolbarItemClickedEventArgs>`

Event raised when a toolbar item is clicked in the component.

#### `updatedToolbarStatus`

`EmitType<UpdatedToolbarStatusEventArgs>`

Raised after the toolbar item status (active states, dropdown values, color picker selections) has been synchronized with the current editor selection. This event fires after formatting states are updated to reflect the user's current cursor position or selection in the editor.

## ToolbarItemClickedEventArgs

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/toolbaritemclickedeventargs>

Represents the event arguments for a toolbar item click event in the component.

### Properties

#### `dataIndex`

`number`

Specifies the index of the message data associated with the toolbar item click event. This property is not applicable for header toolbar item click.

#### `event`

`Event`

Specifies the event object associated with the toolbar item click. Represents the underlying event that triggered the click action, providing details about the event.

#### `item`

`ToolbarItemModel`

Specifies the toolbar item that was clicked. Represents the model of the toolbar item that triggered the click event.

#### `name`

`string`

Specifies name of the event.

## FontFamilyModel

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/fontfamilymodel>

Interface for the class `FontFamily`.

### Properties

#### `items`

`FontFamilyItem[]`

Specifies the default font family items for the dropdown. Each item includes `id`, `text`, `command`, and typed value payload.

#### `width`

`string`

Specifies the width of the dropdown content area.

## FontSizeModel

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/fontsizemodel>

Interface for the class `FontSize`.

### Properties

#### `items`

`FontSizeItem[]`

Specifies the default font size items for the dropdown. Each item includes `id`, `text`, `command`, and typed value payload.

#### `width`

`string`

Specifies the width of the dropdown content area.

## FormatModel

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/formatmodel>

Interface for the class `Format`.

### Properties

#### `items`

`ToolbarSubItem[]`

Specifies the items displayed in the Format dropdown.

#### `width`

`string`

Specifies the width of the Format dropdown.

## ToolbarSettingsModel

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/toolbarsettingsmodel>

Interface for the class `ToolbarSettings`.

### Properties

#### `enable`

`boolean`

Specifies whether to render the Toolbar in the Editor.

#### `enableFloating`

`boolean`

Whether the toolbar remains visible while its scroll owner is scrolled.

#### `floatingOffset`

`number`

Non-negative vertical offset, in pixels, applied while floating.

#### `items`

`ToolbarItem[]`

Defines the items displayed in the toolbar.

#### `position`

`ToolbarPosition`

Defines whether the toolbar is rendered above or below the editor.

#### `type`

`ToolbarType`

Defines the toolbar overflow and layout behavior.

### Events

#### `itemClicked`

`EmitType<ToolbarItemClickedEventArgs>`

Event raised when a toolbar item is clicked in the component.

#### `updatedToolbarStatus`

`EmitType<UpdatedToolbarStatusEventArgs>`

Raised after the toolbar item status (active states, dropdown values, color picker selections) has been synchronized with the current editor selection. This event fires after formatting states are updated to reflect the user's current cursor position or selection in the editor.

## AddToolbarItem

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/addtoolbaritem>

Adds a toolbar item at a specified index.

### Properties

#### `index`

`number`

Index at which to insert the item.

#### `item`

`ToolbarItem`

The item to add.
