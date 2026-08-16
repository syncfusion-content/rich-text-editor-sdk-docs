import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState } from 'react';
import { BlockEditorComponent, ContentType } from '@syncfusion/ej2-react-blockeditor';

const blockData = [
  {
    blockType: 'Heading',
    properties: { level: 1 },
    content: [{ contentType: ContentType.Text, content: 'Block Editor - All Block Types' }]
  },
  {
    blockType: 'Paragraph',
    content: [
      { contentType: ContentType.Text, content: 'This sample shows every block type used once, including a ' },
      { contentType: ContentType.Text, content: 'bold', properties: { styles: { bold: true } } },
      { contentType: ContentType.Text, content: ' word, a ' },
      {
        contentType: ContentType.Link,
        content: 'link',
        properties: { url: 'https://ej2.syncfusion.com/documentation/block-editor/getting-started' }
      },
      { contentType: ContentType.Text, content: ', a mention ' },
      { contentType: ContentType.Mention, properties: { userId: 'user1' } },
      { contentType: ContentType.Text, content: ', and a label ' },
      { contentType: ContentType.Label, properties: { labelId: 'progress' } },
      { contentType: ContentType.Text, content: '.' }
    ]
  },
  {
    blockType: 'BulletList',
    content: [{ contentType: ContentType.Text, content: 'Bullet list item' }]
  },
  {
    blockType: 'NumberedList',
    content: [{ contentType: ContentType.Text, content: 'Numbered list item' }]
  },
  {
    blockType: 'Checklist',
    properties: { isChecked: true },
    content: [{ contentType: ContentType.Text, content: 'Checklist item' }]
  },
  {
    blockType: 'Quote',
    properties: {
      children: [
        {
          blockType: 'Paragraph',
          content: [{ contentType: ContentType.Text, content: 'Quote block example.' }]
        }
      ]
    }
  },
  {
    blockType: 'Callout',
    properties: {
      children: [
        {
          blockType: 'Paragraph',
          content: [
            { contentType: ContentType.Text, content: 'Tip: ', properties: { styles: { bold: true } } },
            { contentType: ContentType.Text, content: 'Callout block example.' }
          ]
        }
      ]
    }
  },
  {
    blockType: 'Code',
    content: [{ contentType: ContentType.Text, content: 'function greet(name) {\n  return `Hello, ${name}!`;\n}' }]
  },
  {
    blockType: 'CollapsibleParagraph',
    content: [{ contentType: ContentType.Text, content: 'Toggle block example', properties: { styles: { bold: true } } }],
    properties: {
      isExpanded: false,
      children: [
        {
          blockType: 'Paragraph',
          content: [{ contentType: ContentType.Text, content: 'Collapsed content goes here.' }]
        }
      ]
    }
  },
  {
    blockType: 'Table',
    properties: {
      columns: [{ headerText: 'Name' }, { headerText: 'Role' }, { headerText: 'Status' }],
      rows: [
        {
          cells: [
            { blocks: [{ blockType: 'Paragraph', content: [{ contentType: ContentType.Text, content: 'Arun Kumar' }] }] },
            { blocks: [{ blockType: 'Paragraph', content: [{ contentType: ContentType.Text, content: 'Developer' }] }] },
            { blocks: [{ blockType: 'Paragraph', content: [{ contentType: ContentType.Text, content: 'Active' }] }] }
          ]
        },
        {
          cells: [
            { blocks: [{ blockType: 'Paragraph', content: [{ contentType: ContentType.Text, content: 'Divya Sharma' }] }] },
            { blocks: [{ blockType: 'Paragraph', content: [{ contentType: ContentType.Text, content: 'Designer' }] }] },
            { blocks: [{ blockType: 'Paragraph', content: [{ contentType: ContentType.Text, content: 'Active' }] }] }
          ]
        }
      ]
    }
  },
  { blockType: 'Divider' }
];

const users = [{ id: 'user1', user: 'Andrews', avatarUrl: 'https://ej2.syncfusion.com/demos/src/block-editor/images/andrew.png' }];

function App() {
  const [theme, setTheme] = useState('slateLightTheme');

  return (
    <div className={theme}>
      <div className="container">
        <h2>Block Editor - Theme Customization</h2>

        <div className="theme-switcher">
          <button onClick={() => setTheme('slateLightTheme')}>Rose Theme</button>
          <button onClick={() => setTheme('sageGreenTheme')}>Azure Theme</button>
          <button onClick={() => setTheme('darkProTheme')}>Dark Teal Theme</button>
        </div>

        <BlockEditorComponent
          id="block-editor"
          width="100%"
          height="600px"
          blocks={blockData}
          users={users}
        />
      </div>
    </div>
  );
}
export default App;

ReactDOM.render(<App />, document.getElementById('container'));
