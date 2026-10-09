import { HeadlessEditor, basicExtensions, placeholderExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [basicExtensions, placeholderExtension]
});

const container = document.getElementById('headless-editor');
const output = document.getElementById('output');

function showOutput(value: any): void {
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

const getDocumentButton = document.getElementById('get-document');

if (getDocumentButton) {
    getDocumentButton.addEventListener('click', () => {
        showOutput(editor.getDocument());
    });
}

const getHtmlButton = document.getElementById('get-html');

if (getHtmlButton) {
    getHtmlButton.addEventListener('click', () => {
        showOutput(editor.getHtml());
    });
}

const getTextButton = document.getElementById('get-text');

if (getTextButton) {
    getTextButton.addEventListener('click', () => {
        showOutput(editor.getText());
    });
}

const getSelectionTextButton = document.getElementById('get-selection-text');

if (getSelectionTextButton) {
    getSelectionTextButton.addEventListener('click', () => {
        showOutput(editor.getSelectionText());
    });
}

/* Set Content */

const setHtmlButton = document.getElementById('set-html');

if (setHtmlButton) {
    setHtmlButton.addEventListener('click', () => {
        editor.setContent(
            '<h2>New Title</h2><p>Fresh content.</p><p>This is another paragraph.</p>'
        );
    });
}

const setDocumentButton = document.getElementById('set-document');

if (setDocumentButton) {
    setDocumentButton.addEventListener('click', () => {
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
}

const clearContentButton = document.getElementById('clear-content');

if (clearContentButton) {
    clearContentButton.addEventListener('click', () => {
        editor.setContent('');
    });
}

/* Update Content */

const insertTextButton = document.getElementById('insert-text');

if (insertTextButton) {
    insertTextButton.addEventListener('click', () => {
        editor.commands.insertText({
            text: 'Hello world'
        });
    });
}

const replaceTextButton = document.getElementById('replace-text');

if (replaceTextButton) {
    replaceTextButton.addEventListener('click', () => {
        editor.commands.replaceText({
            from: { offset: 0 },
            to: { offset: 12 },
            text: 'Updated text'
        });
    });
}

const insertNodeButton = document.getElementById('insert-node');

if (insertNodeButton) {
    insertNodeButton.addEventListener('click', () => {
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
}