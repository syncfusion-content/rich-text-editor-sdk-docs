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
    path: '/Images/'
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
            toolbarSettings={toolbarSettings}
            imageSettings={imageSettings}
            quickToolbarSettings={quickToolbarSettings}
            placeholder='Type something...'
        />
    );
}

export default App;
