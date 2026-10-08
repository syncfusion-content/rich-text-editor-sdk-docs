---
layout: post
title: Events in Angular Modern Rich Text Editor | Syncfusion
description: Learn about the events available in the Angular Modern Rich Text Editor, including content changes, focus, toolbar updates, and editor actions.
control: Modern Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Events in Angular Modern Rich Text Editor

The Modern Rich Text Editor component emits various events to notify your application about user interactions, state changes, and content modifications. This guide covers all available events and how to handle them.

---

## change

The [`change`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/index-default#change) event is raised whenever the editor content changes, such as when text is inserted, deleted, moved, replaced, or formatted. Its event arguments provide the updated document and selection states, the type of action performed, and the nodes affected by the change.

The following example demonstrates how to handle the `change` event and display the action performed along with the primary affected element.

{% tabs %}

{% highlight ts tabtitle="app.component.ts" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/events/change/src/app.component.ts %}

{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/events/change/src/app.component.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/events/change/" %}

---

## created

The [`created`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/index-default#created) event is raised after the Rich Text Editor UI component has been successfully initialized and rendered. Use this event to perform setup tasks that depend on the editor instance or its rendered DOM elements.

The following example demonstrates how to handle the `created` event and display a notification confirming that the editor is ready for interaction.

{% tabs %}

{% highlight ts tabtitle="app.component.ts" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/events/created/src/app.component.ts %}

{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/events/created/src/app.component.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/events/created/" %}

---

## destroyed

The [`destroyed`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/index-default#destroyed) event is raised when the Rich Text Editor component is destroyed and removed from the application. It can be used to perform cleanup tasks, such as releasing resources, removing event handlers, or resetting related state.

The following example demonstrates how to handle the `destroyed` event and log the destruction notification to confirm cleanup and resource release.

{% tabs %}

{% highlight ts tabtitle="app.component.ts" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/events/destroyed/src/app.component.ts %}

{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/events/destroyed/src/app.component.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/events/destroyed/" %}

---

## focus

The [`focus`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/index-default#focus) event is raised when the editor receives focus, either through user interaction or a method call. Its event arguments identify the event name, indicate whether the focus was user-initiated, and specify the focus source.

The following example demonstrates how to handle the `focus` event and log a notification indicating that the editor has received focus and is ready for user input.

{% tabs %}

{% highlight ts tabtitle="app.component.ts" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/events/focus/src/app.component.ts %}

{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/events/focus/src/app.component.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/events/focus/" %}

---

## blur

The [`blur`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/index-default#blur) event is raised when the editor loses focus, either through user interaction or a method call. Its event arguments identify the event name, indicate whether the blur was caused by user interaction, provide the focus event, and specify the source.

The following example demonstrates how to handle the `blur` event and log a notification indicating that the editor has lost focus and user input has ceased.

{% tabs %}

{% highlight ts tabtitle="app.component.ts" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/events/blur/src/app.component.ts %}

{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/events/blur/src/app.component.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/events/blur/" %}

---

## actionBegin

The [`actionBegin`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/index-default#actionbegin) event is raised before an editor action is executed, such as inserting, deleting, formatting, or modifying content. It provides details about the pending action and allows applications to monitor or customize the editor behavior before the operation begins.

The following example demonstrates how to handle the `actionBegin` event and log pre-action events with timestamps to track when operations are initiated before they complete.

{% tabs %}

{% highlight ts tabtitle="app.component.ts" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/events/actionBegin/src/app.component.ts %}

{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/events/actionBegin/src/app.component.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/events/actionBegin/" %}

---

## actionComplete

The [`actionComplete`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/index-default#actioncomplete) event is raised after an editor action, such as inserting, deleting, formatting, or modifying content, has been completed. It provides details about the completed action so applications can respond, update related state, or perform follow-up processing.

The following example demonstrates how to handle the `actionComplete` event and log post-action events with timestamps to track when operations have successfully finished and are ready for follow-up processing.

{% tabs %}

{% highlight ts tabtitle="app.component.ts" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/events/actionComplete/src/app.component.ts %}

{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/events/actionComplete/src/app.component.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/events/actionComplete/" %}
