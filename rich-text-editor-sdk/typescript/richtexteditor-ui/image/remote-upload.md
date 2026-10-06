---
layout: post
title: Remote Image Upload in TypeScript Modern Rich Text Editor | Syncfusion
description: Learn remote image upload in the TypeScript Modern Rich Text Editor by configuring endpoints, handling uploads, renaming images, and securing requests.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/appliesto: UI Component Suite, Rich Text Editor SDK
---

# Remote Image Upload in TypeScript Modern Rich Text Editor

Remote image upload enables centralized image management on your server, providing better control over storage, performance, and security. This section covers implementing a complete server-side upload pipeline with authentication and validation.

## Writing an Endpoint for Image Upload

When a user uploads an image through the RichTextEditor, the component sends the file to your server using the form field name `UploadFiles`. Your server processes the file and returns a JSON response containing the filename, which the editor combines with the `imageUrl` setting to create the final image source.

### Client-Side Configuration

Configure the Modern Rich Text Editor component with the upload endpoint and base URL:

```typescript
// ============================================
// CLIENT-SIDE: Configure the RichTextEditor
// ============================================
const editor = new RichTextEditorUI({
    imageSettings: {
        uploadUrl: 'https://api.example.com/images/upload',  // POST endpoint for uploads
        imageUrl: '/uploads/',                               // Base URL to resolve uploaded filenames
        removeUrl: 'https://api.example.com/images/remove',  // DELETE endpoint for removal
        allowedTypes: ['.jpg', '.jpeg', '.png', '.gif'],     // Allowed file types
        maxFileSize: 5 * 1024 * 1024                         // 5MB limit
    }
});
editor.appendTo('#editor');
```

### Server-Side Configuration

{% tabs %}
{% highlight c# tabtitle="Server.cs" %}
{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/image/remote-upload-server-cs1/index.cs %}
{% endhighlight %}
{% endtabs %}

Set up your ASP.NET Core application to handle image uploads with proper CORS, static file serving, and multi part body size configuration in your `program.cs` file:

{% tabs %}
{% highlight c# tabtitle="program.cs" %}
{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/image/remote-upload-program-cs1/index.cs %}
{% endhighlight %}
{% endtabs %}

## Rename Images Before Inserting

You can implement server-side renaming to ensure all uploaded images follow your naming standards. The client receives the renamed filename and automatically inserts it using the `imageUrl` configuration.

### Server-Side Configuration

{% tabs %}
{% highlight c# tabtitle="Server.cs" %}
{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/image/remote-upload-rename-server-cs1/index.cs %}
{% endhighlight %}
{% endtabs %}

### Client-Side Configuration

```typescript
// ============================================
// CLIENT-SIDE: Track Upload Success
// ============================================
const editor = new RichTextEditorUI({
    imageSettings: {
        uploadUrl: 'https://api.example.com/images/upload',
        imageUrl: '/uploads/'
    },
    fileUploadSuccess: (args) => {
        if (args.source === 'Image') {
            console.log('Image uploaded successfully');
            console.log('Renamed filename:', args.response);
        }
    }
});

editor.appendTo('#editor');
```

## Secure image upload with authentication

You can add additional data with the image uploaded from the Modern Rich Text Editor on the client side, which can even be received on the server side. By using the `fileUploading` event and its arguments you can access the current request and set the request header within this event. On the server side, you can fetch the custom headers by accessing the form collection from the current request, which retrieves the values sent using the POST method.

### Client-Side Configuration

```typescript
// CLIENT-SIDE: Add authentication token before upload
const editor = new RichTextEditorUI({
    imageSettings: {
        uploadUrl: 'https://api.example.com/images/upload',
        imageUrl: '/uploads/'
    },
    fileUploading: (args) => {
        args.currentRequest.setRequestHeader('Authorization', 'Syncfusion');
    }
});

editor.appendTo('#editor');
```

### Server-Side Configuration

{% tabs %}
{% highlight c# tabtitle="Server.cs" %}
{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/image/remote-upload-auth-server-cs1/index.cs %}
{% endhighlight %}
{% endtabs %}
