import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

const toolbarSettings = {
    items: [
        'Undo', 'Redo', '|',
        'Bold', 'Italic', 'Underline', '|',
        'Image', 'Link', 'Table'
    ]
};

const imageSettings = {
    saveUrl: 'https://services.syncfusion.com/react/uploader/Save',
    path: '/Images/',
    resize: true,
    dimension: {
        minWidth: '50px',
        maxWidth: '800px',
        minHeight: '50px',
        maxHeight: '600px'
    }
};

const quickToolbarSettings = {
    image: [
        'AltText', 'Caption', '|',
        'Align', 'Display', 'WrapText', '|',
        'Dimension', 'Replace', 'Remove'
    ]
};

function App() {
    return (
        <RichTextEditorUIComponent
            value='<p>The image in this example can be resized using the quick toolbar.</p>'
            valueFormat='html'
            placeholder='Type something...'
            toolbarSettings={toolbarSettings}
            imageSettings={imageSettings}
            quickToolbarSettings={quickToolbarSettings}
        />
    );
}

export default App;
