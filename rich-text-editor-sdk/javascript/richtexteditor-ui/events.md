---
layout: post
title: Events in JavaScript Modern Rich Text Editor | Syncfusion
description: Learn how to hook into the lifecycle, editing, and interaction events raised by the JavaScript Modern Rich Text Editor (RichTextEditorUI).
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Events in JavaScript Modern Rich Text Editor

The editor raises events throughout its lifecycle so your application can react to initialization, edits, focus changes, and feature-specific interactions.

## Lifecycle events

Listen for `created` to run setup code that depends on the editor being fully initialized and interactive — for example, focusing it as soon as it's ready. Listen for `destroyed` to clean up anything your application wired up alongside the editor, once `destroy()` has finished releasing its own resources.

## Focus events

`focus` and `blur` fire as the reader moves in and out of the editor shell (either the editable area or the toolbar) — useful for things like showing a "currently editing" indicator elsewhere on the page.

## Editing events

Use `actionBegin` when you need to intervene *before* a mutation happens — it's cancelable, so setting `args.cancel = true` inside the handler blocks the action, useful for enforcing application-specific editing rules. `actionComplete` tells you after an accepted (non-cancelled) mutation has actually been applied. For knowing when content has actually been committed — on blur, on an explicit `save()`, or once `saveInterval` elapses — listen for `change`.

## Dialog and popup events

`beforeDialogOpen`, `beforeDialogClose`, `beforePopupOpen`, and `beforePopupClose` all fire before their respective UI opens or closes, and all four are cancelable. Check the `source` field on the event args (`'Link'`, `'Image'`, `'Table'`, and so on) to know which feature's dialog or popup triggered the event.

## Image upload events

For integrating with your own upload UI or logging, listen along the same pipeline `uploadFile()` and the Image toolbar item both drive: `beforeFileUpload` (cancelable) and `fileSelected` at the start, `fileUploading` while in transit, and finally either `fileUploadSuccess` or `fileUploadFailed`. `fileRemoving` (cancelable) fires before a previously uploaded image is removed, and `beforeFileDrop` (cancelable) fires before a dropped or pasted file even enters the pipeline. See [Insert Image](insert-image) for the full flow these fit into.

## Resize events

`resize` (cancelable), `resizing`, and `resizeStop` fire as a reader drags a resize handle on an image or a table — check the `source` field on the event args to tell which one is being resized.

## Toolbar and slash command events

Two events are declared on `toolbarSettings` rather than directly on the editor: `itemClicked`, raised when a toolbar button is clicked, and `updatedToolbarStatus`, raised whenever the active formatting state at the cursor changes — see [Toolbar](toolbar). A third, `itemSelect`, is declared on `slashCommandSettings` and fires when a reader picks an item from the slash popup — see [Slash Commands](slash-commands).
