var editor = new ej.richtexteditorui.RichTextEditorUI({
    value: '<p>Getting started with the Rich Text Editor UI.</p>',
    valueFormat: 'html',
    change: function () {
        console.log(editor.getHtml());
    }
});
editor.appendTo('#editor');
