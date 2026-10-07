import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={{
                items: [
                    'Undo', 'Redo', '|',
                    'Bold', 'Italic', 'Underline', '|',
                    'Link', 'Image', 'Table'
                ]
            }}
            linkSettings={{
                autoPrependProtocol: true,
                linkTarget: true
            }}
            placeholder='Paste a URL to auto-link it...'
        />
    );
}

export default App;
