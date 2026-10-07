import * as React from 'react';
import { RichTextEditorUIComponent, Inject, SlashCommand } from '@syncfusion/ej2-react-richtexteditor-ui';

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={{
                items: [
                    'Bold', 'Italic', 'Underline', '|',
                    'Formats', 'Alignment', '|',
                    'Quote', 'CodeBlock', '|',
                    'Undo', 'Redo'
                ]
            }}
            slashCommandSettings={{
                enable: true,
                items: ['Blockquote']
            }}
            placeholder='Quote a passage...'
        >
        <Inject services={[SlashCommand]} />
        </RichTextEditorUIComponent>
    );
}

export default App;
