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
        // The destroyed event fires after the component is removed from the application
        this.rteObj.destroyed = () => {
            // Inform the user that cleanup tasks are executing or complete
            this.eventLog = 'Action: Editor has been destroyed and resources are cleared!';
        };
    }

    public destroy(): void {
        if (this.rteObj) {
            this.rteObj.destroy();
        }
    }
}
