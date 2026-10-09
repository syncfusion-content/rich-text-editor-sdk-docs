import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

const toolbarSettings = {
    items: ['FontSize']
};

const fontSize = {
    items: [
        { text: 'Default', value: 'Default' },
        { text: '10', value: '10px' },
        { text: '12', value: '12px' },
        { text: '14', value: '14px' },
        { text: '16', value: '16px' },
        { text: '18', value: '18px' },
        { text: '24', value: '24px' },
        { text: '32', value: '32px' }
    ]
};

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={toolbarSettings}
            placeholder='Type something ...'
            fontSize={fontSize}
        />
    );
}

export default App;
