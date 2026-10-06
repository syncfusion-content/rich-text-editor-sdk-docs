---
layout: post
title: Toolbar Types in React Modern Rich Text Editor | Syncfusion
description: Learn how to configure toolbar items, layout, and floating behavior in the React Modern Rich Text Editor.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Toolbar Types in React Modern Rich Text Editor

The main toolbar is the primary interaction surface for formatting commands, and its layout and contents are fully configurable through `toolbarSettings`.

## Items & Types

### Toolbar items

Set `toolbarSettings.items` to the ordered list of buttons (and `'|'` separators) you want to show. The default set already covers the common cases — `['Bold','Italic','Underline','Strikethrough','|','Formats','Alignment','BulletList','NumberedList','|','Link','Image','Table','|','Undo','Redo']` — so you only need to set this when you want to trim it down or add other built-in tools.

If you don't want a toolbar at all — for example, when the editor is driven entirely by your own UI, as in the [ribbon sample](../toolbar/custom-toolbar-items#updatedtoolbarstatus-event) — set `toolbarSettings.enable` to `false` and no toolbar is rendered; the editor stays fully usable programmatically.

{% tabs %}

{% highlight ts tabtitle="App.tsx" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/toolbar/Toolbar-config/app/App.tsx %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/toolbar/Toolbar-config/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/toolbar/Toolbar-config/" %}

#### Available toolbar items

The built-in items you can list in [`toolbarSettings.items`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/builtInToolbarItem):

* **History** — `Undo`, `Redo`
* **Text formatting** — `Bold`, `Italic`, `Underline`, `Strikethrough`, `Subscript`, `Superscript`, `InlineCode`, `ClearFormat`
* **Font and color** — `FontName`, `FontSize`, `FontColor`, `BackgroundColor`
* **Structure** — `Formats`, `Paragraph`, `Quote`, `Callout`, `CodeBlock`, `Indent`, `Outdent`, `HorizontalLine`
* **Alignment** — `Alignment`, `AlignLeft`, `AlignCenter`, `AlignRight`, `AlignJustify`
* **Lists** — `BulletFormatList`, `BulletList`, `NumberFormatList`, `NumberedList`
* **Insert** — `Link`, `Image`, `Table`

Beyond these, you can add your own entries — see [Custom toolbar item](../toolbar/custom-toolbar-items) below.

### Layout configuration

#### Type

When your item list is longer than the available width, [`toolbarSettings.type`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/toolbarType) controls how overflow items are displayed. The default value is `'Auto'`, which automatically uses `'Expanded'` mode on web/desktop devices and `'Scrollable'` mode on mobile devices. In `'Expanded'` mode, all toolbar items remain visible by expanding the toolbar to accommodate the available commands without introducing horizontal scrolling. Use `'Scrollable'` to always enable horizontal scrolling, or use `'MultiRow'` to wrap overflow items onto additional rows.

#### Position

By default the toolbar sits at the top of the editor (`toolbarSettings.position: 'Top'`); set it to `'Bottom'` if your layout calls for the toolbar underneath the content instead.

### Floating Toolbar

For a long document, losing the toolbar off-screen as the user scrolls down is disruptive. [`toolbarSettings.enableFloating`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/toolbarSettings#enableFloating) is `true` by default, so the toolbar automatically detaches and sticks in place once the editor scrolls out of view. Set it to `false` if you'd rather the toolbar just scroll away with the content. If your page includes a sticky header, use [`toolbarSettings.floatingOffset`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/toolbarSettings#floatingOffset) to add a top offset (in pixels) and prevent the floating toolbar from overlapping the header. The default value is `0`.


{% tabs %}

{% highlight ts tabtitle="App.tsx" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/toolbar/Toolbar-type/app/App.tsx %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/toolbar/Toolbar-type/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/toolbar/Toolbar-type/" %}
