---
layout: post
title: WebMCP tool integration for JavaScript Rich Text Editor | Syncfusion
description: Learn how to integrate WebMCP with the Syncfusion JavaScript Rich Text Editor to enable AI interaction, configure tools, manage access, and monitor execution.
canonical_url: "https://www.syncfusion.com/javascript-ui-controls/js-rich-text-editor"
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
appliesto: UI Component Suite, Rich Text Editor SDK
---

# WebMCP Tools Integration for Syncfusion® JavaScript Rich Text Editor

WebMCP enables AI agents to discover and interact with Syncfusion® JavaScript (ES5) controls through a standardized tool interface. By enabling WebMCP, AI-powered applications can securely discover control capabilities, read data, perform actions, and automate workflows through a standardized interface.

This section demonstrates how to integrate WebMCP with the Syncfusion® JavaScript (ES5) Rich Text Editor control. The same approach can be used with other supported controls such as Grid, Scheduler, Chart, Spreadsheet, and more.

## WebMCP Overview

WebMCP allows AI assistants running in the browser to interact directly with Syncfusion® controls through natural language prompts.

Instead of relying on DOM inspection or simulating user interactions, AI assistants can interact directly with control APIs through WebMCP tools. This approach provides more reliable and accurate results.

Once connected, an AI assistant can perform Rich Text Editor tasks such as:

- Read the editor content as HTML or plain text.
- Insert or update content at the current selection.
- Apply formatting such as bold, italic, underline, alignments, and list formats.
- Insert images, tables, links, and code blocks.
- Perform control-specific actions through natural language prompts.

> WebMCP is currently an experimental browser capability and requires a Chromium-based browser with WebMCP support enabled. Availability and required browser flags may change as the specification evolves.

## Prerequisites

- Syncfusion® JavaScript (ES5) Rich Text Editor control
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

Follow these steps to integrate WebMCP support into the Syncfusion® JavaScript (ES5) Rich Text Editor control.

### Step 1: Create an application

Create an application and integrate the Syncfusion® JavaScript (ES5) Rich Text Editor control by following the [Getting Started with JavaScript Rich Text Editor](https://help.syncfusion.com/rich-text-editor-sdk/javascript/rich-text-editor/getting-started) guide. After completing the setup, follow the steps below to enable WebMCP integration.

### Step 2: Enable WebMCP support

Import the WebMCP module and inject it into the control to make WebMCP functionality available.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
</head>

<body>
    <div>
        <div id="richtexteditor"></div>
    </div>
<script>
ej.richtexteditor.RichTextEditor.Inject(ej.richtexteditor.WebMcpRichTextEditor);

var richtexteditor = new ej.richtexteditor.RichTextEditor({
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', '|',
                'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', 'InsertTable', '|',
                'Undo', 'Redo']
    }
});

richtexteditor.appendTo('#richtexteditor');
</script>
</body>
</html>
```

### Step 3: Register control tools

Set the `enableWebMcp` property to `true` to register the control's available tools with the WebMCP runtime.

When `enableWebMcp` is enabled, supported control tools are automatically registered with the WebMCP runtime and become discoverable by authorized WebMCP clients.

For example, a Rich Text Editor control may expose tools such as:

- getContent
- setContent
- insertContent
- formatText
- insertImage
- insertTable
- insertLink

An AI assistant can discover these tools and invoke them based on user prompts.

```html
<script>
ej.richtexteditor.RichTextEditor.Inject(ej.richtexteditor.WebMcpRichTextEditor);

var richtexteditor = new ej.richtexteditor.RichTextEditor({
    enableWebMcp: true,
    webMcpSettings: {
        name: 'editor',
        tools: ['getContent', 'setContent', 'insertContent', 'formatText', 'insertImage', 'insertTable', 'insertLink'],
        exposeTo: ['https://www.syncfusion.com/']
    },
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', '|',
                'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', 'InsertTable', '|',
                'Undo', 'Redo']
    }
});

richtexteditor.appendTo('#richtexteditor');
</script>
```

### Step 4: Customize tool registration

Use the `webMcpSettings` property to customize how WebMCP tools are exposed to AI agents. The available settings are listed below.

| Property | Description |
|-----------|-------------|
| `name` | Prefix applied to registered tool names. If name: `editor` is specified, a tool such as `getContent` may be registered as `editor_getContent`, allowing multiple control instances to coexist without tool name conflicts. |
| `tools` | List of tool names to expose. Any supported tools not included in this list will not be registered. |
| `exposeTo` | List of trusted domains that are allowed to interact with the control through WebMCP. |

```html
<script>
ej.richtexteditor.RichTextEditor.Inject(ej.richtexteditor.WebMcpRichTextEditor);

var richtexteditor = new ej.richtexteditor.RichTextEditor({
    enableWebMcp: true,
    webMcpSettings: {
        name: 'editor',
        tools: ['getContent', 'setContent', 'insertContent', 'formatText', 'insertImage', 'insertTable', 'insertLink'],
        exposeTo: ['https://www.syncfusion.com/']
    },
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', '|',
                'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', 'InsertTable', '|',
                'Undo', 'Redo']
    }
});

richtexteditor.appendTo('#richtexteditor');
</script>
```

> Use the `exposeTo` property to restrict WebMCP access to trusted domains. This helps prevent unauthorized WebMCP clients from interacting with your control tools.

### Step 5: Monitor and control tool execution

The `beforeWebMcpToolExecute` event is triggered before a tool is executed. This event allows you to:

- Audit tool usage.
- Validate incoming requests.
- Cancel tool execution when necessary.
- Apply custom business rules and security policies.

> AI-generated requests should always be validated before executing write operations. Restrict access using `exposeTo` and perform additional authorization checks within `beforeWebMcpToolExecute` when modifying editor content.

```html
<script>
ej.richtexteditor.RichTextEditor.Inject(ej.richtexteditor.WebMcpRichTextEditor);

var richtexteditor = new ej.richtexteditor.RichTextEditor({
    enableWebMcp: true,
    webMcpSettings: {
        name: 'editor',
        tools: ['getContent', 'setContent', 'insertContent', 'formatText', 'insertImage', 'insertTable', 'insertLink'],
        exposeTo: ['https://www.syncfusion.com/']
    },
    beforeWebMcpToolExecute: function (args) {
        // Example business rule
        if (args.toolName.indexOf('setContent') !== -1 || args.toolName.indexOf('insertContent') !== -1) {
            var hour = new Date().getHours();

            if (hour < 9 || hour > 17) {
                args.cancel = true;
                console.log(
                    'Editor content can be modified only between 9:00 AM and 5:00 PM.'
                );
            }
        }
    },
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', '|',
                'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', 'InsertTable', '|',
                'Undo', 'Redo']
    }
});

richtexteditor.appendTo('#richtexteditor');
</script>
```

## Best practices

- Expose only the tools required by your application.
- Use the `name` property when multiple control instances exist on the same page.
- Configure `exposeTo` to limit access to trusted domains.
- Monitor tool activity through the `beforeWebMcpToolExecute` event.
- Apply application-specific validation before executing tool operations.

## Next steps

After successfully enabling WebMCP, you can:

- Integrate WebMCP with other Syncfusion® JavaScript (ES5) controls such as Grid, Scheduler, Chart, and Spreadsheet.
- Build AI-powered workflows that interact directly with editor content and UI elements.
- Create secure and controlled tool execution pipelines using custom validation logic.

## See also

- [Getting Started with JavaScript Rich Text Editor](https://help.syncfusion.com/rich-text-editor-sdk/javascript/rich-text-editor/getting-started)
- [WebMCP tool integration for JavaScript (ES5) controls](https://ej2.syncfusion.com/javascript/documentation/webmcp/overview)