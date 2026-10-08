import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

const toolbarSettings = {
    items: [
        'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
        'BulletList', 'NumberedList', '|',
        'Link', 'Image', 'Table', 'CodeBlock', '|',
        'Undo', 'Redo'
    ],
    keyBindings: {
        link: 'ctrl+alt+k',
        image: 'ctrl+alt+i',
        'code-block': 'ctrl+shift+c'
    }
} as any;

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={toolbarSettings}
        />
    );
}

export default App;
