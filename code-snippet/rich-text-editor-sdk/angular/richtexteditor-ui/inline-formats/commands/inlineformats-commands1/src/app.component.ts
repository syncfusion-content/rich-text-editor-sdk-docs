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

    public placeholder: string = 'Type something ...';
    public toolbarSettings: object = {
        items: [
            'Bold', 'Italic', 'Underline', 'Strikethrough',
            '|',
            'FontSize', 'FontName', 'FontColor', 'BackgroundColor',
            '|',
            'InlineCode', 'ClearFormat'
        ]
    };

    public applyBold(): void { this.rteObj.commands().bold().apply(); }
    public applyUnderline(): void { this.rteObj.commands().underline().apply(); }
    public applyFontSize(): void { this.rteObj.commands().fontSize().size('18px').apply(); }
    public applyFontColor(): void { this.rteObj.commands().fontColor().color('#00A3FF').apply(); }
    public applyHighlight(): void { this.rteObj.commands().backgroundColor().color('#FFF7C7').apply(); }
    public applyClearFormat(): void { this.rteObj.commands().clearFormat().apply(); }
}
