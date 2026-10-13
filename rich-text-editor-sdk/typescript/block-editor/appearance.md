---
layout: post
title: Style and Appearance in TypeScript Block Editor | Syncfusion
description: TypeScript Block Editor style and appearance provides a consolidated guide to built-in themes, CSS customization, dimensions, and appearance-related properties.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Style and Appearance in TypeScript Block Editor

The Block Editor control provides several properties to customize its visual appearance, allowing you to control its dimensions, styling, and behavior.

## Setting width and height

You can specify the width and height for the Block Editor control using the [width](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#width) and [height](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#height) properties.

```typescript
const editor = new BlockEditor({
    width: '100%',
    height: '80vh'
});

// Or with specific pixel values
const editor = new BlockEditor({
    width: '800px',
    height: '500px'
});
```

## Customization using CSS class

You can apply a custom theme to the Block Editor by passing one or more CSS class names through the [cssClass](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#cssclass) property. The class is added to the editor's root element, so selectors should target `.e-blockeditor.your-class` (the root class the editor renders). This property is useful for things like brand colors, gradient backgrounds, or dark-mode overrides:

```typescript
const editor = new BlockEditor({
    width: '600px',
    height: '400px',
    cssClass: 'custom-editor-theme'
});
```

## Setting read-only mode

You can place the Block Editor in read-only mode by setting the [readOnly](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#readonly) property to `true`. While read-only, the user can view the content with all formatting intact but cannot make changes. This is useful for previews and reports — see the [Read-Only Mode](./editor-security/read-only-mode.html) page for full details and a runtime-toggle example:

```typescript
const editor = new BlockEditor({
    readOnly: true
});
```

The following example demonstrates the usage of `readOnly` and `cssClass` together.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/appearance/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/appearance/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/appearance/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/appearance" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/appearance/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/appearance/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/appearance/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/appearance" %}
{% endif %}

## Theme Customization

The Block Editor provides flexible theme customization options to help match the editor appearance with your application design. You can customize built-in themes by overriding CSS variables, targeting specific CSS classes/IDs, or create a fully customized theme using Syncfusion Theme Studio.

### Default CSS Override

The Block Editor uses CSS variables with the unified `--sf` naming convention. These variables control colors, typography, backgrounds, borders, icons, and other visual elements across the editor.

### Block Editor CSS Classes and IDs

| Selector                      | Purpose                            |
| ----------------------------- | ---------------------------------- |
| `.e-blockeditor`              | Main Block Editor element          |
| `.e-active`                   | Active Block Editor element        |
| `.e-selected`                 | Selected Block Editor element      |
| `.e-list-item`                | Dropdown or list item              |
| `.e-dropdownbase`             | Dropdown container                 |
| `.e-table-element`            | Block Editor table element         |
| `#blockeditor_contextmenu`    | Block Editor context menu          |
| `#blockeditor_code-ddl_popup` | Code block language dropdown popup |

### Block Editor CSS Variables

| Variable                               | Purpose                  |
| -------------------------------------- | ------------------------ |
| `--color-sf-content-bg-color`          | Content background       |
| `--color-sf-content-bg-color-hover`    | Hover background         |
| `--color-sf-content-bg-color-selected` | Selected background      |
| `--color-sf-content-bg-color-pressed`  | Pressed background       |
| `--color-sf-content-text-color`        | Content text color       |
| `--color-sf-content-text-color-alt1`   | Alternate text color     |
| `--color-sf-placeholder-text-color`    | Placeholder text color   |
| `--color-sf-border-light`              | Light border color       |
| `--color-sf-border`                    | Border color             |
| `--color-sf-border-hover`              | Hover border color       |
| `--color-sf-border-selected`           | Selected border color    |
| `--color-sf-primary`                   | Primary color            |
| `--color-sf-primary-bg-color`          | Primary background color |
| `--color-sf-primary-border-color`      | Primary border color     |
| `--color-sf-primary-text-color`        | Primary text color       |
| `--color-sf-icon-color`                | Icon color               |

### Theme Customization Example

The following example demonstrates how to customize the Block Editor appearance using CSS variable overrides with multiple built-in themes.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/theme-customization/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/theme-customization/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/theme-customization/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/theme-customization" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/theme-customization/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/theme-customization/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/theme-customization/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/theme-customization" %}
{% endif %}

## Using Theme Studio

Syncfusion Theme Studio provides an advanced way to create a fully customized theme for the Block Editor and other EJ2 components.

1. Visit the [Syncfusion<sup style="font-size:70%">&reg;</sup> Theme Studio](https://ej2.syncfusion.com/themestudio/).
2. Select a base theme such as Material 3, Fluent 2, Bootstrap 5.3, or Tailwind 3.
3. Customize colors, typography, borders, and component styles.
4. Download the generated CSS file.
5. Include the generated theme in your application.

This approach ensures consistent styling across all Syncfusion components in your application.
