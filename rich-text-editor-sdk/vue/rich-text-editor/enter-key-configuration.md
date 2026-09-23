---
layout: post
title: Enter Key Configuration in Vue Rich Text Editor | Syncfusion
description: Learn how to customize Enter and Shift+Enter key behavior in the Vue Rich Text Editor for flexible content formatting and structure.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Enter and Shift+Enter in Vue Rich Text Editor

Rich Text Editor allows you to customize the behavior of the Enter key and Shift+Enter key combinations. This feature provides flexibility in formatting and structuring content within the editor.

**Available Options**

The enterKey property accepts the following values:

* `P` (default)
* `DIV`
* `BR`

The shiftEnterKey property accepts the following values:

* `BR` (default)
* `P`
* `DIV`

## Enter key configuration

By default, pressing the Enter key in the Rich Text Editor creates a new `<p>` tag. You can customize this behavior using the [enterKey](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#enterkey) property.

When you customize the Enter key, the editor will create the specified tag when the Enter key is pressed. This configuration also affects the default content structure of the Rich Text Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/getting-started-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/getting-started-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/getting-started-cs3" %}

## Shift+Enter key configuration

By default, pressing Shift+Enter in the Rich Text Editor inserts a `<br>` tag. You can customize this behavior using the [shiftEnterKey](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#shiftenterkey) property.

When you customize the Shift+Enter key, the editor will create the specified tag when the key combination is pressed. This configuration also affects the default content structure of the Rich Text Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/getting-started-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/getting-started-cs4" %}

## Preventing enter key actions

In some cases, you may want to prevent the default Enter key behavior entirely. The Rich Text Editor allows you to intercept and prevent the default action of the Enter key at the editor level by handling the `actionBegin event`. To ensure that the default behavior is also suppressed at the browser level, you need to call the `preventDefault()` method on the event object within the event handler. This approach allows for precise control over the editor's behavior in response to the Enter key press, facilitating the implementation of custom functionality.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/prevent-enter-key-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/prevent-enter-key-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/prevent-enter-key-cs1" %}
