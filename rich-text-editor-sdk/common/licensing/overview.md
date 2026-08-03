---
layout: post
title: Syncfusion Licensing Overview for Rich Text Editor SDK | Syncfusion
description: Learn about Syncfusion licensing requirements, license key validation, and registration for the Rich Text Editor SDK across all supported frameworks.
platform: rich-text-editor-sdk
control: Overview
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Syncfusion<sup style="font-size:70%">&reg;</sup> Licensing Overview

License key validation for Essential<sup style="font-size:70%">&reg;</sup> Studio platforms was introduced in the 2022 Volume 1 release. This licensing key validation requires developers to register a valid license key in an application when referencing any of the latest Syncfusion<sup style="font-size:70%">&reg;</sup> packages, whether from npm, NuGet, CDN, or build.

License keys can be obtained from the [My Account >> License and Downloads](https://www.syncfusion.com/account/downloads) section of the Syncfusion<sup style="font-size:70%">&reg;</sup> website. To obtain a license key, you must have an active trial, license, or community license.

Before using any Syncfusion<sup style="font-size:70%">&reg;</sup> controls, the obtained license key must be registered in the application code. Otherwise, a license validation error message will be displayed as follows:

> This application was built using a trial version of Syncfusion<sup style="font-size:70%">&reg;</sup> Essential Studio<sup style="font-size:70%">&reg;</sup>. Please include a valid license to permanently remove this license validation message. You can also obtain a free 30 day evaluation license to temporarily remove this message during the evaluation period.

## Difference between unlock key and license key

Please note that the license key is different from the installer unlock key that may have been used in the past and must be generated separately from the Syncfusion<sup style="font-size:70%">&reg;</sup> website.

* **Unlock Key** - The Syncfusion<sup style="font-size:70%">&reg;</sup> Unlock Key is used to unlock Syncfusion<sup style="font-size:70%">&reg;</sup> installers only.

* **License Key** - The Syncfusion<sup style="font-size:70%">&reg;</sup> License Key is a string that must be registered in your application to avoid licensing warnings.

> Refer to [this KB article](https://www.syncfusion.com/kb/8950/difference-between-the-unlock-key-and-licensing-key) to learn more about the difference between the Syncfusion<sup style="font-size:70%">&reg;</sup> Unlock Key and the Syncfusion<sup style="font-size:70%">&reg;</sup> License Key.

## Registering Syncfusion<sup style="font-size:70%">&reg;</sup> license keys

| Source of Syncfusion<sup style="font-size:70%">&reg;</sup> assemblies | Details | License Key needs to be registered? |
| ------------- | ------------- | ------------- |
| **npm/NuGet package** | If the Syncfusion<sup style="font-size:70%">&reg;</sup> packages are from npm ([npmjs.com](https://www.npmjs.com/~syncfusionorg)) or NuGet ([nuget.org](http://nuget.org/)), no Syncfusion<sup style="font-size:70%">&reg;</sup> installer needs to be installed. However, the Syncfusion<sup style="font-size:70%">&reg;</sup> license key must be registered in the application. | Yes |
| **Trial installer** | If the Syncfusion<sup style="font-size:70%">&reg;</sup> assemblies used are from the Trial Installer, the license key must be registered in the application for the corresponding version and platform to avoid trial license warnings. | Yes |
| **Licensed installer** | If the Syncfusion<sup style="font-size:70%">&reg;</sup> assemblies used are from the Licensed Installer, there is no need to register license keys. | No |

## See also

* [Generate license key](./generate-license-key)
* [Register license key](./register-license-key)
* [Validate license key in CI](./validate-license-key-ci)
* [Licensing errors](./licensing-errors)
* [Licensing FAQ](./faq/faq)
