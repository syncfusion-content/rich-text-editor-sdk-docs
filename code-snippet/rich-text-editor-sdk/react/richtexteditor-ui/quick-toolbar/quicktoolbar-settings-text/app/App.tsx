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
                    'ClearFormat'
                ]
            }}
            placeholder='Select text to see quick toolbar...'
        />
    );
}

Export default App;
