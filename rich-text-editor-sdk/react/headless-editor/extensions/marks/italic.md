---
layout: post
title: Italic Mark in React Headless Editor | Syncfusion
description: Learn how to configure the Italic mark in the React Headless Editor, including attributes, commands, keyboard shortcuts, and Markdown input rules.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Italic Mark in React Headless Editor

The `italicExtension` registers the `italic` mark, which applies semantic italic formatting to text and renders the content as an `<em>` element. It contributes the `toggleItalic` command, a keyboard shortcut for toggling italic, and Markdown-style input rules that convert `*text*` or `_text_` into italic as the user types.

## Register the extension

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
```js
import * as React from 'react';
import { useRef, useEffect } from 'react';
import { HeadlessEditor, italicExtension } from '@syncfusion/ej2-headless-editor';

function App() {
    const editorRef = useRef(null);

    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: [italicExtension]
        });
        if (editorRef.current) {
            editor.mount(editorRef.current);
        }
        return () => editor.destroy();
    }, []);

    return <div ref={editorRef}></div>;
}

export default App;
```
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
```ts
import * as React from 'react';
import { useRef, useEffect } from 'react';
import { HeadlessEditor, italicExtension } from '@syncfusion/ej2-headless-editor';

function App() {
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: [italicExtension]
        });
        if (editorRef.current) {
            editor.mount(editorRef.current);
        }
        return () => editor.destroy();
    }, []);

    return <div ref={editorRef}></div>;
}

export default App;
```
{% endhighlight %}
{% endtabs %}

## Configure the extension

The `italic` extension exposes an `htmlAttributes` option that adds custom HTML attributes to every rendered `<em>` element. Use `.configure()` to set it:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `htmlAttributes` | `Record<string, string>` | `{}` | Custom HTML attributes applied to the rendered `<em>` element. |

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
```js
import * as React from 'react';
import { useRef, useEffect } from 'react';
import { HeadlessEditor, italicExtension } from '@syncfusion/ej2-headless-editor';

function App() {
    const editorRef = useRef(null);

    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: [
                italicExtension.configure({
                    htmlAttributes: { class: 'my-custom-class' }
                })
            ]
        });
        if (editorRef.current) {
            editor.mount(editorRef.current);
        }
        return () => editor.destroy();
    }, []);

    return <div ref={editorRef}></div>;
}

export default App;
```
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
```ts
import * as React from 'react';
import { useRef, useEffect } from 'react';
import { HeadlessEditor, italicExtension } from '@syncfusion/ej2-headless-editor';

function App() {
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: [
                italicExtension.configure({
                    htmlAttributes: { class: 'my-custom-class' }
                })
            ]
        });
        if (editorRef.current) {
            editor.mount(editorRef.current);
        }
        return () => editor.destroy();
    }, []);

    return <div ref={editorRef}></div>;
}

export default App;
```
{% endhighlight %}
{% endtabs %}

## Commands

| Command | Description |
|---------|-------------|
| `toggleItalic()` | Toggles italic formatting on the current selection. |

```ts
editor.commands.toggleItalic();
```

## Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Toggle Italic | <kbd>Ctrl</kbd> + <kbd>I</kbd> | <kbd>⌘</kbd> + <kbd>I</kbd> |

## Markdown input rules

The Italic mark supports Markdown-style input rules using `*text*` or `_text_` syntax.

```text
Type:    *emphasis*
Result:  <em>emphasis</em>
```