import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

const hostUrl: string = 'https://services.syncfusion.com/js/production/';

function App() {
    return (
        <RichTextEditorUIComponent
            value='<p>Getting started with the Rich Text Editor UI.</p>'
            valueFormat='html'
            placeholder='Type something.'
            toolbarSettings={{
                items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignment', '|', 'Link', 'Image', 'Table', '|', 'Undo', 'Redo']
            }}
            imageSettings={{
                allowedTypes: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'],
                maxFileSize: 30000000,
                uploadUrl: hostUrl + 'api/RichTextEditor/SaveFile',
                imageUrl: hostUrl + 'RichTextEditor/'
            }}
        />
    );
}

export default App;
