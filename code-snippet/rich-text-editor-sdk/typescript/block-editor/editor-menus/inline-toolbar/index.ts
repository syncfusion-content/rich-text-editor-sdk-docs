import { BlockEditor, ContentType, ToolbarItemClickEventArgs } from '@syncfusion/ej2-blockeditor';

// Initialize BlockEditor with custom block action configuration
const blockEditor: BlockEditor = new BlockEditor({
    blocks: [
        {
            blockType: 'Heading',
            properties: { level: 1},
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Inline Toolbar Demo'
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
                            content: 'Select any text in the editor to open the Inline Toolbar'
                        }
                    ]
                }]
            }
        }
    ],
    inlineToolbarSettings: {
        popupWidth: '100px',
        enable: true,
        items: [ 'Bold', 'Italic' ],
        itemClick: (args: ToolbarItemClickEventArgs) => {
            // Handle custom actions here
        }
    }
});

blockEditor.appendTo('#blockeditor');