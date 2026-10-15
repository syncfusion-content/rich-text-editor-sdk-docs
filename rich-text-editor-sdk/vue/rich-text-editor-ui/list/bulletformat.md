---
layout: post
title: BulletFormat List in Vue Modern Rich Text Editor | Syncfusion
description: Learn how to get configure Bullet Format List in Vue Modern Rich Text Editor and explore setup with core feature examples.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
appliesto: UI Component Suite, Rich Text Editor SDK
---

# BulletFormat List in Vue Modern Rich Text Editor

The BulletFormat List feature enables users to create and manage unordered lists with bullet markers. Bulleted lists are ideal for presenting key points, feature lists, and any content that does not require a specific order.

---

## List Type

### Supported Bullet Styles

The Rich Text Editor supports the following bullet styles for unordered lists:

**Available Bullet Styles:**
- `'disc'` - Filled circle bullet (●)
- `'circle'` - Hollow circle bullet (○)
- `'square'` - Square bullet (■)

> **Default Styles:** By default, the Rich Text Editor provides three standard bullet styles accessible from the toolbar dropdown: Disc, Circle, and Square.

The following example demonstrates how to add the bullet format list in toolbar of the Vue Modern Rich Text Editor.

{% tabs %}

{% highlight html tabtitle="app.vue" %}

{% include code-snippet/rich-text-editor-sdk/vue/richtexteditor-ui/List/BulletFormat-List1/app.vue %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/vue/richtexteditor-ui/List/BulletFormat-List1/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/richtexteditor-ui/List/BulletFormat-List1/" %}


---

## Custom List Items

You can customize which bullet styles are available in the toolbar by modifying the `bulletFormatListItems` property. This allows you to define a subset of supported styles or add custom ones tailored to your application's needs.

**Property:** `listSettings.bulletFormatListItems`

The following example demonstrates how to customize the bullet format list in the Vue Modern Rich Text Editor.

{% tabs %}

{% highlight html tabtitle="app.vue" %}

{% include code-snippet/rich-text-editor-sdk/vue/richtexteditor-ui/List/BulletFormat-List2/app.vue %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/vue/richtexteditor-ui/List/BulletFormat-List2/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/richtexteditor-ui/List/BulletFormat-List2/" %}

---

## Commands Support

Commands provide programmatic control over BulletFormat List operations. Use these commands to create, modify, and manage bulleted lists within the editor.

### Create Bulleted List

**Command:** `bulletList`

**Description:** Inserts a bulleted list at the current cursor position or applies bullet formatting to selected content.

**Options:**
- `listType` (optional) - Specify the bullet style (e.g., `'disc'`, `'circle'`, `'square'`)

**Example:**

```typescript
// Insert a bulleted list with default disc bullets
this.parent.commands().numberedList().apply();
```

### Change Bullet Style

**Command:** `setListStyle`

**Description:** Changes the bullet style of an existing bulleted list without creating a new list.

**Options:**
- `listType` (required) - The new bullet style to apply

**Available Styles:**
- `'disc'` - Filled circle bullet (●)
- `'circle'` - Hollow circle bullet (○)
- `'square'` - Square bullet (■)

**Example:**

```typescript
// Change to disc bullets
editor.commands().bulletList().options({ listType: 'square' }).apply();
```

---

## Related Resources

- [List Formatting and Configuration Overview](./formatting-and-configuration) - General list feature overview
- [NumberFormat List Configuration](./numberformat) - Numbered list setup and usage
- [Checklist Configuration](./checklist) - Checklist setup and usage