---
layout: post
title: Methods in Vue Modern Rich Text Editor | Syncfusion
description: Learn how to use Methods in the Vue Modern Rich Text Editor to read content, manage focus, save editor values, and update toolbar states.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Methods in Vue Modern Rich Text Editor

The Syncfusion Essential JS 2 Rich Text Editor exposes a set of public methods
on the component instance that let you programmatically interact with the
editor from your application code. Use these methods to read content, control
focus, persist the editor value, and update the toolbar state.

In Vue, every method is invoked on the editor component instance obtained
through a template ref. The standard pattern is to declare a ref named
`editor` on the editor and access it through `this.$refs.editor`:

```html
<ejs-richtexteditor-ui ref="editor"></ejs-richtexteditor-ui>
```


## 1. save

Persists the current editor content into the component's `value` property.

```typescript
this.$refs.editor.save();
```

## 2. focusIn

Moves focus into the editor's editable area and triggers the editor's focus-in
handling.

```typescript
this.$refs.editor.focusIn();
```

## 3. focusOut

Removes focus from the editor's editable area and triggers the editor's
focus-out handling.

```typescript
this.$refs.editor.focusOut();
```

## 4. getDocument

Returns the current editor document.

```typescript
let document = this.$refs.editor.getDocument();
```

## 5. getHtml

Returns the current editor content as an HTML string.

```typescript
let html: string = this.$refs.editor.getHtml();
console.log('Rich Text Editor HTML: ', html);
```

## 6. getText

Returns the current editor content as plain text.

```typescript
let text: string = this.$refs.editor.getText();
console.log('Rich Text Editor text: ', text);
```


## 7. updateToolbarItems

Applies a batch of toolbar item updates (add, remove) to the editor's toolbar.

```typescript
this.$refs.editor.updateToolbarItems([
    { action: 'add', item: 'Italic', index: 1 }
]);
```
