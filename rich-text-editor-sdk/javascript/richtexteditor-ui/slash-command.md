---
layout: post
title: Slash Commands in JavaScript Modern Rich Text Editor | Syncfusion
description: Learn how to use slash commands in the JavaScript Modern Rich Text Editor to quickly insert content, apply formatting, and access editing actions.
control: Modern Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Slash Commands in JavaScript Modern Rich Text Editor

The Slash command in the Modern Rich Text Editor provides users with an efficient way to apply formatting, insert elements, and execute custom commands by simply typing the `/` character. This feature enhances the user experience by offering quick access to common editing actions within the editor.

## Enabling the slash command

To use the Slash command, set the [`enable`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/slashcommandsettings#enable) property within [`slashCommandSettings`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/index-default#slashcommandsettings) to `true`. By default, this feature is disabled. Once enabled, the Slash command popup will appear when the user types the `/` character in the editor.

```javascript
ej.richtexteditorui.RichTextEditorUI.Inject(ej.richtexteditorui.SlashCommand);

var editor = new ej.richtexteditorui.RichTextEditorUI({
  slashCommandSettings: {
    enable: true
  }
});
editor.appendTo('#editor');
```

Setting `enable` to `false` at runtime removes the popup and stops listening for the `/` trigger. The editor continues to function normally without the Slash command feature.

## Module injection

Slash command is a standalone module. Inject it through `RichTextEditorUI.Inject` before creating the editor instance. If you skip this step, the editor renders without the Slash command capability, even when `slashCommandSettings.enable` is `true`.

```javascript
ej.richtexteditorui.RichTextEditorUI.Inject(ej.richtexteditorui.SlashCommand);

var editor = new ej.richtexteditorui.RichTextEditorUI({
  slashCommandSettings: { enable: true }
});
editor.appendTo('#editor');
```

The injection is a one-time, side-effect-only call. It registers the module class with the editor; subsequent `new RichTextEditorUI({...})` calls do not need to re-inject.

## Available items

The Slash command ships with a curated set of built-in items. When `items` is not overridden, all of the following are available:

| Item | Type | Dispatches |
| --- | --- | --- |
| `Paragraph` | `Basic Block` | `paragraph` |
| `Heading 1` | `Basic Block` | `heading1` |
| `Heading 2` | `Basic Block` | `heading2` |
| `Heading 3` | `Basic Block` | `heading3` |
| `Heading 4` | `Basic Block` | `heading4` |
| `NumberedList` | `Basic Block` | `numberedList` |
| `BulletList` | `Basic Block` | `bulletList` |
| `Checklist` | `Basic Block` | `checklist` |
| `Blockquote` | `Basic Block` | `blockQuote` |
| `Info` | `Basic Block` | `calloutInfo` |
| `Warning` | `Basic Block` | `calloutWarning` |
| `Error` | `Basic Block` | `calloutError` |
| `Success` | `Basic Block` | `calloutSuccess` |
| `Note` | `Basic Block` | `calloutNote` |
| `Collapsible Paragraph` | `Basic Block` | `collapsible` with `triggerType: 'paragraph'` |
| `Collapsible Heading 1` | `Basic Block` | `collapsible` with `level: 1` |
| `Collapsible Heading 2` | `Basic Block` | `collapsible` with `level: 2` |
| `Collapsible Heading 3` | `Basic Block` | `collapsible` with `level: 3` |
| `Collapsible Heading 4` | `Basic Block` | `collapsible` with `level: 4` |
| `Link` | `Inline` | `InsertLink` (provided by the `Link` module) |
| `Image` | `Media` | `InsertImage` (provided by the `Image` module) |
| `Table` | `Basic Block` | `InsertTable` (provided by the `Table` module) |

The `Dispatches` column shows the editor command the item routes through. Built-in items never raise the `itemSelect` event for their default action; the editor dispatches the command itself.

`Link`, `Image`, and `Table` are contributed by their respective feature modules. They appear in the popup only when the corresponding module is also injected.

## Configure slash command items

The [`items`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/slashcommandsettings#items) property on `slashCommandSettings` controls which items appear in the popup. By default, every built-in item is included. Override `items` to:

- **Restrict** the popup to a subset of built-ins.
- **Reorder** items — the array order is the popup order.
- **Add** custom items alongside or instead of built-ins.
- **Remove** specific groups, for example to hide all `Media` items.

```javascript
slashCommandSettings: {
  enable: true,
  items: ['Paragraph', 'Heading 1', 'Heading 2', 'Heading 3', 'BulletList', 'NumberedList']
}
```

The popup size can be customized through [`popupWidth`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/slashcommandsettings#popupwidth) and [`popupHeight`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/slashcommandsettings#popupheight). Both accept pixel values, numbers (treated as pixels), or CSS strings.

```javascript
slashCommandSettings: {
  enable: true,
  items: ['Paragraph', 'Heading 1', 'Heading 2', 'Heading 3'],
  popupWidth: 250,
  popupHeight: 300
}
```

Items are filtered as the user types after `/`. The popup narrows to items whose `text` or `description` matches the typed query. Backspace restores the full list.

## Add custom slash command items

Custom items extend the popup with commands the built-in set does not cover. Each custom item is described by an [`ISlashCommandItem`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/islashcommanditem):

| Property | Type | Description |
| --- | --- | --- |
| `text` | `string` | Label shown in the popup. |
| `command` | `string` | Logical name of the command. Used for grouping, identification in the `itemSelect` event, and routing. |
| `iconCss` | `string` | CSS class for the leading icon (for example, `e-icons e-link`). |
| `description` | `string` | Secondary text shown beneath the label. |
| `type` | `string` | Group used to classify the item in the popup. Built-in values are `'Inline'`, `'Basic Block'`, and `'Media'`. Custom strings are allowed. |

A custom item is any element of `items` that is not one of the built-in names listed above. Mixing built-ins and customs in the same array is supported.

```javascript
slashCommandSettings: {
  enable: true,
  items: [
    'Paragraph',
    'Heading 1',
    {
      text: 'Insert Date',
      command: 'insertDate',
      iconCss: 'e-icons e-date',
      description: 'Insert today\u2019s date',
      type: 'Inline'
    },
    {
      text: 'Insert Horizontal Rule',
      command: 'horizontalLine',
      iconCss: 'e-icons e-horizontal-rule',
      description: 'Insert a separator line',
      type: 'Basic Block'
    }
  ]
}
```

When a custom item is selected, the editor does not dispatch any command on its own. Your `itemSelect` handler is responsible for the action.

## Use the `itemSelect` event

The [`itemSelect`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/slashcommandsettings#itemselect) event fires when the user picks an item from the popup. The handler receives [`SlashCommandItemSelectArgs`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/slashcommanditemselectargs) with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| `isInteracted` | `boolean` | `true` when the selection was triggered by user interaction (mouse, keyboard, or touch); `false` for programmatic selection. |
| `item` | `HTMLLIElement` | The selected DOM list item. |
| `itemData` | `ISlashCommandItem` | The data of the selected item, matching the entry declared in `slashCommandSettings.items`. |
| `originalEvent` | `MouseEvent \| KeyboardEvent \| TouchEvent` | The original browser event that triggered the selection. |
| `cancel` | `boolean` | Set to `true` inside the handler to suppress the editor's default command execution. |

The event fires for every selection, including built-in items. For built-in items, the default dispatch happens after the handler returns; setting `cancel` suppresses it. For custom items there is no default dispatch, so the handler is the only place where the action runs.

```javascript
var editor = new ej.richtexteditorui.RichTextEditorUI({
  slashCommandSettings: {
    enable: true,
    items: [
      'Paragraph',
      'Heading 1',
      {
        text: 'Inline Code',
        command: 'applyInlineCode',
        iconCss: 'e-icons e-code',
        description: 'Wrap selection in inline code',
        type: 'Inline'
      }
    ],
    itemSelect: function (args) {
      if (args.itemData.command === 'applyInlineCode') {
        // Take over the action — cancel the default execution.
        args.cancel = true;

        // Run the action through the editor's command pipeline
        // by chaining methods on the `commands()` builder.
        editor.commands().inlineCode().apply();
      }
    }
  }
});
editor.appendTo('#editor');
```

Branching on `args.itemData.command` lets one handler serve many custom items. The `originalEvent` is the underlying `MouseEvent` / `KeyboardEvent` / `TouchEvent` and can be inspected when the action needs to react to the trigger source.

## Selection and lifecycle behavior

- **Caret restoration** — the popup saves the editor's selection when filtering and restores it before the item is selected, so the chosen command always applies to the position where `/` was typed.
- **Filtering** — items are filtered as the user types after `/`. The match is against the item's `text` and `description` fields.
- **Read-only and disabled editors** — when the editor's `readonly` property is `true` or `enable` is `false`, the Slash command popup does not appear.
- **Destroy** — when the editor instance is destroyed, the Slash command module removes its listeners and tears down the popup. No manual cleanup is required.
- **Default labels** — the popup's text and descriptions are taken from the editor's locale. The default English strings are listed in the *Available items* table above.

## See also

- [Events](events) — change, focus, blur, actionBegin, actionComplete and other event handling examples.
- [Methods](methods) — public methods such as `save`, `focusIn`, `focusOut`, `getHtml`, `getText`, and `updateToolbarItems`.
