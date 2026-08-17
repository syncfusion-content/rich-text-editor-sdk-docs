---
layout: post
title: Keyboard Shortcuts in Angular Block Editor | Syncfusion
description: Learn the keyboard shortcuts available in the Angular Block Editor for block creation, navigation, formatting, and undo/redo.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Keyboard Shortcuts in Angular Block Editor

The Block Editor component provides comprehensive keyboard shortcuts to enhance productivity and streamline content creation. These shortcuts are organized into different categories based on their functionality, allowing users to quickly access various features without relying on mouse interactions.

## Content editing and formatting

These shortcuts cover inline text formatting and link insertion for the currently selected content:

| Actions | Windows | Mac |
|---------|---------|-----|
| Bold | <kbd>Ctrl</kbd> + <kbd>B</kbd> | <kbd>⌘</kbd> + <kbd>B</kbd> |
| Italic | <kbd>Ctrl</kbd> + <kbd>I</kbd> | <kbd>⌘</kbd> + <kbd>I</kbd> |
| Underline | <kbd>Ctrl</kbd> + <kbd>U</kbd> | <kbd>⌘</kbd> + <kbd>U</kbd> |
| Strikethrough | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>X</kbd> |
| Insert Link | <kbd>Ctrl</kbd> + <kbd>K</kbd> | <kbd>⌘</kbd> + <kbd>K</kbd> |

## Block creation and management

These shortcuts create new blocks of a specific type at the current cursor position, or insert them as a sibling block:

| Actions | Windows | Mac |
|---------|---------|-----|
| Create Paragraph | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>P</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>P</kbd> |
| Create Checklist | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>7</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>7</kbd> |
| Create Bullet List | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>8</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>8</kbd> |
| Create Numbered List | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>9</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>9</kbd> |
| Create Heading 1 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>1</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>1</kbd> |
| Create Heading 2 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>2</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>2</kbd> |
| Create Heading 3 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>3</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>3</kbd> |
| Create Heading 4 | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>4</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>4</kbd> |
| Create Quote | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Q</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>Q</kbd> |
| Create Code Block | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>K</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>K</kbd> |
| Create Callout | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>C</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>C</kbd> |
| Insert Image | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>/</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>/</kbd> |
| Insert Divider | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>-</kbd> |<kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>-</kbd> |

## Block-level actions

These shortcuts provide quick access to block-specific actions like duplication, deletion, indentation, and movement. Both keyboard chords are supported for indent and outdent — <kbd>Ctrl</kbd> + <kbd>]</kbd> / <kbd>Ctrl</kbd> + <kbd>[</kbd> and <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> all produce the same result:

| Actions | Windows | Mac |
|---------|---------|-----|
| Duplicate Block | <kbd>Ctrl</kbd> + <kbd>D</kbd> | <kbd>⌘</kbd> + <kbd>D</kbd> |
| Delete Block | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>D</kbd> |
| Move Block Up | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>↑</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>↑</kbd> |
| Move Block Down | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>↓</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>↓</kbd> |
| Increase Indent | <kbd>Ctrl</kbd> + <kbd>]</kbd> or <kbd>Tab</kbd> | <kbd>⌘</kbd> + <kbd>]</kbd> or <kbd>Tab</kbd> |
| Decrease Indent | <kbd>Ctrl</kbd> + <kbd>[</kbd> or <kbd>Shift</kbd> + <kbd>Tab</kbd> | <kbd>⌘</kbd> + <kbd>[</kbd> or <kbd>⇧</kbd> + <kbd>Tab</kbd> |

## General editor operations

These shortcuts cover editor-wide actions such as undo/redo, the clipboard, and printing:

| Actions | Windows | Mac |
|---------|---------|-----|
| Undo | <kbd>Ctrl</kbd> + <kbd>Z</kbd> | <kbd>⌘</kbd> + <kbd>Z</kbd> |
| Redo | <kbd>Ctrl</kbd> + <kbd>Y</kbd> | <kbd>⌘</kbd> + <kbd>Y</kbd> |
| Cut | <kbd>Ctrl</kbd> + <kbd>X</kbd> | <kbd>⌘</kbd> + <kbd>X</kbd> |
| Copy | <kbd>Ctrl</kbd> + <kbd>C</kbd> | <kbd>⌘</kbd> + <kbd>C</kbd> |
| Paste | <kbd>Ctrl</kbd> + <kbd>V</kbd> | <kbd>⌘</kbd> + <kbd>V</kbd> |
| Print | <kbd>Ctrl</kbd> + <kbd>P</kbd> | <kbd>⌘</kbd> + <kbd>P</kbd> |

## Customizing keyboard shortcuts

You can customize shortcuts in two ways:

* **Menu-based actions** — slash command, block action, and context menu items each expose a `shortcut` property in their respective settings models (for example, `commandMenuSettings`).
* **Editor-level actions** — bold, italic, undo, redo, and other core actions are configured through the editor's [keyConfig](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#keyconfig) property. Pass a map from action name to a shortcut string (for example `'alt+b'`) to override the default or add a new binding.

The example below overrides **Bold** to <kbd>Alt</kbd> + <kbd>B</kbd> and **Italic** to <kbd>Alt</kbd> + <kbd>I</kbd>:

```typescript
import { Component } from '@angular/core';
import { BlockEditorModule } from '@syncfusion/ej2-angular-blockeditor';

@Component({
    imports: [BlockEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `
        <div class="container" style="margin: 50px;">
            <ejs-blockeditor [keyConfig]="keyConfig" />
        </div>`
})
export class AppComponent {
    public keyConfig = {
        bold: 'alt+b',
        italic: 'alt+i'
    };
}
```