---
layout: post
title: Link Mark in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the Link mark in the TypeScript Headless Editor, including attributes, commands, setLink and unsetLink, keyboard shortcuts, and input rules.
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
| `setLink({ href, title?, target?, rel?, text? })` | Adds or updates a link on the current selection. The optional `text` argument replaces the selection with the provided display text. |
| `unsetLink()` | Removes the link from the current selection while preserving the text. |

```typescript
// Add a link to the current selection
editor.commands.setLink({ href: 'https://example.com' });

// Add a link with display text
editor.commands.setLink({
    href: 'https://example.com',
    text: 'Visit Example'
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
Result:  <a href="https://www.syncfusion.com">Syncfusion</a>
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
- Root-relative paths beginning with `/`

Relative paths beginning with `.` and in-page anchors beginning with `#` are also allowed. Bare hostnames that contain a dot and no spaces (for example, `example.com`) are accepted and resolved by the browser. Any other input is rejected.