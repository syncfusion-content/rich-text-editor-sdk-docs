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

AI assistants can generate Rich Text Editor code, but without the right context they often produce code that looks correct and fails at runtime — wrong import paths, missing `Inject` services, or deprecated APIs. Grounding the assistant in Syncfusion's component knowledge eliminates most of these errors.

There are three ways to bring Syncfusion context to an AI workflow.

## Browser-based AI

ChatGPT, Claude, and Gemini can read Syncfusion documentation in real time when web search is enabled.

**Get better results by:**

1. Pasting the relevant Rich Text Editor documentation URL into the prompt.
2. Naming the exact component — Rich Text Editor, Block Editor, or Markdown Editor.
3. Specifying framework (React) and language (TypeScript or JavaScript).
4. Listing the features you need (toolbar items, image upload, link dialog, and so on).

## IDE-based AI: Skills and MCP Server

Inside AI-powered IDEs, install the [Skills](./skills) package or the [MCP Server](./mcp-server) to ground the assistant in React Rich Text Editor SDK knowledge — including the required `Inject` services.

Use Skills when the IDE supports the Skills CLI. Use the MCP Server when the IDE supports the Model Context Protocol (VS Code, Syncfusion Code Studio, Cursor, JetBrains).

## API-based AI

Integrate Syncfusion knowledge into your own tools by calling the MCP Server's `search_docs` tool over the Model Context Protocol. This is useful for CI assistants, internal chatbots, or any custom pipeline that needs grounded answers.

## Before generating code

Install the Rich Text Editor and its matching theme package so the assistant can suggest valid imports and styling:

```bash
npm install @syncfusion/ej2-react-richtexteditor @syncfusion/ej2-tailwind3-theme
```

## See also

* [Skills](./skills)
* [MCP Server](./mcp-server)
