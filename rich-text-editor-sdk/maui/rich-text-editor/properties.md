---
layout: post
title: Properties of .NET MAUI Rich Text Editor control | Syncfusion®
description: This section explains the properties, events and methods with Syncfusion® MAUI SfRichTextEditor control.
platform: maui
control: SfRichTextEditor
documentation: ug
---

# API Reference for .NET MAUI Rich Text Editor


## Properties

<table>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_BorderColor" aria-label="View BorderColor property in API reference">BorderColor</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/microsoft.maui.graphics.color" aria-label="View Color type in API reference">Color</a></td>
    <td>Customizes the border color of the rich text editor.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_BorderThickness" aria-label="View BorderThickness property in API reference">BorderThickness</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.double" aria-label="View Double type in API reference">double</a></td>
    <td>Controls the thickness, in pixels, of the border drawn around the editor.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_CodeBlockLanguages" aria-label="View CodeBlockLanguages property in API reference">CodeBlockLanguages</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1" aria-label="View IList type in API reference">IList&lt;string&gt;</a></td>
    <td>Provides the list of programming languages shown in the code-block language dropdown on the toolbar. When populated, users can pick a language to apply syntax-aware formatting to a code block.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_DefaultFontFamily" aria-label="View DefaultFontFamily property in API reference">DefaultFontFamily</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.string" aria-label="View String type in API reference">string</a></td>
    <td>Controls the font family applied to text the user types before any font is explicitly chosen from the toolbar.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_DefaultFontSize" aria-label="View DefaultFontSize property in API reference">DefaultFontSize</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.double" aria-label="View Double type in API reference">double</a></td>
    <td>Controls the font size in pixels applied to text the user types before any size is explicitly chosen from the toolbar.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_DefaultTextColor" aria-label="View DefaultTextColor property in API reference">DefaultTextColor</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/microsoft.maui.graphics.color" aria-label="View Color type in API reference">Color</a></td>
    <td>Controls the text color applied to text the user types before any color is explicitly chosen from the toolbar.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_EditorBackgroundColor" aria-label="View EditorBackgroundColor property in API reference">EditorBackgroundColor</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/microsoft.maui.graphics.color" aria-label="View Color type in API reference">Color</a></td>
    <td>Customizes the background color of the editor area.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_EnableAutoSize" aria-label="View EnableAutoSize property in API reference">EnableAutoSize</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.boolean" aria-label="View Boolean type in API reference">bool</a></td>
    <td>Lets the editor grow or shrink its height to match the amount of content, removing empty space when content is short and avoiding internal scrolling when content is long.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_EnableLiquidGlassEffect" aria-label="View EnableLiquidGlassEffect property in API reference">EnableLiquidGlassEffect</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.boolean" aria-label="View Boolean type in API reference">bool</a></td>
    <td>Applies the Liquid Glass visual treatment to the editor surface for a polished, translucent appearance. Supported on iOS 26 or later and macOS 26 or later with .NET 10 or later; unsupported configurations use the standard background. Default is false.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_EnableWordWrap" aria-label="View EnableWordWrap property in API reference">EnableWordWrap</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.boolean" aria-label="View Boolean type in API reference">bool</a></td>
    <td>Lets long lines of text break to the next line so they remain visible without horizontal scrolling.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_FontFamilies" aria-label="View FontFamilies property in API reference">FontFamilies</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1" aria-label="View IList type in API reference">IList&lt;RichTextEditorFontStyle&gt;</a></td>
    <td>Provides the list of font family choices available in the toolbar's font family dropdown.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_HtmlText" aria-label="View HtmlText property in API reference">HtmlText</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.string" aria-label="View String type in API reference">string</a></td>
    <td>Provides the editor's content, including formatting, as an HTML string. Assign HTML to load existing content and read it back after the user edits.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_IsFocused" aria-label="View IsFocused property in API reference">IsFocused</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.boolean" aria-label="View Boolean type in API reference">bool</a></td>
    <td>Reports whether the editor currently has input focus and the on-screen keyboard is shown on mobile, or the caret is active on desktop.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_Placeholder" aria-label="View Placeholder property in API reference">Placeholder</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.string" aria-label="View String type in API reference">string</a></td>
    <td>Displays hint text inside the editing area when it is empty, guiding the user on what to enter.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_PlaceholderColor" aria-label="View PlaceholderColor property in API reference">PlaceholderColor</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/microsoft.maui.graphics.color" aria-label="View Color type in API reference">Color</a></td>
    <td>Customizes the text color of the placeholder hint.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_PlaceholderFontFamily" aria-label="View PlaceholderFontFamily property in API reference">PlaceholderFontFamily</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.string" aria-label="View String type in API reference">string</a></td>
    <td>Specifies the font family used for the placeholder text.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_PlaceholderFontSize" aria-label="View PlaceholderFontSize property in API reference">PlaceholderFontSize</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.double" aria-label="View Double type in API reference">double</a></td>
    <td>Specifies the font size in pixels used for the placeholder text.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_ReadOnly" aria-label="View ReadOnly property in API reference">ReadOnly</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.boolean" aria-label="View Boolean type in API reference">bool</a></td>
    <td>Prevents the user from editing the content while still allowing it to be viewed and selected.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_ShowToolbar" aria-label="View ShowToolbar property in API reference">ShowToolbar</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.boolean" aria-label="View Boolean type in API reference">bool</a></td>
    <td>Shows or hides the formatting toolbar attached to the editor.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_TableCellColor" aria-label="View TableCellColor property in API reference">TableCellColor</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/microsoft.maui.graphics.color" aria-label="View Color type in API reference">Color</a></td>
    <td>Customizes the background color of table cells within the editor.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_TableCellSelectionColor" aria-label="View TableCellSelectionColor property in API reference">TableCellSelectionColor</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/microsoft.maui.graphics.color" aria-label="View Color type in API reference">Color</a></td>
    <td>Customizes the highlight color applied to a selected table cell.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_Text" aria-label="View Text property in API reference">Text</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.string" aria-label="View String type in API reference">string</a></td>
    <td>Provides the editor's content as plain text with all HTML formatting stripped out. Use this when only the raw text is needed.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_ToolbarItems" aria-label="View ToolbarItems property in API reference">ToolbarItems</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.RichTextEditorToolBarItemCollection.html" aria-label="View RichTextEditorToolBarItemCollection type in API reference">RichTextEditorToolBarItemCollection</a></td>
    <td>Defines which formatting actions appear in the toolbar and in what order. By default the built-in set of items is shown; a custom collection replaces that set.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_ToolbarPosition" aria-label="View ToolbarPosition property in API reference">ToolbarPosition</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.RichTextEditorToolbarPosition.html" aria-label="View RichTextEditorToolbarPosition enum in API reference">RichTextEditorToolbarPosition</a></td>
    <td>Chooses where the toolbar appears relative to the editing area—Top, Bottom, or None.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_ToolbarSettings" aria-label="View ToolbarSettings property in API reference">ToolbarSettings</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.RichTextEditorToolbarSettings.html" aria-label="View RichTextEditorToolbarSettings type in API reference">RichTextEditorToolbarSettings</a></td>
    <td>Configures visual aspects of the toolbar such as background, spacing, and available on-demand items.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_UseHybridWebView" aria-label="View UseHybridWebView property in API reference">UseHybridWebView</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.boolean" aria-label="View Boolean type in API reference">bool</a></td>
    <td>Switches the editor's internal web view to hybrid mode, which can improve rendering and scripting behavior on supported platforms. Supported on iOS 18 and later, macOS 15 and later, Android, and Windows; has no effect on platforms that do not support hybrid WebView.</td>
</tr>
</table>

## Methods

<table>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_AlignCenter" aria-label="View AlignCenter method in API reference">AlignCenter()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Centers the paragraph at the cursor or every paragraph in the current selection.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_AlignJustify" aria-label="View AlignJustify method in API reference">AlignJustify()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Justifies the paragraph at the cursor or every paragraph in the current selection so that both the left and right edges are flush.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_AlignLeft" aria-label="View AlignLeft method in API reference">AlignLeft()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Aligns the paragraph at the cursor or every paragraph in the current selection to the left edge.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_AlignRight" aria-label="View AlignRight method in API reference">AlignRight()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Aligns the paragraph at the cursor or every paragraph in the current selection to the right edge.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_ApplyFontFamily_System_String_" aria-label="View ApplyFontFamily method in API reference">ApplyFontFamily(String)</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Applies the given font family to the selected text, or establishes the font family for text typed next at the cursor when there is no selection.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_ApplyFontSize_System_Double_" aria-label="View ApplyFontSize method in API reference">ApplyFontSize(Double)</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Applies the given font size, in pixels, to the selected text, or establishes the size for text typed next at the cursor when there is no selection.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_ApplyHighlightColor_Microsoft_Maui_Graphics_Color_" aria-label="View ApplyHighlightColor method in API reference">ApplyHighlightColor(Color)</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Applies the given color as a background highlight behind the selected text, or establishes the highlight color for text typed next at the cursor when there is no selection.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_ApplyParagraphFormat_Syncfusion_Maui_RichTextEditor_RichTextEditorParagraphFormat_" aria-label="View ApplyParagraphFormat method in API reference">ApplyParagraphFormat(RichTextEditorParagraphFormat)</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Applies the given paragraph format—Paragraph, Heading1 through Heading4, Quotation, or CodeBlock—to the paragraph at the cursor or every paragraph in the current selection.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_ApplyTextColor_Microsoft_Maui_Graphics_Color_" aria-label="View ApplyTextColor method in API reference">ApplyTextColor(Color)</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Applies the given color to the selected text, or establishes the text color for text typed next at the cursor when there is no selection.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_DecreaseIndent" aria-label="View DecreaseIndent method in API reference">DecreaseIndent()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Reduces the left indentation of the paragraph at the cursor or every paragraph in the current selection.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_Dispose" aria-label="View Dispose method in API reference">Dispose()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Releases the WebView and other native resources the editor holds. The editor cannot be reused after this is called.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_EditHyperlink_System_String_System_String_System_String_" aria-label="View EditHyperlink method in API reference">EditHyperlink(String, String, String)</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Updates the display text and URL of an existing hyperlink at the current selection. The original URL locates the link, and the new URL and display text replace the old values.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_Focus" aria-label="View Focus method in API reference">Focus()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Places the input focus in the editor, showing the on-screen keyboard on mobile and activating the caret on desktop.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_GetSelectedText" aria-label="View GetSelectedText method in API reference">GetSelectedText()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" aria-label="View Task type in API reference">Task&lt;string&gt;</a></td>
    <td>Retrieves the plain text of the current selection asynchronously, producing an empty string when nothing is selected.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_IncreaseIndent" aria-label="View IncreaseIndent method in API reference">IncreaseIndent()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Increases the left indentation of the paragraph at the cursor or every paragraph in the current selection.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_InsertHyperlink_System_String_System_String_" aria-label="View InsertHyperlink method in API reference">InsertHyperlink(String, String)</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Inserts a hyperlink with the given display text and URL at the cursor. When text is selected, the selected text becomes the display text and the URL is applied as the link target. After insertion, a quick toolbar with Open, Edit Link, and Remove Link appears; it auto-hides two seconds after opening.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_InsertHyperlinkAsync_System_String_System_String_System_String_" aria-label="View InsertHyperlinkAsync method in API reference">InsertHyperlinkAsync(String, String, String)</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" aria-label="View Task type in API reference">Task&lt;bool&gt;</a></td>
    <td>Inserts a hyperlink asynchronously with the given URL, display text, and optional title attribute. Produces true when the link is inserted successfully, or false when the cursor is not inside the editing area or the operation fails. After insertion, a quick toolbar with Open, Edit Link, and Remove Link appears; it auto-hides two seconds after opening.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_InsertImage_Syncfusion_Maui_RichTextEditor_RichTextEditorImageSource_" aria-label="View InsertImage method in API reference">InsertImage(RichTextEditorImageSource)</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Inserts an image at the cursor using the supplied image source, which can reference a byte array, a file path, or a URL.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_InsertTable_System_Int32_System_Int32_" aria-label="View InsertTable method in API reference">InsertTable(Int32, Int32)</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Inserts a table with the given number of rows and columns at the cursor so the user can begin filling in cells.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_MoveCursorToEnd" aria-label="View MoveCursorToEnd method in API reference">MoveCursorToEnd()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Moves the caret to the end of the editor content, placing it after the last character.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_MoveCursorToStart" aria-label="View MoveCursorToStart method in API reference">MoveCursorToStart()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Moves the caret to the beginning of the editor content, placing it before the first character.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_Redo" aria-label="View Redo method in API reference">Redo()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Reapplies the last editing action that was undone by Undo.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_RemoveHyperlink_System_String_System_String_" aria-label="View RemoveHyperlink method in API reference">RemoveHyperlink(String, String)</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Removes the hyperlink at the cursor while keeping the display text in the document. The display text and URL are used to locate the link to remove.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_ToggleBold" aria-label="View ToggleBold method in API reference">ToggleBold()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Applies bold formatting to the selected text, or removes it when the selection is already bold.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_ToggleBulletList" aria-label="View ToggleBulletList method in API reference">ToggleBulletList()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Converts the paragraph at the cursor into a bullet list, or removes bullet formatting when the paragraph is already a bullet list item.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_ToggleItalic" aria-label="View ToggleItalic method in API reference">ToggleItalic()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Applies italic formatting to the selected text, or removes it when the selection is already italic.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_ToggleNumberedList" aria-label="View ToggleNumberedList method in API reference">ToggleNumberedList()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Converts the paragraph at the cursor into a numbered list, or removes numbered formatting when the paragraph is already a numbered list item.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_ToggleStrikethrough" aria-label="View ToggleStrikethrough method in API reference">ToggleStrikethrough()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Applies strikethrough formatting to the selected text, or removes it when the selection is already struck through.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_ToggleSubscript" aria-label="View ToggleSubscript method in API reference">ToggleSubscript()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Applies subscript formatting to the selected text, or removes it when the selection is already subscript.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_ToggleSuperscript" aria-label="View ToggleSuperscript method in API reference">ToggleSuperscript()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Applies superscript formatting to the selected text, or removes it when the selection is already superscript.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_ToggleUnderline" aria-label="View ToggleUnderline method in API reference">ToggleUnderline()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Applies underline formatting to the selected text, or removes it when the selection is already underlined.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_Undo" aria-label="View Undo method in API reference">Undo()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Reverts the last editing action the user performed, restoring the content to its previous state.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_Unfocus" aria-label="View Unfocus method in API reference">Unfocus()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Removes input focus from the editor, dismissing the on-screen keyboard on mobile and deactivating the caret on desktop.</td>
</tr>
</table>

## Events

<table>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_Focused" aria-label="View Focused event in API reference">Focused</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler" aria-label="View EventHandler type in API reference">EventHandler</a></td>
    <td>Raised when the editor receives input focus, either because the user tapped inside it or Focus was called.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_FormatChanged" aria-label="View FormatChanged event in API reference">FormatChanged</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" aria-label="View EventHandler type in API reference">EventHandler&lt;<a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.RichTextEditorFormatChangedEventArgs.html" aria-label="View RichTextEditorFormatChangedEventArgs type in API reference">RichTextEditorFormatChangedEventArgs&gt;</a></a></td>
    <td>Raised when the formatting state at the cursor or selection changes so the host can update toolbar toggle states to match the active formatting.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_HyperlinkClicked" aria-label="View HyperlinkClicked event in API reference">HyperlinkClicked</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" aria-label="View EventHandler type in API reference">EventHandler&lt;<a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.RichTextEditorHyperlinkClickedEventArgs.html" aria-label="View RichTextEditorHyperlinkClickedEventArgs type in API reference">RichTextEditorHyperlinkClickedEventArgs&gt;</a></a></td>
    <td>Raised when a user taps a hyperlink inside the content, carrying the link text and URL so the host can decide whether to open it in a browser or handle it internally.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_ImageRequested" aria-label="View ImageRequested event in API reference">ImageRequested</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" aria-label="View EventHandler type in API reference">EventHandler&lt;<a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.RichTextEditorImageRequestedEventArgs.html" aria-label="View RichTextEditorImageRequestedEventArgs type in API reference">RichTextEditorImageRequestedEventArgs&gt;</a></a></td>
    <td>Raised when the user taps the image button on the toolbar, giving the host a chance to supply an image source for insertion at the cursor.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_TextChanged" aria-label="View TextChanged event in API reference">TextChanged</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" aria-label="View EventHandler type in API reference">EventHandler&lt;<a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.RichTextEditorTextChangedEventArgs.html" aria-label="View RichTextEditorTextChangedEventArgs type in API reference">RichTextEditorTextChangedEventArgs&gt;</a></a></td>
    <td>Raised whenever the editor content changes through typing, deleting, formatting, or programmatic updates to HtmlText or Text.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html#Syncfusion_Maui_RichTextEditor_SfRichTextEditor_Unfocused" aria-label="View Unfocused event in API reference">Unfocused</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler" aria-label="View EventHandler type in API reference">EventHandler</a></td>
    <td>Raised when the editor loses input focus, either because the user tapped outside it or Unfocus was called.</td>
</tr>
</table>