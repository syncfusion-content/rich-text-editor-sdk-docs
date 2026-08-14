---
layout: post
title: Read-Only Mode in React Block Editor | Syncfusion
description: Learn how to enable read-only mode in the React Block Editor to display content without allowing users to edit it.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Read-Only Mode in React Block Editor

The Block Editor provides a read-only mode to control user interaction with the editor. This allows users to view formatted content without editing capability. Read-only mode is useful for displaying published content, archived documents, or preventing accidental modifications during review or approval workflows.

## Read-only mode

Read-only mode prevents users from editing the content in the Block Editor while preserving the ability to view formatted text. When enabled, the editor becomes non-interactive: editing tools, toolbars, and input are disabled, but all formatting remains visible.

To enable read-only mode, set the [readonly](https://ej2.syncfusion.com/react/documentation/api/blockeditor/index-default#readonly) property to `true`. The content remains viewable with its formatting intact, but all editing is restricted.

The following example demonstrates how to enable read-only mode in the Block Editor:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/readonly/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/readonly/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/block-editor/readonly" %}
        
