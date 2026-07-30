---
layout: post
title: Customize shortcut keys in Vue Rich text editor component | Syncfusion
description: Learn here all about Customize shortcut keys in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Customize shortcut keys 
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Customize shortcut keys in Vue Rich text editor component

It can be achieved by using [`formatter`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#formatter) property. We need to create `customformatterModel` to configure the `keyConfig` using `IHtmlFormatterModel` class and assign the same to the formatter property. Here, `ctrl+q` is configured to open the `Insert Hyperlink` dialog.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs8" %}

> We need to import `IHtmlFormatterModel` and `HTMLFormatter` to configure the shortcut key.