---
layout: post
title: Editor in TypeScript Headless Editor | Syncfusion
description: Learn how to create, mount, configure, and dispose a HeadlessEditor instance in the TypeScript Headless Editor.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Editor

The `HeadlessEditor` class is the single entry point for the Headless Editor. You create one with `HeadlessEditor.create()`, mount it into a DOM container, interact with it through commands, observe it through events, and dispose it with `destroy()`.

## Creating an editor

Use the static `HeadlessEditor.create()` method to instantiate the editor. The constructor is internal — `create()` is the only public way to obtain an instance.

```typescript
import { HeadlessEditor, basicExtensions } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [basicExtensions]
});
```

The `create()` call returns a fully initialized editor that is ready to mount. It is not attached to the DOM until you call `mount()`.

## Editor configuration

`HeadlessEditor.create()` accepts an `EditorConfig` object that controls initial content, extensions, behavior toggles, lifecycle hooks, and integrations. The configuration is grouped by purpose below. Detailed property descriptions live in the API reference.

### Initial content and extensions

Use `document` or `content` to provide a starting document, and `extensions` to enable features such as bold, headings, lists, and tables.

```typescript
import { HeadlessEditor, basicExtensions } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    content: '<h1>Welcome</h1><p>Start typing...</p>',
    extensions: [basicExtensions]
});
```

See the **Content and Data** section for how to set and read content, and the **Extensions** section for the available extension packages.

### Behavior toggles

| Property | Purpose |
|----------|---------|
| `autofocus` | Focus the editor automatically when it is mounted. |
| `readOnly` | Render the editor in read-only mode. |
| `enableInputRules` | Enable markdown-style autoformatting (default `true`). |
| `enableTabKey` | Enable Tab and Shift+Tab behavior (default `true`). |
| `autoSaveSelectionOnBlur` | Save the selection when the editor loses focus. |

```typescript
const editor = HeadlessEditor.create({
    extensions: [basicExtensions],
    autofocus: 'start',
    readOnly: false,
    enableInputRules: true
});
```

### Lifecycle hooks

`EditorConfig` exposes lifecycle callbacks such as `created`, `destroyed`, `contentChanged`, `selectionChanged`, `focus`, and `blur`. These are wired to the same-named public events on the editor instance.

```typescript
const editor = HeadlessEditor.create({
    extensions: [basicExtensions],
    created: () => {
        console.log('Editor is ready.');
    },
    contentChanged: (args) => {
        console.log('Document changed.');
    }
});
```

For the full list of events and their payloads, see the **Events** section.

## Mounting and unmounting

Use `mount()` to attach the editor to a DOM container, and `unmount()` to detach it.

```typescript
const container = document.getElementById('editor');

editor.mount(container);
```

```typescript
editor.unmount();
```

After `unmount()`, the editor's state — document, selection, and history — is preserved. You can re-attach the same instance to the same container or to a different one with another call to `mount()`.

## Disposing an editor

Use `destroy()` to release the editor and all of its resources. After `destroy()` the instance is unusable; create a new one with `HeadlessEditor.create()` if you need another editor.

```typescript
editor.destroy();
```

`destroy()` is safe to call more than once. The recommended pattern is to destroy the editor in a teardown hook such as the `beforeunload` event, a route change, or a component-disposal lifecycle method.

The example below demonstrates creating, mounting, using, and destroying an editor.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/headless-editor/core-concepts/editor/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/headless-editor/core-concepts/editor/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/headless-editor/core-concepts/editor" %}

## Updating configuration after creation

A small set of behavior toggles can be updated at runtime with `setOptions()`. Updates take effect immediately on the live editor.

```typescript
editor.setOptions({
    readOnly: true,
    autoSaveSelectionOnBlur: true
});
```

The properties supported by `setOptions()` are:

| Property | Effect |
|----------|--------|
| `readOnly` | Switches the editor in and out of read-only mode. |
| `autofocus` | Updates the autofocus behavior for the next mount. |
| `autoSaveSelectionOnBlur` | Enables or disables selection auto-save. |
| `enableInputRules` | Enables or disables markdown-style input rules. |

Structural properties such as `document`, `content`, `extensions`, and `clipboard` cannot be changed after creation. To change them, destroy the editor and create a new one.

## What's next

Now that you have an editor instance, learn how to drive it:

- **Document** — what the document tree looks like.
- **Commands** — the typed facade for executing actions.
- **Selection** — reading the current cursor and range.