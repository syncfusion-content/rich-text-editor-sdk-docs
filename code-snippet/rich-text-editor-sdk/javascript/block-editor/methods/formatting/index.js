var blockData = [
    {
        blockType: 'Heading',
        properties: { level: 1},
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Formatting Demo'
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Select this text and apply different formatting options using the buttons below. You can make text bold or change colors for the text.'
            }
        ]
    },
    {
        blockType: 'BulletList',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'List item for formatting demonstration'
            }
        ]
    }
];

// Initialize BlockEditor with sample content
var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blockData
});

blockEditor.appendTo('#blockeditor');

// Apply Bold Formatting
document.getElementById('applyBoldBtn').addEventListener('click', function() {
    blockEditor.executeToolbarAction(ej.blockeditor.CommandName.Bold);
    displayOutput('Bold formatting applied to selected text');
});

// Apply Color Formatting
document.getElementById('applyColorBtn').addEventListener('click', function() {
    blockEditor.executeToolbarAction(ej.blockeditor.CommandName.Color, '#ff6b35');
    displayOutput('Orange color (#ff6b35) applied to selected text');
});

// Enable Toolbar Items
document.getElementById('enableToolbarBtn').addEventListener('click', function() {
    // Enable specific toolbar items
    blockEditor.enableToolbarItems(['bold', 'italic', 'underline']);
    displayOutput('Toolbar items (bold, italic, underline) have been enabled');
});

// Disable Toolbar Items
document.getElementById('disableToolbarBtn').addEventListener('click', function() {
    // Disable specific toolbar items
    blockEditor.disableToolbarItems(['bold', 'italic']);
    displayOutput('Toolbar items (bold, italic) have been disabled');
});

// Output helper function
function displayOutput(message) {
    var outputDiv = document.getElementById('output');
    if (outputDiv) {
        outputDiv.textContent = message;
    }
}