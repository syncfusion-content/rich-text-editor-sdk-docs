---
layout: post
title: Customize AI Assistant in JavaScript Rich Text Editor | Syncfusion
description: Learn how to customize the AI Assistant in the JavaScript Rich Text Editor with custom toolbar buttons, response styling, and event hooks.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Customization of AI Assistant in JavaScript Rich Text Editor

> **Version Compatibility**: The AI Assistant feature is available from Syncfusion v32.1.19 and later. Requires the corresponding JavaScript Rich Text Editor package v32.1.19, and an AI service endpoint configured with a valid API key.

The AI Assistant feature is designed to be easily customizable using its properties, public methods, and events. The following examples demonstrate the customizations in the AI Assistant by adding custom toolbar buttons to the Prompt, Response, and Header toolbars, styling the AI Assistant popup, and using public methods to demonstrate programmatic workflows.

## Custom toolbar buttons in AI Assistant

To add custom toolbar items to the AI Assistant Header, Prompt, and Response toolbars, use the `headerToolbarSettings`, `promptToolbarSettings`, and `responseToolbarSettings` properties within the `aiAssistantSettings` object. The `aiAssistantToolbarClick` event allows you to execute custom logic when toolbar buttons are clicked.

### Base configuration

The AI Assistant settings are configured as shown below:

```typescript
const aiAssistantSettings: AIAssistantSettings = {
  headerToolbarSettings: [ /* custom header toolbar items */ ],
  promptToolbarSettings: [ /* custom prompt toolbar items */ ],
  responseToolbarSettings: [ /* custom response toolbar items */ ]
};
```

### Toolbar item properties

Custom items can be added to `headerToolbarSettings`, `promptToolbarSettings`, and `responseToolbarSettings` using the following properties:

| Property     | Description                                                                                                           |
| ------------ | --------------------------------------------------------------------------------------------------------------------- |
| `command`    | Specifies the primary command to execute when the toolbar item action is triggered.                                   |
| `subCommand` | Specifies the secondary or sub-command to execute when the toolbar item action is triggered.                          |
| `iconCss`    | Specifies the CSS class for the icon displayed in the toolbar item.                                                   |
| `text`       | Specifies the display text of the toolbar item.                                                                       |
| `type`       | Specifies the type of the toolbar item (default is `Button`).                                                         |
| `align`      | Specifies the alignment of the toolbar item within the toolbar (default is `Left`).                                   |
| `visible`    | Determines whether the toolbar item is visible (default is `true`).                                                   |
| `disabled`   | Determines whether the toolbar item is disabled and non-interactive (default is `false`).                             |
| `tooltip`    | Specifies the tooltip text shown when hovering over the toolbar item.                                                 |
| `cssClass`   | Specifies additional CSS classes applied to the toolbar item for styling.                                             |
| `template`   | Specifies a custom template for rendering the toolbar item; can be a string or a function depending on the framework. |
| `tabIndex`   | Specifies the tab order of the toolbar item for keyboard navigation (default is `-1`).                                |

### AI Assistant events reference

| Event | Description | Event Args |
| --- | --- | --- |
| `aiAssistantToolbarClick` | Triggered when a custom toolbar button is clicked. Receives the `command` and `subCommand` properties. | `{ command: string; subCommand?: string }` |
| `beforePopupOpen` | Triggered before the AI Assistant popup opens. Use this to initialize custom components (e.g., `DropDownButton`). | `{}` |
| `beforePopupClose` | Triggered before the AI Assistant popup closes. Use this to clean up resources (e.g., destroy dynamically created components). | `{}` |

#### Custom header toolbar item

A **User Profile** dropdown can be added as a custom header toolbar item using a template. The `beforePopupOpen` and `beforePopupClose` events manage the life cycle of the Syncfusion `DropDownButton` component.

**Key steps:**
1. Define a `template` property that returns an HTML string with an ID placeholder.
2. Initialize the `DropDownButton` component in the `beforePopupOpen` event.
3. Destroy the component instance in the `beforePopupClose` event to prevent memory leaks.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/ai-assistant/custom-toolbar-items/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/ai-assistant/custom-toolbar-items/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/ai-assistant/custom-toolbar-items" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/ai-assistant/custom-toolbar-items/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/ai-assistant/custom-toolbar-items/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/ai-assistant/custom-toolbar-items" %}
{% endif %}

## Styling the popup

The AI Assistant Popup can be styled by using the following css.

### CSS styling example

```css
/* Base popup styling */
.e-rte-aiquery-popup {
    padding: 2px;
}

/* Processing state — when a request is pending */
.e-rte-aiquery-popup.processing {
    padding: 2px;
    color: white;
    background: white;
    z-index: 1;
}
```

**Example with Animation:**

The following example applies a CSS animation to the popup during AI request processing:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/ai-assistant/popup-styling/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/ai-assistant/popup-styling/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/ai-assistant/popup-styling/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/ai-assistant/popup-styling" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/ai-assistant/popup-styling/index.css %}
{% endhighlight %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/ai-assistant/popup-styling/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/ai-assistant/popup-styling/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/ai-assistant/popup-styling" %}
{% endif %}

## Public methods / programmatic use case

Use the following public methods to build custom workflows with the AI Assistant. You can retrieve conversation history, execute prompts, add responses, show/hide the popup, and clear history programmatically.

### Available methods

| **Method**                                                                       | **Description**                    |
| -------------------------------------------------------------------------------- | ---------------------------------- |
| `getAIPromptHistory()`                                                           | Get conversation history.          |
| `executeAIPrompt(prompt: string)`                                                | Send a prompt to the AI Assistant. |
| `addAIPromptResponse(outputResponse: string \| Object, isFinalUpdate?: boolean)` | Adds the Response to the AI Assistant.|
| `showAIAssistantPopup()`                                                         | Show the AI Assistant popup.       |
| `hideAIAssistantPopup()`                                                         | Hide the AI Assistant popup.       |
| `clearAIPromptHistory()`                                                         | Clear all conversation history.    |

### Proofread use case example

The following example demonstrates a **Proofread** workflow using a button outside the editor. On clicking the Proofread button:

1. The AI Assistant popup is launched using `showAIAssistantPopup()`.
2. A proofreading prompt is executed using `executeAIPrompt()`.
3. The AI response is displayed in the popup (automatic via `executeAIPrompt()`).

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/ai-assistant/usecase/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/ai-assistant/usecase/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/ai-assistant/usecase" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/ai-assistant/usecase/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/ai-assistant/usecase/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/ai-assistant/usecase" %}
{% endif %}
