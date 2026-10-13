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

    const handleFocus = () => {
        setEventStatus(`Focus event triggered at ${new Date().toLocaleTimeString()}`);
    };

    return (
        <div className="container">
            <RichTextEditorUIComponent
                toolbarSettings={toolbarSettings}
                placeholder='Click in the editor to trigger focus event...'
                focus={handleFocus}
            />
            <div className="event-status">
                {eventStatus || 'No focus event yet'}
            </div>
        </div>
    );
}

export default App;
