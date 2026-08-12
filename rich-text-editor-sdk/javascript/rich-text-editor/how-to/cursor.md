---
layout: post
title: Cursor in JavaScript Rich Text Editor | Syncfusion
description: Learn how to set the cursor position in the JavaScript Rich Text Editor using the NodeSelection instance and the setRange method.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Cursor in JavaScript Rich Text Editor

This can be achieved by using `setRange` method in the Rich Text Editor using `NodeSelection` instance. In this below sample, we have passed the text node (specific location in Rich Text Editor content) in `setStart` method and passed the range in `setRange` method of Rich Text Editor.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/how-to-cursor-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/how-to-cursor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/how-to-cursor-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/how-to-cursor-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/how-to-cursor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/how-to-cursor-cs1" %}
{% endif %}
