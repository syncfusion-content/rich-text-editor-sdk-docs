import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

const toolbarSettings = {
    items: ['Table']
};

const tableSettings = {
    resize: false
};

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={toolbarSettings}
            tableSettings={tableSettings}
            placeholder='Type something ...'
        />
    );
}

export default App;
