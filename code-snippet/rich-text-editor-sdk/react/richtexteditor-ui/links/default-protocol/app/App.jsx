import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

const toolbarSettings = {
    items: [
        'Bold', 'Italic', 'Underline', '|',
        'BulletList', 'NumberedList', '|',
        'Link', 'Image', '|',
        'Undo', 'Redo'
    ]
};

const linkSettings = {
    autoPrependProtocol: true,
    defaultProtocol: 'https',
    allowedProtocols: ['http', 'https', 'mailto', 'tel']
};

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={toolbarSettings}
            placeholder='Type something...'
            linkSettings={linkSettings}
        />
    );
}

export default App;
