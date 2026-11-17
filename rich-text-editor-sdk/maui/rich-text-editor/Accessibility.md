---
layout: post
title: Accessibility in .NET MAUI RichTextEditor control | Syncfusion®
description: Learn here all about accessibility features and keyboard shortcuts in Syncfusion® .NET MAUI RichTextEditor (SfRichTextEditor) control.
platform: MAUI
control: SfRichTextEditor
documentation: ug
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Accessibility in .NET MAUI RichTextEditor

The RichTextEditor works effectively with the icons on its toolbar, providing voice descriptions of their names and functions.

## Keyboard shortcuts

The [Syncfusion .NET MAUI RichTextEditor](https://www.syncfusion.com/rich-text-editor-sdk/maui-rich-text-editor) supports keyboard shortcuts for user interaction. The following table outlines the available shortcuts and their associated functions.

### Toolbar

<table> <tr> <td> <b> Shortcut Keys </b> <br/><br/></td><td> <b> Descriptions </b> <br/><br/></td></tr> <tr> <td> Tab<br/><br/></td><td>Moves selection to the next focusable toolbar item. <br/><br/></td></tr> <tr> <td> Shift + Tab<br/><br/></td><td> Moves selection to the previous focusable toolbar item. <br/><br/></td></tr> <tr> <td> Enter<br/><br/></td><td> Performs the action of the focused toolbar item.<br/><br/></td></tr><tr> <td> Ctrl + A<br/><br/></td><td> Selects all content in the rich text editor. <br/><br/></td></tr> <tr> <td> Ctrl + B<br/><br/></td><td> Applies or removes bold formatting on the selected text. <br/><br/></td></tr> <tr> <td> Ctrl + I<br/><br/></td><td> Applies or removes italic formatting on the selected text. <br/><br/></td></tr> <tr> <td> Ctrl + U<br/><br/></td><td> Applies or removes underline formatting on the selected text. <br/><br/></td></tr> <tr> <td> Ctrl + Shift + X<br/><br/></td><td> Applies or removes strikethrough formatting on the selected text. <br/><br/></td></tr> <tr> <td> Ctrl + Z<br/><br/></td><td> Reverses the most recent action performed in the rich text editor. <br/><br/></td></tr> <tr> <td> Ctrl + Y<br/><br/></td><td> Restores the last undone action. <br/><br/></td></tr> <tr> <td> Shift + Tab <br/><br/></td><td> Decreases the indent level of the current block or paragraph. <br/><br/></td></tr> <tr> <td> Ctrl + L<br/><br/></td><td> Aligns the selected text or paragraph to the left. <br/><br/></td></tr> <tr> <td> Ctrl + E<br/><br/></td><td> Aligns the selected text or paragraph to the center. <br/><br/></td></tr> <tr> <td> Ctrl + R<br/><br/></td><td> Aligns the selected text or paragraph to the right. <br/><br/></td></tr> <tr> <td> Ctrl + J<br/><br/></td><td> Justifies the selected text or paragraph. <br/><br/></td></tr> </table>

N> Use the `Command` key instead of the `Ctrl` key on macOS.

## Accessing RichTextEditor ToolbarItem Elements

The following table illustrates the predefined automation identifier patterns for RichTextEditor toolbar elements. These identifiers enable UI automation frameworks and test scripts to locate and interact with individual toolbar items directly.

<table> <tr> <td><b>Element</b></td> <td><b>AutomationId Pattern</b></td> </tr> <tr> <td>Bold</td> <td>Bold</td> </tr> <tr> <td>Italic</td> <td>Italic</td> </tr> <tr> <td>Underline</td> <td>Underline</td> </tr> <tr> <td>Strikethrough</td> <td>Strikethrough</td> </tr> <tr> <td>Subscript</td> <td>Subscript</td> </tr> <tr> <td>Superscript</td> <td>Superscript</td> </tr> <tr> <td>Undo</td> <td>Undo</td> </tr> <tr> <td>Redo</td> <td>Redo</td> </tr> <tr> <td>Inline Code</td> <td>InlineCode</td> </tr> <tr> <td>Clear Format</td> <td>ClearFormat</td> </tr> <tr> <td>Blockquote</td> <td>BlockQuote</td> </tr> <tr> <td>Horizontal Line</td> <td>HorizontalLine</td> </tr> <tr> <td>Increase Indent</td> <td>IncreaseIndent</td> </tr> <tr> <td>Decrease Indent</td> <td>DecreaseIndent</td> </tr> <tr> <td>Task List</td> <td>TaskList</td> </tr> <tr> <td>Hyperlink</td> <td>Hyperlink</td> </tr> <tr> <td>Code Block</td> <td>CodeBlock</td> </tr> <tr> <td>Image</td> <td>Image</td> </tr> <tr> <td>Table</td> <td>Table</td> </tr> <tr> <td>Export PDF</td> <td>ExportPdf</td> </tr> </table>