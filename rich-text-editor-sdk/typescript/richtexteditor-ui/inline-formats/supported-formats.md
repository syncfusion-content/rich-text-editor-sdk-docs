---
layout: post
title: Inline Formats in TypeScript Modern Rich Text Editor | Syncfusion
description: Learn about the inline formats available in the TypeScript Modern Rich Text Editor, including bold, italic, underline, font styling, colors, and more.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Inline Formats in TypeScript Modern Rich Text Editor

The Modern Rich Text Editor ships a curated set of inline formats that apply character-level marks to the selected text without changing the surrounding block. The toolbar palette exposes these formats through built-in items, and the same formats are reachable from code through `executeCommand` or the fluent `commands()` builder.

This page lists every inline format the component supports, the toolbar item that triggers it, and how it is exposed in code. For configuration of the inline dropdowns and color pickers, see [Options](options.md). For runtime invocation, see [Commands](commands.md).

## Available inline formats

The table below lists the inline formats available in the Modern Rich Text Editor's toolbar.

| Name | Summary | Initialization |
|----------------|---------|------------------------------------------|
| Bold | Makes the selected text thicker and darker. | toolbarSettings: { items: ['Bold'] } |
| Italic | Slants the selected text to the right. | toolbarSettings: { items: ['Italic'] } |
| Underline | Adds a line beneath the selected text. | toolbarSettings: { items: ['Underline'] } |
| StrikeThrough | Applies a line through the selected text. | toolbarSettings: { items: ['StrikeThrough'] } |
| SubScript | Positions the selected text slightly below the normal line. | toolbarSettings: { items: ['SubScript'] } |
| SuperScript | Positions the selected text slightly above the normal line. | toolbarSettings: { items: ['SuperScript'] } |
| LowerCase | Converts the selected text to lowercase. | toolbarSettings: { items: ['LowerCase'] } |
| UpperCase | Converts the selected text to uppercase. | toolbarSettings: { items: ['UpperCase'] } |
| InlineCode | Formats the selected text as inline code. | toolbarSettings: { items: ['InlineCode'] } |
| FontName | Defines the font family applied to the selected text. | toolbarSettings: { items: ['FontName'] } |
| FontSize | Defines the font size applied to the selected text. | toolbarSettings: { items: ['FontSize'] } |
| FontColor | Applies a foreground color to the selected text. | toolbarSettings: { items: ['FontColor'] } |
| BackgroundColor | Applies a highlight (background) color to the selected text. | toolbarSettings: { items: ['BackgroundColor'] } |
| ClearFormat | Removes all inline formatting from the selected text. | toolbarSettings: { items: ['ClearFormat'] } |
| HorizontalLine | Inserts a horizontal line at the caret position. | toolbarSettings: { items: ['HorizontalLine'] } |

## Toggle text styles

The toggle styles include `Bold`, `Italic`, `Underline`, `StrikeThrough`, `SubScript`, `SuperScript`, `LowerCase`, `UpperCase`, and `InlineCode`. They carry no value payload — clicking the toolbar item, or invoking the command without arguments, flips the mark for the selection or sets the active typing mark for a collapsed caret.

## Font and styling

The `FontName`, `FontSize`, `FontColor`, and `BackgroundColor` toolbar items are bound to a `FontName` dropdown, a `FontSize` dropdown, and the foreground and background Color Picker controls respectively. Each accepts a typed payload and the empty string removes the corresponding mark from the selection. For property-by-property configuration, see [Options](options.md).

## Clear all inline formatting

The `ClearFormat` toolbar item strips every inline mark (bold, italic, underline, strikethrough, subscript, superscript, code, color, highlight, font size, and font family) from the current selection without altering the block structure. For a programmatic equivalent, use `clearFormat` from the [Commands](commands.md) page.

## See also

* [Options](options.md) — property surface for `fontSize`, `fontFamily`, `fontColor`, and `backgroundColor`.
* [Commands](commands.md) — how to invoke every inline format from code.
