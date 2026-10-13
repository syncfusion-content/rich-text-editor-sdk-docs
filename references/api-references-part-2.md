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
  - [LinkExtensionOptions](#linkextensionoptions)
  - [ListExtensionOptions](#listextensionoptions)
  - [ListKeymapExtensionOptions](#listkeymapextensionoptions)
  - [ImageOptions](#imageoptions)
  - [ImageResizeOptions](#imageresizeoptions)
  - [ImageUIContribution](#imageuicontribution)
  - [ImageUINodeViewFactory](#imageuinodeviewfactory)
  - [PlaceholderOptions](#placeholderoptions)
  - [TableOptions](#tableoptions)
  - [TaskListExtensionOptions](#tasklistextensionoptions)
  - [TextAlignOptions](#textalignoptions)
  - [UndoRedoOptions](#undoredooptions)
  - [ExtensionOptions](#extensionoptions)
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
- [Command payloads (continued)](#command-payloads-continued)
  - [SetLinkPayload](#setlinkpayload)
  - [InsertImagePayload](#insertimagepayload)
  - [SetBulletListTypePayload](#setbulletlisttypepayload)
  - [SetOrderedListTypePayload](#setorderedlisttypepayload)
  - [ToggleBulletListPayload](#togglebulletlistpayload)
  - [ToggleOrderedListPayload](#toggleorderedlistpayload)
  - [ToggleListTypePayload](#togglelisttypepayload)
- [Command payloads (additional)](#command-payloads-additional)
  - [InsertTablePayload](#inserttablepayload)
  - [ToggleTaskCheckedPayload](#toggletaskcheckedpayload)
  - [ToggleTaskListPayload](#toggletasklistpayload)
- [Image enums](#image-enums)
  - [ImageAlign](#imagealign)
  - [ImageDisplayMode](#imagedisplaymode)
  - [ImageUIPlacement](#imageuiplacement)
  - [ImageWrap](#imagewrap)
  - [SaveFormatType](#saveformattype)
- [Input rule options](#input-rule-options)
  - [CreateNodeRuleOptions](#createnoderuleoptions)
  - [CreateLinkRuleOptions](#createlinkruleoptions)
  - [CreateTextBlockRuleOptions](#createtextblockruleoptions)
  - [CreateWrappingRuleOptions](#createwrappingruleoptions)
- [Input rule options (continued)](#input-rule-options-continued)
  - [InputRuleDefinition](#inputruledefinition)
  - [InputRuleContext](#inputrulecontext)
- [Extension authoring](#extension-authoring)
  - [ExtensionConfig](#extensionconfig)
  - [ExtensionDefinition](#extensiondefinition)
  - [ExtensionDOMSpecs](#extensiondomspecs)
  - [NodeViewDescriptor](#nodeviewdescriptor)
  - [NodeViewConstructor](#nodeviewconstructor)
  - [NodeDOMDescriptor](#nodedomdescriptor)
  - [MarkDOMDescriptor](#markdomdescriptor)
  - [DOMOutputDescriptor](#domoutputdescriptor)
- [Table internals](#table-internals)
  - [TableService](#tableservice)
  - [CellContext](#cellcontext)
  - [TableContext](#tablecontext)
- [Static functions](#static-functions)
  - [StaticFunctions](#staticfunctions)

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

## Extension options (continued)

### LinkExtensionOptions

`LinkExtensionOptions` — options accepted by the Link extension.

| Property | Type | Description |
|----------|------|-------------|
| `htmlAttributes` | `Readonly<Record<string, string>>` | HTML attributes applied to the rendered DOM element (class, data-*, etc.). |
| `openOnClick` | `boolean` | Determines whether links open when clicked in the editor. When enabled, clicking a link navigates to its target URL in a new browser tab. When disabled, clicking places the cursor inside the link for editing. |

### ListExtensionOptions

`ListExtensionOptions` — options accepted by the List extension.

| Property | Type | Description |
|----------|------|-------------|
| `htmlAttributes` | `Readonly<Record<string, string>>` | HTML attributes applied to the list container elements (`<ul>`, `<ol>`). |
| `itemHtmlAttributes` | `Readonly<Record<string, string>>` | HTML attributes applied to list item elements (`<li>`). |

### ListKeymapExtensionOptions

`ListKeymapExtensionOptions` — options accepted by the List Keymap extension.

| Property | Type | Description |
|----------|------|-------------|
| `htmlAttributes` | `Readonly<Record<string, string>>` | HTML attributes applied to the rendered DOM element (class, data-*, etc.). |

### ImageOptions

`ImageOptions` — top-level configuration options consumed by the Image extension.

| Property | Type | Description |
|----------|------|-------------|
| `addNodeView` | `Object` | Optional custom NodeView UI factory for rendering product-supplied status UI around block image nodes (upload progress, badges, etc.). Invoked once per editor mount (never per-node remount — same factory discipline as the CodeBlock `addNodeView`). The returned record is keyed by node type name; only the `image` (block) entry is consumed. The extension continues to own the `<img>` structure, composition, and lifecycle — the product contributes only its UI subtree. |
| `align` | `ImageAlign` | Default horizontal alignment for newly inserted images. |
| `allowBase64` | `boolean` | Allow pasted/dropped images to keep their base64 payload as `src`. |
| `display` | `ImageDisplayMode` | Default display mode for newly inserted images. |
| `htmlAttributes` | `Record` | Static HTML attributes merged onto every inserted `<img>` element. |
| `resize` | `ImageResizeOptions \| false` | Configures image resizing behavior for block and inline images. When enabled, resize handles are added to both `image` and `imageInline` node views. Consumers can configure the available resize directions, minimum dimensions, and aspect-ratio preservation. Resizing emits the `resizeStart`, `resizing`, and `resizeStop` lifecycle events. The final width and height are persisted to the image attributes when resizing is completed. |
| `saveFormat` | `SaveFormatType` | How inserted images should be persisted. |
| `wrap` | `ImageWrap` | Default text wrapping for newly inserted images. |

### ImageResizeOptions

`ImageResizeOptions` — resizable behavior configuration supplied to the image extension. Lets consumers configure which directions are resizable, the lower size bound, and whether the image's aspect ratio should always be preserved.

| Property | Type | Description |
|----------|------|-------------|
| `alwaysPreserveAspectRatio` | `boolean` | When `true`, the engine preserves the image's aspect ratio on every resize handle. When `false`, holding `Shift` toggles aspect lock interactively. |
| `directions` | `ResizableNodeViewDirection[]` | Whitelist of resize directions to render handles for. When omitted, the engine default (`top-left`, `top-right`, `bottom-left`, `bottom-right`) is used. |
| `enabled` | `boolean` | Master switch. When `false`, the resizable engine never mounts handles on image node views (no-op for that view). |
| `minHeight` | `number` | Minimum allowed height in pixels during a resize drag. Falls back to the engine default (8 px) when `undefined`. |
| `minWidth` | `number` | Minimum allowed width in pixels during a resize drag. Falls back to the engine default (8 px) when `undefined`. |

### ImageUIContribution

`ImageUIContribution` — UI contribution returned by the product's per-node factory. The extension composes this into the final NodeView; the product never owns or recreates the image structure itself.

| Property | Type | Description |
|----------|------|-------------|
| `dom` | `HTMLElement` | Product-owned UI element (progress bar, status badge, controls, etc.). |
| `placement` | `ImageUIPlacement` | Slot placement relative to the image. Default `'top-right'`. |

#### Methods

| Method | Description | Returns |
|--------|-------------|---------|
| `destroy()` | Called when the NodeView is destroyed so the product can clean up widgets. | `void` |
| `onUploadState()` | Push callback invoked on every upload-state change for this image. Receives an immediate snapshot at NodeView construction and every subsequent runtime update. Progress updates never touch the document. | `void` |

### ImageUINodeViewFactory

`ImageUINodeViewFactory` — per-node factory supplied through `ImageOptions.addNodeView`. Same shape as the extension NodeView constructor contract.

| Parameter | Name | Type |
|-----------|------|------|
| | `attrs` | `Record` |
| | `view` | `unknown` |
| | `getPos` | `Object` |

## Image enums

### ImageAlign

`ImageAlign` — horizontal alignment for block images. `none` honors the editor's default text-align (typically left).

`left`, `center`, `right`, `none`

### ImageDisplayMode

`ImageDisplayMode` — image display modes supported by image nodes. `block`: image occupies its own line, like a standalone figure. `inline`: image flows with surrounding text.

`block`, `inline`

### ImageUIPlacement

`ImageUIPlacement` — placement of the product UI slot relative to the image. Applied by the extension via a stable CSS class on the UI slot element.

`top-left`, `top-center`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom-center`, `bottom-right`

### ImageWrap

`ImageWrap` — text wrapping behavior. Wrapped images float so surrounding text flows around them; `none` keeps the image on its own line.

`left`, `right`, `none`

### SaveFormatType

`SaveFormatType` — persistence format used when the editor saves an image reference. `blob`: store as a Blob URL (recommended; survives serialization). `base64`: inline as `data:image/...;base64,...` (portable but heavy).

`blob`, `base64`

## Input rule options

### CreateNodeRuleOptions

`CreateNodeRuleOptions` — defines configuration options for creating a node insertion input rule.

| Property | Type | Description |
|----------|------|-------------|
| `allowUndo` | `boolean` | If set to `true`, enables undo support for the rule. @default `true` |
| `attributeProvider` | `Record \| Object` | Static attributes or a function that computes attributes from the regex match. Used to populate node attributes when the rule is triggered. |
| `id` | `string` | Unique identifier for the rule. |
| `pattern` | `RegExp` | Regular expression pattern to match in the input text. |
| `target` | `string` | Target node type name to insert (e.g., `horizontalRule`, `image`). |

### CreateLinkRuleOptions

`CreateLinkRuleOptions` — defines configuration options for creating a link input rule.

| Property | Type | Description |
|----------|------|-------------|
| `allowUndo` | `boolean` | If set to `true`, enables undo support for the rule. @default `true` |
| `id` | `string` | Unique identifier for the rule. |
| `pattern` | `RegExp` | Regular expression pattern to match URLs or Markdown link syntax in the input text. Can match auto-links (URLs) or Markdown-style links with capturing groups for text and href. |

### CreateTextBlockRuleOptions

`CreateTextBlockRuleOptions` — defines configuration options for creating a text block transformation input rule.

| Property | Type | Description |
|----------|------|-------------|
| `allowUndo` | `boolean` | If set to `true`, enables undo support for the rule. @default `true` |
| `attributeProvider` | `Record \| Object` | Static attributes or a function that computes attributes from the regex match. Used to populate node attributes when the rule is triggered. |
| `id` | `string` | Unique identifier for the rule. |
| `pattern` | `RegExp` | Regular expression pattern to match in the input text. |
| `target` | `string` | Target block node type to transform the current block into (e.g., `heading`, `codeBlock`). |

### CreateWrappingRuleOptions

`CreateWrappingRuleOptions` — defines configuration options for creating a block wrapping input rule.

| Property | Type | Description |
|----------|------|-------------|
| `allowUndo` | `boolean` | If set to `true`, enables undo support for the rule. @default `true` |
| `attributeProvider` | `Record \| Object` | Static attributes or a function that computes attributes from the regex match. Used to populate wrapper node attributes when the rule is triggered. |
| `id` | `string` | Unique identifier for the rule. |
| `pattern` | `RegExp` | Regular expression pattern to match in the input text. |
| `target` | `string` | Target wrapper node type (e.g., `bulletList`, `orderedList`, `blockquote`). |

## Command payloads (continued)

### SetLinkPayload

| Property | Type | Description |
|----------|------|-------------|
| `displayText` | `string` | Optional display text. When provided, the current selection is replaced with this text in the same transaction so the link mark wraps the new text. Falls back to current selection text, then `href`. If omitted, the selection is left as-is (mark-only). |
| `href` | `string` | Destination URL of the link. |
| `rel` | `string \| null` | Link relationship metadata (`noopener noreferrer`, etc.). |
| `target` | `string \| null` | Where to open the link (`_blank`, `_self`, etc.). |
| `title` | `string \| null` | Tooltip text shown on hover. |

### InsertImagePayload

`InsertImagePayload` — payload for the `insertImage` command. Inserts one or more images at the current cursor position. Can accept a single image payload or an array of payloads for batch insertion.

| Property | Type | Description |
|----------|------|-------------|
| `align` | `ImageAlign` | Horizontal alignment for block images: `left`, `center`, `right`, `none`. |
| `alt` | `string` | Alternative text displayed when image fails to load (accessibility). |
| `attributes` | `Record` | Custom HTML attributes applied to the image element (e.g., `data-*`, `class`). |
| `caption` | `string` | Optional caption text displayed below the image. |
| `display` | `ImageDisplayMode` | Display mode: `block` (standalone line) or `inline` (flows with text). |
| `height` | `number` | Image height in pixels. |
| `src` | `string` | Image source URL (HTTP, HTTPS, or data URI). |
| `title` | `string` | Title text shown in image tooltip. |
| `width` | `number` | Image width in pixels (constrained by editor max-width). |
| `wrap` | `ImageWrap` | Text wrapping: `left`, `right` (float), or `none` (standalone). |

### SetBulletListTypePayload

| Property | Type | Description |
|----------|------|-------------|
| `listStyleType` | `string` | CSS `list-style-type` value to apply (e.g. `'disc'`, `'circle'`). |

### SetOrderedListTypePayload

| Property | Type | Description |
|----------|------|-------------|
| `listStyleType` | `string` | CSS `list-style-type` value to apply (e.g. `'decimal'`, `'lower-roman'`). |

### ToggleBulletListPayload

| Property | Type | Description |
|----------|------|-------------|
| `keepMarks` | `boolean` | When `true`, active marks are preserved on the new list item. |
| `listStyleType` | `string` | CSS `list-style-type` value for the bullet list container (e.g. `'disc'`, `'circle'`, `'square'`). When omitted, `'disc'` is used. When the selection is already inside a `bulletList` using a different style, the list is updated to this style instead of lifted. |

### ToggleOrderedListPayload

| Property | Type | Description |
|----------|------|-------------|
| `keepMarks` | `boolean` | When `true`, active marks are preserved on the new list item. |
| `listStyleType` | `string` | CSS `list-style-type` value for the ordered list container (e.g. `'decimal'`, `'lower-alpha'`, `'upper-roman'`). When omitted, `'decimal'` is used. When the selection is already inside an `orderedList` using a different style, the list is updated to this style instead of lifted. |

### ToggleListTypePayload

| Property | Type | Description |
|----------|------|-------------|
| `checked` | `boolean` | Checked state applied to task items when toggling into a task list. When omitted, the existing default behavior (unchecked on wrap, preserved on conversion) is unchanged. Task lists ignore `listStyleType`. |
| `keepMarks` | `boolean` | When `true`, active marks are preserved on the new list item after toggling. |
| `listStyleType` | `string` | CSS `list-style-type` value for the target list container. Applies to bullet and ordered lists only. When omitted, the target type's default style (`disc` / `decimal`) is used to build fresh list attrs; when the selection already sits in a list of the same type and the current style differs, the list is updated instead of lifted. |

### PlaceholderOptions

`PlaceholderOptions` — configuration options for the Placeholder extension. The Placeholder extension displays hint text in empty nodes or when the entire editor is empty, improving user experience by showing where content should be entered.

| Property | Type | Description |
|----------|------|-------------|
| `dataAttribute` | `string` | HTML data attribute name used to store the placeholder text on DOM elements. The placeholder value is stored as a data attribute for accessibility and CSS `::before` pseudo-element rendering. |
| `emptyEditorClass` | `string` | CSS class applied to the editor root element when the entire editor is empty. Applied at the document level, enabling distinct styling for the empty-editor state (e.g., larger placeholder text, different background color). |
| `emptyNodeClass` | `string \| Object` | CSS class applied to nodes that are empty and should display placeholder text. Can be a static class name string or a function that generates class names dynamically. Used for styling empty placeholders with CSS. |
| `htmlAttributes` | `Readonly<Record<string, string>>` | HTML attributes applied to the rendered DOM element (class, data-*, etc.). |
| `includeChildren` | `boolean` | When `true`, placeholder is shown for parent nodes containing only empty child nodes. When `false`, placeholders appear only on leaf-level empty nodes. |
| `placeholder` | `string \| Object` | The placeholder text to display in empty nodes or the editor. Can be a static string or a function that dynamically generates text based on the node context. Useful for displaying context-specific hints like "Write your intro…" for introduction sections. |
| `showOnlyCurrent` | `boolean` | When `true`, placeholder is shown only for the current (focused) node. Reduces visual clutter by hiding placeholders for all other empty nodes, showing only the placeholder for the node containing the active cursor. |
| `showOnlyWhenEditable` | `boolean` | When `true`, placeholder is displayed only when the editor is in editable mode. When `false`, placeholders appear even in read-only editors. |
| `showOnlyWhenEditorEmpty` | `boolean` | When `true`, placeholder is shown only when the entire editor is empty (no content at all). Useful for showing a global "Start typing here…" message only when the document has no content. |

### TableOptions

`TableOptions` — top-level configuration options consumed by the Table extension.

| Property | Type | Description |
|----------|------|-------------|
| `resize` | `boolean` | Enable or disable table column resizing via drag handles. Default `true`. When `true`, table columns can be resized by dragging the column separator handles in the header row. When `false`, column resize handles are not rendered. |

### TaskListExtensionOptions

`TaskListExtensionOptions` — options for the task list extension. Defines the HTML attributes applied to task list container and item elements, along with the nested content policy for task items.

| Property | Type | Description |
|----------|------|-------------|
| `htmlAttributes` | `Readonly<Record<string, string>>` | HTML attributes applied to the `<ul data-type="taskList">` container element. |
| `itemHtmlAttributes` | `Readonly<Record<string, string>>` | HTML attributes applied to task item `<li>` elements. |
| `nested` | `boolean` | When `true`, task items allow nested block content (lists, blockquotes, etc.) after the leading paragraph. When `false`, content is restricted to `paragraph+`. |

### TextAlignOptions

`TextAlignOptions` — configuration options for the text align extension. Defines the HTML attributes and block node types where text alignment applies. Consumers can override the default block types to limit or extend alignment support.

| Property | Type | Description |
|----------|------|-------------|
| `htmlAttributes` | `Readonly<Record<string, string>>` | HTML attributes applied to the aligned block elements. |
| `types` | `string[]` | The block node types where text alignment is allowed. Mirrors Tiptap's `TextAlign.types` option. Consumers override this when they want to limit alignment to a subset of block types or to add support for additional ones (for example, a custom callout node). |

### UndoRedoOptions

`UndoRedoOptions` — history plugin configuration options.

| Property | Type | Description |
|----------|------|-------------|
| `depth` | `number` | Maximum depth of the undo history stack (default: `30`). |
| `newGroupDelay` | `number` | Time in milliseconds after which new edits form a new history group (default: `300`). |

### ExtensionOptions

`ExtensionOptions` — common, reusable options shared by built-in extensions (bold, italic, underline, strikethrough, code, etc.). Each extension can use this interface as-is for its `TOptions` generic, or extend it with extension-specific fields. All fields are optional so an extension that only needs one or two of them can still use the shared type without forcing consumers to supply the rest.

| Property | Type | Description |
|----------|------|-------------|
| `htmlAttributes` | `Readonly<Record<string, string>>` | HTML attributes applied to the rendered DOM element (class, data-*, etc.). |


## Command payloads (additional)

### InsertTablePayload

`InsertTablePayload` — payload for the `insertTable` command. Inserts a new table at the current cursor position. Each cell is initialized with an empty paragraph and inherits document alignment settings.

| Property | Type | Description |
|----------|------|-------------|
| `columns` | `number` | Number of columns in the new table (minimum 1). |
| `rows` | `number` | Number of rows in the new table (minimum 1). |

### ToggleTaskCheckedPayload

`ToggleTaskCheckedPayload` — payload for `toggleTaskChecked` — `pos` bypasses selection-based lookup.

| Property | Type | Description |
|----------|------|-------------|
| `pos` | `number` | Absolute document position of the `taskItem` node. When provided, selection is ignored. |

### ToggleTaskListPayload

`ToggleTaskListPayload` — payload for the `toggleTaskList` command.

| Property | Type | Description |
|----------|------|-------------|
| `checked` | `boolean` | Checked state applied to the task items created when toggling into a task list. When omitted, the existing default behavior (unchecked on wrap, preserved on conversion) is unchanged. |
| `keepMarks` | `boolean` | When `true`, active marks are preserved on the new task item. |


## Input rule options (continued)

### InputRuleDefinition

`InputRuleDefinition` — definition of a single input rule contributed by an extension. All fields are read-only; the registry never mutates definitions.

| Property | Type | Description |
|----------|------|-------------|
| `handler` | `Object` | Handler invoked when the pattern matches. |
| `id` | `string` | Unique rule identifier (e.g. `'mark:bold-stars'`). |
| `label` | `string` | Human-readable label for tooling / debugging. |
| `pattern` | `RegExp` | `RegExp` that is tested against the text immediately before the cursor. Must end with `$`. |
| `priority` | `number` | Priority for ordering rules (higher = earlier). Defaults to `0`. |

### InputRuleContext

`InputRuleContext` — PM-free context passed to every input rule handler at the point a pattern match fires. All fields are read-only — handlers must not mutate the context. Handlers must use only `dispatchCommand()` to modify editor state. Direct state access or transaction dispatch is not available — use the command framework instead.

| Property | Type | Description |
|----------|------|-------------|
| `dispatchCommand` | `Object` | Dispatches a registered command by name, returning `true` if it executed successfully. This is the ONLY way for input rule handlers to modify editor state. Thin closure over `CommandManager.execute()` — goes through the full command pipeline, ensuring undo/redo grouping, event emission, and consistent state management. |
| `end` | `number` | End position of the match in the document. |
| `match` | `RegExpMatchArray` | The match array produced by `RegExp.exec` against the text before the cursor. |
| `nodeAt` | `EditorNode \| null` | The Syncfusion `EditorNode` at the cursor position, or `null` if unavailable. |
| `selection` | `Selection` | The current editor selection, converted to the Syncfusion model. |
| `start` | `number` | Start position of the match in the document. |

## Extension authoring

### ExtensionConfig

`ExtensionConfig` — describes an extension's configuration and capabilities. v1 excludes `TStorage` generic, `defaultStorage` contributor, `nodeViews` contributor. All capability contributors and lifecycle hooks use `ExtensionScope` as `this`.

| Property | Type | Description |
|----------|------|-------------|
| `addExtensions` | `Object` | Contribute additional extensions (composition). |
| `commands` | `Object` | Contribute command definitions. |
| `defineOptions` | `Object` | Factory function that returns the option values for this extension. |
| `domSpecs` | `Object` | Contribute DOM rendering specs for custom nodes and marks. Called during `EditorBuilder._buildDOMSpecRegistry()` — before PM schema compilation. Implementations must not import or reference any PM types. Use `DOMOutputDescriptor` (`string \| readonly unknown[]`) as the return type for `toDOM` functions. |
| `inputRules` | `Object` | Contribute input rule definitions. |
| `keyboardShortcuts` | `Object` | Contribute keyboard shortcut definitions. |
| `marks` | `Object` | Contribute mark type definitions. |
| `name` | `string` | Unique extension identifier within an editor instance. |
| `nodeViews` | `Object` | Contribute NodeView factories for custom node rendering. Called during `bindEditorAndFinalize()` so the editor reference is available on `this`. Return a map of `node-type-name` → `NodeViewConstructor`. NodeViews take precedence over `domSpecs` for the same node type. Implementations must NOT import any PM types — use `editor.commands.*` for all state mutations. |
| `nodes` | `Object` | Contribute node type definitions. |
| `pasteRules` | `Object` | Contribute paste rule definitions. |
| `plugins` | `Object` | Contribute editor plugins. |
| `priority` | `number` | When this extension's nodes are added to the editor's schema. Higher numbers are added first. You only need to set this for extensions that contribute blocks which can hold other blocks (recursive containers — use `10`). For everything else, the default of `50` is the right choice. If you're adding a block that should always win as a filler (like a paragraph), use `100`. Quick guide: `100` — blocks that should be tried first when filling empty space (paragraph, heading, image, horizontal rule); `50` — default; safe for most custom extensions; `10` — blocks that can contain other blocks (table, blockquote, list, callout, collapsible). |
| `serializers` | `Object` | Contribute serializer definitions. |

| Method | Description | Returns |
|--------|-------------|---------|
| `onDestroy()` | Called during editor destruction. | `void` |
| `onReady()` | Called after editor startup completion. | `void` |
| `onRegister()` | Called after successful registration. | `void` |

### ExtensionDefinition

`ExtensionDefinition` — an immutable extension definition. Created by `defineExtension()` factory function.

| Property | Type | Description |
|----------|------|-------------|
| `config` | `Readonly<...>` | Internal: full configuration (for `ExtensionCompiler` access). |
| `name` | `string` | Unique extension identifier. |

| Method | Description | Returns |
|--------|-------------|---------|
| `configure(options)` | Creates a new extension with merged options. Original is never modified. | `ExtensionDefinition` |
| `extend(overrides)` | Creates a new extension by overriding parts of the config. Original is never modified. | `ExtensionDefinition` |

### ExtensionDOMSpecs

`ExtensionDOMSpecs` — collection of node and mark DOM descriptors contributed by an extension.

| Property | Type | Description |
|----------|------|-------------|
| `marks` | `Readonly<...>` | Keyed by `MarkDefinition.name`. |
| `nodes` | `Readonly<...>` | Keyed by `NodeDefinition.name`. |

### NodeViewDescriptor

`NodeViewDescriptor` — describes the object returned by a `NodeViewConstructor`. Mirrors ProseMirror's `NodeView` interface but uses only DOM/primitives — no PM types are referenced here.

| Property | Type | Description |
|----------|------|-------------|
| `contentDOM` | `HTMLElement \| null` | If provided, ProseMirror will render the node's children into this element (the "content hole"). If omitted the node is treated as a leaf. |
| `deselectNode` | `Object` | Called when the node is deselected. |
| `destroy` | `Object` | Called when the node view is removed from the DOM. |
| `dom` | `HTMLElement` | The outer DOM element for the node. |
| `ignoreMutation` | `Object` | Called for every DOM mutation observed inside the NodeView. Return `true` to tell ProseMirror the mutation is harmless UI noise and must NOT trigger a remount — e.g. a widget's internal DOM swap (Syncfusion's `Button.appendTo` wraps the host element). Returning `false` lets ProseMirror process the mutation normally (re-reading children, dispatching transactions). |
| `selectNode` | `Object` | Called when the node is selected. |
| `update` | `Object` | Called whenever the node is updated with new attrs/content. Return `true` to accept the update (ProseMirror re-renders children); return `false` to force a full remount. |

### NodeViewConstructor

`NodeViewConstructor` — PM-free factory function for a custom node view. Extensions implement this to take full control of a node's DOM rendering and interactive behaviour without importing any ProseMirror types.

| Parameter | Type | Description |
|-----------|------|-------------|
| `attrs` | `Record` | Node attributes. |
| `view` | `unknown` | The editor view. |
| `getPos` | `Object` | Function that returns the current node position. |
| `hasContent` (optional) | `boolean` | Whether the node has content. |

### NodeDOMDescriptor

`NodeDOMDescriptor` — PM-free descriptor for how a node type should render to the DOM. Used by extensions to contribute custom `toDOM` behaviour without importing any ProseMirror types.

| Property | Type | Description |
|----------|------|-------------|
| `toDOM` | `Object` | Returns a `DOMOutputDescriptor` for the node. Receives the node's attribute bag — never the PM Node object. |

### MarkDOMDescriptor

`MarkDOMDescriptor` — PM-free descriptor for how a mark type should render to the DOM.

| Property | Type | Description |
|----------|------|-------------|
| `toDOM` | `Object` | Returns a `DOMOutputDescriptor` for the mark. Receives the mark's attribute bag and inline flag. |

### DOMOutputDescriptor

`DOMOutputDescriptor` — PM-free representation of a single DOM output item. Mirrors ProseMirror's `DOMOutputSpec` but without PM type imports. Accepts a tag-name string or a nested array spec.

| Type | Description |
|------|-------------|
| `string` | Tag-name string. |
| nested array spec | Nested array spec. |

## Table internals

### TableService

`TableService` — resolves table, row, and cell context from the headless document. All methods perform pure tree walks (no PM imports). Complex structural operations (e.g. `TableMap`, colspan-aware coordinates) are delegated to PM adapters inside `src/pm/` by commands at the PM boundary.

| Method | Description | Returns |
|--------|-------------|---------|
| `getCurrentCell(doc, selection)` | Find the `tableCell` containing the cursor/anchor of the current selection. Performs a tree walk from the document root. | `CellContext \| null` |
| `getCurrentTable(doc, selection)` | Find the table containing the cursor/anchor of the current selection. Performs a tree walk from the document root. | `TableContext \| null` |
| `getSelectedCells(doc, selection)` | Get all cells included in a `CellSelection` range. Returns an empty array when the selection is not a `CellSelection`. | `CellContext[]` |
| `resolveCellCoordinates(cellNode, tableNode)` | Resolve the (row, col) coordinates of a cell within its parent table. | `Object \| null` |

### CellContext

`CellContext` — resolved context for a single table cell.

| Property | Type | Description |
|----------|------|-------------|
| `cellNode` | `EditorNode` | The `tableCell` `EditorNode`. |
| `cellPath` | `number[]` | Path from the document root to the cell. |
| `col` | `number` | Zero-based column index within the row. |
| `row` | `number` | Zero-based row index within the table. |

### TableContext

`TableContext` — resolved context for a table node in the document.

| Property | Type | Description |
|----------|------|-------------|
| `node` | `EditorNode` | The table `EditorNode`. |

## Static functions

### StaticFunctions

`StaticFunctions` — root static functions of `HeadlessEditor`. These are factory / utility methods available on the `HeadlessEditor` class itself.

| Function | Description | Returns |
|----------|-------------|---------|
| `createSnapshot(selection)` | Captures a selection as a PM-free snapshot. Creates a `SelectionSnapshot` from a Syncfusion `Selection` object. The snapshot is initialized in the `'pending'` state, indicating it will be auto-applied to the live ProseMirror state before the next command execution. Use this to save the user's cursor position before an operation that would blur the editor (e.g., toolbar interactions), then restore it afterward via `HeadlessEditor.restoreSelection`. | `SelectionSnapshot` |
| `withStatus(snap, status)` | Creates a new snapshot with an updated lifecycle status. Returns the input snapshot unchanged if its current status already matches the requested status. Otherwise, creates a shallow copy with the new status. Used internally by the framework to advance snapshot state through its lifecycle (`pending` → `restored` → `consumed`). | `SelectionSnapshot` |
| `defineExtension(config)` | Creates an immutable extension definition from the given configuration. | `ExtensionDefinition` |
| `getPositionForUploadId(state, uploadId)` | Resolve the current mapped position of the image tracked by `uploadId`. Used by the completion handler to write the final `src` back into the document — even after the image has moved. | `number \| undefined` |
| `getUploadIdAtPosition(state, pos)` | Resolve the runtime `uploadId` for the image node whose open token sits at `pos`. Returns `undefined` when no active upload is associated with the image at that position. This is the bridge the Image NodeView uses to subscribe to the generic `UploadStateRegistry` without putting `uploadId` into the image schema. | `string \| undefined` |
| `createNodeRule(options)` | Creates a node insertion input rule definition. Generates a reusable input rule that detects text patterns and inserts standalone nodes into the document. The handler receives the matched positions and dispatches an `'inputRuleInsert'` command to ensure proper undo/redo support and command event tracking. | `InputRuleDefinition` |
| `createLinkRule(options)` | Creates a link input rule definition. Generates a reusable input rule that detects URL patterns and Markdown link syntax, then converts them into link marks in the document. Supports both auto-linking (plain URLs) and explicit Markdown syntax. The handler receives the matched positions and dispatches an `'inputRuleMark'` command. | `InputRuleDefinition` |
| `createMarkRule(options)` | Creates a mark (inline format) input rule definition. Generates a reusable input rule that detects text patterns and applies inline formatting marks. The handler receives the matched positions and dispatches an `'inputRuleMark'` command. | `InputRuleDefinition` |
| `createTextBlockRule(options)` | Creates a text block transformation input rule definition. Generates a reusable input rule that detects text patterns and transforms the current text block into a different node type. The handler receives the matched positions and dispatches an `'inputRuleTransform'` command. | `InputRuleDefinition` |
| `createWrappingRule(options)` | Creates a block wrapping input rule definition. Generates a reusable input rule that detects text patterns and wraps the current block within a container node. Useful for creating lists, blockquotes, and other wrapper structures. The handler receives the matched positions and dispatches an `'inputRuleWrap'` command. | `InputRuleDefinition` |
| `setTextAlignCommand(alignableTypes)` | Build the `setTextAlign` command instance scoped to the given block types. `alignableTypes` is the set of node type names that the command is allowed to act on. The caller (the textAlign extension) wires up the actual command. | (command) |
| `unsetTextAlignCommand(alignableTypes)` | Build the `unsetTextAlign` command instance scoped to the given block types. Mirrors `setTextAlignCommand` — same `alignableTypes` parameter, same list-aware routing. The "where does the attribute live" rule (first alignable wrapper, falling back to the listItem) is identical. | (command) |

