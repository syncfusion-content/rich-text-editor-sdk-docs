# API Reference (Part 2) in Syncfusion JavaScript Modern Rich Text Editor

This file consolidates the second batch of API documentation pages for the Syncfusion JavaScript Modern Rich Text Editor (`RichTextEditorUI`) sourced from the Syncfusion EJ2 TypeScript API reference. Pages 19–36 below continue from `api-references.md` (Part 1, pages 1–18).

## Table of contents

- [ISlashCommandItem](#islashcommanditem)
- [SlashCommandItemSelectArgs](#slashcommanditemselectargs)
- [FormattingStateService](#formattingstateservice)
- [SlashCommandItems](#slashcommanditems)
- [AlignmentCommandBuilder](#alignmentcommandbuilder)
- [CalloutCommandBuilder](#calloutcommandbuilder)
- [ChecklistCommandBuilder](#checklistcommandbuilder)
- [CodeBlockCommandBuilder](#codeblockcommandbuilder)
- [CollapsibleCommandBuilder](#collapsiblecommandbuilder)
- [ColorCommandBuilder](#colorcommandbuilder)
- [CommandExecutor](#commandexecutor)
- [FontFamilyCommandBuilder](#fontfamilycommandbuilder)
- [FontSizeCommandBuilder](#fontsizecommandbuilder)
- [HorizontalRuleCommandBuilder](#horizontalrulecommandbuilder)
- [LinkCommandBuilder](#linkcommandbuilder)
- [ListCommandBuilder](#listcommandbuilder)
- [ListStyleCommandBuilder](#liststylecommandbuilder)
- [ToggleCommandBuilder](#togglecommandbuilder)

## ISlashCommandItem

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/islashcommanditem>

Specifies the custom slash command item configuration.

### Properties

#### `command`

`string`

Specifies the command to execute when the slash command item is clicked.

#### `description`

`string`

Specifies the description to be displayed for the slash command item.

#### `iconCss`

`string`

Specifies the icon class for the slash command item.

#### `text`

`string`

Specifies the text to be displayed in the slash command item.

#### `type`

`string`

Specifies the type of the slash command item. Grouping is done based on this value.

## SlashCommandItemSelectArgs

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/slashcommanditemselectargs>

Provides detailed information about a SlashCommandItemSelect event.

### Properties

#### `cancel`

`boolean`

Specifies whether to cancel the default action.

#### `isInteracted`

`boolean`

Returns true if the event is triggered by user interaction; otherwise false.

#### `item`

`HTMLLIElement`

Returns the selected list item element of the slash command list.

#### `itemData`

`ISlashCommandItem`

Returns the selected slash command item data.

#### `originalEvent`

`MouseEvent|KeyboardEvent|TouchEvent`

Specifies the original event arguments (MouseEvent, KeyboardEvent, or TouchEvent).

## FormattingStateService

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/formattingstateservice>

Service for querying and caching the editor's formatting state. Ensures formatting state is queried only once per command, and the result is shared to both toolbar and quick-toolbar modules.

### Methods

#### `getCurrentState`

Returns the most recently cached formatting state.

Returns `FormattingState | null`

#### `refreshFormattingState`

Queries the current formatting state from the editor and caches it. This is the single query point for all toolbar UI updates.

| Parameter | Type | Description |
| --- | --- | --- |
| `editorCore` | `EditorCore` | The editor core instance |

Returns `FormattingState`

## SlashCommandItems

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/slashcommanditems>

Lists the items available in the slash command popup.

- `Heading 1`
- `Heading 2`
- `Heading 3`
- `Heading 4`
- `Collapsible Paragraph`
- `Collapsible Heading 1`
- `Collapsible Heading 2`
- `Collapsible Heading 3`
- `Collapsible Heading 4`
- `Paragraph`
- `Blockquote`
- `Info`
- `Warning`
- `Error`
- `Success`
- `Note`
- `NumberedList`
- `BulletList`
- `Checklist`
- `Table`
- `Image`
- `Link`

## AlignmentCommandBuilder

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/alignmentcommandbuilder>

Builder for text alignment command.

### Methods

#### `align`

Set the text alignment.

Returns `this`

#### `apply`

Execute the alignment command with set options.

Returns `void`

## CalloutCommandBuilder

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/calloutcommandbuilder>

Builder for the callout command. Sets the callout variant (info | warning | error | success | note) before dispatching the toggle to the headless editor.

### Methods

#### `apply`

Execute the callout command with set options.

Returns `void`

#### `callout`

Set the callout variant.

Returns `this`

## ChecklistCommandBuilder

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/checklistcommandbuilder>

Builder for checklist command.

### Methods

#### `apply`

Execute the checklist command.

Returns `void`

## CodeBlockCommandBuilder

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/codeblockcommandbuilder>

Builder for code block command.

### Methods

#### `apply`

Execute the code block command with set options.

Returns `void`

#### `language`

Set the code language.

| Parameter | Type | Description |
| --- | --- | --- |
| `lang` | `string` | The language code to set |

Returns `this`

## CollapsibleCommandBuilder

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/collapsiblecommandbuilder>

Builder for collapsible command.

### Methods

#### `apply`

Execute the collapsible command.

Returns `void`

#### `level`

Set heading level.

| Parameter | Type | Description |
| --- | --- | --- |
| `level` | `1` \| `2` \| `3` \| `4` | Heading level |

Returns `this`

#### `triggerType`

Set trigger type.

Returns `this`

## ColorCommandBuilder

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/colorcommandbuilder>

Builder for color commands (fontColor, backgroundColor).

### Methods

#### `apply`

Execute the color command with set options.

Returns `void`

#### `color`

Set the color value.

| Parameter | Type | Description |
| --- | --- | --- |
| `colorValue` | `string` | The color value to set |

Returns `this`

## CommandExecutor

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/commandexecutor>

Command executor providing chainable builders for all supported commands.

### Methods

#### `backgroundColor`

Get a builder for the backgroundColor command.

Returns `ColorCommandBuilder`

#### `blockQuote`

Get a builder for the blockQuote command.

Returns `ToggleCommandBuilder`

#### `bold`

Get a builder for the bold command.

Returns `ToggleCommandBuilder`

#### `bulletList`

Get a builder for the bulletList command.

Returns `ListCommandBuilder`

#### `callout`

Get a builder for the callout command.

Returns `CalloutCommandBuilder`

#### `clearFormat`

Get a builder for the clearFormat command.

Returns `ToggleCommandBuilder`

#### `codeBlock`

Get a builder for the codeBlock command.

Returns `CodeBlockCommandBuilder`

#### `collapsible`

Get a builder for the collapsible command.

Returns `CollapsibleCommandBuilder`

#### `fontColor`

Get a builder for the fontColor command.

Returns `ColorCommandBuilder`

#### `fontName`

Get a builder for the fontName command.

Returns `FontFamilyCommandBuilder`

#### `fontSize`

Get a builder for the fontSize command.

Returns `FontSizeCommandBuilder`

#### `heading1`

Get a builder for the heading1 command.

Returns `ToggleCommandBuilder`

#### `heading2`

Get a builder for the heading2 command.

Returns `ToggleCommandBuilder`

#### `heading3`

Get a builder for the heading3 command.

Returns `ToggleCommandBuilder`

#### `heading4`

Get a builder for the heading4 command.

Returns `ToggleCommandBuilder`

#### `horizontalRule`

Get a builder for the horizontalRule command.

Returns `HorizontalRuleCommandBuilder`

#### `indent`

Get a builder for the indent command.

Returns `ToggleCommandBuilder`

#### `inlineCode`

Get a builder for the inlineCode command.

Returns `ToggleCommandBuilder`

#### `italic`

Get a builder for the italic command.

Returns `ToggleCommandBuilder`

#### `link`

Get a builder for the link command.

Returns `LinkCommandBuilder`

#### `lowercase`

Get a builder for the lowercase command.

Returns `ToggleCommandBuilder`

#### `numberedList`

Get a builder for the numberedList command.

Returns `ListCommandBuilder`

#### `outdent`

Get a builder for the outdent command.

Returns `ToggleCommandBuilder`

#### `paragraph`

Get a builder for the paragraph command.

Returns `ToggleCommandBuilder`

#### `redo`

Get a builder for the redo command.

Returns `ToggleCommandBuilder`

#### `setListStyle`

Get a builder for the setListStyle command.

Returns `ListStyleCommandBuilder`

#### `setTextAlign`

Get a builder for the setTextAlign command.

Returns `AlignmentCommandBuilder`

#### `strikethrough`

Get a builder for the strikethrough command.

Returns `ToggleCommandBuilder`

#### `subscript`

Get a builder for the subscript command.

Returns `ToggleCommandBuilder`

#### `superscript`

Get a builder for the superscript command.

Returns `ToggleCommandBuilder`

#### `toggleTaskList`

Get a builder for the toggleTaskList command.

Returns `ChecklistCommandBuilder`

#### `underline`

Get a builder for the underline command.

Returns `ToggleCommandBuilder`

#### `undo`

Get a builder for the undo command.

Returns `ToggleCommandBuilder`

#### `uppercase`

Get a builder for the uppercase command.

Returns `ToggleCommandBuilder`

## FontFamilyCommandBuilder

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/fontfamilycommandbuilder>

Builder for font family command.

### Methods

#### `apply`

Execute the font family command with set options.

Returns `void`

#### `family`

Set the font family name.

| Parameter | Type | Description |
| --- | --- | --- |
| `fontName` | `string` | The font family name to set |

Returns `this`

## FontSizeCommandBuilder

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/fontsizecommandbuilder>

Builder for font size command.

### Methods

#### `apply`

Execute the font size command with set options.

Returns `void`

#### `size`

Set the font size.

| Parameter | Type | Description |
| --- | --- | --- |
| `sizeValue` | `string` | The font size value to set |

Returns `this`

## HorizontalRuleCommandBuilder

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/horizontalrulecommandbuilder>

Builder for horizontal line command.

### Methods

#### `apply`

Executes the toggle command.

Returns `void`

## LinkCommandBuilder

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/linkcommandbuilder>

Builder for link command with chainable URL/text options. Owns the link-command payload assembly and dispatch. The internal link module simply produces the building blocks (operation, href, displayText, target, title) and delegates the final mutation through this builder so all link-related actions route through one entry point.

### Methods

#### `apply`

Execute the link command and dispatch through the action pipeline.

Returns `void`

#### `displayText`

Set the display text of the link. Alias for `text()`.

| Parameter | Type | Description |
| --- | --- | --- |
| `displayValue` | `string` | The display text value to set |

Returns `this`

#### `href`

Set the href for the link.

| Parameter | Type | Description |
| --- | --- | --- |
| `hrefValue` | `string` | The href value to set |

Returns `this`

#### `operation`

Set the link operation mode. Default is `'insert'`. Pass `'edit'` to update an existing link, `'remove'` to unlink a selection, and `'open'` / `'copy'` for the matching Quick Toolbar actions.

Returns `this`

#### `source`

Capture the originating event so the action pipeline can forward it through `EditorController.process`. Optional for callers that only need a fire-and-forget mutation (e.g. `executeCommand('link', ...)`).

| Parameter | Type | Description |
| --- | --- | --- |
| `event` | `MouseEvent` \| `KeyboardEvent` | The source event |

Returns `this`

#### `target`

Set the target attribute (e.g. `'_blank'`, `'_self'`).

| Parameter | Type | Description |
| --- | --- | --- |
| `targetValue` | `string` \| `null` | The target attribute value to set |

Returns `this`

#### `text`

Set the visible text of the link.

| Parameter | Type | Description |
| --- | --- | --- |
| `textValue` | `string` | The text value to set |

Returns `this`

#### `title`

Set the title/tooltip attribute of the link.

| Parameter | Type | Description |
| --- | --- | --- |
| `titleValue` | `string` \| `null` | The title value to set |

Returns `this`

#### `url`

Set the URL/href for the link. Alias for `href()` to match the public API expected from dialog consumers.

| Parameter | Type | Description |
| --- | --- | --- |
| `urlValue` | `string` | The URL value to set |

Returns `this`

## ListCommandBuilder

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/listcommandbuilder>

Builder for list commands (numberedList, bulletList).

### Methods

#### `apply`

Execute the list command with set options.

Returns `void`

#### `options`

Set list options.

| Parameter | Type | Description |
| --- | --- | --- |
| `opts` | `Partial<...>` | The list command options |

Returns `this`

## ListStyleCommandBuilder

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/liststylecommandbuilder>

Builder for list style command.

### Methods

#### `apply`

Execute the list style command with set options.

Returns `void`

#### `listType`

Set the list style type.

| Parameter | Type | Description |
| --- | --- | --- |
| `styleType` | `string` | The list style type to set |

Returns `this`

## ToggleCommandBuilder

Source: <https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/togglecommandbuilder>

Base builder for toggle commands (bold, italic, etc.).

### Methods

#### `apply`

Executes the toggle command.

Returns `void`