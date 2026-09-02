---
layout: post
title: XSS Prevention in TypeScript Block Editor | Syncfusion
description: Learn how to enable XSS prevention in the TypeScript Block Editor to sanitize script tags and unsafe attributes from content.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# XSS Prevention in TypeScript Block Editor

The Block Editor protects against cross-site scripting (XSS) attacks by providing built-in support to remove potentially malicious elements and attributes from content. By default, the editor automatically removes elements and attributes that could execute scripts or compromise security.

## Enabling XSS prevention
The [enableHtmlSanitizer](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#enablehtmlsanitizer), enabled by default, activates XSS prevention. When active, the editor automatically removes elements like `<script>` and attributes like `onmouseover` from the content.

The following example demonstrates XSS prevention in action, removing a `<script>` tag and `onmouseover` attribute from content:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/enable-html-sanitizer/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/enable-html-sanitizer/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/enable-html-sanitizer" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/enable-html-sanitizer/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/enable-html-sanitizer/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/enable-html-sanitizer" %}
{% endif %}
