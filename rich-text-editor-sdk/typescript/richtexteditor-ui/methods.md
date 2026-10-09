---
layout: post
title: Methods in TypeScript Modern Rich Text Editor | Syncfusion
description: Learn how to use Methods in the TypeScript Modern Rich Text Editor to read content, manage focus, save editor values, and update toolbar states.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Methods in TypeScript Modern Rich Text Editor

The Syncfusion Essential JS 2 Rich Text Editor exposes a set of public methods
on the component instance that let you programmatically interact with the
editor from your application code. Use these methods to read content, control
focus, persist the editor value, and update the toolbar state.

All methods are invoked on the editor instance after the component has been
initialized and rendered. The standard EJ2 instance pattern is used in the
examples below:

```typescript
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui'

let editor: RichTextEditorUI = new RichTextEditorUI({
    // editor configuration
});
editor.appendTo('#default');
```

## save

| Method | Description |
|----------|------|
| [`save`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/index-default#save) | Persists the current editor content into the component's [`value`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/index-default#value) property. |

```typescript
editor.save();
```

## focusIn

| Method | Description |
|----------|------|
| [`focusIn`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/index-default#focusIn) | Moves focus into the editor's editable area and triggers the editor's focus-in handling. |

```typescript
editor.focusIn();
```

## focusOut

| Method | Description |
|----------|------|
| [`focusOut`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/index-default#focusOut) | Removes focus from the editor's editable area and triggers the editor's focus-out handling. |

```typescript
editor.focusOut();
```

## getDocument

| Method | Description |
|----------|------|
| [`getDocument`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/index-default#getDocument) | Returns the current editor document. |

```typescript
let document = editor.getDocument();
```

## getHtml

| Method | Description |
|----------|------|
| [`getHtml`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/index-default#getHtml) | Returns the current editor content as an HTML string. |

```typescript
let html: string = editor.getHtml();
console.log('Rich Text Editor HTML: ', html);
```

## getText

| Method | Description |
|----------|------|
| [`getText`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/index-default#getText) | Returns the current editor content as plain text. |

```typescript
let text: string = editor.getText();
console.log('Rich Text Editor text: ', text);
```

## updateToolbarItems

| Method | Description |
|----------|------|
| [`updateToolbarItems`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/index-default#updateToolbarItems) | Applies a batch of toolbar item updates (add, remove) to the editor's toolbar. |

```typescript
editor.updateToolbarItems([
    { action: 'add', item: 'Italic', index: 1 }
]);
```
