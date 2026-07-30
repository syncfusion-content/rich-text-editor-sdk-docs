---
layout: post
title: Cross-Site scripting in Vue Block Editor Component | Syncfusion
description: Checkout and learn about Cross-Site scripting with Vue Block Editor component of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Cross-Site scripting(XSS) prevention in Vue Block Editor component

The Block Editor allows users to edit the content with security by preventing cross-site scripting (XSS). By default, it provides built-in support to remove elements from editor content that cause XSS attacks. The editor removes the elements based on the attributes if it is possible to execute a script.

## Enabling XSS prevention

The [enableHtmlSanitizer](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#enablehtmlsanitizer), enabled by default, activates XSS prevention. When active, the editor automatically removes elements like `<script>` and attributes like `onmouseover` from the content.
The following example shows XSS prevention removing a `<script>` tag and `onmouseover` attribute:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/block-editor/enable-html-sanitizer/app-composition.vue %}
{% endhighlight %}

{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/block-editor/enable-html-sanitizer/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/block-editor/enable-html-sanitizer" %}
        