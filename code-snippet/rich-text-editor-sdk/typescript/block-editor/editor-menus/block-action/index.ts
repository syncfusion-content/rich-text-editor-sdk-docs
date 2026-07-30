import { BlockEditor, ContentType } from '@syncfusion/ej2-blockeditor';
import { BlockActionMenuOpeningEventArgs, BlockActionMenuClosingEventArgs, BlockActionItemSelectEventArgs } from '@syncfusion/ej2-blockeditor';

// Initialize BlockEditor with custom block action configuration
const blockEditor: BlockEditor = new BlockEditor({
    blocks: [
        {
            blockType: 'Heading',
            properties: { level: 1},
            content: [
                {
                    contentType: ContentType.Text,
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
                            contentType: ContentType.Text,
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
        opening: (args: BlockActionMenuOpeningEventArgs) => {
            // Your actions here
        },
        closing: (args: BlockActionMenuClosingEventArgs) => {
            // Your actions here
        },
        itemSelect: (args: BlockActionItemSelectEventArgs) => {
            // Handle custom block actions
        }
    }
});

blockEditor.appendTo('#blockeditor');