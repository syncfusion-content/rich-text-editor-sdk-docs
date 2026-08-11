---
layout: post
title: How to Validate Syncfusion License Key in CI Services | Syncfusion
description: Learn how to register and validate a Syncfusion license key in CI/CD build environments for the Rich Text Editor SDK.
platform: rich-text-editor-sdk
control: Validate license key in CI
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Validate Syncfusion<sup>®</sup> License Key in CI Services

When Syncfusion<sup style="font-size:70%">&reg;</sup> packages are consumed from npm or NuGet in a Continuous Integration (CI) or build server environment, no Syncfusion<sup style="font-size:70%">&reg;</sup> installer is required. However, the Syncfusion<sup style="font-size:70%">&reg;</sup> license key must still be registered in the application so that builds do not produce trial/licensing warnings.

## Register a license key in the build environment

Use any developer license to [generate](./generate-license-key) a license key for the build environment. The same key can be used across build/CI agents for the corresponding version and platform.

Store the license key as a **secured environment variable** in your CI provider (for example, GitHub Actions secrets, Azure DevOps variable groups, GitLab CI/CD variables) and read it at runtime rather than hard-coding it into source control.

## JavaScript-based CI builds

Read the key from an environment variable and register it at the entry point of the application:

```ts
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense(process.env.SYNCFUSION_LICENSE_KEY as string);
```

## .NET-based CI builds

```csharp
var key = Environment.GetEnvironmentVariable("SYNCFUSION_LICENSE_KEY");
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense(key);
```

> The license key is **version and platform specific**. Ensure the key generated matches the Syncfusion<sup style="font-size:70%">&reg;</sup> version referenced in the build.

## See also

* [Generate license key](./generate-license-key)
* [Register license key](./register-license-key)
* [Licensing FAQ](./faq/faq)
