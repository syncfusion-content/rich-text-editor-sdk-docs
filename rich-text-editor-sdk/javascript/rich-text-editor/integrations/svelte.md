---
layout: post
title: Svelte-TS in Typescript Rich text editor component | Syncfusion
description: Learn here all about Svelte-TS integration in Syncfusion Typescript Rich text editor component of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Svelte-TS
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Integrate Svelte-TS with Rich Text Editor Component

`Svelte-TS` combines the Svelte UI framework with TypeScript, letting you author .svelte components with static typing and improved editor tooling. It compiles reactive components to highly efficient JavaScript while providing `type safety, better refactoring, and fewer runtime errors`.

## Key features

- Lightweight Svelte component integration for the Syncfusion Rich Text Editor.  
- Support for toolbar modules, HTML source editing, image/link handling, and quick toolbar.  
- Seamless life cycle handling using onMount and onDestroy for DOM-dependent initialization and cleanup.  
- Easy theming via Syncfusion built-in themes and CSS imports. 

## Set up development environment

Run the following commands to set up a Svelte-TS application:

```bash
npm create vite@latest my-app -- --template svelte-ts
```

- Choose `no` for the `Use roll down-vite` prompt popup.

![Rolldown_Vite_Setup](images/svelte-ts/rolldown_vite_setup.png)

- choose `no` for the `Install with npm and start now?` prompt popup.

![NPM_Setup](images/svelte-ts/npm_setup.png)

```bash
cd my-app
npm run dev
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Rich Text Editor packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install Rich Text Editor component, use the following command:

```bash
npm install @syncfusion/ej2-richtexteditor
```

## Import the Syncfusion CSS styles

Add the following imports inside the `~/src/app.css` file to include the `tailwind3` theme styles:

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';;

{% endhighlight %}
{% endtabs %}

> You can check out the [themes](https://ej2.syncfusion.com/documentation/appearance/theme) section to know more about built-in themes and CSS reference for individual controls.

## Adding Rich Text Editor control

### Step 1: import required packages
- Import Svelte life cycle hooks and the RichTextEditor with Toolbar, Link, Image, HtmlEditor, and QuickToolbar modules, then inject those modules to enable toolbar, link/image support, HTML source editing, and quick-toolbar

```typescript
import { onMount, onDestroy } from 'svelte';
import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
  
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);
```

### Step 2: Use of onMount and onDestroy method
- Use `onMount` to initialize and append the RichTextEditor after the component is mounted with `editorElement` binded element. onMount is a `Svelte life cycle hook` that runs once when the component is inserted into the DOM.

```typescript
onMount(() => {
  editor = new RichTextEditor({
    value: '<p>The Rich Text Editor control is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.Users can format their content using standard toolbar commands.</p><p><b> Key features: </b></p><ul><li><p>Provides IFRAME and DIV modes </p></li><li><p>Capable of handling markdown editing.</p></li><li><p>Contains a modular library to load the necessary functionality on demand.</p></li><li><p>Provides a fully customizable toolbar.</p></li><li><p>Provides HTML view to edit the source directly for developers.</p></li><li><p>Supports third - party library integration.</p></li><li><p>Allows preview of modified content before saving it.</p></li><li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li></ul>',
    toolbarSettings: { items: ['Bold', 'Italic', 'Underline', 'StrikeThrough', 'FontName', 'FontSize', 'FontColor', 'BackgroundColor', 'LowerCase', 'UpperCase', '|', 'Formats',
    'Alignments', 'OrderedList', 'UnorderedList', 'Outdent', 'Indent', '|', 'CreateLink', 'Image', '|', 'ClearFormat', 'Print', 'SourceCode', 'FullScreen', '|', 'Undo', 'Redo'] },
  });
  editor.appendTo('#editor');
});
```

```html
<div class="editor-container">
  <h2>Rich Text Editor Demo</h2>
  <div id="editor"></div>
</div>
```

- use `onDestroy` to destroy the RichTextEditor instance when the component is unmounted.

```typescript
onDestroy(() => {
    editor.destroy();
});
```

## Example for Integration of Rich Text Editor with Svelte Framework

Below is the example integration of Rich Text Editor with `Svelte` framework.

{% tabs %}
{% highlight ts tabtitle="App.svelte" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/integrations/svelte/src/App.svelte %}
{% endhighlight %}

{% endtabs %}

## Additional Resources

- GitHub Repository: [Svelte Rich Text Editor integrations samples](https://github.com/SyncfusionExamples/richtexteditor-svelte)
- Syncfusion themes and appearance guide: https://ej2.syncfusion.com/documentation/appearance/theme  
- Svelte official site and docs: https://svelte.dev/  
- Vite Svelte-TS template: https://vite.dev/guide/  
