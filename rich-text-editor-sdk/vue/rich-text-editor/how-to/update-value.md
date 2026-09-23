---
layout: post
title: Update Editor Value in Vue Rich Text Editor | Syncfusion
description: Learn how to update content in the Vue Rich Text Editor dynamically and save changes using keyboard shortcuts and event handling.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Update Editor Value in Vue Rich Text Editor

To achieve this, bind the `keydown` event to the editor content and capture the <kbd>Ctrl</kbd> + <kbd>S</kbd> key press using its keyCode.

In the `keydown` event handler, the `updateValue` method is called to update the [`value`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#value) property, and then you can save the content to the required database using the same.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs11" %}
