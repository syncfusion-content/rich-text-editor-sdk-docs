// Enable Image Resize with min/max constraints
var editor = new ej.richtexteditorui.RichTextEditorUI({
    imageSettings: {
        uploadUrl: 'https://api.example.com/upload',
        imageUrl: '/uploads/',
        resize: true,  // Enable resizing (default: true)
        dimension: {
            minWidth: '50px',
            maxWidth: '800px',
            minHeight: '50px',
            maxHeight: '600px'
        }
    },
    quickToolbarSettings: {
        image: ['AltText', 'Caption', '|', 'Align', 'Display', 'WrapText', '|', 'Dimension', 'Replace', 'Remove']
    }
});

editor.appendTo('#editor');
