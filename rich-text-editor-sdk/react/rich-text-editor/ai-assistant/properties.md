---
layout: post
title: Configure AI Assistant in React Rich Text Editor | Syncfusion
description: Learn how to configure the AI Assistant in the React Rich Text Editor with prompt templates, response actions, and toolbar settings.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Configure AI Assistant in React Rich Text Editor

The `AIAssistantSettings` class provides the following properties for complete customization:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `commands` | `AICommands[]` | Predefined commands | Defines the predefined AI command options displayed in the command dropdown menu. |
| `popupMaxHeight` | `string \| number` | `'400px'` | Sets the maximum height of the AI Assistant popup. Accepts CSS height values or numbers (treated as pixels). |
| `popupWidth` | `string \| number` | `'600px'` | Sets the width of the AI Assistant popup. Accepts CSS width values or numbers (treated as pixels). |
| `placeholder` | `string` | `'Ask AI to rewrite or generate content.'` | Specifies the placeholder text shown in the AI prompt textarea. |
| `headerToolbarSettings` | `(AssitantHeaderToolbarItems \| IAIAssistantToolbarItem)[]` | `['AIcommands', 'Close']` | Configures the toolbar in the header section of the AI Assistant interface. |
| `promptToolbarSettings` | `(AssistantPromptToolbarItems \| IAIAssistantToolbarItem)[]` | `['Edit', 'Copy']` | Configures the toolbar in the prompt editor (user input) section. |
| `responseToolbarSettings` | `(AssistantResponseToolbarItems \| IAIAssistantToolbarItem)[]` | `['Regenerate', 'Copy', '\|', 'Insert']` | Configures the toolbar in the AI response viewer section. |
| `prompts` | `PromptModel[]` | `[]` | Defines the collection of predefined prompts and their corresponding responses. |
| `suggestions` | `string[]` | `[]` | Defines suggestion prompts displayed to the user as guidance. |
| `bannerTemplate` | `string \| Function` | `''` | Specifies the template for the banner in the AI Assistant component. |
| `maxPromptHistory` | `number` | `20` | Defines the maximum number of prompts that can be stored in the editor's history stack. |

The `aiAssistantSettings` property of the Rich Text Editor allows you to configure the following:

* AI Commands Dropdown menu items
* Preloaded conversations and suggestions in the AI Assistant
* AI Assistant popup height and width
* AI Assistant banner configuration
* Maximum length of prompt history
* Additional toolbar items in the AI Assistant Header, Prompt, and Response sections

## Adding items to the AI Commands Dropdown menu

To configure the items displayed in the AI Commands Dropdown menu, use the `commands` property of the `aiAssistantSettings`. The `commands` property can be configured to add items or modify the default dropdown menu.

### AICommands interface

The `commands` property accepts an array of objects with the following structure:

```tsx
interface AICommand {
  text: string;           // Display text for the command
  command: string;        // Command identifier
  description?: string;   // Optional description/tooltip
  subCommands?: AICommand[]; // Optional nested commands
}
```

**Example**

In the below example, a set of prompts and texts are configured to demonstrate the commands property usage.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/commands-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/commands-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/commands-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/commands-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/commands-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/commands-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/commands-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/commands-cs2" %}

## Preloading prompts, responses, and suggestions

To preload conversations and add suggested prompts to the AI Assistant, use the `prompts` and `suggestions` properties of the `aiAssistantSettings`. This is helpful for:

- Loading conversation history for returning users
- Displaying default prompts for new users
- Restoring previous chat sessions

The `prompts` property loads predefined prompt-response pairs, while `suggestions` shows helpful prompt starters.

**Example**

In the below sample, the `prompts` and `suggestions` properties of the `aiAssistantSettings` are used to preload the prompts, responses, and suggestions.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/prompts-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/prompts-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/prompts-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/prompts-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/prompts-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/prompts-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/prompts-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/prompts-cs2" %}

## Header, Prompt and Response Toolbar

To configure the item order and add custom items to the header, prompt, and response sections, use the `headerToolbarSettings`, `promptToolbarSettings`, and `responseToolbarSettings` properties of the `aiAssistantSettings`.

### Available Toolbar Items

The following table lists the available toolbar items for the Header, Prompt, and Response toolbars:

| Toolbar | Items & Their Use |
|---------|-------------------|
| **Header** | `AIcommands` – Opens AI-related command options.<br>`Close` – Closes the current panel or window. <br> `Clear` - Clear the current conversations. |
| **Prompt** | `Edit` – Allows you to modify the prompt text.<br>`Copy` – Copies the prompt to your clipboard. |
| **Response** | `Regenerate` – Produces a new response for the same prompt.<br>`Copy` – Copies the AI response.<br>**\|** – Visual separator between actions.<br>`Insert` – Inserts the generated response into the target editor or field. |

### Default Toolbar Items

The default toolbar configurations are:

- **Header Toolbar**: `['AIcommands', 'Close']`
- **Prompt Toolbar**: `['Edit', 'Copy']`
- **Response Toolbar**: `['Regenerate', 'Copy', '|', 'Insert']`

**Example**

In the below sample, the toolbar settings are configured to modify the order and items are displayed.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/toolbar-settings-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/toolbar-settings-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/toolbar-settings-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/toolbar-settings-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/toolbar-settings-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/toolbar-settings-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/toolbar-settings-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/toolbar-settings-cs2" %}

## Popup Dimensions

To customize the dimensions of the AI Assistant popup, use the `popupWidth` and `popupMaxHeight` properties of the `aiAssistantSettings`:

- **`popupWidth`** — Sets the popup width . Accepts CSS values or pixel numbers.
- **`popupMaxHeight`** — Sets the maximum height . Content scrolls if it exceeds this height. Minimum height is `100px`.

**Example**

In the following example, the popup width and maximum height are configured:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/popup-dimensions-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/popup-dimensions-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/popup-dimensions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/popup-dimensions-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/popup-dimensions-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/popup-dimensions-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/popup-dimensions-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/popup-dimensions-cs2" %}

## Conversation history management

### Setting maximum history length

Use the `maxPromptHistory` property to control how many prompts are retained in the conversation history (default: `20`). When the maximum is exceeded, older prompts are removed.

### Retrieving and persisting history

The `getAIPromptHistory()` method returns the current conversation history as an array of `PromptModel[]` objects. This is useful for:

- Saving conversation history before closing
- Restoring previous sessions
- Populating the `prompts` property on reload

**Method Signature:**
```tsx
getAIPromptHistory(): PromptModel[]
```

**Example**

In the following example, the maximum prompt history is configured to `30`, and a save button retrieves the conversation history using the `getAIPromptHistory()` method:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/prompt-history-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/prompt-history-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/prompt-history-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/prompt-history-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/prompt-history-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/prompt-history-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/prompt-history-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/prompt-history-cs2" %}

## Configuring the banner

The `bannerTemplate` property allows you to display a custom banner at the top of the AI Assistant popup. This is useful for:

- Welcome messages
- Usage instructions
- Warnings or guidelines
- Branding/UI customization

### Banner template format

The `bannerTemplate` accepts either:

- **HTML String**: `bannerTemplate: '<div class="custom-banner">Welcome to AI Assistant</div>'`
- **React Function** (for functional components): Returns JSX that will be rendered as the banner

### Example

In the following example, a custom banner template is applied to the AI Assistant:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/banner-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/banner-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/banner-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/banner-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/banner-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/banner-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/banner-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/ai-assistant/banner-cs2" %}
