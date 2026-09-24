---
layout: post
title: Insert Image in JavaScript Modern Rich Text Editor | Syncfusion
description: Learn how to insert, upload, resize, and manage images in the JavaScript Modern Rich Text Editor using imageSettings and uploadFile.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Insert image in JavaScript Modern Rich Text Editor

Readers can insert images into the document through the `Image` toolbar item — no `Inject()` call is needed, since image support is built in. What happens to an inserted image from there — how it's validated, where it's uploaded, and how it looks — is controlled through `imageSettings`.

## Configuring allowed image types

To prevent users from uploading file types your application can't handle, configure `imageSettings.allowedTypes` with the extensions you want to accept. A file that fails this check never leaves the browser — it's rejected immediately with a `fileUploadFailed` event instead of being sent to your server.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/insert-image/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/insert-image/index.html %}
{% endhighlight %}
{% endtabs %}

The sample above only allows common image formats (the built-in default) — adjust `allowedTypes` to match what your backend actually accepts.

## Maximum file size restriction

Set `imageSettings.maxFileSize` to cap how large an uploaded image can be, in bytes — the default is 30,000,000 (30 MB). Like an unsupported file type, an oversized file is rejected with `fileUploadFailed` before it's ever sent to your server.

## Supported image save formats

When no `uploadUrl` is configured, images are kept entirely in the browser rather than sent to a server — `imageSettings.saveFormat` decides how: `'Blob'` (the default, using `URL.createObjectURL`) or `'Base64'`, which embeds the image directly as a data URI in the document.

## Saving images to server

To have images uploaded and served from your own backend instead of stored locally, configure `imageSettings.uploadUrl` so selected files are posted there, `imageSettings.removeUrl` so a server-side copy is cleaned up when the user removes an inserted image, and `imageSettings.imageUrl` as the base path your server's returned file names should be resolved against to build the final image `src`.

To trigger the same upload pipeline from your own code — for example, from a custom "insert from clipboard" button — call `editor.uploadFile(fileType, blobData)`. It runs the same type/size validation and, on success, hands off to the upload popup; note that it doesn't insert the image into the document itself, so your `fileUploadSuccess` handler is responsible for that last step.

## Configuring image display position

Set `imageSettings.display` to `'inline'` (the default) to have images flow with surrounding text, or `'break'` to place them on their own line.

## Adjusting image dimensions

Use `imageSettings.dimension` to set the default width/height (and min/max bounds) new images are inserted at. It's a plain object rather than a nested settings class, so update it by replacing the whole object rather than one field at a time.

## Image resizing

Readers can drag-resize an inserted image by default. Set `imageSettings.resize` to `false` to turn that off (it's `true` by default).

## Image upload events

Beyond `fileUploadSuccess` and `fileUploadFailed`, you can hook into earlier points in the pipeline: `beforeFileUpload` (cancelable — set `args.cancel = true` to stop an upload before it starts), `fileUploading` while it's in transit, `fileSelected` as soon as files are picked, `fileRemoving` (cancelable) before a previously uploaded image is removed, and `beforeFileDrop` (cancelable) before a dropped or pasted file even enters the pipeline.
