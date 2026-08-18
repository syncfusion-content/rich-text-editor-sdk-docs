---
layout: post
title: CodeMirror in Angular Rich Text Editor component | Syncfusion
description: Learn here all about CodeMirror integration in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Integrate CodeMirror into Angular Rich Text Editor Component

RichTextEditor offers a basic HTML source view through the `view-source` property. For enhanced source editing features such as syntax highlighting, `CodeMirror` can be integrated with the Rich Text Editor.

## Prerequisites

Before proceeding, complete the base Rich Text Editor setup described in the Getting Started guide. The guide covers Angular CLI setup, package installation, CSS imports, module injection, and basic editor markup: [Getting Started with Angular Rich Text Editor](getting-started.md).

## Key features

- Replace the Rich Text Editor source textarea with a CodeMirror EditorView.
- Preserve the editor undo/redo history by inserting source changes through the Rich Text Editor APIs.
- Support light and dark themes and minimize bundle size via dynamic imports.

## Setup or Installation

Install the required code mirror packages using the following command:

```bash
npm install codemirror @codemirror/state @codemirror/view @codemirror/lang-html @codemirror/theme-one-dark
```

## Configure CodeMirror for the rich text editor

### Step 1: Import packages and register providers

- Import the CodeMirror modules in the component where the integration runs. Provide `ToolbarService`, `HtmlEditorService`, and `ImageService` in the component's `providers` array.

### Step 2: Configure the actionComplete event

- Configure the `actionComplete` event to call the `mirrorConversion` method when toggling between `SourceCode` and `Preview`.

```typescript
public actionCompleteHandler(e: any): void {
    if (e.targetItem && (e.targetItem === 'SourceCode' || e.targetItem === 'Preview')) {
        this.mirrorConversion(e);
    }
}
```

- On `SourceCode`: create a temporary element, append it to the Rich Text Editor's root container, and call the `renderCodeMirror` method to render the CodeMirror.

```typescript
const mirrorView: HTMLElement = createElement('div', { className: 'rte-code-mirror', id: id, styles: 'display: none;' });
this.rteObj!.rootContainer.appendChild(mirrorView);
this.renderCodeMirror(mirrorView, editorValue === null ? '' : editorValue);
```

- On `Preview`: serialize the EditorView state (`state.doc.toString()`), set it as the Rich Text Editor value, call `dataBind()`, and restore the editor focus.

```typescript
this.rteObj!.value = this.myCodeMirror!.state.doc.toString();
this.rteObj!.dataBind();
this.rteObj!.rootContainer.classList.remove('e-rte-code-mirror-enabled');
this.rteObj!.focusIn();
```

### Step 3: Configure the renderCodeMirror method

- Create a reusable `renderCodeMirror` function that builds an `EditorState` with the desired extensions (`basicSetup`, `html()`, `EditorView.lineWrapping`, and an optional theme extension), then stores the resulting `EditorView` on the component so it can be reused on subsequent `SourceCode` activations.

```typescript
const state = EditorState.create({
    doc: content,
    extensions: [ basicSetup, html(), EditorView.lineWrapping ]
});

this.myCodeMirror = new EditorView({
    state,
    parent: mirrorView
});
```

### Step 4: Implement the dark theme

- Detect the application or Syncfusion dark mode classes (for example, `document.body.classList.contains('e-dark-mode')`).
- When dark mode is active, include the `oneDark` extension (or another theme) in the CodeMirror extensions array when creating the `EditorState`.
- Toggle the theme only when recreating or updating the `EditorState`; prefer reusing the same `EditorView` and applying theme changes via state replacement if necessary.

```typescript
let extensions;
if (document.body.classList && document.body.classList.contains('tailwind3-dark') && document.body.classList.contains('e-dark-mode')) {
    extensions = [ basicSetup, html(), EditorView.lineWrapping, oneDark ]
} else {
    extensions = [ basicSetup, html(), EditorView.lineWrapping ]
}
```

## Example for CodeMirror integration

The following sample demonstrates the CodeMirror integration with the Angular Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/Integrations/code-mirror/src/app/app.ts %}
{% endhighlight %}

{% highlight css tabtitle="app.css" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/Integrations/code-mirror/src/app/app.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/Integrations/code-mirror" %}

## Additional resources

- GitHub Repository: [Angular Rich Text Editor integrations samples](https://github.com/SyncfusionExamples/angular-richtexteditor-codemirror)
- CodeMirror 6 — Official documentation and guides: https://codemirror.net/docs/  
- @codemirror packages on npm — state, view, language, and theme modules: https://www.npmjs.com/search?q=%40codemirror  
- CodeMirror examples and extensions gallery: https://codemirror.net/examples/  
- Syncfusion Angular Rich Text Editor — API reference and integration notes: https://ej2.syncfusion.com/angular/documentation/rich-text-editor/  
- Syncfusion demos — CodeMirror integration sample: https://ej2.syncfusion.com/angular/demos/#/material/rich-text-editor/overview  
