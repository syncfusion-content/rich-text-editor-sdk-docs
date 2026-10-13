import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

const toolbarSettings = {
    items: ['FontName']
};

const fontFamily = {
    items: [
        { text: 'Default', value: 'Default' },
        { text: 'Segoe UI', value: 'Segoe UI, sans-serif' },
        { text: 'Roboto', value: 'Roboto, sans-serif' },
        { text: 'Georgia', value: 'Georgia, serif' },
        { text: 'Courier New', value: 'Courier New, monospace' }
    ]
};

function App() {
    return (
        <RichTextEditorUIComponent
            value='<p>Customize the font family using the FontName dropdown in the toolbar.</p>'
            valueFormat='html'
            placeholder='Type something...'
            toolbarSettings={toolbarSettings}
            fontFamily={fontFamily}
        />
    );
}

export default App;
