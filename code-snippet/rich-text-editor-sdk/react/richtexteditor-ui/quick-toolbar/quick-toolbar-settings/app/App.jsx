import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

const toolbarSettings = {
    items: [
        'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
        'BulletList', 'NumberedList', '|',
        'Link', 'Image', 'Table', '|',
        'Undo', 'Redo'
    ]
};

const quickToolbarSettings = {
    enable: true,
    text: ['Undo', 'Redo', 'Bold', 'Italic', 'Underline', 'Strikethrough', 'FontColor', 'BackgroundColor', 'Formats', 'BulletList', 'NumberedList'],
    image: ['AltText', 'Caption', '|', 'Align', 'Display', 'WrapText', '|', 'Dimension', 'Replace', 'Remove'],
    link: ['Open', 'Copy', 'Edit', 'Remove'],
    table: ['Header', 'Remove', '|', 'Row', 'Column', '|', 'CellBackgroundColor', 'Align', 'VerticalAlign']
};

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={toolbarSettings}
            placeholder='Type something or insert content to see quick toolbar...'
            quickToolbarSettings={quickToolbarSettings}
        />
    );
}

export default App;
