import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

function App() {
    const editorRef = React.useRef<RichTextEditorUIComponent>(null);

    const handleUpload = () => {
        if (editorRef.current) {
            (editorRef.current as any).commands().upload().apply();
        }
    };

    return (
        <div>
            <div className="upload-controls">
                <button onClick={handleUpload}>Upload Images</button>
            </div>

            <RichTextEditorUIComponent
                ref={editorRef}
                toolbarSettings={{
                    items: [
                        'Undo', 'Redo', '|',
                        'Bold', 'Italic', 'Underline', '|',
                        'Image', 'Link', 'Table'
                    ]
                }}
                imageSettings={{
                    saveUrl: 'https://services.syncfusion.com/react/uploader/Save',
                    removeUrl: 'https://services.syncfusion.com/react/uploader/Remove',
                    path: '/Images/',
                    asyncSettings: {
                        saveUrl: 'https://services.syncfusion.com/react/uploader/Save',
                        removeUrl: 'https://services.syncfusion.com/react/uploader/Remove',
                        autoUpload: false
                    }
                }}
                quickToolbarSettings={{
                    image: [
                        'AltText', 'Caption', '|', 
                        'Align', 'Display', 'WrapText', '|', 
                        'Dimension', 'Replace', 'Remove'
                    ]
                }}
                placeholder='Type something...'
            />
        </div>
    );
}

export default App;
