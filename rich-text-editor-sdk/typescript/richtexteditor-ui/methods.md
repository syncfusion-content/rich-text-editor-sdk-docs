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
import { RichTextEditor } from '@syncfusion/ej2-richtexteditor';

let rteObj: RichTextEditor = new RichTextEditor({
    // editor configuration
});
rteObj.appendTo('#default');
```


## 1. save

Persists the current editor content into the component's `value` property.

```typescript
rteObj.save();
```

## 2. focusIn

Moves focus into the editor's editable area and triggers the editor's focus-in
handling.

```typescript
rteObj.focusIn();
```

## 3. focusOut

Removes focus from the editor's editable area and triggers the editor's
focus-out handling.

```typescript
rteObj.focusOut();
```

## 4. getDocument

Returns the current editor document.

```typescript
let document = rteObj.getDocument();
```

## 5. getHtml

Returns the current editor content as an HTML string.

```typescript
let html: string = rteObj.getHtml();
console.log('Rich Text Editor HTML: ', html);
```

## 6. getText

Returns the current editor content as plain text.

```typescript
let text: string = rteObj.getText();
console.log('Rich Text Editor text: ', text);
```


## 7. updateToolbarItems

Applies a batch of toolbar item updates (add, remove) to the editor's toolbar.

```typescript
rteObj.updateToolbarItems([
    { action: 'add', item: 'Italic', index: 1 }
]);
```
