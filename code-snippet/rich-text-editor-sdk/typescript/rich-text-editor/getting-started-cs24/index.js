var editor = new ej.richtexteditor.RichTextEditor({
    //Define the quicktoolbar items for image
    quickToolbarSettings: {
        image: [
        'Replace', 'Align', 'WrapText', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '-',
        'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension'
        ],
        link: ['Open', 'Edit', 'UnLink']
    },
    //Define toolbar items
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
        'Outdent', 'Indent', '|',
        'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
        'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
    }
});

editor.appendTo('#editor');

