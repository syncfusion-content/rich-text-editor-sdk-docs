var blockData = [
  {
    blockType: 'Heading',
    properties: { level: 1 },
    content: [
      {
        contentType: ej.blockeditor.ContentType.Text,
        content: 'Block Editor - All Block Types'
      }
    ]
  },
  {
    blockType: 'Paragraph',
    content: [
      {
        contentType: ej.blockeditor.ContentType.Text,
        content: 'This sample shows every block type used once, including a '
      },
      {
        contentType: ej.blockeditor.ContentType.Text,
        content: 'bold',
        properties: { styles: { bold: true } }
      },
      {
        contentType: ej.blockeditor.ContentType.Text,
        content: ' word, a '
      },
      {
        contentType: ej.blockeditor.ContentType.Link,
        content: 'link',
        properties: {
          url: 'https://ej2.syncfusion.com/documentation/block-editor/getting-started'
        }
      },
      {
        contentType: ej.blockeditor.ContentType.Text,
        content: ', a mention '
      },
      {
        contentType: ej.blockeditor.ContentType.Mention,
        properties: { userId: 'user1' }
      },
      {
        contentType: ej.blockeditor.ContentType.Text,
        content: ', and a label '
      },
      {
        contentType: ej.blockeditor.ContentType.Label,
        properties: { labelId: 'progress' }
      },
      {
        contentType: ej.blockeditor.ContentType.Text,
        content: '.'
      }
    ]
  },
  {
    blockType: 'BulletList',
    content: [
      {
        contentType: ej.blockeditor.ContentType.Text,
        content: 'Bullet list item'
      }
    ]
  },
  {
    blockType: 'NumberedList',
    content: [
      {
        contentType: ej.blockeditor.ContentType.Text,
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
        contentType: ej.blockeditor.ContentType.Text,
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
              contentType: ej.blockeditor.ContentType.Text,
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
        contentType: ej.blockeditor.ContentType.Text,
        content: 'function greet(name) {\n  return `Hello, ${name}!`;\n}'
      }
    ]
  },
  {
    blockType: 'CollapsibleParagraph',
    content: [
      {
        contentType: ej.blockeditor.ContentType.Text,
        content: 'Toggle block example',
        properties: {
          styles: { bold: true }
        }
      }
    ],
    properties: {
      isExpanded: false,
      children: [
        {
          blockType: 'Paragraph',
          content: [
            {
              contentType: ej.blockeditor.ContentType.Text,
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
                      contentType: ej.blockeditor.ContentType.Text,
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
                      contentType: ej.blockeditor.ContentType.Text,
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
                      contentType: ej.blockeditor.ContentType.Text,
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
                      contentType: ej.blockeditor.ContentType.Text,
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
                      contentType: ej.blockeditor.ContentType.Text,
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
                      contentType: ej.blockeditor.ContentType.Text,
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

var blockEditor = new ej.blockeditor.BlockEditor({
  width: '100%',
  height: '600px',
  blocks: blockData,
  users: [
    {
      avatarUrl:
        'https://ej2.syncfusion.com/demos/src/block-editor/images/andrew.png',
      id: 'user1',
      user: 'Andrews'
    }
  ]
});

blockEditor.appendTo('#blockeditor');

// Theme switching functions
function applyTheme(themeName) {
  document.body.classList.remove(
    'slateLightTheme',
    'sageGreenTheme',
    'darkProTheme'
  );

  document.body.classList.add(themeName);

  var themeButtons = [
    document.getElementById('slateLightThemeBtn'),
    document.getElementById('sageGreenThemeBtn'),
    document.getElementById('darkProThemeBtn')
  ];

  themeButtons.forEach(function (button) {
    if (!button) {
      return;
    }

    var isActive =
      (button.id === 'slateLightThemeBtn' &&
        themeName === 'slateLightTheme') ||
      (button.id === 'sageGreenThemeBtn' &&
        themeName === 'sageGreenTheme') ||
      (button.id === 'darkProThemeBtn' &&
        themeName === 'darkProTheme');

    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

// Event listeners for theme buttons
var slateLightBtn = document.getElementById('slateLightThemeBtn');
var sageGreenBtn = document.getElementById('sageGreenThemeBtn');
var darkProBtn = document.getElementById('darkProThemeBtn');

if (slateLightBtn) {
  slateLightBtn.addEventListener('click', function () {
    applyTheme('slateLightTheme');
  });
}

if (sageGreenBtn) {
  sageGreenBtn.addEventListener('click', function () {
    applyTheme('sageGreenTheme');
  });
}

if (darkProBtn) {
  darkProBtn.addEventListener('click', function () {
    applyTheme('darkProTheme');
  });
}

// Initialize with default theme
applyTheme('slateLightTheme');