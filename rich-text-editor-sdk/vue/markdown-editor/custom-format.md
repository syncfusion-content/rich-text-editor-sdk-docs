---
layout: post
title: Customizing Markdown Syntax in Markdown editor component | Syncfusion
description: Learn here all about Customizing Markdown Syntax in Syncfusion Vue Markdown editor component of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Customizing Markdown Syntax
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Customizing Markdown Syntax in Vue Markdown Editor Component

The Vue Markdown Editor allows you to modify the default Markdown syntax to match your preferred formatting style. You can override the default syntax using the [formatter](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#formatter) property, enabling a customized Markdown experience.

## Defining Custom Markdown Formatting  

You can define custom symbols for different Markdown formatting options:

* Use `+` for unordered lists instead of `-`.
* Use `__text__` for bold text instead of `**text**`.
* Use `_text_` for italic text instead of `*text*`.

The following example demonstrates how to customize Markdown tags in the editor:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/markdown-editor/custom-format-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/markdown-editor/custom-format-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/markdown-editor/custom-format-cs1" %}