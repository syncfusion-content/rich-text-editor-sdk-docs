var customToolbarItems = [ 'Color', 'Backgroundcolor' ];

// Initialize BlockEditor with custom block action configuration
var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: [
        {
            blockType: 'Heading',
            props: { level: 1},
            content: [
                {
                    contentType: ej.blockeditor.ContentType.Text,
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
                            contentType: ej.blockeditor.ContentType.Text,
                            content: 'Select any text in the editor to open the Inline Toolbar'
                        }
                    ]
                }]
            }
        }
    ],
    inlineToolbarSettings: {
        popupWidth: 'auto',
        enable: true,
        items: customToolbarItems,
        itemClick: function(args) {
            // Handle custom actions here
        }
    },
    fontColorSettings: {
        mode: 'Picker',
        modeSwitcher: true
    },
    backgroundColorSettings: {
        // Handle props here
    }
});

blockEditor.appendTo('#blockeditor');