style.css
.theme-switcher {
    margin-bottom: 15px;
    display: flex;
    gap: 10px;
}

.theme-switcher button {
    padding: 10px 16px;
    border: 1px solid #ccc;
    border-radius: 6px;
    cursor: pointer;
    background: #fff;
    font-weight: 500;
    transition: all 0.3s ease;
}

.theme-switcher button:hover {
    background-color: #f0f0f0;
    border-color: #999;
}

.slateLightTheme .e-blockeditor {

    /* Backgrounds */
    --color-sf-content-bg-color: #f8f7f4;
    --color-sf-content-bg-color-hover: #efede7;
    --color-sf-content-bg-color-selected: #e7e5df;
    --color-sf-content-bg-color-pressed: #dcd9d2;

    /* Text */
    --color-sf-content-text-color: #2f3437;
    --color-sf-content-text-color-alt1: #1f2328;
    --color-sf-placeholder-text-color: #787774;

    /* Borders */
    --color-sf-border-light: #e7e5df;
    --color-sf-border: #d0cdc7;
    --color-sf-border-hover: #8b8b8b;
    --color-sf-border-selected: #5f5f5f;

    /* Primary */
    --color-sf-primary: #2563eb;
    --color-sf-primary-bg-color: #2563eb;
    --color-sf-primary-border-color: #2563eb;
    --color-sf-primary-text-color: #ffffff;

    /* Icons */
    --color-sf-icon-color: #6b7280;

    background: #f8f7f4 !important;
    border: 1px solid #d0cdc7;
    border-radius: 20px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, .08);
}

/* Popup & Menus */
body.slateLightTheme #blockeditor_contextmenu,
body.slateLightTheme .e-content .e-dropdownbase,
body.slateLightTheme #blockeditor_code-ddl_popup {
    background: #ffffff;
    border: 1px solid #d0cdc7;
    color: #2f3437;
}

/* List Items */
body.slateLightTheme #blockeditor_code-ddl_popup .e-list-item {
    background: #ffffff !important;
    color: #2f3437 !important;
}

/* Hover */
body.slateLightTheme #blockeditor_code-ddl_popup .e-list-item:hover {
    background: #efede7 !important;
    color: #1f2328 !important;
}

/* Selected */
body.slateLightTheme #blockeditor_code-ddl_popup .e-selected,
body.slateLightTheme #blockeditor_code-ddl_popup .e-active {
    background: #2563eb !important;
    color: #ffffff !important;
}

/* Table Headers */
.slateLightTheme .e-blockeditor .e-table-element thead th {
    background: #2563eb !important;
    color: #ffffff !important;
}

/* =====================================
   SAGE GREEN THEME
===================================== */

.sageGreenTheme .e-blockeditor {

    /* Backgrounds */
    --color-sf-content-bg-color: #f6f8f4;
    --color-sf-content-bg-color-hover: #edf2e8;
    --color-sf-content-bg-color-selected: #dfe8d5;
    --color-sf-content-bg-color-pressed: #d2dfc4;

    /* Text */
    --color-sf-content-text-color: #2f3e2f;
    --color-sf-content-text-color-alt1: #243224;
    --color-sf-placeholder-text-color: #6b7a61;

    /* Borders */
    --color-sf-border-light: #dfe8d5;
    --color-sf-border: #c8d5b9;
    --color-sf-border-hover: #7a9b5f;
    --color-sf-border-selected: #6b8e23;

    /* Primary */
    --color-sf-primary: #6b8e23;
    --color-sf-primary-bg-color: #6b8e23;
    --color-sf-primary-border-color: #6b8e23;
    --color-sf-primary-text-color: #ffffff;

    /* Icons */
    --color-sf-icon-color: #5f7d3b;

    background: #f6f8f4 !important;
    border-radius: 20px;
    box-shadow: 0 8px 24px rgba(107, 142, 35, 0.12);
}

/* Popup & Menus */
body.sageGreenTheme #blockeditor_contextmenu,
body.sageGreenTheme .e-content .e-dropdownbase,
body.sageGreenTheme #blockeditor_code-ddl_popup {
    background: #fbfcfa;
    border: 1px solid #c8d5b9;
    color: #2f3e2f;
}

/* List Items */
body.sageGreenTheme #blockeditor_code-ddl_popup .e-list-item {
    background: #fbfcfa !important;
    color: #2f3e2f !important;
}

/* Hover */
body.sageGreenTheme #blockeditor_code-ddl_popup .e-list-item:hover {
    background: #edf2e8 !important;
    color: #4d6530 !important;
}

/* Selected */
body.sageGreenTheme #blockeditor_code-ddl_popup .e-selected,
body.sageGreenTheme #blockeditor_code-ddl_popup .e-active {
    background: #6b8e23 !important;
    color: #ffffff !important;
}

/* Table Headers */
.sageGreenTheme .e-blockeditor .e-table-element thead th {
    background: #6b8e23 !important;
    color: #ffffff !important;
}

/* =====================================
   DARK PRO THEME
===================================== */

.darkProTheme .e-blockeditor {

    /* Backgrounds */
    --color-sf-content-bg-color: #0d1117;
    --color-sf-content-bg-color-hover: #61666c;
    --color-sf-content-bg-color-selected: #21262d;
    --color-sf-content-bg-color-pressed: #30363d;

    /* Text */
    --color-sf-content-text-color: #e6edf3;
    --color-sf-content-text-color-alt1: #ffffff;
    --color-sf-placeholder-text-color: #7d8590;

    /* Borders */
    --color-sf-border-light: #21262d;
    --color-sf-border: #30363d;
    --color-sf-border-hover: #58a6ff;
    --color-sf-border-selected: #58a6ff;

    /* Primary */
    --color-sf-primary: #1f6feb;
    --color-sf-primary-bg-color: #1f6feb;
    --color-sf-primary-border-color: #1f6feb;
    --color-sf-primary-text-color: #ffffff;

    /* Icons */
    --color-sf-icon-color: #8b949e;

    background: #0d1117 !important;
    border: 1px solid #30363d;
    border-radius: 20px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.55);
}

/* Popup & Menus */
body.darkProTheme #blockeditor_contextmenu,
body.darkProTheme .e-content .e-dropdownbase,
body.darkProTheme #blockeditor_code-ddl_popup {
    background: #161b22;
    border: 1px solid #30363d;
    color: #e6edf3;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

/* List Items */
body.darkProTheme #blockeditor_code-ddl_popup .e-list-item {
    background: #161b22 !important;
    color: #e6edf3 !important;
}

/* Hover */
body.darkProTheme #blockeditor_code-ddl_popup .e-list-item:hover {
    background: #21262d !important;
    color: #ffffff !important;
}

/* Selected */
body.darkProTheme #blockeditor_code-ddl_popup .e-selected,
body.darkProTheme #blockeditor_code-ddl_popup .e-active {
    background: #1f6feb !important;
    color: #ffffff !important;
}

/* Table Headers */
.darkProTheme .e-blockeditor .e-table-element thead th {
    background: #1f6feb !important;
    color: #ffffff !important;
}

/* Active Toolbar */
.darkProTheme .e-blockeditor .e-active,
.darkProTheme .e-blockeditor .e-selected {
    color: #58a6ff !important;
}

/* Links */
.darkProTheme .e-blockeditor a {
    color: #58a6ff !important;
}

index.html

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 - BlockEditor Theme Customization</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-base/styles/tailwind3.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-buttons/styles/tailwind3.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-popups/styles/tailwind3.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-inputs/styles/tailwind3.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-navigations/styles/tailwind3.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-splitbuttons/styles/tailwind3.css" rel="stylesheet"/>
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-dropdowns/styles/tailwind3.css" rel="stylesheet">
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-blockeditor/styles/tailwind3.css" rel="stylesheet" />

    <!--style reference from app-->
    <link href="/src/style.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script> -->
</head>
<body>
    <div id="container">
        <h2>Block Editor - Theme Customization</h2>
        <div class="theme-switcher" aria-label="Theme switcher">
            <button id="slateLightThemeBtn" type="button" aria-pressed="false">Slate Light</button>
            <button id="sageGreenThemeBtn" type="button" aria-pressed="true">Sage Green</button>
            <button id="darkProThemeBtn" type="button" aria-pressed="false">Dark Pro</button>
        </div>
        <div id="blockeditor"></div>
    </div>
    <script type="module" src="/src/main.ts"></script>
</body>
<style>
    #container {
        /* visibility: hidden; */
        margin: 20px auto;
        max-width: 1000px;
        gap: 20px;
        display: flex;
        flex-direction: column;
    }

    #loader {
        color: #008cff;
        height: 40px;
        left: 45%;
        position: absolute;
        top: 45%;
        width: 30%;
    }

    h2 {
        margin: 20px 0 10px 0;
        color: #333;
    }
</style>

</html>

main.ts

import { BlockEditor, ContentType } from '@syncfusion/ej2-blockeditor';

const blockData = [
  {
    blockType: 'Heading',
    properties: { level: 1 },
    content: [
      {
        contentType: ContentType.Text,
        content: 'Block Editor - All Block Types'
      }
    ]
  },
  {
    blockType: 'Paragraph',
    content: [
      {
        contentType: ContentType.Text,
        content: 'This sample shows every block type used once, including a '
      },
      {
        contentType: ContentType.Text,
        content: 'bold',
        properties: { styles: { bold: true } }
      },
      {
        contentType: ContentType.Text,
        content: ' word, a '
      },
      {
        contentType: ContentType.Link,
        content: 'link',
        properties: {
          url: 'https://ej2.syncfusion.com/documentation/block-editor/getting-started'
        }
      },
      {
        contentType: ContentType.Text,
        content: ', a mention '
      },
      {
        contentType: ContentType.Mention,
        properties: { userId: 'user1' }
      },
      {
        contentType: ContentType.Text,
        content: ', and a label '
      },
      {
        contentType: ContentType.Label,
        properties: { labelId: 'progress' }
      },
      {
        contentType: ContentType.Text,
        content: '.'
      }
    ]
  },
  {
    blockType: 'BulletList',
    content: [
      {
        contentType: ContentType.Text,
        content: 'Bullet list item'
      }
    ]
  },
  {
    blockType: 'NumberedList',
    content: [
      {
        contentType: ContentType.Text,
        content: 'Numbered list item'
      }
    ]
  },
  {
    blockType: 'Checklist',
    properties: {
      isChecked: true
    },
    content: [
      {
        contentType: ContentType.Text,
        content: 'Checklist item'
      }
    ]
  },
  {
    blockType: 'Quote',
    properties: {
      children: [
        {
          blockType: 'Paragraph',
          content: [
            {
              contentType: ContentType.Text,
              content: 'Quote block example.'
            }
          ]
        }
      ]
    }
  },
  {
    blockType: 'Code',
    content: [
      {
        contentType: ContentType.Text,
        content: 'function greet(name) {\n  return `Hello, ${name}!`;\n}'
      }
    ]
  },
  {
    blockType: 'CollapsibleParagraph',
    content: [
      {
        contentType: ContentType.Text,
        content: 'Toggle block example',
        properties: { styles: { bold: true } }
      }
    ],
    properties: {
      isExpanded: false,
      children: [
        {
          blockType: 'Paragraph',
          content: [
            {
              contentType: ContentType.Text,
              content: 'Collapsed content goes here.'
            }
          ]
        }
      ]
    }
  },
  {
    blockType: 'Image',
    properties: {
      src: './src/block-editor/images/overview.png',
      alt: 'Block Editor Image'
    }
  },
  {
    blockType: 'Table',
    properties: {
      columns: [
        { headerText: 'Name' },
        { headerText: 'Role' },
        { headerText: 'Status' }
      ],
      rows: [
        {
          cells: [
            {
              blocks: [
                {
                  blockType: 'Paragraph',
                  content: [
                    {
                      contentType: ContentType.Text,
                      content: 'Arun Kumar'
                    }
                  ]
                }
              ]
            },
            {
              blocks: [
                {
                  blockType: 'Paragraph',
                  content: [
                    {
                      contentType: ContentType.Text,
                      content: 'Developer'
                    }
                  ]
                }
              ]
            },
            {
              blocks: [
                {
                  blockType: 'Paragraph',
                  content: [
                    {
                      contentType: ContentType.Text,
                      content: 'Active'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          cells: [
            {
              blocks: [
                {
                  blockType: 'Paragraph',
                  content: [
                    {
                      contentType: ContentType.Text,
                      content: 'Divya Sharma'
                    }
                  ]
                }
              ]
            },
            {
              blocks: [
                {
                  blockType: 'Paragraph',
                  content: [
                    {
                      contentType: ContentType.Text,
                      content: 'Designer'
                    }
                  ]
                }
              ]
            },
            {
              blocks: [
                {
                  blockType: 'Paragraph',
                  content: [
                    {
                      contentType: ContentType.Text,
                      content: 'Active'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    blockType: 'Divider'
  }
];

const blockEditor: BlockEditor = new BlockEditor({
  width: '100%',
  height: '600px',
  blocks: blockData,
  users: [
    {
      avatarUrl: 'https://ej2.syncfusion.com/demos/src/block-editor/images/andrew.png',
      id: 'user1',
      user: 'Andrews',
    },
  ],
});

blockEditor.appendTo('#blockeditor');

// Theme switching functions
function applyTheme(themeName: string): void {
  document.body.classList.remove('slateLightTheme', 'sageGreenTheme', 'darkProTheme');
  document.body.classList.add(themeName);

  const themeButtons = [
    document.getElementById('slateLightThemeBtn') as HTMLElement | null,
    document.getElementById('sageGreenThemeBtn') as HTMLElement | null,
    document.getElementById('darkProThemeBtn') as HTMLElement | null
  ];

  themeButtons.forEach((button) => {
    if (!button) {
      return;
    }

    const isActive =
      (button.id === 'slateLightThemeBtn' && themeName === 'slateLightTheme') ||
      (button.id === 'sageGreenThemeBtn' && themeName === 'sageGreenTheme') ||
      (button.id === 'darkProThemeBtn' && themeName === 'darkProTheme');

    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

// Event listeners for theme buttons
const slateLightBtn = document.getElementById('slateLightThemeBtn') as HTMLElement;
const sageGreenBtn = document.getElementById('sageGreenThemeBtn') as HTMLElement;
const darkProBtn = document.getElementById('darkProThemeBtn') as HTMLElement;

if (slateLightBtn) {
  slateLightBtn.addEventListener('click', () => applyTheme('slateLightTheme'));
}

if (sageGreenBtn) {
  sageGreenBtn.addEventListener('click', () => applyTheme('sageGreenTheme'));
}

if (darkProBtn) {
  darkProBtn.addEventListener('click', () => applyTheme('darkProTheme'));
}

// Initialize with default theme
applyTheme('sageGreenTheme');
