---
layout: post
title: Custom Markdown Syntax in JavaScript Markdown Editor | Syncfusion
description: Learn how to customize Markdown syntax in the JavaScript Markdown Editor by overriding default list, bold, and italic symbols.
platform: rich-text-editor-sdk
control: Markdown Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Customizing Markdown Syntax in JavaScript Markdown Editor

The Markdown Editor allows you to modify the default Markdown syntax to match your preferred formatting style. You can override the default syntax using the [formatter](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/#formatter) property, enabling a customized Markdown experience.

## Defining Custom Markdown Formatting

You can define custom symbols for different Markdown formatting options:

* Use `+` for unordered lists instead of `-`.
* Use `__text__` for bold text instead of `**text**`.
* Use `_text_` for italic text instead of `*text*`.

The following example demonstrates how to customize Markdown tags in the editor:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/markdown-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/markdown-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/markdown-editor/markdown-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/markdown-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/markdown-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/markdown-editor/markdown-cs5" %}
{% endif %}