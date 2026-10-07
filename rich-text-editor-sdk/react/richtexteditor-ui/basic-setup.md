---
layout: post
title: Basic Setup in React Modern Rich Text Editor | Syncfusion
description: Learn the four properties you'll typically configure first in the React Modern Rich Text Editor — value, valueFormat, toolbarSettings, and imageSettings.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Basic setup in React Modern Rich Text Editor

After initializing the Modern Rich Text Editor (see [Getting Started](getting-started)), configure the properties that define its initial content, content format, toolbar options, image handling behavior, and editing experience. These settings establish the editor's default configuration and provide a foundation for further customization based on application requirements.

{% tabs %}

{% highlight tsx tabtitle="App.tsx" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/basic-setup/app/App.tsx %}

{% endhighlight %}

{% highlight jsx tabtitle="App.jsx" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/basic-setup/app/App.jsx %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/basic-setup/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/basic-setup/" %}

## Set Editor content

Configure the `value` property to load content when the editor is initialized. This is commonly used to display existing content for editing or to provide starter content. In React, use state management to track and update the editor content.

```ts
const [value, setValue] = React.useState('<p>Getting started with the Rich Text Editor UI.</p>');

<RichTextEditorUIComponent
    value={value}
    onChange={(e: any) => setValue(e.value)}
/>
```

## Set content format

Before setting editor content, choose the appropriate `valueFormat`. Use `'html'` when working with HTML strings and `'json'` when storing or exchanging content using the editor's structured document model.

```ts
<RichTextEditorUIComponent
    valueFormat="html"
/>
```

### Supported values

* `'json'` - Uses the structured document model.
* `'html'` - Uses HTML string content.

> **Note**: `valueFormat` is set to **'json'** by default. Set it to **'html'** when loading editor content as an HTML string.

## Configure toolbar options

Configure `toolbarSettings.items` to display only the editing tools required by your application. Keeping the toolbar focused helps simplify the editing experience and reduces unnecessary commands.

```ts
toolbarSettings={{
    items: [
        'Bold', 'Italic', 'Underline', '|', 
        'Formats', 'Alignment', '|', 
        'Link', 'Image', 'Table', '|', 
        'Undo', 'Redo'
    ]
}}
```

See [Toolbar](toolbar/types.md) for layout, floating behavior, and toolbar events.

## Configure image settings

Configure `imageSettings` to control how images are uploaded and validated. You can specify accepted file types, file size limits, and server endpoints used for upload and removal operations.

```ts
imageSettings={{
    saveUrl: 'https://services.syncfusion.com/react/uploader/Save',
    removeUrl: 'https://services.syncfusion.com/react/uploader/Remove',
    path: '/Images/',
    allowedExtensions: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'],
    maxFileSize: 30000000
}}
```

See [Insert Image](insert-image) for upload, storage, and display configuration beyond this basic validation.

## Set placeholder text

Use the `placeholder` property to display instructional text when the editor is empty. This helps users understand what content is expected before they start typing.

```ts
<RichTextEditorUIComponent
    placeholder="Type something."
/>
```

## Configure auto-save behavior

When `enableAutoSave` is enabled, use `saveInterval` to control how long the editor waits before automatically saving unsaved changes. The value is specified in milliseconds and is triggered after the user becomes idle.

```ts
<RichTextEditorUIComponent
    enableAutoSave={true}
    saveInterval={1000}
/>
```
