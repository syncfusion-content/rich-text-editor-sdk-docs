---
layout: post
title: To Upper Case in React Headless Editor | Syncfusion
description: Learn how to configure the To Upper Case extension in the React Headless Editor, including the toUpperCase command and usage examples.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# To Upper Case in React Headless Editor

The `toUpperCaseExtension` registers the `toUpperCase` command, which transforms the literal text characters in the current selection to UPPERCASE.

## Register the extension

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
```js
import * as React from 'react';
import { useRef, useEffect } from 'react';
import { HeadlessEditor, toUpperCaseExtension } from '@syncfusion/ej2-headless-editor';

function App() {
    const editorRef = useRef(null);

    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: [toUpperCaseExtension]
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
import { HeadlessEditor, toUpperCaseExtension } from '@syncfusion/ej2-headless-editor';

function App() {
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: [toUpperCaseExtension]
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
| `toUpperCase()` | Converts the literal text characters of the current selection to UPPERCASE. |

```ts
// Convert the current selection to uppercase
editor.commands.toUpperCase();
```