---
layout: post
title: Handle Ctrl+S Shortcut in Vue Rich Text Editor | Syncfusion
description: Learn how to implement the Ctrl+S keyboard shortcut in the Vue Rich Text Editor to update values and save editor content programmatically.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Implement Ctrl+S Shortcut to Save Content in Vue Rich Text Editor

To implement this functionality, bind a `keydown` event to the Rich Text Editor content and capture the <kbd>Ctrl</kbd> + <kbd>s</kbd> key press using its keyCode.

In the `keydown` event handler, the `updateValue` method is called to update the [value](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#value) property, and then you can save the content to the required database using the same.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs4" %}
