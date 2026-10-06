import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RichTextEditorUIModule, RichTextEditorUIComponent, UpdatedToolbarStatusEventArgs } from '@syncfusion/ej2-angular-richtexteditor-ui';

@Component({
    imports: [RichTextEditorUIModule],
    standalone: true,
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html'
})
export class App implements AfterViewInit {
    @ViewChild('editor') public rteObj!: RichTextEditorUIComponent;

    public eventLog: string = 'Action: Click or type inside the editor to see active toolbar status...';

    public toolbarSettings: object = {
        items: ['Bold', 'Italic', 'Underline', 'Strikethrough', '|', 'Formats', 'Alignment', 'BulletList', 'NumberedList', '|', 'Link', 'Image', 'Table', '|', 'Undo', 'Redo']
    };

    ngAfterViewInit(): void {
        // This event fires whenever the cursor moves or text formatting changes
        this.rteObj.toolbarSettings = this.toolbarSettings;
        (this.rteObj.toolbarSettings as any).updatedToolbarStatus = (args: UpdatedToolbarStatusEventArgs) => {
            if (args) {
                const activeMarks: any = (args as any).activeMarks || {};
                // Format a simple readable string for beginners to see what is active
                if (activeMarks.bold && activeMarks.italic) {
                    this.eventLog = 'Active Formats: Both Bold and Italic format is active';
                } else if (activeMarks.bold) {
                    this.eventLog = 'Active Formats: Bold format is active';
                } else if (activeMarks.italic) {
                    this.eventLog = 'Active Formats: Italic format is active';
                } else {
                    this.eventLog = 'Active Formats: Neither Bold nor Italic is active';
                }
            }
        };
    }
}
