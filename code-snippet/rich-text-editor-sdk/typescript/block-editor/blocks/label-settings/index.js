var labelSettings = {
    triggerChar: '#',
    items: [
        { id: 'bug', text: 'Bug', labelColor: '#ff5252', groupBy: 'Status' },
        { id: 'task', text: 'Task', labelColor: '#90caf9', groupBy: 'Status' },
        { id: 'feature', text: 'Feature', labelColor: '#81c784', groupBy: 'Status' },
        { id: 'enhancement', text: 'Enhancement', labelColor: '#ba68c8', groupBy: 'Status' },
        
        { id: 'low', text: 'Low Priority', labelColor: '#c5e1a5', groupBy: 'Priority' },
        { id: 'medium', text: 'Medium Priority', labelColor: '#fff59d', groupBy: 'Priority' },
        { id: 'high', text: 'High Priority', labelColor: '#ffab91', groupBy: 'Priority' },
        { id: 'critical', text: 'Critical', labelColor: '#ef9a9a', groupBy: 'Priority' }
    ]
};

var blocksData = [
    {
        blockType: 'Heading',
        properties: { level: 1},
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Project Planning with Custom Labels'
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Type # to add status labels to your tasks.'
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Fix homepage layout issue - '
            },
            {
                contentType: ej.blockeditor.ContentType.Label,
                properties: { labelId: 'bug'}
            },
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: ' '
            },
            {
                contentType: ej.blockeditor.ContentType.Label,
                properties: { labelId: 'high'}
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Update user documentation - '
            },
            {
                contentType: ej.blockeditor.ContentType.Label,
                properties: { labelId: 'task'}
            },
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: ' '
            },
            {
                contentType: ej.blockeditor.ContentType.Label,
                properties: { labelId: 'medium'}
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Implement payment gateway - '
            },
            {
                contentType: ej.blockeditor.ContentType.Label,
                properties: { labelId: 'feature'}
            },
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: ' '
            },
            {
                contentType: ej.blockeditor.ContentType.Label,
                properties: { labelId: 'critical'}
            }
        ]
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData,
    labelSettings: labelSettings
});
blockEditor.appendTo('#blockEditor');
