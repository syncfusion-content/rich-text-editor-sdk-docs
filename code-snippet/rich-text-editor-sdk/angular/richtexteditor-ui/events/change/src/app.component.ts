import { Component } from '@angular/core';
import { RichTextEditorUIModule, ChangeEventArgs } from '@syncfusion/ej2-angular-richtexteditor-ui';

@Component({
    imports: [RichTextEditorUIModule],
    standalone: true,
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html'
})
export class App {
    public eventLog: string = 'Action: Waiting for input...';
    public affectedNode: string = 'Affected Element: None';

    public onChange(args: ChangeEventArgs): void {
        // 1. Display the type of action performed (e.g., "Insertion")
        this.eventLog = `Action: ${args.action || 'Modified'}`;
        // 2. Extract and display the tag/type of the affected node (e.g., "paragraph")
        if (args.affectedNodes && args.affectedNodes.length > 0) {
            const primaryNode: any = args.affectedNodes[0];
            this.affectedNode = `Affected Element: <${primaryNode.type}>`;
        } else {
            this.affectedNode = 'Affected Element: None';
        }
    }
}
