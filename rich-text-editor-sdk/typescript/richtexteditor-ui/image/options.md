---
layout: post
title: Image Configuration Options in TypeScript RichTextEditorUI | Syncfusion
description: Configure image insertion, storage, display, and resizing in TypeScript RichTextEditorUI. Learn about file formats, size restrictions, save formats, and dimension settings.
control: RichTextEditorUI
platform: rich-text-editor-ui-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-ui-sdk/
---

# Image Configuration Options

Comprehensive configuration options enable fine-tuned control over image insertion, storage, and display in the RichTextEditorUI. This section covers supported formats, size restrictions, save formats, and display configurations.

### Allowed Image Formats

The `allowedTypes` property specifies the image file extensions that can be selected, dropped, pasted, or uploaded.

**Default Supported Formats:**
- JPEG (`.jpg`, `.jpeg`)
- PNG (`.png`)
- GIF (`.gif`)
- BMP (`.bmp`)
- WebP (`.webp`)

**Custom Format Configuration:**

```typescript
const editor = new RichTextEditorUI({
    imageSettings: {
        allowedTypes: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp']
    }
});
```

### Image Size Restrictions

 The `maxFileSize` property specifies the maximum permitted image file size in bytes.

**Configuration Options:**

```typescript
const editor = new RichTextEditorUI({
    imageSettings: {
        // File size restriction (in bytes)
        maxFileSize: 5242880           // 5MB in bytes
    }
});
```

**Size Validation in Events:**

```typescript
editor.addEventListener('beforeFileUpload', (args: BeforeFileUploadEventArgs) => {
    const file = args.filesData?.[0];
    
    if (file) {
        // Check file size
        const maxSize = 5 * 1024 * 1024;  // 5MB
        if (file.size > maxSize) {
            args.cancel = true;
            console.log('File too large');
        }
    }
});
```

### Image Save Formats

The RichTextEditor supports two primary formats for saving images: Blob (server-based) and Base64 (embedded). Each format offers distinct advantages and trade-offs based on your use case.

#### Blob Format (Recommended - Default)

```typescript
const editor = new RichTextEditorUI({
    imageSettings: {
        saveFormat: 'Blob'
    }
});
```

#### Base64 Format

```typescript
const editor = new RichTextEditorUI({
    imageSettings: {
        saveFormat: 'Base64'
    }
});
```

### Limitations of Base64 & Blob

Understanding the limitations of each format helps you choose the right approach for your specific requirements.

#### Base64 Limitations

| Issue | Impact | Solution |
|-------|--------|----------|
| File size increase | 33% larger than original | Compress images first |
| Email compatibility | Large Base64 breaks email clients | Use URLs for emails |
| Performance | Slower parsing with many images | Limit to < 5 images per document |
| Mobile concerns | Large payload on mobile devices | Use Blob format for mobile apps |
| Debugging | Hard to inspect in dev tools | Use Blob for development |

#### Blob Limitations

| Issue | Impact | Solution |
|-------|--------|----------|
| Server storage required | Additional infrastructure | Plan storage capacity |
| Cross-domain issues | CORS restrictions | Configure CORS headers |
| Temporary files | Need cleanup mechanism | Implement file lifecycle management |
| Session dependency | Files tied to session | Persist files properly |

### Dimension

Configure custom dimensions or preset sizes for images with min/max constraints. The `dimension` property allows you to set default and constraint values for image sizing. You can specify width and height as CSS strings (e.g., `'300px'`, `'auto'`) or numeric values (interpreted as pixels).

**Configuration:**

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/image-dimension-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/image-dimension-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/image-dimension-cs1" %}

### Image Display Options

Control how images are rendered and positioned within the editor content through display modes and wrapping options.

#### Display

Configure how images are rendered in the document - either flowing with text or on a separate line.

**Display Modes:**
- `inline` (default) - Image flows within the current text line
- `break` (block) - Image placed on a separate line

**Configuration:**

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/image-display-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/image-display-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/image-display-cs1" %}

---

### Image Resizing

Enable and configure image resizing with constraints and event tracking.

#### Enable Image Resize

The `resize` property controls whether images can be resized by users. By default, image resizing is enabled. Use the `dimension` property to set minimum and maximum constraints for resizable images.

**Configuration:**

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/image-resize-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/image-resize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/image-resize-cs1" %}
