import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={{
                items: ['FontName']
            }}
            placeholder='Type something ...'
            fontFamily={{
                items: [
                    { text: 'Default', value: 'Default' },
                    { text: 'Segoe UI', value: 'Segoe UI, sans-serif' },
                    { text: 'Roboto', value: 'Roboto, sans-serif' },
                    { text: 'Georgia', value: 'Georgia, serif' },
                    { text: 'Courier New', value: 'Courier New, monospace' }
                ]
            }}
        />
    );
}

export default App;
