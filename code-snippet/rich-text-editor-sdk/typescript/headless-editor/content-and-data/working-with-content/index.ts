import { HeadlessEditor, basicExtensions, placeholderExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [basicExtensions, placeholderExtension]
});

const container = document.getElementById('headless-editor');
const output = document.getElementById('output');

function showOutput(value: unknown): void {
    if (output) {
        output.textContent = typeof value === 'string'
            ? value
            : JSON.stringify(value, null, 2);
    }
}

if (container) {
    editor.mount(container);

    editor.setContent(
        '<p>Hello world! The Headless Editor. Edit this content and try the actions below.</p><p>This is the second paragraph.</p>'
    );
}

/* Get Content */

document.getElementById('get-document')?.addEventListener('click', () => {
    showOutput(editor.getDocument());
});

document.getElementById('get-html')?.addEventListener('click', () => {
    showOutput(editor.getHtml());
});

document.getElementById('get-text')?.addEventListener('click', () => {
    showOutput(editor.getText());
});

document.getElementById('get-selection-text')?.addEventListener('click', () => {
    showOutput(editor.getSelectionText());
});

/* Set Content */

document.getElementById('set-html')?.addEventListener('click', () => {
    editor.setContent(
        '<h2>New Title</h2><p>Fresh content.</p><p>This is another paragraph.</p>'
    );
});

document.getElementById('set-document')?.addEventListener('click', () => {
    editor.setDocument({
        type: 'document',
        attrs: {},
        marks: [],
        schemaVersion: 1,
        children: [
            {
                type: 'paragraph',
                attrs: {},
                marks: [],
                children: [
                    {
                        type: 'text',
                        text: 'Content set using setDocument().',
                        attrs: {},
                        marks: []
                    }
                ]
            },
            {
                type: 'paragraph',
                attrs: {},
                marks: [],
                children: [
                    {
                        type: 'text',
                        text: 'Second paragraph.',
                        attrs: {},
                        marks: []
                    }
                ]
            }
        ]
    });
});

document.getElementById('clear-content')?.addEventListener('click', () => {
    editor.setContent('');
});

/* Update Content */

document.getElementById('insert-text')?.addEventListener('click', () => {
    editor.commands.insertText({
        text: 'Hello world'
    });
});

document.getElementById('replace-text')?.addEventListener('click', () => {
    editor.commands.replaceText({
        from: { offset: 0 },
        to: { offset: 12 },
        text: 'Updated text'
    });
});

document.getElementById('insert-node')?.addEventListener('click', () => {
    editor.commands.insertNode({
        parentPos: 0,
        index: 1,
        node: {
            type: 'paragraph',
            attrs: {},
            marks: [],
            children: [
                {
                    type: 'text',
                    text: 'Inserted paragraph.',
                    attrs: {},
                    marks: []
                }
            ]
        }
    });
});