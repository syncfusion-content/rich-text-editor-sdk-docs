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
                path: '/Images/',
                resize: true,
                dimension: {
                    minWidth: '50px',
                    maxWidth: '800px',
                    minHeight: '50px',
                    maxHeight: '600px'
                }
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
