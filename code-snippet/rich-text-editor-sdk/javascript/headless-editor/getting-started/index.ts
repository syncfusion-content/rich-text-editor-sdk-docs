import { HeadlessEditor, basicExtensions, placeholderExtension } from '@syncfusion/ej2-headless-editor';

var headlessEditor = HeadlessEditor.create({
    extensions: [basicExtensions, placeholderExtension]
});
var container = document.getElementById('headless-editor');

if (container) {
    headlessEditor.mount(container);
}
