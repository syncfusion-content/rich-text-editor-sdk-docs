import { RichTextEditorUI, ChangeEventArgs } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    change: (args: ChangeEventArgs) => {
        const logElement: HTMLElement = document.getElementById('event-log') as HTMLElement;
        const nodeElement: HTMLElement = document.getElementById('affected-node') as HTMLElement;
        if (logElement && nodeElement) {
            // 1. Display the type of action performed (e.g., "Insertion")
            logElement.innerText = `Action: ${args.action || 'Modified'}`;
            // 2. Extract and display the tag/type of the affected node (e.g., "paragraph")
            if (args.affectedNodes && args.affectedNodes.length > 0) {
                const primaryNode: any = args.affectedNodes[0];
                nodeElement.innerText = `Affected Element: <${primaryNode.type}>`;
            } else {
                nodeElement.innerText = 'Affected Element: None';
            }
        }
    }
});

editor.appendTo('#editor');