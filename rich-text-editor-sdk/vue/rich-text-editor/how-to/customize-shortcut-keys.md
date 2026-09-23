---
layout: post
title: Configure Keyboard Shortcuts in Vue Rich Text Editor | Syncfusion
description: Learn how to customize keyboard shortcuts in the Vue Rich Text Editor by configuring key combinations for custom editor actions.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Configure Keyboard Shortcuts in Vue Rich Text Editor

Custom keyboard shortcuts can be configured by using the [`formatter`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#formatter) property. You need to create a `CustomFormatterModel` to define the `keyConfig` using the `IHtmlFormatterModel` class and assign it to the `formatter` property. In this example, `Ctrl + Q` is configured to open the **Insert Hyperlink** dialog.

> By default, browsers reserve certain keyboard shortcuts for native actions (e.g., `Ctrl + P` for print). Custom shortcuts that conflict with browser defaults may not behave as expected and should be tested across all target browsers.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs8" %}

> You need to import `IHtmlFormatterModel` and `HTMLFormatter` from the `@syncfusion/ej2-richtexteditor` library to configure the shortcut key.
