---
layout: post
title: Link Manipulation in JavaScript Modern Rich Text Editor | Syncfusion
description: Learn how to configure link behavior and insert, edit, and remove hyperlinks in the JavaScript Modern Rich Text Editor using linkSettings and the commands API.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Link manipulation in JavaScript Modern Rich Text Editor

Readers can turn text into a hyperlink through the `Link` toolbar item. How the editor normalizes and validates the URLs they enter is controlled through `linkSettings`.

## Configuring allowed link protocols

Left unchecked, a link field is an easy way for a malicious URL scheme (like `javascript:`) to end up in your content. Set `linkSettings.allowedProtocols` to the schemes you consider safe — by default `['http','https','mailto','tel']` — and any link whose protocol isn't in that list is rejected. Relative URLs, query strings, and fragments aren't affected by this check.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/link-manipulation/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/link-manipulation/index.html %}
{% endhighlight %}
{% endtabs %}

## Auto-prepending a protocol

Users often type a URL without its protocol (`www.example.com` instead of `https://www.example.com`). With `linkSettings.autoPrependProtocol` left at its default `true`, the editor fills in `linkSettings.defaultProtocol` (`'https'` by default) automatically whenever the entered URL is missing one, so links still work even when the user leaves the scheme off.

## Creating a link on paste

When `linkSettings.linkOnPaste` is `true` (the default), pasting a bare URL directly over a text selection turns that selection into a link pointing at the pasted URL — a shortcut readers expect from most modern editors. Set it to `false` if you'd rather pasted URLs just replace the selected text as plain text.

## Setting the default link target

New links open in a new tab by default (`linkSettings.defaultTarget: '_blank'`) whenever the user doesn't explicitly choose a target themselves. Change `defaultTarget` if you'd rather links open in the same tab by default.

## Inserting and editing links programmatically

To drive link creation from your own UI instead of the built-in dialog, use the `commands()` API:

```js
editor.commands().link().url('https://www.syncfusion.com').text('Syncfusion').target('_blank').operation('insert').apply();
editor.commands().link().operation('remove').apply();
```

`operation` also accepts `'edit'`, `'open'`, and `'copy'` for the other link actions available from the quick toolbar.

I> `commands()` is the only public entry point for link commands — the internal builder classes aren't meant to be constructed directly.
