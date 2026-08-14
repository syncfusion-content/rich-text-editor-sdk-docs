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

The AI Assistant feature is designed to be easily customizable using its properties, public methods, and events. The following sections demonstrate the customizations in the AI Assistant:

1. [Custom Toolbar Buttons in AI Assistant](#custom-toolbar-buttons-in-ai-assistant) — add custom toolbar items to the Header, Prompt, and Response toolbars.
2. [Styling the Popup](#styling-the-popup) — customize the AI Assistant popup appearance and its processing state.
3. [Programmatic Workflow Example](#programmatic-workflow-example) — use public methods and events to build custom workflows such as a Proofread action.

> **Prerequisite:** Install `@syncfusion/ej2-react-richtexteditor` and, where the examples use it, `@syncfusion/ej2-splitbuttons` (for `DropDownButton`).

## Custom Toolbar Buttons in AI Assistant

Use the `headerToolbarSettings`, `promptToolbarSettings`, and `responseToolbarSettings` properties of the `aiAssistantSettings` to add custom toolbar items to the AI Assistant Header, Prompt, and Response toolbars. The `aiAssistantToolbarClick` event allows you execute custom logic when any toolbar button is clicked. The `beforePopupOpen` and `beforePopupClose` events of `aiAssistantSettings` let you initialize and dispose of resources used inside the AI Assistant popup.

The custom items can be added to the `headerToolbarSettings`, `promptToolbarSettings`, and `responseToolbarSettings` with the following properties.

| Property | Description |
| --- | --- |
| `command` | Specifies the primary command to execute when the toolbar item action is triggered. |
| `subCommand` | Specifies the secondary or sub-command to execute when the toolbar item action is triggered. |
| `iconCss` | Specifies the CSS class for the icon displayed in the toolbar item. Use Syncfusion `e-icons` classes from the [icon library](https://ej2.syncfusion.com/react/documentation/appearance/icons). |
| `text` | Specifies the display text of the toolbar item. |
| `type` | Specifies the type of the toolbar item. Valid values: `Button` (default), `Separator`. |
| `align` | Specifies the alignment of the toolbar item within the toolbar. Valid values: `Left` (default), `Center`, `Right`. |
| `visible` | Controls the visibility of the toolbar item (default is `true`). |
| `disabled` | Toggles whether the toolbar item is disabled and non-interactive (default is `false`). |
| `tooltip` | Specifies the tooltip text shown when hovering over the toolbar item. |
| `cssClass` | Specifies additional CSS classes applied to the toolbar item for styling. |
| `template` | Specifies a custom template for rendering the toolbar item. In React, supply a JSX element or a target selector string. |
| `tabIndex` | Specifies the tab order of the toolbar item for keyboard navigation (default is `-1`). |

### `aiAssistantToolbarClick` event

The `aiAssistantToolbarClick` event is raised when a toolbar item is clicked in any of the AI Assistant toolbars. The event args include:

| Arg | Type | Description |
| --- | --- | --- |
| `item` | `ItemModel` | The clicked toolbar item model. |
| `command` | `string` | The `command` value configured on the clicked item. |
| `subCommand` | `string` | The `subCommand` value configured on the clicked item, if any. |
| `requestType` | `string` | The originating toolbar — for example, `Header`, `Prompt`, or `Response`. |

**Inline example — `cssClass` and `tabIndex`**

```typescript
const headerToolbarSettings: ToolbarItemModel[] = [
  { text: 'Refresh', tooltip: 'Refresh', prefixIcon: 'e-icons e-refresh', cssClass: 'e-custom-refresh', tabIndex: 0 }
];
```

**Example**

The example below adds custom toolbar items to the Header, Prompt, and Response toolbars of the AI Assistant, along with the corresponding event-handling logic. The class and functional React variants are identical except for the use of component state and `ref`; pick the variant that matches your component style.

1. **Custom Header Toolbar Item**

   * Add a **User Profile** dropdown as a custom header toolbar item using `template`.
   * Initialize the **DropDownButton** component dynamically in the `beforePopupOpen` event when the AI Assistant popup opens.
   * Destroy the dropdown instance in the `beforePopupClose` event to release resources.

2. **Custom Prompt Toolbar Item**

   * Add a **Search in Google** toolbar button to the prompt toolbar.
   * On click, retrieve the current prompt text and open a new browser tab with the corresponding Google search results.

3. **Custom Response Toolbar Item**
   * Add a **Save** toolbar button to the response toolbar.
   * On click, extract the generated AI response content from the response container and process it further (for example, save it to a database or local storage).

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

The AI Assistant popup processing state can be styled with the following CSS. The `e-rte-aiquery-popup.processing` class is added to the popup container while a request is in progress and is removed when the request completes, so the animation only runs while the AI request is in flight. A `@keyframes` animation is applied to the same selector to provide a subtle pulsing effect.

```css
@keyframes e-rte-processing {
    0%   { opacity: 0.6; }
    50%  { opacity: 1; }
    100% { opacity: 0.6; }
}

.e-rte-aiquery-popup.processing {
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

The public methods listed below let you build custom workflows with the AI Assistant. To receive a response, also handle the `aiAssistantPromptRequest` event; the methods below are how you trigger and update the popup programmatically.

| Method | Return / Behavior |
| --- | --- |
| `getAIPromptHistory()` | Returns the conversation history as a `PromptHistoryItem[]`. |
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

## Troubleshooting

| Issue | Possible cause | Suggested fix |
| --- | --- | --- |
| `executeAIPrompt` does not produce a response. | `aiAssistantPromptRequest` is not handled. | Add a handler in `aiAssistantSettings` that calls your AI service and returns the result with `addAIPromptResponse`. |
| Custom toolbar item is not rendered. | `template` is supplied as a function (not supported in React) or the target selector is not in the DOM when the popup opens. | Pass a JSX element or a string selector for an element already in the DOM. |
| `.e-rte-aiquery-popup.processing` is not removed. | The `aiAssistantPromptRequest` handler never calls `addAIPromptResponse` with `isFinalUpdate: true`. | Always call `addAIPromptResponse(result, true)` (or omit the flag) at the end of a streaming response, and wrap your service call in `try`/`catch` so failures also finalize the request. |
| `DropDownButton` is not interactable inside the Header toolbar. | The component is initialized before the popup is visible. | Initialize the `DropDownButton` inside the `beforePopupOpen` event and destroy it inside `beforePopupClose`. |
| `getAIPromptHistory()` returns an empty array after a prompt. | `addAIPromptResponse` was not called. | Ensure the `aiAssistantPromptRequest` handler calls `addAIPromptResponse` for every prompt, including errors. |