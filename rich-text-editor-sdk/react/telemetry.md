---
layout: post
title: Telemetry in React Rich Text Editor SDK | Syncfusion
description: Learn all about Telemetry in the Syncfusion React Rich Text Editor SDK, including telemetry collection, usage tracking, configuration, and troubleshooting.
platform: rich-text-editor-sdk
control: Telemetry
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Telemetry in the React Rich Text Editor SDK

Syncfusion<sup style="font-size:70%">&reg;</sup> Telemetry collects anonymous usage information to help improve product quality, usability, and feature planning for the React Rich Text Editor SDK — **Rich Text Editor**, **Block Editor**, and **Markdown Editor**.

Telemetry is enabled by default in development environments. However, you can disable it at any time if required.

> Note: Telemetry is automatically disabled in production environments. No data is collected from deployed applications or end users.

## Why telemetry is collected

Telemetry helps Syncfusion understand how the React Rich Text Editor SDK editors are used during development. This information is used to:

* Understand feature adoption and usage trends.
* Identify commonly used editors and packages.
* Prioritize future product planning and improvements.
* Detect compatibility trends across browsers, operating systems, and development environments.

## Telemetry data collected during development

Syncfusion collects only a limited set of anonymous development-time usage data. No user-generated content is collected.

The following information may be collected in development mode:

<!-- markdownlint-disable MD033 -->

<table>
	<tr>
		<th>Data</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>Component name</td>
		<td>The Syncfusion React Rich Text Editor SDK component being used (Rich Text Editor, Block Editor, or Markdown Editor).</td>
	</tr>
	<tr>
		<td>Feature Name</td>
		<td>Syncfusion feature being used.</td>
	</tr>
	<tr>
		<td>SDK name</td>
		<td>The Syncfusion React Rich Text Editor SDK package associated with the editor.</td>
	</tr>
	<tr>
		<td>SDK version</td>
		<td>The installed Syncfusion React Rich Text Editor SDK version.</td>
	</tr>
	<tr>
		<td>Framework or platform</td>
		<td>The development platform or framework, such as JavaScript, TypeScript, or React.</td>
	</tr>
	<tr>
		<td>Framework Version</td>
		<td>The version of the detected React framework.</td>
	</tr>
	<tr>
		<td>Operating system</td>
		<td>The operating system on which the application is running.</td>
	</tr>
	<tr>
		<td>System architecture</td>
		<td>Architecture information, such as x64, x86, ARM, or ARM64.</td>
	</tr>
	<tr>
		<td>Session ID</td>
		<td>Unique session identifier (hashed value).</td>
	</tr>
	<tr>
		<td>Machine Name</td>
		<td>Hashed value of browser information, so it cannot be traced back.</td>
	</tr>
	<tr>
		<td>Event name</td>
		<td>Anonymous product usage events related to React Rich Text Editor SDK component initialization or usage.</td>
	</tr>
</table>

> Note: Personal information, application data, source code, business data, authentication credentials, and license keys are not collected.

## Where telemetry applies in the React RTE-SDK

Telemetry applies only to the usage of Syncfusion<sup style="font-size:70%">&reg;</sup> React Rich Text Editor SDK components during development.

* It is limited to developer environments.
* It focuses only on product and feature usage.
* It does not apply to production applications.
* It does not collect information from end users.

Telemetry is designed to improve the developer experience without affecting production applications.

## Telemetry in development environments only

Telemetry is designed to run only in development environments.

* Enabled by default during development.
* Automatically disabled in production builds.
* No telemetry data is collected from deployed applications.

This ensures telemetry does not affect application users or live production systems.

## Data that is not collected

Syncfusion does not collect:

* Personal information such as name, email address, customer ID, company name, or account details.
* Source code.
* Documents or uploaded files.
* Application business data.
* User-generated content.
* Business data.
* Prompts or AI conversations.
* Authentication credentials.
* License keys.
* Any information that directly identifies an individual.

## Disable telemetry in the React Rich Text Editor SDK

If you do not want telemetry to be collected during development, disable it before initializing any React Rich Text Editor SDK component.

### Disable telemetry using ES modules

If you are using npm packages and ES module imports, pass the `disableTelemetry` prop on each Syncfusion React Rich Text Editor SDK editor instance. The prop is applied at the component level and works the same in Vite, Next.js, Gatsby, and Remix projects.

{% tabcontents %}

{% tabcontent Rich Text Editor %}

```tsx
import {
  RichTextEditorComponent, Inject, Toolbar, HtmlEditor
} from '@syncfusion/ej2-react-richtexteditor';

export default function App() {
  return (
    <RichTextEditorComponent disableTelemetry={true}>
      <p>Type or paste your content here.</p>
      <Inject services={[Toolbar, HtmlEditor]} />
    </RichTextEditorComponent>
  );
}
```

{% endtabcontent %}

{% tabcontent Block Editor %}
{% endtabcontent %}

{% tabcontent Markdown Editor %}

```tsx
import {
  MarkdownEditorComponent, Inject, Toolbar, MarkdownFormatter
} from '@syncfusion/ej2-react-markdowneditor';

export default function App() {
  return (
    <MarkdownEditorComponent disableTelemetry={true}>
      <p>Type or paste your content here.</p>
      <Inject services={[Toolbar, MarkdownFormatter]} />
    </MarkdownEditorComponent>
  );
}
```

{% endtabcontent %}

{% endtabcontents %}

> Note: Set `disableTelemetry={true}` on every React Rich Text Editor SDK component, **before** the editor mounts to avoid any data being collected during initialization.

### Disable telemetry globally (React)

If you prefer to disable telemetry for the whole React app at once, call the underlying base helper at app startup — before any component imports Syncfusion<sup style="font-size:70%">&reg;</sup> modules:

```ts
// src/main.tsx (or src/index.tsx)
import { enableOptionalImports } from '@syncfusion/ej2-base';

// Disable telemetry for every Syncfusion React Rich Text Editor SDK component.
enableOptionalImports({ telemetry: false });
```

> Note: `enableOptionalImports({ telemetry: false })` must be imported and called **before** any Syncfusion React Rich Text Editor SDK component is created or used.

## FAQs

### Does telemetry affect production applications?

No. Telemetry is automatically disabled in production environments and does not collect information from deployed applications or end users.

### Does telemetry collect personal or application data?

No. Telemetry collects only limited anonymous usage information related to React Rich Text Editor SDK components in development environments.

### When should `disableTelemetry` be set in a React app?

Either pass `disableTelemetry={true}` on each editor instance, or call `enableOptionalImports({ telemetry: false })` from `@syncfusion/ej2-base` at app startup, before any Syncfusion React Rich Text Editor SDK component mounts.

### Why do I see a console error in offline mode?

When running an application without internet connectivity, the telemetry module may attempt to send anonymous usage data to the telemetry service. If the network is unavailable, the browser may report a network-related error in the Console and Network tabs.

**Reason**

This can occur in the following situations:

* The application is running without internet access.
* Telemetry is enabled and attempts to transmit usage data.
* The telemetry endpoint cannot be reached due to network, DNS, or connectivity issues.
* The browser reports failed network requests such as `ERR_NAME_NOT_RESOLVED` or `ERR_INTERNET_DISCONNECTED`.

> **Note:** These messages are generated by the browser when a network request fails and do not impact Syncfusion React Rich Text Editor SDK component functionality.

**Solution**

To prevent this issue, disable telemetry at application startup by passing `disableTelemetry={true}` on each editor instance (or by calling `enableOptionalImports({ telemetry: false })` from `@syncfusion/ej2-base`) before any Syncfusion React Rich Text Editor SDK component mounts. This stops telemetry data collection entirely during development.
