import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';


const editor: RichTextEditorUI = new RichTextEditorUI( {
    // Triggers AFTER an action successfully completes
    actionComplete: (args: any) => {
        logToConsole('actionComplete', args.action, '#5cb85c'); // Highlighted in Green
    }
});
editor.appendTo( '#editor' );

function logToConsole(eventName: string, requestType: string | undefined, color: string): void {
    const logContainer: HTMLElement = document.getElementById('log-container') as HTMLElement;
    const emptyMessage: HTMLElement = document.getElementById('empty-message') as HTMLElement;
    if (!logContainer) { return; }
    // Hide the placeholder text once the first event fires
    if (emptyMessage) {
        emptyMessage.style.display = 'none';
    }
    const timestamp: any = new Date().toLocaleTimeString();
    const actionLabel: any = requestType ? requestType : 'Generic Action';
    // Create log row element
    const logRow: HTMLElement = document.createElement('div');
    logRow.style.marginBottom = '6px';
    logRow.style.borderLeft = `3px solid ${color}`;
    logRow.style.paddingLeft = '8px';
    logRow.innerHTML = `<strong style="color: ${color}">[${timestamp}] ${eventName}</strong> — <em>Action:</em> ${actionLabel}`;
    // Insert new logs at the top of the logging stream
    logContainer.insertBefore(logRow, logContainer.firstChild);
}

// Clear button logic to wipe console history clean
document.getElementById('clear-btn')?.addEventListener('click', () => {
    const logContainer: HTMLElement = document.getElementById('log-container') as HTMLElement;
    if (logContainer) {
        logContainer.innerHTML = '<div id="empty-message" style="color: #999; font-style: italic;">No events captured yet. Try typing or formatting some text inside the editor...</div>';
    }
});
