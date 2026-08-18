---
layout: post
title: Code Blocks in Angular Block Editor | Syncfusion
description: Learn how to add and configure code blocks in the Angular Block Editor with syntax highlighting, language options, and default language settings.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Code Blocks in Angular Block Editor

The Syncfusion Block Editor allows you to render code with syntax highlighting by setting the block's [blockType](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockmodel#blocktype) property to [Code](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blocktype). You can customize the available programming languages and set a default language through the root-level [codeBlockSettings](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/codeblocksettings) property, or override the language for an individual block via the block's [properties](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockmodel#properties) property.

## Global Code Settings

You can configure global settings for code blocks using the [codeBlockSettings](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/codeblocksettings) property in the Block Editor root configuration. This ensures consistent behavior for syntax highlighting and language options across all code blocks.

The `codeBlockSettings` property supports the following options:

| Property | Description | Default Value |
|----------|-------------|---------------|
| [languages](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/codeblocksettingsmodel#languages) | Specifies the array of language options shown in the language dropdown. | [] |
| [defaultLanguage](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/codeblocksettingsmodel#defaultlanguage) | Defines the default language to use for syntax highlighting when a Code block is created. | `'plaintext'` |

## Configure code properties

For individual Code blocks, you can override the language used for syntax highlighting through the [properties](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockmodel#properties) property. This property supports the following option:

- `language`: The language identifier used for syntax highlighting of the block. Must match one of the `language` values supplied in `codeBlockSettings.languages`.

### Block type and properties
```typescript
// Adding a Code block
{
    blockType: 'Code',
    content: [
        {
            contentType: ContentType.Text,
            content: 'const x = 10;'
        }
    ],
    properties: {
        language: 'javascript'
    }
}
```

The following example demonstrates how to configure and render a Code block within the Block Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/block-types/code-block/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/block-types/code-block/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/block-types/code-block/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/blocks/block-types/code-block" %}