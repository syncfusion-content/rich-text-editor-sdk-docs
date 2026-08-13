---
layout: post
title: Style and Appearance in Angular Block Editor | Syncfusion
description: Learn how to customize the Angular Block Editor appearance by configuring width, height, read-only mode, and custom CSS classes.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Style and Appearance in Angular Block Editor

The Block Editor component provides inputs to customize its visual appearance, allowing you to control its dimensions, theming, and behavior. This page covers the four inputs most commonly used for layout and styling: `width`, `height`, `cssClass`, and `readOnly`.

## Setting width and height

You can specify the width and height of the Block Editor using the [width](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#width) and [height](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#height) inputs. Both accept a CSS length value, such as a percentage, viewport unit, or pixel value:

```html
<!-- Fluid layout that fills its container -->
<ejs-blockeditor [width]="'100%'" [height]="'80vh'" />

<!-- Fixed-size layout -->
<ejs-blockeditor [width]="'800px'" [height]="'500px'" />
```

If `width` and `height` are not set, the editor defaults to `width: '100%'` and `height: 'auto'`.

## Customization using CSS class

You can apply a custom theme to the Block Editor by passing one or more CSS class names through the [cssClass](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#cssclass) input. The class is added to the editor's root element, so selectors should target `.e-block-editor.your-class` (or whichever root class the editor renders). This input is useful for things like brand colors, gradient backgrounds, or dark-mode overrides:

```html
<ejs-blockeditor [width]="'600px'" [height]="'400px'" [cssClass]="'custom-editor-theme'" />
```

## Setting read-only mode

You can place the Block Editor in read-only mode by setting the [readOnly](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#readonly) input to `true`. While read-only, the user can view the content with all formatting intact but cannot make changes. This is useful for previews and reports — see the [Read-Only Mode](editor-security/read-only-mode.html) page for full details and a runtime-toggle example:

```html
<ejs-blockeditor [readOnly]="true" />
```

The following example demonstrates the usage of `readOnly` and `cssClass` together with runtime toggling via component methods.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/appearance/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/appearance/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/appearance/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/appearance/src/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/appearance" %}
