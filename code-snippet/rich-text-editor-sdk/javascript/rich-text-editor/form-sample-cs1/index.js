ej.base.enableRipple(true);
ej.richtexteditor.RichTextEditor.Inject(ej.richtexteditor.Toolbar, ej.richtexteditor.Link, ej.richtexteditor.Image, ej.richtexteditor.HtmlEditor, ej.richtexteditor.Count, ej.richtexteditor.QuickToolbar);

var editor = new ej.richtexteditor.RichTextEditor({ showCharCount: true, maxLength: 100, placeholder: 'Type something' });
editor.appendTo('#editor');

var formObject = new ej.inputs.FormValidator('#form-element');

document.getElementById('validateSubmit').onclick = function () {
    getValue();
};

function getValue() {
    var form = document.getElementById('form-element');
    var formData = new FormData(form);
    var rteValue = formData.get('editor');
    alert(rteValue); //Store the value to the data base.
}

