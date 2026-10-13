import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

function App() {
    const handleItemClicked = (args) => {
        console.log('Toolbar item clicked:', args);
    };

    const handleToolbarStatusUpdated = (args) => {
        console.log('Toolbar status updated:', args);
    };

    const toolbarSettings = {
        items: [
            'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
            'Formats', 'Alignment', 'BulletList', 'NumberedList', '|',
            'Link', 'Image', 'Table', '|',
            'Undo', 'Redo'
        ],
        type: 'MultiRow',
        position: 'Top',
        enableFloating: true,
        floatingOffset: 0,
        itemClicked: handleItemClicked,
        updatedToolbarStatus: handleToolbarStatusUpdated
    };

    return (
        <RichTextEditorUIComponent
            toolbarSettings={toolbarSettings}
        />
    );
}

export default App;
