import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

function App() {
    const [logs, setLogs] = React.useState<string[]>([]);

    const handleActionBegin = (args: any) => {
        const timestamp = new Date().toLocaleTimeString();
        const logEntry = `[${timestamp}] Action: ${args.action || 'Unknown'}`;
        setLogs([logEntry, ...logs.slice(0, 49)]);
    };

    const clearLogs = () => {
        setLogs([]);
    };

    return (
        <div className="event-container">
            <div>
                <RichTextEditorUIComponent
                    toolbarSettings={{
                        items: [
                            'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
                            'BulletList', 'NumberedList', '|',
                            'Link', 'Image', 'Table', '|',
                            'Undo', 'Redo'
                        ]
                    }}
                    placeholder='Type something to trigger actionBegin events...'
                    actionBegin={handleActionBegin}
                />
            </div>
            <div>
                <button onClick={clearLogs}>Clear Logs</button>
                <div className="event-log">
                    {logs.map((log, index) => (
                        <div key={index} className="event-row">
                            {log}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
