var editor = ej.headlesseditor.HeadlessEditor.create({
    extensions: [
        ej.headlesseditor.basicExtensions,
        ej.headlesseditor.placeholderExtension
    ],
    content: '<h2>HTML Content</h2><p>This content was loaded when the editor was created.</p>'
});

var container = document.getElementById('headless-editor');
var output = document.getElementById('output');

function showOutput(value) {
    if (output) {
        output.textContent = value;
    }
}

if (container) {
    editor.mount(container);
}

/* Load HTML Content */

var setHtmlButton = document.getElementById('set-html');

if (setHtmlButton) {
    setHtmlButton.addEventListener('click', function () {
        editor.setContent(
            '<h2>Updated HTML Content</h2><p>This content was loaded using <strong>setContent()</strong>.</p>'
        );
    });
}

var clearContentButton = document.getElementById('clear-content');

if (clearContentButton) {
    clearContentButton.addEventListener('click', function () {
        editor.setContent('');
    });
}

/* Export HTML Content */

var getHtmlButton = document.getElementById('get-html');

if (getHtmlButton) {
    getHtmlButton.addEventListener('click', function () {
        showOutput(editor.getHtml());
    });
}
