var blockData = [
    {
        blockType: 'Heading',
        properties: { level: 1 },
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Block Editor - Theme Customization'
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'This sample demonstrates multiple theme options for the Block Editor. Switch between themes using the buttons above to see different styling applied.'
            }
        ]
    },
    {
        blockType: 'Heading',
        properties: { level: 2 },
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Available Themes'
            }
        ]
    },
    {
        blockType: 'BulletList',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Slate Light - Professional light theme with blue accents'
            }
        ]
    },
    {
        blockType: 'BulletList',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Sage Green - Calming green theme with natural colors'
            }
        ]
    },
    {
        blockType: 'BulletList',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Dark Pro - Modern dark theme for reduced eye strain'
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Try editing this content and observe how the theme colors affect the entire interface, including text, buttons, and interactive elements.'
            }
        ]
    },
    {
        blockType: 'Heading',
        properties: { level: 2 },
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Features Included'
            }
        ]
    },
    {
        blockType: 'BulletList',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'CSS variable-based theme system for easy customization'
            }
        ]
    },
    {
        blockType: 'BulletList',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Consistent styling across all UI components'
            }
        ]
    },
    {
        blockType: 'BulletList',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Support for light and dark mode preferences'
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Each theme includes carefully selected colors for backgrounds, text, borders, and interactive states to ensure optimal readability and user experience.'
            }
        ]
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blockData,
});

blockEditor.appendTo('#blockeditor');

// Track current theme state
var currentTheme = 'sageGreenTheme';

// Theme switching function
function applyTheme(themeName, buttonElement) {
    // Remove previous theme classes from body
    document.body.classList.remove('slateLightTheme', 'sageGreenTheme', 'darkProTheme');
    
    // Add new theme class
    document.body.classList.add(themeName);
    currentTheme = themeName;
    
    // Update button states
    document.querySelectorAll('.theme-switcher button').forEach(btn => {
        btn.setAttribute('aria-pressed', 'false');
    });
    buttonElement.setAttribute('aria-pressed', 'true');
    
    // Log theme change
    console.log('Theme changed to: ' + themeName);
}

// Initialize with default theme (Sage Green)
document.body.classList.add('sageGreenTheme');

// Theme button event listeners
(document.getElementById('slateLightThemeBtn')).addEventListener('click', function() {
    applyTheme('slateLightTheme', this);
});

(document.getElementById('sageGreenThemeBtn')).addEventListener('click', function() {
    applyTheme('sageGreenTheme', this);
});

(document.getElementById('darkProThemeBtn')).addEventListener('click', function() {
    applyTheme('darkProTheme', this);
});

// Set initial button state
document.getElementById('sageGreenThemeBtn').setAttribute('aria-pressed', 'true');
