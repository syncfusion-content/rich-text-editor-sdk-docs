# API Reference (Part 1) in Syncfusion JavaScript Modern Rich Text Editor

This file consolidates the API documentation for the Syncfusion JavaScript Modern Rich Text Editor (`RichTextEditorUI`) sourced from the Syncfusion EJ2 TypeScript API reference. It is generated from the first 18 API pages in the namespace; remaining pages will be added once provided.

## Table of contents

- [Overview](#overview)
- [CustomNodeAttributeType](#customnodeattributetype)
- [CustomNodeContent](#customnodecontent)
- [CustomNodeGroup](#customnodegroup)
- [CustomNodeName](#customnodename)
- [DialogType](#dialogtype)
- [BeforeDialogCloseEventArgs](#beforedialogcloseeventargs)
- [BeforeDialogOpenEventArgs](#beforedialogopeneventargs)
- [BeforeFileDropEventArgs](#beforefiledropeventargs)
- [BeforeFileUploadEventArgs](#beforefileuploadeventargs)
- [BeforePopupCloseEventArgs](#beforepopupcloseeventargs)
- [BeforePopupOpenEventArgs](#beforepopupopeneventargs)
- [EditorComponentEventArgs](#editorcomponenteventargs)
- [FileRemovingEventArgs](#fileremovingeventargs)
- [FileSelectedEventArgs](#fileselectedeventargs)
- [FileUploadFailedEventArgs](#fileuploadfailedeventargs)
- [FileUploadSuccessEventArgs](#fileuploadsuccesseventargs)
- [FileUploadingEventArgs](#fileuploadingeventargs)

## Overview

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/overview>

The API reference index lists every type, interface, builder, enum, event-arg, helper, and the root component exported by `@syncfusion/ej2-richtexteditor-ui`.

| Name | Description |
| --- | --- |
| `FormattingStateService` | Service for querying and caching the editor's formatting state. Ensures formatting state is queried only once per command, and the result is shared to both toolbar and quick-toolbar modules. |
| `AlignmentCommandBuilder` | Builder for text alignment command. |
| `CalloutCommandBuilder` | Builder for the callout command. Sets the callout variant (info, warning, error, success, note) before dispatching the toggle to the headless editor. |
| `ChecklistCommandBuilder` | Builder for checklist command. |
| `CodeBlockCommandBuilder` | Builder for code block command. |
| `CollapsibleCommandBuilder` | Builder for collapsible command. |
| `ColorCommandBuilder` | Builder for color commands (`fontColor`, `backgroundColor`). |
| `CommandExecutor` | Command executor providing chainable builders for all supported commands. |
| `FontFamilyCommandBuilder` | Builder for font family command. |
| `FontSizeCommandBuilder` | Builder for font size command. |
| `HorizontalRuleCommandBuilder` | Builder for horizontal line command. |
| `LinkCommandBuilder` | Builder for link command with chainable URL/text options. Owns the link-command payload assembly and dispatch. The internal link module simply produces the building blocks (operation, href, displayText, target, title) and delegates the final mutation through this builder so all link-related actions route through one entry point. |
| `ListCommandBuilder` | Builder for list commands (`numberedList`, `bulletList`). |
| `ListStyleCommandBuilder` | Builder for list style command. |
| `ToggleCommandBuilder` | Base builder for toggle commands (bold, italic, etc.). |
| `BackgroundColor` | Defines the configuration for the background color (text highlight color) picker. |
| `FontColor` | Defines the configuration for the font color picker. Controls the default color, color palette, mode, number of columns, mode switcher, and recent-colors visibility shown in the `FontColor` toolbar item. |
| `ImageSettings` | Configures the image settings of the RichTextEditor. |
| `InteractionSettings` | Configures the Interactions settings of the RichTextEditor. |
| `LinkSettings` | Configures the link settings of the RichTextEditor. |
| `QuickToolbarSettings` | Configures the quick toolbar settings of the RichTextEditor. |
| `SlashCommandSettings` | Configures the slash command settings of the RichTextEditor. |
| `TableSettings` | Configures the table insertion behavior of the Rich Text Editor. |
| `FontFamily` | Font family settings for the editor. Configures the font family dropdown control within the toolbar. |
| `FontSize` | Font size settings for the editor. Configures the font size dropdown control within the toolbar. |
| `Format` | Configuration for the `Format` toolbar item. |
| `ToolbarSettings` | Configures the Toolbar settings of the RichTextEditor. |
| `RichTextEditorUI` | The Rich Text Editor component is a feature-rich, WYSIWYG editor that enables users to create and format rich HTML content with an intuitive user interface. It provides comprehensive text formatting, media insertion, table creation, and content management capabilities. |
| `DialogType` | Enumerates the dialog types supported by the editor for inserting links, images, audio, video, and tables. |
| `BeforeDialogCloseEventArgs` | Event args for `RichTextEditor.beforeDialogClose`. Extends the ej2 `BeforeCloseEventArgs` with the `source` field that identifies the editor feature (e.g. `'Link'`, `'Image'`, `'Table'`) the dialog belongs to. |
| `BeforeDialogOpenEventArgs` | Event args for `RichTextEditor.beforeDialogOpen`. Extends the ej2 `BeforeOpenEventArgs` with the `source` field that identifies the editor feature (e.g. `'Link'`, `'Image'`, `'Table'`) the dialog belongs to. |
| `BeforeFileDropEventArgs` | Event args for `RichTextEditor.beforeFileDrop`. Raised when one or more files are dropped (or pasted) onto the editable area, before the image module routes them through the typed command pipeline. Set `args.cancel = true` to keep the document untouched. |
| `BeforeFileUploadEventArgs` | Event args for `RichTextEditor.beforeFileUpload`. Extends the ej2 `BeforeUploadEventArgs` with the `source` field that identifies the editor feature the upload is for (e.g. `'Image'`). |
| `BeforePopupCloseEventArgs` | Event args for `RichTextEditor.beforePopupClose`. Extends the ej2 `BeforeCloseEventArgs` with the `source` field that identifies the editor feature (e.g. `'Link'`, `'Image'`, `'Table'`) the popup belongs to. |
| `BeforePopupOpenEventArgs` | Event args for `RichTextEditor.beforePopupOpen`. Extends the ej2 `PopupEventArgs` with the `source` field that identifies the editor feature (e.g. `'Link'`, `'Image'`, `'Table'`) the popup belongs to. |
| `EditorComponentEventArgs` | Editor feature (`source`) carried by every sub-component event argument raised on the editor. The `source` is a plain string set at sub-component initialization (e.g. `'Link'`, `'Image'`, `'Table'`) identifying which feature the dialog, popup, or upload belongs to. A single handler can branch on `args.source` rather than wiring one callback per feature. |
| `FileRemovingEventArgs` | Event args for `RichTextEditor.fileRemoving`. Raised before a previously-uploaded image is removed (client-side `URL.revokeObjectURL` for `saveFormat: 'Blob'`, or before the `removeUrl` POST is sent for server-side removal). Set `args.cancel = true` to keep the image in place; both the Blob revocation and the `removeUrl` POST will be skipped. |
| `FileSelectedEventArgs` | Event args for `RichTextEditor.fileSelected`. Extends the ej2 `SelectedEventArgs` with the `source` field that identifies the editor feature the upload is for. |
| `FileUploadFailedEventArgs` | Event args for `RichTextEditor.fileUploadFailed`. Extends the ej2 `FailureEventArgs` with the `source` field that identifies the editor feature the upload is for. |
| `FileUploadSuccessEventArgs` | Event args for `RichTextEditor.fileUploadSuccess`. Extends the ej2 `SuccessEventArgs` with the `source` field that identifies the editor feature the upload is for. |
| `FileUploadingEventArgs` | Event args for `RichTextEditor.fileUploading`. Extends the ej2 `UploadingEventArgs` with the `source` field that identifies the editor feature the upload is for. |
| `ISlashCommandItem` | Specifies the custom slash command item configuration. |
| `SlashCommandItemSelectArgs` | Provides detailed information about a SlashCommandItemSelect event. |
| `CustomFormatListItem` | Custom dropdown item. |
| `UpdatedToolbarStatusEventArgs` | Event arguments for the `updatedToolbarStatus` event raised after the toolbar synchronizes its visual state (active buttons, dropdown values, color pickers) with the current editor selection / cursor formatting. |
| `itemClickEventArgs` | Event arguments for the `itemClick` event raised when a toolbar item is clicked. |
| `BulletFormatList` | Reusable definition of a bulleted (unordered) list style. Mirrors the CSS `list-style-type` value of the same name and is the canonical mapping consumed by the toolbar layer when rendering a "Bullet List" dropdown. |
| `NumberFormatList` | Reusable definition of a numbered (ordered) list style. Mirrors the CSS `list-style-type` value of the same name and is the canonical mapping consumed by the toolbar layer when rendering a "Numbered List" dropdown. |
| `ToolbarItemClickedEventArgs` | Represents the event arguments for a toolbar item click event in the component. |
| `AddToolbarItem` | Adds a toolbar item at a specified index. |
| `BuiltInToolbarItemConfig` | Configuration for a built-in toolbar item. Helps align built-in items with `ItemModel` properties. |
| `CustomToolbarItem` | Custom toolbar item with user-defined action. |
| `DisableToolbarItem` | Disables a toolbar item by ID. |
| `EnableToolbarItem` | Enables a toolbar item by ID. |
| `FontFamilyItem` | Typed interface for font family dropdown items. Represents a single font family option with family name and editor command. |
| `FontSizeItem` | Typed interface for font size dropdown items. Represents a single font size option with numeric value and editor command. |
| `HideToolbarItem` | Hides a toolbar item by ID. |
| `RemoveToolbarItem` | Removes a toolbar item by ID. |
| `ShowToolbarItem` | Shows a toolbar item by ID. |
| `EditorDocument` | Public document model — the same shape used for `value` when `valueFormat` is `'json'`. Always has `type: 'doc'` and may have any registered block-level children. |
| `CustomNodeGroup` | Coarse content cardinality for the runtime schema. The spec uses typed arrays (`content: BlockNode[]`) at the model level; the runtime maps those to ProseMirror-style cardinality rules. |
| `SlashCommandItems` | Lists the items available in the slash command popup. |
| `ValueFormat` | Allowed value formats. `'html'`: `value` is an HTML string. `'json'`: `value` is an `EditorDocument` object. |
| `ColorModeType` | Enumerates the color picker display modes supported by the font color and background color pickers. `Palette`: Renders a fixed swatch grid. `Picker`: Renders an inline color picker only (no palette). |
| `ColorPickerType` | Identifies which editor color picker triggered an event or is being referenced in a payload. |
| `ImageDisplayMode` | Default display mode for inserted images. `'inline'` — Places the image within the current text flow. `'break'` — Places the image on a separate line. |
| `ImageSaveFormat` | Local representation chosen for the next image insertion when the editor uses a local proxy source (no `uploadUrl`). |
| `SlashCommandType` | Defines the type of the slash command item. |
| `BuiltInToolbarItem` | Built-in toolbar item names for common editor commands. |
| `LinkQuickToolbarItem` | Built-in items exposed by the Link Quick Toolbar. |
| `ToolbarItem` | Union type for toolbar items. Accepts built-in items by name, custom configurations, custom items, or separators. |
| `ToolbarItemUpdate` | Discriminated union for toolbar item update operations. Used during reconciliation of items array changes and direct toolbar updates. |
| `ToolbarPosition` | Defines the toolbar vertical position relative to editor. |
| `ToolbarType` | Defines the toolbar overflow and layout behavior. |
| `BlockNode` | Block-level node union — built-in plus registered custom block nodes. |
| `EditorMark` | Inline formatting marks — built-in plus registered custom marks. |
| `InlineNode` | Inline-level node union — built-in plus registered custom inline nodes. |

## CustomNodeAttributeType

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/customnodeattributetype>

Custom node attribute type enum. Members:

- `string`
- `number`
- `boolean`
- `enum`

## CustomNodeContent

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/customnodecontent>

Custom node content enum. Members:

- `block`
- `inline`
- `text`
- `none`

## CustomNodeGroup

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/customnodegroup>

Coarse content cardinality for the runtime schema. The spec uses typed arrays (`content: BlockNode[]`) at the model level; the runtime maps those to ProseMirror-style cardinality rules.

Members:

- `block`
- `inline`

## CustomNodeName

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/customnodename>

Custom node name type alias. Members:

- `CustomBlockNodeName`
- `CustomInlineNodeName`

## DialogType

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/dialogtype>

Enumerates the dialog types supported by the editor for inserting links, images, audio, video, and tables.

Members:

- `InsertImage` — Defines DialogType for inserting an image.
- `InsertLink` — Defines DialogType for inserting a link.
- `InsertTable` — Defines DialogType for inserting a table.

## BeforeDialogCloseEventArgs

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/beforedialogcloseeventargs>

Event args for `RichTextEditor.beforeDialogClose`. Extends the ej2 `BeforeCloseEventArgs` with the `source` field that identifies the editor feature (e.g. `'Link'`, `'Image'`, `'Table'`) the dialog belongs to.

### Properties

### `cancel`

`boolean`

Defines whether the current action can be prevented.

### `closedBy`

`string`

Returns whether the dialog is closed by "close icon", "overlayClick", "escape", and "user action".

### `container`

`HTMLElement`

Returns the root container element of the dialog.

### `element`

`Element`

Returns the element of the dialog.

### `event`

`Event`

Returns the original event arguments.

### `isInteracted`

`boolean`

Determines whether the event is triggered by interaction.

### `preventFocus`

`boolean`

Gets or sets a value indicating whether to prevent focus from returning to the previously active element after dialog closure.

### `source`

`string`

The editor feature the sub-component belongs to. Supplied by the caller when the sub-component is created. Undefined for generic sub-components that are not tied to a specific feature.

### `target`

`HTMLElement | string`

Returns the target element of the dialog.

## BeforeDialogOpenEventArgs

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/beforedialogopeneventargs>

Event args for `RichTextEditor.beforeDialogOpen`. Extends the ej2 `BeforeOpenEventArgs` with the `source` field that identifies the editor feature (e.g. `'Link'`, `'Image'`, `'Table'`) the dialog belongs to.

### Properties

### `cancel`

`boolean`

Defines whether the current action can be prevented.

### `container`

`HTMLElement`

Returns the root container element of the dialog.

### `element`

`Element`

Returns the element of the dialog.

### `maxHeight`

`string`

Specify the value to override max-height value of dialog.

### `source`

`string`

The editor feature the sub-component belongs to. Supplied by the caller when the sub-component is created. Undefined for generic sub-components that are not tied to a specific feature.

### `target`

`HTMLElement | string`

Returns the target element of the dialog.

## BeforeFileDropEventArgs

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/beforefiledropeventargs>

Event args for `RichTextEditor.beforeFileDrop`. Raised when one or more files are dropped (or pasted) onto the editable area, before the image module routes them through the typed command pipeline. Set `args.cancel = true` to keep the document untouched.

### Properties

### `cancel`

`boolean`

Cancels the drop pipeline.

### `files`

`FileList`

Files dropped onto or pasted into the editor.

### `source`

`string`

The editor feature the sub-component belongs to. Supplied by the caller when the sub-component is created. Undefined for generic sub-components that are not tied to a specific feature.

## BeforeFileUploadEventArgs

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/beforefileuploadeventargs>

Event args for `RichTextEditor.beforeFileUpload`. Extends the ej2 `BeforeUploadEventArgs` with the `source` field that identifies the editor feature the upload is for (e.g. `'Image'`).

### Properties

### `cancel`

`boolean`

Defines whether the current action can be prevented.

### `currentRequest`

`{ [key: string]: string }[]`

Returns the XMLHttpRequest instance that is associated with upload action.

### `customFormData`

`{ [key: string]: Object }[]`

Defines the additional data in key and value pair format that will be submitted to the upload action.

### `source`

`string`

The editor feature the sub-component belongs to. Supplied by the caller when the sub-component is created. Undefined for generic sub-components that are not tied to a specific feature.

## BeforePopupCloseEventArgs

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/beforepopupcloseeventargs>

Event args for `RichTextEditor.beforePopupClose`. Extends the ej2 `BeforeCloseEventArgs` with the `source` field that identifies the editor feature (e.g. `'Link'`, `'Image'`, `'Table'`) the popup belongs to.

### Properties

### `cancel`

`boolean`

Defines whether the current action can be prevented.

### `closedBy`

`string`

Returns whether the dialog is closed by "close icon", "overlayClick", "escape", and "user action".

### `container`

`HTMLElement`

Returns the root container element of the dialog.

### `element`

`Element`

Returns the element of the dialog.

### `event`

`Event`

Returns the original event arguments.

### `isInteracted`

`boolean`

Determines whether the event is triggered by interaction.

### `preventFocus`

`boolean`

Gets or sets a value indicating whether to prevent focus from returning to the previously active element after dialog closure.

### `source`

`string`

The editor feature the sub-component belongs to. Supplied by the caller when the sub-component is created. Undefined for generic sub-components that are not tied to a specific feature.

### `target`

`HTMLElement | string`

Returns the target element of the dialog.

## BeforePopupOpenEventArgs

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/beforepopupopeneventargs>

Event args for `RichTextEditor.beforePopupOpen`. Extends the ej2 `PopupEventArgs` with the `source` field that identifies the editor feature (e.g. `'Link'`, `'Image'`, `'Table'`) the popup belongs to.

### Properties

### `animation`

`AnimationModel`

Specifies the animation Object.

### `cancel`

`boolean`

Illustrates whether the current action needs to be prevented or not.

### `event`

`MouseEvent | KeyboardEventArgs | TouchEvent | Object`

Specifies the event.

### `popup`

`Popup`

Specifies the popup Object.

### `source`

`string`

The editor feature the sub-component belongs to. Supplied by the caller when the sub-component is created. Undefined for generic sub-components that are not tied to a specific feature.

## EditorComponentEventArgs

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/editorcomponenteventargs>

Editor feature (`source`) carried by every sub-component event argument raised on the editor. The `source` is a plain string set at sub-component initialization (e.g. `'Link'`, `'Image'`, `'Table'`) identifying which feature the dialog, popup, or upload belongs to. A single handler can branch on `args.source` rather than wiring one callback per feature.

### Properties

### `source`

`string`

The editor feature the sub-component belongs to. Supplied by the caller when the sub-component is created. Undefined for generic sub-components that are not tied to a specific feature.

## FileRemovingEventArgs

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/fileremovingeventargs>

Event args for `RichTextEditor.fileRemoving`. Raised before a previously-uploaded image is removed (client-side `URL.revokeObjectURL` for `saveFormat: 'Blob'`, or before the `removeUrl` POST is sent for server-side removal). Set `args.cancel = true` to keep the image in place; both the Blob revocation and the `removeUrl` POST will be skipped.

### Properties

### `cancel`

`boolean`

Cancels the removal. Both local `URL.revokeObjectURL` and the `removeUrl` POST will be skipped.

### `source`

`string`

The editor feature the sub-component belongs to. Supplied by the caller when the sub-component is created. Undefined for generic sub-components that are not tied to a specific feature.

### `src`

`string`

Source URL of the image being removed.

## FileSelectedEventArgs

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/fileselectedeventargs>

Event args for `RichTextEditor.fileSelected`. Extends the ej2 `SelectedEventArgs` with the `source` field that identifies the editor feature the upload is for.

### Properties

### `cancel`

`boolean`

Defines whether the current action can be prevented.

### `currentRequest`

`{ [key: string]: string }[]`

Set the current request header to the XMLHttpRequest instance.

### `customFormData`

`{ [key: string]: Object }[]`

Defines the additional data in key and value pair format that will be submitted to the upload action.

### `event`

`MouseEvent | TouchEvent | DragEvent | ClipboardEvent`

Returns the original event arguments.

### `filesData`

`FileInfo[]`

Returns the list of selected files.

### `isCanceled`

`boolean`

Specifies whether the file selection has been canceled.

### `isModified`

`boolean`

Determines whether the file list generates based on the modified data.

### `modifiedFilesData`

`FileInfo[]`

Specifies the modified files data to generate the file items. The argument depends on the `isModified` argument.

### `progressInterval`

`string`

Specifies the step value to the progress bar.

### `source`

`string`

The editor feature the sub-component belongs to. Supplied by the caller when the sub-component is created. Undefined for generic sub-components that are not tied to a specific feature.

## FileUploadFailedEventArgs

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/fileuploadfailedeventargs>

Event args for `RichTextEditor.fileUploadFailed`. Extends the ej2 `FailureEventArgs` with the `source` field that identifies the editor feature the upload is for.

### Properties

### `chunkIndex`

`number`

Returns the upload chunk index.

### `chunkSize`

`number`

Returns the upload chunk size.

### `e`

`object`

Returns the original event arguments.

### `event`

`object`

Returns the original event arguments.

### `file`

`FileInfo`

Returns the details about upload file.

### `operation`

`string`

Returns the upload event operation.

### `response`

`ResponseEventArgs`

Returns the upload event operation.

### `source`

`string`

The editor feature the sub-component belongs to. Supplied by the caller when the sub-component is created. Undefined for generic sub-components that are not tied to a specific feature.

### `statusText`

`string`

Returns the upload status.

### `totalChunk`

`number`

Returns the total chunk size.

## FileUploadSuccessEventArgs

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/fileuploadsuccesseventargs>

Event args for `RichTextEditor.fileUploadSuccess`. Extends the ej2 `SuccessEventArgs` with the `source` field that identifies the editor feature the upload is for.

### Properties

### `chunkIndex`

`number`

Returns the upload chunk index.

### `chunkSize`

`number`

Returns the upload chunk size.

### `e`

`object`

Returns the original event arguments.

### `event`

`object`

Returns the original event arguments.

### `file`

`FileInfo`

Returns the details about upload file.

### `operation`

`string`

Returns the upload event operation.

### `response`

`ResponseEventArgs`

Returns the upload event operation.

### `source`

`string`

The editor feature the sub-component belongs to. Supplied by the caller when the sub-component is created. Undefined for generic sub-components that are not tied to a specific feature.

### `statusText`

`string`

Returns the upload status.

### `totalChunk`

`number`

Returns the total chunk size.

## FileUploadingEventArgs

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/fileuploadingeventargs>

Event args for `RichTextEditor.fileUploading`. Extends the ej2 `UploadingEventArgs` with the `source` field that identifies the editor feature the upload is for.

### Properties

### `cancel`

`boolean`

Defines whether the current action can be prevented.

### `chunkSize`

`number`

Returns the chunk size in bytes if the chunk upload is enabled.

### `currentChunkIndex`

`number`

Returns the index of current chunk if the chunk upload is enabled.

### `currentRequest`

`XMLHttpRequest`

Returns the XMLHttpRequest instance that is associated with upload action.

### `customFormData`

`{ [key: string]: Object }[]`

Defines the additional data in key and value pair format that will be submitted to the upload action.

### `fileData`

`FileInfo`

Returns the list of files that will be uploaded.

### `source`

`string`

The editor feature the sub-component belongs to. Supplied by the caller when the sub-component is created. Undefined for generic sub-components that are not tied to a specific feature.