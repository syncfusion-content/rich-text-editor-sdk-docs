---
layout: post
title: IFrame Editing Mode in TypeScript Rich Text Editor | Syncfusion
description: Learn how to enable IFrame editing mode in the TypeScript Rich Text Editor to isolate styles and scripts within the editor surface.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# IFrame Editing Mode in TypeScript Rich Text Editor


The iframe editor in the Rich Text Editor provides an isolated environment for content editing by using an iframe element as the content area. This ensures separation from the parent page's styles and scripts, preventing conflicts and enhancing compatibility. In this mode, the editor displays only the body tag of the iframe, offering a clean and isolated workspace for content creation.

## Configuring the Iframe editor

Iframe editing mode is enabled using the [`iframeSettings`](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#iframesettings) property. When enabled, the Rich Text Editor creates an iframe element as the content area during initialization.

The following example demonstrates enabling iframe mode:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/iframe-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/iframe-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/iframe-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/iframe-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/iframe-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/iframe-cs1" %}
{% endif %}

## Customizing IFrame attributes

Custom attributes can be applied to the iframe's body element using the `attributes` field of the [iframeSettings](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#iframesettings) property. This property accepts name/value pairs in string format, enabling you to override the default appearance of the content area.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/iframe-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/iframe-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/iframe-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/iframe-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/iframe-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/iframe-cs2" %}
{% endif %}

## Integrating external css and scripts

You can apply external CSS and script files to the iframe by using the `resources` property of `iframeSettings`. This allows you to customize the appearance and functionality of the editor's content while maintaining style isolation.

**CSS and Scripts Configuration:**

```typescript
let editor: RichTextEditor = new RichTextEditor({
  iframeSettings: {
    enable: true,
    resources: {
      styles: ['assets/custom-styles.css'],
      scripts: ['assets/custom-script.js']
    }
  }
});
editor.appendTo('#defaultRTE');
```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/iframe-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/iframe-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/iframe-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/iframe-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/iframe-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/iframe-cs3" %}
{% endif %}

## Integrating Mention with Iframe

The Rich Text Editor supports the Mention component even when rendered inside an iframe. To enable mention functionality in iframe mode, you must set the Mention component's `target` property to the Rich Text Editor's input element.

### Setup

```typescript
import { RichTextEditor, HtmlEditor, Toolbar } from '@syncfusion/ej2-richtexteditor';
import { Mention } from '@syncfusion/ej2-dropdowns';

RichTextEditor.Inject(HtmlEditor, Toolbar);
Mention.Inject();

// In your component, set the Mention target to the RTE's inputElement
let mentionObj: Mention = new Mention({
  target: editor.inputElement
});
mentionObj.appendTo('#mentionElement');
```

The Mention popup is triggered when the user types a designated character (e.g., `@`) inside the Rich Text Editor's editable area.

Here's an example of how to integrate Mention with Iframe editor,

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/mention-iframe/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/mention-iframe/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/mention-iframe" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/mention-iframe/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/mention-iframe/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/mention-iframe" %}
{% endif %}

> You can also explore our [iframe in TypeScript Rich Text Editor example](https://ej2.syncfusion.com/demos/#/tailwind3/rich-text-editor/iframe) that shows how to render the iframe in TypeScript Rich Text Editor.

## See also

* [Implementing Inline Editing](./inline-editing)
* [Using the Markdown Editor](../../markdown-editor/getting-started)
