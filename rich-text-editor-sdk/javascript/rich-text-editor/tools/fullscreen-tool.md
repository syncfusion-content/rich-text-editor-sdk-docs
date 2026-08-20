---
layout: post
title: Fullscreen Mode in JavaScript Rich Text Editor | Syncfusion
description: Learn how to enable fullscreen mode in the JavaScript Rich Text Editor for distraction-free editing and an expanded content editing workspace.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Fullscreen Mode in JavaScript Rich Text Editor

The fullscreen mode allows the Rich Text Editor to expand and occupy the entire browser viewport. This provides a distraction-free editing experience and more space to work with content and toolbar features.

To enable this feature, add the `FullScreen` toolbar item to the Rich Text Editor's `toolbarSettings.items` array. Once activated, the editor transitions into fullscreen view, hiding other page elements and maximizing the editing area.

## How it works

Click the fullscreen icon in the toolbar to toggle fullscreen mode. When enabled, the editor:

- Expands to fill the entire browser window.
- Adjusts its layout to optimize space for content and tools.
- Can be exited by clicking the same icon again or pressing the `Esc` key.

> In `iframe` mode, the fullscreen view is applied to the iframe element rather than the parent page, so other page elements remain visible.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/fullscreen-mode/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/fullscreen-mode/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/fullscreen-mode" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/fullscreen-mode/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/fullscreen-mode/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/fullscreen-mode" %}
{% endif %}

## See also

* [Toolbar Position](../toolbar/toolbar-position)
* [Customizing the Toolbar](../toolbar/toolbar-customization)
* [Custom Toolbar Items](custom-tools)
