import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={{
                items: [
                    'Bold', 'Italic', 'Underline', 'Strikethrough', 'Subscript', 'Superscript', 'LowerCase', 'UpperCase', '|',
                    'InlineCode', '|',
                    'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
                    'ClearFormat'
                ]
            }}
            placeholder='Type something ...'
        />
    );
}

export default App;
