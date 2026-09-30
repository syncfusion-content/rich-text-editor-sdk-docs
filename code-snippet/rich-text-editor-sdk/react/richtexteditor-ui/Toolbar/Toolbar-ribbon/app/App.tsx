import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

function App() {
    const editorRef = React.useRef<RichTextEditorUIComponent>(null);

    const handleBold = () => {
        (editorRef.current as any).commands().bold().apply();
    };

    const handleItalic = () => {
        (editorRef.current as any).commands().italic().apply();
    };

    const handleUnderline = () => {
        (editorRef.current as any).commands().underline().apply();
    };

    const handleFontColor = () => {
        (editorRef.current as any).commands().fontColor('#00A3FF').apply();
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
