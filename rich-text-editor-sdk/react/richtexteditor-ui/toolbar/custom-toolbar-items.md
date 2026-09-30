---
layout: post
title: Custom Toolbar Item in React Modern Rich Text Editor | Syncfusion
description: Learn how to add custom toolbar items, handle itemClicked and updatedToolbarStatus events, and update them in the React Modern Rich Text Editor.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Custom Toolbar Items in React Modern Rich Text Editor

Alongside the built-in strings, [`toolbarSettings.items`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/customToolbarItem) also accepts item objects for tools of your own. Give each one an `actionId` — a unique identifier you'll check for in the `itemClicked` handler — plus the usual presentation properties (`prefixIcon`/`suffixIcon`, `tooltipText`, `align`, `cssClass`, `disabled`, and so on, the same set the underlying EJ2 Toolbar item model uses).

{% tabs %}

{% highlight ts tabtitle="App.tsx" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/Toolbar/Toolbar-custom-item/app/App.tsx %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/Toolbar/Toolbar-custom-item/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/Toolbar/Toolbar-custom-item/" %}

## itemClicked Event

Listen for `itemClicked` to know whenever any toolbar button is clicked, before its command runs — this is also how you handle a custom item's action, since custom items don't have a built-in command of their own. The event args' `item` field is the toolbar item's model, so check `args.item.actionId` to identify which custom item was clicked.

Refer to the sample above: clicking the word-count button reads `args.item.actionId`, and if it matches `'wordCount'`, calls `editor.getText()` to count and display the words in the document.

## updatedToolbarStatus Event

Where `itemClicked` tells you a button was pressed, `updatedToolbarStatus` tells you what's currently active at the cursor — it fires whenever the selection moves or changes, with a snapshot of the current formatting state:

* `args.activeMarks` — booleans for `bold`, `italic`, `underline`, `strikethrough`, `subscript`, `superscript`, `inlineCode`.
* `args.blockFormats` — booleans for `paragraph`, `blockQuote`, `orderedList`, `bulletList`, `codeBlock`, `alignLeft`, `alignCenter`, `alignRight`, `alignJustify`, plus `heading` (a string such as `'heading1'`, or `null` when the block isn't a heading).
* `args.styles` — the resolved `fontColor`, `backgroundColor`, `fontFamily`, and `fontSize` at the selection (each a string or `null`).

This is exactly what you need to drive a completely custom formatting UI instead of the built-in toolbar — apply commands from your own controls.

Refer to the following sample, which drives an external ribbon component — with buttons, a dropdown, and a color picker — entirely from `commands()`:

{% tabs %}

{% highlight ts tabtitle="App.tsx" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/Toolbar/Toolbar-ribbon/app/App.tsx %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/Toolbar/Toolbar-ribbon/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/Toolbar/Toolbar-ribbon/" %}

This sample turns off the built-in toolbar entirely (`toolbarSettings.enable: false`) and replaces it with a plain HTML "ribbon" — three formatting buttons, a heading `<select>`, and a color `<input>`. Each control calls the matching `commands()` method on click.

## Updating toolbar items at runtime

If your toolbar needs to change based on application state — for example, showing a different set of tools depending on the user's permissions — call `editorRef.current?.updateToolbarItems(updates)` with a batch of add/remove/reorder operations. The editor reconciles only what actually changed rather than re-rendering the whole toolbar, so things like an open dropdown or current focus aren't disrupted.
