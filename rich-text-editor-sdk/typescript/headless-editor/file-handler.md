---
layout: post
title: File Operations in TypeScript Headless Editor | Syncfusion
description: Learn how to handle file selection, uploads, upload progress, cancellation, errors, and custom upload handlers in the TypeScript Headless Editor.
control: Headless Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
------------------------------------------------------------

# File Operations in TypeScript Headless Editor

The TypeScript Headless Editor provides file operation support for receiving files through editor interactions and uploading them through a configurable upload handler. The file operation pipeline supports file selection, upload progress, cancellation, upload errors, and upload state management.

The upload implementation is provided by the application through the `FileUploadHandler` interface. This keeps the editor independent of the application's server, storage provider, and HTTP implementation.

## Required dependencies

Install the Headless Editor package using the following command:

```bash
npm install @syncfusion/ej2-headless-editor
```

## CSS theme reference

Include the required Syncfusion styles in the HTML page:

```html
<link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-base/styles/tailwind3.css" rel="stylesheet" />
<link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-headless-editor/styles/tailwind3.css" rel="stylesheet" />
```

## Setup steps

The following steps demonstrate how to configure file upload operations in the TypeScript Headless Editor.

**1. Create the Headless Editor**

Create the editor with the required extensions and mount it to a DOM element.

**2. Configure the upload handler**

Register a `FileUploadHandler` by using `setFileUploadHandler`. The handler is responsible for uploading the selected file and returning a `FileUploadResult`.

**3. Select and upload a file**

Applications can provide their own file-selection UI and start an upload through the editor's file handler. The `startUpload` method returns an upload ID that can be used to track or cancel the upload.

**4. Track upload progress**

The upload handler can report progress through the `onProgress` callback. The editor uses this information to update the upload state.

**5. Cancel an upload**

Use the upload ID returned by `startUpload` with the `cancel` method to cancel an active upload.

**6. Handle upload errors**

Reject the upload promise when the application detects an upload or response error. The editor records the upload as failed and exposes the error through the upload state.

> **Note:** Register the upload handler before starting file operations.

### File upload example

The following example uses a file input to select a file and demonstrates upload handler registration, progress reporting, and cancellation.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

{% include code-snippet/rich-text-editor-sdk/typescript/headless-editor/files-operation/index.ts %}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/typescript/headless-editor/files-operation/index.html %}

{% endhighlight %}
{% highlight css tabtitle="index.css" %}

{% include code-snippet/rich-text-editor-sdk/typescript/headless-editor/files-operation/index.css %}

{% endhighlight %}
{% endtabs %}

## File selection

The Headless Editor supports file intake through editor file operations and provides APIs for application-driven uploads. Applications can also use their own file-selection controls and pass the selected `File` object to the file handler.

Files received through supported editor operations such as paste and drop are processed through the file operation pipeline.

Before a received file is processed, the editor publishes the `beforeFileUpload` event. Applications can use this event to cancel the file operation.

After the file is accepted, the editor publishes the `fileReceived` event. Receiving a file and starting an upload are separate operations, allowing extensions to determine how the received file should be handled.

## File upload

Register an application-specific `FileUploadHandler` by using `setFileUploadHandler`.

The upload handler receives a `FileUploadRequest` containing the file, upload ID, optional `AbortSignal`, and progress callback.

The handler must return a promise that resolves to a `FileUploadResult`. The result must contain a non-empty `url`. Additional file metadata such as file name, MIME type, size, width, and height can also be returned.

```ts
const uploadHandler: FileUploadHandler = {
    upload: async (request: FileUploadRequest) => {
        return {
            url: 'https://example.com/uploaded-file'
        };
    }
};

headlessEditor.setFileUploadHandler(uploadHandler);
```

## Upload handler

The `FileUploadHandler` separates application-specific upload logic from the editor runtime.

The application upload handler is responsible for:

* Sending the file to the application's upload service.
* Validating the HTTP response.
* Parsing and validating the response data.
* Returning a valid `FileUploadResult`.
* Reporting transfer progress through `onProgress`.
* Respecting the supplied `AbortSignal`.
* Throwing an error when the upload cannot be completed.

The editor runtime handles the upload lifecycle after the handler resolves or rejects.

## Upload state

Each upload is tracked through an upload state with one of the following statuses:

* `idle`
* `uploading`
* `completed`
* `failed`
* `cancelled`

The upload state can also contain the number of bytes loaded, total size, percentage, upload result, or an error.

For extension-driven UI, the upload state can be associated with the extension's registry key. For example, the Image extension uses the image node ID to observe the corresponding upload state and update its UI.

## Upload progress

The upload handler reports progress by calling the `onProgress` callback supplied in the `FileUploadRequest`.

```ts
request.onProgress?.({
    loaded: 500,
    total: 1000,
    percentage: 50
});
```

The editor stores the progress information in the upload state and updates the corresponding upload lifecycle state.

The `total` and `percentage` values are optional. When the total size is known, the handler can provide both values.

## Upload cancellation

The `startUpload` method returns an upload ID. Pass this ID to the file handler's `cancel` method to cancel the upload.

```ts
const uploadId: string =
    headlessEditor.getFileHandler().startUpload(file);

headlessEditor.getFileHandler().cancel(uploadId);
```

The editor uses an `AbortController` for the upload and passes its signal to the upload handler. The handler should respect the signal and abort its underlying request when cancellation is requested.

If the upload is aborted, the editor records the upload state as `cancelled`.

## Upload errors

When the upload handler rejects its promise, the editor records the upload as `failed`.

The resulting upload state contains the error that was raised by the upload handler.

```ts
const uploadHandler: FileUploadHandler = {
    upload: async (request: FileUploadRequest) => {
        const response: Response = await fetch('/api/upload', {
            method: 'POST',
            body: request.file,
            signal: request.signal
        });

        if (!response.ok) {
            throw new Error(`Upload failed: ${response.status}`);
        }

        const result: { url?: string } = await response.json();

        if (!result.url) {
            throw new Error('Upload response does not contain a URL.');
        }

        return {
            url: result.url
        };
    }
};
```

The editor also validates the upload result and marks the upload as failed when the returned result does not contain a valid non-empty `url`.

## Custom file providers

The Headless Editor does not require a separate file-provider implementation. To connect file operations to a custom storage service, implement the `FileUploadHandler` interface and register it with `setFileUploadHandler`.

This allows the application to use its own:

* HTTP upload endpoint.
* Cloud storage service.
* Authentication mechanism.
* Response format.
* Progress implementation.
* Cancellation mechanism.

The editor only depends on the `FileUploadHandler` contract and the resulting `FileUploadResult`.

## File upload API

| API                    | Description                                                       |
| ---------------------- | ----------------------------------------------------------------- |
| `setFileUploadHandler` | Registers the application's file upload handler.                  |
| `getFileHandler`       | Returns the editor's file handler.                                |
| `startUpload`          | Starts an upload and returns an upload ID.                        |
| `cancel`               | Cancels an upload using its upload ID.                            |
| `getPendingUploads`    | Returns the upload entries currently tracked by the file handler. |
| `getPendingUpload`     | Returns a tracked upload entry for a specific upload ID.          |
