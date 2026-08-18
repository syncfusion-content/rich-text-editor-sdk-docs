---
layout: post
title: Fullscreen Mode in Blazor Rich Text Editor | Syncfusion®
description: Learn how to enable fullscreen mode in the Blazor Rich Text Editor for distraction-free editing and an expanded content editing workspace.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
---

# Fullscreen Mode in Blazor Rich Text Editor

The Fullscreen mode allows the Rich Text Editor to expand and occupy the entire browser viewport. This provides a distraction-free editing experience and more space to work with content and toolbar features.

You can enable Fullscreen mode using the `Fullscreen` toolbar button. Once activated, the editor transitions into Fullscreen view, hiding other page elements and maximizing the editing area.

## How it works

Click the Fullscreen icon in the toolbar to toggle Fullscreen mode. When enabled, the editor:

- Expands to fill the entire browser window.
- Repositions the toolbar at the top of the viewport for unobstructed access to all tools.
- Can be exited by clicking the `Minimize` icon (which replaces the Fullscreen icon while active) or by pressing the `Esc` key.

{% tabs %}
{% highlight razor %}

{% include_relative code-snippet/fullscreen.razor %}

{% endhighlight %}
{% endtabs %}

![Blazor RichTextEditor full screen](../images/blazor-richtexteditor-fullscreen.webp)