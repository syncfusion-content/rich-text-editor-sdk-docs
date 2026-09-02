---
layout: post
title: Editor Modes in JavaScript Rich Text Editor | Syncfusion
description: Learn how to use HTML, Markdown, and IFrame editing modes in the JavaScript Rich Text Editor to create and edit content in different formats.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Editor Modes in JavaScript Rich Text Editor

The Rich Text Editor component is used to create, edit, and return the content in valid HTML markup or Markdown (MD) of the content. It supports the following two editing formations.

* HTML Editor
* Markdown Editor

## HTML editor

The Rich Text Editor is a WYSIWYG editing control for formatting the word content as HTML.

The HTML editing mode is the default mode of the Rich Text Editor, which is used to format the content through the available toolbar items and returns the valid HTML markup. Set the [editorMode](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#editormode) property to `HTML`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/getting-started-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/getting-started-cs2" %}
{% endif %}

## IFrame editor

The IFrame editor mode enables content editing within an iframe, isolating styles from the main page.

For more details, refer to the [Iframe Editor](./iframe.md) documentation.

## Markdown editor

Set the [editorMode](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#editormode) property value to `Markdown` to create or edit the content and apply formatting to view markdown-formatted content.

The third-party library such as `Marked` or any other library is used to convert markdown into HTML content.

* The supported tags are `h6`, `h5`, `h4`, `h3`, `h2`, `h1`, `blockquote`, `pre`, `p`, `ol`, `ul`.
* The supported selection tags are `Bold`, `Italic`, `StrikeThrough`, `InlineCode`, `SubScript`, `SuperScript`, `UpperCase`, `LowerCase`.
* The supported insert commands are `Image`, `Link`, and `Table`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/getting-started-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/getting-started-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/getting-started-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/getting-started-cs3" %}
{% endif %}

For further details on Markdown editing, refer to the [Markdown](https://ej2.syncfusion.com/documentation/markdown-editor/getting-started) documentation.

## See also

* [Markdown Editor](https://ej2.syncfusion.com/documentation/markdown-editor/getting-started)
