# HeadlessEditor API Reference — Part 2

This file is the second part of the API reference for the Syncfusion TypeScript Headless Editor. It covers the schema, node/mark definitions, content expressions, and command payloads that define the editor's content model. Sourced from the Syncfusion API documentation under `https://ej2.syncfusion.com/documentation/api/headless-editor/`.

> **Source of truth.** The API documentation pages are authoritative for the method signatures, parameter descriptions, and return types. When this file conflicts with the local UG reference files, the API documentation wins for API surface; the local UG files win for conceptual explanations and example usage.

## Table of Contents

- [Schema building blocks](#schema-building-blocks)
  - [AttributeDefinition](#attributedefinition)
  - [NodeGroup](#nodegroup)
  - [NodeDefinition](#nodedefinition)
  - [MarkDefinition](#markdefinition)
- [Content expressions](#content-expressions)
  - [NodeContent](#nodecontent)
- [File upload registry](#file-upload-registry)
  - [FileHandler](#filehandler)
  - [PendingFileUpload](#pendingfileupload)
- [Extension options](#extension-options)
  - [CalloutExtensionOptions](#calloutextensionoptions)
  - [CalloutVariant](#calloutvariant)
  - [CodeBlockOptions](#codeblockoptions)
  - [CollapsibleExtensionOptions](#collapsibleextensionoptions)
- [Command payloads](#command-payloads)
  - [SetHighlightPayload](#sethighlightpayload)
  - [SetColorPayload](#setcolorpayload)
  - [SetFontFamilyPayload](#setfontfamilypayload)
  - [SetFontSizePayload](#setfontsizepayload)
  - [SetHeadingPayload](#setheadingpayload)
  - [IndentCodeBlockPayload](#indentcodeblockpayload)
  - [OutdentCodeBlockPayload](#outdentcodeblockpayload)
  - [CollapsePayload](#collapsepayload)
  - [ExpandPayload](#expandpayload)

## Schema building blocks

### AttributeDefinition

`AttributeDefinition` — describes a typed attribute on a node or mark.

| Property | Type | Description |
|----------|------|-------------|
| `default` | `unknown` | Default value — required so PM schema always has a fallback. |
| `name` | `string` | Attribute name as it appears in `EditorNode.attrs`. |
| `required` | `boolean` | If `true`, the attribute must be supplied explicitly; no default is used. |
| `values` | `string[]` | Allowed values when `type` is `'enum'`. Must be non-empty when `type` is `'enum'`. |

### NodeGroup

`NodeGroup` — semantic grouping for a node type. Used in content expressions to refer to groups rather than specific types. Multiple groups can be combined with a space (e.g. `'block list'`) following ProseMirror's group convention, allowing generic queries across all list nodes.

Enum values: `block`, `inline`, `container`, `root`, `block list`, `list`.

### NodeDefinition

`NodeDefinition` — describes a node type in the Syncfusion schema. Compiled to a PM `NodeSpec` by `PMSchemaAdapter`.

| Property | Type | Description |
|----------|------|-------------|
| `attrs` | `AttributeDefinition[]` | Typed attribute definitions for this node. |
| `content` | `NodeContent` | Content rule — what child nodes are allowed. |
| `group` | `NodeGroup` | Semantic group this node belongs to. |
| `inline` | `boolean` | Whether this node is an inline (leaf) node. |
| `leaf` | `boolean` | Whether this node is a leaf with no content (e.g. image, hr). |
| `name` | `string` | Unique node type name (e.g. `'paragraph'`, `'heading'`, `'table'`). |

### MarkDefinition

`MarkDefinition` — describes a mark type in the Syncfusion schema. Compiled to a PM `MarkSpec` by `PMSchemaAdapter`.

| Property | Type | Description |
|----------|------|-------------|
| `attrs` | `AttributeDefinition[]` | Typed attribute definitions for this mark. |
| `excludes` | `string[]` | Marks that cannot coexist with this mark. Stored as an array here; compiled to a space-separated string by `PMSchemaAdapter` for PM's `MarkSpec.excludes`. |
| `inclusive` | `boolean` | Whether the mark extends to cover text inserted at its boundary. Defaults to `true` (inclusive) per ProseMirror convention. |
| `name` | `string` | Unique mark type name (e.g. `'bold'`, `'italic'`, `'link'`). |
| `spanning` | `boolean` | Whether the mark spans across block boundaries. |

## Content expressions

### NodeContent

`NodeContent` — fluent builder for content expressions.

Examples:

| Expression | Compiles to |
|------------|-------------|
| `NodeContent.block().oneOrMore()` | `block+` |
| `NodeContent.inline().zeroOrMore()` | `inline*` |
| `NodeContent.text().optional()` | `text?` |
| `NodeContent.node('tableRow').exactly(3)` | `tableRow{3}` |
| `NodeContent.sequence(NodeContent.node('tableRow').oneOrMore(), NodeContent.node('caption').optional())` | `tableRow+ caption?` |

#### Methods

| Method | Description | Returns |
|--------|-------------|---------|
| `atLeast(n)` | At least `n` — compiles to `name{n,}`. | `NodeContent` |
| `exactly(n)` | Exactly `n` — compiles to `name{n}`. | `NodeContent` |
| `oneOrMore()` | One or more — compiles to `name+`. | `NodeContent` |
| `optional()` | Zero or one — compiles to `name?`. | `NodeContent` |
| `zeroOrMore()` | Zero or more — compiles to `name*`. | `NodeContent` |
| `block()` | Matches any node in the `'block'` group. | `NodeContent` |
| `choice(parts)` | Choice combinator — compiles child expressions separated by `\|`. When a quantifier is applied (e.g. `.oneOrMore()`), the group is automatically wrapped in parentheses: `(A \| B)+`. | `NodeContent` |
| `inline()` | Matches any node in the `'inline'` group. | `NodeContent` |
| `node(name)` | Matches a specific named node type. | `NodeContent` |
| `sequence(parts)` | Sequence combinator — compiles child expressions separated by spaces. When a quantifier is applied (e.g. `.oneOrMore()`), the group is automatically wrapped in parentheses: `(A B)+`. | `NodeContent` |
| `text()` | Matches a text leaf node. | `NodeContent` |

## File upload registry

### FileHandler

`FileHandler` — generic file upload service. Manages file lifecycle: paste/drop → upload ID generation → upload orchestration. Writes upload state directly to `UploadStateRegistry` (no `EventBus` re-publishing).

**Responsibility:**
- File intake and tracking
- Upload orchestration (call handler, track state)
- State validation (result contract, terminal conditions)
- Registry writes (progress, completed, failed, cancelled)

**Non-responsibility:**
- Document state
- Node validation
- Product implementation details

#### Methods

| Method | Description | Returns |
|--------|-------------|---------|
| `cancel(uploadId)` | Cancel an in-flight upload. May trigger `FILE_UPLOAD_CANCELLED` or `FILE_UPLOAD_FAILED` event. | `void` |
| `getPendingUpload(uploadId)` | Get a specific pending upload. | `PendingFileUpload \| undefined` |
| `getPendingUploads()` | Get all pending uploads. Used for progress UI, debugging. | `PendingFileUpload[]` |
| `setUploadHandler(handler)` | Register product's upload handler. MUST be called before file operations. | `void` |
| `startUpload(file)` | Start uploading a file. Returns `uploadId` synchronously (no `await` needed). Actual upload happens asynchronously in background. | `string` |

### PendingFileUpload

`PendingFileUpload` — pending file upload tracking.

| Property | Type | Description |
|----------|------|-------------|
| `error` | `Error` | Error details (if failed). |
| `file` | `File` | The file object. |
| `progress` | `FileUploadProgress` | Latest progress (if available). |
| `result` | `FileUploadResult` | Result (if completed). |
| `uploadId` | `string` | Unique upload ID (UUID). |

## Extension options

### CalloutExtensionOptions

`CalloutExtensionOptions` — options for the Callout extension.

| Property | Type | Description |
|----------|------|-------------|
| `defaultVariant` | `string` | Default variant used when no variant is specified. |
| `htmlAttributes` | `Readonly<Record<string, string>>` | HTML attributes applied to the outer callout element. |

### CalloutVariant

`CalloutVariant` — the six predefined Callout variants provided by the built-in extension. This union represents only the variants the built-in Callout knows how to render. The variant attribute on the callout node itself remains a plain string at the schema level — a customer who extends the Callout extension can store a custom variant name there and render it through their own `nodeViews()` implementation.

Enum values: `info`, `warning`, `note`, `success`, `error`, `tip`.

### CodeBlockOptions

`CodeBlockOptions` — configuration object for the code block extension.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `addNodeView` | `Object` | - | Optional custom NodeView factory for rendering code block headers. Receives PM attrs and returns a `Record<string, NodeViewConstructor>` keyed by node type name (same signature as the `nodeViews` capability). |
| `defaultLanguage` | `string` | `'plaintext'` | Default language applied when a code block has no language set. Always defined. |
| `enableTabIndentation` | `boolean` | `false` | Whether Tab / Shift-Tab indent the current line. |
| `exitOnArrowDown` | `boolean` | `true` | Whether ArrowDown at the last line exits downward. |
| `exitOnArrowUp` | `boolean` | `true` | Whether ArrowUp at the first line exits upward. |
| `exitOnTripleEnter` | `boolean` | `true` | Whether triple-Enter exits the code block. |
| `htmlAttributes` | `Readonly<Record<string, string>>` | - | HTML attributes merged onto the outer `<pre>` element. |
| `languageClassPrefix` | `string \| null` | `'language-'` | Prefix prepended to the language identifier when rendering the `<code>` class attribute (e.g. `'language-'`). Set to `null` to disable language class emission entirely. |
| `tabSize` | `number` | - | Number of spaces a single Tab keypress inserts / Shift-Tab removes. |

### CollapsibleExtensionOptions

`CollapsibleExtensionOptions` — options accepted by the Collapsible extension.

| Property | Type | Description |
|----------|------|-------------|
| `htmlAttributes` | `Readonly<Record<string, string>>` | HTML attributes applied to the outer collapsible `<div>` container. Merged with the required `data-type` and `data-collapsed` attributes. |

## Command payloads

### SetHighlightPayload

`SetHighlightPayload` — payload for the `setHighlight` command. Specifies the background color (highlight) to apply to selected text. The color value is a CSS color that can be specified as hex, rgb, rgba, or named colors.

| Property | Type | Description |
|----------|------|-------------|
| `color` | `string` | The CSS color value for the background highlight. Accepts hex colors (`#RRGGBB`), RGB/RGBA values (`rgb(r, g, b)` or `rgba(r, g, b, a)`), HSL/HSLA values, or named CSS colors (`yellow`, `blue`, etc.). |

### SetColorPayload

`SetColorPayload` — payload for the `setColor` command. Applies a color to the currently selected text or applies color to the editor's active text style mark.

| Property | Type | Description |
|----------|------|-------------|
| `color` | `string` | Hex, RGB, or named CSS color string. |

### SetFontFamilyPayload

`SetFontFamilyPayload` — payload for the `setFontFamily` command. Specifies the font family to apply to selected text. The family value is a CSS `font-family` property value (e.g., `'Arial'`, `'Georgia'`, `'monospace'`).

| Property | Type | Description |
|----------|------|-------------|
| `family` | `string` | The CSS font-family value to apply to the selected text. Accepts a single font name, a comma-separated font stack with fallbacks, or generic font family keywords (`serif`, `sans-serif`, `monospace`, etc.). |

### SetFontSizePayload

`SetFontSizePayload` — payload for the `setFontSize` command. Specifies the font size to apply to selected text. The size value is a CSS `font-size` property value (e.g., `'14px'`, `'1.5em'`, `'larger'`).

| Property | Type | Description |
|----------|------|-------------|
| `size` | `string` | The CSS font-size value to apply to the selected text. Accepts any valid CSS font-size value including pixels (`px`), em units, rem units, percentages, or keyword values (`small`, `medium`, `large`, etc.). |

### SetHeadingPayload

`SetHeadingPayload` — payload for the `setHeading` command. Converts the current paragraph or block element to a semantic heading at the specified level (1-6). Preserves existing block-level formatting such as text alignment and indentation across the transformation. If no block is selected or the selection spans multiple blocks, the command applies the heading level to the block containing the selection anchor.

| Property | Type | Description |
|----------|------|-------------|
| `level` | `number` | The heading level to apply: 1 (`h1`), 2 (`h2`), 3 (`h3`), 4 (`h4`), 5 (`h5`), or 6 (`h6`). Determines the semantic heading rank in the resulting DOM. All values 1-6 map to standard HTML heading elements. |

### IndentCodeBlockPayload

`IndentCodeBlockPayload` — payload for the `indentCodeBlock` command.

| Property | Type | Description |
|----------|------|-------------|
| `tabSize` | `number` | Number of spaces to insert at the line start(s). |

### OutdentCodeBlockPayload

`OutdentCodeBlockPayload` — payload for the `outdentCodeBlock` command.

| Property | Type | Description |
|----------|------|-------------|
| `tabSize` | `number` | Number of spaces to remove (capped per line). |

### CollapsePayload

`CollapsePayload` — payload for `collapse` — `pos` bypasses selection-based lookup (used by NodeView).

| Property | Type | Description |
|----------|------|-------------|
| `pos` | `number` | Absolute document position of the collapsible node. When provided, selection is ignored. |

### ExpandPayload

`ExpandPayload` — payload for `expand` — `pos` bypasses selection-based lookup (used by NodeView).

| Property | Type | Description |
|----------|------|-------------|
| `pos` | `number` | Absolute document position of the collapsible node. When provided, selection is ignored. |
