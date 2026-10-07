// Enable Display in quick toolbar
var editor = new ej.richtexteditorui.RichTextEditorUI({
    imageSettings: {
        uploadUrl: 'https://api.example.com/upload',
        imageUrl: '/uploads/'
    },
    quickToolbarSettings: {
        image: ['AltText', 'Caption', '|', 'Align', 'Display', 'WrapText', '|', 'Dimension', 'Replace', 'Remove']
    }
});

editor.appendTo('#editor');
