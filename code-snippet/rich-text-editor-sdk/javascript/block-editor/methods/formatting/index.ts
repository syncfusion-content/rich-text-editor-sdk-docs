import { BlockEditor, ContentType, CommandName } from '@syncfusion/ej2-blockeditor';

const blockData = [
    {
        blockType: 'Heading',
        properties: { level: 1},
        content: [
            {
                contentType: ContentType.Text,
                content: 'Formatting Demo'
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Select this text and apply different formatting options using the buttons below. You can make text bold or change colors for the text.'
            }
        ]
    },
    {
        blockType: 'BulletList',
        content: [
            {
                contentType: ContentType.Text,
                content: 'List item for formatting demonstration'
            }
        ]
    }
];

// Initialize BlockEditor with sample content
const blockEditor: BlockEditor = new BlockEditor({
    blocks: blockData
});

blockEditor.appendTo('#blockeditor');

// Apply Bold Formatting
(document.getElementById('applyBoldBtn')as HTMLElement).addEventListener('click', () => {
    blockEditor.executeToolbarAction(CommandName.Bold);
    displayOutput('Bold formatting applied to selected text');
});

// Apply Color Formatting
(document.getElementById('applyColorBtn')as HTMLElement).addEventListener('click', () => {
    blockEditor.executeToolbarAction(CommandName.Color, '#ff6b35');
    displayOutput('Orange color (#ff6b35) applied to selected text');
});

// Enable Toolbar Items
(document.getElementById('enableToolbarBtn')as HTMLElement).addEventListener('click', () => {
    // Enable specific toolbar items
    blockEditor.enableToolbarItems(['bold', 'italic', 'underline']);
    displayOutput('Toolbar items (bold, italic, underline) have been enabled');
});

// Disable Toolbar Items
(document.getElementById('disableToolbarBtn')as HTMLElement).addEventListener('click', () => {
    // Disable specific toolbar items
    blockEditor.disableToolbarItems(['bold', 'italic']);
    displayOutput('Toolbar items (bold, italic) have been disabled');
});

// Output helper function
function displayOutput(message: string): void {
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
        outputDiv.textContent = message;
    }
}