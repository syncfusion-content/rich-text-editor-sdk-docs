import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

const toolbarSettings = {
    items: ['FontColor', 'BackgroundColor']
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
