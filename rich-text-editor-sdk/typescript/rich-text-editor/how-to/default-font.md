---
layout: post
title: Default font in TypeScript Rich text editor | Syncfusion
description: Learn how to set the default font in the TypeScript Rich Text Editor using the default fontFamily and cssClass properties.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Default font in TypeScript Rich text editor

By using the [`fontFamily`](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#fontfamily) property, you can change the default font-family of the Rich Text Editor. To change the font-family of the editor content while loading, we need to give the font-family in the style section with the help of the [`cssClass`](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#cssclass) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/how-to-default-font-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/how-to-default-font-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/how-to-default-font-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/how-to-default-font-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/how-to-default-font-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/how-to-default-font-cs1" %}
{% endif %}
