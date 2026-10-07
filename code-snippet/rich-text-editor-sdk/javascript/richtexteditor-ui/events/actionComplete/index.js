var editor = new ej.richtexteditorui.RichTextEditorUI({
    // Triggers AFTER an action successfully completes
    actionComplete: function (args) {
        logToConsole('actionComplete', args.action, '#5cb85c'); // Highlighted in Green
    }
});
editor.appendTo('#editor');

function logToConsole(eventName, requestType, color) {
    var logContainer = document.getElementById('log-container');
    var emptyMessage = document.getElementById('empty-message');
    if (!logContainer) { return; }
    // Hide the placeholder text once the first event fires
    if (emptyMessage) {
        emptyMessage.style.display = 'none';
    }
    var timestamp = new Date().toLocaleTimeString();
    var actionLabel = requestType ? requestType : 'Generic Action';
    // Create log row element
    var logRow = document.createElement('div');
    logRow.style.marginBottom = '6px';
    logRow.style.borderLeft = '3px solid ' + color;
    logRow.style.paddingLeft = '8px';
    logRow.innerHTML = '<strong style="color: ' + color + '">[' + timestamp + '] ' + eventName + '</strong> — <em>Action:</em> ' + actionLabel;
    // Insert new logs at the top of the logging stream
    logContainer.insertBefore(logRow, logContainer.firstChild);
}

// Clear button logic to wipe console history clean
var clearBtn = document.getElementById('clear-btn');
if (clearBtn) {
    clearBtn.addEventListener('click', function () {
        var logContainer = document.getElementById('log-container');
        if (logContainer) {
            logContainer.innerHTML = '<div id="empty-message" style="color: #999; font-style: italic;">No events captured yet. Try typing or formatting some text inside the editor...</div>';
        }
    });
}
