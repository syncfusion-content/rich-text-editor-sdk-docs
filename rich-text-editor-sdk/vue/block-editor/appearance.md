---
layout: post
title: Style and Appearance in Vue Block Editor | Syncfusion
description: Learn how to customize the Vue Block Editor appearance by configuring width, height, read-only mode, and custom CSS classes.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Style and Appearance in Vue Block Editor

The Block Editor component provides several properties to customize its visual appearance, allowing you to control its dimensions, styling, and behavior.

## Setting width and height

You can specify the width and height for the Block Editor component using the [width](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#width) and [height](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#height) properties.

## Setting readonly mode

You can utilize the [readOnly](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#readonly) property to control whether the editor is in read-only mode. When set to `true`, users cannot edit the content but can still view it.

## Customization using CSS Class

You can use the [cssClass](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#cssclass) property to customize the appearance of the Block Editor control.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/block-editor/appearance/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/block-editor/appearance/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/block-editor/appearance" %}