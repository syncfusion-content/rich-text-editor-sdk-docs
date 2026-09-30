import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={{
                items: [
                    'Bold', 'Italic', 'Underline', '|',
                    'BulletList', 'NumberedList', '|',
                    'Link', 'Image', '|',
                    'Undo', 'Redo'
                ]
            }}
            placeholder='Type something...'
            linkSettings={{
                autoPrependProtocol: true,
                defaultProtocol: 'https',
                allowedProtocols: ['http', 'https', 'mailto', 'tel']
            }}
        />
    );
}

export default App;
