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
    text: [
        'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
        'ClearFormat'
    ]
};

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={toolbarSettings}
            quickToolbarSettings={quickToolbarSettings}
            placeholder='Select text to see quick toolbar...'
        />
    );
}

export default App;
