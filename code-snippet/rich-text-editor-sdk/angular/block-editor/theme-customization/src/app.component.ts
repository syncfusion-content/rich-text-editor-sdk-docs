import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockEditorModule, ContentType } from '@syncfusion/ej2-angular-blockeditor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BlockEditorModule],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./styles.css']
})
export class AppComponent implements OnInit {
  public currentTheme = 'slateLightTheme';
  public availableThemes = [
    { name: 'Slate Light', value: 'slateLightTheme' },
    { name: 'Sage Green', value: 'sageGreenTheme' },
    { name: 'Dark Pro', value: 'darkProTheme' }
  ];

  public users = [
    {
      avatarUrl: 'https://ej2.syncfusion.com/demos/src/block-editor/images/andrew.png',
      id: 'user1',
      user: 'Andrews'
    }
  ];

  public blockData = [
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

  ngOnInit(): void {
    this.applyTheme(this.currentTheme);
  }

  /**
   * Apply theme by adding/removing theme class from body element
   * Uses CSS custom properties defined in styles.css
   */
  applyTheme(themeName: string): void {
    // Remove all theme classes
    document.body.classList.remove(
      'slateLightTheme',
      'sageGreenTheme',
      'darkProTheme'
    );

    // Add selected theme class
    document.body.classList.add(themeName);

    // Update current theme
    this.currentTheme = themeName;
  }
}
