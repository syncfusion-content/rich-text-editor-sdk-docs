import * as React from 'react';
import { RichTextEditorUIComponent, Inject, SlashCommand } from '@syncfusion/ej2-react-richtexteditor-ui';

const toolbarSettings = {
    items: [
        'Bold', 'Italic', 'Underline', '|',
        'Formats', 'Alignment', '|',
        'Quote', 'CodeBlock', '|',
        'Undo', 'Redo'
    ]
};

const slashCommandSettings = {
    enable: true,
    items: ['Blockquote']
};

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={toolbarSettings}
            slashCommandSettings={slashCommandSettings}
            placeholder='Quote a passage...'
        >
            <Inject services={[SlashCommand]} />
        </RichTextEditorUIComponent>
    );
}

export default App;
