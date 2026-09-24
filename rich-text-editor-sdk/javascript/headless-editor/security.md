---
layout: post
title: Security in JavaScript Headless Editor | Syncfusion
description: Learn about content security, clipboard sanitization, file upload validation, and link security in the JavaScript Headless Editor.
platform: headless-editor
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/headless-editor
---

# Security in JavaScript Headless Editor

The Headless Editor treats external content as untrusted input. It provides built-in clipboard sanitization, link validation, and upload lifecycle events. Applications must also validate content and files before storing or serving them.

## Content Security

Validate content at the application and server boundaries. The editor sanitizes pasted HTML, but it is not a replacement for server-side validation of content received from users, APIs, or storage.

Use the editor's schema and extension configuration to control the content that can be inserted into the document.

## Clipboard Security

Pasted HTML is sanitized before it is parsed into the editor document. The sanitizer removes dangerous elements, event-handler attributes, and unsafe URL values.

Application clipboard transformations run after the built-in sanitizer:

```ts
const editor = HeadlessEditor.create({
    clipboard: {
        transformHTML: (html: string) => html.replace(/\sdata-source="external"/g, '')
    }
});
```

Use `transformHTML` only for additional product-specific rules. It must not be used to bypass the built-in sanitizer.

## HTML Sanitization

The built-in sanitizer removes common XSS vectors, including:

- `script`, `style`, `iframe`, and unsafe `object` elements
- inline event attributes such as `onclick`, `onload`, and `onerror`
- `javascript:` URL values
- `data:text/html` and script-capable SVG data URLs
- styles containing `javascript:` or `expression()` values

Sanitization is applied at the clipboard boundary before the content reaches the schema parser. Sanitize initial HTML and content received from external APIs before passing it to the editor.

## File Upload Security

The `beforeFileUpload` event is raised before processing begins. Set `event.payload.cancel` to `true` to reject a file before the upload starts.

```ts
editor.eventBus.subscribe('beforeFileUpload', (event) => {
    const payload = event.payload as { file: File; cancel?: boolean };
    const allowedTypes: Set<string> = new Set(['image/jpeg', 'image/png']);

    if (!allowedTypes.has(payload.file.type) || payload.file.size > 5 * 1024 * 1024) {
        payload.cancel = true;
    }
});
```

Validate file type, size, name, and content on the server as well. Use `fileReceived` for post-validation processing and `FileHandler.cancel(uploadId)` to cancel an active upload.

## Link Security

The link command validates URLs before applying a link mark. It rejects empty values and dangerous protocols such as `javascript:`, `data:`, and `vbscript:`. Common safe protocols include `http:`, `https:`, `mailto:`, `tel:`, `ftp:`, relative paths, and in-page anchors.

```ts
const accepted = editor.execute('setLink', {
    href: 'https://www.example.com',
    displayText: 'Open example'
});
```

Check the command result before reporting success. Validate or rewrite link attributes again when exporting or rendering content outside the editor.

## Security best practices

- keep the built-in clipboard sanitizer enabled
- validate initial, pasted, imported, and stored content
- enforce file type and size rules before upload and on the server
- allow only approved URL protocols
- apply a Content Security Policy in the host application
- validate final rendered HTML before displaying user content

## See also

* [Security in Syncfusion<sup style="font-size:70%">&reg;</sup> controls](https://ej2.syncfusion.com/documentation/common/security)
