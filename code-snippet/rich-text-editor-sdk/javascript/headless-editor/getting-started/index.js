
var headlessEditor = ej.headlesseditor.HeadlessEditor.create({
    extensions: [ej.headlesseditor.basicExtensions, ej.headlesseditor.placeholderExtension]
});
var container = document.getElementById('headless-editor');

if (container) {
    headlessEditor.mount(container);
}
