import { MarkdownEditor, Inject, RichTextEditorComponent, Toolbar, Link, Image, Table } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
    let rteValue = "The Markdown Editor supports keyboard shortcuts to format text, insert tables, links, and images, and to perform common editing actions such as undo and redo.";
    const toolbarSettings = {
      items: [
        'Bold',
        'Italic',
        'StrikeThrough',
        '|',
        'Formats',
        'OrderedList',
        'UnorderedList',
        'CreateLink',
        'Image',
        'CreateTable',
        '|',
        'Undo',
        'Redo',
      ],
    };
    return (<RichTextEditorComponent value={rteValue} editorMode={'Markdown'} toolbarSettings={toolbarSettings}>
      <Inject services={[Toolbar, MarkdownEditor, Link, Image, Table]}/>
    </RichTextEditorComponent>);
}
export default App;
