import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI( {
    // The destroyed event fires after the component is removed from the application
    destroyed: () => {
        const logElement: HTMLElement = document.getElementById('event-log') as HTMLElement;
        if (logElement) {
            // Inform the user that cleanup tasks are executing or complete
            logElement.innerText = 'Action: Editor has been destroyed and resources are cleared!';
        }
    }
});
editor.appendTo( '#editor' );

document.getElementById('destroy-btn').addEventListener('click', () => {
    if (editor) {
        editor.destroy();
    }
});
