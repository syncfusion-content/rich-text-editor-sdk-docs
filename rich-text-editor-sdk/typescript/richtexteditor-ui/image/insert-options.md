---
layout: post
title: Insert Images in TypeScript RichTextEditorUI | Syncfusion
description: Learn how to insert images in the TypeScript RichTextEditorUI using local storage and web URLs. Explore multiple insertion methods and configure image settings.
control: RichTextEditorUI
platform: rich-text-editor-ui-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-ui-sdk/
---

# Insert Images in TypeScript RichTextEditorUI

Image insertion in the RichTextEditorUI supports multiple methods to accommodate different workflows and use cases. The editor provides flexible options for inserting images from local storage and web URLs.

### Local Storage

**Purpose**: Allow users to upload images directly from their computer.

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

**Purpose**: Reference images hosted on external websites or servers.

To insert an image from an online source, click the `Image` tool in the toolbar. By default, this tool opens a dialog box with an input field where you can provide the image URL from the web to insert the image.
