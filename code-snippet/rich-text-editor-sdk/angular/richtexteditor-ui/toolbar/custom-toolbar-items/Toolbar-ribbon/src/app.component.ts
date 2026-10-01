import { Component, ViewChild } from '@angular/core';
import { RichTextEditorUIModule, RichTextEditorUIComponent } from '@syncfusion/ej2-angular-richtexteditor-ui';

@Component({
    imports: [RichTextEditorUIModule],
    standalone: true,
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html'
})
export class App {
    @ViewChild('editor') public rteObj!: RichTextEditorUIComponent;

    public toolbarSettings: object = {
        enable: false
    };

    public applyBold(): void { this.rteObj.commands().bold().apply(); }
    public applyItalic(): void { this.rteObj.commands().italic().apply(); }
    public applyUnderline(): void { this.rteObj.commands().underline().apply(); }
    public applyHeading(event: Event): void {
        const value: string = (event.target as HTMLSelectElement).value;
        if (value === 'paragraph') {
            this.rteObj.commands().paragraph().apply();
        } else if (value === 'heading1') {
            this.rteObj.commands().heading1().apply();
        } else if (value === 'heading2') {
            this.rteObj.commands().heading2().apply();
        } else if (value === 'heading3') {
            this.rteObj.commands().heading3().apply();
        }
    }
    public applyColor(event: Event): void {
        this.rteObj.commands().fontColor().color((event.target as HTMLInputElement).value).apply();
    }
}
