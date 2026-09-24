---
layout: post
title: Quick Toolbar in JavaScript Modern Rich Text Editor | Syncfusion
description: Learn how to configure the context-sensitive Quick Toolbar for text, images, links, and tables in the JavaScript Modern Rich Text Editor.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Quick toolbar in JavaScript Modern Rich Text Editor

Rather than making readers reach for the main toolbar for every small edit, the Modern Rich Text Editor can surface a small contextual popup right next to whatever they've selected — text, an image, a link, or a table — with just the commands relevant to that selection.

## Enabling the quick toolbar

`quickToolbarSettings.enable` is the master switch for all four quick toolbars, and it's `true` by default. Set it to `false` if you'd rather readers only interact through the main toolbar.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/quick-toolbar/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/quick-toolbar/index.html %}
{% endhighlight %}
{% endtabs %}

## Configuring quick toolbar items

Each selection type has its own item list: `quickToolbarSettings.image` (default `['AltText','Caption','|','Align','Display','WrapText','|','Dimension','Replace','Remove']`), `quickToolbarSettings.link` (default `['Open','Copy','Edit','Remove']`), and `quickToolbarSettings.table` (default `['Header','Remove','|','Row','Column','|','CellBackgroundColor','Align','VerticalAlign']`) all come pre-populated, so you only need to set them if you want to trim or reorder the defaults.

The text quick toolbar works differently: `quickToolbarSettings.text` defaults to `null`, meaning **no popup appears for a text selection until you set this array yourself** — as in the sample above, which enables a short formatting set for selected text.

## Appending the quick toolbar to body

If the editor sits inside a container with `overflow: hidden` or otherwise limited space, the quick toolbar popup can get visually clipped at the container's edge. Set `quickToolbarSettings.enableAppendToBody` to `true` to mount the popup directly under `<body>` instead of inside the editor element, so it always has room to render fully.

Positioning, focus handling, and the lifecycle of all four quick toolbars are managed by the built-in `QuickToolbarModule` — it's instantiated automatically, so no `Inject()` call is required to use quick toolbars.
