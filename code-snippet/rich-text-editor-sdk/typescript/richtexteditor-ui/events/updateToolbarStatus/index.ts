import { RichTextEditorUI, UpdatedToolbarStatusEventArgs } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI( {
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', 'Strikethrough', '|', 'Formats', 'Alignment', 'BulletList', 'NumberedList', '|', 'Link', 'Image', 'Table', '|', 'Undo', 'Redo'],
        // This event fires whenever the cursor moves or text formatting changes
        updatedToolbarStatus: (args: UpdatedToolbarStatusEventArgs) => {
            const logElement: HTMLElement = document.getElementById('event-log') as HTMLElement;
            if (logElement && args) {
                // Extract some basic formatting properties from the event arguments
                const activeMarks: any = (args as UpdatedToolbarStatusEventArgs).activeMarks || [];
                // Format a simple readable string for beginners to see what is active
                if ((activeMarks as any).bold && (activeMarks as any).italic) {
                    logElement.innerHTML = '<strong>Active Formats:</strong> Both Bold and Italic format is active';
                }else if ((activeMarks as any).bold) {
                    logElement.innerHTML = '<strong>Active Formats:</strong> Bold format is active';
                } else if ((activeMarks as any).italic) {
                    logElement.innerHTML = '<strong>Active Formats:</strong> Italic format is active';
                } else {
                    logElement.innerHTML = '<strong>Active Formats:</strong> Neither Bold nor Italic is active';
                }
            }
        }
    }
});

editor.appendTo('#editor');