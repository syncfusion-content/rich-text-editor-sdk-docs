---
layout: post
title: IFrame Editing Mode in React Rich Text Editor | Syncfusion
description: Learn how to enable IFrame editing mode in the React Rich Text Editor to isolate styles and scripts within the editor surface.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# IFrame Editing Mode in React Rich Text Editor

The iframe editor in the Rich Text Editor provides an isolated environment for content editing by using an iframe element as the content area. This ensures separation from the parent page's styles and scripts, preventing conflicts and enhancing compatibility.In this mode, the editor displays only the body tag of the iframe, offering a clean and isolated workspace for content creation.

## Configuring the Iframe editor

Iframe editing mode is enabled using the [iframeSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/index-default#iframesettings) property. When this option is enabled, the Rich Text Editor creates an iframe element as the content area during initialization.

The following example demonstrates enabling iframe mode:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs26/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs26/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs26" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs27/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs27/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs27" %}

## Customizing IFrame attributes

Custom attributes can be applied to the iframe's body element using the `attributes` field of the [iframeSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/index-default#iframesettings) property. This property accepts name/value pairs in string format, enabling you to override the default appearance of the content area.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs28/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs28/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs28" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs29/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs29/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs29" %}

## Integrating external css and scripts

The Rich Text Editor allows you to apply an external CSS file to style the iframe element. This can be done using the [`styles`](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/index-default#iframesettings) field in the iframeSettings property. By including an external CSS file, you can easily change the appearance of the editor's content to meet your specific requirements.

Likewise, add the external script file to the `< iframe >` element using the [scripts](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/index-default#iframesettings) field of iframeSettings to provide the additional functionalities to the RichTextEditor.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/iframe-resources-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/iframe-resources-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/iframe-resources-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/iframe-resources-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/iframe-resources-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/iframe-resources-cs2" %}

## Integrating Mention with Iframe

Rich Text Editor supports advanced features such as Mention component, even when it is rendered inside an iframe. To enable mention functionality within the iframe-mode Rich Text Editor, you need to correctly set the [target](https://ej2.syncfusion.com/react/documentation/api/mention/index-default#target) of the Mention component.

Specifically, assign the `inputElement` of the Rich Text Editor to the target property of the Mention component. This ensures that the Mention popup is triggered correctly when the user types a designated character (such as @) inside the Rich Text Editor's editable area.

Here's an example of how to integrate Mention with Iframe editor,

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/mention-iframe-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/mention-iframe-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/mention-iframe-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/mention-iframe-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/mention-iframe-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/mention-iframe-cs2" %}

> You can also explore our [iframe in React Rich Text Editor example](https://ej2.syncfusion.com/react/demos/#/tailwind3/rich-text-editor/iframe) that shows how to render the iframe in React Rich Text Editor.

## See also

* [Implementing Inline Editing](https://ej2.syncfusion.com/react/documentation/rich-text-editor/editor-types/inline-editing)
* [Using the Markdown Editor](https://ej2.syncfusion.com/react/documentation/markdown-editor/getting-started)
