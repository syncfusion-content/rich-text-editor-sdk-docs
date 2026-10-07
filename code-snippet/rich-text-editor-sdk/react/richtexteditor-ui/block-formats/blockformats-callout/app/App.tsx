import * as React from 'react';
import { RichTextEditorUIComponent, Inject, SlashCommand } from '@syncfusion/ej2-react-richtexteditor-ui';

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={{
                items: [
                    'Bold', 'Italic', 'Underline', '|',
                    'Callout',
                    '|',
                    'Undo', 'Redo'
                ]
            }}
            slashCommandSettings={{
                enable: true,
                items: [
                    'Info', 'Success', 'Warning', 'Error', 'Note'
                ]
            }}
            placeholder='Type / for slash commands...'
        >
        <Inject services={[SlashCommand]} />
        </RichTextEditorUIComponent>
    );
}

export default App;
