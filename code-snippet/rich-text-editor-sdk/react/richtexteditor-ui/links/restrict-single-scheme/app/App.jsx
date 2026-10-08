import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

const toolbarSettings = {
    items: [
        'Undo', 'Redo', '|',
        'Bold', 'Italic', 'Underline', '|',
        'Link', 'Image', 'Table'
    ]
};

const linkSettings = {
    autoPrependProtocol: true,
    allowedProtocols: ['https']
};

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={toolbarSettings}
            linkSettings={linkSettings}
            placeholder='Only HTTPS links allowed...'
        />
    );
}

export default App;
