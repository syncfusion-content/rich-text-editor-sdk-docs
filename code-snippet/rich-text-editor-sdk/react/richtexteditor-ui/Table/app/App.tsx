import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={{
                items: ['Table']
            }}
            tableSettings={{
                resize: false
            }}
            placeholder='Type something ...'
        />
    );
}

export default App;
