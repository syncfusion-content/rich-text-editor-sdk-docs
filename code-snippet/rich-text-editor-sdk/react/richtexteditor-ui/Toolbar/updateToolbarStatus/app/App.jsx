import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

function App() {
    const [eventStatus, setEventStatus] = React.useState('');

    const handleUpdatedToolbarStatus = () => {
        const timestamp = new Date().toLocaleTimeString();
        setEventStatus(`Toolbar status updated at ${timestamp}`);
    };

    return (
        <div className="container">
            <RichTextEditorUIComponent
                toolbarSettings={{
                    items: [
                        'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
                        'BulletList', 'NumberedList', '|',
                        'Undo', 'Redo'
                    ]
                }}
                placeholder='Use toolbar buttons to trigger updateToolbarStatus event...'
                updatedToolbarStatus={handleUpdatedToolbarStatus}
            />
            <div className="event-status">
                {eventStatus || 'No toolbar status update yet'}
            </div>
        </div>
    );
}

export default App;
