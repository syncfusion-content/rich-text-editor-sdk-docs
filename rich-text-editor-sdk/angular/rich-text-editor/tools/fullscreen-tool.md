---
layout: post
title: Fullscreen Mode in Angular Rich Text Editor | Syncfusion
description: Learn how to enable fullscreen mode in the Angular Rich Text Editor for distraction-free editing and an expanded content editing workspace.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Fullscreen Mode in Angular Rich Text Editor

The Fullscreen mode allows the Rich Text Editor to expand and occupy the entire browser viewport. This provides a distraction-free editing experience and more space to work with content and toolbar features.

You can enable fullscreen mode using the FullScreen icon toolbar button. Once activated, the editor transitions into fullscreen view, hiding other page elements and maximizing the editing area.

## How it works

Click the fullscreen icon in the toolbar to toggle fullscreen mode. When enabled, the editor:

- Expands to fill the entire browser window.
- Adjusts its layout to optimize space for content and tools.
- Can be exited by clicking the same icon again or pressing the `Esc` key.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/fullscreen-mode/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/fullscreen-mode/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/fullscreen-mode" %}