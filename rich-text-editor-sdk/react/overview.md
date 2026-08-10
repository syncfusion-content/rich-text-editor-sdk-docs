---
layout: post
title: Overview of the React Rich Text Editor SDK | Syncfusion
description: Discover the Syncfusion React Rich Text Editor SDK — why to choose it, how to pick the right editor for your app, integration scenarios, state-management integration, and a feature comparison across the Rich Text Editor, Block Editor, and Markdown Editor.
platform: rich-text-editor-sdk
control: Overview
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Overview of the React Rich Text Editor SDK

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Rich Text Editor SDK is a set of three production-grade React editors — **Rich Text Editor**, **Block Editor**, and **Markdown Editor** — that share the same theme system, accessibility guarantees, and Syncfusion tooling. Each editor ships as its own npm package, so you install only what you use, and every editor works in Vite, Next.js, Gatsby, and Remix.

## Why Rich Text Editor SDK for React?

The SDK exists to remove the friction of bolting a single-purpose editor onto a React app and then maintaining it. Picking the SDK gives you:

- **Three editors, one design system.** All three editors share the same Tailwind 3 / Material 3 / Fluent 2 / Bootstrap 5.3 themes, light/dark variants, CSS variables, and icon library. A single theme package covers every editor you install.
- **Native React components.** Each editor is a first-class React component (`RichTextEditorComponent`, `BlockEditorComponent`, `MarkdownEditorComponent`) with typed props, `Inject` services, and event handlers — no wrapper around a vanilla widget.
- **Production-grade features out of the box.** Toolbar, image upload, link and table dialogs, paste cleanup, undo/redo, keyboard shortcuts, accessibility (WCAG 2.2 AA, Section 508), and right-to-left rendering are built in.
- **Optional AI tooling.** The SDK ships [Skills](./ai-tools/skills) and an [MCP Server](./ai-tools/mcp-server) that ground AI assistants in the correct APIs, `Inject` services, and theme imports for every editor.
- **Framework-agnostic docs, React-specific code.** Common topics (globalization, accessibility, licensing) live under `/common`, while React-specific setup, themes, and meta-framework guides live under `/react`.
- **One license, three editors.** A single Syncfusion license covers the Rich Text Editor, Block Editor, and Markdown Editor packages.

## Choose the right editor for your React application

The three editors target different content shapes. Pick the one that matches what your users author.

| If your users… | Use this editor | Why |
| --- | --- | --- |
| Author free-form articles, emails, or notes with inline formatting, images, tables, and links | **Rich Text Editor** | WYSIWYG HTML output, full toolbar, quick toolbar, image / audio / video dialogs, paste cleanup, and XHTML validation. |
| Build structured documents from blocks (paragraphs, headings, lists, callouts, code blocks, tables) and want slash-menu composition | **Block Editor** | Block-based document model, drag-and-drop block reordering, slash commands, and a clean block API for custom blocks. |
| Write in Markdown and want a live preview or a WYSIWYG Markdown surface | **Markdown Editor** | Bidirectional Markdown ↔ HTML, `MarkdownFormatter`, custom Markdown syntax, and a toolbar tuned for Markdown. |

> The three editors are independent. You can install one, two, or all three in the same React app and mount each on its own route or component.

## React integration scenarios

The SDK is designed for the React stacks teams actually ship. The same editor component works in each scenario — only the bootstrap and SSR configuration differ.

| Scenario | Where to start |
| --- | --- |
| New Vite + React + TypeScript app | [Quick Start](./components/rich-text-editor/quick-start) |
| Next.js (App Router, `'use client'`) | [Next.js guide](./meta-frameworks/nextjs) |
| Gatsby (static site) | [Gatsby guide](./meta-frameworks/gatsby) |
| Remix / React Router (SSR via Vite) | [Remix guide](./meta-frameworks/react-remix-app) |
| Existing React app, just add an editor | [Getting Started](./components/rich-text-editor/getting-started) |
| Server-side rendering notes (Remix, Next.js SSR) | Each meta-framework guide includes the SSR configuration step (`ssr.noExternal` for Vite, `'use client'` for the Next.js App Router). |

## State management integration

The editors expose controlled-value APIs so you can wire them into any React state layer — local `useState`, a form library, or a global store.

| Pattern | How it works |
| --- | --- |
| **Local component state** | Bind the editor's `value` prop to `useState` and update it in the `change` event handler. This is the default in the [Quick Start](./components/rich-text-editor/quick-start). |
| **Form libraries (React Hook Form, Formik)** | Register the editor as a controlled field. Use `value` for the field value and `change` to update the form state. See [Forms Support](./components/rich-text-editor/validation-security/form-support). |
| **Global stores (Redux, Zustand, Jotai)** | Read the editor value from the store and dispatch an update on `change`. Because the editor is a controlled component, store updates re-render the editor without a remount. |
| **Persistence** | Enable `enablePersistence` to write the editor's value to `localStorage` across reloads, or serialize the value to your own backend. See [State Persistence](./common/state-persistence). |
| **Collaboration / server sync** | Send the `change` payload to your backend (or a Yjs / Automerge CRDT layer) and rehydrate `value` from the server on mount. |

> Whichever layer you choose, treat the editor as a controlled component: pass `value` in and react to `change`. Avoid mutating the editor's internal DOM directly.

## Feature comparison matrix

Use this matrix to decide which editor to install. All three share the same theme, accessibility, and licensing; the differences are in the content model and the feature surface.

| Feature | Rich Text Editor | Block Editor | Markdown Editor |
| --- | --- | --- | --- |
| Content model | HTML | Blocks (paragraph, heading, list, callout, code, table, image, etc.) | Markdown |
| Output format | HTML | Block JSON (serializable) | Markdown (with HTML preview) |
| WYSIWYG | Yes | Yes | Yes (preview pane) |
| Toolbar | Full toolbar + quick toolbar | Slash menu + block toolbar | Markdown toolbar |
| Image / audio / video | Insert dialogs + file browser | Image block, embed block | Image insert |
| Tables | Table editor | Table block | Markdown table insert |
| Code blocks | Code-block tool | Code block | Fenced code blocks |
| Slash commands | — | Yes | — |
| Drag-and-drop block reordering | — | Yes | — |
| Paste cleanup | Yes | Yes | Yes |
| Undo / Redo | Yes | Yes | Yes |
| Keyboard shortcuts | Yes | Yes | Yes |
| RTL support | Yes | Yes | Yes |
| Accessibility (WCAG 2.2 AA, Section 508) | Yes | Yes | Yes |
| `enablePersistence` | Yes | Yes | Yes |
| `disableTelemetry` | Yes | Yes | Yes |
| Theme support (Tailwind 3, Material 3, Fluent 2, Bootstrap 5.3, light/dark) | Yes | Yes | Yes |
| React package | `@syncfusion/ej2-react-richtexteditor` | `@syncfusion/ej2-react-blockeditor` | `@syncfusion/ej2-react-markdowneditor` |
| Required `Inject` services | `Toolbar`, `Image`, `Link`, `HtmlEditor`, `QuickToolbar` | Block array (`ParagraphBlock`, `HeadingBlock`, `ListBlock`, …) | `Toolbar`, `Image`, `Link`, `MarkdownFormatter` |

> Where a cell shows "—", the feature is not part of that editor's model by design (for example, the Markdown Editor has no slash menu because Markdown is the source of truth).

## Next steps

- [Quick Start for the React Rich Text Editor SDK](./components/rich-text-editor/quick-start)
- [Block Editor — Getting Started](./components/block-editor/getting-started)
- [Markdown Editor — Getting Started](./components/markdown-editor/getting-started)
- [Built-in Themes](./themes/built-in-themes)
- [Version Compatibility](./version-compatibility)

## See also

* [System Requirements](../common/system-requirements)
* [Browser Support](../common/browser-support)
* [Accessibility](../common/accessibility)
* [Globalization Overview](../common/globalization/overview)
* [Licensing Overview](../common/licensing/overview)
