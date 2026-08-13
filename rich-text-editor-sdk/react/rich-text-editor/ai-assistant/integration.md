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

The **AI Assistant** in the Rich Text Editor provides integrated AI capabilities for simplified content creation, editing, and enhancement. It includes an AssistView presented inside a popup interface, a dropdown containing predefined prompts, and dedicated toolbar options for initiating AI interactions.

## Prerequisites

Before you begin, install the required Syncfusion package and ensure the Markdown converter is available:

```bash
npm install @syncfusion/ej2-react-richtexteditor @syncfusion/ej2-markdown-converter
```

> The AI Assistant is available from Syncfusion Essential JS2 v<!--VERSION-->. Refer to the [Release Notes](https://help.syncfusion.com/rich-text-editor-sdk/release-notes) for your installed version.

## Usage

The AI Assistant feature introduces two toolbar items: the `AICommands` and `AIQuery` toolbar items.

To enable the AI Assistant in React:

1. Inject the `AIAssistantService` into the `RichTextEditorComponent` using the `services` prop.
2. Include the `AICommands` and `AIQuery` toolbar items in the `toolbarSettings.items` property.
3. Wire up the `aiAssistantPromptRequest` and `aiAssistantStopRespondingClick` events to handle AI interactions.

**Example: Enabling the AI Assistant**

```tsx
import { RichTextEditorComponent, Toolbar, Inject, AIAssistantService, QuickToolbarService } from '@syncfusion/ej2-react-richtexteditor';

export default class App extends React.Component {
  public rteRef: RichTextEditorComponent;

  public toolbarSettings: object = {
    items: ['AICommands', 'AIQuery', 'Bold', 'Italic', 'Underline', '|', 'Undo', 'Redo']
  };

  public promptRequestHandler = (args: any) => {
    // Forward the prompt and selected text to your AI backend
    console.log('Prompt:', args.prompt, 'Text:', args.text);
  };

  public stopRespondingHandler = () => {
    // Abort any in-flight fetch here (see "Cancelling an In-Flight Request" below)
  };

  render() {
    return (
      <RichTextEditorComponent
        ref={(r) => (this.rteRef = r)}
        toolbarSettings={this.toolbarSettings}
        aiAssistantPromptRequest={this.promptRequestHandler}
        aiAssistantStopRespondingClick={this.stopRespondingHandler}
      >
        <Inject services={[Toolbar, QuickToolbarService, AIAssistantService]} />
        <p>Start typing...</p>
      </RichTextEditorComponent>
    );
  }
}
```

> The `AIAssistantService` and `QuickToolbarService` are required for the AI Assistant to function. The example assumes a class component; for function components, use `useRef` to obtain the editor instance instead of `this.rteRef`.

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

> The `src/App.css` path assumes a Create React App scaffold. For Vite, Next.js, or other scaffolds, import the same CSS files from the corresponding entry stylesheet (for example, `src/main.tsx` in Vite) or use the equivalent `ej2-*` package imports.

> If you are not using the `tailwind3` theme, replace each `tailwind3.css` reference with the equivalent `material3.css`, `fabric.css`, `bootstrap5.css`, or `highcontrast.css` from the same package.

## Accessing the AI Assistant Popup

The AI Assistant interface can be opened through the following options:

### AI Commands Menu

* The **AI Commands** toolbar option opens a menu containing predefined prompts.
* Available actions include improving, shortening, elaborating, simplifying, summarizing, and performing grammar checks on the selected content. The **AI Commands** menu is only enabled when content is selected in the editor; if nothing is selected, the menu opens with an empty selection and the action applies to the entire editor content.
* This option has no default keyboard shortcut.

### AI Query

* The **AI Query** toolbar button, or the keyboard shortcut **Alt + Enter** (Windows) / **⌥ + Enter** (Mac), opens a popup for entering custom prompts.
* This option is used to process content based on user-defined queries.

## Request and Response Handling

Executing a prompt triggers the `aiAssistantPromptRequest` event. This event provides the selected text and the prompt, which can be combined and forwarded to an AI provider or backend service.

The event handler receives a `PromptRequestEventArgs` object with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| `prompt` | `string` | The predefined command text (for example, "Improve writing") or the user-entered custom prompt. |
| `text` | `string` | The currently selected content in the editor. May be empty if the user invoked the command with no selection. |
| `cancel` | `boolean` | Set to `true` to cancel the request before the response is processed. |

Once a response is received, either as a stream or as a single output, it can be added to the AssistView using the `addAIPromptResponse(response: string, finalUpdate: boolean): void` method.

If the **Stop Responding** button is clicked, the `aiAssistantStopRespondingClick` event is raised to cancel the streaming operation. Pair this event with an `AbortController` to terminate the underlying fetch (see the [Cancelling an In-Flight Request](#cancelling-an-in-flight-request) example in the Usage section).

> The `addAIPromptResponse` method converts the provided Markdown response into HTML using the `@syncfusion/ej2-markdown-converter` package. During streaming, each chunk is re-parsed on every call; pass `finalUpdate: true` on the last call to mark the end of the stream.

## Response Handling

Responses from your AI backend can be rendered in one of two ways: streamed chunk-by-chunk for a typewriter-like effect, or delivered as a single payload. Use the streaming approach for chat-style responsiveness and the single-response approach for short, atomic completions.

### Streaming Responses

Responses can be streamed into the AssistView to provide a typewriter-like effect. The `finalUpdate` parameter of `addAIPromptResponse` determines when the final chunk is processed and the stream ends.

| `finalUpdate` value | Behavior |
| --- | --- |
| `false` | Appends/updates the response in the AssistView without finalizing it. Use for every chunk except the last. |
| `true` | Finalizes the streamed response, applies the converted Markdown, and dismisses the loading indicator. Pass this on the last chunk. |

**Example: Streaming Response**

```typescript
import { RichTextEditorComponent } from '@syncfusion/ej2-react-richtexteditor';

public promptRequestHandler = async (args: { prompt: string; text: string }) => {
  this.controller = new AbortController();

  const response: Response = await fetch('YOUR_AI_SERVICE_URL' + '/api/stream', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'HANDLE_AUTH_HERE'
    },
    body: JSON.stringify({ message: args.prompt + args.text }),
    signal: this.controller.signal
  });

  if (!response.ok || !response.body) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const stream: ReadableStream<string> = response.body.pipeThrough(new TextDecoderStream());
  let fullText: string = '';

  for await (const chunk of stream) {
    fullText += chunk;
    // Updates the UI with each chunk for a streaming effect
    this.rteRef.addAIPromptResponse(fullText, false);
  }

  // Final update to signal the end of the stream
  this.rteRef.addAIPromptResponse(fullText, true);
};
```

### Single Response Handling

A complete response can be inserted at once by setting `finalUpdate` to `true`. While the response is being processed, a loading skeleton is displayed in the AssistView.

**Example: Non-Streaming Response**

```typescript
public promptRequestHandler = async (args: { prompt: string; text: string }) => {
  const response: Response = await fetch('YOUR_AI_SERVICE_URL' + '/api/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'HANDLE_AUTH_HERE'
    },
    body: JSON.stringify({ message: args.prompt + args.text })
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data: string = await response.text();
  this.rteRef.addAIPromptResponse(data, true);
};
```

## Troubleshooting

| Issue | Possible Cause | Resolution |
| --- | --- | --- |
| AI Assistant button is disabled or not visible | `AIAssistantService` not injected, or styles not loaded | Ensure `AIAssistantService` is in the `services` array of `<Inject>` and that the `ej2-interactive-chat` and `ej2-notifications` styles are imported. |
| `this.rteRef.addAIPromptResponse is not a function` | Editor ref not yet attached, or wrong component used | Verify the `ref` is assigned and that you are calling the method on a `RichTextEditorComponent` instance. |
| `AbortError` thrown when streaming | User clicked **Stop Responding**, which triggers `aiAssistantStopRespondingClick` | Catch `AbortError` explicitly and exit cleanly without surfacing it to the console. |
| CORS errors from `YOUR_AI_SERVICE_URL` | Backend not configured to allow your app's origin | Enable CORS on the AI backend for your app's origin (for example, `http://localhost:3000` for CRA). |
| Markdown renders as plain text in the AssistView | `@syncfusion/ej2-markdown-converter` not installed | Install the package: `npm install @syncfusion/ej2-markdown-converter`. |

## Example Demonstration

A working demonstration of the AI Assistant, showcasing real-time chunk streaming, is available in the following resources:

* **[GitHub Repository](https://github.com/SyncfusionExamples/richtexteditor-ai-assistant-service):** Syncfusion demo with Express.js and OpenAI SDK. Requires Node.js 18+ and an OpenAI API key set via the `OPENAI_API_KEY` environment variable.

* **[Live Demo](https://ej2.syncfusion.com/react/demos/#/tailwind3/rich-text-editor/ai-assistant):** Implementation using the `gpt-4o-mini` model. Uses the `tailwind3` theme; switch the import paths to your theme of choice if different.