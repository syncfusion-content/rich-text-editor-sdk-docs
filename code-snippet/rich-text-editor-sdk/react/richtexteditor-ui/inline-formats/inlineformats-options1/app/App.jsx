import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

const toolbarSettings = {
    items: [
        'Bold', 'Italic', 'Underline', 'Strikethrough', 'Subscript', 'Superscript', 'LowerCase', 'UpperCase', '|',
        'InlineCode', '|',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
        'ClearFormat'
    ]
};

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={toolbarSettings}
            placeholder='Type something ...'
        />
    );
}

export default App;
