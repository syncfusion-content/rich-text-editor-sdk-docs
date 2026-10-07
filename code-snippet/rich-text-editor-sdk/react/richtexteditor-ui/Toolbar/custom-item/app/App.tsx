import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

function App() {
    const editorRef = React.useRef<RichTextEditorUIComponent>(null);

    const handleItemClicked = (args: any) => {
        if (args.item) {
            const editor = editorRef.current;
            if (editor && args.item.id === 'WordCount') {
                const words: number = (editor as any).getText().trim().split(/\s+/).filter(Boolean).length;
                alert('Word count: ' + words);
            }
        }
    };

    return (
        <RichTextEditorUIComponent
            ref={editorRef}
            toolbarSettings={{
                items: [
                    'Bold', 'Italic', 'Underline', '|',
                    {
                        id: 'WordCount',
                        actionId: 'wordCount',
                        prefixIcon: 'e-icons e-numbering-list',
                        tooltipText: 'Word count',
                        align: 'Left'
                    } as any,
                    '|', 'Undo', 'Redo'
                ],
                itemClicked: handleItemClicked
            }}
        />
    );
}

export default App;
