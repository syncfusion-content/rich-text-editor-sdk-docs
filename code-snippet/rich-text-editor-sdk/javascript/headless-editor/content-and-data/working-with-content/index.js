var editor = ej.headlesseditor.HeadlessEditor.create({
    extensions: [
        ej.headlesseditor.basicExtensions,
        ej.headlesseditor.placeholderExtension
    ]
});

var container = document.getElementById('headless-editor');
var output = document.getElementById('output');

function showOutput(value) {
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

var getDocumentButton = document.getElementById('get-document');

if (getDocumentButton) {
    getDocumentButton.addEventListener('click', function () {
        showOutput(editor.getDocument());
    });
}

var getHtmlButton = document.getElementById('get-html');

if (getHtmlButton) {
    getHtmlButton.addEventListener('click', function () {
        showOutput(editor.getHtml());
    });
}

var getTextButton = document.getElementById('get-text');

if (getTextButton) {
    getTextButton.addEventListener('click', function () {
        showOutput(editor.getText());
    });
}

var getSelectionTextButton = document.getElementById('get-selection-text');

if (getSelectionTextButton) {
    getSelectionTextButton.addEventListener('click', function () {
        showOutput(editor.getSelectionText());
    });
}

/* Set Content */

var setHtmlButton = document.getElementById('set-html');

if (setHtmlButton) {
    setHtmlButton.addEventListener('click', function () {
        editor.setContent(
            '<h2>New Title</h2><p>Fresh content.</p><p>This is another paragraph.</p>'
        );
    });
}

var setDocumentButton = document.getElementById('set-document');

if (setDocumentButton) {
    setDocumentButton.addEventListener('click', function () {
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

var clearContentButton = document.getElementById('clear-content');

if (clearContentButton) {
    clearContentButton.addEventListener('click', function () {
        editor.setContent('');
    });
}

/* Update Content */

var insertTextButton = document.getElementById('insert-text');

if (insertTextButton) {
    insertTextButton.addEventListener('click', function () {
        editor.commands.insertText({
            text: 'Hello world'
        });
    });
}

var replaceTextButton = document.getElementById('replace-text');

if (replaceTextButton) {
    replaceTextButton.addEventListener('click', function () {
        editor.commands.replaceText({
            from: { offset: 0 },
            to: { offset: 12 },
            text: 'Updated text'
        });
    });
}

var insertNodeButton = document.getElementById('insert-node');

if (insertNodeButton) {
    insertNodeButton.addEventListener('click', function () {
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
