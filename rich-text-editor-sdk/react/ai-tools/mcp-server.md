---
layout: post
title: Syncfusion React Rich Text Editor MCP Server | AI Coding Assistant
description: Accelerate React Rich Text Editor SDK development with the Syncfusion MCP Server—access docs, APIs, and code snippets in your AI IDE.
platform: rich-text-editor-sdk
control: MCP Server
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Syncfusion<sup style="font-size:70%">&reg;</sup> React MCP Server

The MCP Server is a [Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro) service that exposes Syncfusion Rich Text Editor SDK documentation, API references, and code snippets as tools inside AI-powered IDEs. Once configured, the assistant can fetch accurate component knowledge on demand instead of guessing at imports and APIs.

## What it gives you

- **Grounded component knowledge** — accurate guidance for the Rich Text Editor, Block Editor, and Markdown Editor, including the required `Inject` services and feature modules.
- **Unlimited usage** — no request limits, time windows, or query caps.
- **Privacy-focused** — tools process each query locally and do not store prompts, code, or user data.

## Prerequisites

| Requirement | Details |
| --- | --- |
| Node.js | Version 18 or higher |
| MCP client | VS Code, Syncfusion Code Studio, Cursor, JetBrains, or any MCP-compatible IDE |
| Syncfusion API key | Get one from [syncfusion.com/account/api-key](https://syncfusion.com/account/api-key) |
| React app | Existing or new; see the [Quick Start](../rich-text-editor/quick-start) |
| License | Active Commercial, Free Community, or Free Trial |

## Using the MCP Server

After configuration, prompt the assistant to build or modify the Rich Text Editor. The assistant calls the `search_docs` tool to fetch accurate documentation and API references while generating code — no copy-paste of URLs needed.

## See also

* [Skills](./skills)
* [AI Agent Tools](./ai-agent-tools)
