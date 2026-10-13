import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

function App() {
    const editorRef = React.useRef(null);
    const [toolbarType, setToolbarType] = React.useState('Expanded');
    const [position, setPosition] = React.useState('Top');
    const [floating, setFloating] = React.useState(true);

    const handleTypeChange = (e) => {
        setToolbarType(e.target.value);
        if (editorRef.current) {
            editorRef.current.toolbarSettings.type = e.target.value;
            editorRef.current.refresh();
        }
    };

    const handlePositionChange = (e) => {
        setPosition(e.target.value);
        if (editorRef.current) {
            editorRef.current.toolbarSettings.position = e.target.value;
            editorRef.current.refresh();
        }
    };

    const handleFloatingChange = (e) => {
        setFloating(e.target.checked);
        if (editorRef.current) {
            editorRef.current.toolbarSettings.enableFloating = e.target.checked;
            editorRef.current.refresh();
        }
    };

    const toolbarSettings = {
        items: [
            'Undo', 'Redo', '|',
            'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
            'Formats', 'Alignments', '|',
            'BulletList', 'NumberedList', '|',
            'Link', 'Image', 'Table', '|',
            'Subscript', 'Superscript', 'ClearFormat'
        ],
        type: toolbarType,
        position: position,
        enableFloating: floating
    };

    return (
        <div>
            <div className="toolbar-config">
                <label>Toolbar Type:</label>
                <select value={toolbarType} onChange={handleTypeChange}>
                    <option>Expanded</option>
                    <option>MultiRow</option>
                    <option>Scrollable</option>
                </select>

                <label>Position:</label>
                <select value={position} onChange={handlePositionChange}>
                    <option>Top</option>
                    <option>Bottom</option>
                </select>

                <label>
                    <input
                        type="checkbox"
                        checked={floating}
                        onChange={handleFloatingChange}
                    />
                    Enable Floating
                </label>
            </div>

            <RichTextEditorUIComponent
                ref={editorRef}
                toolbarSettings={toolbarSettings}
