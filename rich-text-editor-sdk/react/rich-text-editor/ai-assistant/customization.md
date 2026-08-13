---
layout: post
title: Customization of AI Assistant in React Rich Text Editor | Syncfusion
description: Learn how to customize the AI Assistant in the React Rich Text Editor with custom toolbar buttons, response styling, and event hooks.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Customization of AI Assistant in React Rich Text Editor

The AI Assistant feature is designed to be easily customizable using its properties, public methods, and events. The following examples demonstrate the customizations in the AI Assistant by adding custom toolbar buttons to the Header, Prompt, and Response toolbars, styling the AI Assistant popup, and using public methods to demonstrate a proofread use case.

> **Prerequisite:** Install `@syncfusion/ej2-react-richtexteditor` and, where the examples use it, `@syncfusion/ej2-splitbuttons` (for `DropDownButton`).

## Custom Toolbar Buttons in AI Assistant

To add custom toolbar items to the AI Assistant Header, Prompt, and Response toolbars, use the `headerToolbarSettings`, `promptToolbarSettings`, and `responseToolbarSettings` properties of the `aiAssistantSettings`. The `aiAssistantToolbarClick` event allows you to execute custom logic when toolbar buttons are clicked.

The custom items can be added to the `headerToolbarSettings`, `promptToolbarSettings`, and `responseToolbarSettings` with the following properties.

| Property | Description |
| --- | --- |
| `command` | Specifies the primary command to execute when the toolbar item action is triggered. |
| `subCommand` | Specifies the secondary or sub-command to execute when the toolbar item action is triggered. |
| `iconCss` | Specifies the CSS class for the icon displayed in the toolbar item. |
| `text` | Specifies the display text of the toolbar item. |
| `type` | Specifies the type of the toolbar item (default is `Button`). |
| `align` | Specifies the alignment of the toolbar item within the toolbar (default is `Left`). |
| `visible` | Determines whether the toolbar item is visible (default is `true`). |
| `disabled` | Determines whether the toolbar item is disabled and non-interactive (default is `false`). |
| `tooltip` | Specifies the tooltip text shown when hovering over the toolbar item. |
| `cssClass` | Specifies additional CSS classes applied to the toolbar item for styling. |
| `template` | Specifies a custom template for rendering the toolbar item; can be a string or a function depending on the framework. |
| `tabIndex` | Specifies the tab order of the toolbar item for keyboard navigation (default is `-1`). |

**Example**

The example below adds **custom toolbar items** to the **Header**, **Prompt**, and **Response** toolbars of the AI Assistant, along with the corresponding event-handling logic. Both class and functional React variants are provided.

1. **Custom Header Toolbar Item**

   * A **User Profile** dropdown is added as a custom header toolbar item using a template.
   * The **DropDownButton** component is dynamically initialized in the `beforePopupOpen` event when the AI Assistant popup opens.
   * The dropdown instance is properly destroyed in the `beforePopupClose` event to ensure clean resource management.

2. **Custom Prompt Toolbar Item**

   * A **Search in Google** toolbar button is added to the prompt toolbar.
   * When the button is clicked, the current prompt text is retrieved and used to open a new browser tab with the corresponding **Google search results**.

3. **Custom Response Toolbar Item**
   * A **Save** toolbar button is added to the response toolbar.
   * On clicking the button, the generated AI response content is extracted from the response container and can be processed further (for example, saving it to a database or local storage).

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/custom-toolbar-items-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/custom-toolbar-items-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/custom-toolbar-items-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/custom-toolbar-items-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/custom-toolbar-items-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/custom-toolbar-items-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/custom-toolbar-items-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/custom-toolbar-items-cs2" %}

## Styling the Popup

The AI Assistant popup can be styled with the following CSS:

```css
.e-rte-aiquery-popup {
    padding: 2px;
}
```

The AI Assistant popup processing state can be styled with the following CSS. A `@keyframes` animation is also applied so that the spinner is visible while a request is in progress.

```css
@keyframes e-rte-processing {
    0%   { opacity: 0.6; }
    50%  { opacity: 1; }
    100% { opacity: 0.6; }
}

.e-rte-aiquery-popup.processing {
    padding: 2px;
    color: #000;
    background: #fff;
    z-index: 1;
    animation: e-rte-processing 1.2s ease-in-out infinite;
}
```

**Example**

In the following example, the CSS above is applied to the popup so that the popup pulses while the AI request is in progress.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/popup-styling-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/popup-styling-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/popup-styling-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/popup-styling-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/popup-styling-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/popup-styling-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/popup-styling-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/popup-styling-cs2" %}

## Programmatic Workflow Example

Using the public methods, you can build custom workflows with the AI Assistant. To receive a response, also handle the `aiAssistantPromptRequest` event; the methods below are how you trigger and update the popup programmatically.

| **Method** | **Return / Behavior** |
| --- | --- |
| `getAIPromptHistory()` | Returns the conversation history (`PromptHistoryItem[]`). |
| `executeAIPrompt(prompt: string)` | Sends a prompt to the AI Assistant and triggers `aiAssistantPromptRequest`. |
| `addAIPromptResponse(outputResponse: string \| Object, isFinalUpdate?: boolean)` | Adds the response to the AI Assistant. Pass `false` to stream a partial chunk; pass `true` (or omit) to mark the response as final. |
| `showAIAssistantPopup()` | Opens the AI Assistant popup. |
| `hideAIAssistantPopup()` | Closes the AI Assistant popup. |
| `clearAIPromptHistory()` | Clears the conversation history. |

**Example**

The following example demonstrates a Proofread workflow by rendering a button outside the editor. On clicking the **Proofread** button:

1. The AI Assistant popup is opened using the `showAIAssistantPopup` method.
2. A proofread prompt is sent using the `executeAIPrompt` method.
3. The `aiAssistantPromptRequest` handler returns the proofread result via `addAIPromptResponse`.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/usecase-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/usecase-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/usecase-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/usecase-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/usecase-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/usecase-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/usecase-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/usecase-cs2" %}