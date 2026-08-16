---
layout: post
title: AI Assistant in React Rich Text Editor | Syncfusion
description: Learn how to enable and configure the React Rich Text Editor AI Assistant for AI-powered content creation, editing, prompts, and streaming.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Integrating the AI Assistant in React Rich Text Editor

> **Version Compatibility**: The AI Assistant feature is available from Syncfusion v31.2.19 and later. Requires React 16.8+, @syncfusion/ej2-react-richtexteditor v31.2.19, @syncfusion/ej2-interactive-chat, @syncfusion/ej2-notifications, and @syncfusion/ej2-markdown-converter.

The **AI Assistant** in the Rich Text Editor provides integrated AI capabilities for simplified content creation, editing, and enhancement. It includes an AssistView presented inside a popup interface, a dropdown of predefined prompts, and dedicated toolbar options for initiating AI interactions.

## Prerequisites

- Ensure the following packages are installed:
  - `@syncfusion/ej2-react-richtexteditor`
  - `@syncfusion/ej2-interactive-chat`
  - `@syncfusion/ej2-notifications`
  - `@syncfusion/ej2-markdown-converter`

- A backend AI service endpoint is required (e.g., OpenAI, custom service) that accepts POST requests with the prompt and text content.

## Importing Styles

The Rich Text Editor **AI Assistant** is provided as an injectable module and requires additional style references to render the AI Assistant as expected.

Along with the default Rich Text Editor styles, the **Interactive Chat** and **Notifications** styles are necessary for the proper rendering of the AI AssistView.

Add the following style references to the **src/App.css** file:
 
```css
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';
 
/* Required for AI Assistant */
@import '../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css';
```

Once these styles are included, the **AI Assistant** will render as expected.

## Usage

The AI Assistant feature introduces two toolbar items: **AICommands** and **AIQuery**.

To enable the AI Assistant:

1. Add the `AIAssistantService` to the **providers** section.
2. Include `AICommands` and `AIQuery` in the `toolbarSettings.items` property.

## Accessing the AI Assistant Popup

The AI Assistant interface can be opened through the following options:

### 1. AI Commands Menu

* The **AI Commands** toolbar option opens a dropdown menu containing predefined prompts.
* Available actions include improving, shortening, elaborating, simplifying, summarizing, and performing grammar checks on the selected content.
* To customize or add additional prompts, refer to the [Customization guide](./customization.md#custom-toolbar-buttons-in-ai-assistant).

### 2. AI Query

* The **AI Query** toolbar button opens a popup for entering custom prompts.
* Keyboard shortcut: **Alt + Enter** (Windows/Linux) or **⌥ (Option) + Enter** (Mac)
* This option is used to process content based on user-defined queries.

## Request and Response handling

### Events

Executing a prompt triggers two key events:

| Event | Description | Event Args |
| --- | --- | --- |
| `aiAssistantPromptRequest` | Triggered when the user submits a prompt. The event provides the `prompt` and `text` (selected content). | `{ prompt: string; text: string }` |
| `aiAssistantStopRespondingClick` | Triggered when the user clicks the **Stop Responding** button. Use this to cancel streaming or pending requests. | `{}` |

### Response methods

Once a response is received from your AI service (either as a stream or a complete response), add it to the AssistView using the `addAIPromptResponse()` method:

```tsx
editor.addAIPromptResponse(response: string | Object, finalUpdate?: boolean): void
```

- **response** — The AI response text or object. If Markdown is provided, it is automatically converted to HTML.
- **finalUpdate** — Set to `true` on the final response; set to `false` for intermediate streaming chunks.

> The `addAIPromptResponse` method converts Markdown responses to HTML using the `@syncfusion/ej2-markdown-converter` package (included in the prerequisites).

## Streaming responses

Responses can be streamed into the AssistView to provide a typewriter like effect. The `finalUpdate` parameter of `addAIPromptResponse` determines when the final chunk is processed and the stream ends.

**Example: Streaming Response**

```typescript
const response: Response = await fetch('YOUR_AI_SERVICE_URL' + '/api/stream', {
  method: 'POST',
  headers: {
    "Content-Type": 'application/json',
    "Authorization": 'HANDLE_AUTH_HERE'
  },
  body: JSON.stringify({ message: args.prompt + args.text }),
});

if (!response.ok) {
  const errorData = await response.json();
  throw new Error(errorData.error);
}

const stream: ReadableStream<string> = response.body.pipeThrough(new TextDecoderStream());
let fullText: string = '';

for await (const chunk of stream as unknown as AsyncIterable<string>) {
  fullText += chunk;
  // Updates the UI with each chunk for a streaming effect
  this.editor.addAIPromptResponse(fullText, false);
}

// Final update to signal the end of the stream
this.editor.addAIPromptResponse(fullText, true);
```

## Single Response Handling

A complete response can be inserted at once by setting `finalUpdate` to `true`. While the response is being processed, a loading skeleton is displayed in the AssistView.

**Example: Non-Streaming Response**

```typescript
const response: Response = await fetch('YOUR_AI_SERVICE_URL' + '/api/query', {
  method: 'POST',
  headers: {
    "Content-Type": 'application/json',
    "Authorization": 'HANDLE_AUTH_HERE'
  },
  body: JSON.stringify({ message: args.prompt + args.text }),
});

if (!response.ok) {
  throw new Error(`HTTP error! Status: ${response.status}`);
}

const data: string = await response.text();
this.editor.addAIPromptResponse(data, true);
```

## Example Demonstration

A working demonstration of the AI Assistant, showcasing real-time chunk streaming, is available in the following resources:

* **[GitHub Repository](https://github.com/SyncfusionExamples/richtexteditor-ai-assistant-service):** Syncfusion demo with Express.js and OpenAI SDK

* **[Live Demo](https://ej2.syncfusion.com/react/demos/#/tailwind3/rich-text-editor/ai-assistant):** Implementation using the `gpt-4o-mini` model