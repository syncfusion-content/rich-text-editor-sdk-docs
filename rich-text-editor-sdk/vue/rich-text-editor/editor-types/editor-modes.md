---
layout: post
title: Editor Modes in React Rich Text Editor | Syncfusion
description: Learn how to use HTML, Markdown, and IFrame editing modes in the React Rich Text Editor to create and edit content in different formats.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Editor Modes in React Rich Text Editor

The Rich Text Editor component used to create, edit and return the content in valid HTML markup or markdown (MD) of the content. It supports following two editing formation.

* HTML Editor
* Markdown Editor

## HTML editor

Rich Text Editor is a WYSIWYG editing component for formatting the word content as HTML.

The HTML editing mode is the default mode of Rich Text Editor. Which is used for format the content through the available toolbar items and returns the valid HTML markup. Set the [editorMode](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#editormode) property as `HTML`.

>To use HTML editing feature, inject `HtmlEditor` in the provider section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/getting-started-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/getting-started-cs2" %}

## IFrame editor

The IFrame editor mode enables content editing within an iframe, isolating styles from the main page.

For more details, refer to the [Iframe Editor](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/editor-types/iframe) documentation.

## Markdown editor

Set the [editorMode](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#editormode) property value as `Markdown` to create or edit the content and apply formatting to view markdown formatted content.

The third-party library such as `Marked` or any other library is used to convert markdown into HTML content.

* The Supported Tags are  `h6`,`h5`,`h4`,`h3`,`h2`,`h1`,`blockquote`,`pre`,`p`,`ol`,`ul`.
* The Supported Selection Tags are `Bold`, `Italic`, `StrikeThrough`, `InlineCode`, `SubScript`, `SuperScript`, `UpperCase`, `LowerCase`.
* The supported insert commands are `Image`, `Link` and `Table`.

> To use Markdown editing feature, inject `MarkdownEditor` in the provider section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/markdown-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/markdown-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/markdown-cs1" %}

For further details on Markdown editing, refer to the [`Markdown`](../markdown-editor/getting-started)

## See also

* [Markdown Editor](https://ej2.syncfusion.com/vue/documentation/markdown-editor/getting-started)
