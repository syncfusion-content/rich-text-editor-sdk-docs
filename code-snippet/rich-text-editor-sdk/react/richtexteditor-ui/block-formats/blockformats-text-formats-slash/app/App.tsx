import * as React from 'react';
import { RichTextEditorUIComponent, Inject, SlashCommand } from '@syncfusion/ej2-react-richtexteditor-ui';

const toolbarSettings = {
    items: ['Formats', 'Alignment', 'Quote', 'CodeBlock', 'HorizontalLine', 'Callout']
};

const slashCommandSettings = {
    enable: true,
    items: [
        'Paragraph',
        'Heading 1', 'Heading 2', 'Heading 3', 'Heading 4',
        'Blockquote',
        'Info', 'Success', 'Warning', 'Error', 'Note',
        'Collapsible Paragraph',
        'Collapsible Heading 1', 'Collapsible Heading 2',
        'Collapsible Heading 3', 'Collapsible Heading 4'
    ]
};

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={toolbarSettings}
            slashCommandSettings={slashCommandSettings}
            placeholder='Type something...'
        >
            <Inject services={[SlashCommand]} />
        </RichTextEditorUIComponent>
    );
}

export default App;
