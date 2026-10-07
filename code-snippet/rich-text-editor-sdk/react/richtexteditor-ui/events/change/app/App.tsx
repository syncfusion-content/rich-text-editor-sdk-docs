import * as React from 'react';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';

function App() {
    const [eventLog, setEventLog] = React.useState<string>('');

    const handleChange = (args: any) => {
        const action = args.action || 'Unknown';
        const affectedNodes = args.affectedNodes || [];
        const nodeType = affectedNodes.length > 0 && affectedNodes[0].type 
            ? affectedNodes[0].type 
            : 'None';
        
        const logEntry = `Action: ${action} | Affected Node: ${nodeType}`;
        setEventLog(logEntry);
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
                placeholder='Type to track content changes...'
                change={handleChange}
            />
            <div className="event-log">
                <div>{eventLog || 'No changes detected yet'}</div>
            </div>
        </div>
    );
}

export default App;
