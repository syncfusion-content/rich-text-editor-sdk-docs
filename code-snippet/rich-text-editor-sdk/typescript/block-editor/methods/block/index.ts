import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blockData = [
    {
        id: 'block-1',
        blockType: 'Heading',
        properties: { level: 1},
        content: [
            {
                contentType: ContentType.Text,
                content: 'Sample Heading'
            }
        ]
    },
    {
        id: 'block-2',
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'This is a sample paragraph block.'
            }
        ]
    },
    {
        id: 'block-3',
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'This is another paragraph block.'
            }
        ]
    }
];

// Initialize BlockEditor with some initial blocks
const blockEditor: BlockEditor = new BlockEditor({
    blocks: blockData
});

blockEditor.appendTo('#blockeditor');

// Add Block Method
(document.getElementById('addBlockBtn') as HTMLElement).addEventListener('click', () => {
    const newBlock: BlockModel = {
        id: 'new-block',
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'This is a newly added block'
            }
        ]
    };
    
    blockEditor.addBlock(newBlock, 'block-2', true);
    displayOutput(`Block added successfully with ID: ${newBlock.id}`);
});

// Remove Block Method
(document.getElementById('removeBlockBtn') as HTMLElement).addEventListener('click', () => {
    blockEditor.removeBlock('block-3');
    displayOutput('Block with ID "block-3" removed successfully');
});

// Get Block Method
(document.getElementById('getBlockBtn') as HTMLElement).addEventListener('click', () => {
    const block = blockEditor.getBlock('block-1');
    if (block && block.content) {
        displayOutput(`Block found:\nID: ${block.id}\nType: ${block.type}\nContent: ${block.content[0].content}`);
    } else {
        displayOutput('Block with ID "block-1" not found');
    }
});

// Move Block Method
(document.getElementById('moveBlockBtn') as HTMLElement).addEventListener('click', () => {
    blockEditor.moveBlock('block-2', 'block-1');
    displayOutput('Block "block-2" moved successfully');
});

// Update Block Method
(document.getElementById('updateBlockBtn') as HTMLElement).addEventListener('click', () => {
    const success = blockEditor.updateBlock('block-2', {
        indent: 1,
        content: [
            {
                content: 'Updated content'
            }
        ]
    });
    
    const updatedBlock = blockEditor.getBlock('block-2');
    if (success && updatedBlock && updatedBlock.content) {
        displayOutput(`Block ${updatedBlock.id} updated successfully\nNew content: "${updatedBlock.content[0].content} \nNew indent: ${updatedBlock.indent}"`);
    } else {
        displayOutput('Failed to update block');
    }
});

// Get Block Count Method
(document.getElementById('getBlockCountBtn') as HTMLElement).addEventListener('click', () => {
    const count = blockEditor.getBlockCount();
    displayOutput(`Total number of blocks: ${count}`);
});

// Output helper function
function displayOutput(message: string): void {
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
        outputDiv.textContent = message;
    }
}