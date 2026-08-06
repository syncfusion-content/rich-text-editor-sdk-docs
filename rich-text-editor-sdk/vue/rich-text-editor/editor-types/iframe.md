---
layout: post
title: IFrame Editing Mode in Vue Rich Text Editor | Syncfusion
description: Learn how to enable IFrame editing mode in the Vue Rich Text Editor to isolate styles and scripts within the editor surface.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# IFrame Editing Mode in Vue Rich Text Editor

The iframe editor in the Rich Text Editor component provides an isolated environment for content editing. It uses an iframe element to create a separate document, ensuring better compatibility and separation from the parent page's styles and scripts. In this mode, the editor displays only the body tag of the iframe, offering a clean and isolated workspace for content creation.

## Configuring the Iframe editor

To enable the iframe editor, you can use the [iframeSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#iframesettings) property. When this option is enabled, the Rich Text Editor creates an iframe element as the content area during initialization.

Here's an example of how to enable the iframe editor:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/getting-started-cs16/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/getting-started-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/getting-started-cs16" %}

## Customizing IFrame attributes

You can add custom attributes to the body tag of the iframe using the attributes field of the [iframeSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#iframesettings) property. This property accepts name/value pairs in string format, enabling you to override the default appearance of the content area.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/getting-started-cs17/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/getting-started-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/getting-started-cs17" %}

## Integrating external CSS and scripts

The Rich Text Editor allows you to apply an external CSS file to style the iframe element. This can be done using the [styles](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#iframesettings) field in the iframeSettings property. By including an external CSS file, you can easily change the appearance of the editor’s content to meet your specific requirements.

Likewise, add the external script file to the `< iframe >` element using the [scripts](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#iframesettings) field of iframeSettings to provide the additional functionalities to the RichTextEditor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/iframe-resources-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/iframe-resources-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/iframe-resources-cs1" %}

## Integrating Mention with Iframe

Rich Text Editor supports advanced features such as Mention component, even when it is rendered inside an iframe. To enable mention functionality within the iframe-mode Rich Text Editor, you need to correctly set the [target](https://ej2.syncfusion.com/vue/documentation/api/mention/index-default#target) of the Mention component.

Specifically, assign the `inputElement` of the Rich Text Editor to the target property of the Mention component. This ensures that the Mention popup is triggered correctly when the user types a designated character (such as @) inside the Rich Text Editor's editable area.

Here's an example of how to integrate Mention with Iframe editor,

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/mention-iframe/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/mention-iframe/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/mention-iframe" %}

> You can also explore our [iframe in Vue Rich Text Editor example](https://ej2.syncfusion.com/vue/demos/#/material/rich-text-editor/iframe) that shows how to render the iframe in Vue Rich Text Editor.

## See also

* [Implementing Inline Editing](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/editor-types/inline-editing)
* [Using the Markdown Editor](https://ej2.syncfusion.com/vue/documentation/markdown-editor/getting-started)