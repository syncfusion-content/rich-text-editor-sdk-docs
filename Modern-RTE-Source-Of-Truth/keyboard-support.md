# Keyboard Shortcuts in EJ2 Modern Rich Text Editor

The Syncfusion Essential JS 2 Modern Rich Text Editor provides built-in keyboard shortcuts to perform formatting, edit content, insert elements, and navigate the user interface efficiently without relying on mouse interactions.

## Modifier Key Conventions

Default shortcuts use standard cross-platform modifier keys:

| Platform | Modifier Key Representation |
| :--- | :--- |
| **Windows / Linux** | <kbd>Ctrl</kbd>, <kbd>Shift</kbd>, <kbd>Alt</kbd> |
| **macOS** | <kbd>Cmd (⌘)</kbd>, <kbd>Shift (⇧)</kbd>, <kbd>Option (⌥)</kbd> |


## Built-In Keyboard Shortcuts Reference

### Text Formatting & Styles

| Action | Windows / Linux | macOS | Description |
| :--- | :--- | :--- | :--- |
| **Bold** | <kbd>Ctrl</kbd> + <kbd>B</kbd> | <kbd>⌘</kbd> + <kbd>B</kbd> | Toggles bold styling on the selected text. |
| **Italic** | <kbd>Ctrl</kbd> + <kbd>I</kbd> | <kbd>⌘</kbd> + <kbd>I</kbd> | Toggles italic styling on the selected text. |
| **Underline** | <kbd>Ctrl</kbd> + <kbd>U</kbd> | <kbd>⌘</kbd> + <kbd>U</kbd> | Applies or removes underline formatting. |
| **Strikethrough** | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> | <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> | Strikes through the selected text. |
| **Subscript** | <kbd>Ctrl</kbd> + <kbd>=</kbd> | <kbd>⌘</kbd> + <kbd>=</kbd> | Converts the selected text to subscript. |
| **Superscript** | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>=</kbd> | <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>=</kbd> | Converts the selected text to superscript. |
| **Inline Code** | <kbd>Ctrl</kbd> + <kbd>E</kbd> | <kbd>⌘</kbd> + <kbd>E</kbd> | Formats the selected text as inline code. |
| **Clear Format** | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> | <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> | Clears inline formatting from the selection. |
| **Uppercase** | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> | <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> | Transforms the selection to uppercase. |
| **Lowercase** | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> | <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> | Transforms the selection to lowercase. |

---

### Lists & Indentation

| Action | Windows / Linux | macOS | Description |
| :--- | :--- | :--- | :--- |
| **Ordered List** | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd> | <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd> | Inserts or toggles a numbered list. |
| **Unordered List** | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>O</kbd> | <kbd>⌘</kbd> + <kbd>Option</kbd> + <kbd>O</kbd> | Inserts or toggles a bulleted list. |
| **Checklist** | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>7</kbd> | <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>7</kbd> | Inserts or toggles an interactive checklist. |
| **Indent** | <kbd>Tab</kbd> | <kbd>Tab</kbd> | Increases the indentation level of a list item or text. |
| **Outdent** | <kbd>Shift</kbd> + <kbd>Tab</kbd> | <kbd>Shift</kbd> + <kbd>Tab</kbd> | Decreases the indentation level of a list item or text. |

---

### Insertions & Blocks

| Action | Windows / Linux | macOS | Description |
| :--- | :--- | :--- | :--- |
| **Insert Link** | <kbd>Ctrl</kbd> + <kbd>K</kbd> | <kbd>⌘</kbd> + <kbd>K</kbd> | Opens the dialog to insert or edit a hyperlink. |
| **Insert Image** | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> | <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> | Opens the image upload dialog. |
| **Insert Table** | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> | <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> | Opens the table insertion grid/dialog. |
| **Code Block** | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> | <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> | Converts the block into a preformatted code snippet. |

---

### History & Focus Navigation

| Action | Windows / Linux | macOS | Description |
| :--- | :--- | :--- | :--- |
| **Undo** | <kbd>Ctrl</kbd> + <kbd>Z</kbd> | <kbd>⌘</kbd> + <kbd>Z</kbd> | Reverts the previous editing action. |
| **Redo** | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> | <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> | Reapplies the previously undone action. |
| **Toolbar Focus** | <kbd>Alt</kbd> + <kbd>F10</kbd> | <kbd>Option</kbd> + <kbd>F10</kbd> | Shifts focus directly to the first active toolbar item. |
| **Escape** | <kbd>Esc</kbd> | <kbd>Esc</kbd> | Closes open dropdowns, popups, or dialog windows. |

---

## Configuring Keyboard Shortcuts

You can override default shortcut key combinations or assign custom combinations using the `keyBindings` property.

### Syntax Rules

- Modifiers and key values are separated with a `+` symbol (e.g., `'ctrl+alt+k'`).
- Supported modifier tokens: `ctrl`, `shift`, `alt`, and `meta`.
- Key values can be written in lowercase (e.g., `'ctrl+b'`).
- The Modern Rich Text Editor automatically updates corresponding toolbar button tooltips and accessibility attributes to match your custom key bindings.

### Configuration Example

Use the keyBindings property to customize or override the default keyboard shortcuts. In the following example, the built-in shortcuts for link insertion, code blocks, and image insertion are remapped to custom key combinations.

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI( {
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', 'Strikethrough', '|', 'BulletList', 'NumberedList', '|', 'Link', 'Image', 'Table', 'CodeBlock', '|', 'Undo', 'Redo'],
        keyBindings: {
            link: 'ctrl+alt+k',
            image: 'ctrl+alt+i',
            'code-block': 'ctrl+shift+c'
        }
    }
});
editor.appendTo( '#editor' );
```
