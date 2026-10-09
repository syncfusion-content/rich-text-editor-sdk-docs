import * as React from 'react';
import { RichTextEditorUIComponent, Inject, SlashCommand } from '@syncfusion/ej2-react-richtexteditor-ui';

const slashCommandSettings = {
    enable: true,
    items: [
        'Collapsible Paragraph',
        'Collapsible Heading 1',
        'Collapsible Heading 2',
        'Collapsible Heading 3',
        'Collapsible Heading 4'
    ]
};

function App() {
    return (
        <RichTextEditorUIComponent
            slashCommandSettings={slashCommandSettings}
            placeholder='Type / for collapsible sections...'
        >
            <Inject services={[SlashCommand]} />
        </RichTextEditorUIComponent>
    );
}

export default App;
