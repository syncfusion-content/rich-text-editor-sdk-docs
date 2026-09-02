---
layout: post
title: Save in JavaScript Rich Text Editor | Syncfusion
description: Learn how to save content in the JavaScript Rich Text Editor by handling the Ctrl+S keyboard shortcut and updating the editor value.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Save in JavaScript Rich Text Editor

To achieve this, bind the `keydown` event to the Rich Text Editor content and capture the `Ctrl + S` key press using its `keyCode`.
In the `keydown` event handler, the `updateValue` method is called to update the [`value`](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#value) property, and then you can save the content in the required database using the same.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/how-to-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/how-to-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/how-to-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/how-to-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/how-to-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/how-to-cs2" %}
{% endif %}
