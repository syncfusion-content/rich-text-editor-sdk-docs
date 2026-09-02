---
layout: post
title: Editor Menus in Angular Block Editor | Syncfusion
description: Learn how to use the editor menus in the Angular Block Editor to add blocks via slash commands and contextual actions.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Editor Menus in Angular Block Editor

The Block Editor component includes several intuitive, context-aware menus that streamline content creation and editing. These menus provide quick access to formatting options and commands, improving user productivity.

## Slash command menu

The slash command menu lets users quickly insert or transform blocks by typing the trigger character `/` (forward slash) at the start of an empty block or paragraph, followed by a command name. This provides an efficient, keyboard-driven way to interact with the editor. The trigger character is configurable through the `commandMenuSettings` model.

### Built-in items

The slash command menu comes with a set of pre-defined commands for all block types:

-   **Headings (Level 1 to 4)**: Inserts a heading block of the corresponding level.
-   **Lists (Bullet, Numbered, Checklist)**: Creates a block for the specified list type.
-   **Paragraph**: Inserts a standard text block.
-   **Image**: Inserts a media block for images.
-   **Table**: Inserts a table block.
-   **Toggle**: Creates a collapsible content block.
-   **Callout**: Inserts a block for highlighting important information.
-   **Utility (Divider, Quote, Code)**: Inserts a utility block like a divider, quote, or code block.

### Customize the slash command menu

You can use the [commandMenuSettings](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#commandmenusettings) property to modify the slash command menu. This allows you to add custom commands, remove default items, or change the behavior of existing commands to fit your application's requirements.

### Events

The following events are available for the Slash Command menu:

|Name|Args|Description|
|---|---|---|
|[filtering](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/commandmenusettingsmodel#filtering)|CommandFilteringEventArgs|Triggers when the user types to filter the command menu items.|
|[itemSelect](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/commandmenusettingsmodel#itemselect)|CommandItemSelectEventArgs|Triggers when the user clicks on a command menu item.|

The following example demonstrates how to customize the Slash Command menu.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/editor-menus/slash-command/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/editor-menus/slash-command/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/editor-menus/slash-command/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/editor-menus/slash-command" %}

## Context menu

The context menu appears when a user right-clicks within a block. It provides context-aware actions relevant to the clicked block or the current selection.

### Built-in items

The context menu offers the following built-in options:

-  **Undo/Redo**: Reverses or re-applies the last action.
-  **Cut/Copy/Paste**: Standard clipboard actions for selected content.
-  **Indent**: Increases or decreases the indent level of the selected block.
-  **Link**: Allows you to add or edit a hyperlink for the selected text. When a link is present, the context menu provides options such as `Open Link`, `Edit Link`, `Copy Link`, and `Remove Link`.
-  **Table**: Provides built-in table actions such as `Insert` and `Delete`. These options appear in the context menu when the cursor is focused within a table cell and the context menu is opened

### Customize Context menu

You can use the [contextMenuSettings](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#contextmenusettings) property to customize the Context menu. This allows you to add specific actions or modify existing items based on your application needs.

### Events

The following events are available for the Context menu:

|Name|Args|Description|
|---|---|---|
|[beforeOpen](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/contextmenusettingsmodel#beforeopen)|ContextMenuBeforeOpenEventArgs|Triggers before the context menu opens.|
|[beforeClose](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/contextmenusettingsmodel#beforeclose)|ContextMenuBeforeCloseEventArgs|Triggers before the context menu closes.|
|[itemSelect](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/contextmenusettingsmodel#itemselect)|ContextMenuItemSelectEventArgs|Triggers when a context menu item is clicked.|

The following example demonstrates how to customize the Context menu.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/editor-menus/context-menu/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/editor-menus/context-menu/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/editor-menus/context-menu/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/editor-menus/context-menu" %}

## Block action menu

The block action menu appears next to a block when you hover over its drag handle and click the menu icon. It offers quick actions specific to that block, including duplicate, delete, and move up/down.

### Built-in items

The block action menu provides the following built-in actions for managing individual blocks:

-   **Duplicate**: Creates an exact copy of the current block.
-   **Delete**: Removes the block from the editor.
-   **Move Up**: Moves the block one position higher.
-   **Move Down**: Moves the block one position lower.

### Customize Block action menu

You can use the [blockActionMenuSettings](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#blockactionmenusettings) property to customize the Block action menu. This enables you to add block-specific commands that are relevant to your application, allowing for a highly tailored user experience.

#### Show or hide tooltip

By default, a tooltip is displayed when the user hovers over an action item. You can show or hide the tooltip using the [enableTooltip](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockactionmenusettingsmodel#enabletooltip) property in the block action menu settings.

### Events

The following events are available for the Block action menu:

|Name|Args|Description|
|---|---|---|
|[beforeOpen](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockactionmenusettingsmodel#beforeopen)|BlockActionMenuBeforeOpenEventArgs|Triggers before the block action menu opens.|
|[beforeClose](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockactionmenusettingsmodel#beforeclose)|BlockActionMenuBeforeCloseEventArgs|Triggers before the block action menu closes.|
|[itemSelect](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockactionmenusettingsmodel#itemselect)|BlockActionItemSelectEventArgs|Triggers when a block action menu item is clicked.|

The following example demonstrates how to customize the Block action menu.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/editor-menus/block-action/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/editor-menus/block-action/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/editor-menus/block-action/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/editor-menus/block-action" %}

## Inline toolbar

The Inline toolbar appears when text is selected in the editor, providing quick access to common text formatting actions that apply to inline content.

### Built-in items

The Inline Toolbar includes the following built-in formatting options:

-   **Text Styles**: Bold, Italic, Underline, and Strikethrough.
-   **Superscript/Subscript**: For mathematical or scientific notations.
-   **Case Conversion**: Change text to uppercase or lowercase.
-   **Text Color**: Change the color of the selected text.
-   **Background Color**: Change the background color of the selected text.

### Optional items

The inline toolbar can handle custom items like `Transform`, `InlineCode`, `Link` by passing array of string values in `items` property in [inlineToolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#inlinetoolbarsettings).

#### Transform block options

The inline toolbar includes `Transform` options to quickly convert blocks between different types. Use the [transformSettings](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#transformsettings) property to customize the transform menu — for example, to define which block types appear in the menu, set custom labels and icons, or wire up custom behavior.

#### Built-in transform block options

By default, the transform menu includes the following block types:

| Block type |
|------------|
| Paragraph |
| Heading 1 to Heading 4 |
| Checklist |
| BulletList |
| NumberedList |

> For blocks such as `Code`, `Callout`, `Quote`, `Divider`, `Image`, `Table`, and `Collapsible*` blocks, transform options are **not** offered. Choosing the transform action on one of these blocks inserts a new block of the target type instead of converting the current block in place.

#### Events

The following events are available for the transform toolbar item menu:

|Name|Args|Description|
|---|---|---|
|[itemSelect](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/transformsettingsmodel#itemselect)|TransformItemSelectEventArgs|Triggers when a command item is clicked.|

#### Inline code support

The `InlineCode` toolbar item formats the selected text as an inline code span (using the `ContentType.Text` content item with `properties.styles.inlineCode = true`). It renders with light syntax highlighting and can be combined with other inline styles such as **Bold** and *Italic*.

#### Inline link support

The `Link` toolbar item opens a link dialog when clicked. Provide a URL and an optional display text, and the link is inserted on the selected text. The inserted link can be edited, opened, copied, or removed later through the context menu.

The following example demonstrates how to customize the transform, inline code, and link items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/editor-menus/inline-toolbar/transform-item/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/editor-menus/inline-toolbar/transform-item/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/editor-menus/inline-toolbar/transform-item/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/editor-menus/inline-toolbar/transform-item" %}

#### Font and background color support

The inline toolbar provides `Color` and `BackgroundColor` items, each integrated with a ColorPicker. Use the [fontColorSettings](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#fontcolorsettings) and [backgroundColorSettings](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#backgroundcolorsettings) properties to control text color, highlighting, predefined palettes, custom colors, and live previews.

The following example demonstrates how to customize the font and background color toolbar items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/editor-menus/inline-toolbar/color-item/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/editor-menus/inline-toolbar/color-item/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/editor-menus/inline-toolbar/color-item/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/editor-menus/inline-toolbar/color-item" %}

### Customize Inline Toolbar

You can use the [inlineToolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#inlinetoolbarsettings) property to customize the Inline Toolbar by adding or removing formatting options based on your application's needs.

### Events

The following events are available for the Inline Toolbar:

|Name|Args|Description|
|---|---|---|
|[itemClick](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/inlinetoolbarsettingsmodel#itemclick)|ToolbarItemClickEventArgs|Triggers when the user clicks on an inline toolbar item.|

The following example demonstrates how to customize the Inline Toolbar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/editor-menus/inline-toolbar/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/editor-menus/inline-toolbar/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/editor-menus/inline-toolbar/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/editor-menus/inline-toolbar" %}