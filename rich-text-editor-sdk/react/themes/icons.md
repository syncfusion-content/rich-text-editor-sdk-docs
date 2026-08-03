---
layout: post
title: Icons in React Rich Text Editor SDK | Syncfusion
description: Learn about the built-in icon library used by the Syncfusion React Rich Text Editor SDK and how to customize icons.
platform: rich-text-editor-sdk
control: Icons
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Icons

Syncfusion<sup style="font-size:70%">&reg;</sup> React Rich Text Editor SDK components use a built-in icon library that ships with each theme. Icons are rendered as font icons using CSS classes prefixed with `e-icons`, and their appearance automatically matches the active theme.

## Using the icon library

The icons are included automatically when the theme stylesheet is referenced. No additional package is required. Toolbar tools in the Rich Text Editor use these icons by default.

## Custom icons

You can use custom icons for toolbar tools by defining a CSS class that sets a background image or a custom font glyph, and assigning it to a custom tool. Refer to [Custom Tools](../rich-text-editor/tools/custom-tools) for details on adding a toolbar item with a custom icon.

```css
.e-rte-custom-icon::before {
    content: '\e700';
    font-family: 'MyCustomFont';
}
```

## See also

* [Built-in Themes](./built-in-themes)
* [Custom Tools](../rich-text-editor/tools/custom-tools)
