import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

const toolbarSettings = {
    items: [
        'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
        'BulletList', 'NumberedList', '|',
        'Undo', 'Redo'
    ]
};

function App() {
    const [eventLog, setEventLog] = React.useState('');

    const handleActionComplete = (args: any) => {
        const timestamp = new Date().toLocaleTimeString();
        const logEntry = `[${timestamp}] Action Complete: ${args.action || 'Unknown'}`;
        setEventLog(logEntry);
    };

    return (
        <div className="container">
            <RichTextEditorUIComponent
                toolbarSettings={toolbarSettings}
                placeholder='Perform actions to trigger actionComplete events...'
                actionComplete={handleActionComplete}
            />
            <div className="event-log">
                {eventLog || 'No action complete event yet'}
            </div>
        </div>
    );
}

export default App;
