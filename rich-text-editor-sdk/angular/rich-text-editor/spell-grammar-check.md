---
layout: post
title: Spell and Grammar Check in Angular Rich Text Editor | Syncfusion
description: Learn how to integrate spell and grammar checking in the Angular Rich Text Editor using WProofreader to improve content accuracy and writing quality.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Spell and Grammar Check in Angular Rich Text Editor

WProofreader is a powerful tool that enhances content quality by detecting and correcting spelling and grammar errors in real-time as users type. This functionality significantly improves the professionalism of your content and ensures error-free text.

**Key features of WProofreader:**

* **Real-time spell checking**: instantly detects spelling mistakes as users type, providing immediate corrections and suggestions.
* **Multilingual support**: supports multiple languages, allowing users to check and correct text in different language contexts.
* **Customization options**: users can customize dictionary settings, add specific terms, and adjust spell-checking rules to match their writing style and requirements.
* **Integration capabilities**: seamlessly integrates with various content management systems (CMS) and applications, enhancing editing workflows without requiring users to leave their editing environment.

## Set up the WProofreader

To integrate the `WProofreader` refer the following link : https://webspellchecker.com, install the [@webspellchecker/wproofreader-sdk-js](https://www.npmjs.com/package/@webspellchecker/wproofreader-sdk-js) package using npm or yarn:

```bash
npm install @webspellchecker/wproofreader-sdk-js
```

```bash
yarn add @webspellchecker/wproofreader-sdk-js
```

## Configure WProofreader for Rich Text Editor

After installing the package, integrate WProofreader with the Angular Rich Text Editor by following these steps:

1. Import the WProofreader module into your Angular component.
2. Configure the `container` property of WProofreader as the editable element of the Rich Text Editor's inputElement.
3. Use the `ViewChild` decorator to access the Angular Rich Text Editor instance.
4. Set the `lang` property to specify the language of the text to be checked.
5. Configure the activation key in the `serviceId` property.

Below is an example code snippet to integrate WProofreader with the Syncfusion Angular Rich Text Editor

```typescript

import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { RichTextEditorModule, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';
import WProofreader from '@webspellchecker/wproofreader-sdk-js';

@Component({
    imports: [RichTextEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor #spellEditor id='editor' [value]='value'>
  </ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
})
export class AppComponent implements AfterViewInit {
    @ViewChild("spellEditor")
    public spellEditor!: RichTextEditorComponent;
    title = 'WebSpellChecker-RichTextEditor';
    ngAfterViewInit(): void {
        WProofreader.init({
            container: this.spellEditor.inputElement,
            lang: 'en_US',
            serviceId: "TDHiXV50gZlQaDw"
        });
    }
    public value: string = "<p>Enter you\'re text here with real spelling and grammer mistakes to see how WProofreader work. Alot of potential errors will be underlined; hover on the marked wods for instant correction suggesstions.</p>";
}

```

Below is a GIF demonstrating how to integrate WProofreader with the Syncfusion Angular Rich Text Editor

![WebSpellChecker](images/spell-grammar-check.gif)
