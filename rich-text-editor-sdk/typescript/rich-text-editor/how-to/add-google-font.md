---
layout: post
title: Add google font in TypeScript Rich text editor | Syncfusion
description: Learn how to add Google Fonts to the TypeScript Rich Text Editor by configuring web font links and the fontFamily toolbar option.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Add google font in TypeScript Rich text editor

To use web fonts in the Rich Text Editor, the web fonts do not need to be present on the local machine. To add web fonts to the Rich Text Editor, include the web font links in your HTML and add the font names to the [`fontFamily`](../../api/rich-text-editor#fontfamily) property.

The following example demonstrates how to add Google Fonts to the Rich Text Editor.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/custom-font-family-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/custom-font-family-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/custom-font-family-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/custom-font-family-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/custom-font-family-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/custom-font-family-cs1" %}
{% endif %}

