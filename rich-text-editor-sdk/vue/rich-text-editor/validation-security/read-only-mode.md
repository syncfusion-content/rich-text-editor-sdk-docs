---
layout: post
title: Read-Only Mode in Vue Rich Text Editor | Syncfusion
description: Learn how to use read-only and disabled modes in the Vue Rich Text Editor to control editing, restrict user interaction, and display content safely.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Read-Only Mode in Vue Rich Text Editor

## Read-only mode

The Rich Text Editor component offers a read-only mode that prevents you from editing the content while still allowing you to view it. This feature is particularly useful when you want to display formatted content without permitting modifications.

To enable the read-only mode, set the [readonly](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#readonly) property to `true`. 

When the read-only mode is enabled, the content can be viewed but cannot be modified, while the toolbar remains accessible for navigation purposes.

Please refer to the sample and code snippets below to demonstrate how to enable the read-only mode in the Rich Text Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/read-only-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/read-only-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/read-only-cs1" %}

## Disabled mode

The Vue Rich Text Editor component offers a feature to disable the editor, preventing any user interaction. This functionality is particularly useful when you need to display content without allowing modifications or when you want to temporarily restrict user input.

### Difference between read-only and disabled modes

The `readonly` property allows users to view the content and interact with the toolbar, while the `enabled` property set to `false` completely disables the editor, including all toolbar interactions.

### How to disable the editor

To disable the editor, set the [enabled](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#enabled) property to `false`.

When disabled, the editor becomes non-interactive, ensuring that users cannot edit, modify, or interact with the content or the toolbar.

Below are examples and code snippets demonstrating how to disable the Rich Text Editor by setting the `enabled` property to `false`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/disable-editor-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/disable-editor-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/disable-editor-cs1" %}
