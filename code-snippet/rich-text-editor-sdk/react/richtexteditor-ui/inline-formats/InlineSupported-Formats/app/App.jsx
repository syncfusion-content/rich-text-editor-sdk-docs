import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

const toolbarSettings = {
    items: [
        'FontColor', 'BackgroundColor'
    ]
};

const fontColor = {
    default: '#DC2626',
    mode: 'Palette',
    columns: 5,
    modeSwitcher: true
};

const backgroundColor = {
    default: '#FFF7C7',
    mode: 'Picker',
    columns: 5,
    modeSwitcher: false
};

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={toolbarSettings}
            placeholder='Type something ...'
            fontColor={fontColor}
            backgroundColor={backgroundColor}
        />
    );
}

export default App;
