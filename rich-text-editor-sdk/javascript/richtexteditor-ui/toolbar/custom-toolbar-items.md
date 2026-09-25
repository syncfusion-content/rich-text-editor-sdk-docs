---
layout: post
title: Custom Toolbar Item in JavaScript Modern Rich Text Editor | Syncfusion
description: Learn how to add custom toolbar items, handle itemClicked and updatedToolbarStatus events, and update them in the JavaScript Modern Rich Text Editor.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Custom Toolbar Items in JavaScript Modern Rich Text Editor

Alongside the built-in strings, `toolbarSettings.items` also accepts item objects for tools of your own. Give each one an `actionId` — a unique identifier you'll check for in the `itemClicked` handler — plus the usual presentation properties (`prefixIcon`/`suffixIcon`, `tooltipText`, `align`, `cssClass`, `disabled`, and so on, the same set the underlying EJ2 Toolbar item model uses).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/toolbar-custom-item/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/toolbar-custom-item/index.html %}
{% endhighlight %}
{% endtabs %}

## itemClicked Event

Listen for `itemClicked` to know whenever any toolbar button is clicked, before its command runs — this is also how you handle a custom item's action, since custom items don't have a built-in command of their own. The event args' `item` field is the toolbar item's model, so check `args.item.actionId` to identify which custom item was clicked.

Refer to the sample above: clicking the word-count button reads `args.item.actionId`, and if it matches `'wordCount'`, calls `editor.getText()` to count and display the words in the document.

## updatedToolbarStatus Event

Where `itemClicked` tells you a button was pressed, `updatedToolbarStatus` tells you what's currently active at the cursor — it fires whenever the selection moves or changes, with a snapshot of the current formatting state:

* `args.activeMarks` — booleans for `bold`, `italic`, `underline`, `strikethrough`, `subscript`, `superscript`, `inlineCode`.
* `args.blockFormats` — booleans for `paragraph`, `blockQuote`, `orderedList`, `bulletList`, `codeBlock`, `alignLeft`, `alignCenter`, `alignRight`, `alignJustify`, plus `heading` (a string such as `'heading1'`, or `null` when the block isn't a heading).
* `args.styles` — the resolved `fontColor`, `backgroundColor`, `fontFamily`, and `fontSize` at the selection (each a string or `null`).

This is exactly what you need to drive a completely custom formatting UI instead of the built-in toolbar — apply commands from your own controls, and use `updatedToolbarStatus` to keep them in sync with the editor's actual state.

Refer to the following sample, which drives an external ribbon component — with buttons, a dropdown, and a color picker — entirely from `commands()` and `updatedToolbarStatus`:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/toolbar-ribbon/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/toolbar-ribbon/index.html %}
{% endhighlight %}
{% endtabs %}

This sample turns off the built-in toolbar entirely (`toolbarSettings.enable: false`) and replaces it with a plain HTML "ribbon" — three formatting buttons, a heading `<select>`, and a color `<input>`. Each control calls the matching `commands()` method on click, and the `updatedToolbarStatus` handler keeps all three in sync: it toggles an active class on the Bold/Italic/Underline buttons from `activeMarks`, sets the heading dropdown from `blockFormats.heading`, and sets the color input from `styles.fontColor`.

## Updating toolbar items at runtime

If your toolbar needs to change based on application state — for example, showing a different set of tools depending on the user's permissions — call `editor.updateToolbarItems(updates)` with a batch of add/remove/reorder operations. The editor reconciles only what actually changed rather than re-rendering the whole toolbar, so things like an open dropdown or current focus aren't disrupted.
