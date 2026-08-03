---
layout: post
title: AI Agent Tools for React Rich Text Editor SDK | Syncfusion
description: Learn how to use AI agent tools with the Syncfusion React Rich Text Editor SDK to generate accurate, context-aware code in AI-powered IDEs.
platform: rich-text-editor-sdk
control: AI Agent Tools
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# AI Agent Tools

Many developers use AI assistants to accelerate their Syncfusion<sup style="font-size:70%">&reg;</sup> development workflows. Without proper context, AI can generate code that looks correct but fails at runtime — often due to incorrect import paths, missing `Inject` services, or deprecated API calls. Providing AI access to Syncfusion<sup style="font-size:70%">&reg;</sup> documentation and tooling significantly improves the accuracy of generated Rich Text Editor code.

## Three ways to use AI with the Rich Text Editor SDK

### Browser-based AI

Browser-based AI platforms (ChatGPT, Claude, Gemini) with built-in web search can read Syncfusion<sup style="font-size:70%">&reg;</sup> documentation in real time.

**How to get the best results:**
1. Include the specific Rich Text Editor documentation URL in your prompt.
2. Be specific about requirements — component (Rich Text Editor / Block Editor / Markdown Editor), features needed, framework (React), TypeScript or JavaScript.
3. Reference exact documentation pages.

### IDE-based AI (Skills & MCP Server)

Inside AI-powered IDEs, use the [Skills](./skills) package or the [MCP Server](./mcp-server) to ground the assistant in accurate React Rich Text Editor SDK knowledge, including required module injection.

### API-based AI

Integrate Syncfusion<sup style="font-size:70%">&reg;</sup> knowledge into your own tooling via the MCP Server's `search_docs` tool.

## Package installation

Before generating code, ensure the Rich Text Editor package is installed:

```bash
npm install @syncfusion/ej2-react-richtexteditor
```

## See also

* [Skills](./skills)
* [MCP Server](./mcp-server)
