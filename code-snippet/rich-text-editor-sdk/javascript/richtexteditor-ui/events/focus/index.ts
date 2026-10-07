import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI( {
    // Raised when the editor receives focus
    focus: () => {
        logEvent('[focus event]: Editor focused.');
    },
    // Raised when the editor loses focus
    blur: () => {
        logEvent('[blur event]: Editor lost focus. Click inside the Editor to focus again.');
    }
});
editor.appendTo( '#editor' );

// Helper function to update the event log in the HTML UI
function logEvent(message: string): void {
    const logElement: HTMLElement = document.getElementById('event-log') as HTMLElement;
    if (logElement) {
        logElement.innerText = message;
    }
}
