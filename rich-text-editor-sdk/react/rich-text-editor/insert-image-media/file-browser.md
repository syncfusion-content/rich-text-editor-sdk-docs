---
layout: post
title: File Browser in React Rich Text Editor | Syncfusion
description: Learn how to browse, select, and insert files from server folders and cloud storage using the File Browser in the React Rich Text Editor.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# File Browser in React Rich Text Editor

The File Browser in the Rich Text Editor enables browsing and inserting files, such as images, in the edit panel. File browser allows the users to browse and select a file or folder from the file system and it supports various cloud services.

## Required Dependencies

Install the FileManager package and related dependencies:

```bash
npm install @syncfusion/ej2-filemanager @syncfusion/ej2-layouts @syncfusion/ej2-grids
```

### Dependency Structure

```
@syncfusion/ej2-react-richtexteditor
├── @syncfusion/ej2-layouts
├── @syncfusion/ej2-grids
└── @syncfusion/ej2-filemanager
```

## CSS Theme Reference

Additionally add the below styles in the `[src/App.css]` file.

```css
  @import "../../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css";
  @import "../../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
  @import "../../node_modules/@syncfusion/ej2-filemanager/styles/tailwind3.css";
```

## Setup Steps

The following example demonstrates how to configure the file browser within the Rich Text Editor:

1. **Add FileManager to toolbar** — Configure the `FileManager` toolbar item in the `toolbarSettings.items` property
2. **Enable file browser** — Set the `enable` property to `true` in the [fileManagerSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/index-default#filemanagersettings) property
3. **Inject module** — Add `FileManager` to the `<Inject services={[FileManager]} />` array
4. **Configure endpoints** — Map server endpoints for file upload, deletion, and browsing

> Rich Text Editor features are segregated into individual feature-wise modules. To use the file browser tool, inject the `FileManager` module using services.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/file-browser-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/file-browser-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/file-browser-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/file-browser-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/file-browser-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/file-browser-cs2" %}

## See Also

* [FileManager Documentation](https://ej2.syncfusion.com/react/documentation/file-manager/getting-started/)
* [Image Insertion](./insert-images)
* [Video Insertion](./video)
* [Audio Insertion](./audio)