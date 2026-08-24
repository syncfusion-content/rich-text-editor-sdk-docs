---
layout: post
title: Render Rich Text Editor in Vue Dialog | Syncfusion
description: Learn how to render the Vue Rich Text Editor inside a Dialog component and refresh the editor UI for proper toolbar rendering.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Integrating the Vue Rich Text Editor in Dialog

When rendering the Rich Text Editor inside a Dialog component, the dialog container and its wrapper elements are initially styled with `display: none`. This styling prevents the editor's toolbar from calculating the proper offset width. As a result, the toolbar may render incorrectly, appearing above the edit area container.

To resolve this issue, use the [refreshUI](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#refreshui) method of the Rich Text Editor in conjunction with the [open](https://ej2.syncfusion.com/vue/documentation/api/dialog/index-default#open) event. This approach ensures that the Rich Text Editor's UI is properly refreshed and rendered once the Dialog is visible.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/richtexteditor-inside-dialog/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/richtexteditor-inside-dialog/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/richtexteditor-inside-dialog" %}
