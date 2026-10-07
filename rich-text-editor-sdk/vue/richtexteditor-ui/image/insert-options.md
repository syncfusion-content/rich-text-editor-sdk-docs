---
layout: post
title: Insert Images in Vue Modern Rich Text Editor | Syncfusion
description: Learn how to insert images in the Vue Modern Rich Text Editor using local storage and web URLs. Explore insertion methods and image settings.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Insert Images in Vue Modern Rich Text Editor

Image insertion in the Modern Rich Text Editor supports multiple methods to accommodate different workflows and use cases. The editor provides flexible options for inserting images from local storage and web URLs.

## Local Storage

To upload images from your local machine, click the `Image` tool in the toolbar. By default, this tool opens a dialog box where you can browse and select an image to insert from your local machine.

```html
<template>
  <ejs-richtexteditor-ui
    :imageSettings="imageSettings"
    :toolbarSettings="toolbarSettings">
  </ejs-richtexteditor-ui>
</template>

<script>
import { RichTextEditorUIComponent } from '@syncfusion/ej2-vue-richtexteditor-ui';

export default {
  components: {
    'ejs-richtexteditor-ui': RichTextEditorUIComponent
  },
  data() {
    return {
      imageSettings: {
        uploadUrl: 'https://api.example.com/upload',
        imageUrl: '/uploads/'
      },
      toolbarSettings: {
        items: ['Image']
      }
    };
  }
};
</script>
```

## Web URLs

To insert an image from an online source, click the `Image` tool in the toolbar. By default, this tool opens a dialog box with an input field where you can provide the image URL from the web to insert the image.