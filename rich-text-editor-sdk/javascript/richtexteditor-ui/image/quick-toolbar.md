---
layout: post
title: Image Quick Toolbar in JavaScript Modern Rich Text Editor | Syncfusion
description: Configure the image quick toolbar in the JavaScript Modern Rich Text Editor with Alt Text, Caption, Alignment, Resize, Replace, and Remove options.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Image Quick Toolbar in JavaScript Modern Rich Text Editor

The Image Quick Toolbar provides instant access to common image operations when an image is selected in the editor. It offers a streamlined interface for managing image properties, alignment, sizing, and other aspects without requiring modal dialogs.

## Available Quick Toolbar Items

The Image Quick Toolbar appears automatically when an image is selected. It provides quick access to common image operations through dedicated toolbar buttons.

### Caption

Captions are rendered as `<figcaption>` elements inside a `<figure>` container.

**HTML Output:**
```html
<figure>
    <img src="image.png" alt="Sample" class="e-img-inline" />
    <figcaption>Image Caption Text</figcaption>
</figure>
```

```javascript
// Enable Caption in quick toolbar
var editor = new ej.richtexteditorui.RichTextEditorUI({
    quickToolbarSettings: {
        image: ['Caption']
    }
});
editor.appendTo('#editor');
```

---

### Alt Text

Use the Alt Text quick toolbar item to add descriptive alternative text for the image.

```javascript
// Enable Alt Text in quick toolbar (default)
var editor = new ej.richtexteditorui.RichTextEditorUI({
    quickToolbarSettings: {
        image: ['AltText']
    }
});
editor.appendTo('#editor');
```

---

### Replace

Use the Replace quick toolbar item to replace the currently selected image with a new image source.

```javascript
// Enable Replace in quick toolbar
var editor = new ej.richtexteditorui.RichTextEditorUI({
    quickToolbarSettings: {
        image: ['Replace']
    }
});
editor.appendTo('#editor');
```

---

### Text Wrap

Control how text flows around the selected image using the Text Wrap quick toolbar item. Configure text wrapping to position images inline with text or allow text to wrap around them.

```javascript
// Enable WrapText in quick toolbar
var editor = new ej.richtexteditorui.RichTextEditorUI({
    quickToolbarSettings: {
        image: ['WrapText']
    }
});
editor.appendTo('#editor');
```

**Text Wrap Modes:**
- `'left'` - Wraps text to the right of the image
- `'right'` - Wraps text to the left of the image
- `'none'` - No text wrapping (default)

---

### Alignment

Set horizontal alignment of the selected image using the Alignment quick toolbar item. You can align images to the left, center, or right within the editor.

```javascript
// Enable Align in quick toolbar
var editor = new ej.richtexteditorui.RichTextEditorUI({
    quickToolbarSettings: {
        image: ['Align']
    }
});
editor.appendTo('#editor');
```

**Available Alignment Options:**
- `'left'` - Align image to the left
- `'center'` - Center the image
- `'right'` - Align image to the right
- `'none'` - Remove alignment (default)

---

### Remove

Delete the selected image from the editor using the Remove quick toolbar item. This provides a quick way to remove images without using the delete key.

```javascript
// Enable Remove in quick toolbar (recommended)
var editor = new ej.richtexteditorui.RichTextEditorUI({
    quickToolbarSettings: {
        image: ['Remove']
    }
});
editor.appendTo('#editor');
```

---

## Customizing Quick Toolbar Items

The JavaScript Modern Rich Text Editor provides comprehensive customization options for the image quick toolbar, offering a rich set of tools including 'AltText', 'Caption', 'Align', 'Display', 'WrapText', 'Dimension', 'Replace', and 'Remove'. By configuring these toolbar items through the `quickToolbarSettings` property, you can create a tailored editing experience that streamlines image operations.

**Default Quick Toolbar Items for Images:**
The default image quick toolbar includes:
- `AltText` - Edit alternative text
- `Caption` - Add/edit image caption
- `Align` - Align image (left, center, right, none)
- `Display` - Change display mode (inline, block)
- `WrapText` - Set text wrapping (left, right, none)
- `Dimension` - Adjust width and height
- `Replace` - Replace with a different image
- `Remove` - Delete the image


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/image/quick-toolbar-customize-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/image/quick-toolbar-customize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/image/quick-toolbar-customize-cs1" %}
