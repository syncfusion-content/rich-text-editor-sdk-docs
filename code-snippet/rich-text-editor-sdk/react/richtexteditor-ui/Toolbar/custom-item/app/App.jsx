import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

const wordCountItem = {
    id: 'WordCount',
    actionId: 'wordCount',
    prefixIcon: 'e-icons e-numbering-list',
    tooltipText: 'Word count',
    align: 'Left'
};

function App() {
    const editorRef = React.useRef(null);

    const handleItemClicked = (args) => {
        if (args.item) {
            const editor = editorRef.current;
            if (editor && args.item.id === 'WordCount') {
                const words = editor.getText().trim().split(/\s+/).filter(Boolean).length;
                alert('Word count: ' + words);
            }
        }
    };

    const toolbarSettings = {
        items: [
            'Bold', 'Italic', 'Underline', '|',
            wordCountItem,
            '|', 'Undo', 'Redo'
        ],
        itemClicked: handleItemClicked
    };

    return (
        <RichTextEditorUIComponent
            ref={editorRef}
            toolbarSettings={toolbarSettings}
        />
    );
}

export default App;
