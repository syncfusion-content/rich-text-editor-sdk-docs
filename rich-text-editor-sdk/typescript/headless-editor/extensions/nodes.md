---
layout: post
title: Node Extensions in TypeScript Headless Editor | Syncfusion
description: Learn about the node extensions available in the TypeScript Headless Editor for registering block, inline, and leaf nodes in the editor schema.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Node Extensions in TypeScript Headless Editor

Node extensions register the schema nodes used by the editor to model content. Every node type — block, inline, or leaf — is contributed by an extension you register when creating an editor.

## Node groups

| Group | Extensions |
|-------|------------|
| Fundamental | [Document](nodes/document), [Text](nodes/text), [Paragraph](nodes/paragraph) |
| Headings and Blocks | [Heading](nodes/heading), [Block Quote](nodes/blockquote), [Callout](nodes/callout), [Code Block](nodes/code-block), [Horizontal Rule](nodes/horizontal-rule), [Hard Break](nodes/hard-break) |
| Lists | [Bullet List](nodes/bullet-list), [Ordered List](nodes/ordered-list), [Task List](nodes/task-list) |
| Tables | [Table](nodes/table) |
| Media | [Image](nodes/image) |
| Collapsible Content | [Collapsible](nodes/collapsible) |

## Preview sample

The example below mounts an editor with all available node extensions.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/headless-editor/extensions/nodes/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/headless-editor/extensions/nodes/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/headless-editor/extensions/nodes" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/headless-editor/extensions/nodes/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/headless-editor/extensions/nodes/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/headless-editor/extensions/nodes" %}
{% endif %}