---
layout: post
title: Image Quick Toolbar in Angular Modern Rich Text Editor | Syncfusion
description: Configure the image quick toolbar in the Angular Modern Rich Text Editor with Alt Text, Caption, Alignment, Resize, Replace, and Remove options.
control: Modern Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Image Quick Toolbar in Angular Modern Rich Text Editor

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

```ts
// Enable Caption in quick toolbar
public quickToolbarSettings: object = {
    image: ['Caption']
};
```

```html
<ejs-richtexteditor-ui [quickToolbarSettings]="quickToolbarSettings"></ejs-richtexteditor-ui>
```

---

### Alt Text

Use the Alt Text quick toolbar item to add descriptive alternative text for the image.

```ts
// Enable Alt Text in quick toolbar (default)
public quickToolbarSettings: object = {
    image: ['AltText']
};
```

---

### Replace

Use the Replace quick toolbar item to replace the currently selected image with a new image source.

```ts
// Enable Replace in quick toolbar
public quickToolbarSettings: object = {
    image: ['Replace']
};
```

---

### Text Wrap

Control how text flows around the selected image using the Text Wrap quick toolbar item. Configure text wrapping to position images inline with text or allow text to wrap around them.

```ts
// Enable WrapText in quick toolbar
public quickToolbarSettings: object = {
    image: ['WrapText']
};
```

**Text Wrap Modes:**
- `'left'` - Wraps text to the right of the image
- `'right'` - Wraps text to the left of the image
- `'none'` - No text wrapping (default)

---

### Alignment

Set horizontal alignment of the selected image using the Alignment quick toolbar item. You can align images to the left, center, or right within the editor.

```ts
// Enable Align in quick toolbar
public quickToolbarSettings: object = {
    image: ['Align']
};
```

**Available Alignment Options:**
- `'left'` - Align image to the left
- `'center'` - Center the image
- `'right'` - Align image to the right
- `'none'` - Remove alignment (default)

---

### Remove

Delete the selected image from the editor using the Remove quick toolbar item. This provides a quick way to remove images without using the delete key.

```ts
// Enable Remove in quick toolbar (recommended)
public quickToolbarSettings: object = {
    image: ['Remove']
};
```

---

## Customizing Quick Toolbar Items

The Modern Rich Text Editor provides comprehensive customization options for the image quick toolbar, offering a rich set of tools including 'AltText', 'Caption', 'Align', 'Display', 'WrapText', 'Dimension', 'Replace', and 'Remove'. By configuring these toolbar items through the `quickToolbarSettings` property, you can create a tailored editing experience that streamlines image operations.

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
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/image/quick-toolbar/quick-toolbar-customize-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/image/quick-toolbar/quick-toolbar-customize-cs1/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/image/quick-toolbar/quick-toolbar-customize-cs1" %}
