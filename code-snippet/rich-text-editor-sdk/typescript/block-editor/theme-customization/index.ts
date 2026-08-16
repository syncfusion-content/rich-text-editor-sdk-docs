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

applyTheme('slateLightTheme');
