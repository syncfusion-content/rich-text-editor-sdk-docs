---
layout: post
title: Tab Component in Angular Rich Text Editor component | Syncfusion
description: Learn how to integrate the Syncfusion Tab component with the Angular Rich Text Editor component of Syncfusion Essential JS 2.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Integrate Tab component into the Angular Rich Text Editor

Integrating the Tab component with the Rich Text Editor offers versatile functionality for content management scenarios. Use this combination for multi-document editing where different tabs contain separate Rich Text Editor instances, letting you work on multiple content pieces simultaneously without context switching.

## Prerequisites

Before proceeding, complete the base Rich Text Editor setup described in the Getting Started guide. The guide covers Angular CLI setup, package installation, CSS imports, module injection, and basic editor markup: [Getting Started with Angular Rich Text Editor](getting-started.md).

## Key features

- **Organized content display**: Tabs group different sections of the editor (e.g., formatting options, media insertion, code view), reducing clutter.
- **Scalability**: New features or plugins can be added as separate tabs without disrupting the existing editor layout.
- **Consistent UI**: Tabs establish a familiar navigation pattern, aligning with modern UI/UX practices and making the editor intuitive.

## Set up the Tab component

Install the Tab package if not present:

```bash
npm install @syncfusion/ej2-angular-navigations
```

## Configure the Tab component for the Rich Text Editor

### Step 1: Import packages and register providers

Import `TabModule` together with `RichTextEditorModule` and register the editor services in the component:

```typescript
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { RichTextEditorModule, ToolbarService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
```

### Step 2: Configure Tabs and the Rich Text Editor

```html
<ejs-tab>
  <e-tabitems>
    <e-tabitem>
      <ng-template #headerText>
        <div>RichTextEditor Tab 1</div>
      </ng-template>
      <ng-template #content>
        <ejs-richtexteditor></ejs-richtexteditor>
      </ng-template>
    </e-tabitem>
    <e-tabitem>
      <ng-template #headerText>
        <div>RichTextEditor Tab 2</div>
      </ng-template>
      <ng-template #content>
        <ejs-richtexteditor></ejs-richtexteditor>
      </ng-template>
    </e-tabitem>
  </e-tabitems>
</ejs-tab>
```

> **Note:** Use `ng-template` inside the Tab component for smooth rendering of the Rich Text Editor.

## Example for Tab integration

The following sample demonstrates the Tab integration with the Angular Rich Text Editor.

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/tab-integration/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/tab-integration/src/main.ts %}
{% endhighlight %}

{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/tab-integration/src/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/tab-integration" %}

## Additional resources

- GitHub Repository: [Angular Rich Text Editor with Tab Component](https://github.com/SyncfusionExamples/angular-richtexteditor-tab-integration)
- Syncfusion Tab getting started: https://ej2.syncfusion.com/angular/documentation/tab/getting-started
- Syncfusion Tab API: https://ej2.syncfusion.com/angular/documentation/api/tab/index-default 
- Syncfusion Rich Text Editor API: https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default