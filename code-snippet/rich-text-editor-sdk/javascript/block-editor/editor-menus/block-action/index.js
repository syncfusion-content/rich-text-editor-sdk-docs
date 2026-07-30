// Initialize BlockEditor with custom block action configuration
var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: [
        {
            blockType: 'Heading',
            props: { level: 1},
            content: [
                {
                    contentType: ej.blockeditor.ContentType.Text,
                    content: 'Block Action Menu Demo'
                }
            ]
        },
        {
            blockType: 'Quote',
            properties:{
                children:[{
                    blockType: 'Paragraph',
                    content: [
                        {
                            contentType: ej.blockeditor.ContentType.Text,
                            content: 'Hover over any block and click the drag handle icon to see custom actions.'
                        }
                    ]
                }]
            }
        }
    ],
    

    // Block Action Menu Configuration
    blockActionMenuSettings: {
        enable: true,
        popupWidth: '180px',
        popupHeight: '110px',
        enableTooltip: false,
        // Custom action items
        items: [
            {
                id: 'highlight-action',
                label: 'Highlight Block',
                iconCss: 'e-icons e-highlight',
                tooltip: 'Highlight this block'
            },
            {
                id: 'copy-content-action',
                label: 'Copy Content',
                iconCss: 'e-icons e-copy',
                tooltip: 'Copy block content to clipboard'
            },
            {
                id: 'block-info-action',
                label: 'Block Info',
                tooltip: 'Show block information'
            }
        ],
        open: function(args) {
            // Your actions here
        },
        close: function(args) {
            // Your actions here
        },
        itemClick: function(args) {
            // Handle custom block actions
        }
    }
});

blockEditor.appendTo('#blockeditor');