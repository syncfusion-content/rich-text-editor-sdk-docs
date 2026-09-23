---
layout: post
title: Paste Cleanup in Angular Block Editor | Syncfusion
description: Learn how to configure paste cleanup in Angular Block Editor to control pasted content, preserve or remove formatting, and paste content as plain text.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Paste Cleanup in Angular Block Editor

The Block Editor component provides robust paste clean-up functionalities to ensure that pasted content integrates seamlessly and maintains styling and structural consistency. This feature helps remove unwanted formatting, scripts, and elements copied from external sources like web pages or word processors.

You can configure the paste behavior using the [pasteCleanupSettings](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#pastecleanupsettings) property, which allows you to define how content is handled when pasted into the editor.

## Configuring allowed styles

The [allowedStyles](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/pastecleanupsettingsmodel#allowedstyles) property lets you define which CSS styles are permitted in pasted content. Any style not in this list is stripped out, ensuring that only desired visual attributes are preserved.

By default, the following styles are allowed: `font-weight`, `font-style`, `text-decoration`, and `text-transform`.

In the following example, only `font-weight` and `font-style` are retained from the pasted content. All other inline styles are removed:

```typescript
import { Component } from '@angular/core';
import { BlockEditorModule } from '@syncfusion/ej2-angular-blockeditor';
import { PasteCleanupSettingsModel } from '@syncfusion/ej2-blockeditor';

@Component({
    imports: [BlockEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `
        <div class="container" style="margin: 50px;">
            <ejs-blockeditor [pasteCleanupSettings]="pasteCleanupSettings" />
        </div>`
})
export class AppComponent {
    public pasteCleanupSettings: PasteCleanupSettingsModel = {
        allowedStyles: ['font-weight', 'font-style']
    };
}
```

## Setting denied tags

The [deniedTags](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/pastecleanupsettingsmodel#deniedtags) property specifies a list of HTML tags to be removed from pasted content. This is useful for stripping potentially problematic elements such as `<script>` or `<iframe>` tags. By default, this property is an empty array, so no tags are removed.

In the following example, any `<script>` or `<iframe>` tags found in the pasted content are removed, preventing unwanted behavior or styling issues:

```typescript
import { Component } from '@angular/core';
import { BlockEditorModule } from '@syncfusion/ej2-angular-blockeditor';
import { PasteCleanupSettingsModel } from '@syncfusion/ej2-blockeditor';

@Component({
    imports: [BlockEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `
        <div class="container" style="margin: 50px;">
            <ejs-blockeditor [pasteCleanupSettings]="pasteCleanupSettings" />
        </div>`
})
export class AppComponent {
    public pasteCleanupSettings: PasteCleanupSettingsModel = {
        deniedTags: ['script', 'iframe']
    };
}
```

The example below demonstrates the usage of paste settings that allow only specific styles and also remove specific tags from the pasted content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/paste-cleanup/allowedstyle/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/paste-cleanup/allowedstyle/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/paste-cleanup/allowedstyle/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/paste-cleanup/allowedstyle" %}

## Disable keep format

By default, the editor retains the formatting of pasted content (for example, bold, italics, links). You can disable this by setting the [keepFormat](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/pastecleanupsettingsmodel#keepformat) property to `false`. When disabled, the editor pastes content as plain text, regardless of the `allowedStyles` configuration:

```typescript
import { Component } from '@angular/core';
import { BlockEditorModule } from '@syncfusion/ej2-angular-blockeditor';
import { PasteCleanupSettingsModel } from '@syncfusion/ej2-blockeditor';

@Component({
    imports: [BlockEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `
        <div class="container" style="margin: 50px;">
            <ejs-blockeditor [pasteCleanupSettings]="pasteCleanupSettings" />
        </div>`
})
export class AppComponent {
    public pasteCleanupSettings: PasteCleanupSettingsModel = {
        keepFormat: false
    };
}
```

## Allow plain text

To paste content as plain text, stripping all HTML tags and inline styles, set the [plainText](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/pastecleanupsettingsmodel#plaintext) property to `true` in [pasteCleanupSettings](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#pastecleanupsettings). This ensures that only raw text is inserted, which is ideal for maintaining strict content consistency. By default, this property is `false`.


```typescript
import { Component } from '@angular/core';
import { BlockEditorModule } from '@syncfusion/ej2-angular-blockeditor';
import { PasteCleanupSettingsModel } from '@syncfusion/ej2-blockeditor';

@Component({
    imports: [BlockEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `
        <div class="container" style="margin: 50px;">
            <ejs-blockeditor [pasteCleanupSettings]="pasteCleanupSettings" />
        </div>`
})
export class AppComponent {
    public pasteCleanupSettings: PasteCleanupSettingsModel = {
        plainText: true
    };
}
```

The example below demonstrates the usage of paste settings that disable keep format and allow plain text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/paste-cleanup/plaintext/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/paste-cleanup/plaintext/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/paste-cleanup/plaintext/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/paste-cleanup/plaintext" %}

### Events

The Block Editor provides events to monitor and interact with the paste action:

| Event | Args | Description |
|-------|------|-------------|
| [beforePasteCleanup](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#beforepastecleanup) | `BeforePasteCleanupEventArgs` | Triggers before the content is pasted into the editor. |
| [afterPasteCleanup](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#afterpastecleanup) | `AfterPasteCleanupEventArgs` | Triggers after the content has been pasted into the editor. |

Bind the events on the editor element and pass `$event` to your handler if you want to inspect the args:

```html
<ejs-blockeditor
    (beforePasteCleanup)="onBeforePasteCleanup($event)"
    (afterPasteCleanup)="onAfterPasteCleanup($event)" />
```

```typescript
import { BeforePasteCleanupEventArgs, AfterPasteCleanupEventArgs } from '@syncfusion/ej2-blockeditor';

public onBeforePasteCleanup(args: BeforePasteCleanupEventArgs): void {
    // Inspect or rewrite args.blocks before they are inserted.
}

public onAfterPasteCleanup(args: AfterPasteCleanupEventArgs): void {
    // React to the inserted content, e.g. log the paste for analytics.
}
```