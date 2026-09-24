import { HeadlessEditor, basicExtensions } from '@syncfusion/ej2-headless-editor';

// Create the editor with the built-in preset of extensions.
const headlessEditor: HeadlessEditor = HeadlessEditor.create({
    extensions: [basicExtensions]
});

const container: HTMLElement | null = document.getElementById('headless-editor');

if (container) {
    // Mount the editor into the DOM container.
    headlessEditor.mount(container);

    // Apply bold to the current selection via the typed command facade.
    headlessEditor.commands.toggleBold();

    // Toggle read-only mode after a short delay to demonstrate setOptions().
    setTimeout(() => {
        headlessEditor.setOptions({ readOnly: true });
    }, 2000);

    // Tear the editor down cleanly when leaving the page.
    window.addEventListener('beforeunload', () => {
        headlessEditor.destroy();
    });
}