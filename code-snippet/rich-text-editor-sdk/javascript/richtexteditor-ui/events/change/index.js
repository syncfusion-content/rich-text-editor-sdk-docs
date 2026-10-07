var editor = new ej.richtexteditorui.RichTextEditorUI({
    change: function (args) {
        var logElement = document.getElementById('event-log');
        var nodeElement = document.getElementById('affected-node');
        if (logElement && nodeElement) {
            // 1. Display the type of action performed (e.g., "Insertion")
            logElement.innerText = 'Action: ' + (args.action || 'Modified');
            // 2. Extract and display the tag/type of the affected node (e.g., "paragraph")
            if (args.affectedNodes && args.affectedNodes.length > 0) {
                var primaryNode = args.affectedNodes[0];
                nodeElement.innerText = 'Affected Element: <' + primaryNode.type + '>';
            } else {
                nodeElement.innerText = 'Affected Element: None';
            }
        }
    }
});

editor.appendTo('#editor');
