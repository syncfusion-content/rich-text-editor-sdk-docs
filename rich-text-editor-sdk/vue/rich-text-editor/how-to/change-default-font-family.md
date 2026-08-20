---
layout: post
title: Set Default Font Family in Vue Rich Text Editor | Syncfusion
description: Learn how to set the default font family in the Vue Rich Text Editor using custom fonts and CSS customization for editor content.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Set Default Font Family in Vue Rich Text Editor

By using [`default`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#fontfamily) property, you can change the default font-family of the Rich Text Editor. To change the font-family of the Rich Text Editor content while loading, we need to give the font-family in the style section with the help of [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#cssclass) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs7" %}