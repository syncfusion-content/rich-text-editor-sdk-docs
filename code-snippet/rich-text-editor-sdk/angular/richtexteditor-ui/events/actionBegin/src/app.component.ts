import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextEditorUIModule, RichTextEditorUIComponent } from '@syncfusion/ej2-angular-richtexteditor-ui';

interface LogRow {
    timestamp: string;
    eventName: string;
    action: string;
    color: string;
}

@Component({
    imports: [CommonModule, RichTextEditorUIModule],
    standalone: true,
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html'
})
export class App implements AfterViewInit {
    @ViewChild('editor') public rteObj!: RichTextEditorUIComponent;

    public logs: LogRow[] = [];
    public showEmpty: boolean = true;

    ngAfterViewInit(): void {
        // Triggers BEFORE an action takes place (e.g., formatting, inserting images, typing)
        this.rteObj.actionBegin = (args: any) => {
            this.logToConsole('actionBegin', args.action, '#d9534f'); // Highlighted in Red
        };
    }

    private logToConsole(eventName: string, requestType: string | undefined, color: string): void {
        // Hide the placeholder text once the first event fires
        this.showEmpty = false;
        const timestamp: string = new Date().toLocaleTimeString();
        const actionLabel: string = requestType ? requestType : 'Generic Action';
        this.logs = [{ timestamp, eventName, action: actionLabel, color }, ...this.logs];
    }

    public clearLogs(): void {
        this.logs = [];
        this.showEmpty = true;
    }
}
