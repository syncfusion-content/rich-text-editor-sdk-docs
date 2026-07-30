---
layout: post
title: Code Block in TypeScript Block Editor control | Syncfusion
description: Checkout and learn about Code Block with TypeScript Block Editor control of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Block Editor
publishingplatform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Code Blocks in TypeScript Block Editor control

The Syncfusion Block Editor allows you to render code snippets with syntax highlighting by setting the block's [blockType](https://ej2.syncfusion.com/documentation/api/blockeditor/blockmodel#blocktype) property to [Code](https://ej2.syncfusion.com/documentation/api/blockeditor/blocktype). You can customize the available programming languages and set a default language using the [properties](https://ej2.syncfusion.com/documentation/api/blockeditor/blockmodel#properties) property.

## Global Code Settings

You can configure global settings for code blocks using the `codeBlockSettings` property in the Block Editor root configuration. This ensures consistent behavior for syntax highlighting and language options across all code blocks.

The `codeBlockSettings` property supports the following options:

| Property | Description | Default Value |
|----------|-------------|---------------|
| [languages](https://ej2.syncfusion.com/documentation/api/blockeditor/codeblocksettingsmodel#languages) | Specifies the array of language options for syntax highlighting. | [] |
| [defaultLanguage](https://ej2.syncfusion.com/documentation/api/blockeditor/codeblocksettingsmodel#defaultlanguages) | Defines the default language to use for syntax highlighting. | 'plaintext' |

## Configure code properties

For Code blocks, you can specify the language for syntax highlighting using the [properties](https://ej2.syncfusion.com/documentation/api/blockeditor/blockmodel#properties) property. This property supports the following options:

- [language](https://ej2.syncfusion.com/documentation/api/blockeditor/codelanguagemodel#language): The default language value used for syntax highlighting.

### Block type & properties
```typescript
// Adding Code block
{
    blockType: 'Code',
    content: [
        {
            const x = 10;
        }
    ],
    properties: {
       language: 'javascript'
    }
}
```

The following example demonstrates how to configure and render a Code block within the Block Editor.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/blocks/block-types/code-block/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/blocks/block-types/code-block/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/blocks/block-types/code-block" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/blocks/block-types/code-block/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/blocks/block-types/code-block/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/blocks/block-types/code-block" %}
{% endif %}