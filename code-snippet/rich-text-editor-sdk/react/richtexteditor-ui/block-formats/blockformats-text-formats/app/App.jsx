import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

const toolbarSettings = {
    items: [
        'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
        'Formats', 'Alignment', 'BulletList', 'NumberedList', '|',
        'Quote', 'CodeBlock', 'HorizontalLine', 'Callout', '|',
        'Undo', 'Redo'
    ]
};

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={toolbarSettings}
            placeholder='Type something...'
        />
    );
}

export default App;
