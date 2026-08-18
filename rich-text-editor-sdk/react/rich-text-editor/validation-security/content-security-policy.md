---
layout: post
title: Content Security Policy in React Rich Text Editor | Syncfusion
description: Learn how to configure Content Security Policy directives for the React Rich Text Editor to enable CSP-compliant applications.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Content Security Policy (CSP) in React Rich Text Editor

## Overview

Content Security Policy (CSP) is a security standard that helps prevent cross-site scripting (XSS) and other code-injection attacks by restricting the sources from which content can be loaded and executed in a web application.

The React Rich Text Editor supports CSP-enabled applications. When the editor is used in an environment that enforces a Content Security Policy, the policy must include the directives required by the editor so that the editor's content, formatting, themes, and UI elements render and function as expected.

> IMPORTANT
>
> Rich Text Editor requires `style-src 'unsafe-inline'` for full functionality and proper rendering of editor UI elements.
>
> Without this directive, some editor features and UI components may not render or function correctly.

## Rich Text Editor CSP requirements

The Rich Text Editor requires the following Content Security Policy directives to render and function correctly.

### Styles

```http
style-src 'self' 'unsafe-inline'
```

The Rich Text Editor uses inline styles for certain formatting features and UI rendering. Therefore, the `style-src 'unsafe-inline'` directive is required for full functionality.

### Fonts

```http
font-src 'self' data:
```

Font icons used by the Rich Text Editor toolbar and UI elements must be allowed through the font source directive. The `'self'` source covers same-origin font files, and `data:` covers inline data URIs used for icon fonts.

### Material and Tailwind themes

The Rich Text Editor is compatible with the Material and Tailwind themes. These themes load font resources from Google Fonts, so the following URLs must be allowed through the appropriate CSP directives:

* `https://fonts.googleapis.com` — must be allowed in `style-src` so the theme can load its stylesheets from Google Fonts.
* `https://fonts.gstatic.com` — must be allowed in `font-src` so the theme can load the font files hosted by Google Fonts.

A typical configuration for an application using the Material or Tailwind theme is:

```http
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com
font-src 'self' data: https://fonts.gstatic.com
```

With these directives in place, the Rich Text Editor renders the Material and Tailwind themes correctly along with all built-in features.

### Images

```http
img-src 'self' data: blob:
```

The Rich Text Editor supports inserting images from the local origin, data URIs, and blob URLs. Allowing the same origin, inline data URIs, and blob URLs in the image source directive ensures that inserted images and previews render correctly.

## Recommended CSP configuration

The following example shows a recommended Content Security Policy configuration for a React application that hosts the Rich Text Editor:

```html
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self';
               script-src 'self' https://cdn.syncfusion.com;
               style-src 'self' 'unsafe-inline' https://cdn.syncfusion.com
               https://fonts.googleapis.com;
               font-src 'self' data: https://fonts.gstatic.com;
               img-src 'self' data: blob:;" />
```

In a React application, the recommended way to configure a Content Security Policy is through response headers (for example, by using a server-side middleware such as Express, Nginx, or a hosting-provider configuration) rather than the `<meta>` tag. The header-based policy is applied by the browser before any HTML is parsed and is the most secure approach.

Example for an Express / Node server:

```javascript
const csp = [
  "default-src 'self'",
  "script-src 'self' https://cdn.syncfusion.com",
  "style-src 'self' 'unsafe-inline' https://cdn.syncfusion.com https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "img-src 'self' data: blob:",
  "connect-src 'self'"
].join('; ');

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', csp);
  next();
});
```

### Key directives

| Directive | Value | Purpose |
|---|---|---|
| `default-src` | `'self'` | Restricts all resource loading to the same origin by default. |
| `script-src` | `'self' https://cdn.syncfusion.com` | Allows scripts from the same origin and the CDN, which hosts the editor's JavaScript runtime. |
| `style-src` | `'self' 'unsafe-inline' https://cdn.syncfusion.com https://fonts.googleapis.com` | Permits inline styles used by the editor, along with the CDN and Google Fonts stylesheets. |
| `font-src` | `'self' data: https://fonts.gstatic.com` | Allows fonts loaded from the same origin, inline data URIs, and Google Fonts. |
| `img-src` | `'self' data: blob:` | Permits images from the same origin, data URIs, and blob URLs. |
| `connect-src` | `'self'` | Controls network requests such as remote image uploads and server-side integrations. |

> NOTE
>
> Additional CSP directives may be required depending on the Rich Text Editor features you enable, such as image upload, media embedding, external resources, custom fonts, or server-side integrations.

## Rich Text Editor example

The following example shows the Rich Text Editor configured with a Content Security Policy that meets the requirements described in this document.

`App.tsx`:

```typescript
import { HtmlEditor, Inject, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <RichTextEditorComponent id="defaultRTE" placeholder="Type something...">
        <Inject services={[Toolbar, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    );
  }
}

export default App;
```

`App.jsx`:

```javascript
import { HtmlEditor, Inject, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component {
  render() {
    return (
      <RichTextEditorComponent id="defaultRTE" placeholder="Type something...">
        <Inject services={[Toolbar, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    );
  }
}

export default App;
```

`public/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="Content-Security-Policy"
          content="default-src 'self';
                   script-src 'self' https://cdn.syncfusion.com;
                   style-src 'self' 'unsafe-inline' https://cdn.syncfusion.com
                   https://fonts.googleapis.com;
                   font-src 'self' data: https://fonts.gstatic.com;
                   img-src 'self' data: blob:;" />
    <title>Rich Text Editor with CSP</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```

In this example:

* The `<meta>` tag (or, preferably, the equivalent `Content-Security-Policy` response header) defines the Content Security Policy.
* The `script-src` directive allows scripts from the same origin and the CDN, where the editor's JavaScript runtime is hosted.
* The `style-src` directive includes `'unsafe-inline'` to support Rich Text Editor styling, along with the CDN and Google Fonts.
* The `font-src` directive allows fonts from the same origin, data URIs, and Google Fonts.
* The `img-src` directive supports image insertion from the local origin, data URIs, and blob URLs.

> IMPORTANT
>
> When using a strict `script-src` policy, generate the React build with `npm run build` and serve the static assets from the same origin as the application. Use hashed or nonce-based script attributes to allow runtime-injected inline scripts.

## Limitations

Rich Text Editor requires `style-src 'unsafe-inline'` for full functionality and proper rendering of editor UI elements.

When a strict Content Security Policy blocks inline styles, the following formatting features may not function correctly:

* **Font color** — applying a color to selected text.
* **Background color** — applying a highlight or background color to text.
* **Font family** — setting the typeface for selected content.
* **Font size** — setting the text size for selected content.
* **Text alignment** — left, center, right, and justify alignment.
* **Custom style formats** — preset and user-defined paragraph and character styles.

In these cases, the editor may continue to load, but the affected features may not render or apply formatting as expected.

In addition, the following UI-related limitations may occur when inline styles are blocked:

* Toolbar elements may not render correctly.
* Dialogs and popup components may not display as expected.
* Quick Toolbar functionality may be affected.
* Dynamically applied editor styles may be blocked by the browser.
* Overall editor appearance and user experience may become inconsistent.

> NOTE
>
> Allowing `'unsafe-inline'` under `style-src` enables inline CSS only and does not allow inline JavaScript execution. Applications that enforce a strict CSP without `'unsafe-inline'` should validate Rich Text Editor functionality and formatting behavior.

## Strict CSP considerations

Applications that do not allow:

style-src 'unsafe-inline'

may experience limitations in editor rendering, formatting functionality, and UI interactions.

If your application enforces a strict CSP, validate all required Rich Text Editor features under the configured policy and enable only the directives required for your scenario.

## Image Upload considerations

When configuring the Rich Text Editor to upload images, additional Content Security Policy directives may be required depending on the upload destination.

### Local Image Upload

For local image upload, previews may be generated using Blob URLs. To ensure these previews render correctly, the image source directive must allow blob URLs:

```http
img-src 'self' data: blob:
```

### Remote Image Upload

When images are uploaded to a remote service or loaded from a different origin, additional sources may be required:

* If images are uploaded to a remote service, include the destination domain in `img-src` and `connect-src`.
* If the upload endpoint is hosted on a different origin, add that origin to `connect-src` so that upload requests are allowed.
* If the editor loads image previews from a content delivery network (CDN) or another external source, add the corresponding URL pattern to `img-src`.

Example configuration for an application that uploads images to a remote service at `https://api.example.com`:

```http
default-src 'self';
script-src 'self' https://cdn.syncfusion.com;
style-src 'self' 'unsafe-inline' https://cdn.syncfusion.com https://fonts.googleapis.com;
font-src 'self' data: https://fonts.gstatic.com;
img-src 'self' data: blob: https://api.example.com;
connect-src 'self' https://api.example.com;
```

> IMPORTANT
>
> Always validate the destination URLs of image upload services and add only the trusted origins required by your application.

## Security considerations

When configuring Content Security Policy for the Rich Text Editor, follow these security best practices:

* **Use the strictest policy that meets your functional requirements.** Start with the recommended configuration and add only the directives required by the features you enable.
* **Avoid CSP relaxations that are not required by your application.** Rich Text Editor requires `style-src 'unsafe-inline'` for full functionality. Additional directives should be enabled only when necessary.
* **Restrict `script-src` to known origins.** Allow only the same origin and trusted CDN URLs that host the Syncfusion scripts.
* **Restrict `img-src` and `connect-src` to known origins.** Add only the trusted endpoints used by image upload, media embedding, and any server-side integrations.
* **Use HTTPS for all external resources.** Ensure that all URLs referenced in your CSP directives use the `https:` scheme.
* **Test your policy thoroughly.** After configuring CSP, verify that all Rich Text Editor features used by your application render and function as expected.

> WARNING
>
> Do not include wildcard sources (for example, `*` in `img-src` or `connect-src`) in your Content Security Policy unless absolutely required. Wildcard sources reduce the security benefit of CSP and can expose your application to cross-origin attacks.

## Troubleshooting

The following table lists common Content Security Policy issues that can affect the Rich Text Editor, along with the directive required to resolve them.

| Symptom | Required directive |
|---|---|
| Editor UI elements do not render correctly. | `style-src 'self' 'unsafe-inline'` and `font-src 'self' data:` |
| Font icons in the toolbar are missing or appear as boxes. | `font-src 'self' data: https://fonts.gstatic.com` |
| Font color, background color, font family, font size, or text alignment does not apply. | `style-src 'self' 'unsafe-inline'` |
| Dialogs, popups, or Quick Toolbar are not rendered correctly. | `style-src 'self' 'unsafe-inline'` |
| Material or Tailwind theme styles are not applied. | `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com` and `font-src 'self' data: https://fonts.gstatic.com` |
| Inserted images do not display. | `img-src 'self' data: blob:` |
| Local image upload previews do not display. | `img-src 'self' data: blob:` |
| Remote image upload fails or the upload request is blocked. | `connect-src 'self'` plus the trusted upload endpoint URL in `img-src` and `connect-src` |

> NOTE
>
> For additional guidance on resolving CSP errors in Syncfusion EJ2 controls, refer to the [Resolve CSP errors in EJ2 React Common control](https://help.syncfusion.com/react/common/how-to/resolve-csp-errors) documentation.

## See Also

* [XHTML validation](./xhtml-validation)
* [Cross-Site scripting (XSS)](./xhtml-validation#cross-site-scripting-xss)
* [Form support](./form-support)
* [Read-only mode](./read-only-mode)
* [Security Considerations in EJ2 React Common control](https://help.syncfusion.com/react/common/security-considerations)
* [Resolve CSP errors in EJ2 React Common control](https://help.syncfusion.com/react/common/how-to/resolve-csp-errors)
