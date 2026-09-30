import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

function App() {
    return (
        <RichTextEditorUIComponent
            slashCommandSettings={{
                enable: true,
                items: [
                    'Collapsible Paragraph',
                    'Collapsible Heading 1',
                    'Collapsible Heading 2',
                    'Collapsible Heading 3',
                    'Collapsible Heading 4'
                ]
            }}
            placeholder='Type / for collapsible sections...'
        />
    );
}

export default App;
