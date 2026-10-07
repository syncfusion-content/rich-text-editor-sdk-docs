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
                defaultProtocol: 'https',
                allowedProtocols: ['http', 'https', 'mailto', 'tel'],
                linkTarget: true
            }}
            placeholder='Type something...'
        />
    );
}

Export default App;
