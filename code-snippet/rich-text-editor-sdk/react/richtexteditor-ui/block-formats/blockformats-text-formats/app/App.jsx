import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={{
                items: [
                    'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
                    'Formats', 'Alignment', 'BulletList', 'NumberedList', '|',
                    'Quote', 'CodeBlock', 'HorizontalLine', 'Callout', '|',
                    'Undo', 'Redo'
                ]
            }}
            placeholder='Type something...'
        />
    );
}

export default App;
