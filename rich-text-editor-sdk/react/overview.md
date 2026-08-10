---
layout: post
title: Overview of the React Rich Text Editor SDK | Syncfusion
description: A short, information-dense overview of the Syncfusion React Rich Text Editor SDK — what it ships, how to pick the right editor, how to integrate it, and a single comparison table for Rich Text Editor, Block Editor, and Markdown Editor.
platform: rich-text-editor-sdk
control: Overview
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Overview of the React Rich Text Editor SDK

The React Rich Text Editor SDK includes three editors — **Rich Text Editor**, **Block Editor**, and **Markdown Editor**. They share the same theme system, accessibility model, and Syncfusion tooling. Each editor is a separate npm package.

```bash
npm install @syncfusion/ej2-react-richtexteditor
npm install @syncfusion/ej2-react-blockeditor
npm install @syncfusion/ej2-react-markdowneditor
npm install @syncfusion/ej2-tailwind3-theme
```

## SDK components

- **Themes** — Tailwind 3, Material 3, Fluent 2, Bootstrap 5.3, with light/dark variants, CSS variables, and a shared icon set. One theme package covers every installed editor.
- **React components** — `RichTextEditorComponent`, `BlockEditorComponent`, `MarkdownEditorComponent`. Each uses typed props, `Inject` services, and React event handlers.
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
| New Vite + React + TypeScript app | [Quick Start](./components/rich-text-editor/quick-start) |
| Next.js (App Router, `'use client'`) | [Next.js guide](./meta-frameworks/nextjs) |
| Gatsby | [Gatsby guide](./meta-frameworks/gatsby) |
| Remix / React Router (SSR via Vite) | [Remix guide](./meta-frameworks/react-remix-app) |
| Existing React app | [Getting Started](./components/rich-text-editor/getting-started) |

SSR steps (`ssr.noExternal` for Vite, `'use client'` for the Next.js App Router) are covered in each meta-framework guide.

## State management

Bind `value` to your state and update on `change`. The same pattern applies across all three editors.

| Pattern | Wiring |
| --- | --- |
| Local `useState` | Default in the [Quick Start](./components/rich-text-editor/quick-start). |
| React Hook Form / Formik | Register the editor as a controlled field. See [Forms Support](./components/rich-text-editor/validation-security/form-support). |
| Redux / Zustand / Jotai | Read the value from the store, dispatch an update on `change`. The editor re-renders without a remount. |
| Persistence | Set `enablePersistence` for `localStorage`, or serialize to your backend. See [State Persistence](./common/state-persistence). |
| Collaboration | Send the `change` payload to your backend or a Yjs / Automerge CRDT, then rehydrate `value` from the server. |

Do not mutate the editor's internal DOM. State always flows through `value` and `change`.

## Feature comparison

Theme, accessibility, licensing, and telemetry are the same across all three editors. The differences are in the content model and feature surface.

| Feature | Rich Text Editor | Block Editor | Markdown Editor |
| --- | --- | --- | --- |
| Content model | HTML | Block tree | Markdown |
| WYSIWYG | Yes | Yes | Yes (preview pane) |
| Toolbar | Full + quick toolbar | Slash menu + block toolbar | Markdown toolbar |
| Image / audio / video | Insert dialogs + file browser | Image block, embed block | Image insert |
| Tables | Table editor | Table block | Markdown table insert |
| Code blocks | Code-block tool | Code block | Fenced code blocks |
| Slash commands | — | Yes | — |
| Block drag-and-drop | — | Yes | — |
| Paste cleanup | Yes | Yes | Yes |
| Undo / Redo | Yes | Yes | Yes |
| Keyboard shortcuts | Yes | Yes | Yes |
| RTL | Yes | Yes | Yes |
| Accessibility (WCAG 2.2 AA, Section 508) | Yes | Yes | Yes |
| `enablePersistence` | Yes | Yes | Yes |
| `disableTelemetry` | Yes | Yes | Yes |
| Theme support (Tailwind 3, Material 3, Fluent 2, Bootstrap 5.3, light/dark) | Yes | Yes | Yes |
| React package | `@syncfusion/ej2-react-richtexteditor` | `@syncfusion/ej2-react-blockeditor` | `@syncfusion/ej2-react-markdowneditor` |
| Required `Inject` services | `Toolbar`, `Image`, `Link`, `HtmlEditor`, `QuickToolbar` | Block array (`ParagraphBlock`, `HeadingBlock`, `ListBlock`, …) | `Toolbar`, `Image`, `Link`, `MarkdownFormatter` |

A "—" means the feature is not part of that editor's model. The Markdown Editor has no slash menu because Markdown is the source of truth.

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
