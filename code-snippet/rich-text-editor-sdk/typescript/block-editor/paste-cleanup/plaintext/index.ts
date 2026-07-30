import { BlockEditor, AfterPasteCleanupEventArgs } from '@syncfusion/ej2-blockeditor';

// Initialize BlockEditor with paste cleanup settings
const blockEditor: BlockEditor = new BlockEditor({
    blocks: [
        {
            blockType: 'Paragraph'
        }
    ],
    // Configure paste cleanup settings
    pasteCleanupSettings: {
        keepFormat: false,
        plainText: true,
    },
    afterPasteCleanup: (args: AfterPasteCleanupEventArgs) => {
        displayOutput(`After Paste Event: Processed content length: ${args.content.length} characters`);
    }
});

blockEditor.appendTo('#blockeditor');

displayOutput(`Paste Cleanup Settings Active:
- Keep Format: false
- Plain Text: true

Copy content from the test area above and paste it into the editor to see the cleanup in action.`);

// Output helper function
function displayOutput(message: string): void {
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
        outputDiv.textContent = message;
    }
}