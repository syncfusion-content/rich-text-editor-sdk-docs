var editor = new ej.richtexteditorui.RichTextEditorUI({
    toolbarSettings: {
        items: [
            'Bold', 'Italic', 'Underline', '|',
            {
                id: 'WordCount',
                actionId: 'wordCount',
                prefixIcon: 'e-icons e-numbering-list',
                tooltipText: 'Word count',
                align: 'Left'
            },
            '|', 'Undo', 'Redo'
        ],
        itemClicked: function (args) {
            if (args.item) {
                var words = editor.getText().trim().split(/\s+/).filter(Boolean).length;
                alert('Word count: ' + words);
            }
        }
    }
});

editor.appendTo('#editor');
