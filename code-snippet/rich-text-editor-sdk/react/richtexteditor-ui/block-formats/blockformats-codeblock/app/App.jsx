import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

const toolbarSettings = {
    items: [
        'Bold', 'Italic', 'Underline', '|',
        'Formats', 'Alignment', '|',
        'CodeBlock', 'Quote', 'HorizontalLine', '|',
        'Undo', 'Redo'
    ]
};

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={toolbarSettings}
            placeholder='Insert code snippets...'
        />
    );
}

export default App;
