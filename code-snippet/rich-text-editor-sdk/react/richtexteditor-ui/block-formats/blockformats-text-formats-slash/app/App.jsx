import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

function App() {
    return (
        <RichTextEditorUIComponent
            toolbarSettings={{
                items: ['Formats', 'Alignment', 'Quote', 'CodeBlock', 'HorizontalLine', 'Callout']
            }}
            slashCommandSettings={{
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
            }}
        />
    );
}

export default App;
