import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

const toolbarSettings = {
    items: [
        'Bold', 'Italic', 'Underline', '|',
        'BulletList', 'NumberedList', '|',
        'Undo', 'Redo'
    ]
};

function App() {
    const [eventStatus, setEventStatus] = React.useState('');

    const handleCreated = () => {
        setEventStatus(`Editor component created at ${new Date().toLocaleTimeString()}`);
    };

    return (
        <div className="container">
            <RichTextEditorUIComponent
                toolbarSettings={toolbarSettings}
                placeholder='Editor initialized...'
                created={handleCreated}
            />
            <div className="event-status">
                {eventStatus || 'Waiting for created event...'}
            </div>
        </div>
    );
}

export default App;
