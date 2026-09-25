---
layout: post
title: Content Serialization in TypeScript Headless Editor | Syncfusion
description: Learn how the Syncfusion TypeScript Headless Editor reads and writes content as a document tree, JSON, HTML, and plain text using its public serialization APIs.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Content Serialization in TypeScript Headless Editor

The Headless Editor exposes a small, focused set of public APIs for reading and writing the editor's content as a document tree, JSON, HTML, and plain text. This page is a concise reference for those entry points; the detailed behavior, payload shapes, and examples for each direction live in the dedicated content pages.

This page covers:

- [Public Serialization Entry Points](#public-serialization-entry-points) – a single reference table for the read/write APIs.
- [JSON Serialization](#json-serialization) – the canonical JSON round-trip pattern.
- [HTML Serialization](#html-serialization) – the canonical HTML read/write paths.

## Public Serialization Entry Points

The Headless Editor exposes five public methods for reading and writing content. Detailed signatures, payloads, and examples are documented in the linked pages; this table gives you a single-glance overview of the available direction and format.

| API | Direction | Format | Purpose | See details |
| --- | --- | --- | --- | --- |
| `editor.getDocument()` | Read | `DocumentRoot` | Read the current document as a Syncfusion-native document tree. | [JSON Content](json-content#exporting-json-content), [Working with Content](working-with-content#get-content) |
| `editor.setDocument(doc)` | Write | `DocumentRoot` | Replace the current document with a `DocumentRoot`; validates against the active schema. | [JSON Content](json-content#loading-json-content), [Working with Content](working-with-content#set-content) |
| `editor.getHtml()` | Read | `string` (HTML) | Serialize the current document to an HTML string using the active schema and registered extensions. | [HTML Content](html-content#exporting-html-content), [Working with Content](working-with-content#get-content) |
| `editor.setContent(html)` | Write | `string` (HTML) | Replace the current document with parsed HTML. | [HTML Content](html-content#loading-html-content), [Working with Content](working-with-content#set-content) |
| `editor.getText()` | Read | `string` (plain text) | Read the current document as plain text with formatting stripped. | [Working with Content](working-with-content#get-content) |

## JSON Serialization

JSON serialization in the Headless Editor uses the standard JavaScript `JSON.stringify` and `JSON.parse` helpers around the public `DocumentRoot` returned by `getDocument()`. The canonical round-trip is:

```text
editor.getDocument()
        ↓
JSON.stringify(...)
        ↓
stored JSON
        ↓
JSON.parse(...)
        ↓
editor.setDocument(...)
```

`editor.getDocument()` returns the current document as a `DocumentRoot` ready for `JSON.stringify`. `editor.setDocument(...)` accepts the parsed document when loading it back into the editor.

N> Headless Editor does not expose a separate public serializer/deserializer class. The internal `DocumentSerializer` is not part of the public API.

## HTML Serialization

`editor.getHtml()` is the public HTML serialization API. It returns the current document as an HTML string according to the active schema and registered extensions.

HTML loading is handled by `editor.setContent(html)` on a mounted editor and by `EditorConfig.content` at editor creation. Detailed HTML loading and serialization behavior is documented in [HTML Content](html-content).