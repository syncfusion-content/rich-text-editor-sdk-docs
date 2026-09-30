import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

function App() {
    const editorRef = React.useRef(null);

    const handleBold = () => {
        editorRef.current.commands().bold().apply();
    };

    const handleItalic = () => {
        editorRef.current.commands().italic().apply();
    };

    const handleUnderline = () => {
        editorRef.current.commands().underline().apply();
    };

    const handleFontColor = () => {
        editorRef.current.commands().fontColor('#00A3FF').apply();
    };

    return (
        <div>
            <div className="custom-toolbar">
                <button onClick={handleBold}>Bold</button>
                <button onClick={handleItalic}>Italic</button>
                <button onClick={handleUnderline}>Underline</button>
                <button onClick={handleFontColor}>Color</button>
            </div>
            <RichTextEditorUIComponent
                ref={editorRef}
                toolbarSettings={{
                    enable: false
                }}
                placeholder='Use custom ribbon toolbar above...'
            />
        </div>
    );
}

export default App;
