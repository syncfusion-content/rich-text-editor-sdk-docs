---
layout: post
title: Browser Support for Rich Text Editor SDK | Syncfusion
description: Learn about browser support and required polyfills for the Syncfusion Rich Text Editor SDK, including CDN and Node.js setup for IE 11.
platform: rich-text-editor-sdk
control: Browser Support
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Browser support for the Rich Text Editor SDK

The Syncfusion<sup style="font-size:70%">&reg;</sup> Rich Text Editor SDK is supported in all modern browsers. The following table lists the supported browser families for the Rich Text Editor, Block Editor, and Markdown Editor components.

| Browser | Supported versions |
|---|---|
| Chrome | Latest |
| Firefox | Latest |
| Opera | Latest |
| Edge | 13+ |
| Internet Explorer (IE) | 11+ |
| Safari | 9+ |
| iOS Safari | 9+ |
| Android Browser / Chrome for Android | 4.4+ |
| Windows Mobile | IE 11+ |

## Required polyfills

The following polyfills are required to run the Rich Text Editor in certain browsers:

| Browser | Required polyfills |
|---:|:---|
| Chrome (latest), Firefox (latest), Opera (latest), Edge, Safari 9+ | None |
| Internet Explorer 11 | ES6 Promise polyfill |

The Rich Text Editor is supported in IE 11 when the ES6 Promise polyfill is present.

## Using CDN

To include the ES6 Promise polyfill via CDN, add one of the following `<script>` tags to the HTML page (choose one of the provided variants). The polyfill **must be loaded before** the Syncfusion<sup style="font-size:70%">&reg;</sup> scripts so that `Promise` is available when the editor initializes.

```html
<!-- Full (development) -->
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.js"></script>
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js"></script>

<!-- Minified (production) -->
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>
```

In a Vite / CRA / Next.js app, add the script tag to the top of `public/index.html` (CRA) or to your root layout (`<head>` in App Router) so it is present before the Rich Text Editor module loads.

## Node.js

If you are using a Node.js environment (for example, SSR with Next.js) and need the ES6 Promise polyfill:

Install:

```bash
npm install es6-promise
# or
yarn add es6-promise
```

Use in code:

```js
var Promise = require('es6-promise').Promise;
```

For more details, refer to the polyfill project: https://github.com/stefanpenner/es6-promise.

## See also

* [System requirements](./system-requirements)
* [Quick Start for Rich Text Editor](../react/rich-text-editor/quick-start)
* [Version compatibility for Rich Text Editor SDK](./version-compatibility)
