import * as React from 'react';
import { RichTextEditorUIComponent, Inject, SlashCommand } from '@syncfusion/ej2-react-richtexteditor-ui';

const toolbarSettings = {
    items: [
        'Bold', 'Italic', 'Underline', '|',
        'Callout',
        '|',
        'Undo', 'Redo'
    ]
};

const slashCommandSettings = {
    enable: true,
    items: [
        'Info', 'Success', 'Warning', 'Error', 'Note'
    ]
};

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={toolbarSettings}
            slashCommandSettings={slashCommandSettings}
            placeholder='Type / for slash commands...'
        >
            <Inject services={[SlashCommand]} />
        </RichTextEditorUIComponent>
    );
}

export default App;
