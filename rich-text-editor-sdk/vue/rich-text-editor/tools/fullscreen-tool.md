---
layout: post
title: Fullscreen Mode in Vue Rich Text Editor | Syncfusion
description: Learn how to enable fullscreen mode in the Vue Rich Text Editor for distraction-free editing and an expanded content editing workspace.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Fullscreen Mode in Vue Rich Text Editor

The Fullscreen mode allows the Rich Text Editor to expand and occupy the entire browser viewport. This provides a distraction-free editing experience and more space to work with content and toolbar features.

## Enable fullscreen mode

You can enable fullscreen mode by adding the `FullScreen` tool in the Rich Text Editor toolbar using the `toolbarSettings` [items](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarsettings#items) property. Once activated, the editor transitions into fullscreen view, hiding other page elements and maximizing the editing area.

## How it works

Click the fullscreen icon in the toolbar to toggle fullscreen mode. When enabled, the editor:

- Expands to fill the entire browser window.
- Adjusts its layout to optimize space for content and tools.
- Can be exited by clicking the same icon again or pressing the `Esc` key.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/fullscreen-mode/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/fullscreen-mode/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/fullscreen-mode" %}
