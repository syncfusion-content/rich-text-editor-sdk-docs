import { HeadlessEditor, basicExtensions, placeholderExtension } from '@syncfusion/ej2-headless-editor';

const headlessEditor: HeadlessEditor = HeadlessEditor.create({
    extensions: [basicExtensions, placeholderExtension]
});

const container: HTMLElement | null = document.getElementById('headless-editor');

if (container) {
    headlessEditor.mount(container);
}
