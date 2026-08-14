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

> The AI Assistant is available from Syncfusion Essential JS2 v27.2.2 and later. Refer to the [Release Notes](https://help.syncfusion.com/rich-text-editor-sdk/release-notes) for your installed version.

| Package | Minimum version |
| --- | --- |
| `@syncfusion/ej2-react-richtexteditor` | 27.2.2 |
| `@syncfusion/ej2-markdown-converter` | 27.2.2 |
| `react` / `react-dom` | 18.0.0 |
| `typescript` (for the typed samples) | 4.5.0 |

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

## Enabling the AI Assistant

The AI Assistant feature introduces two toolbar items: the `AICommands` and `AIQuery` toolbar items.

To enable the AI Assistant:

1. Add `AIAssistantService` to the `services` array passed to the `<Inject>` element. `<Inject>` must appear as a JSX child inside `RichTextEditorComponent`.
2. Include `'AICommands'` and `'AIQuery'` in `toolbarSettings.items`.
3. Wire the `aiAssistantPromptRequest` and `aiAssistantStopRespondingClick` events of `aiAssistantSettings`.

The complete list of predefined `AICommands` commands is documented in the [AI Commands Menu](#ai-commands-menu) section.

**Example: Enabling the AI Assistant**

```tsx
import * as React from "react";
import {
  RichTextEditorComponent,
  Toolbar,
  Inject,
  AIAssistantService,
  QuickToolbarService,
  PromptRequestEventArgs
} from "@syncfusion/ej2-react-richtexteditor";

export default class App extends React.Component<{}, { content: string }> {
  // Assigned by the ref callback below. The `!` (definite assignment assertion) tells TypeScript
  // to skip the strict initialization check for this field.
  public rteRef!: RichTextEditorComponent;
  private controller: AbortController | null = null;

  public toolbarSettings: object = {
    items: ["AICommands", "AIQuery", "Bold", "Italic", "Underline", "|", "Undo", "Redo"]
  };

  public aiAssistantSettings: object = {
    promptRequest: this.promptRequestHandler,
    stopRespondingClick: this.stopRespondingHandler
  };

  public promptRequestHandler = (args: PromptRequestEventArgs) => {
    // Forward the prompt and selected text to your AI backend
    console.log("Prompt:", args.prompt, "Text:", args.text);
  };

  public stopRespondingHandler = () => {
    // Abort any in-flight fetch
    this.controller?.abort();
  };

  public render() {
    return (
      <RichTextEditorComponent
        ref={(r) => (this.rteRef = r)}
        toolbarSettings={this.toolbarSettings}
        aiAssistantSettings={this.aiAssistantSettings}
      >
        <Inject services={[Toolbar, QuickToolbarService, AIAssistantService]} />
        <p>Start typing...</p>
      </RichTextEditorComponent>
    );
  }
}
```

> The `AIAssistantService` and `QuickToolbarService` are required for the AI Assistant to function. The example uses a class component; for a function component, replace the handler props and `ref` callback with `useRef` to obtain the editor instance.

## Accessing the AI Assistant Popup

The AI Assistant interface can be opened through the following options:

### AI Commands Menu

The **AI Commands** toolbar option opens a menu of predefined prompts.

| Predefined action | Behavior |
| --- | --- |
| Improve writing | Rewrites the selection with clearer, more polished phrasing. |
| Shorten | Reduces the length of the selection while preserving meaning. |
| Elaborate | Expands the selection with additional detail. |
| Simplify | Rewrites the selection in simpler language. |
| Summarize | Produces a concise summary of the selection. |
| Grammar check | Corrects grammar and punctuation in the selection. |

The AI Commands menu is enabled only when content is selected. If no content is selected, the menu still opens but the action applies to the entire editor content.

> Customize the predefined prompt list via `aiAssistantSettings.commands`. See [Customization of AI Assistant](customization.md).

### AI Query

The **AI Query** toolbar button opens a popup for entering custom prompts.

| Trigger | Platform | Shortcut |
| --- | --- | --- |
| AI Query toolbar button | All | Click |
| Keyboard | Windows / Linux | `Alt + Enter` |
| Keyboard | macOS | `⌥ + Enter` |

> The shortcut can be remapped or disabled via `aiAssistantSettings.shortcut`. Refer to [Customization](customization.md).

## Request and Response Handling

Executing a prompt triggers the `aiAssistantPromptRequest` event. This event provides the selected text and the prompt, which can be combined and forwarded to an AI provider or backend service.

The event handler receives a `PromptRequestEventArgs` object with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| `prompt` | `string` | The predefined command text (for example, "Improve writing") or the user-entered custom prompt. |
| `text` | `string` | The currently selected content in the editor. May be empty if the user invoked the command with no selection. |
| `cancel` | `boolean` | Set to `true` to cancel the request before the response is processed. |
| `output` | `Object` | Optional. Accumulated response object built incrementally during streaming. |
| `isFinalUpdate` | `boolean` | Optional. Set to `true` on the final call to signal end of stream. |

Once a response is received — either as a stream or as a single output — it can be added to the AssistView using the method below.

| Method | Return | Description |
| --- | --- | --- |
| `addAIPromptResponse(response: string \| { response: string; isFinalUpdate?: boolean }, finalUpdate: boolean): void` | `void` | Adds the response to the AI Assistant. Pass `false` to stream a partial chunk; pass `true` (or omit) to mark the response as final. |

For other public methods (`getAIPromptHistory`, `executeAIPrompt`, `clearAIPromptHistory`, `showAIAssistantPopup`, `hideAIAssistantPopup`), see [Customization of AI Assistant](customization.md#programmatic-workflow-example).

If the **Stop Responding** button is clicked, the `aiAssistantStopRespondingClick` event of `aiAssistantSettings` is raised to cancel the streaming operation. Pair this event with an `AbortController` to terminate the underlying fetch — see [Cancelling an In-Flight Request](#cancelling-an-in-flight-request).

> The `addAIPromptResponse` method converts the provided Markdown response into HTML using the `@syncfusion/ej2-markdown-converter` package. During streaming, each chunk is re-parsed on every call; pass `finalUpdate: true` on the last call to mark the end of the stream. HTML in the response is not sanitized server-side; sanitize dangerous content at the AI service boundary.

## Cancelling an In-Flight Request

To cancel a streaming request when the user clicks **Stop Responding**, store the `AbortController` on the component and call `abort()` inside the `aiAssistantStopRespondingClick` handler. The streaming `fetch` must pass `controller.signal` so the request is actually aborted.

> The full component wiring is shown in [Enabling the AI Assistant](#enabling-the-ai-assistant). The snippets below highlight only the cancellation logic.

```typescript
// Stored as a class field (class component) or useRef (function component).
private controller: AbortController | null = null;

public promptRequestHandler = async (args: PromptRequestEventArgs) => {
  this.controller = new AbortController();

  try {
    const response = await fetch("YOUR_AI_SERVICE_URL/api/stream", {
      method: "POST",
      headers: { /* auth, content-type */ },
      body: JSON.stringify({ message: args.prompt + args.text }),
      signal: this.controller.signal // <- the key wiring
    });
    // ...stream and call addAIPromptResponse...
  } catch (err) {
    if ((err as Error).name === "AbortError") {
      // User clicked Stop Responding — exit cleanly.
      return;
    }
    throw err;
  }
};

public stopRespondingHandler = () => {
  this.controller?.abort();
};
```

## Response Handling

Responses from your AI backend can be rendered in one of two ways: streamed chunk-by-chunk for a typewriter-like effect, or delivered as a single payload. Use the streaming approach for chat-style responsiveness and the single-response approach for short, atomic completions.

### Streaming Responses

Responses can be streamed into the AssistView to provide a typewriter-like effect. The `finalUpdate` parameter of `addAIPromptResponse` determines when the final chunk is processed and the stream ends.

| `finalUpdate` value | Behavior |
| --- | --- |
| `false` | Appends and updates the response in the AssistView without finalizing it. Use for every chunk except the last. Pass the **accumulated** full text on each call, not just the new chunk. |
| `true` | Finalizes the streamed response, applies the converted Markdown, and dismisses the loading indicator. Pass this on the last chunk. |

> Requires a modern browser with `ReadableStream` support (Chromium-based, Firefox, Safari 16+). The streams API requires HTTPS or `localhost`.

**Example: Streaming Response**

```typescript
import { PromptRequestEventArgs } from "@syncfusion/ej2-react-richtexteditor";

public promptRequestHandler = async (args: PromptRequestEventArgs) => {
  this.controller = new AbortController();

  try {
    const response: Response = await fetch("YOUR_AI_SERVICE_URL/api/stream", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "HANDLE_AUTH_HERE" // server-mediated token; never ship raw keys to the browser
      },
      body: JSON.stringify({ message: args.prompt + args.text }),
      signal: this.controller.signal
    });

    if (!response.ok || !response.body) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const stream: ReadableStream<string> = response.body.pipeThrough(new TextDecoderStream());
    let fullText: string = "";

    for await (const chunk of stream) {
      fullText += chunk;
      this.rteRef.addAIPromptResponse(fullText, false);
    }

    this.rteRef.addAIPromptResponse(fullText, true);
  } catch (err) {
    if ((err as Error).name === "AbortError") {
      return;
    }
    throw err;
  }
};
```

### Single Response Handling

A complete response can be inserted at once by setting `finalUpdate` to `true`. While the response is being processed, a loading skeleton is displayed in the AssistView.

**Example: Non-Streaming Response**

```typescript
import { PromptRequestEventArgs } from "@syncfusion/ej2-react-richtexteditor";

public promptRequestHandler = async (args: PromptRequestEventArgs) => {
  try {
    const response: Response = await fetch("YOUR_AI_SERVICE_URL/api/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "HANDLE_AUTH_HERE" // proxy API calls through your server; never expose raw keys
      },
      body: JSON.stringify({ message: args.prompt + args.text }),
      signal: this.controller?.signal
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: string = await response.text();
    this.rteRef.addAIPromptResponse(data, true);
  } catch (err) {
    if ((err as Error).name === "AbortError") {
      return;
    }
    throw err;
  }
};
```

After the response is added to the AssistView, you can insert it into the editor content with `executeCommand`:

```typescript
// Insert the final response as HTML at the current selection.
this.rteRef.executeCommand("insertHTML", fullText);
```

> The two examples above share the handler name `promptRequestHandler` for clarity. Implement only one of them per component.

## Troubleshooting

### Setup

| Issue | Cause | Resolution |
| --- | --- | --- |
| AI Assistant button is disabled or not visible | `AIAssistantService` not injected, or styles not loaded | Add `AIAssistantService` to `<Inject services={...}>` and import the `ej2-interactive-chat` and `ej2-notifications` styles. |
| Markdown renders as plain text in the AssistView | `@syncfusion/ej2-markdown-converter` not installed | Install it: `npm install @syncfusion/ej2-markdown-converter`. |

### Runtime

| Issue | Cause | Resolution |
| --- | --- | --- |
| `this.rteRef.addAIPromptResponse is not a function` | Editor ref not yet attached, or wrong component used | Verify the `ref` is assigned and that the call is on a `RichTextEditorComponent` instance. |
| `AbortError` thrown when streaming | User clicked **Stop Responding** | Catch `AbortError` explicitly and exit cleanly. |

### Backend

| Issue | Cause | Resolution |
| --- | --- | --- |
| CORS errors from `YOUR_AI_SERVICE_URL` | Backend not configured to allow your origin | Enable CORS for your app's origin. Express example: `app.use(cors({ origin: "http://localhost:3000" }));` |

## See Also

* **[GitHub Repository](https://github.com/SyncfusionExamples/richtexteditor-ai-assistant-service)** — Express.js + OpenAI SDK demo. Requires Node.js 18+ and `OPENAI_API_KEY`.
* **[Live Demo](https://ej2.syncfusion.com/react/demos/#/tailwind3/rich-text-editor/ai-assistant)** — Uses the `gpt-4o-mini` model and the `tailwind3` theme.