
var headlessEditor = ej.headlesseditor.HeadlessEditor.create({
    extensions: [basicExtensions, placeholderExtension]
});
var container = document.getElementById('headless-editor');

if (container) {
    headlessEditor.mount(container);
}
