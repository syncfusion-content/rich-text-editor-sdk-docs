import {
    HeadlessEditor,
    basicExtensions,
    tableExtension,
    imageExtension,
    collapsibleExtension
} from '@syncfusion/ej2-headless-editor';

const headlessEditor: HeadlessEditor = HeadlessEditor.create({
    extensions: [
        basicExtensions,
        tableExtension,
        imageExtension,
        collapsibleExtension
    ]
});

const container: HTMLElement | null = document.getElementById('headless-editor');

if (container) {
    headlessEditor.mount(container);
}
