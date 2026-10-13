import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

const toolbarSettings = {
    items: [
        'Bold', 'Italic', 'Underline', 'Strikethrough',
        '|',
        'FontSize', 'FontName', 'FontColor', 'BackgroundColor',
        '|',
        'InlineCode', 'ClearFormat'
    ]
};

function App() {
    const editorRef = React.useRef<RichTextEditorUIComponent>(null);

    React.useEffect(() => {
        const editor = editorRef.current;
        if (!editor) return;

        const boldBtn = document.getElementById('boldBtn');
        const underlineBtn = document.getElementById('underlineBtn');
        const fontSizeBtn = document.getElementById('fontSizeBtn');
        const fontColorBtn = document.getElementById('fontColorBtn');
        const highlightBtn = document.getElementById('highlightBtn');
        const clearFormatBtn = document.getElementById('clearFormatBtn');

        const handleBold = () => {
            (editor as any).commands().bold().apply();
        };

        const handleUnderline = () => {
            (editor as any).commands().underline().apply();
        };

        const handleFontSize = () => {
            (editor as any).commands().fontSize().size('18px').apply();
        };

        const handleFontColor = () => {
            (editor as any).commands().fontColor().color('#00A3FF').apply();
        };

        const handleHighlight = () => {
            (editor as any).commands().backgroundColor().color('#FFF7C7').apply();
        };

        const handleClearFormat = () => {
            (editor as any).commands().clearFormat().apply();
        };

        boldBtn?.addEventListener('click', handleBold);
        underlineBtn?.addEventListener('click', handleUnderline);
        fontSizeBtn?.addEventListener('click', handleFontSize);
        fontColorBtn?.addEventListener('click', handleFontColor);
        highlightBtn?.addEventListener('click', handleHighlight);
        clearFormatBtn?.addEventListener('click', handleClearFormat);

        return () => {
            boldBtn?.removeEventListener('click', handleBold);
            underlineBtn?.removeEventListener('click', handleUnderline);
            fontSizeBtn?.removeEventListener('click', handleFontSize);
            fontColorBtn?.removeEventListener('click', handleFontColor);
            highlightBtn?.removeEventListener('click', handleHighlight);
            clearFormatBtn?.removeEventListener('click', handleClearFormat);
        };
    }, []);

    return (
        <RichTextEditorUIComponent
            ref={editorRef}
            toolbarSettings={toolbarSettings}
            placeholder='Type something ...'
        />
    );
}

export default App;
