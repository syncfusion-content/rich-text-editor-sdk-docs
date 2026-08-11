---
layout: post
title: Content Security Policy (CSP) for React Rich Text Editor SDK | Syncfusion
description: Configure Content Security Policy (CSP) for the Syncfusion React Rich Text Editor SDK — Rich Text Editor, Block Editor, and Markdown Editor — to prevent security violations.
platform: rich-text-editor-sdk
control: Content Security Policy
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Content Security Policy

Content Security Policy (CSP) is a browser security feature that helps prevent cross-site scripting (XSS) and data injection attacks by restricting the sources from which content can be loaded or executed.

To enforce CSP, add a `<meta>` tag in the document `<head>` with the desired policy directives. The Syncfusion® React Rich Text Editor SDK — **Rich Text Editor**, **Block Editor**, and **Markdown Editor** — is designed to be largely compatible with strict CSP configurations, but certain features — particularly in trial or unlicensed mode — require specific allowances.

The most frequent CSP violation occurs with the Syncfusion® license banner (shown during trial or when no valid license key is registered). This banner uses an inline base64-encoded image, which requires the `img-src` directive to permit the `data:` scheme. See the [License banner base64 image](#license-banner-base64-image) section for the fix.

## Why configure CSP for the SDK

Under a strict CSP, the browser blocks resources the editors rely on. Symptoms include unstyled components, missing icons, and console errors such as `Refused to apply inline style …`.

The three editors in the SDK all render calculated inline styles and base64-encoded font glyphs. To unblock them, include `style-src` and `font-src` directives in your CSP meta tag.

## Required CSP directives

### Allow inline styles and base64 fonts

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self';
    style-src 'self' 'unsafe-inline';
    font-src 'self' data:;" />
```

| Directive | What it permits |
| --- | --- |
| `style-src 'self' 'unsafe-inline'` | The editor's calculated inline styles. |
| `font-src 'self' data:` | The icon fonts (base64-encoded in the theme stylesheet). |

### Allow the Roboto font (Material, Material 3, Tailwind)

Material and Tailwind themes reference the Roboto web font from `fonts.googleapis.com`. To allow it, add the Google Fonts domains to `style-src` and `font-src`:

```html
<head>
  ...
  <meta http-equiv="Content-Security-Policy" content="default-src 'self';
    style-src 'self' https://fonts.googleapis.com/ 'unsafe-inline';
    font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ data:;" />
</head>
```

## CSP configuration per theme

| Theme groups | External font | Required directives |
| --- | --- | --- |
| Bootstrap, Bootstrap 4, Bootstrap 5, Fabric, Fluent, Fluent 2, High Contrast | No | `style-src 'self' 'unsafe-inline'; font-src 'self' data:;` |
| Material, Material 3, Tailwind 3 | Yes (Roboto) | `style-src 'self' https://fonts.googleapis.com/ 'unsafe-inline'; font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ data:;` |

## Troubleshooting CSP issues

**Without the right directives you may see:**

- Components render unstyled or icons appear missing.
- Console errors like `Refused to apply inline style because it violates … Content Security Policy directive`.
- Console errors like `Refused to load the font 'data:…' because it violates … Content Security Policy directive`.

**Fix:** add the directives in the meta tag above.

If you use the Material or Tailwind theme, ensure both `https://fonts.googleapis.com/` and `https://fonts.gstatic.com/` are listed in `style-src` and `font-src`.

### License banner base64 image

The Syncfusion® license banner (shown during trial or when no valid license key is registered) renders as an inline base64-encoded image. Strict CSP configurations block `data:` URIs by default, causing the banner to fail to load.

Choose one of the following approaches to resolve this:

- **Recommended** — register a valid license key following the [license key registration](../components/rich-text-editor/licensing/register-license-key) instructions. This removes the license banner entirely, eliminating the need for any `data:` allowance in CSP for the banner.
- **Alternative** — add `data:` to the `img-src` directive in your CSP meta tag (or server header) to explicitly allow inline base64 images:

```html
<meta http-equiv="Content-Security-Policy" content="img-src 'self' data:;">
```

> From Syncfusion's 2023 Vol 2 (v22.1) release, the `unsafe-eval` directive is no longer required by the SDK's themes, improving the overall security posture.

## See also

* [Security Considerations](./security)
* [Register License Key](../components/rich-text-editor/licensing/register-license-key)
* [MDN: Content Security Policy reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
