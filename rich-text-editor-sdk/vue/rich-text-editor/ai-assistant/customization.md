---
layout: post
title: Customize AI Assistant in Vue Rich Text Editor | Syncfusion
description:  Learn about AI Assistant customization in the Syncfusion Vue Rich Text Editor component of Syncfusion Essential JS 2 and more.
control: Customization of AI Assistant
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Customization of AI Assistant

> **Version Compatibility**: The AI Assistant feature is available from Syncfusion v32.1.19 and later. Requires Vue 3, @syncfusion/ej2-vue-richtexteditor v32.1.19, and an AI service endpoint configured with a valid API key.

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

| Event | Description |
| --- | --- |
| `aiAssistantToolbarClick` | Triggered when a custom toolbar button is clicked. Receives the `command` and `subCommand` properties. |
| `beforePopupOpen` | Triggered before the AI Assistant popup opens. Use this to initialize custom components (e.g., `DropDownButton`). |
| `beforePopupClose` | Triggered before the AI Assistant popup closes. Use this to clean up resources (e.g., destroy dynamically created components). |

#### Custom header toolbar item

A **User Profile** dropdown can be added as a custom header toolbar item using a template. The `beforePopupOpen` and `beforePopupClose` events manage the life cycle of the Syncfusion `DropDownButton` component.

**Key steps:**
1. Define a `template` property that returns a Vue template/JSX-style element with an ID placeholder.
2. Initialize the `DropDownButton` component in the `beforePopupOpen` event.
3. Destroy the component instance in the `beforePopupClose` event to prevent memory leaks.

**Example**

In the following example, **custom toolbar items** are added to the **Header**, **Prompt**, and **Response** toolbars of the AI Assistant, along with corresponding event handling logic.

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

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/ai-assistant/custom-toolbar-items/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/ai-assistant/custom-toolbar-items/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/ai-assistant/custom-toolbar-items" %}

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

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/ai-assistant/popup-styling/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/ai-assistant/popup-styling/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/ai-assistant/popup-styling" %}

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

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/ai-assistant/usecase/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/ai-assistant/usecase/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/ai-assistant/usecase" %}
