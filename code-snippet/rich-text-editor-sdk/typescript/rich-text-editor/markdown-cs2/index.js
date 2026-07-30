/**
 * Rich Text Editor Markdown Preview Sample
 */
ej.base.enableRipple(true);

var textArea;
var mdsource;
var htmlPreview;

var editor = new ej.richtexteditor.RichTextEditor({
    height: 340, editorMode: 'Markdown',
    toolbarSettings: {
        items: ['Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', '|',
            { tooltipText: 'Preview', template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                    '<span class="e-btn-icon e-md-preview e-icons"></span></button>' }, '|', 'Undo', 'Redo']
    },
    created: function () {
        textArea = editor.contentModule.getEditPanel();
        textArea.addEventListener('keyup', function (e) { markDownConversion(); });
        mdsource = document.getElementById('preview-code');
        mdsource.addEventListener('click', function (e) {
            fullPreview({ mode: true, type: 'preview' });
            if (e.currentTarget.classList.contains('e-active')) {
                editor.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', '|',
                    'Formats', 'OrderedList', 'UnorderedList', '|',
                    'CreateLink', 'Image', 'Undo', 'Redo']);
            }
            else {
                editor.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough', '|',
                    'Formats', 'OrderedList', 'UnorderedList', '|',
                    'CreateLink', 'Image', 'Undo', 'Redo']);
            }
        });
    },
});
editor.appendTo('#editor');

function markDownConversion() {
    if (mdsource.classList.contains('e-active')) {
        var id = editor.getID() + 'html-preview';
        var htmlPreview = editor.element.querySelector('#' + id);
        var rteElement = editor.contentModule.getEditPanel();
        var rteValue = rteElement.value;
        htmlPreview.innerHTML = marked(editor.contentModule.getEditPanel().value);
    }
}

function fullPreview(e) {
    var id = editor.getID() + 'html-preview';
    htmlPreview = editor.element.querySelector('#' + id);
    if (mdsource.classList.contains('e-active')) {
        mdsource.classList.remove('e-active');
        mdsource.parentElement.title = 'Preview';
        textArea.style.display = 'block';
        textArea.style.width = '100%';
        htmlPreview.style.display = 'none';
    }
    else {
        mdsource.classList.add('e-active');
        if (!htmlPreview) {
            htmlPreview = ej.base.createElement('div', { className: 'e-content' });
            htmlPreview.id = id;
            textArea.parentNode.appendChild(htmlPreview);
        }
        if (e.type === 'preview') {
            textArea.style.display = 'none';
            htmlPreview.classList.add('e-pre-source');
        }
        else {
            htmlPreview.classList.remove('e-pre-source');
            textArea.style.width = '50%';
        }
        htmlPreview.style.display = 'block';
        markDownConversion();
        mdsource.parentElement.title = 'Code View';
    }
}
