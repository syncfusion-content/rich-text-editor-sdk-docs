---
layout: post
title: Quick Toolbars in Angular Rich Text Editor | Syncfusion
description: Learn how to customize Quick Toolbars in the Angular Rich Text Editor for images, links, tables, audio, video, and text with context-aware editing commands.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Quick Toolbars in Angular Rich Text Editor

The Rich Text Editor has quick toolbars that act as context-menus, appearing when you click on elements like images, links, audio, video, and tables. By default, specific quick toolbar items are displayed when clicking on the corresponding element. You can customize these items using the [quickToolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quicktoolbarsettings) property.

> To enable quick toolbar feature, configure `QuickToolbarService` in the `providers` section of `NgModule`.

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
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';
```

## Image quick toolbar

Customize the image quick toolbar using the `image` property in [quickToolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quicktoolbarsettings). The Rich Text Editor provides essential tools such as `Replace`, `Align`, `WrapText`, `Caption`, `Remove`, `InsertLink`, `OpenImageLink`, `EditImageLink`, `RemoveImageLink`, `Display`, `AltText`, and `Dimension` allowing you to manage and edit images directly within the content.

By configuring these options in the [quickToolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quicktoolbarsettings) property, you can enhance the editor’s functionality, ensuring a user-friendly experience for efficiently handling image elements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/customize-image-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/customize-image-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/customize-image-cs1" %}

## Link quick toolbar

The link quick toolbar appears when you click on a link in the editor. You can customize its items using the `link` property in the  [quickToolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quicktoolbarsettings#link).

The Rich Text Editor provides essential tools in the link quick toolbar, including `Open`, `Edit`, and `Remove`. You can also add a custom tool

The following example demonstrates how to customize the link quick toolbar using the [quickToolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quicktoolbarsettings) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/getting-started-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/getting-started-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/getting-started-cs17" %}

## Table quick toolbar

The table quick toolbar opens when you click anywhere within a table. Customize its items using the `table` property in the [quickToolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quicktoolbarsettings#table). 

The Rich Text Editor provides essential tools in the table quick toolbar, such as `TableHeader`, `TableRemove`, `TableRows`, `TableColumns`, `TableCell`, `Styles`, `BackgroundColor`, `Alignments`, `TableCellVerticalAlign`, `TableEditProperties`, and `TableCellProperties`.

The following example demonstrates how to customize the table quick toolbar using the [quickToolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quicktoolbarsettings) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/getting-started-cs32/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/getting-started-cs32/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/getting-started-cs32" %}

## Audio quick toolbar

Customize the quick toolbar items for audio elements using the `audio` property in the [quickToolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#audio). The Rich Text Editor provides essential tools such as `AudioReplace`, `Remove`, and `AudioLayoutOption` for managing audio content.

By configuring these options in the [quickToolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#audio) property, you can customize how users handle audio elements.

The [showOnRightClick](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#showonrightclick) property in [quickToolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quicktoolbarsettingsmodel) determines whether the quick toolbar appears when the user right-clicks on the selected audio element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/customize-audio-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/customize-audio-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/customize-audio-cs1" %}

## Video quick toolbar

The video quick toolbar appears when you click on a video element. You can customize its tools using the `video` property in the [quickToolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quicktoolbarsettings#video).

The Rich Text Editor allows you to tailor the video quick toolbar with essential tools such as `VideoReplace`, `VideoAlign`, `VideoRemove`, `VideoLayoutOption`, and `VideoDimension` for managing embedded videos.

By configuring these options in the [quickToolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#video) property, you can customize how users edit and manage video elements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/customize-video-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/customize-video-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/customize-video-cs1" %}

## Text quick toolbar

The text quick toolbar provides easy access to commonly used formatting tools, enabling users to apply styles and adjustments effortlessly. This enhances the editing experience by streamlining text formatting.

Customize the quick toolbar items using the `text` property in the [quickToolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#text). Any toolbar items available in the Rich Text Editor can be configured for the text quick toolbar. By default, the text quick toolbar is `null`. The example below demonstrates its customization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/quick-format-toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/quick-format-toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/quick-format-toolbar-cs1" %}

## Render quick toolbar in document body

To render the quick toolbar in the document body, set `enableAppendToBody` to `true` in [quickToolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quicktoolbarsettings). The default value is `false`. This prevents the toolbar from being clipped in constrained layouts, such as when the editor's dimensions are very small.

The following example demonstrates how to render the quick toolbar directly in the document body using `enableAppendToBody` in [quickToolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quicktoolbarsettingsmodel).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/quick-toolbar-body/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/quick-toolbar-body/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/quick-toolbar-body/src/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/quick-toolbar-body" %}