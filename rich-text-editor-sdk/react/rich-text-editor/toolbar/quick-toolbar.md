---
layout: post
title: Quick Toolbars in React Rich Text Editor | Syncfusion
description: Learn how to customize Quick Toolbars in the React Rich Text Editor for images, links, tables, audio, video, and text with context-aware editing commands.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Quick Toolbars in React Rich Text Editor

The Rich Text Editor has quick toolbars that act as context-menus, appearing when you click on elements like images, links, audio, video, and tables. By default, specific quick toolbar items are displayed when clicking on the corresponding element. You can customize these items using the [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/index-default#quickToolbarSettings) property.

> To use the QuickToolbar feature, inject the `QuickToolbar` module using `<Inject services={[QuickToolbar]} />`.

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

Customize the image quick toolbar using the `image` property in [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quicktoolbarsettings). The Rich Text Editor provides essential tools such as `Replace`, `Align`, `WrapText`, `Caption`, `Remove`, `InsertLink`, `OpenImageLink`, `EditImageLink`, `RemoveImageLink`, `Display`, `AltText`, and `Dimension` allowing you to manage and edit images directly within the content.

By configuring these options in the [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quicktoolbarsettings) property, you can enhance the editor’s functionality, ensuring a user-friendly experience for efficiently handling image elements.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/customize-image-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/customize-image-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/customize-image-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/customize-image-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/customize-image-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/customize-image-cs2" %}

## Link quick toolbar

The link quick toolbar appears when you click on a link in the editor. You can customize its items using the `link` property in the  [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#link).

The Rich Text Editor provides essential tools in the link quick toolbar, including `Open`, `Edit`, and `Remove`. You can also add a custom tool.

The following example demonstrates how to customize the link quick toolbar using the [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#link) property.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs44/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs44/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs44" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs45/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs45/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs45" %}

## Table quick toolbar

The table quick toolbar opens when you click anywhere within a table. Customize its items using the `table` property in the [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#table).

The Rich Text Editor provides essential tools in the table quick toolbar, such as `TableHeader`, `TableRemove`, `TableRows`, `TableColumns`, `TableCell`, `Styles`, `BackgroundColor`, `Alignments`, `TableCellVerticalAlign`, `TableEditProperties`, and `TableCellProperties`.

The following example demonstrates how to customize the table quick toolbar using the [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quicktoolbarsettings) property.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/customize-table-quicktoolbar-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/customize-table-quicktoolbar-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/customize-table-quicktoolbar-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/customize-table-quicktoolbar-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/customize-table-quicktoolbar-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/customize-table-quicktoolbar-cs2" %}

## Audio quick toolbar

Customize the quick toolbar items for audio elements using the `audio` property in the [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#audio). The Rich Text Editor provides essential tools such as `AudioReplace`, `Remove`, and `AudioLayoutOption` for managing audio content.

By configuring these options in the [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#audio) property, you can customize how users handle audio elements.

`[Class-component]`

```ts

import * as React from 'react';
import { HtmlEditor, Audio, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

class App extends React.Component<{},{}> {
  private toolbarSettings: object = {
    items: ['Audio'],
  };
  private quickToolbarSettings: object = {
     audio: ['AudioReplace', 'Remove', 'AudioLayoutOption']
  }
  private rteValue:string = `<p><b>Get started with Quick Toolbar to click on an audio</b></p>
                        <p>Using the quick toolbar, users can replace, display, and delete the selected audio.</p>
                        <p><audio controls><source src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Audio.wav" type="audio/mp3" /></audio></p>`;
  public render() {
    return (
      <RichTextEditorComponent height={450} value={this.rtevalue} toolbarSettings={this.toolbarSettings} quickToolbarSettings={this.quickToolbarSettings}>
         <Inject services={[Toolbar, Audio, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    );
  }
}

```

`[Functional-component]`

```ts

import * as React from 'react';
import { HtmlEditor, Audio, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

function App() {
  let toolbarSettings: object = {
    items: ['Audio'],
  }
  let quickToolbarSettings: object = {
    audio: ['AudioReplace', 'Remove', 'AudioLayoutOption']
  }
  let rteValue = `<p><b>Get started with Quick Toolbar to click on an audio</b></p>
                        <p>Using the quick toolbar, users can replace, display, and delete the selected audio.</p>
                        <p><audio controls><source src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Audio.wav" type="audio/mp3" /></audio></p>`;

  return (
    <RichTextEditorComponent height={450} value={rtevalue} toolbarSettings={toolbarSettings} quickToolbarSettings={quickToolbarSettings}>
        <Inject services={[Toolbar, Audio, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
  );
}

```

## Video quick toolbar

The video quick toolbar appears when you click on a video element. You can customize its tools using the `video` property in the [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#video).

The Rich Text Editor allows you to tailor the video quick toolbar with essential tools such as `VideoReplace`, `VideoAlign`, `VideoRemove`, `VideoLayoutOption`, and `VideoDimension` for managing embedded videos.

By configuring these options in the [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#video) property, you can customize how users edit and manage video elements.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/customize-video-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/customize-video-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/customize-video-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/customize-video-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/customize-video-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/customize-video-cs2" %}

## Text quick toolbar

The text quick toolbar provides easy access to commonly used formatting tools, enabling users to apply styles and adjustments effortlessly. This enhances the editing experience by streamlining text formatting.

Customize the quick toolbar items using the `text` property in the [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#text). Any toolbar items available in the Rich Text Editor can be configured for the text quick toolbar. By default, the text quick toolbar is `null`. The example below demonstrates its customization.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/text-quick-toolbar-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/text-quick-toolbar-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/text-quick-toolbar-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/text-quick-toolbar-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/text-quick-toolbar-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/text-quick-toolbar-cs2" %}

## Quick inline toolbar

Quick commands open as a context menu when you click the corresponding element. Pass the commands as a string array to the `image`, `text`, and `link` properties of the [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quicktoolbarsettings) property.

| **Target element** | **Default quick toolbar items** |
| --- | --- |
| Image | 'Replace', 'Align', 'WrapText', 'Caption', 'Remove', 'InsertLink', 'Display', 'AltText', and 'Dimension' |
| Link | 'Open', 'Edit', and 'UnLink' |
| Text | null <br> (Any toolbar [items](https://ej2.syncfusion.com/react/documentation/rich-text-editor/toolbar/toolbar-types#toolbar-items) in the Rich Text Editor can be configured here). |
| Table | 'TableHeader', 'TableRows', 'TableColumns', 'BackgroundColor', 'TableRemove', 'Alignments', 'TableCellVerticalAlign' and 'Styles' |

Custom tool can be added to the corresponding quick toolbar, using the [quickToolbarSettings](/rich-text-editor/quickToolbarSettings)  property.

The following sample demonstrates the option to insert the image to the Rich Text Editor content as well as the option to rotate the image through the quick toolbar. The image rotation functionality has been achieved through the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/index-default#toolbarclick) event.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs76/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs76/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs76" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs77/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs77/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs77" %}

## Render quick toolbar in document body

To render the quick toolbar in the document body, set `enableAppendToBody` to `true` in [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quicktoolbarsettings). The default value is `false`. This prevents the toolbar from being clipped in constrained layouts, such as when the editor's dimensions are very small.

The following example demonstrates how to render the quick toolbar directly in the document body using `enableAppendToBody` in [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quicktoolbarsettingsmodel).

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/quick-toolbar-body-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/quick-toolbar-body-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight css tabtitle="App.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';

{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/quick-toolbar-body-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/quick-toolbar-body-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/quick-toolbar-body-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight css tabtitle="App.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';

{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/quick-toolbar-body-cs2" %}
