---
layout: post
title: Render Rich Text Editor in TypeScript Tab | Syncfusion
description: Learn how to render multiple TypeScript Rich Text Editor instances inside a Tab component with toolbar configuration and content editing support.
platform: rich-text-editor-sdk
control: Rich Text Editor 
publishingplatform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Render Rich Text Editor in TypeScript Tab

Integrating a Rich Text Editor within Tab control provides a versatile and organized user interface for text formatting and content creation across multiple tabs.  Each tab instance includes a dedicated editor instance configured with extensive toolbar options, enabling users to effortlessly manipulate text styles, apply formatting, insert media, and manage content layout.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/richtexteditor-inside-tab/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/richtexteditor-inside-tab/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/richtexteditor-inside-tab" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/richtexteditor-inside-tab/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/richtexteditor-inside-tab/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/richtexteditor-inside-tab" %}
{% endif %}