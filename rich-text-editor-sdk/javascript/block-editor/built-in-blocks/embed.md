---
layout: post
title: Image Blocks in JavaScript Block Editor | Syncfusion
description: Learn how to add and configure image blocks in JavaScript Block Editor, including image uploads, server storage, authentication, resizing, and image properties.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Image Blocks in JavaScript Block Editor

The Block Editor supports image blocks to help you organize and showcase visual content effectively.

## Adding an image block

You can use the [Image](https://ej2.syncfusion.com/documentation/api/blockeditor/blocktype) block to display image content within your editor.

**Basic example:**

```typescript
// Adding an image block
{
    blockType: 'Image',
    properties: {
        src: 'path/to/image.png',
        altText: 'Description of the image'
    }
}
```


### Configure image block

You can render an `Image` block by setting the [blockType](https://ej2.syncfusion.com/documentation/api/blockeditor/blockmodel#blocktype) property to `Image` in the block model. The [properties](https://ej2.syncfusion.com/documentation/api/blockeditor/blockmodel#properties) property allows you to configure the image source, allowed file types, display dimensions, and more.

#### Global image settings

You can configure global settings for image blocks using the [imageBlockSettings](https://ej2.syncfusion.com/documentation/api/blockeditor/iimageblocksettings) property in the Block Editor root configuration. This ensures consistent behavior for image uploads, resizing, and display.

The `imageBlockSettings` property supports the following options:

| Property | Description | Default Value |
|----------|-------------|---------------|
| saveUrl | Specifies the server endpoint URL for uploading images. | `''` |
| maxFileSize | Specifies the maximum file size allowed for image uploads in bytes. | `30000000` |
| path | Specifies the base path for storing and displaying images on the server. | `''` |
| saveFormat | Specifies the format to save the image. | `Base64` |
| allowedTypes | Specifies allowed image file types for upload. | `['.jpg', '.jpeg', '.png']` |
| width | Specifies the default display width of the image. | `auto` |
| height | Specifies the default display height of the image. | `auto` |
| enableResize | Enables or disables image resizing. | `true` |
| minWidth | Minimum width allowed for resizing. | `''` |
| maxWidth | Maximum width allowed for resizing. | `''` |
| minHeight | Minimum height allowed for resizing. | `''` |
| maxHeight | Maximum height allowed for resizing. | `''` |

#### Maximum file size restriction

You can restrict the image uploaded from the local machine when the uploaded image file size is greater than the allowed size by using the [maxFileSize](https://ej2.syncfusion.com/documentation/api/blockeditor/imageblocksettings#maxfilesize) property. By default, the maximum file size is 30000000 bytes. You can configure this size as follows.

```ts

    imageBlockSettings: {
      maxFileSize: 10000000
    }

```

#### Configuring allowed image types

You can allow only specific image file types to be uploaded using the `allowedTypes` property. By default, the Block Editor allows the JPG, JPEG, and PNG formats. You can configure these formats as follows.

```ts

    imageBlockSettings: {
      allowedTypes: ['.jpg', '.jpeg', '.png']
    }

```

#### Configure image block properties

The `Image` block [properties](https://ej2.syncfusion.com/documentation/api/blockeditor/blockmodel#properties) property supports the following options:

| Property | Description | Default Value |
|----------|-------------|---------------|
| src | Specifies the image path. | `''` |
| width | Specifies the display width of the image. | `''` |
| height | Specifies the display height of the image. | `''` |
| altText | Specifies the alternative text to display when the image cannot be loaded. | `''` |

### Block type & properties

The following example demonstrates how to pre-configure an `Image` block in the editor.

```typescript
// Adding image block
 {
    blockType: 'Image',
    properties: {
        src: '',
        width: '200px',
        height: '100px',
        altText: '',
    }
}
```

This sample demonstrates the configuration of the `Image` block in the Block Editor.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/image-block/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/image-block/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/image-block" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/image-block/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/image-block/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/image-block" %}
{% endif %}

## Uploading images from local machine

To insert an image from your local machine, use the slash command or insert menu to add an `Image` block. It opens a popup where you can browse and select an image to insert from your local machine. For supported file types, see [Configuring allowed image types](#configuring-allowed-image-types).

## Saving images to server

Upload the selected image to a specified destination using the controller action specified in [imageBlockSettings.saveUrl](https://ej2.syncfusion.com/documentation/api/blockeditor/imageblocksettings#saveurl). Ensure to map this method name appropriately and provide the required destination path through the [imageBlockSettings.path](https://ej2.syncfusion.com/documentation/api/blockeditor/imageblocksettings#path) property.

Set the [imageBlockSettings.saveFormat](https://ej2.syncfusion.com/documentation/api/blockeditor/imageblocksettings#saveformat) property to determine whether the image should be saved as Blob or Base64, aligning with your application's requirements.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/image-block/image-upload-server/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/image-block/image-upload-server/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/image-block/image-upload-server/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/image-block/image-upload-server/index.html %}
{% endhighlight %}
{% endtabs %}
{% endif %}

```csharp

public class HomeController : Controller
    {
        private IHostingEnvironment hostingEnv;

        public HomeController(IHostingEnvironment env)
        {
            hostingEnv = env;
        }

        public IActionResult Index()
        {
            return View();
        }

        [AcceptVerbs("Post")]
        public void SaveImage(IList<IFormFile> UploadFiles)
        {
            try
            {
                foreach (IFormFile file in UploadFiles)
                {
                    if (UploadFiles != null)
                    {
                        string filename = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                        filename = hostingEnv.WebRootPath + "\\Uploads" + $@"\{filename}";

                        // Create a new directory, if it does not exists
                        if (!Directory.Exists(hostingEnv.WebRootPath + "\\Uploads"))
                        {
                            Directory.CreateDirectory(hostingEnv.WebRootPath + "\\Uploads");
                        }

                        if (!System.IO.File.Exists(filename))
                        {
                            using (FileStream fs = System.IO.File.Create(filename))
                            {
                                file.CopyTo(fs);
                                fs.Flush();
                            }
                            Response.StatusCode = 200;
                        }
                    }
                }
            }
            catch (Exception)
            {
                Response.StatusCode = 204;
            }
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }

```

### Secure image upload with authentication

You can add additional data with the image uploaded from the Block Editor on the client side, which can even be received on the server side. By using the [fileUploading](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#fileuploading) event and it's arguments you can access the current request and set the request header within these event. On the server side, you can fetch the custom headers by accessing the form collection from the current request, which retrieves the values sent using the POST method.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/image-block/image-upload-authentication/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/image-block/image-upload-authentication/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/image-block/image-upload-authentication/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/image-block/image-upload-authentication/index.html %}
{% endhighlight %}
{% endtabs %}
{% endif %}

```csharp

public void SaveFiles(IList<IFormFile> UploadFiles)
{
    string currentPath = Request.Form["Authorization"].ToString();
}

```

## Inserting images from web URLs

To insert an image from an online source, render the `Image` block. Switch to the `Embed Link` tab containing an input field where you can provide the image URL from the web to insert the image.

## Image resizing

The Block Editor has built-in image resizing support. Resize handles appear at each corner of the image when it is focused. Users can resize the image by dragging the resize handles, and the resize calculation is done based on the aspect ratio. For dimension constraints, see the `minWidth`, `maxWidth`, `minHeight`, and `maxHeight` properties in the [global image settings](#global-image-settings) table.

![Block Editor image resize](../images/image-resize.png)
