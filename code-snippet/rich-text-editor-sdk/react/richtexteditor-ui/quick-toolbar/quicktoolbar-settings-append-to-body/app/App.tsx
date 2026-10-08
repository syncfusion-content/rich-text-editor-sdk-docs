import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

const toolbarSettings = {
    items: [
        'Undo', 'Redo', '|',
        'Bold', 'Italic', 'Underline', '|',
        'Image', 'Link', 'Table'
    ]
};

const quickToolbarSettings = {
    enable: true,
    appendTo: 'body'
};

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={toolbarSettings}
            quickToolbarSettings={quickToolbarSettings}
            placeholder='Type something...'
        />
    );
}

export default App;
