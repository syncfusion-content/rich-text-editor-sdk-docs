var editor = new ej.richtexteditorui.RichTextEditorUI({
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', 'Strikethrough', '|', 'Formats', 'Alignment', 'BulletList', 'NumberedList', '|', 'Link', 'Image', 'Table', '|', 'Undo', 'Redo'],
        updatedToolbarStatus: function (args) {
            var logElement = document.getElementById('event-log');
            if (logElement && args) {
                var activeMarks = (args.activeMarks || []);
                if (activeMarks.bold && activeMarks.italic) {
                    logElement.innerHTML = '<strong>Active Formats:</strong> Both Bold and Italic format is active';
                } else if (activeMarks.bold) {
                    logElement.innerHTML = '<strong>Active Formats:</strong> Bold format is active';
                } else if (activeMarks.italic) {
                    logElement.innerHTML = '<strong>Active Formats:</strong> Italic format is active';
                } else {
                    logElement.innerHTML = '<strong>Active Formats:</strong> Neither Bold nor Italic is active';
                }
            }
        }
    }
});

editor.appendTo('#editor');
