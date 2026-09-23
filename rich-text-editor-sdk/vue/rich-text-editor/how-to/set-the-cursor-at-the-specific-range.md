---
layout: post
title: Set Cursor Position by Range in Vue Rich Text Editor | Syncfusion
description: Learn how to set the cursor position at a specific range in the Vue Rich Text Editor using the NodeSelection and setRange methods.
control: Rich Text Editor 
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Set Cursor Position by Range in Vue Rich Text Editor

You can set the cursor position at a specific range by using the `setRange` method on the Rich Text Editor's `NodeSelection` instance. In the sample below, we pass the text node (at a specific location in the Rich Text Editor content) to the `setStart` method and then call `setRange` with the desired range on the Rich Text Editor instance.

> You need to import `NodeSelection` from the `@syncfusion/ej2-richtexteditor` library to access the `setRange` method programmatically.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs10" %}
