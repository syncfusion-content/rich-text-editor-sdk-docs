---
layout: post
title: Register Syncfusion License Key in React Rich Text Editor | Syncfusion
description: Learn how to register the Syncfusion license key when using the Syncfusion React Rich Text Editor component, with React-specific code and best practices.
platform: rich-text-editor-sdk
control: Register License Key
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Register Syncfusion<sup style="font-size:70%">&reg;</sup> License Key for React Rich Text Editor

If your React project uses the Syncfusion<sup style="font-size:70%">&reg;</sup> React Rich Text Editor (`@syncfusion/ej2-react-richtexteditor`), the generated Syncfusion<sup style="font-size:70%">&reg;</sup> license key must be registered **before** the editor or any other Syncfusion<sup style="font-size:70%">&reg;</sup> component is rendered. Registering the key activates commercial features, removes the license-validity warning banner, and unlocks the full set of Rich Text Editor capabilities (Image, Link, Quick Toolbar, HtmlEditor modules, AI Assistant, etc.).

> Syncfusion<sup style="font-size:70%">&reg;</sup> license validation is performed **offline** during application execution. No internet access is required at runtime, so apps registered with a license key can be deployed on any system.

> If you have not yet generated a key, see [Generate the Syncfusion<sup style="font-size:70%">&reg;</sup> license key](../../../../common/licensing/generate-license-key.md).

## Where to register the key in a React app

Call `registerLicense` from `@syncfusion/ej2-base` **once**, at the very top of the React application entry file — **before** any Syncfusion<sup style="font-size:70%">&reg;</sup> component (including the Rich Text Editor) is imported or rendered.

The standard entry file for a Vite, Create React App, Next.js (Pages Router), or Remix project is `src/index.tsx` / `src/main.tsx`. For Next.js App Router, register it in the root `layout.tsx` (client component) or a top-level client provider.

## Register the license key in a React (Vite / CRA) app

1. Install the base package (already pulled in transitively by the Rich Text Editor, but make sure it is present):

    ```bash
    npm install @syncfusion/ej2-base
    ```

2. Open the application entry file (`src/main.tsx` for Vite or `src/index.tsx` for CRA) and add the `registerLicense` call as the **first import**:

    ```tsx
    // src/main.tsx  (Vite)  or  src/index.tsx  (CRA)
    import { registerLicense } from '@syncfusion/ej2-base';
    import { RichTextEditorComponent, Inject, Toolbar, Image, Link, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-react-richtexteditor';

    // Registering Syncfusion license key
    registerLicense('Replace your generated license key here');

    // ...rest of app...
    ```

## Register the license key in a Next.js app (App Router)

In the App Router, the root layout is a Server Component, so wrap the registration in a Client Component that mounts at the top of the tree.

1. Create `src/components/SyncfusionLicense.tsx`:

    ```tsx
    'use client';
    import { registerLicense } from '@syncfusion/ej2-base';

    export default function SyncfusionLicense() {
      registerLicense(process.env.NEXT_PUBLIC_SYNCFUSION_LICENSE_KEY ?? 'Replace your generated license key here');
      return null;
    }
    ```

2. Import and render it at the very top of `src/app/layout.tsx`:

    ```tsx
    import SyncfusionLicense from '@/components/SyncfusionLicense';

    export default function RootLayout({ children }: { children: React.ReactNode }) {
      return (
        <html lang="en">
          <body>
            <SyncfusionLicense />
            {children}
          </body>
        </html>
      );
    }
    ```

    Storing the key in an environment variable keeps it out of source control.

## Verify registration

After starting the app (`npm run dev` or `npm start`):

1. Open the Rich Text Editor in the browser.
2. Open the browser DevTools **Console** — there should be **no** license-validity warnings.
3. The editor's full set of modules (Toolbar, Image, Link, HtmlEditor, QuickToolbar, AI Assistant) should render without restrictions.

If a warning appears, see [Licensing errors](../../../../common/licensing/licensing-errors).

## Best practices for the React Rich Text Editor

- **Register exactly once**, at the application entry point. Do not call `registerLicense` inside React components or `useEffect` hooks — re-registration on every render can cause issues.
- **Do not hard-code the key in source control.** Use a `.env` file (`VITE_SYNCFUSION_LICENSE_KEY=...`) and reference it via `import.meta.env.VITE_SYNCFUSION_LICENSE_KEY` (Vite) or `process.env.NEXT_PUBLIC_SYNCFUSION_LICENSE_KEY` (Next.js).
- **Register before the first import of any Syncfusion component** to guarantee that the Rich Text Editor (and the Block Editor / Markdown Editor if you use them) is initialized with a valid license.
- **CI/CD:** fail the build if the key is missing — see [Validate license key in CI](../../../../common/licensing/validate-license-key-ci).

## See also

* [Generate license key](../../../../common/licensing/generate-license-key)
* [Validate license key in CI](../../../../common/licensing/validate-license-key-ci)
* [Licensing errors](../../../../common/licensing/licensing-errors)
* [Licensing overview](../../../../common/licensing/overview)
* [Quick Start for React Rich Text Editor](../quick-start)
