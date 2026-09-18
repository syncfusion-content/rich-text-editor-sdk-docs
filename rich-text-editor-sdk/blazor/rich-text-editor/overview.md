---
layout: post
title: Blazor Rich Text Editor Overview and Features | Syncfusion
description: Learn how to use Blazor Rich Text Editor for creating rich content with HTML and Markdown modes, toolbars, table, import-export, and mail merge.
canonical_url: https://www.syncfusion.com/rich-text-editor-sdk/blazor-rich-text-editor
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
---

# Overview in Blazor Rich Text Editor

## Introduction to Syncfusion Blazor Rich Text Editor

The [Blazor Rich Text Editor](https://www.syncfusion.com/rich-text-editor-sdk/blazor-rich-text-editor) is a powerful and feature-rich UI component designed for creating and editing rich text content with high performance and flexibility. It offers a comprehensive set of enterprise-grade capabilities, including HTML and Markdown editing modes, extensive formatting tools, image, audio, and video embedding, table manipulation, and import-export across HTML, RTF, PDF, and Word formats. Built for scalability, it enables developers to create responsive content editing experiences for emails, CMS editors, and form-heavy applications with ease.

## Common use cases

The [Blazor Rich Text Editor](https://www.syncfusion.com/rich-text-editor-sdk/blazor-rich-text-editor) is ideal for a wide range of business scenarios:

| Use Case | Description | Key Features |
|----------|-------------|--------------|
| **Email & Messaging Composers** | Draft formatted emails with rich text, images, and links | Toolbar, Insert Image, Link Manipulation |
| **CMS Content Authoring** | Create and edit articles, blogs, and landing pages | Editor Modes, Formatting, Import/Export |
| **Customer Support Tickets** | Capture detailed issue descriptions with attachments | Image Upload, Form Validation |
| **Document Management** | Import, edit, and export documents in standard formats | Import/Export, Paste Cleanup |
| **Mail Merge Workflows** | Populate templates with dynamic fields for bulk sending | Mail Merge Integration, Mentions |
| **Collaborative Notes & Wikis** | Build internal knowledge bases with rich formatting | Code Blocks, Tables, Slash Commands |

## Editor modes & layouts

The [Blazor Rich Text Editor](https://www.syncfusion.com/rich-text-editor-sdk/blazor-rich-text-editor) supports multiple editing modes and layout configurations to fit different application needs:

| Feature | Purpose | Key Benefit |
|---------|---------|-------------|
| **[HTML editor](./editor-modes#html-editor)** | Edit content as rich HTML with a live WYSIWYG view | Familiar word-processor experience |
| **[Markdown editor](./editor-modes#markdown-editor)** | Edit content in Markdown syntax | Lightweight, developer-friendly writing |
| **[Iframe Editor](./iframe)** | Isolate the content area in an iframe | Contained, secure editing |
| **[Inline Editor](./inline-mode)** | Edit content in place without a framed container | Natural in-context editing |
| **[Resizable Editor](./resizable-editor)** | Drag to resize the editor in real time | Custom dimensions on demand |
| **[Configuring the toolbar position](./toolbar-position#configuring-the-toolbar-position)** | Place the toolbar at the top or bottom | Flexible layouts |

## Toolbars & tools

The toolbar is the central hub of the editing experience and is fully configurable:

**Toolbar types**

| Feature | Purpose | Key Benefit |
|---------|---------|-------------|
| **[Expand toolbar](./toolbar#expand-toolbar)** | Show all tools in rows that wrap | All tools at one click |
| **[Multi-row toolbar](./toolbar#multi-row-toolbar)** | Fixed tools arranged across multiple rows | Predictable tool layout |
| **[Scrollable toolbar](./toolbar#scrollable-toolbar)** | Scroll horizontally to reach all tools | Compact width usage |
| **[Popup toolbar](./toolbar#popup-toolbar)** | Show tools in a popup on demand | Minimal footprint |
| **[Configuring a Floating toolbar](./toolbar#configuring-a-floating-toolbar)** | Dock the toolbar on scroll | Persistent tool access |

**Quick toolbars**

| Feature | Purpose | Key Benefit |
|---------|---------|-------------|
| **[Image quick toolbar](./quick-toolbar#image-quick-toolbar)** | Show image actions on selection | Fast image edits |
| **[Link quick toolbar](./quick-toolbar#link-quick-toolbar)** | Show link actions on selection | Fast link edits |
| **[Table quick toolbar](./quick-toolbar#table-quick-toolbar)** | Show table actions on selection | Fast table edits |
| **[Text quick toolbar](./quick-toolbar#text-quick-toolbar)** | Show text actions on selection | Fast formatting |

**Formatting & content tools**

| Feature | Purpose | Key Benefit |
|---------|---------|-------------|
| **[Built-in Tools](./tools/built-in-tools)** | Use the complete set of predefined editing tools | Out-of-the-box productivity |
| **[Text Formatting](./tools/text-formatting)** | Apply headings, paragraphs, quotes, and lists | Structured documents |
| **[Font Styling](./tools/styling-tools)** | Control font family, size, color, and background | Branded content |
| **[Format Painter](./tools/format-painter)** | Copy formatting from one selection to another | Efficient formatting |
| **[Custom Toolbar Items](./tools/custom-tool)** | Add application specific tools | Tailored experiences |
| **[Code Blocks](./tools/code-block)** | Insert highlighted code snippets | Technical documentation |
| **[Fullscreen Mode](./tools/fullscreen-tool)** | Expand the editor to the full screen | Distraction-free writing |
| **[Execute Command](./exec-command)** | Run editor commands programmatically | Automation-friendly API |

## Rich media content

The [Blazor Rich Text Editor](https://www.syncfusion.com/rich-text-editor-sdk/blazor-rich-text-editor) enables comprehensive media embedding so content can include rich assets:

| Feature | Purpose | Key Benefit |
|---------|---------|-------------|
| **[Insert Images](./tools/insert-image)** | Upload and embed images in content | Visual content |
| **[Insert audio](./tools/audio)** | Embed audio players in content | Audio content and notes |
| **[Insert video](./tools/video)** | Embed video players in content | Rich media storytelling |
| **[Links](./tools/link-manipulation)** | Insert and edit hyperlinks | Connected content |
| **[Table Manipulation](./tools/table-manipulation)** | Create and edit data tables | Structured data in documents |
| **[Upload options](./image#upload-options)** | Configure how images upload to servers | Controlled asset handling |

## Productivity integrations

The [Blazor Rich Text Editor](https://www.syncfusion.com/rich-text-editor-sdk/blazor-rich-text-editor) integrates with supporting features that speed up content creation:

| Feature | Purpose | Key Benefit |
|---------|---------|-------------|
| **[Mentions](./mention-integration)** | Tag users with @mention suggestions | Person-aware content |
| **[Enabling the slash menu](./slash-commands#enabling-the-slash-menu)** | Insert blocks by typing (/) | Rapid block insertion |
| **[Mail Merge](./mail-merge)** | Merge dynamic fields into templates | Bulk personalized content |
| **[Paste cleanup settings](./paste-cleanup#paste-cleanup-settings)** | Control how pasted content is sanitized | Clean, consistent content |
| **[Clipboard Clean-up](./clipboard-cleanup)** | Sanitize content copied from external sources | Safe cross-app pasting |
| **[Undo and Redo](./undo-redo-manager)** | Configure undo/redo history behavior | Forgiving editing |
| **[Enter key customization](./enter-key#enter-key-customization)** | Control line and paragraph breaks | Predictable typing flow |

## Content management

The [Blazor Rich Text Editor](https://www.syncfusion.com/rich-text-editor-sdk/blazor-rich-text-editor) provides comprehensive capabilities for controlling, validating, and moving content:

**Value handling**

| Feature | Purpose | Key Benefit |
|---------|---------|-------------|
| **[Auto-save](./data-binding#auto-save)** | Persist edited content automatically | No lost work |
| **[Get editor content](./data-binding#get-editor-content)** | Retrieve formatted content programmatically | Integration ready |
| **[Character count and limit enforcement](./miscellaneous#character-count-and-limit-enforcement)** | Display and cap content length | Bounded input |
| **[Large HTML Content Processing](./enable-chunk-messages)** | Handle very large content efficiently | Performance at scale |

**Import & Export**

| Feature | Purpose | Key Benefit |
|---------|---------|-------------|
| **[Import to HTML file](./import-export#import-to-html-file)** | Load HTML content into the editor | Web content reuse |
| **[Import to RTF file](./import-export#import-to-rtf-file)** | Load RTF documents | Desktop document reuse |
| **[Importing content from Microsoft Word](./import-export#importing-content-from-microsoft-word)** | Load Word documents | Office interop |
| **[Export to RTF file](./import-export#export-to-rtf-file)** | Produce RTF documents | Word-compatible sharing |
| **[Export to HTML file](./import-export#export-to-html-file)** | Produce HTML files | Web publishing |
| **[Export to PDF / Microsoft Word](./import-export#export-to-pdf--microsoft-word)** | Produce PDF and Word documents | Professional document output |

**Validation & access control**

| Feature | Purpose | Key Benefit |
|---------|---------|-------------|
| **[Forms Support](./form-validation)** | Use the editor inside Blazor EditForms with validation | Integrated form workflows |
| **[Validation attributes](./form-validation#validation-attributes)** | Enforce content rules with Data Annotations | Required-content enforcement |
| **[Validating attributes](./xhtml-validation#validating-attributes)** and **[Validating HTML elements](./xhtml-validation#validating-html-elements)** | Sanitize content for XHTML safety | Secure output |
| **[Read-only mode](./read-only-mode#read-only-mode)** | Display content without editing | Safe display mode |

## Globalization & accessibility

The [Blazor Rich Text Editor](https://www.syncfusion.com/rich-text-editor-sdk/blazor-rich-text-editor) is fully accessible and compliant with Web Content Accessibility Guidelines (WCAG) standards:

- **[Localization](./globalization#localization)** - Translate the UI into different languages
- **[WAI-ARIA attributes](./accessibility#wai-aria-attributes)** - Accessible roles and attributes for the editor UI
- **[Keyboard interaction](./accessibility#keyboard-interaction)** - Complete editor operation via keyboard; shortcuts detailed in [Keyboard shortcuts](./keyboard-support#html-editor-shortcut-keys)
- **[Ensuring accessibility](./accessibility#ensuring-accessibility)** - axe-core validation guidance
- **[Custom key config](./keyboard-support#custom-key-config)** - Define custom keyboard shortcuts

## Performance & advanced features

The [Blazor Rich Text Editor](https://www.syncfusion.com/rich-text-editor-sdk/blazor-rich-text-editor) includes sophisticated capabilities designed for complex enterprise scenarios:

| Feature | Purpose | Use Case | Key Benefit |
|---------|---------|----------|-------------|
| **[WebAssembly Performance](./webassembly-performance)** | Rendering optimization guidance | Optimized WASM responsiveness | Faster Blazor WASM apps |
| **[Style and Appearance](./style)** | Style placeholder, content area, and borders | Themed editors | Complete visual control |
| **[Style Encapsulation](./style-encapsulation#encapsulation-modes)** | Control how styles apply to editor content | CSS isolation in Blazor | Predictable styling |
| **[HttpClientInstance](./http-client-instance)** | Reuse a shared HttpClient for server actions | Upload and save operations | Efficient networking |
| **[Events](./events)** | Handle toolbar, dialog, upload, and focus events | Custom workflows | Deep integration points |
| **[Render Blazor Rich Text Editor in Dialog](./tools/dialogSettings)** | Host the editor inside a Dialog component | Modal editing flows | Flexible hosting |

## System requirements

The [Blazor Rich Text Editor](https://www.syncfusion.com/rich-text-editor-sdk/blazor-rich-text-editor) works with:

- **Blazor Version**: .NET 8.0 or higher
- **Hosting Models**: Blazor Server, Blazor WebAssembly, Blazor Web App
- **Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Android Chrome

## Quick links

**Getting Started:**
- [Blazor Web App Guide](./getting-started-webapp)
- [Blazor Server App Guide](./getting-started-with-server-app)
- [Blazor WebAssembly Guide](./getting-started)
- [Blazor Hybrid MAUI App Guide](./getting-started-with-maui-app)

**Popular Features:**
- [Toolbar Types](./toolbar) - Expand, multi-row, scrollable, and popup toolbars
- [Editor Modes](./editor-modes) - HTML and Markdown editing
- [Insert Images](./tools/insert-image) - Upload and embed images
- [Quick Toolbar](./quick-toolbar) - Contextual quick actions
- [Import and Export](./import-export) - HTML, RTF, PDF, and Word formats
- [Mail Merge](./mail-merge) - Dynamic field population

## Support & Resources

- **Questions?** Visit the [Syncfusion Support Portal](https://www.syncfusion.com/support)
- **Code Examples?** Browse [Rich Text Editor](https://www.syncfusion.com/rich-text-editor-sdk/blazor-rich-text-editor) and [Samples](https://blazor.syncfusion.com/demos/rich-text-editor/overview)
- **API Details?** See [Rich Text Editor API Reference](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.RichTextEditor.SfRichTextEditor.html)
- **Community?** Join the [Syncfusion Community Forum](https://www.syncfusion.com/forums/blazor-components)
- **What's New?** Check [Release Notes](https://help.syncfusion.com/rich-text-editor-sdk/release-notes)
