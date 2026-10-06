import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RichTextEditorUIModule, RichTextEditorUIComponent } from '@syncfusion/ej2-angular-richtexteditor-ui';

@Component({
    imports: [RichTextEditorUIModule],
    standalone: true,
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html'
})
export class App implements AfterViewInit {
    @ViewChild('editor') public rteObj!: RichTextEditorUIComponent;

    public eventLog: string = 'Action: Waiting for input...';

    ngAfterViewInit(): void {
        // The created event fires immediately after the component is rendered
        this.rteObj.created = () => {
            // Update the UI text to tell a new user that the component is fully ready
            this.eventLog = 'Action: Editor is ready for input!';
        };
    }
}
