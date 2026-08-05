---
layout: post
title: XSS Prevention in React Block Editor | Syncfusion
description: Learn how to enable XSS prevention in the React Block Editor to sanitize script tags and unsafe attributes from content.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# XSS Prevention in React Block Editor

The Block Editor allows users to edit the content with security by preventing cross-site scripting (XSS). By default, it provides built-in support to remove elements from editor content that cause XSS attacks. The editor removes the elements based on the attributes if it is possible to execute a script.

## Enabling XSS prevention

The [enableHtmlSanitizer](https://ej2.syncfusion.com/react/documentation/api/blockeditor/index-default#enablehtmlsanitizer), enabled by default, activates XSS prevention. When active, the editor automatically removes elements like `<script>` and attributes like `onmouseover` from the content.
The following example shows XSS prevention removing a `<script>` tag and `onmouseover` attribute:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/enable-html-sanitizer/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/enable-html-sanitizer/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/block-editor/enable-html-sanitizer" %}
        