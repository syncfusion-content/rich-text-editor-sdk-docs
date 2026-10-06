import { Component } from '@angular/core';
import { RichTextEditorUIModule, SlashCommandService } from '@syncfusion/ej2-angular-richtexteditor-ui';

@Component({
    imports: [RichTextEditorUIModule],
    standalone: true,
    selector: 'app-root',
    providers: [SlashCommandService],
    templateUrl: './app.component.html'
})
export class App {
    public toolbarSettings: object = {
        items: ['FontColor', 'BackgroundColor']
    };
    public fontColor: object = {
        default: '#DC2626',
        mode: 'Palette',
        columns: 5,
        modeSwitcher: true
    };
    public backgroundColor: object = {
        default: '#FFF7C7',
        mode: 'Picker',
        columns: 5,
        modeSwitcher: false
    };
}
