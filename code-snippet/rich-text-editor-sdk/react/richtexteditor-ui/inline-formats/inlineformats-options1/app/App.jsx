import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={{
                items: ['FontColor', 'BackgroundColor']
            }}
            fontColor={{
                default: '#DC2626',
                mode: 'Palette',
                columns: 5,
                modeSwitcher: true
            }}
            backgroundColor={{
                default: '#FFF7C7',
                mode: 'Picker',
                columns: 5,
                modeSwitcher: false
            }}
        />
    );
}

export default App;
