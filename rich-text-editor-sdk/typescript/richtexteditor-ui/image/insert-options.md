---
layout: post
title: Insert Images in TypeScript Modern Rich Text Editor | Syncfusion
description: Learn how to insert images in the TypeScript Modern Rich Text Editor using local storage and web URLs. Explore multiple insertion methods and configure image settings.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Insert Images in TypeScript Modern Rich Text Editor

Image insertion in the RichTextEditorUI supports multiple methods to accommodate different workflows and use cases. The editor provides flexible options for inserting images from local storage and web URLs.

### Local Storage

To upload images from your local machine, click the `Image` tool in the toolbar. By default, this tool opens a dialog box where you can browse and select an image to insert from your local machine.

```typescript
const editor = new RichTextEditorUI({
    imageSettings: {
        uploadUrl: 'https://api.example.com/upload',
        imageUrl: '/uploads/'
    },
    toolbarSettings: {
        items: ['Image']
    }
});

editor.appendTo('#editor');
```

### Web URLs

To insert an image from an online source, click the `Image` tool in the toolbar. By default, this tool opens a dialog box with an input field where you can provide the image URL from the web to insert the image.
