---
layout: post
title: Link Mark in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the Link mark in the TypeScript Headless Editor, including setLink, unsetLink, and URL validation.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Link Mark in TypeScript Headless Editor

The `linkExtension` registers the `link` mark, which applies hyperlink formatting to text and renders the content as an `<a>` element with `href`, `title`, `target`, and `rel` attributes. It contributes the `setLink` and `unsetLink` commands, a keyboard shortcut for opening the link prompt, Markdown-style input rules that convert `[label](url)` into links, and URL validation against a protocol allow list to block unsafe schemes.

## Register the extension

```typescript
import { HeadlessEditor, linkExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [linkExtension]
});
```

## Configure the extension

The `link` extension exposes the following options. Use `.configure()` to set them:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `htmlAttributes` | `Record<string, string>` | `{}` | Custom HTML attributes applied to the rendered `<a>` element. |
| `openOnClick` | `boolean` | `true` | Determines whether clicking a link opens it in a new tab. When disabled, the cursor is placed inside the link for in-place editing. |

```typescript
import { HeadlessEditor, linkExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        linkExtension.configure({
            htmlAttributes: { class: 'my-custom-class' },
            openOnClick: true
        })
    ]
});
```

## Commands

| Command | Description |
|---------|-------------|
| `setLink({ href, title?, target?, rel?, displayText? })` | Adds or updates a link on the current selection. The optional `displayText` argument replaces the selection with the provided display text. |
| `unsetLink()` | Removes the link from the current selection while preserving the text. |

### `setLink` payload

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `href` | `string` | Yes | Destination URL. Validated against the protocol allow list. |
| `title` | `string` | No | Tooltip text shown on hover. |
| `target` | `string` | No | Where to open the link (e.g., `_blank`, `_self`). |
| `rel` | `string` | No | Link relationship metadata (e.g., `noopener noreferrer`). |
| `displayText` | `string` | No | When provided, the current selection is replaced with this text in the same transaction so the link mark wraps the new text. |

```typescript
// Add a link to the current selection
editor.commands.setLink({ href: 'https://example.com' });

// Add a link with display text
editor.commands.setLink({
    href: 'https://example.com',
    displayText: 'Visit Example'
});

// Remove the link from the current selection
editor.commands.unsetLink();
```

## Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Set Link | <kbd>Ctrl</kbd> + <kbd>K</kbd> | <kbd>⌘</kbd> + <kbd>K</kbd> |

## Markdown input rules

The Link mark supports Markdown-style input rules using `[label](url)` syntax. Bare URLs, `www.` hostnames, and email addresses are also recognized.

```text
Type:    [Syncfusion](https://www.syncfusion.com)
Result:  <a href="https://www.syncfusion.com" aria-label="Visit Syncfusion website">Syncfusion</a>
```

## Link validation

URLs passed to `setLink` are validated against a protocol allow list before being applied. Validation is performed by the internal `isValidUrl` helper and rejects empty input and unsafe schemes that could be used to execute arbitrary code on click.

The following protocols are blocked:

- `javascript:`
- `data:`
- `vbscript:`

The following protocols are allowed:

- `http://`
- `https://`
- `mailto:`
- `tel:`
- `ftp://`
