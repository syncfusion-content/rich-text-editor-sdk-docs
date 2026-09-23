---
layout: post
title: Quick Toolbars in Vue Rich Text Editor | Syncfusion
description: Learn how to customize Quick Toolbars in the Vue Rich Text Editor for images, links, tables, audio, video, and text with context-aware editing commands.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Quick Toolbars in Vue Rich Text Editor

The Rich Text Editor has quick toolbars that act as context-menus, appearing when you click on elements like images, links, audio, video, and tables. By default, specific quick toolbar items are displayed when clicking on the corresponding element. You can customize these items using the [`quickToolbarSettings`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#quickToolbarSettings) property.

> To use the QuickToolbar feature, configure the `QuickToolbar` module in the providers section.

## Prerequisites

Before using the quick toolbar, ensure the Syncfusion theme CSS is imported in your application. For example, with Tailwind 3:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/tailwind3.css';
```

## Customizing the image quick toolbar

You can customize the quick toolbar options for images using the `image` property within the [quickToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quicktoolbarsettings). The Rich Text Editor provides essential tools such as `Replace`, `Align`, `WrapText`, `Caption`, `Remove`, `InsertLink`, `OpenImageLink`, `EditImageLink`, `RemoveImageLink`, `Display`, `AltText`, and `Dimension` allowing you to manage and edit images directly within the content.

By configuring these options in the [quickToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quicktoolbarsettings) property, you can enhance the editor’s functionality, ensuring a user-friendly experience for efficiently handling image elements.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/customize-image-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/customize-image-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/customize-image-cs2" %}

## Link quick toolbar

The link quick toolbar appears when you click on a link in the editor. You can customize its items using the `link` property in the  [quickToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#link).

The Rich Text Editor provides essential tools in the link quick toolbar, including `Open`, `Edit`, and `Remove`. You can also add a custom tool.

The following example demonstrates how to customize the link quick toolbar using the [quickToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#link) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/markdown-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/markdown-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/markdown-cs6" %}

## Table quick toolbar

The table quick toolbar opens when you click anywhere within a table. Customize its items using the `table` property in the [`quickToolbarSettings`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#table).

The Rich Text Editor provides essential tools in the table quick toolbar, such as `TableHeader`, `TableRemove`, `TableRows`, `TableColumns`, `TableCell`, `Styles`, `BackgroundColor`, `Alignments`, `TableCellVerticalAlign`, `TableEditProperties`, and `TableCellProperties`.

The following sample demonstrates the customization of table quick toolbar.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/table-quick-tool-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/table-quick-tool-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/table-quick-tool-cs1" %}

## Audio quick toolbar

Customize the quick toolbar items for audio elements using the `audio` property in the [quickToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#audio). The Rich Text Editor provides essential tools such as `AudioReplace`, `Remove`, and `AudioLayoutOption` for managing audio content.

By configuring these options in the [quickToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#audio) property, you can customize how users handle audio elements.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/audio-quick-tool-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/audio-quick-tool-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/audio-quick-tool-cs1" %}

## Video quick toolbar

The video quick toolbar appears when you click on a video element. You can customize its tools using the `video` property in the [quickToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#video).

The Rich Text Editor allows you to tailor the video quick toolbar with essential tools such as `VideoReplace`, `VideoAlign`, `VideoRemove`, `VideoLayoutOption`, and `VideoDimension` for managing embedded videos.

By configuring these options in the [quickToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#video) property, you can customize how users edit and manage video elements.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/video-quick-tool-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/video-quick-tool-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/video-quick-tool-cs1" %}

## Text quick toolbar

The text quick toolbar provides easy access to commonly used formatting tools, enabling users to apply styles and adjustments effortlessly. This enhances the editing experience by streamlining text formatting.

Customize the quick toolbar items using the `text` property in the [quickToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#text). Any toolbar items available in the Rich Text Editor can be configured for the text quick toolbar. By default, the text quick toolbar is `null`. The example below demonstrates its customization.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/text-quick-tool-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/text-quick-tool-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/text-quick-tool-cs1" %}

## Quick inline toolbar

Quick commands open as a context menu when you click the corresponding element. Pass the commands as a string array to the `image`, `text`, `link`, and `table` properties of the [quickToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quicktoolbarsettings) property.

| Target Element | Default Quick Toolbar items |
|----------------|---------|
|image | 'Replace', 'Align', 'WrapText', 'Caption', 'Remove', 'InsertLink', 'Display', 'AltText','Dimension'.|
| link | 'Open', 'Edit', 'UnLink'.|
| text | null <br> (Any toolbar [items](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/toolbar/toolbar-types#toolbar-items) in the Rich Text Editor can be configured here).|
| table | 'TableHeader', 'TableRows', 'TableColumns', 'BackgroundColor', 'TableRemove', 'Alignments', 'TableCellVerticalAlign', 'Styles'.|

Custom tool can be added to the corresponding quick toolbar, using [quickToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quicktoolbarsettings#quicktoolbarsettings) property.

The following sample demonstrates the option to insert the image to the Rich Text Editor content as well as the option to rotate the image through the quick toolbar. The image rotation functionality has been achieved through the [toolbarClick](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#toolbarclick) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs20/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs20" %}

## Render quick toolbar in document body

To render the quick toolbar in the document body, set `enableAppendToBody` to `true` in [quickToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quicktoolbarsettings). The default value is `false`. This prevents the toolbar from being clipped in constrained layouts, such as when the editor's dimensions are very small.

The following example demonstrates how to render the quick toolbar directly in the document body using `enableAppendToBody` in [quickToolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/quicktoolbarsettingsmodel).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/quick-toolbar-body/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/quick-toolbar-body/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/quick-toolbar-body" %}
