var blockData = [
    {
        id: 'heading-block',
        blockType: 'Heading',
        properties: { level: 1},
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
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
                contentType: ej.blockeditor.ContentType.Text,
                content: 'This is the first paragraph with some sample text content for selection demonstration.'
            }
        ]
    },
    {
        id: 'paragraph-2',
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'This is the second paragraph that can be used for various selection operations.'
            }
        ]
    },
    {
        id: 'list-block',
        blockType: 'BulletList',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'First list item'
            }
        ]
    }
];

// Initialize BlockEditor with sample content
var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blockData
});

blockEditor.appendTo('#blockeditor');

// Set Text Selection Method
(document.getElementById('setSelectionBtn')).addEventListener('click', function() {
    // Select text from position 5 to 15 in the first paragraph
    blockEditor.setSelection('paragraph1-content', 5, 15);
    displayOutput('Text selection set in "paragraph-1" block from position 5 to 15');
});

// Set Cursor Position Method
(document.getElementById('setCursorBtn')).addEventListener('click', function() {
    // Set cursor at position 10 in the heading block
    blockEditor.setCursorPosition('heading-block', 10);
    displayOutput('Cursor position set at position 10 in "heading-block"');
});

// Get Selected Blocks Method
(document.getElementById('getSelectedBlocksBtn')).addEventListener('click', function() {
    var selectedBlocks = blockEditor.getSelectedBlocks();
    if (selectedBlocks && selectedBlocks.length > 0) {
        var blockInfo = selectedBlocks.map(function(block) {
            return 'ID: ' + block.id + ', Type: ' + block.blockType;
        }).join('\n');
        displayOutput('Selected blocks (' + selectedBlocks.length + '):\n' + blockInfo);
    } else {
        displayOutput('No blocks are currently selected');
    }
});

// Get Selection Range Method
(document.getElementById('getRangeBtn')).addEventListener('click', function() {
    var range = blockEditor.getRange();
    if (range) {
        var parent = range.startContainer.nodeType === 3
            ? (range.startContainer.parentElement)
            : (range.startContainer);
        displayOutput('Current selection range:\n' +
            '    blockId: ' + (parent).closest('.e-block').id + '\n' +
            '    Start Container: ' + range.startContainer.nodeName + '\n' +
            '    Start Offset: ' + range.startOffset + '\n' +
            '    End Container: ' + range.endContainer.nodeName + '\n' +
            '    End Offset: ' + range.endOffset + '\n' +
            '    Collapsed: ' + range.collapsed);
    } else {
        displayOutput('No selection range found');
    }
});

// Set Selection Range Method
(document.getElementById('selectRangeBtn')).addEventListener('click', function() {
    // Create a custom range for the second paragraph
    var paragraphElement = document.getElementById('paragraph-2');
    if (paragraphElement) {
        var range = document.createRange();
        var textNode = (paragraphElement.querySelector('.e-block-content')).firstChild;
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
(document.getElementById('selectBlockBtn')).addEventListener('click', function() {
    // Select the entire heading block
    blockEditor.selectBlock('heading-block');
    displayOutput('Entire "heading-block" selected');
});

// Select All Blocks Method
(document.getElementById('selectAllBtn')).addEventListener('click', function() {
    blockEditor.selectAllBlocks();
    displayOutput('All blocks in the editor have been selected');
});

// Output helper function
function displayOutput(message) {
    var outputDiv = document.getElementById('output');
    if (outputDiv) {
        outputDiv.textContent = message;
    }
}