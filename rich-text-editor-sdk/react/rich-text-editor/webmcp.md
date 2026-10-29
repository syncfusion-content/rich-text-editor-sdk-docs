---
layout: post
title: WebMCP tool integration for React Rich Text Editor | Syncfusion
description: Learn how to integrate WebMCP with the Syncfusion React Rich Text Editor to enable AI interaction, configure tools, manage access, and monitor execution.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# WebMCP Tools Integration for Syncfusion® React Rich Text Editor

WebMCP enables AI agents to discover and interact with Syncfusion® controls through a standardized tool interface. By enabling WebMCP, AI-powered applications can securely discover control capabilities, read data, perform actions, and automate workflows through a standardized interface.

This section demonstrates how to integrate WebMCP with the Syncfusion® React Rich Text Editor component. The same approach can be used with other supported components such as Grid, Scheduler, Chart, Spreadsheet, and more.

## WebMCP Overview

WebMCP allows AI assistants running in the browser to interact directly with Syncfusion® components through natural language prompts.

Instead of relying on DOM inspection or simulating user interactions, AI assistants can interact directly with component APIs through WebMCP tools. This approach provides more reliable and accurate results.

Once connected, an AI assistant can perform Rich Text Editor tasks such as:

- Read the editor content as HTML.
- Read the HTML content of the current selection.
- Insert new text or basic HTML content at the current cursor position.
- Apply inline formatting such as bold, italic, and underline to the selection.
- Change the block type (headings, paragraphs, block quotes) and text alignment.
- Insert links, images, and tables through the corresponding tools.
- Apply numbered and bulleted list formats.
- Undo and redo the recent changes.
- Perform component-specific actions through natural language prompts.

> WebMCP is currently an experimental browser capability and requires a Chromium-based browser with WebMCP support enabled. Availability and required browser flags may change as the specification evolves.

## Prerequisites

- Syncfusion® React Rich Text Editor component
- Chromium-based Browser (like Chrome, Edge, or Brave)
- [Node.js 24+](https://nodejs.org/en) (LTS recommended).
- WebMCP browser extension installed
- AI API key configured in the extension

## WebMCP setup

Before you can use WebMCP locally, enable the feature flag and install the browser extension:

1. Enable `WebMCP for testing` flag via `chrome://flags/`. Click **"Relaunch"** to restart Chrome.

2. Search for **"WebMCP - Model Context Tool Inspector"** in [Chrome Web Store](https://chromewebstore.google.com/detail/webmcp-model-context-tool/gbpdfapgefenggkahomfgkhfehlcenpd). Click **"Add to Chrome"**.

3. Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to create or copy an API key. Open the WebMCP extension → paste your API key.

The WebMCP extension is now configured and ready to interact with WebMCP-enabled Syncfusion® components.

## Integrating WebMCP tools

Follow these steps to integrate WebMCP support into the Syncfusion® React Rich Text Editor component.

### Step 1: Create an application

Create a React application and integrate the Syncfusion® React Rich Text Editor component by following the [Getting Started with React Rich Text Editor](https://help.syncfusion.com/rich-text-editor-sdk/react/rich-text-editor/getting-started) guide. After completing the setup, follow the steps below to enable WebMCP integration.

### Step 2: Enable WebMCP support

Import the WebMCP module and inject it into the component using the `<Inject>` element to make the WebMCP functionality available.

```tsx
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Table, Toolbar, WebMcpRichTextEditor } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{}, {}> {
    public toolbarSettings: object = {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', '|',
                'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', 'InsertTable', '|',
                'Undo', 'Redo']
    }

    public render() {
        return (
            <RichTextEditorComponent toolbarSettings={this.toolbarSettings}>
                <Inject services={[Toolbar, Link, Image, Table, QuickToolbar, HtmlEditor, WebMcpRichTextEditor]} />
            </RichTextEditorComponent>
        );
    }
}
export default App;
```

### Step 3: Register component tools

Set the `enableWebMcp` property to `true` to register the component's available tools with the WebMCP runtime.

When `enableWebMcp` is enabled, the WebMCP module registers the Rich Text Editor's supported tools with the WebMCP runtime (`document.modelContext`) and they become discoverable by authorized WebMCP clients.

An AI assistant can discover these tools and invoke them based on user prompts.

```tsx
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Table, Toolbar, WebMcpRichTextEditor } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{}, {}> {
    public enableWebMcp: boolean = true;

    public webMcpSettings: object = {
        name: 'editor',
        tools: ['getContent', 'getSelectedHtml', 'selectAllContent', 'insertContent',
                'formatSelectedContent', 'setBlockType', 'setTextAlignment', 'insertLink',
                'insertTable', 'insertImage', 'undoLastAction', 'redoLastAction', 'clearFormatting'],
        exposedTo: ['https://www.syncfusion.com/']
    };

    public toolbarSettings: object = {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', '|',
                'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', 'InsertTable', '|',
                'Undo', 'Redo']
    }

    public render() {
        return (
            <RichTextEditorComponent enableWebMcp={this.enableWebMcp} webMcpSettings={this.webMcpSettings}
                toolbarSettings={this.toolbarSettings}>
                <Inject services={[Toolbar, Link, Image, Table, QuickToolbar, HtmlEditor, WebMcpRichTextEditor]} />
            </RichTextEditorComponent>
        );
    }
}
export default App;
```

### Step 4: Customize tool registration

Use the `webMcpSettings` property to customize how WebMCP tools are exposed to AI agents. The available settings are listed below.

| Property | Description |
|-----------|-------------|
| `name` | Prefix applied to registered tool names. If name: `editor` is specified, a tool such as `getContent` may be registered as `editor_getContent`, allowing multiple component instances to coexist without tool name conflicts. If not specified, the component's element id is used as the prefix. |
| `tools` | List of tool names or `WebMcpTool` objects to register. Any supported tools not included in this list will not be registered. |
| `exposedTo` | List of trusted origins that are allowed to interact with the component through WebMCP. |

```tsx
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Table, Toolbar, WebMcpRichTextEditor } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{}, {}> {
    public enableWebMcp: boolean = true;

    public webMcpSettings: object = {
        name: 'editor',
        tools: ['getContent', 'getSelectedHtml', 'selectAllContent', 'insertContent',
                'formatSelectedContent', 'setBlockType', 'setTextAlignment', 'insertLink',
                'insertTable', 'insertImage', 'undoLastAction', 'redoLastAction', 'clearFormatting'],
        exposedTo: ['https://www.syncfusion.com/']
    };

    public toolbarSettings: object = {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', '|',
                'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', 'InsertTable', '|',
                'Undo', 'Redo']
    }

    public render() {
        return (
            <RichTextEditorComponent enableWebMcp={this.enableWebMcp} webMcpSettings={this.webMcpSettings}
                toolbarSettings={this.toolbarSettings}>
                <Inject services={[Toolbar, Link, Image, Table, QuickToolbar, HtmlEditor, WebMcpRichTextEditor]} />
            </RichTextEditorComponent>
        );
    }
}
export default App;
```

> Use the `exposedTo` property to restrict WebMCP access to trusted domains. This helps prevent unauthorized WebMCP clients from interacting with your component tools.

### Step 5: Monitor and control tool execution

The `beforeWebMcpToolExecute` event is triggered before a tool is executed. This event allows you to:

- Audit tool usage.
- Validate incoming requests.
- Cancel tool execution when necessary.
- Apply custom business rules and security policies.

> AI-generated requests should always be validated before executing write operations. Restrict access using `exposedTo` and perform additional authorization checks within `beforeWebMcpToolExecute` when modifying editor content.

```tsx
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Table, Toolbar, WebMcpRichTextEditor } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{}, {}> {
    public enableWebMcp: boolean = true;

    public webMcpSettings: object = {
        name: 'editor',
        tools: ['getContent', 'getSelectedHtml', 'selectAllContent', 'insertContent',
                'formatSelectedContent', 'setBlockType', 'setTextAlignment', 'insertLink',
                'insertTable', 'insertImage', 'undoLastAction', 'redoLastAction', 'clearFormatting'],
        exposedTo: ['https://www.syncfusion.com/']
    };

    public toolbarSettings: object = {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', '|',
                'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', 'InsertTable', '|',
                'Undo', 'Redo']
    }

    public onBeforeWebMcpToolExecute(args: { [key: string]: object }): void {
        // Example business rule
        const toolName = args.toolName as string;
        if (toolName.indexOf('insertContent') !== -1) {
            const hour: number = new Date().getHours();

            if (hour < 9 || hour > 17) {
                args.cancel = true;
                console.log('Editor content can be modified only between 9:00 AM and 5:00 PM.');
            }
        }
    }

    public render() {
        return (
            <RichTextEditorComponent ref={(rte) => { this.rteObj = rte; }} enableWebMcp={this.enableWebMcp}
                webMcpSettings={this.webMcpSettings} toolbarSettings={this.toolbarSettings}
                beforeWebMcpToolExecute={this.onBeforeWebMcpToolExecute}>
                <Inject services={[Toolbar, Link, Image, Table, QuickToolbar, HtmlEditor, WebMcpRichTextEditor]} />
            </RichTextEditorComponent>
        );
    }
    private rteObj: RichTextEditorComponent;
}
export default App;
```

## Supported tools

The following table lists the WebMCP tools supported by the Rich Text Editor.

| Tool | Description |
|-------------|-------------|
| `getContent` | Reads the complete HTML content inside the editor. |
| `getSelectedHtml` | Reads the HTML content of the current selection. |
| `selectAllContent` | Selects all the content in the editor so a following bulk operation can act on the entire document. |
| `showDialog` | Opens a built-in editor dialog such as InsertLink, InsertImage, InsertAudio, InsertVideo, or InsertTable. |
| `closeDialog` | Closes a built-in editor dialog that is currently open. |
| `insertContent` | Inserts plain text or basic HTML content at the current cursor position. |
| `formatSelectedContent` | Applies inline formatting such as bold, italic, underline, superscript, or subscript to the selected content. |
| `setBlockType` | Changes the block element wrapping the current selection or cursor line (P, H1–H6, BlockQuote, PRE). |
| `setTextAlignment` | Sets the horizontal alignment of the selected content (justifyCenter, justifyFull, justifyLeft, justifyRight). |
| `insertLink` | Inserts a hyperlink at the current cursor position or converts the selected text into a hyperlink. |
| `insertTable` | Inserts a table with the specified number of rows and columns. |
| `insertImage` | Inserts an image at the current cursor position using the given URL. |
| `undoLastAction` | Reverts the most recent change made in the editor. |
| `redoLastAction` | Re-applies the most recent action that was undone. |
| `clearFormatting` | Removes all inline formatting from the selected content. |
| `printContent` | Opens the browser print dialog for the editor content. |
| `setCodeBlock` | Inserts a syntax-highlighted code block for the specified programming language. |
| `applyNumberedListFormat` | Applies a numbered list format with the chosen numbering style to the selected content. |
| `applyBulletedListFormat` | Applies a bulleted list format with the chosen bullet style to the selected content. |
| `insertBR` | Inserts a line break at the current cursor position. |

The list of `WebMcpTool` objects can also be retrieved programmatically using the `getWebMcpTools` method of the Rich Text Editor.

```tsx
// Returns the schema of all supported tools.
let tools: Object[] = this.rteObj.getWebMcpTools();

// Returns the schema of the specified tools only.
let selectedTools: Object[] = this.rteObj.getWebMcpTools(['getContent', 'insertContent', 'setBlockType']);
```

## Best practices

- Expose only the tools required by your application.
- Use the `name` property when multiple component instances exist on the same page.
- Configure `exposedTo` to limit access to trusted domains.
- Monitor tool activity through the `beforeWebMcpToolExecute` event.
- Apply application-specific validation before executing tool operations.

## Next steps

After successfully enabling WebMCP, you can:

- Integrate WebMCP with other Syncfusion® React components such as Grid, Scheduler, Chart, and Spreadsheet.
- Build AI-powered workflows that interact directly with editor content and UI elements.
- Create secure and controlled tool execution pipelines using custom validation logic.

## See also

- [Getting Started with React Rich Text Editor](https://help.syncfusion.com/rich-text-editor-sdk/react/rich-text-editor/getting-started)
- [WebMCP tool integration for JavaScript (ES5) components](https://ej2.syncfusion.com/javascript/documentation/webmcp/overview)