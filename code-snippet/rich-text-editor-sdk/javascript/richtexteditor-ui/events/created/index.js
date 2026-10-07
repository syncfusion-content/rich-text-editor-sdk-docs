var editor = new ej.richtexteditorui.RichTextEditorUI({
    // The created event fires immediately after the component is rendered
    created: function () {
        var logElement = document.getElementById('event-log');
        if (logElement) {
            // Update the UI text to tell a new user that the component is fully ready
            logElement.innerText = 'Action: Editor is ready for input!';
        }
    }
});

editor.appendTo('#editor');
