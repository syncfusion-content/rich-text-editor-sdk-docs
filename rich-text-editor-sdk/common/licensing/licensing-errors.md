---
layout: post
title: Syncfusion License Validation Errors and Solutions | Syncfusion
description: Learn about common Syncfusion license validation errors in Rich Text Editor SDK applications and how to resolve them.
platform: rich-text-editor-sdk
control: Licensing errors
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Syncfusion<sup style="font-size:70%">&reg;</sup> Licensing Errors

Licensing error popups appear with various messages under different circumstances. Here are some ways to resolve the common issues.

## License Key Not Registered / Trial Expired

The following error message appears if a Syncfusion<sup style="font-size:70%">&reg;</sup> license key has not been registered in the application or if the trial key has expired after 30 days.

**Error message:** <br /> This application was built using a trial version of Syncfusion<sup style="font-size:70%">&reg;</sup> Essential Studio<sup style="font-size:70%">&reg;</sup>. You should include the valid license key to remove the license validation message permanently.

**Solution:**

1. If you **have a valid Syncfusion<sup style="font-size:70%">&reg;</sup> license**, you can **generate a license key for a specific version and product** from [this page](https://www.syncfusion.com/account/downloads).
2. If you **have a Syncfusion<sup style="font-size:70%">&reg;</sup> account and an active trial**, you can **generate the trial license key for a specific version and platform** from [this page](https://www.syncfusion.com/account/manage-trials/downloads).
3. If you **have a Syncfusion<sup style="font-size:70%">&reg;</sup> account but no active trials**, [purchase a license](https://www.syncfusion.com/sales/products) or [start your 30-day free trial](https://www.syncfusion.com/account/manage-trials/start-trials), then generate the key.
4. If you **do not already have a Syncfusion<sup style="font-size:70%">&reg;</sup> account**, create one [here](https://www.syncfusion.com/account) and purchase a license or start a free trial, then generate the key.

After obtaining the key, [register it](./register-license-key) in the application.

## Invalid Key / Platform Mismatch

This error appears when the registered key does not match the referenced Syncfusion<sup style="font-size:70%">&reg;</sup> **version** or **platform**.

**Solution:** Generate a key that matches the exact version and platform used in the application. Refer to [which version key to use](https://www.syncfusion.com/kb/8951/which-version-syncfusion-license-key-should-i-use-in-my-application).

## See also

* [Generate license key](./generate-license-key)
* [Register license key](./register-license-key)
* [Licensing FAQ](./faq/faq)
