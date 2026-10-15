var headlessEditor = ej.headlesseditor.HeadlessEditor.create({
    extensions: [
        ej.headlesseditor.basicExtensions,
        ej.headlesseditor.placeholderExtension
    ]
});

var container = document.getElementById('headless-editor');

if (container) {
    headlessEditor.mount(container);
}

var undoButton = document.getElementById('undo');
if (undoButton) {
    undoButton.addEventListener('click', function () {
        headlessEditor.commands.undo();
    });
}

var redoButton = document.getElementById('redo');
if (redoButton) {
    redoButton.addEventListener('click', function () {
        headlessEditor.commands.redo();
    });
}

var boldButton = document.getElementById('bold');
if (boldButton) {
    boldButton.addEventListener('click', function () {
        headlessEditor.commands.toggleBold();
    });
}

var italicButton = document.getElementById('italic');
if (italicButton) {
    italicButton.addEventListener('click', function () {
        headlessEditor.commands.toggleItalic();
    });
}

var underlineButton = document.getElementById('underline');
if (underlineButton) {
    underlineButton.addEventListener('click', function () {
        headlessEditor.commands.toggleUnderline();
    });
}

var strikethroughButton = document.getElementById('strikethrough');
if (strikethroughButton) {
    strikethroughButton.addEventListener('click', function () {
        headlessEditor.commands.toggleStrikethrough();
    });
}

var inlineCodeButton = document.getElementById('inlineCode');
if (inlineCodeButton) {
    inlineCodeButton.addEventListener('click', function () {
        headlessEditor.commands.toggleCodeMark();
    });
}

var blockquoteButton = document.getElementById('blockquote');
if (blockquoteButton) {
    blockquoteButton.addEventListener('click', function () {
        headlessEditor.commands.toggleBlockQuote();
    });
}

var bulletListButton = document.getElementById('bulletList');
if (bulletListButton) {
    bulletListButton.addEventListener('click', function () {
        headlessEditor.commands.toggleBulletList();
    });
}

var orderedListButton = document.getElementById('orderedList');
if (orderedListButton) {
    orderedListButton.addEventListener('click', function () {
        headlessEditor.commands.toggleOrderedList();
    });
}