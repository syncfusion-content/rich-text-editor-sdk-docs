---
layout: post
title: Overview of the React Rich Text Editor SDK | Syncfusion
description: Overview of the Syncfusion React Rich Text Editor SDK — what it ships, how to pick an editor, and a comparison of Rich Text Editor, Block Editor, and Markdown Editor.
platform: rich-text-editor-sdk
control: Overview
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Overview of the React Rich Text Editor SDK

The React Rich Text Editor SDK includes three editors — **Rich Text Editor**, **Block Editor**, and **Markdown Editor**. They share the same theme system, accessibility model, and Syncfusion tooling. Each editor is a separate npm package.

## SDK components

- **Themes** — Tailwind 3, Material 3, Fluent 2, Bootstrap 5.3, with light/dark variants, CSS variables, and a shared icon set. One theme package covers every installed editor.
- **React components** — `RichTextEditorComponent`, `BlockEditorComponent`. Each uses typed props, `Inject` services, and React event handlers.
- **Built-in features** — Toolbar, image / link / table dialogs, paste cleanup, undo/redo, keyboard shortcuts, RTL, and accessibility (WCAG 2.2 AA, Section 508).
- **AI tooling** — [Skills](./ai-tools/skills) and [MCP Server](./ai-tools/mcp-server) provide AI assistants with the correct APIs and theme imports.
- **State contract** — Every editor is a controlled component. Pass `value`, handle `change`. The same pattern works with `useState`, React Hook Form, Redux, Zustand, or a CRDT layer.

## Choose an editor

| Content shape | Editor | Output |
| --- | --- | --- |
| Inline formatting, images, tables, links | **Rich Text Editor** | HTML |
| Block-based documents (paragraphs, headings, lists, callouts, code, tables) | **Block Editor** | Block JSON |
| Markdown with preview or WYSIWYG surface | **Markdown Editor** | Markdown (+ HTML preview) |

The editors are independent. Install any combination and mount each on its own route.

## Framework integration

| Scenario | Start here |
| --- | --- |
| Vite + React + TypeScript app | [Quick Start](./components/rich-text-editor/quick-start) |
| Next.js (App Router, `'use client'`) | [Next.js guide](./meta-frameworks/nextjs) |
| Gatsby | [Gatsby guide](./meta-frameworks/gatsby) |
| Remix / React Router (SSR via Vite) | [Remix guide](./meta-frameworks/react-remix-app) |
| Existing React app | [Getting Started](./components/rich-text-editor/getting-started) |

SSR steps (`ssr.noExternal` for Vite, `'use client'` for the Next.js App Router) are covered in each meta-framework guide.

## Key features

### Rich Text Editor

* **Rich Formatting Tools** - Rich formatting tools provide comprehensive text styling capabilities, including fonts, font sizes, colors, text decoration, alignment, lists, hyperlinks, and paragraph formatting. They help users create well-structured and visually engaging content directly within the editor.
* **AI Assistant** - The AI Assistant helps generate, rewrite, summarize, translate, and enhance editor content. It is designed to accelerate content creation, improve writing quality, and assist users with intelligent editing suggestions.
* **Smart Editing Tools** - Smart editing tools include slash commands, @mentions, emoji picker support, format painter, and Markdown shortcuts. These features streamline common editing tasks and improve productivity during content authoring.
* **Image Upload and Insert** - Image upload and insert capabilities allow users to add images through file uploads or URLs, then resize, align, and manage them within the editor. They help create visually rich documents and articles.
* **Table Insert and Edit** - Table editing features enable users to create, resize, merge, split, and customize tables directly in the editor. They simplify the presentation of structured data and tabular information.
* **Paste Cleanup** - Paste cleanup automatically removes unwanted styles, scripts, and unnecessary markup when content is pastd from external sources. It helps maintain consistent formatting and cleaner document structure.
* **Quick Toolbar** - Quick Toolbar provides contextual actions for selected text, images, tables, and links. It allows users to access commonly used editing commands without navigating the main toolbar.
* **Import Word Documents** - Word document import support enables users to load Microsoft Word documents into the editor while preserving supported formatting and content structure. It simplifies document migration and editing workflows.
* **Export to Word and PDF** - Export functionality allows users to save editor content as Word or PDF documents. It supports content sharing, document distribution, archival, and offline access requirements.
* **XSS Protection** - XSS protection sanitizes user-generated content and helps prevent malicious scripts or unsafe markup from being rendered within the editor. It improves application security and content integrity.

### Block Editor

* **Real-time Collaboration** - Real-time collaboration enables multiple users to create and edit content simultaneously with synchronized updates across all connected clients. It helps teams work together efficiently while maintaining content consistency and reducing editing conflicts.
* **Multiple Block Types** - Multiple block types provide support for headings, paragraphs, tables, lists, checklists, quotes, callouts, dividers, code blocks, and other content structures. They allow users to create rich, organized, and flexible documents using block-based editing.
* **Slash Commands** - Slash commands allow users to quickly insert, search, or transform content blocks using an interactive `/` menu. They improve editing speed by providing keyboard-driven access to common actions and content elements.
* **Drag and Drop** - Drag-and-drop support enables users to reorder content blocks through simple pointer interactions. It provides an intuitive way to organize document structure without manual cut-and-paste operations.
* **Rich Text Formatting** - Rich text formatting allows users to apply styles such as bold, italic, underline, strikethrough, uppercase, and other text enhancements. It helps create visually structured and easy-to-read content.
* **Action Menu** - The action menu provides block-level operations such as move, duplicate, and delete. It simplifies content management by offering quick access to frequently used block actions.
* **Context Menu Support** - Context menu support enables users to access block actions through right-click interactions. It improves usability by providing convenient shortcuts for editing and content management tasks.
* **Inline Content Support** - Inline content support allows users to insert elements such as links, labels, and mentions directly within text content. It helps create connected and interactive documents without interrupting the writing flow.
* **Undo and Redo Operations** - Undo and redo operations allow users to quickly reverse or restore editing actions. They provide greater confidence during content creation by making it easy to recover from mistakes.
* **Events for Customization** - The Block Editor provides a comprehensive set of events for block creation, removal, updates, selection changes, command execution, paste operations, and mention selection. These events enable developers to customize behavior and extend editor functionality to meet application requirements.

### Markdown Editor

- **Toolbar Configuration** - It enables modifying toolbar items, their arrangement, and visibility, allowing better control over the formatting options available within the editor.
- **Insert Table** - Insert table provides a toolbar option to generate table structures within the editor.
- **Insert Image** - Insert image enables adding images into the editor using a URL and alternative text, automatically generating the corresponding Markdown syntax for embedding images.
- **Customizing Markdown syntax** - It allows defining custom format behaviors and tags, enabling flexible formatting by controlling how Markdown elements are applied and rendered.

## Next steps

- [Quick Start for the React Rich Text Editor SDK](./rich-text-editor/quick-start)
- [Block Editor — Getting Started](./block-editor/getting-started)
- [Markdown Editor — Getting Started](./markdown-editor/getting-started)
- [Built-in Themes](../common/themes.md)
- [Version Compatibility](./version-compatibility)

## See also

* [System Requirements](../common/system-requirements)
* [Browser Support](../common/browser-support)
* [Accessibility](../react/rich-text-editor/accessibility)
* [Globalization Overview](../react/rich-text-editor/globalization)
* [Licensing Overview](../common/licensing/overview)
