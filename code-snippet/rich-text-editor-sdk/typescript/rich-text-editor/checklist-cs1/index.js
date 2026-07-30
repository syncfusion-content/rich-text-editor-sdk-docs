var editor = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
                items: ['Checklist', 'Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'Alignments', 'Blockquote', 'OrderedList',
                        'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'Undo', 'Redo']
        }
});
editor.appendTo('#editor');
