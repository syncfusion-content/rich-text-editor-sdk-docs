---
layout: post
title: Custom Toolbar Item in Angular Modern Rich Text Editor | Syncfusion
description: Learn how to add custom toolbar items, handle itemClicked and updatedToolbarStatus events, and update them in the Angular Modern Rich Text Editor.
control: Modern Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Custom Toolbar Items in Angular Modern Rich Text Editor

Alongside the built-in strings, [`toolbarSettings.items`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/customToolbarItem) also accepts item objects for tools of your own. Give each one an `actionId` — a unique identifier you'll check for in the `itemClicked` handler — plus the usual presentation properties (`prefixIcon`/`suffixIcon`, `tooltipText`, `align`, `cssClass`, `disabled`, and so on, the same set the underlying EJ2 Toolbar item model uses).

{% tabs %}

{% highlight ts tabtitle="app.component.ts" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/toolbar/custom-item/src/app.component.ts %}

{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/toolbar/custom-item/src/app.component.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/toolbar/custom-item/" %}

## itemClicked Event

Listen for `itemClicked` to know whenever any toolbar button is clicked, before its command runs — this is also how you handle a custom item's action, since custom items don't have a built-in command of their own. The event args' `item` field is the toolbar item's model, so check `args.item.actionId` to identify which custom item was clicked.

Refer to the sample above: clicking the word-count button reads `args.item.actionId`, and if it matches `'wordCount'`, calls `editor.getText()` to count and display the words in the document.

## updatedToolbarStatus Event

The `updatedToolbarStatus` event is raised after the toolbar synchronizes its visual state with the current editor selection or cursor formatting. Its event arguments provide the active inline marks, block-level formats, and resolved font and color styles.

The following example demonstrates how to handle the `updatedToolbarStatus` event and display which text formatting styles (bold, italic, underline, strikethrough) are currently active at the cursor position.

{% tabs %}

{% highlight ts tabtitle="app.component.ts" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/toolbar/updateToolbarStatus/src/app.component.ts %}

{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/toolbar/updateToolbarStatus/src/app.component.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/toolbar/updateToolbarStatus/" %}

## Updating toolbar items at runtime

If your toolbar needs to change based on application state — for example, showing a different set of tools depending on the user's permissions — call `editor.updateToolbarItems(updates)` with a batch of add/remove/reorder operations. The editor reconciles only what actually changed rather than re-rendering the whole toolbar, so things like an open dropdown or current focus aren't disrupted.
