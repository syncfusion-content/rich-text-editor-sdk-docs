---
layout: post
title: NumberFormat List in Angular Modern Rich Text Editor | Syncfusion
description: Learn how to get configure Number Format List in Angular Modern Rich Text Editor and explore setup with core feature examples.
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# NumberFormat List Configuration

The NumberFormat List feature enables users to create and manage ordered lists with numeric markers. Numbered lists are essential for presenting sequential information, step-by-step instructions, ranked items, and any content that requires a specific order.

---

## List Type

### Supported Number Formats

The Rich Text Editor supports the following numbering formats for ordered lists:

**Available Numbering Formats:**
- `'decimal'` - Standard numeric (1, 2, 3, ...)
- `'lower-alpha'` - Lowercase alphabetic (a, b, c, ...)
- `'upper-alpha'` - Uppercase alphabetic (A, B, C, ...)
- `'lower-roman'` - Lowercase Roman numerals (i, ii, iii, ...)
- `'upper-roman'` - Uppercase Roman numerals (I, II, III, ...)
- `'lower-greek'` - Lowercase Greek letters (α, β, γ, ...)

**Default Formats:**
By default, the Rich Text Editor provides six standard number formats accessible from the toolbar dropdown:
- Number
- Lower Greek
- Lower Roman
- Upper Alpha
- Lower Alpha
- Upper Roman

The following example demonstrates how to add the number format list in toolbar of the Angular Modern Rich Text Editor.

{% tabs %}

{% highlight ts tabtitle="app.component.ts" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/list/numberformat/NumberFormat-List1/src/app.component.ts %}

{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/list/numberformat/NumberFormat-List1/src/app.component.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/list/numberformat/NumberFormat-List1/" %}

---

## Custom List Items

You can customize which number formats are available in the toolbar by modifying the `numberFormatListItems` property. This allows you to define a subset of supported formats or add custom ones tailored to your application's needs.

**Property:** `listSettings.numberFormatListItems`

The following example demonstrates how to customize the number format list in the Angular Modern Rich Text Editor.

{% tabs %}

{% highlight ts tabtitle="app.component.ts" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/list/numberformat/NumberFormat-List2/src/app.component.ts %}

{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/list/numberformat/NumberFormat-List2/src/app.component.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/list/numberformat/NumberFormat-List2/" %}

---

## Commands Support

Commands provide programmatic control over NumberFormat List operations. Use these commands to create, modify, and manage numbered lists within the editor.

### Create Numbered List

**Command:** `numberedList`

**Description:** Inserts a numbered list at the current cursor position or applies numbering to selected content.

**Options:**
- `listType` (optional) - Specify the numbering format (e.g., `'decimal'`, `'lower-roman'`, `'upper-alpha'`)

**Example:**

```ts
// Insert a numbered list with default decimal format
this.rteObj.commands().numberedList().apply();
```

### Change Number Format

**Command:** `setListStyle`

**Description:** Changes the numbering format of an existing numbered list without creating a new list.

**Options:**
- `listType` (required) - The new numbering format to apply

**Available Formats:**
- `'decimal'` - Standard numbering (1, 2, 3, ...)
- `'lower-alpha'` - Lowercase letters (a, b, c, ...)
- `'upper-alpha'` - Uppercase letters (A, B, C, ...)
- `'lower-roman'` - Lowercase Roman numerals (i, ii, iii, ...)
- `'upper-roman'` - Uppercase Roman numerals (I, II, III, ...)
- `'lower-greek'` - Greek letters (α, β, γ, ...)

**Example:**

```ts
// Change current list to Uppercase letters
this.rteObj.commands().numberedList().options({ listType: 'upper-alpha' }).apply();
```

---

## Related Resources

- [List Formatting and Configuration Overview](./formatting-and-configuration) - General list feature overview
- [BulletFormat List Configuration](./bulletformat) - Bulleted list setup and usage
- [Checklist Configuration](./checklist) - Checklist setup and usage
