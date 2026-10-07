import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={{
                items: [
                    'Undo', 'Redo', '|',
                    'Bold', 'Italic', 'Underline', '|',
                    'Image', 'Link', 'Table'
                ]
            }}
            imageSettings={{
                saveUrl: 'https://services.syncfusion.com/react/uploader/Save',
                path: '/Images/'
            }}
            quickToolbarSettings={{
                image: [
                    'AltText', 'Caption', '|', 
                    'Align', 'Display', 'WrapText', '|', 
                    'Dimension', 'Replace', 'Remove'
                ]
            }}
            placeholder='Type something...'
        />
    );
}

export default App;
