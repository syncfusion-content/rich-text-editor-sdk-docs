import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={{
                items: [
                    'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
                    'BulletList', 'NumberedList', '|',
                    'Link', 'Image', 'Table', '|',
                    'Undo', 'Redo'
                ]
            }}
            placeholder='Type something or insert content to see quick toolbar...'
            quickToolbarSettings={{
                enable: true,
                text: ['Undo', 'Redo', 'Bold', 'Italic', 'Underline', 'Strikethrough', 'FontColor', 'BackgroundColor', 'Formats', 'BulletList', 'NumberedList'],
                image: ['AltText', 'Caption', '|', 'Align', 'Display', 'WrapText', '|', 'Dimension', 'Replace', 'Remove'],
                link: ['Open', 'Copy', 'Edit', 'Remove'],
                table: ['Header', 'Remove', '|', 'Row', 'Column', '|', 'CellBackgroundColor', 'Align', 'VerticalAlign']
            }}
        />
    );
}

export default App;
