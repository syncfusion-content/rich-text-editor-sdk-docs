---
layout: post
title: Image Options in Angular Modern Rich Text Editor | Syncfusion
description: Configure image insertion, storage, display, and resizing in the Angular Modern Rich Text Editor, including formats, size limits, saving, and dimensions.
control: Modern Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Image Configuration Options in Angular Modern Rich Text Editor

Comprehensive configuration options enable fine-tuned control over image insertion, storage, and display in the Modern Rich Text Editor. This section covers supported formats, size restrictions, save formats, and display configurations.

## Allowed Image Formats

The `allowedTypes` property specifies the image file extensions that can be selected, dropped, pasted, or uploaded.

**Default Supported Formats:**
- JPEG (`.jpg`, `.jpeg`)
- PNG (`.png`)
- GIF (`.gif`)
- BMP (`.bmp`)
- WebP (`.webp`)

```ts
public imageSettings: object = {
    allowedTypes: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp']
};
```

## Image Size Restrictions

 The `maxFileSize` property specifies the maximum permitted image file size in bytes.

```ts
public imageSettings: object = {
    // File size restriction (in bytes)
    maxFileSize: 5242880           // 5MB in bytes
};
```

## Image Save Formats

The RichTextEditor supports two primary formats for saving images: Blob (server-based) and Base64 (embedded). Each format offers distinct advantages and trade-offs based on your use case.

### Blob Format (Recommended - Default)

```ts
public imageSettings: object = {
    saveFormat: 'Blob'
};
```

### Base64 Format

```ts
public imageSettings: object = {
    saveFormat: 'Base64'
};
```

## Limitations of Base64 & Blob

Understanding the limitations of each format helps you choose the right approach for your specific requirements.

### Base64 Limitations

| Issue | Impact | Solution |
|-------|--------|----------|
| File size increase | 33% larger than original | Compress images first |
| Email compatibility | Large Base64 breaks email clients | Use URLs for emails |
| Performance | Slower parsing with many images | Limit to < 5 images per document |
| Mobile concerns | Large payload on mobile devices | Use Blob format for mobile apps |
| Debugging | Hard to inspect in dev tools | Use Blob for development |

### Blob Limitations

| Issue | Impact | Solution |
|-------|--------|----------|
| Server storage required | Additional infrastructure | Plan storage capacity |
| Cross-domain issues | CORS restrictions | Configure CORS headers |
| Temporary files | Need cleanup mechanism | Implement file lifecycle management |
| Session dependency | Files tied to session | Persist files properly |

## Dimension

Configure custom dimensions or preset sizes for images with min/max constraints. The `dimension` property allows you to set default and constraint values for image sizing. You can specify width and height as CSS strings (e.g., `'300px'`, `'auto'`) or numeric values (interpreted as pixels).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/image/config-options/image-dimension-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/image/config-options/image-dimension-cs1/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/richtexteditor-ui/image/config-options/image-dimension-cs1" %}

## Image Display Options

Control how images are rendered and positioned within the editor content through display modes and wrapping options.

### Display

Configure how images are rendered in the document - either flowing with text or on a separate line.

**Display Modes:**
- `inline` (default) - Image flows within the current text line
- `break` (block) - Image placed on a separate line

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/image/config-options/image-display-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/image/config-options/image-display-cs1/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/richtexteditor-ui/image/config-options/image-display-cs1" %}

---

## Image Resizing

Enable and configure image resizing with constraints and event tracking.

### Enable Image Resize

The `resize` property controls whether images can be resized by users. By default, image resizing is enabled. Use the `dimension` property to set minimum and maximum constraints for resizable images.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/image/config-options/image-resize-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/image/config-options/image-resize-cs1/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/richtexteditor-ui/image/config-options/image-resize-cs1" %}
