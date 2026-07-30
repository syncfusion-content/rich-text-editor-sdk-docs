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
        allowedStyles: ['text-decoration'],
        deniedTags: ['script', 'iframe']
    },
    afterPasteCleanup: function(args) {
        displayOutput('After Paste Event: Processed content length: ' + args.content.length + ' characters');
    }
});

blockEditor.appendTo('#blockeditor');

displayOutput('Paste Cleanup Settings Active:\n- Allowed Styles: [\'text-decoration\']\n- Denied Tags: [\'script\', \'iframe\']\n\nCopy content from the test area above and paste it into the editor to see the cleanup in action.');

// Output helper function
function displayOutput(message) {
    var outputDiv = document.getElementById('output');
    if (outputDiv) {
        outputDiv.textContent = message;
    }
}