import { HeadlessEditor, basicExtensions, placeholderExtension } from '@syncfusion/ej2-headless-editor';

const editor: HeadlessEditor = HeadlessEditor.create({
    extensions: [basicExtensions, placeholderExtension]
});

const container: HTMLElement | null = document.getElementById('headless-editor');

if (container) {
    editor.mount(container);
}
const undoButton = document.getElementById('undo');

if (undoButton) {
    undoButton.addEventListener('click', function () {
        editor.commands.undo();
    });
}

/* Redo */

const redoButton = document.getElementById('redo');

if (redoButton) {
    redoButton.addEventListener('click', function () {
        editor.commands.redo();
    });
}

/* Bold */

const boldButton = document.getElementById('bold');

if (boldButton) {
    boldButton.addEventListener('click', function () {
        editor.commands.toggleBold();
    });
}

/* Italic */

const italicButton = document.getElementById('italic');

if (italicButton) {
    italicButton.addEventListener('click', function () {
        editor.commands.toggleItalic();
    });
}

/* Underline */

const underlineButton = document.getElementById('underline');

if (underlineButton) {
    underlineButton.addEventListener('click', function () {
        editor.commands.toggleUnderline();
    });
}

/* Strikethrough */

const strikethroughButton =
    document.getElementById('strikethrough');

if (strikethroughButton) {
    strikethroughButton.addEventListener('click', function () {
        editor.commands.toggleStrikethrough();
    });
}

/* Inline Code */

const inlineCodeButton =
    document.getElementById('inlineCode');

if (inlineCodeButton) {
    inlineCodeButton.addEventListener('click', function () {
        editor.commands.toggleCodeMark();
    });
}

/* Blockquote */

const blockquoteButton =
    document.getElementById('blockquote');

if (blockquoteButton) {
    blockquoteButton.addEventListener('click', function () {
        editor.commands.toggleBlockQuote();
    });
}

/* Bullet List */

const bulletListButton =
    document.getElementById('bulletList');

if (bulletListButton) {
    bulletListButton.addEventListener('click', function () {
        editor.commands.toggleBulletList();
    });
}

/* Ordered List */

const orderedListButton =
    document.getElementById('orderedList');

if (orderedListButton) {
    orderedListButton.addEventListener('click', function () {
        editor.commands.toggleOrderedList();
    });
}