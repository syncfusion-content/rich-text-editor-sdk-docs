import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

const toolbarSettings = {
    items: [
        'Undo', 'Redo', '|',
        'Bold', 'Italic', 'Underline', '|',
        'Image', 'Link', 'Table'
    ]
};

const quickToolbarSettings = {
    text: [
        'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
        'ClearFormat', 'Superscript', 'Subscript'
    ],
    image: [
        'AltText', 'Caption', '|',
        'Align', 'Display', 'WrapText', '|',
        'Dimension', 'Replace', 'Remove'
    ],
    link: [
        'Open', 'Edit', 'Remove'
    ]
};

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={toolbarSettings}
            quickToolbarSettings={quickToolbarSettings}
            placeholder='Type something...'
        />
    );
}

export default App;
