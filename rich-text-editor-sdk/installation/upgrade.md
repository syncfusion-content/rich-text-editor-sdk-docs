---
layout: post
title: Upgrading Syncfusion Rich Text Editor SDK | Syncfusion
description: Learn how to upgrade the Syncfusion Rich Text Editor SDK to the latest version, including release cadence, upgrade options, and licensing notes.
platform: rich-text-editor-sdk
control: Upgrade
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Upgrading Syncfusion<sup style="font-size:70%">&reg;</sup> Rich Text Editor SDK

Syncfusion<sup style="font-size:70%">&reg;</sup> releases new volumes every three months, each introducing new features. Service Pack releases follow to address major bug fixes for the volume releases. You can upgrade to the latest version from any installed Syncfusion<sup style="font-size:70%">&reg;</sup> version.

## Upgrading npm packages (React, Angular, Vue, JavaScript, TypeScript)

Update the Rich Text Editor SDK packages to the latest published version using your package manager. For example, to upgrade the React Rich Text Editor package:

```bash
npm install @syncfusion/ej2-react-richtexteditor@latest
```

To upgrade all Syncfusion<sup style="font-size:70%">&reg;</sup> packages in the project, update each `@syncfusion/*` dependency in `package.json` to the target version and reinstall:

```bash
npm install
```

> Ensure all `@syncfusion/*` packages in a project use the **same version** to avoid runtime incompatibilities.

## Upgrading NuGet packages (Blazor, ASP.NET Core, ASP.NET MVC, MAUI)

Update the Syncfusion<sup style="font-size:70%">&reg;</sup> NuGet packages to the latest version through the NuGet Package Manager or the .NET CLI:

```bash
dotnet add package Syncfusion.Blazor.RichTextEditor
```

## Upgrading through the installer

The most recent version can be installed by downloading the latest installer from the [Downloads](https://www.syncfusion.com/account/downloads) page. Existing installed versions do not need to be uninstalled before upgrading. Volume and Service Pack releases are independent; you can install the latest Service Pack directly if it contains the fixes you need.

## Licensing after upgrade

> Starting with 2022 Volume 1 (v20.1.0.47), all Syncfusion<sup style="font-size:70%">&reg;</sup> customers—evaluators and paid customers—who use Syncfusion installers, npm, or NuGet packages must generate and register the corresponding platform- and version-specific license key in their projects.

After upgrading, regenerate and register a license key that matches the new version. For more information, see the [Licensing overview](../common/licensing/overview).

## See also

* [System Requirements](../common/system-requirements)
* [Release Notes](../common/release-notes-index)
* [Licensing overview](../common/licensing/overview)
