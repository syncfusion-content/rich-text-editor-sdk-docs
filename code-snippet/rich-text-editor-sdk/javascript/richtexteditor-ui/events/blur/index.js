var editor = new ej.richtexteditorui.RichTextEditorUI({
    // Raised when the editor loses focus
    blur: function () {
        logEvent('[blur event]: Editor lost focus.');
    },
    // Raised when the editor receives focus
    focus: function () {
        logEvent('[focus event]: Editor focused. Click outside the Editor to trigger blur event.');
    }
});
editor.appendTo('#editor');

// Helper function to update the event log in the HTML UI
function logEvent(message) {
    var logElement = document.getElementById('event-log');
    if (logElement) {
        logElement.innerText = message;
    }
}
