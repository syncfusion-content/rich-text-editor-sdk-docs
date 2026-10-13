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
const redoButton = document.getElementById('redo');
if (redoButton) {
    redoButton.addEventListener('click', function () {
        editor.commands.redo();
    });
}
const boldButton = document.getElementById('bold');
if (boldButton) {
    boldButton.addEventListener('click', function () {
        editor.commands.toggleBold();
    });
}
const italicButton = document.getElementById('italic');
if (italicButton) {
    italicButton.addEventListener('click', function () {
        editor.commands.toggleItalic();
    });
}
const underlineButton = document.getElementById('underline');
if (underlineButton) {
    underlineButton.addEventListener('click', function () {
        editor.commands.toggleUnderline();
    });
}
const strikethroughButton = document.getElementById('strikethrough');
if (strikethroughButton) {
    strikethroughButton.addEventListener('click', function () {
        editor.commands.toggleStrikethrough();
    });
}
const inlineCodeButton = document.getElementById('inlineCode');
if (inlineCodeButton) {
    inlineCodeButton.addEventListener('click', function () {
        editor.commands.toggleCodeMark();
    });
}
const blockquoteButton = document.getElementById('blockquote');
if (blockquoteButton) {
    blockquoteButton.addEventListener('click', function () {
        editor.commands.toggleBlockQuote();
    });
}
const bulletListButton = document.getElementById('bulletList');
if (bulletListButton) {
    bulletListButton.addEventListener('click', function () {
        editor.commands.toggleBulletList();
    });
}
const orderedListButton = document.getElementById('orderedList');
if (orderedListButton) {
    orderedListButton.addEventListener('click', function () {
        editor.commands.toggleOrderedList();
    });
}