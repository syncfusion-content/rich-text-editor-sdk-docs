---
layout: post
title: Markdown Preview in JavaScript Markdown Editor | Syncfusion
description: Learn how to enable Markdown preview in JavaScript Markdown Editor by converting Markdown content into HTML and displaying the formatted output in real time.
platform: rich-text-editor-sdk
control: Markdown Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Markdown Preview in JavaScript Markdown Editor

The Markdown Editor provides an instant preview of Markdown changes, allowing users to see the formatted output while typing or editing text. This enhances the editing experience by enabling real-time visualization of Markdown formatting.

## Enable Markdown Preview in JavaScript Markdown Editor  

To enable the Markdown preview feature, the Syncfusion `MarkdownConverter` is used to convert Markdown content into HTML format. The following example demonstrates how to enable Markdown to HTML preview in the Markdown Editor.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/markdown-preview-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/markdown-preview-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/markdown-editor/markdown-preview-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/markdown-preview-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/markdown-preview-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/markdown-editor/markdown-preview-cs1" %}
{% endif %}