---
layout: post
title: File Browser in Vue Rich Text Editor | Syncfusion
description: Learn how to browse, select, and insert files from server folders and cloud storage using the File Browser in the Vue Rich Text Editor.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# File browser in Vue Rich Text Editor

Rich Text Editor allows to browse and insert images in the edit panel using the file browser. File browser allows the users to browse and select a file or folder from the file system and it supports various cloud services.

## Required dependencies

Install the FileManager package and related dependencies:

```bash
npm install @syncfusion/ej2-filemanager @syncfusion/ej2-layouts @syncfusion/ej2-grids
```

### Dependency structure

```
@syncfusion/ej2-vue-richtexteditor
├── @syncfusion/ej2-layouts
├── @syncfusion/ej2-grids
└── @syncfusion/ej2-filemanager
```

## CSS theme reference

Additionally add the styles as given below in `<style>` section of the `App.vue` file.

```
<style>
  @import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-filemanager/styles/material.css";
</style>
```

## Setup steps

The following example demonstrates how to configure the file browser within the Rich Text Editor:

1. **Add FileManager to toolbar** — Configure the `FileManager` toolbar item in the `toolbarSettings.items` property
2. **Enable file browser** — Set the [`enable`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/filemanagersettings#enable) property to `true` in the [`fileManagerSettings`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#fileManagerSettings) property
3. **Inject module** — Add `FileManager` to the `provide('richtexteditor', [...])` array
4. **Configure endpoints** — Map server endpoints for file upload, deletion, and browsing

> Rich Text Editor features are segregated into individual feature-wise modules. To use the file browser tool, configure `FileManager` in the provider.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/file-browser-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/file-browser-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/file-browser-cs1" %}

## See also

* [FileManager Documentation](https://ej2.syncfusion.com/vue/documentation/file-manager/getting-started)
* [Image Insertion](./insert-images)
* [Video Insertion](./video)
* [Audio Insertion](./audio)
