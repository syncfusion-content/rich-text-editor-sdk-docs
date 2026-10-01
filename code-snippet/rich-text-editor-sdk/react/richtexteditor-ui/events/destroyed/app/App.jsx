import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

function App() {
    const [eventStatus, setEventStatus] = React.useState('');

    const handleDestroyed = () => {
        setEventStatus(`Editor component destroyed at ${new Date().toLocaleTimeString()}`);
    };

    return (
        <div className="container">
            <RichTextEditorUIComponent
                toolbarSettings={{
                    items: [
                        'Bold', 'Italic', 'Underline', '|',
                        'BulletList', 'NumberedList', '|',
                        'Undo', 'Redo'
                    ]
                }}
                placeholder='Type something...'
                destroyed={handleDestroyed}
            />
            <div className="event-status">
                {eventStatus || 'Editor component active'}
            </div>
        </div>
    );
}

export default App;
