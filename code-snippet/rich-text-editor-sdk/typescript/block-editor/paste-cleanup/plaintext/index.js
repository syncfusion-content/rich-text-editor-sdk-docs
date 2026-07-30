// Initialize BlockEditor with paste cleanup settings
var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: [
        {
            id: 'demo-block',
            blockType: 'Paragraph'
        }
    ],
    // Configure paste cleanup settings
    pasteCleanupSettings: {
        keepFormat: false,
        plainText: true,
    },
    afterPasteCleanup: function(args) {
        displayOutput('After Paste Event: Processed content length: ' + args.content.length + ' characters');
    }
});

blockEditor.appendTo('#blockeditor');

displayOutput('Paste Cleanup Settings Active:\n- Keep Format: false\n- Plain Text: true\n\nCopy content from the test area above and paste it into the editor to see the cleanup in action.');

// Output helper function
function displayOutput(message) {
    var outputDiv = document.getElementById('output');
    if (outputDiv) {
        outputDiv.textContent = message;
    }
}