---
layout: post
title: Toolbar in JavaScript Modern Rich Text Editor | Syncfusion
description: Learn how to configure toolbar items, layout, and floating behavior, and how to react to toolbar events in the JavaScript Modern Rich Text Editor.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Toolbar in JavaScript Modern Rich Text Editor

The main toolbar is the primary interaction surface for formatting commands, and its layout and contents are fully configurable through `toolbarSettings`.

## Configuring toolbar items

Set `toolbarSettings.items` to the ordered list of buttons (and `'|'` separators) you want to show. The default set already covers the common cases — `['Bold','Italic','Underline','Strikethrough','|','Formats','Alignment','BulletList','NumberedList','|','Link','Image','Table','|','Undo','Redo']` — so you only need to set this when you want to trim it down or add other built-in tools.

If you don't want a toolbar at all — for example, when the editor is driven entirely by your own UI — set `toolbarSettings.enable` to `false` and no toolbar is rendered; the editor stays fully usable programmatically.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/toolbar-config/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/toolbar-config/index.html %}
{% endhighlight %}
{% endtabs %}

## Toolbar types

When your item list is longer than the available width, `toolbarSettings.type` decides how the overflow is handled: leave it at the default `'Auto'` to scroll only when needed, use `'Scrollable'` to always allow horizontal scrolling, or use `'MultiRow'` (as in the sample above) to wrap the extra items onto additional rows instead.

## Toolbar position

By default the toolbar sits at the top of the editor (`toolbarSettings.position: 'Top'`); set it to `'Bottom'` if your layout calls for the toolbar underneath the content instead.

## Creating a sticky toolbar

For a long document, losing the toolbar off-screen as the user scrolls down is disruptive. `toolbarSettings.enableFloating` is `true` by default, so the toolbar automatically detaches and sticks in place once the editor scrolls out of view. If your page already has a sticky header, use `toolbarSettings.floatingOffset` to push the floating toolbar down by that many pixels so the two don't overlap. Set `enableFloating` to `false` if you'd rather the toolbar just scroll away with the content.

## Toolbar events

Listen for `itemClicked` if you need to know whenever a toolbar button is clicked, before its command runs — useful for logging or for intercepting a specific item. Listen for `updatedToolbarStatus` if instead you want to know whenever the *active* formatting state changes as the user moves their cursor or selection, so you can keep an external UI (like a custom status bar) in sync with what's currently applied at the cursor.

## Updating toolbar items at runtime

If your toolbar needs to change based on application state — for example, showing a different set of tools depending on the user's permissions — call `editor.updateToolbarItems(updates)` with a batch of add/remove/reorder operations. The editor reconciles only what actually changed rather than re-rendering the whole toolbar, so things like an open dropdown or current focus aren't disrupted.
