var initialDocumentJson = '{' +
    '    "type": "document",' +
    '    "schemaVersion": 1,' +
    '    "attrs": {},' +
    '    "marks": [],' +
    '    "children": [' +
    '        {' +
    '            "type": "heading",' +
    '            "attrs": { "level": 2 },' +
    '            "marks": [],' +
    '            "children": [' +
    '                {' +
    '                    "type": "text",' +
    '                    "text": "JSON Content",' +
    '                    "attrs": {},' +
    '                    "marks": []' +
    '                }' +
    '            ]' +
    '        },' +
    '        {' +
    '            "type": "paragraph",' +
    '            "attrs": {},' +
    '            "marks": [],' +
    '            "children": [' +
    '                {' +
    '                    "type": "text",' +
    '                    "text": "This content was loaded from a DocumentRoot.",' +
    '                    "attrs": {},' +
    '                    "marks": []' +
    '                }' +
    '            ]' +
    '        }' +
    '    ]' +
    '}';

var initialDocument = JSON.parse(initialDocumentJson);

var editor = ej.headlesseditor.HeadlessEditor.create({
    extensions: [
        ej.headlesseditor.basicExtensions,
        ej.headlesseditor.placeholderExtension
    ],
    document: initialDocument
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
}

var setDocumentButton = document.getElementById('set-document');
if (setDocumentButton) {
    setDocumentButton.addEventListener('click', function () {
        var documentJson = '{' +
            '    "type": "document",' +
            '    "schemaVersion": 1,' +
            '    "attrs": {},' +
            '    "marks": [],' +
            '    "children": [' +
            '        {' +
            '            "type": "heading",' +
            '            "attrs": { "level": 2 },' +
            '            "marks": [],' +
            '            "children": [' +
            '                {' +
            '                    "type": "text",' +
            '                    "text": "Updated JSON Document",' +
            '                    "attrs": {},' +
            '                    "marks": []' +
            '                }' +
            '            ]' +
            '        },' +
            '        {' +
            '            "type": "paragraph",' +
            '            "attrs": {},' +
            '            "marks": [],' +
            '            "children": [' +
            '                {' +
            '                    "type": "text",' +
            '                    "text": "This content was applied using setDocument().",' +
            '                    "attrs": {},' +
            '                    "marks": []' +
            '                }' +
            '            ]' +
            '        }' +
            '    ]' +
            '}';
        var newDocument = JSON.parse(documentJson);
        editor.setDocument(newDocument);
    });
}

var getDocumentButton = document.getElementById('get-document');
if (getDocumentButton) {
    getDocumentButton.addEventListener('click', function () {
        showOutput(editor.getDocument());
    });
}

var getJsonButton = document.getElementById('get-json');
if (getJsonButton) {
    getJsonButton.addEventListener('click', function () {
        var json = JSON.stringify(editor.getDocument(), null, 2);
        showOutput(json);
    });
}

var roundTripButton = document.getElementById('round-trip');
if (roundTripButton) {
    roundTripButton.addEventListener('click', function () {
        var json = JSON.stringify(editor.getDocument());
        var restored = JSON.parse(json);
        editor.setDocument(restored);
        showOutput(restored);
    });
}
