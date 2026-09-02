---
layout: post
title: Embedly in Angular Rich Text Editor component | Syncfusion
description: Learn here all about Embedly integration in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Integrate Embedly into the Angular Rich Text Editor

- The Rich Text Editor easily integrates with [Embed.ly](https://embed.ly/), a service that lets you embed rich content such as Twitter, Facebook, and many other publishing platform embeds. This integration allows users to insert links that render as interactive embed cards, enhancing the visual presentation and user experience when sharing web content.

- This can be achieved by binding the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#actioncomplete) event to the toolbar items in the [`toolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#toolbarsettings) property. In the event handler, create an element and add the appropriate class.

## Prerequisites

Before proceeding, complete the base Rich Text Editor setup described in the Getting Started guide. The guide covers Angular CLI setup, package installation, CSS imports, module injection, and basic editor markup: [Getting Started with Angular Rich Text Editor](getting-started.md).

## Key features

- Automatic conversion of inserted links into rich Embedly cards.
- Process links after the editor view initializes via `ngAfterViewInit`.
- Integrate with the editor's `actionComplete` event to detect and wrap inserted links.
- Minimal setup: include the Embedly platform script.

## Setup

- Include Embedly's platform script in `src/index.html` so cards render on the page:

```html
<script async src="https://cdn.embedly.com/widgets/platform.js"></script>
```

## Configure Embedly for the Rich Text Editor

### Step 1: Configure imports

- Import the Rich Text Editor module and the required services (`ToolbarService`, `LinkService`, `HtmlEditorService`, etc.) in your Angular standalone component.

```typescript
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor'
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent  } from '@syncfusion/ej2-angular-richtexteditor';
```

### Step 2: Configure actionComplete event
- Listen to the editor's `actionComplete`, detect link insertion, wrap the link element in a blockquote with class `embedly-card` and insert it into the editor content. After insertion the platform script renders the card.

```typescript
public actionComplete(args: any): void {
    if (args.requestType === 'Links') {
        const rteContent = document.querySelector('.e-rte-content');
        if (!rteContent) {
            return;
        }
        const links = rteContent.querySelectorAll('a');
        links.forEach(link => {
            if (!link.closest('.embedly-card')) {
                const blockquote = document.createElement('blockquote');
                blockquote.className = 'embedly-card';
                const anchor = document.createElement('a');
                anchor.href = link.href;
                anchor.textContent = link.textContent || link.href;
                blockquote.appendChild(anchor);
                blockquote.appendChild(document.createElement('p'));
                link.parentNode?.replaceChild(blockquote, link);
            }
        });
        if (window.embedly && window.embedly.lib) {
            window.embedly.lib.process(rteContent);
        }
    }
}
```

### Step 3: Run Embedly after view initialization

Implement Angular's `AfterViewInit` and its `ngAfterViewInit()` method to call `window.embedly.lib.process(...)` once the editor's view has rendered. This ensures Embedly processes newly inserted links and reliably renders cards.

```typescript
public ngAfterViewInit(): void {
    if (window.embedly && window.embedly.lib) {
        window.embedly.lib.process(document.body);
    }
}
```

## Example for Embedly integration

The following sample demonstrates the Embedly integration with the Angular Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/Integrations/embedly/src/app/app.ts %}
{% endhighlight %}

{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/Integrations/embedly/src/index.html %}
{% endhighlight %}
{% endtabs %}

## Additional Resources

- GitHub Repository: [Angular Rich Text Editor integrations samples](https://github.com/SyncfusionExamples/angular-richtexteditor-embedly)
- Embedly — Official site and docs: https://embedly.com  
- Embedly widgets/platform script docs: https://embedly.com/docs/widgets/  
- Syncfusion Rich Text Editor API: https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/ 
- Syncfusion demos — Rich Text Editor samples: https://ej2.syncfusion.com/angular/demos/#/material/rich-text-editor/overview
