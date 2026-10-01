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

    public eventLog: string = 'Click inside the editor to trigger the focus event...';

    ngAfterViewInit(): void {
        // Raised when the editor receives focus
        this.rteObj.focus = () => {
            this.eventLog = '[focus event]: Editor focused.';
        };
        // Raised when the editor loses focus
        this.rteObj.blur = () => {
            this.eventLog = '[blur event]: Editor lost focus. Click inside the Editor to focus again.';
        };
    }
}
