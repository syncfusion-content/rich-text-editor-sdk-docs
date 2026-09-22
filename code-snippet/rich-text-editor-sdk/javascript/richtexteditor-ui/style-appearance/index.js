var editor = new ej.richtexteditorui.RichTextEditorUI({
    width: '100%',
    height: 'auto',
    cssClass: 'custom-rte',
    placeholder: 'Start typing here...',
    htmlAttributes: {
        'aria-label': 'Modern Rich Text Editor'
    }
});
editor.appendTo('#editor');
