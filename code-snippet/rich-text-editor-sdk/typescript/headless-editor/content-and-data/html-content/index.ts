import { HeadlessEditor, basicExtensions, placeholderExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [basicExtensions, placeholderExtension],
    content: '<h2>HTML Content</h2><p>This content was loaded when the editor was created.</p>'
});

const container = document.getElementById('headless-editor');
const output = document.getElementById('output');

function showOutput(value: string): void {
    if (output) {
        output.textContent = value;
    }
}

if (container) {
    editor.mount(container);
}

/* Load HTML Content */

document.getElementById('set-html')?.addEventListener('click', () => {
    editor.setContent(
        '<h2>Updated HTML Content</h2><p>This content was loaded using <strong>setContent()</strong>.</p>'
    );
});

document.getElementById('clear-content')?.addEventListener('click', () => {
    editor.setContent('');
});

/* Export HTML Content */

document.getElementById('get-html')?.addEventListener('click', () => {
    showOutput(editor.getHtml());
});