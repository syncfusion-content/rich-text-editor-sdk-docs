---
layout: post
title: Basic Setup in Angular Modern Rich Text Editor | Syncfusion
description: Learn the four properties you'll typically configure first in the Angular Modern Rich Text Editor — value, valueFormat, toolbarSettings, and imageSettings.
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Basic setup in Angular Modern Rich Text Editor

After initializing the Modern Rich Text Editor (see [Getting Started](getting-started)), configure the properties that define its initial content, content format, toolbar options, image handling behavior, and editing experience. These settings establish the editor's default configuration and provide a foundation for further customization based on application requirements.

{% tabs %}

{% highlight ts tabtitle="app.component.ts" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/basic-setup/Basic-setup/src/app.component.ts %}

{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/basic-setup/Basic-setup/src/app.component.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/basic-setup/Basic-setup/" %}

## Set Editor content.

Configure the `value` property to load content when the editor is initialized. This is commonly used to display existing content for editing or to provide starter content.

```ts
public value: string = '<p>Getting started with the Rich Text Editor UI.</p>';
```

Bind it on the component template:

```html
<ejs-richtexteditor-ui [value]="value"></ejs-richtexteditor-ui>
```

## Set content format

Before setting editor content, choose the appropriate `valueFormat`. Use html when working with HTML strings and json when storing or exchanging content using the editor's structured document model.

```ts
public valueFormat: string = 'html';
```

### Supported values

* 'json' - Uses the structured document model.
* 'html' - Uses HTML string content.

> **Note**: `valueFormat` is set to **'json'** by default. Set it to **'html'** when loading editor content as an HTML string.

## Configure toolbar options

Configure `toolbarSettings.items` to display only the editing tools required by your application. Keeping the toolbar focused helps simplify the editing experience and reduces unnecessary commands.

```ts
public toolbarSettings: object = {
    items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignment', '|', 'Link', 'Image', 'Table', '|', 'Undo', 'Redo']
};
```

See [Toolbar](toolbar/types) for layout, floating behavior, and toolbar events.

## Configure image settings

Configure `imageSettings` to control how images are uploaded and validated. You can specify accepted file types, file size limits, and server endpoints used for upload and removal operations.

```ts
public hostUrl: string = 'https://services.syncfusion.com/js/production/';
public imageSettings: object = {
    allowedTypes: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'],
    maxFileSize: 30000000,
    uploadUrl: this.hostUrl + 'api/RichTextEditor/SaveFile',
    removeUrl: this.hostUrl + 'api/RichTextEditor/DeleteFile',
    imageUrl: this.hostUrl + 'RichTextEditor/'
};
```

See [Insert Image](insert-image) for upload, storage, and display configuration beyond this basic validation.

## Set placeholder text 

Use the `placeholder` property to display instructional text when the editor is empty. This helps users understand what content is expected before they start typing.

```html
<ejs-richtexteditor-ui placeholder="Type something."></ejs-richtexteditor-ui>
```

## Configure auto-save behavior

When `enableAutoSave` is enabled, use `saveInterval` to control how long the editor waits before automatically saving unsaved changes. The value is specified in milliseconds and is triggered after the user becomes idle.

```ts
public saveInterval: number = 1000;
```
