var editor = new ej.richtexteditorui.RichTextEditorUI({
    // The destroyed event fires after the component is removed from the application
    destroyed: function () {
        var logElement = document.getElementById('event-log');
        if (logElement) {
            // Inform the user that cleanup tasks are executing or complete
            logElement.innerText = 'Action: Editor has been destroyed and resources are cleared!';
        }
    }
});
editor.appendTo('#editor');

document.getElementById('destroy-btn').addEventListener('click', function () {
    if (editor) {
        editor.destroy();
    }
});
