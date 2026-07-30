import { MarkdownEditor, Inject, RichTextEditorComponent, Toolbar, Link, Image, Table } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component {
    rteValue = "The Markdown Editor supports keyboard shortcuts to format text, insert tables, links, and images, and to perform common editing actions such as undo and redo.";
    toolbarSettings = {
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
    render() {
        return (<RichTextEditorComponent editorMode={'Markdown'} value={this.rteValue} toolbarSettings={this.toolbarSettings}>
        <Inject services={[Toolbar, MarkdownEditor, Link, Image, Table]} />
      </RichTextEditorComponent>);
    }
}
export default App;
