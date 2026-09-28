var headlessEditor = new ej.headlesseditor.HeadlessEditor.create({
    extensions: [
        ej.headlesseditor.basicExtensions,
        ej.headlesseditor.textAlignExtension,
        ej.headlesseditor.indentOutdentExtension,
        ej.headlesseditor.placeholderExtension
    ],
    enableTabKey: true
});

var container = document.getElementById('headless-editor');

if (container) {
    headlessEditor.mount(container);
}