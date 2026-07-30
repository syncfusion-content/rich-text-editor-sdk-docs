import { BlockEditor, ContentType } from '@syncfusion/ej2-blockeditor';

const blockData = [
    {
        id: 'heading-block',
        blockType: 'Heading',
        properties: { level: 1},
        content: [
            {
                contentType: ContentType.Text,
                content: 'Welcome to Block Editor'
            }
        ]
    },
    {
        id: 'paragraph-1',
        blockType: 'Paragraph',
        content: [
            {
                id: 'paragraph1-content',
                contentType: ContentType.Text,
                content: 'This is the first paragraph with some sample text content for selection demonstration.'
            }
        ]
    },
    {
        id: 'paragraph-2',
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'This is the second paragraph that can be used for various selection operations.'
            }
        ]
    },
    {
        id: 'list-block',
        blockType: 'BulletList',
        content: [
            {
                contentType: ContentType.Text,
                content: 'First list item'
            }
        ]
    }
];

// Initialize BlockEditor with sample content
const blockEditor: BlockEditor = new BlockEditor({
    blocks: blockData
});

blockEditor.appendTo('#blockeditor');

// Set Text Selection Method
(document.getElementById('setSelectionBtn') as HTMLElement).addEventListener('click', () => {
    // Select text from position 5 to 15 in the first paragraph
    blockEditor.setSelection('paragraph1-content', 5, 15);
    displayOutput('Text selection set in "paragraph-1" block from position 5 to 15');
});

// Set Cursor Position Method
(document.getElementById('setCursorBtn') as HTMLElement).addEventListener('click', () => {
    // Set cursor at position 10 in the heading block
    blockEditor.setCursorPosition('heading-block', 10);
    displayOutput('Cursor position set at position 10 in "heading-block"');
});

// Get Selected Blocks Method
(document.getElementById('getSelectedBlocksBtn') as HTMLElement).addEventListener('click', () => {
    const selectedBlocks = blockEditor.getSelectedBlocks();
    if (selectedBlocks && selectedBlocks.length > 0) {
        const blockInfo = selectedBlocks.map(block => 
            `ID: ${block.id}, Type: ${block.blockType}`
        ).join('\n');
        displayOutput(`Selected blocks (${selectedBlocks.length}):\n${blockInfo}`);
    } else {
        displayOutput('No blocks are currently selected');
    }
});

// Get Selection Range Method
(document.getElementById('getRangeBtn') as HTMLElement).addEventListener('click', () => {
    const range = blockEditor.getRange();
    if (range) {
        const parent = range.startContainer.nodeType === 3
            ? (range.startContainer.parentElement as HTMLElement)
            : (range.startContainer as HTMLElement);
        displayOutput(`Current selection range:
            blockId: ${((parent as HTMLElement).closest('.e-block') as HTMLElement).id}
            Start Container: ${range.startContainer.nodeName}
            Start Offset: ${range.startOffset}
            End Container: ${range.endContainer.nodeName}
            End Offset: ${range.endOffset}
            Collapsed: ${range.collapsed}`);
    } else {
        displayOutput('No selection range found');
    }
});

// Set Selection Range Method
(document.getElementById('selectRangeBtn') as HTMLElement).addEventListener('click', () => {
    // Create a custom range for the second paragraph
    const paragraphElement = document.getElementById('paragraph-2');
    if (paragraphElement) {
        const range = document.createRange();
        const textNode = (paragraphElement.querySelector('.e-block-content') as HTMLElement).firstChild;
        if (textNode) {
            range.setStart(textNode, 8);
            range.setEnd(textNode, 20);
            blockEditor.selectRange(range);
            displayOutput('Custom selection range applied to "paragraph-2" (positions 8-20)');
        } else {
            displayOutput('Could not find text content in paragraph-2');
        }
    }
});

// Select Block Method
(document.getElementById('selectBlockBtn') as HTMLElement).addEventListener('click', () => {
    // Select the entire heading block
    blockEditor.selectBlock('heading-block');
    displayOutput('Entire "heading-block" selected');
});

// Select All Blocks Method
(document.getElementById('selectAllBtn') as HTMLElement).addEventListener('click', () => {
    blockEditor.selectAllBlocks();
    displayOutput('All blocks in the editor have been selected');
});

// Output helper function
function displayOutput(message: string): void {
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
        outputDiv.textContent = message;
    }
}