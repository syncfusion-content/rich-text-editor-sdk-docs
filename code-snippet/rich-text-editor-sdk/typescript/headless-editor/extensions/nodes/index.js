var headlessEditor = new ej.headlesseditor.HeadlessEditor.create({
    extensions: [
        ej.headlesseditor.basicExtensions,
        ej.headlesseditor.tableExtension,
        ej.headlesseditor.imageExtension,
        ej.headlesseditor.collapsibleExtension
    ]
});

var container = document.getElementById('headless-editor');

if (container) {
    headlessEditor.mount(container);
}