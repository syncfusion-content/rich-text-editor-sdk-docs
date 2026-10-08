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
    defaultProtocol: 'https',
    allowedProtocols: ['http', 'https', 'mailto', 'tel'],
    linkTarget: true
};

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={toolbarSettings}
            linkSettings={linkSettings}
            placeholder='Type something...'
        />
    );
}

export default App;
