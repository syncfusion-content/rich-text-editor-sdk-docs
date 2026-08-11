---
layout: post
title: Syncfusion React Rich Text Editor SDK MCP Server | Syncfusion
description: Accelerate React Rich Text Editor SDK development with the Syncfusion MCP Server — access docs, APIs, code snippets, and release history in your AI IDE.
platform: rich-text-editor-sdk
control: MCP Server
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Syncfusion<sup style="font-size:70%">&reg;</sup> React Rich Text Editor SDK MCP Server

The Syncfusion<sup style="font-size:70%">&reg;</sup> MCP Server accelerates React Rich Text Editor SDK development by providing deep knowledge directly in your AI-powered IDE. [Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro) (MCP) integration enables quick access to documentation, API references, and code-generation features for the **Rich Text Editor**, **Block Editor**, and **Markdown Editor**.

> The previously available **Agentic UI Builder** (`#sf_react_ui_builder`) has been upgraded to an **Agent skill-based experience** and is no longer part of the MCP Server. The **AI Coding Assistant** (`#sf_react_assistant`) has been **renamed** to **`search_docs`** (`#search_docs`) to follow MCP naming conventions.

## Key benefits

- **Expert component knowledge** — deep understanding of all three editors in the SDK, including `Inject` services and feature modules.
- **Unlimited usage** — no request limits, time restrictions, or query caps.
- **Privacy-focused** — the tools process the user's query and do not store any content, data, or prompts.

## Installation

### Prerequisites

- **Node.js** version 18 or higher.
- A **compatible MCP client** (VS Code, Syncfusion<sup style="font-size:70%">&reg;</sup> Code Studio, Cursor, JetBrains, and so on).
- An active [Syncfusion<sup style="font-size:70%">&reg;</sup> API key](https://syncfusion.com/account/api-key).
- A **React application** (existing or new); see the [Quick Start](../components/rich-text-editor/quick-start).
- An active Syncfusion<sup style="font-size:70%">&reg;</sup> license (Commercial, Free Community, or Free Trial).

### Getting your API key

Generate the API key from the [API Key page](https://www.syncfusion.com/account/api-key) and store it in a `.txt` or `.key` file. The saved file is referenced in the MCP configuration:

```json
"env": {
  "Syncfusion_API_Key_Path": "D:\\syncfusion-key.txt"
}
```

> Alternatively, set the API key directly using `"Syncfusion_API_Key": "YOUR_API_KEY"` in the env configuration. Using a file path is recommended to keep the key out of source control.

### Install SDK packages

Install only the editors your project uses. Each tab installs one editor with the matching theme.

{% tabs %}
{% highlight bash tabtitle="Rich Text Editor" %}

npm install @syncfusion/ej2-react-richtexteditor @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% highlight bash tabtitle="Block Editor" %}

npm install @syncfusion/ej2-react-blockeditor @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% highlight bash tabtitle="Markdown Editor" %}

npm install @syncfusion/ej2-react-markdowneditor @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% endtabs %}

### Configure the MCP client

Create the configuration file for your IDE. Replace `YOUR_API_KEY_FILE_PATH` with the path to your API key file.

{% tabs %}
{% highlight bash tabtitle="VS Code" %}

// Create a `.vscode/mcp.json` file in your workspace:

{
  "servers": {
    "sf-react-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@syncfusion/react-mcp@latest"],
      "env": {
        "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH"
        // or
        // "Syncfusion_API_Key": "YOUR_API_KEY"
      }
    }
  }
}

{% endhighlight %}
{% highlight bash tabtitle="Code Studio" %}

// Create a `.codestudio/mcp.json` file in your workspace:

{
  "servers": {
    "sf-react-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@syncfusion/react-mcp@latest"],
      "env": {
        "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH"
        // or
        // "Syncfusion_API_Key": "YOUR_API_KEY"
      }
    }
  }
}

// After creating the file, click Start in the inline action to install the server.

{% endhighlight %}
{% highlight bash tabtitle="Cursor" %}

// Create a `.cursor/mcp.json` file in your workspace:

{
  "mcpServers": {
    "sf-react-mcp": {
      "command": "npx",
      "args": ["-y", "@syncfusion/react-mcp@latest"],
      "env": {
        "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH"
        // or
        // "Syncfusion_API_Key": "YOUR_API_KEY"
      }
    }
  }
}

{% endhighlight %}
{% highlight bash tabtitle="JetBrains" %}

// Open AI Assistant chat, type /, and select Add Command.
// Click ➕ Add on the MCP settings page.
// Choose STDIO and select JSON configuration:

{
  "mcpServers": {
    "sf-react-mcp": {
      "command": "npx.cmd",
      "args": [
        "-y",
        "@syncfusion/react-mcp@latest"
      ],
      "env": {
        "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH"
        // or
        // "Syncfusion_API_Key": "YOUR_API_KEY"
      }
    }
  }
}

// Click OK, then click Apply. The server starts and shows Connected status.

{% endhighlight %}
{% endtabs %}

**Verifying installation:** check your editor's MCP Server list for `sf-react-mcp` with a **Connected** status.

## Common use cases

Use the `search_docs` tool to get contextual guidance, code snippets, and configuration examples for any editor in the SDK. Tools can be invoked directly, as shown below, for specific needs. Alternatively, the AI assistant automatically selects the most appropriate tool based on the request.

### Get started

{% promptcards %}
{% promptcard Rich Text Editor setup %}
#search_docs How do I set up the Syncfusion React Rich Text Editor with a custom toolbar and form integration?
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Block Editor setup %}
#search_docs How do I set up the Syncfusion React Block Editor with the default blocks and slash menu?
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Markdown Editor setup %}
#search_docs How do I set up the Syncfusion React Markdown Editor with a custom toolbar and MarkdownFormatter?
{% endpromptcard %}
{% endpromptcards %}

### Implement features

{% promptcards %}
{% promptcard Rich Text Editor features %}
#search_docs How do I add image upload, table support, and source code editing to the Rich Text Editor?
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Block Editor features %}
#search_docs How do I add custom blocks and a slash-menu command to the Block Editor?
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Markdown Editor features %}
#searchdocs How do I switch between Markdown and rich-text view in the Markdown Editor?
{% endpromptcard %}
{% endpromptcards %}

### Troubleshooting

{% promptcards %}
{% promptcard Rich Text Editor issues %}
#search_docs Why isn't the Rich Text Editor toolbar showing my custom buttons?
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Block Editor issues %}
#search_docs Why aren't my custom Block Editor blocks rendering or being saved?
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Markdown Editor issues %}
#search_docs Why isn't the Markdown Editor rendering my Markdown content correctly?
{% endpromptcard %}
{% endpromptcards %}

## Best practices

- **Be specific** — name the editor (Rich Text Editor, Block Editor, or Markdown Editor) in your query.
- **Provide context** — include React version, expected outcome, and any requirements.
- **Use descriptive queries** — avoid one-line prompts; detail improves accuracy.
- **Stay consistent** — keep file organization, naming, and coding standards consistent.
- **Start fresh for new topics** — begin a new chat when switching editors or tasks to keep context clean.
- **Use advanced AI models** — for best results, use Claude, GPT, or Gemini latest-generation models.
- **Minimize active tools** — limit the number of active MCP tools in your IDE to prevent tool-selection ambiguity.

> Always review AI-generated code before using it in production.

## Troubleshooting

| Issue | Solution |
| --- | --- |
| **Server failed to start** | Update to Node.js 18+, verify JSON syntax in the config file, and restart your IDE. |
| **Invalid API key** | Verify the key is active at the [Syncfusion Account Page](https://syncfusion.com/account/api-key). |
| **Incorrect API key config** | For the file path: verify file location and content. For inline key: confirm the key is correctly set. |
| **Wrong config file location** | VS Code: `.vscode/mcp.json` • Code Studio: `.codestudio/mcp.json` • Cursor: `.cursor/mcp.json` in the workspace root. |
| **Check IDE logs** | VS Code / Code Studio: Output panel → "MCP" • Cursor: Developer Console for MCP errors. |
| **Clear npm cache** | Run `npx clear-npx-cache` and restart your IDE to resolve package caching issues. |

## Privacy and security

- The tools process requests according to the user's query without storing any content or prompts.
- User prompts are not stored or used for other purposes.
- Prompts are not used to train Syncfusion models.
- The assistant provides context; the final output is produced by the selected AI model.

The MCP Server is a knowledge bridge between your AI model and Syncfusion-specific expertise, with privacy and security built in.

## See also

- [AI-Powered Development](./ai-agent-tools)
- [Skills](./skills)
- [Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro)
- [Release Notes](./release-notes)