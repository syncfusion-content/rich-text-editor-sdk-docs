---
layout: post
title: Markdown Preview in Vue Markdown Editor | Syncfusion
description: Learn how to enable Markdown preview in the Vue Markdown Editor by converting Markdown content into HTML and displaying the formatted output in real time.
platform: rich-text-editor-sdk
control: Markdown Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Markdown Preview in Vue Markdown Editor

The Markdown Editor provides an instant preview of Markdown changes, allowing users to see the formatted output while typing or editing text. This enhances the editing experience by enabling real-time visualization of Markdown formatting.

## Enable Markdown Preview in Vue Markdown Editor  

To enable the Markdown preview feature, use the Syncfusion `MarkdownConverter` from the `@syncfusion/ej2-markdown-converter` package, which converts Markdown content into HTML format. The following example demonstrates how to enable Markdown to HTML preview in the Syncfusion Vue Markdown Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/markdown-editor/markdown-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/markdown-editor/markdown-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/markdown-editor/markdown-cs7" %}