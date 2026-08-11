---
layout: post
title: Editor value in TypeScript Rich text editor control | Syncfusion
description: Learn here all about Editor value in Syncfusion TypeScript Rich text editor control of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Editor value
publishingplatform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Editor value in TypeScript Rich Text Editor control

## Set placeholder text 

Specifies the placeholder for the Rich Text Editor’s content used when the editor's content area is empty through the [placeholder](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#placeholder) property.

You can customize the appearance of the placeholder text by targeting the `e-rte-placeholder` class in your CSS. This allows you to modify properties such as font family, color, and other styles.

```css

.e-richtexteditor .e-rte-placeholder {
    font-family: monospace;
}

```

The below sample demonstrates the placeholder option in Rich Text Editor.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/getting-started-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/getting-started-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/getting-started-cs16" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/getting-started-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/getting-started-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/getting-started-cs16" %}
{% endif %}

## Get and set value

**Setting Values**

You can set the initial content of the Rich Text Editor using the `value` property. There are two methods to accomplish this:

* Using the [value](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#value) property directly.

* Using the [valuetemplate](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#valuetemplate) property allows you to customize the content of the Rich Text Editor.

**Retrieving Values**

To get the content from the Rich Text Editor, use the following approaches:

* Using the [value](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#value) property: This returns the current content of the editor.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/editor-value-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/editor-value-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/editor-value-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/editor-value-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/editor-value-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/editor-value-cs1" %}
{% endif %}

* Using the [change](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#change) event: The `change` event is triggered when the Rich Text Editor loses focus and its content has been modified. This event allows you to capture and handle content changes dynamically.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/editor-value-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/editor-value-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/editor-value-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/editor-value-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/editor-value-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/editor-value-cs3" %}
{% endif %}

## Auto save

The auto-save option in the Rich Text Editor allows the content to be automatically saved during idle periods after you have typed. Once this option is enabled, the editor will save the content based on the [saveInterval](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#saveinterval) property's value, which is specified in milliseconds.

The change event will be triggered if the content has been modified since the last saved state, ensuring consistent tracking of changes without manual intervention.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/editor-value-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/editor-value-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/editor-value-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/editor-value-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/editor-value-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/editor-value-cs2" %}
{% endif %}

## Programmatic content access

You can use the [getHtml](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#gethtml) public method to retrieve the Rich Text Editor content.

```typescript

  let editorValue: string = editorObj.getHtml();

```

To fetch the Rich Text Editor's text content, use [getText](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#gettext) method.

```typescript

  let editorValue: string = editorObj.getText();

```

## Encoded editor value

The [enableHtmlEncode](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#enablehtmlencode) property in the Rich Text Editor specifies whether the source code is displayed in an encoded format. Additionally, the [value](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#value) property also returns the content in an encoded format. This feature is particularly useful when you want to ensure that HTML content is displayed safely without being interpreted by the browser.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/html-encoder-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/html-encoder-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/html-encoder-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/html-encoder-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/html-encoder-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/html-encoder-cs1" %}
{% endif %}

## Styling editor content

By default, the content styles of the Rich Text Editor are not included when retrieving the HTML value from the editor. This can result in the styles not being applied when using the HTML content outside of the editor. To ensure that the styles are correctly applied, you can copy and use the following styles directly in your application: These styles are used in the UI elements of the Rich Text Editor.

> Make sure to add a CSS class ‘e-rte-content’ to the content container.

```css

.e-rte-content p {
  margin: 0 0 10px;
  margin-bottom: 10px;
}

.e-rte-content li {
  margin-bottom: 10px;
}

.e-rte-content h1 {
  font-size: 2.17em;
  font-weight: 400;
  line-height: 1;
  margin: 10px 0;
}

.e-rte-content h2 {
  font-size: 1.74em;
  font-weight: 400;
  margin: 10px 0;
}

.e-rte-content h3 {
  font-size: 1.31em;
  font-weight: 400;
  margin: 10px 0;
}

.e-rte-content h4 {
  font-size: 1em;
  font-weight: 400;
  margin: 0;
}

.e-rte-content h5 {
  font-size: 00.8em;
  font-weight: 400;
  margin: 0;
}

.e-rte-content h6 {
  font-size: 00.65em;
  font-weight: 400;
  margin: 0;
}

.e-rte-content blockquote {
  margin: 10px 0;
  margin-left: 0;
  padding-left: 5px;
}

.e-rte-content pre {
  background-color: inherit;
  border: 0;
  border-radius: 0;
  color: #333;
  font-size: inherit;
  line-height: inherit;
  margin: 0 0 10px;
  overflow: visible;
  padding: 0;
  white-space: pre-wrap;
  word-break: inherit;
  word-wrap: break-word;
}

.e-rte-content strong, .e-rte-content b {
  font-weight: 700;
}

.e-rte-content a {
  text-decoration: none;
  -webkit-user-select: auto;
  -ms-user-select: auto;
  user-select: auto;
}

.e-rte-content a:hover {
  text-decoration: underline;
}

.e-rte-content h3 + h4,
.e-rte-content h4 + h5,
.e-rte-content h5 + h6 {
  margin-top: 00.6em;
}

.e-rte-content .e-rte-table {
  border-collapse: collapse;
  empty-cells: show;
}

.e-rte-content .e-rte-table td,
.e-rte-content .e-rte-table th {
  border: 1px solid #bdbdbd;
  height: 20px;
  min-width: 20px;
  padding: 2px 5px;
  vertical-align: middle;
}

.e-rte-content .e-rte-table.e-dashed-border td,
.e-rte-content .e-rte-table.e-dashed-border th {
  border-style: dashed;
}

.e-rte-image.e-img-inline,
.e-img-caption-container.e-img-inline {
  margin-left: 5px;
  margin-right: 5px;
  display: inline-block;
  float: none;
  max-width: 100%;
  padding: 1px;
  vertical-align: bottom;
}

.e-rte-image.e-img-center,
.e-rte-image.e-img-break,
.e-img-caption-container.e-img-center,
.e-img-caption-container.e-img-break {
  cursor: pointer;
  display: block;
  float: none;
  margin: 5px auto;
  max-width: 100%;
  position: relative;
}

.e-rte-content .e-rte-image.e-img-left-wrap,
.e-rte-content .e-img-caption-container.e-img-left-wrap {
  float: left;
  margin: 5px 5px 5px 0;
}

.e-rte-content .e-rte-image.e-img-right-wrap,
.e-rte-content .e-img-caption-container.e-img-right-wrap {
  float: right;
  margin: 5px 0 5px 5px;
}

.e-rte-content .e-rte-image.e-img-left,
.e-rte-content .e-rte-image.e-img-right,
.e-rte-content .e-img-caption-container.e-img-left,
.e-rte-content .e-img-caption-container.e-img-right {
  margin-top: 5px;
  margin-bottom: 5px;
}

.e-rte-content .e-rte-image.e-img-right,
.e-rte-content .e-img-caption-container.e-img-right {
  margin-right: 0;
  margin-left: auto;
}

.e-rte-content .e-rte-image.e-img-left,
.e-rte-content .e-img-caption-container.e-img-left {
  margin-left: 0;
  margin-right: auto;
}

.e-rte-content .e-img-caption-container.e-img-left-wrap,
.e-rte-content .e-img-caption-container.e-img-left-wrap {
  display: inline-block;
}

.e-rte-content .e-img-caption-container.e-img-left,
.e-rte-content .e-img-caption-container.e-img-left {
  display: block;
}

.e-rte-content .e-img-caption-container {
  max-width: 100%;
  position: relative;
}

.e-rte-content .e-img-caption-container .e-img-caption-text {
  box-sizing: border-box;
  display: block;
  font-size: 16px;
  font-weight: 400;
  margin: auto;
  opacity: .9;
  position: relative;
  text-align: center;
  width: 100%;
}

.e-rte-content .e-img-caption-container.e-img-left-wrap .e-img-wrap img,
.e-rte-content .e-img-caption-container.e-img-right-wrap .e-img-wrap img,
.e-rte-content .e-img-caption-container.e-img-left .e-img-wrap img,
.e-rte-content .e-img-caption-container.e-img-right .e-img-wrap img,
.e-rte-content .e-img-caption-container.e-img-center .e-img-wrap img,
.e-rte-content .e-img-caption-container.e-img-break .e-img-wrap img {
  margin-bottom: 0;
}

.e-rte-content .e-img-caption-container.e-img-center,
.e-rte-content .e-img-caption-container.e-img-break {
  margin-left: auto;
  margin-right: auto;
}

.e-rte-content blockquote {
  border-left: solid 2px #333;
}

.e-rte-content a {
  color: #2e2ef1;
}

.e-rte-content .e-rte-table th {
  background-color: #e0e0e0;
}

```

## Character count

The Character Count feature in the Rich Text Editor allows you to track and display the number of characters entered in the editor. This feature is particularly useful when you need to limit the content length or provide visual feedback to users about their input.

### How to enable character count

To enable the character count feature, set the [showCharCount](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#showcharcount) property to `true`. By default, this property is set to `false`.

When enabled, the character count is displayed at the bottom right corner of the editor.

> To create Rich Text Editor with [showCharCount](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#showcharcount) feature, inject the Count module to the Rich Text Editor using the `RichTextEditor.Inject(Count)` method.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/getting-started-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/getting-started-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/getting-started-cs17" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/getting-started-cs17/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/getting-started-cs17/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/getting-started-cs17" %}
{% endif %}

### Understanding character count color indicators

The character count color will be modified based on the characters in the Rich Text Editor.

| Status | Description |
|----------------|---------|
| normal | The character count color remains black until 70% of the maxLength count is reached.|
| warning | When the character count reaches 70% of the maxLength, the color changes to orange, indicating that the maximum limit is approaching.|
| error |Once the character count hits 90% of the maxLength, the color turns red, signaling that the limit is nearly reached.|

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/character-count-limit-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/character-count-limit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/character-count-limit-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/character-count-limit-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/character-count-limit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/character-count-limit-cs1" %}
{% endif %}

### Setting maximum character limit

You can restrict the number of characters entered in the editor by setting the [maxLength](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#maxlength)property to a specific numeric value. When set, the maximum allowable character count is displayed alongside the current count at the bottom right of the editor.

If `maxLength` is not set, there is no limit to the character count in the editor.

### Retrieving character count programmatically

You can programmatically get the current character count in the editor using the [getCharCount](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#getcharcount) public method.

```typescript

  let editorCount: number = this.editor.getCharCount();

```

## Source code editing

The Rich Text Editor enables you to directly edit HTML code through the `Source View` in the text area. Any changes you make in Source view are immediately reflected in the editor's content, giving you greater flexibility and control over your work.
The source code is presented with enhanced formatting and consistent indentation for both block-level and inline HTML elements, resulting in a cleaner, more readable, and user-friendly editing experience.

>While the visual alignment of the source code is improved, the editor's underlying value remains unchanged.

### Configuring source code tool in the toolbar

You can add the `SourceCode` tool in the Rich Text Editor using the `toolbarSettings` [items](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/toolbarsettingsmodel#items) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/code-mirror-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/code-mirror-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/code-mirror-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/code-mirror-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/typescript/rich-text-editor/code-mirror-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/code-mirror-cs1" %}
{% endif %}

>This functionality can also be enabled through the use of the [CodeMirror](https://codemirror.net/) plugin. It helps to highlight the HTML content and ensures that any modifications in the code view are instantly reflected in the preview mode.

The Rich Text Editor provides the [showSourceCode](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#showsourcecode) method, which allows you to toggle programmatically between the code view and the formatted text view. When invoked, this method switches the editor’s view to the opposite state.

## See also

* [Customizing the placeholder in Styles](./style#customizing-placeholder-text)
* [Implementing Prevention of cross-site scripting (XSS)](./xhtml-validation#cross-site-scripting-xss)
* [Integrating Code-Mirror for Enhanced Syntax Highlighting](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/third-party-integration#codemirror-integration)
