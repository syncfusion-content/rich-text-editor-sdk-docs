---
layout: post
title: Update Editor Value in React Rich Text Editor | Syncfusion
description: Learn how to update content in the React Rich Text Editor dynamically and save changes using keyboard shortcuts and event handling.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Update Editor Value in React Rich Text Editor

To achieve this, bind the `keydown` event to the content and capture the <kbd>Ctrl</kbd> + <kbd>S</kbd> key press using its keyCode.

In the `keydown` event handler, the `updateValue` method is called to update the [`value`](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/index-default#value) property, and then you can save the content to the required database using the same.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs24/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs24/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs24" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs25/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs25/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs25" %}