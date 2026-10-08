import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

const hostUrl: string = 'https://services.syncfusion.com/js/production/';

const toolbarSettings = {
    items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignment', '|', 'Link', 'Image', 'Table', '|', 'Undo', 'Redo']
};

const imageSettings = {
    allowedTypes: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'],
    maxFileSize: 30000000,
    uploadUrl: hostUrl + 'api/RichTextEditor/SaveFile',
    imageUrl: hostUrl + 'RichTextEditor/'
};

function App() {
    return (
        <RichTextEditorUIComponent
            value='<p>Getting started with the Rich Text Editor UI.</p>'
            valueFormat='html'
            placeholder='Type something.'
            toolbarSettings={toolbarSettings}
            imageSettings={imageSettings}
        />
    );
}

export default App;
