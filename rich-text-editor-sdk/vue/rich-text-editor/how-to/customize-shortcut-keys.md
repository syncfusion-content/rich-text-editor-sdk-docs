---
layout: post
title: Configure Keyboard Shortcuts in React Rich Text Editor | Syncfusion
description: Learn how to customize keyboard shortcuts in the React Rich Text Editor by configuring key combinations for custom editor actions.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Configure Keyboard Shortcuts in React Rich Text Editor

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