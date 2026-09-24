---
layout: post
title: Lists in JavaScript Modern Rich Text Editor | Syncfusion
description: Learn how to configure bullet and numbered list styles, and how to insert lists and task lists programmatically in the JavaScript Modern Rich Text Editor.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Lists in JavaScript Modern Rich Text Editor

Readers can add bulleted, numbered, and task lists from the toolbar, and you can customize the styles offered for each or trigger list commands from your own code.

## Configuring list styles

The `NumberFormatList` and `BulletFormatList` toolbar items open dropdowns of style choices — by default, Number, Lower Greek, Lower Roman, Upper Alpha, Lower Alpha, and Upper Roman for numbered lists, and Disc, Circle, and Square for bullet lists. To offer a different set (for example, to match a specific document style guide), configure `listSettings.numberFormatList` and `listSettings.bulletFormatList` with your own label/value pairs.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/lists/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/lists/index.html %}
{% endhighlight %}
{% endtabs %}

## Inserting lists programmatically

Beyond the toolbar, you can drive list formatting programmatically through the `commands()` API — useful for building your own list controls or applying formatting in response to some other action in your app:

```js
editor.commands().numberedList().apply();
editor.commands().bulletList().apply();
editor.commands().setListStyle().listType('circle').apply();
```

`setListStyle()` changes the `list-style-type` of whichever list the current selection is inside, so you can switch a list's style after it's already been created.

## Task list

A task list is a distinct content type from bullet and numbered lists — each item renders with a checkbox the reader can toggle, rather than a bullet or number. Convert the current block into one with:

```js
editor.commands().toggleTaskList().apply();
```
