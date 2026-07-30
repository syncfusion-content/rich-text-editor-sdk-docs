import { BlockEditor, BlockType, ContentType } from '@syncfusion/ej2-blockeditor';
import { CommandItemSelectEventArgs, CommandFilteringEventArgs } from '@syncfusion/ej2-blockeditor';

// Initialize BlockEditor with custom slash command configuration
const blockEditor: BlockEditor = new BlockEditor({
    blocks: [
        {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Type "/" anywhere in this editor to open the custom slash command menu.'
                }
            ]
        }
    ],
    // Slash Command Menu Configuration
    commandMenuSettings: {
        popupWidth: '350px',
        popupHeight: '400px',
        // Custom command items
        commands: [
            {
                id: 'line-cmd',
                type: BlockType.Divider,
                groupBy: 'Utility',
                label: 'Insert a Line',
                iconCss: 'e-icons e-divider',
            },
            {
                id: 'timestamp-cmd',
                groupBy: 'Actions',
                label: 'Insert Timestamp',
                iconCss: 'e-icons e-schedule',
            }
        ],
        itemSelect: (args: CommandItemSelectEventArgs) => {
            // Handle custom command actions
        },
        filtering: (args: CommandFilteringEventArgs) => {
            // Your actions here
        }
    }
});

blockEditor.appendTo('#blockeditor');