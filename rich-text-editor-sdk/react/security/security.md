---
layout: post
title: Security Considerations for React Rich Text Editor SDK | Syncfusion
description: Security considerations for the Syncfusion React Rich Text Editor SDK — Rich Text Editor, Block Editor, and Markdown Editor — including CSP, XSS prevention, HTML sanitization, and secure data handling.
platform: rich-text-editor-sdk
control: Security
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Security Considerations

Security is critical in web applications. Best practices include using HTTPS, validating and sanitizing user input, and enforcing strong authentication such as multi-factor authentication.

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Rich Text Editor SDK — **Rich Text Editor**, **Block Editor**, and **Markdown Editor** — follows these principles to support secure, production-ready React applications.

## Common web vulnerabilities

The SDK is designed to help mitigate common vulnerabilities, including:

- **Cross-Site Scripting (XSS)** — user-supplied input rendered without validation or encoding can execute scripts in another user's browser. Mitigate by sanitizing HTML strings before rendering (see [HTML Sanitizer](#html-sanitizer)) and enforcing a strict [Content Security Policy](./content-security-policy).
- **Cross-Site Request Forgery (CSRF)** — outgoing requests reuse the user's authentication. Authenticate each request with a token your React app owns (cookies are not enough under a strict CSP).
- **Injection Attacks** — SQL, XML, or command injection through input fields. Always parameterize queries and validate editor output on the server.

## Content Security Policy

A [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) detects and mitigates XSS and data-injection attacks. The React Rich Text Editor SDK theme stylesheets rely on inline styles and base64-encoded font glyphs, so apply the directives listed in [Content Security Policy](./content-security-policy#required-csp-directives).

## HTML Sanitizer

An HTML sanitizer removes dangerous content (such as `<script>` tags, inline event handlers, and `javascript:` URIs) before it is rendered. The three editors in the SDK render content the user authors, so treat editor input as untrusted HTML.

Use Syncfusion's `SanitizeHtmlHelper` from `@syncfusion/ej2-base` to sanitize any HTML your React app inserts into the editor programmatically, or any HTML it reads back from the editor before storing or forwarding. The pattern is the same for all three editors — only the editor component differs.

{% tabcontents %}

{% tabcontent Rich Text Editor %}

```tsx
import { useState } from 'react';
import {
  RichTextEditorComponent, Inject, Toolbar, HtmlEditor
} from '@syncfusion/ej2-react-richtexteditor';
import { SanitizeHtmlHelper } from '@syncfusion/ej2-base';

export default function App() {
  const unsafeHtml = '<p>Hello <script>alert("XSS")</script></p>';
  const safeHtml = SanitizeHtmlHelper.sanitize(unsafeHtml);

  const [value, setValue] = useState<string>(safeHtml);

  return (
    <RichTextEditorComponent
      value={value}
      change={(e: { value: string }) => setValue(SanitizeHtmlHelper.sanitize(e.value))}
    >
      <Inject services={[Toolbar, HtmlEditor]} />
    </RichTextEditorComponent>
  );
}
```

{% endtabcontent %}

{% tabcontent Block Editor %}

```tsx
import { useState } from 'react';
import { BlockEditorComponent, ParagraphBlock } from '@syncfusion/ej2-react-blockeditor';
import { SanitizeHtmlHelper } from '@syncfusion/ej2-base';

export default function App() {
  const unsafeHtml = '<p>Hello <script>alert("XSS")</script></p>';
  const safeHtml = SanitizeHtmlHelper.sanitize(unsafeHtml);

  const [value, setValue] = useState<string>(safeHtml);

  return (
    <BlockEditorComponent
      blocks={[ParagraphBlock]}
      value={value}
      change={(e: { value: string }) => setValue(SanitizeHtmlHelper.sanitize(e.value))}
    />
  );
}
```

{% endtabcontent %}

{% tabcontent Markdown Editor %}

```tsx
import { useState } from 'react';
import {
  MarkdownEditorComponent, Inject, Toolbar, MarkdownFormatter
} from '@syncfusion/ej2-react-markdowneditor';
import { SanitizeHtmlHelper } from '@syncfusion/ej2-base';

export default function App() {
  const unsafeMarkdown = '# Hello <script>alert("XSS")</script>';
  const safeMarkdown = SanitizeHtmlHelper.sanitize(unsafeMarkdown);

  const [value, setValue] = useState<string>(safeMarkdown);

  return (
    <MarkdownEditorComponent
      value={value}
      change={(e: { value: string }) => setValue(SanitizeHtmlHelper.sanitize(e.value))}
    >
      <Inject services={[Toolbar, MarkdownFormatter]} />
    </MarkdownEditorComponent>
  );
}
```

{% endtabcontent %}

{% endtabcontents %}

> Sanitize on **both** sides of the editor — when content enters (paste, programmatic value, server rehydration) and when content leaves (server upload, third-party API). Syncfusion `SanitizeHtmlHelper.sanitize` strips scripts, inline event handlers, and javascript URIs before the string ever reaches the DOM.

## Browser Storage

The SDK uses **Local Storage** for one specific purpose: `enablePersistence`. When you set `enablePersistence={true}` on an editor instance, the editor serializes its value to `localStorage` and rehydrates on the next page load. No other data is written.

If your application needs stricter storage controls (for example, to comply with regional data-protection rules), keep `enablePersistence` off and persist the value in your own backend or a CRDT store. See [State Persistence](../common/state-persistence).

## See also

- [Content Security Policy](./content-security-policy)
- [State Persistence](../common/state-persistence)
- [Register License Key](../components/rich-text-editor/licensing/register-license-key)
- [Accessibility](../common/accessibility)
