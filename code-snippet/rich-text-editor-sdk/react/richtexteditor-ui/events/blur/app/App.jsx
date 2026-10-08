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

    const handleBlur = () => {
        setEventStatus('Editor lost focus (blur event triggered)');
    };

    const handleFocus = () => {
        setEventStatus('Editor received focus (focus event triggered)');
    };

    return (
        <div className="container">
            <RichTextEditorUIComponent
                toolbarSettings={toolbarSettings}
                placeholder='Click to focus or click outside to blur...'
                blur={handleBlur}
                focus={handleFocus}
            />
            <div className="event-status">
                {eventStatus || 'No event triggered yet'}
            </div>
        </div>
    );
}

export default App;
