import { BlockEditor, ContentType } from '@syncfusion/ej2-blockeditor';

const blockData = [
    {
        id: 'title-block',
        blockType: 'Heading',
        properties: { level: 1},
        content: [
            {
                contentType: ContentType.Text,
                content: 'Document Export Demo'
            }
        ]
    },
    {
        id: 'intro-paragraph',
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'This document demonstrates the data export capabilities of the Block Editor. You can export content as JSON or HTML formats.'
            }
        ]
    },
    {
        id: 'features-heading',
        blockType: 'Heading',
        properties: { level: 2},
        content: [
            {
                contentType: ContentType.Text,
                content: 'Export Features'
            }
        ]
    },
    {
        id: 'features-list',
        blockType: 'BulletList',
        content: [
            {
                contentType: ContentType.Text,
                content: 'JSON export for data processing'
            }
        ]
    },
    {
        id: 'features-list-2',
        blockType: 'BulletList',
        content: [
            {
                contentType: ContentType.Text,
                content: 'HTML export for web display'
            }
        ]
    },
    {
        id: 'features-list-3',
        blockType: 'BulletList',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Print functionality for hard copies'
            }
        ]
    },
    {
        id: 'code-example',
        blockType: 'Code',
        content: [
            {
                contentType: ContentType.Text,
                content: 'const data = editor.getDataAsJson();\nconsole.log(data);'
            }
        ]
    }
];

// Initialize BlockEditor with sample content
const blockEditor: BlockEditor = new BlockEditor({
    blocks: blockData
});

blockEditor.appendTo('#blockeditor');

// Get All Data as JSON
(document.getElementById('getJsonAllBtn') as HTMLElement).addEventListener('click', () => {
    const jsonData = blockEditor.getDataAsJson();
    const formattedJson = JSON.stringify(jsonData, null, 2);
    displayOutput(`All blocks as JSON:\n\n${formattedJson}`);
});

// Get Specific Block Data as JSON
(document.getElementById('getJsonBlockBtn') as HTMLElement).addEventListener('click', () => {
    const blockData = blockEditor.getDataAsJson('title-block');
    const formattedJson = JSON.stringify(blockData, null, 2);
    displayOutput(`Block "title-block" as JSON:\n\n${formattedJson}`);
});

// Get All Data as HTML
(document.getElementById('getHtmlAllBtn') as HTMLElement).addEventListener('click', () => {
    const htmlData = blockEditor.getDataAsHtml();
    displayOutput(`All blocks as HTML:\n\n${htmlData}`);
});

// Get Specific Block Data as HTML
(document.getElementById('getHtmlBlockBtn') as HTMLElement).addEventListener('click', () => {
    const blockHtml = blockEditor.getDataAsHtml('intro-paragraph');
    displayOutput(`Block "intro-paragraph" as HTML:\n\n${blockHtml}`);
});

// Print Editor Content
(document.getElementById('printContentBtn') as HTMLElement).addEventListener('click', () => {
    blockEditor.print();
    displayOutput('Print dialog opened. Check for a new browser window/tab with the printable content.');
});

// Output helper function
function displayOutput(message: string): void {
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
        outputDiv.textContent = message;
    }
}