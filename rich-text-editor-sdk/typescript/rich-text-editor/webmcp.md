---
layout: post
title: WebMCP tool integration for TypeScript Rich Text Editor | Syncfusion
description: Learn how to integrate WebMCP with the Syncfusion TypeScript Rich Text Editor to enable AI interaction, configure tools, manage access, and monitor execution.
canonical_url: "https://www.syncfusion.com/javascript-ui-controls/js-rich-text-editor"
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
appliesto: UI Component Suite, Rich Text Editor SDK
---

# WebMCP Tools Integration for Syncfusion® TypeScript Rich Text Editor

WebMCP enables AI agents to discover and interact with Syncfusion® controls through a standardized tool interface. By enabling WebMCP, AI-powered applications can securely discover control capabilities, read data, perform actions, and automate workflows through a standardized interface.

This section demonstrates how to integrate WebMCP with the Syncfusion® TypeScript Rich Text Editor control. The same approach can be used with other supported controls such as Grid, Scheduler, Chart, Spreadsheet, and more.

## WebMCP Overview

WebMCP allows AI assistants running in the browser to interact directly with Syncfusion® controls through natural language prompts.

Instead of relying on DOM inspection or simulating user interactions, AI assistants can interact directly with control APIs through WebMCP tools. This approach provides more reliable and accurate results.

Once connected, an AI assistant can perform Rich Text Editor tasks such as:

- Read the editor content as HTML.
- Read the HTML content of the current selection.
- Insert new text or basic HTML content at the current cursor position.
- Apply inline formatting such as bold, italic, and underline to the selection.
- Change the block type (headings, paragraphs, block quotes) and text alignment.
- Insert links, images, and tables through the corresponding tools.
- Apply numbered and bulleted list formats.
- Undo and redo the recent changes.
- Perform control-specific actions through natural language prompts.

> WebMCP is currently an experimental browser capability and requires a Chromium-based browser with WebMCP support enabled. Availability and required browser flags may change as the specification evolves.

## Prerequisites

- Syncfusion® TypeScript Rich Text Editor control
- Chromium-based Browser (like Chrome, Edge, or Brave)
- [Node.js 24+](https://nodejs.org/en) (LTS recommended).
- WebMCP browser extension installed
- AI API key configured in the extension

## WebMCP setup

Before you can use WebMCP locally, enable the feature flag and install the browser extension:

1. Enable `WebMCP for testing` flag via `chrome://flags/`. Click **"Relaunch"** to restart Chrome.

2. Search for **"WebMCP - Model Context Tool Inspector"** in [Chrome Web Store](https://chromewebstore.google.com/detail/webmcp-model-context-tool/gbpdfapgefenggkahomfgkhfehlcenpd). Click **"Add to Chrome"**.

3. Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to create or copy an API key. Open the WebMCP extension → paste your API key.

The WebMCP extension is now configured and ready to interact with WebMCP-enabled Syncfusion® controls.

## Integrating WebMCP tools

Follow these steps to integrate WebMCP support into the Syncfusion® TypeScript Rich Text Editor control.

### Step 1: Create an application

Create a TypeScript application and integrate the Syncfusion® TypeScript Rich Text Editor control by following the [Getting Started with TypeScript Rich Text Editor](https://help.syncfusion.com/rich-text-editor-sdk/typescript/rich-text-editor/getting-started) guide. After completing the setup, follow the steps below to enable WebMCP integration.

### Step 2: Enable WebMCP support

Import the WebMCP module and inject it into the control using the `RichTextEditor.Inject` method to make the WebMCP functionality available.

```typescript
import { RichTextEditor, Toolbar, Link, Image, Table, QuickToolbar, HtmlEditor,
         WebMcpRichTextEditor } from '@syncfusion/ej2-richtexteditor';

RichTextEditor.Inject(Toolbar, Link, Image, Table, QuickToolbar, HtmlEditor, WebMcpRichTextEditor);

const editor: RichTextEditor = new RichTextEditor({
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', '|',
                'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', 'InsertTable', '|',
                'Undo', 'Redo']
    }
});
editor.appendTo('#editor');
```

### Step 3: Register control tools

Set the `enableWebMcp` property to `true` to register the control's available tools with the WebMCP runtime.

When `enableWebMcp` is enabled, the WebMCP module registers the Rich Text Editor's supported tools with the WebMCP runtime (`document.modelContext`) and they become discoverable by authorized WebMCP clients.

An AI assistant can discover these tools and invoke them based on user prompts.

```typescript
import { RichTextEditor, Toolbar, Link, Image, Table, QuickToolbar, HtmlEditor,
         WebMcpRichTextEditor, RichTextEditorWebMcpSettingsModel,
         WebMcpToolExecuteEventArgs } from '@syncfusion/ej2-richtexteditor';

RichTextEditor.Inject(Toolbar, Link, Image, Table, QuickToolbar, HtmlEditor, WebMcpRichTextEditor);

const webMcpSettings: RichTextEditorWebMcpSettingsModel = {
    name: 'editor',
    tools: ['getContent', 'getSelectedHtml', 'selectAllContent', 'insertContent',
            'formatSelectedContent', 'setBlockType', 'setTextAlignment', 'insertLink',
            'insertTable', 'insertImage', 'undoLastAction', 'redoLastAction', 'clearFormatting'],
    exposedTo: ['https://www.syncfusion.com/']
};

const editor: RichTextEditor = new RichTextEditor({
    enableWebMcp: true,
    webMcpSettings: webMcpSettings,
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', '|',
                'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', 'InsertTable', '|',
                'Undo', 'Redo']
    }
});
editor.appendTo('#editor');
```

### Step 4: Customize tool registration

Use the `webMcpSettings` property to customize how WebMCP tools are exposed to AI agents. The available settings are listed below.

| Property | Description |
|-----------|-------------|
| `name` | Prefix applied to registered tool names. If name: `editor` is specified, a tool such as `getContent` may be registered as `editor_getContent`, allowing multiple control instances to coexist without tool name conflicts. If not specified, the control's element id is used as the prefix. |
| `tools` | List of tool names or `WebMcpTool` objects to register. Any supported tools not included in this list will not be registered. |
| `exposedTo` | List of trusted origins that are allowed to interact with the control through WebMCP. |

```typescript
import { RichTextEditor, Toolbar, Link, Image, Table, QuickToolbar, HtmlEditor,
         WebMcpRichTextEditor, RichTextEditorWebMcpSettingsModel } from '@syncfusion/ej2-richtexteditor';

RichTextEditor.Inject(Toolbar, Link, Image, Table, QuickToolbar, HtmlEditor, WebMcpRichTextEditor);

const webMcpSettings: RichTextEditorWebMcpSettingsModel = {
    name: 'editor',
    tools: ['getContent', 'getSelectedHtml', 'selectAllContent', 'insertContent',
            'formatSelectedContent', 'setBlockType', 'setTextAlignment', 'insertLink',
            'insertTable', 'insertImage', 'undoLastAction', 'redoLastAction', 'clearFormatting'],
    exposedTo: ['https://www.syncfusion.com/']
};

const editor: RichTextEditor = new RichTextEditor({
    enableWebMcp: true,
    webMcpSettings: webMcpSettings,
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', '|',
                'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', 'InsertTable', '|',
                'Undo', 'Redo']
    }
});
editor.appendTo('#editor');
```

> Use the `exposedTo` property to restrict WebMCP access to trusted domains. This helps prevent unauthorized WebMCP clients from interacting with your control tools.

### Step 5: Monitor and control tool execution

The `beforeWebMcpToolExecute` event is triggered before a tool is executed. This event allows you to:

- Audit tool usage.
- Validate incoming requests.
- Cancel tool execution when necessary.
- Apply custom business rules and security policies.

> AI-generated requests should always be validated before executing write operations. Restrict access using `exposedTo` and perform additional authorization checks within `beforeWebMcpToolExecute` when modifying editor content.

```typescript
import { RichTextEditor, Toolbar, Link, Image, Table, QuickToolbar, HtmlEditor,
         WebMcpRichTextEditor, RichTextEditorWebMcpSettingsModel,
         WebMcpToolExecuteEventArgs } from '@syncfusion/ej2-richtexteditor';

RichTextEditor.Inject(Toolbar, Link, Image, Table, QuickToolbar, HtmlEditor, WebMcpRichTextEditor);

const webMcpSettings: RichTextEditorWebMcpSettingsModel = {
    name: 'editor',
    tools: ['getContent', 'getSelectedHtml', 'selectAllContent', 'insertContent',
            'formatSelectedContent', 'setBlockType', 'setTextAlignment', 'insertLink',
            'insertTable', 'insertImage', 'undoLastAction', 'redoLastAction', 'clearFormatting'],
    exposedTo: ['https://www.syncfusion.com/']
};

const onBeforeWebMcpToolExecute = (args: WebMcpToolExecuteEventArgs): void => {
    // Example business rule
    const toolName: string = args.toolName;
    if (toolName && toolName.indexOf('insertContent') !== -1) {
        const hour: number = new Date().getHours();

        if (hour < 9 || hour > 17) {
            args.cancel = true;
            console.log('Editor content can be modified only between 9:00 AM and 5:00 PM.');
        }
    }
};

const editor: RichTextEditor = new RichTextEditor({
    enableWebMcp: true,
    webMcpSettings: webMcpSettings,
    beforeWebMcpToolExecute: onBeforeWebMcpToolExecute,
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', '|',
                'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', 'InsertTable', '|',
                'Undo', 'Redo']
    }
});
editor.appendTo('#editor');
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

```typescript
// Returns the schema of all supported tools.
let tools: WebMcpTool[] = editor.getWebMcpTools();

// Returns the schema of the specified tools only.
let selectedTools: WebMcpTool[] = editor.getWebMcpTools(['getContent', 'insertContent', 'setBlockType']);
```

## Best practices

- Expose only the tools required by your application.
- Use the `name` property when multiple control instances exist on the same page.
- Configure `exposedTo` to limit access to trusted domains.
- Monitor tool activity through the `beforeWebMcpToolExecute` event.
- Apply application-specific validation before executing tool operations.

## Next steps

After successfully enabling WebMCP, you can:

- Integrate WebMCP with other Syncfusion® controls such as Grid, Scheduler, Chart, and Spreadsheet.
- Build AI-powered workflows that interact directly with editor content and UI elements.
- Create secure and controlled tool execution pipelines using custom validation logic.

## See also

- [Getting Started with TypeScript Rich Text Editor](https://help.syncfusion.com/rich-text-editor-sdk/typescript/rich-text-editor/getting-started)
- [WebMCP tool integration for JavaScript (ES5) controls](https://ej2.syncfusion.com/javascript/documentation/webmcp/overview)