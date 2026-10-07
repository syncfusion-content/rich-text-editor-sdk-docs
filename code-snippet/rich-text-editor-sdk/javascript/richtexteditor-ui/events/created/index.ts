import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    // The created event fires immediately after the component is rendered
    created: () => {
        const logElement: HTMLElement = document.getElementById('event-log') as HTMLElement;
        if (logElement) {
            // Update the UI text to tell a new user that the component is fully ready
            logElement.innerText = 'Action: Editor is ready for input!';
        }
    }
});

editor.appendTo('#editor');
