
var blockData = [
    {
        blockType: 'Heading',
        properties: { level: 1 },
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Appearance Configuration Demo'
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'This demo showcases different appearance configurations including readonly mode and a custom CSS theme.'
            }
        ]
    },
    {
        blockType: 'Heading',
        properties: { level: 2 },
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Configured Custom Theme'
            }
        ]
    },  
    {
        blockType: 'BulletList',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Gradient background with modern styling'
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Use the readonly toggle to switch between editable and read-only modes. In readonly mode, you can view content but cannot make changes.'
            }
        ]
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blockData,
});

blockEditor.appendTo('#blockeditor');

// Track current state
var isReadonly = false;
var currentTheme = 'default';

// Toggle Readonly Mode
(document.getElementById('toggleReadonlyBtn')).addEventListener('click', () => {
    isReadonly = !isReadonly;
    blockEditor.readOnly = isReadonly;

    // Add visual indication for readonly mode
    var editorElement = document.getElementById('blockeditor');
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
(document.getElementById('applyCustomThemeBtn')).addEventListener('click', () => {
    blockEditor.cssClass = 'custom-theme';
    currentTheme = 'custom';
    updateStatus();
    displayOutput('Custom theme applied. The editor now features a gradient background with modern styling and hover effects.');
});

// Add event listeners for editor interactions
blockEditor.focus = function() {
    displayOutput('Editor focused. You can now type or edit content.');
};

blockEditor.blur = function() {
    displayOutput('Editor lost focus.');
};

// Initialize status display
updateStatus();

// Output helper function
function displayOutput(message) {
    var outputDiv = document.getElementById('output');
    if (outputDiv) {
        outputDiv.textContent = message;
    }
}

// Update status display
function updateStatus() {
    var statusText = document.getElementById('statusText');
    if (statusText) {
        var mode = isReadonly ? 'Readonly' : 'Editable';
        var theme = currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1);
        statusText.textContent = `${mode}, ${theme} Theme`;
    }
}