---
layout: post
title: Toolbar Types in JavaScript Modern Rich Text Editor | Syncfusion
description: Learn how to configure toolbar items, layout, and floating behavior in the JavaScript Modern Rich Text Editor.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Toolbar Types in JavaScript Modern Rich Text Editor

The main toolbar is the primary interaction surface for formatting commands, and its layout and contents are fully configurable through `toolbarSettings`.

## Items & Types

### Toolbar items

Set `toolbarSettings.items` to the ordered list of buttons (and `'|'` separators) you want to show. The default set already covers the common cases — `['Bold','Italic','Underline','Strikethrough','|','Formats','Alignment','BulletList','NumberedList','|','Link','Image','Table','|','Undo','Redo']` — so you only need to set this when you want to trim it down or add other built-in tools.

If you don't want a toolbar at all — for example, when the editor is driven entirely by your own UI, as in the [ribbon sample](../toolbar/custom-toolbar-items#updatedtoolbarstatus-event) — set `toolbarSettings.enable` to `false` and no toolbar is rendered; the editor stays fully usable programmatically.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/toolbar-config/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/toolbar-config/index.html %}
{% endhighlight %}
{% endtabs %}

#### Available toolbar items

The built-in items you can list in `toolbarSettings.items`:

* **History** — `Undo`, `Redo`
* **Text formatting** — `Bold`, `Italic`, `Underline`, `Strikethrough`, `Subscript`, `Superscript`, `InlineCode`, `ClearFormat`
* **Font and color** — `FontName`, `FontSize`, `FontColor`, `BackgroundColor`
* **Structure** — `Formats`, `Paragraph`, `Quote`, `CodeBlock`, `Indent`, `Outdent`
* **Alignment** — `Alignment`, `AlignLeft`, `AlignCenter`, `AlignRight`, `AlignJustify`
* **Lists** — `BulletFormatList`, `BulletList`, `NumberFormatList`, `NumberedList`
* **Insert** — `Link`, `Image`, `Table`

Beyond these, you can add your own entries — see [Custom toolbar item](../toolbar/custom-toolbar-items) below.

### Layout configuration

#### Type

When your item list is longer than the available width, `toolbarSettings.type` decides how the overflow is handled: leave it at the default `'Auto'` to scroll only when needed, use `'Scrollable'` to always allow horizontal scrolling, or use `'MultiRow'` (as in the sample above) to wrap the extra items onto additional rows instead.

#### Position

By default the toolbar sits at the top of the editor (`toolbarSettings.position: 'Top'`); set it to `'Bottom'` if your layout calls for the toolbar underneath the content instead.

### Floating Toolbar

For a long document, losing the toolbar off-screen as the user scrolls down is disruptive. `toolbarSettings.enableFloating` is `true` by default, so the toolbar automatically detaches and sticks in place once the editor scrolls out of view. Set it to `false` if you'd rather the toolbar just scroll away with the content.

#### Floating toolbar offset

If your page already has a sticky header, use `toolbarSettings.floatingOffset` to push the floating toolbar down by that many pixels so the two don't overlap. Default `0`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/toolbar-type/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/toolbar-type/index.html %}
{% endhighlight %}
{% endtabs %}
