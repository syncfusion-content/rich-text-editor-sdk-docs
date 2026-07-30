import { BlockEditor, ContentType } from '@syncfusion/ej2-blockeditor';

const blockData = [
    {
        blockType: 'Heading',
        properties: { level: 1 },
        content: [
            {
                contentType: ContentType.Text,
                content: 'Appearance Configuration Demo'
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'This demo showcases different appearance configurations including readonly mode and a custom CSS theme.'
            }
        ]
    },
    {
        blockType: 'Heading',
        properties: { level: 2 },
        content: [
            {
                contentType: ContentType.Text,
                content: 'Configured Custom Theme'
            }
        ]
    },
    {
        blockType: 'BulletList',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Gradient background with modern styling'
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Use the readonly toggle to switch between editable and read-only modes. In readonly mode, you can view content but cannot make changes.'
            }
        ]
    }
];

const blockEditor: BlockEditor = new BlockEditor({
    blocks: blockData,
});

blockEditor.appendTo('#blockeditor');

// Track current state
let isReadonly = false;
let currentTheme = 'default';

// Toggle Readonly Mode
(document.getElementById('toggleReadonlyBtn') as HTMLElement).addEventListener('click', () => {
    isReadonly = !isReadonly;
    blockEditor.readOnly = isReadonly;

    // Add visual indication for readonly mode
    const editorElement = document.getElementById('blockeditor');
    if (editorElement) {
        if (isReadonly) {
            editorElement.classList.add('readonly-mode');
        } else {
            editorElement.classList.remove('readonly-mode');
        }
    }

    updateStatus();
    displayOutput(`Readonly mode ${isReadonly ? 'enabled' : 'disabled'}. ${isReadonly ? 'Content is now view-only.' : 'Content is now editable.'}`);
});

// Apply Custom Theme
(document.getElementById('applyCustomThemeBtn') as HTMLElement).addEventListener('click', () => {
    blockEditor.cssClass = 'custom-theme';
    currentTheme = 'custom';
    updateStatus();
    displayOutput('Custom theme applied. The editor now features a gradient background with modern styling and hover effects.');
});

// Add event listeners for editor interactions
blockEditor.focus = () => {
    displayOutput('Editor focused. You can now type or edit content.');
};

blockEditor.blur = () => {
    displayOutput('Editor lost focus.');
};

// Initialize status display
updateStatus();

// Output helper function
function displayOutput(message: string): void {
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
        outputDiv.textContent = message;
    }
}

// Update status display
function updateStatus(): void {
    const statusText = document.getElementById('statusText');
    if (statusText) {
        const mode = isReadonly ? 'Readonly' : 'Editable';
        const theme = currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1);
        statusText.textContent = `${mode}, ${theme} Theme`;
    }
}