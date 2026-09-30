import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={{
                items: [
                    'Bold', 'Italic', 'Underline', '|',
                    'Formats', 'Alignment', '|',
                    'CodeBlock', 'Quote', 'HorizontalLine', '|',
                    'Undo', 'Redo'
                ]
            }}
            placeholder='Insert code snippets...'
        />
    );
}

export default App;
