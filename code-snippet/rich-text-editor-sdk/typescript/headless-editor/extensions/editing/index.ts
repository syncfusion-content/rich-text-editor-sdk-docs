import {
    HeadlessEditor,
    basicExtensions,
    textAlignExtension,
    indentOutdentExtension,
    placeholderExtension
} from '@syncfusion/ej2-headless-editor';

const headlessEditor: HeadlessEditor = HeadlessEditor.create({
    extensions: [
        basicExtensions,
        textAlignExtension,
        indentOutdentExtension,
        placeholderExtension
    ],
    config: { enableTabKey: true }
});

const container: HTMLElement | null = document.getElementById('headless-editor');

if (container) {
    headlessEditor.mount(container);
}