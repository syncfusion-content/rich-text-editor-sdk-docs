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
            quickToolbarSettings={{
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
            }}
            placeholder='Type something...'
        />
    );
}

Export default App;
